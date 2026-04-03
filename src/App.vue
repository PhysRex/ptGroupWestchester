<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import SiteNavbar from './components/layout/SiteNavbar.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import AppointmentCTA from './components/layout/AppointmentCTA.vue'
import AdminBar from './components/admin/AdminBar.vue'
import AdminPanel from './components/admin/AdminPanel.vue'
import { useAdminStore } from './stores/admin'

const admin = useAdminStore()

onMounted(() => {
  // Check URL param
  const params = new URLSearchParams(window.location.search)
  if (params.get('admin') === 'true') {
    admin.activate()
  }

  // Listen for footer triple-click trigger
  window.addEventListener('admin-toggle', () => {
    admin.toggle()
  })
})
</script>

<template>
  <div class="grain-overlay min-h-screen flex flex-col">
    <AdminBar />
    <div :class="{ 'mt-10': admin.isActive }">
      <SiteNavbar />
      <main class="flex-1">
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
      <SiteFooter />
    </div>
    <AppointmentCTA />
    <AdminPanel />
  </div>
</template>
