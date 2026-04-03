import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let intersectionObserver: IntersectionObserver | null = null
  let mutationObserver: MutationObserver | null = null

  function observeNewElements() {
    document.querySelectorAll('.reveal:not(.revealed), .gold-rule:not(.revealed)').forEach((el) => {
      intersectionObserver?.observe(el)
    })
  }

  onMounted(() => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            intersectionObserver?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observeNewElements()

    // Watch for DOM changes (e.g. v-for re-renders after search filtering)
    mutationObserver = new MutationObserver(() => {
      observeNewElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })

  onUnmounted(() => {
    intersectionObserver?.disconnect()
    mutationObserver?.disconnect()
  })
}
