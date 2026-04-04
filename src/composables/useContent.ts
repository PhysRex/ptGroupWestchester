import { useAdminStore, type ContentFile } from '../stores/admin'
import siteData from '../content/site.json'
import homeData from '../content/home.json'
import teamData from '../content/team.json'
import servicesData from '../content/services.json'
import formsData from '../content/forms.json'
import testimonialsData from '../content/testimonials.json'

type SiteContent = typeof siteData
type HomeContent = typeof homeData
type TeamContent = typeof teamData
type ServicesContent = typeof servicesData
type FormsContent = typeof formsData
type TestimonialsContent = typeof testimonialsData

export function useSiteContent() {
  return useContentFile<SiteContent>('site')
}

export function useHomeContent() {
  return useContentFile<HomeContent>('home')
}

export function useTeamContent() {
  return useContentFile<TeamContent>('team')
}

export function useServicesContent() {
  return useContentFile<ServicesContent>('services')
}

export function useFormsContent() {
  return useContentFile<FormsContent>('forms')
}

export function useTestimonialsContent() {
  return useContentFile<TestimonialsContent>('testimonials')
}

function useContentFile<T>(file: ContentFile): T {
  const admin = useAdminStore()
  return admin.getContent(file) as T
}
