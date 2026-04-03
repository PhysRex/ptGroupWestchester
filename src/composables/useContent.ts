import siteData from '../content/site.json'
import homeData from '../content/home.json'
import teamData from '../content/team.json'
import servicesData from '../content/services.json'
import formsData from '../content/forms.json'
import testimonialsData from '../content/testimonials.json'

export function useSiteContent() {
  return siteData
}

export function useHomeContent() {
  return homeData
}

export function useTeamContent() {
  return teamData
}

export function useServicesContent() {
  return servicesData
}

export function useFormsContent() {
  return formsData
}

export function useTestimonialsContent() {
  return testimonialsData
}
