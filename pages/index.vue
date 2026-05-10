<script setup lang="ts">
const { lang } = useLang()

useHead({
  title: 'Siflab — Workshop of quiet craft'
})

useReveal()
</script>

<template>
  <div>
    <header class="hero" id="top">
      <div class="hero-rune-bg">ᛋ</div>

      <div class="hero-meta">
        <span><span class="rune">ᚠ</span>siflab · EST. MMXXIV</span>
        <span v-if="lang === 'ko'">작은 공방, 긴 시간</span>
        <span v-else>A small workshop, a long arc</span>
      </div>

      <div class="hero-content">
        <div class="hero-overline">
          <span v-if="lang === 'ko'">황금 수확의 여신을 따라</span>
          <span v-else>Named after the goddess of golden harvest</span>
        </div>
        <h1 class="hero-title reveal">
          <template v-if="lang === 'ko'">
            조용히<br><em>오래가는 것</em>을<br><span class="small">만듭니다</span>
          </template>
          <template v-else>
            We craft<br><em>things that last</em>,<br><span class="small">quietly.</span>
          </template>
        </h1>
      </div>

      <div class="hero-bottom">
        <p class="hero-lead reveal delay-1">
          <template v-if="lang === 'ko'">
            siflab은 북유럽 신화의 <em>Sif</em>에서 이름을 빌렸습니다. 풍요와 가족, 그리고 <em>황금빛 머리카락</em>의 여신. 오래 지속되는 것을 짓는 손의 은유입니다.
          </template>
          <template v-else>
            siflab takes its name from <em>Sif</em>, Norse goddess of harvest, hearth, and <em>golden hair</em> — a metaphor for hands that build to endure.
          </template>
        </p>

        <div class="hero-center-rune reveal delay-2">
          <span class="char">ᛉ</span>
          <span class="line"></span>
        </div>

        <div class="hero-right reveal delay-3">
          <div class="seoul">Seoul · 37.5°N</div>
          <div v-if="lang === 'ko'">독립 스튜디오 · 2026</div>
          <div v-else>Independent studio · 2026</div>
        </div>
      </div>
    </header>

    <section id="about">
      <div class="section-label">
        I <span v-if="lang === 'ko'">· 신화와 이름</span><span v-else>· The Myth</span>
      </div>

      <div class="about-grid">
        <div class="about-myth reveal">
          <div class="myth-title">From the Prose Edda</div>
          <p class="myth-text" v-if="lang === 'ko'">
            황금빛 머리카락을 가진 Sif는 대지와 가족의 여신입니다. 그녀의 머리카락은 <em>가을의 밀밭</em>이 되고, 그녀의 손길이 닿은 땅은 해마다 수확을 맺습니다.
          </p>
          <p class="myth-text" v-else>
            Sif of the golden hair, goddess of earth and hearth. Her hair is the <em>autumn wheat</em>, and every field she touches bears a harvest, year after year.
          </p>

          <div class="myth-quote" v-if="lang === 'ko'">"짓는 것은 시간에<br>맡기는 일이다."</div>
          <div class="myth-quote" v-else>"To build is to<br>entrust yourself to time."</div>
        </div>

        <div class="reveal delay-1">
          <h2 class="about-heading">
            <template v-if="lang === 'ko'"><em>천천히</em>,<br><em>정직하게</em>,<br>길게.</template>
            <template v-else><em>Slow</em>.<br><em>Honest</em>.<br>Long-lasting.</template>
          </h2>
          <div class="about-body" v-if="lang === 'ko'">
            <p>siflab은 한 명의 개발자로 시작한 작은 공방입니다. 우리는 <strong>큰 것을 빠르게</strong> 만들지 않습니다. 대신 <strong>작은 것을 오래</strong> 고쳐갑니다.</p>
            <p>트렌드보다는 <strong>우리가 직접 겪은 문제</strong>를 따라갑니다. 그 문제가 구체적일수록, 비슷한 문제를 가진 누군가가 자연스럽게 찾아옵니다.</p>
            <p>만든 것은 버리지 않습니다. 유저가 한 명이라도 남아 있다면, 우리는 여전히 그것을 책임집니다.</p>
          </div>
          <div class="about-body" v-else>
            <p>siflab is a workshop of one. We do not build <strong>big things quickly</strong> — we refine <strong>small things, over years</strong>.</p>
            <p>We follow problems we have lived ourselves, not market trends. The more specific the problem, the more naturally a community forms around it.</p>
            <p>We don't abandon what we make. If one user remains, we are still responsible for it.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="works" class="works">
      <div class="works-inner">
        <div class="section-label">
          II <span v-if="lang === 'ko'">· 지금 짓고 있는 것</span><span v-else>· Currently Forging</span>
        </div>

        <h2 class="works-heading reveal">
          <template v-if="lang === 'ko'">
            지금은 <em>세 갈래</em>의 작업이<br>공방에 놓여 있습니다.
          </template>
          <template v-else>
            Three threads of work currently<br>rest on our bench.
          </template>
        </h2>

        <a href="https://loavesting.com" target="_blank" rel="noopener" class="work is-link">
          <div class="work-index">ᚠ · 001</div>
          <div class="work-type">
            <span v-if="lang === 'ko'">웹 · 유틸리티</span>
            <span v-else>Web · Utility</span>
          </div>
          <div class="work-body">
            <div class="work-name"><em>Loavesting</em></div>
            <p class="work-desc" v-if="lang === 'ko'">로스트아크 유저를 위한 재련 견적 계산기. 정확한 기댓값과 매일 쓰기 좋은 흐름으로, 커뮤니티가 오래 찾는 도구.</p>
            <p class="work-desc" v-else>A refinement calculator for Lost Ark players. Precise expected values, daily-friendly flow — a tool the community returns to.</p>
          </div>
          <div class="work-arrow">→</div>
        </a>

        <div class="work">
          <div class="work-index">ᚢ · 002</div>
          <div class="work-type">
            <span v-if="lang === 'ko'">모바일 · 소셜</span>
            <span v-else>Mobile · Social</span>
          </div>
          <div class="work-body">
            <div class="work-name"><em>Feeder</em></div>
            <p class="work-desc" v-if="lang === 'ko'">익명으로 연결되는 작은 아지트. 사진, 짧은 영상, 목소리로 부담 없이 주고받는 대화.</p>
            <p class="work-desc" v-else>A quiet haven for anonymous connection — photos, short clips, voices, exchanged without weight.</p>

            <div class="work-stores">
              <a
                href="#feeder-ios"
                class="store-badge"
                aria-label="Download Feeder on the App Store"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.02zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span class="label">
                  <small v-if="lang === 'ko'">다운로드</small>
                  <small v-else>Download on</small>
                  <span>App Store</span>
                </span>
              </a>
              <a
                href="#feeder-android"
                class="store-badge"
                aria-label="Get Feeder on Google Play"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814 13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734c0-.378.225-.715.609-.92zM14.5 12.707l2.731 2.732-10.5 6.063 7.769-8.795zM18.5 9.41l2.353 1.36c.838.485.838 1.954 0 2.439L18.5 14.575 15.5 12 18.5 9.41zM6.731 2.498l10.5 6.063L14.5 11.293 6.731 2.498z" />
                </svg>
                <span class="label">
                  <small v-if="lang === 'ko'">다운로드</small>
                  <small v-else>Get it on</small>
                  <span>Google Play</span>
                </span>
              </a>
            </div>
          </div>
          <div class="work-cta" aria-hidden="true"></div>
        </div>

        <NuxtLink to="/solutions" class="work is-link">
          <div class="work-index">ᚦ · 003</div>
          <div class="work-type">
            <span v-if="lang === 'ko'">어시스턴트 · 솔루션</span>
            <span v-else>Assistant · Solution</span>
          </div>
          <div class="work-body">
            <div class="work-name"><em>Assistant Solutions</em></div>
            <p class="work-desc" v-if="lang === 'ko'">엑셀과 수기로 쌓아둔 현장의 기록을, 손에 익은 흐름 그대로 디지털로 옮기는 작은 솔루션 시리즈.</p>
            <p class="work-desc" v-else>A small series that lifts Excel-and-paper field workflows into digital tools — without breaking the rhythm hands already know.</p>
          </div>
          <div class="work-arrow">→</div>
        </NuxtLink>
      </div>
    </section>

    <section id="principles">
      <div class="section-label">
        III <span v-if="lang === 'ko'">· 공방의 신조</span><span v-else>· Workshop Commandments</span>
      </div>

      <h2 class="about-heading reveal" style="max-width: 800px;">
        <template v-if="lang === 'ko'"><em>믿는 것</em>,<br>그리고 만들지 <em>않는 것</em>.</template>
        <template v-else>What we <em>believe</em>,<br>and what we will <em>not</em> make.</template>
      </h2>

      <div class="principles-grid">
        <div class="principle reveal">
          <div class="principle-rune">ᚠ</div>
          <h3 class="principle-title">
            <template v-if="lang === 'ko'">필요하면 <em>오래 쓴다</em></template>
            <template v-else>Kept, not <em>abandoned</em></template>
          </h3>
          <p class="principle-body" v-if="lang === 'ko'">한 번 만든 제품은 함부로 버리지 않습니다. 유저가 한 명이라도 남아 있다면, 그것은 여전히 우리의 책임입니다.</p>
          <p class="principle-body" v-else>Whatever we make, we keep. If one user remains, that product is still ours to maintain.</p>
        </div>

        <div class="principle reveal delay-1">
          <div class="principle-rune">ᚢ</div>
          <h3 class="principle-title">
            <template v-if="lang === 'ko'">크기보다 <em>밀도</em></template>
            <template v-else>Density over <em>scale</em></template>
          </h3>
          <p class="principle-body" v-if="lang === 'ko'">기능을 많이 붙이는 것보다 하나를 정확하게 하는 것. 무게는 코드가 아니라 약속에서 옵니다.</p>
          <p class="principle-body" v-else>Doing one thing accurately beats adding many. Weight comes from promises, not code.</p>
        </div>

        <div class="principle reveal delay-2">
          <div class="principle-rune">ᚦ</div>
          <h3 class="principle-title">
            <template v-if="lang === 'ko'">유저는 <em>숫자가 아니다</em></template>
            <template v-else>Users are <em>not numbers</em></template>
          </h3>
          <p class="principle-body" v-if="lang === 'ko'">DAU, 리텐션, 전환율은 도구일 뿐입니다. 누가 어떻게 쓰는지 직접 보고, 듣고, 답합니다.</p>
          <p class="principle-body" v-else>DAU, retention, conversion — all tools. We see, hear, and answer the humans behind the data.</p>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact-rune-bg">ᛏ</div>
      <div class="contact-content">
        <div class="contact-overline">
          IV <span v-if="lang === 'ko'">· 연락</span><span v-else>· Contact</span>
        </div>
        <h2 class="contact-heading reveal">
          <template v-if="lang === 'ko'">함께 이야기하고 싶은<br><em>작은 아이디어</em>가 있나요?</template>
          <template v-else>Have a <em>small idea</em><br>worth sharing?</template>
        </h2>
        <a href="mailto:doombtter@gmail.com" class="contact-email reveal delay-1">
          <span>doombtter@gmail.com</span>
          <span class="contact-arrow">→</span>
        </a>
      </div>
    </section>
  </div>
</template>
