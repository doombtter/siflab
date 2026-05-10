<script setup lang="ts">
const { lang } = useLang()
</script>

<template>
  <footer class="site-footer">
    <div>
      <span class="live-dot"></span>
      <span v-if="lang === 'ko'">Seoul, KR에서 보내는 중 · 37.5°N</span>
      <span v-else>Broadcasting from Seoul, KR · 37.5°N</span>
    </div>

    <div class="footer-stores">
      <a
        href="https://apps.apple.com/kr/app/id6762005626"
        target="_blank"
        rel="noopener"
        class="footer-store"
        aria-label="Download Feeder on the App Store"
        title="App Store"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.02zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.feeder.feeder"
        target="_blank"
        rel="noopener"
        class="footer-store"
        aria-label="Get Feeder on Google Play"
        title="Google Play"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.609 1.814 13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734c0-.378.225-.715.609-.92zM14.5 12.707l2.731 2.732-10.5 6.063 7.769-8.795zM18.5 9.41l2.353 1.36c.838.485.838 1.954 0 2.439L18.5 14.575 15.5 12 18.5 9.41zM6.731 2.498l10.5 6.063L14.5 11.293 6.731 2.498z" />
        </svg>
      </a>
    </div>

    <div>
      © MMXXVI siflab <span class="rune">ᛋ</span>
      <span v-if="lang === 'ko'">정성으로 지음</span>
      <span v-else>Crafted with care</span>
    </div>
  </footer>
</template>
