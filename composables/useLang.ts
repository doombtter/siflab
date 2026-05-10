export type Lang = 'ko' | 'en'

export const useLang = () => {
  const lang = useState<Lang>('siflab-lang', () => 'ko')

  const setLang = (next: Lang) => {
    lang.value = next
    if (import.meta.client) {
      localStorage.setItem('siflab-lang', next)
      document.documentElement.setAttribute('lang', next)
    }
  }

  if (import.meta.client) {
    onMounted(() => {
      const saved = localStorage.getItem('siflab-lang')
      if (saved === 'ko' || saved === 'en') {
        lang.value = saved
        document.documentElement.setAttribute('lang', saved)
      } else {
        document.documentElement.setAttribute('lang', lang.value)
      }
    })
  }

  return { lang, setLang }
}
