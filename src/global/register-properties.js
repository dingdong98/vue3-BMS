import { formatUtc } from '@/utils/data-format'

export default function registerPropertise(app) {
  app.config.globalProperties.$filters = {
    formatTime(value) {
      return formatUtc(value)
    }
  }
}
