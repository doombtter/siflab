<script setup lang="ts">
const { lang, setLang } = useLang()
const route = useRoute()

const isOpen = ref(false)

const links = [
  { to: '/#about', ko: '소개', en: 'About', code: 'I' },
  { to: '/#works', ko: '작업', en: 'Works', code: 'II' },
  { to: '/solutions', ko: '솔루션', en: 'Solutions', code: 'III' },
  { to: '/#contact', ko: '연락', en: 'Contact', code: 'IV' }
]

const isActive = (to: string) => {
  if (to.startsWith('/#')) return route.path === '/'
  return route.path === to || route.path.startsWith(`${to}/`)
}

const closeMenu = () => {
  isOpen.value = false
}

watch(isOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <nav class="site-nav">
    <NuxtLink to="/" class="logo" @click="closeMenu">
      <span class="logo-rune">ᛋ</span>
      <span>SIFLAB</span>
    </NuxtLink>

    <div class="nav-links">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :class="{ 'is-active': isActive(link.to) }"
      >
        <span v-if="lang === 'ko'">{{ link.ko }}</span>
        <span v-else>{{ link.en }}</span>
      </NuxtLink>
      <div class="lang-toggle">
        <button :class="{ active: lang === 'ko' }" aria-label="한국어" @click="setLang('ko')">KO</button>
        <button :class="{ active: lang === 'en' }" aria-label="English" @click="setLang('en')">EN</button>
      </div>
    </div>

    <button
      class="nav-toggle"
      :class="{ 'is-open': isOpen }"
      :aria-expanded="isOpen"
      aria-label="Menu"
      @click="isOpen = !isOpen"
    >
      <span class="bar"></span>
    </button>

    <div class="mobile-menu" :class="{ 'is-open': isOpen }">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        @click="closeMenu"
      >
        <span v-if="lang === 'ko'">{{ link.ko }}</span>
        <span v-else>{{ link.en }}</span>
        <em>{{ link.code }}</em>
      </NuxtLink>
      <div class="lang-toggle">
        <button :class="{ active: lang === 'ko' }" @click="setLang('ko')">KO</button>
        <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
      </div>
    </div>
  </nav>
</template>
