import { PREFIX_STORAGE } from './constants'

export default {
  get: (key: string) => {
    const json = localStorage.getItem(PREFIX_STORAGE + key)
    if (json !== null) {
      // Verifica si json no es null
      try {
        return JSON.parse(json)
      } catch {
        return json
      }
    }
    // Retorna null si json es null
    return null
  },
  // Establece un nuevo elemento en localstora
  set: (key: string, value: any) => {
    localStorage.setItem(PREFIX_STORAGE + key, JSON.stringify(value))
  },
  // Remueve un elemento de localstorage
  remove: (key: string) => {
    localStorage.removeItem(PREFIX_STORAGE + key)
  }
}
