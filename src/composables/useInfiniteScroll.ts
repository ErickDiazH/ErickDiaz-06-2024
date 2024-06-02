import { ref, onMounted, onUnmounted } from 'vue'

const useInfiniteScroll = (loadMore: () => void) => {
  const scrollComponent = ref<HTMLElement | null>(null)

  const handleScroll = () => {
    if (!scrollComponent.value) return
    // cuando se llega al punto más bajo de la pantalla, se manda la nueva solicitud
    const element = scrollComponent.value
    // se redondea porque no siempre es exacto
    if (Math.round(element.getBoundingClientRect().bottom) <= window.innerHeight) {
      loadMore()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollComponent
  }
}

export default useInfiniteScroll
