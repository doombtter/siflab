<script setup lang="ts">
const { lang } = useLang()

useHead({
  title: 'Investors — siflab',
  meta: [
    {
      name: 'description',
      content:
        'siflab은 오래 가는 작은 제품을 짓는 독립 공방입니다. 함께 길게 걸을 투자자를 찾습니다.'
    }
  ]
})

useReveal()
</script>

<template>
  <main>
    <section class="solution-hero">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/">siflab</NuxtLink>
        <span class="sep">/</span>
        <span class="current" v-if="lang === 'ko'">투자자</span>
        <span class="current" v-else>Investors</span>
      </nav>

      <h1 class="solution-title reveal">
        <template v-if="lang === 'ko'">
          빠른 <em>엑싯</em>이 아니라,<br>
          오래 가는 <em>복리</em>를.
        </template>
        <template v-else>
          Not a fast <em>exit</em> —<br>
          a long <em>compounding</em>.
        </template>
      </h1>

      <p class="solution-lead reveal delay-1" v-if="lang === 'ko'">
        siflab은 한 명의 손에서 시작해 <em>오래 살아남는 작은 제품</em>을 짓는 독립 공방입니다. 우리는 한 번에 큰 것을 터뜨리기보다, 매년 조금씩 더 단단해지는 포트폴리오를 만듭니다. 같은 시간 감각을 가진 분과 길게 걷고 싶습니다.
      </p>
      <p class="solution-lead reveal delay-1" v-else>
        siflab is an independent workshop that builds <em>small products designed to outlast trends</em>. We don't chase one big breakout — we compound a portfolio that gets a little sturdier every year. We're looking for partners who share that sense of time.
      </p>

      <div class="solution-status-strip reveal delay-2">
        <span v-if="lang === 'ko'">설립 <strong>2024</strong></span>
        <span v-else>Founded <strong>2024</strong></span>
        <span v-if="lang === 'ko'">출시 제품 <strong>2</strong></span>
        <span v-else>Shipped products <strong>2</strong></span>
        <span v-if="lang === 'ko'">진행 솔루션 <strong>2</strong></span>
        <span v-else>Active solutions <strong>2</strong></span>
        <span v-if="lang === 'ko'">단계 <strong>프리시드</strong></span>
        <span v-else>Stage <strong>Pre-seed</strong></span>
      </div>
    </section>

    <section class="projects">
      <article class="project-card reveal">
        <div>
          <div class="project-meta">
            <span>ᚠ</span>
            <span class="pill" v-if="lang === 'ko'">투자 논점</span>
            <span class="pill" v-else>Thesis</span>
          </div>
          <h2 class="project-name">
            <template v-if="lang === 'ko'">왜 <em>siflab</em>인가</template>
            <template v-else>Why <em>siflab</em></template>
          </h2>
          <p class="project-desc" v-if="lang === 'ko'">
            우리는 직접 겪은 구체적인 문제만 따라갑니다. 문제가 좁고 분명할수록 경쟁은 적고, 한 번 자리 잡은 도구는 오래 남습니다. 버리지 않는다는 약속이 곧 해자입니다.
          </p>
          <p class="project-desc" v-else>
            We only chase specific problems we've lived. The narrower and clearer the problem, the thinner the competition — and tools that take root tend to stay. The promise never to abandon is itself the moat.
          </p>
        </div>

        <ul class="project-features">
          <li>
            <span class="ico">ᚠ</span>
            <div>
              <h4 v-if="lang === 'ko'">낮은 번레이트</h4>
              <h4 v-else>Low burn</h4>
              <p v-if="lang === 'ko'">작은 팀, 작은 고정비. 자본은 성장이 아니라 생존 시간을 사는 데 씁니다.</p>
              <p v-else>Small team, small fixed cost. Capital buys runway, not vanity growth.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚢ</span>
            <div>
              <h4 v-if="lang === 'ko'">다발 포트폴리오</h4>
              <h4 v-else>Portfolio of bets</h4>
              <p v-if="lang === 'ko'">B2C 유틸리티·소셜과 B2B 발주 솔루션을 동시에 굴립니다.</p>
              <p v-else>B2C utilities and social alongside commissioned B2B solutions.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚦ</span>
            <div>
              <h4 v-if="lang === 'ko'">매출 기반 검증</h4>
              <h4 v-else>Revenue-tested</h4>
              <p v-if="lang === 'ko'">발주를 받아 시작하는 솔루션은 첫날부터 수요가 검증됩니다.</p>
              <p v-else>Commissioned solutions arrive with demand validated from day one.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚨ</span>
            <div>
              <h4 v-if="lang === 'ko'">긴 보유</h4>
              <h4 v-else>Long hold</h4>
              <p v-if="lang === 'ko'">빠른 매각이 목표가 아닌, 해마다 단단해지는 자산을 지향합니다.</p>
              <p v-else>The goal isn't a quick sale but an asset that hardens each year.</p>
            </div>
          </li>
        </ul>
      </article>

      <article class="project-card reveal">
        <div>
          <div class="project-meta">
            <span>ᚢ</span>
            <span class="pill" v-if="lang === 'ko'">포트폴리오</span>
            <span class="pill" v-else>Portfolio</span>
          </div>
          <h2 class="project-name">
            <template v-if="lang === 'ko'">공방에 놓인 <em>작업</em></template>
            <template v-else>Work on the <em>bench</em></template>
          </h2>
          <p class="project-desc" v-if="lang === 'ko'">
            세 갈래의 작업이 동시에 굴러갑니다. 하나가 흔들려도 다른 축이 받칩니다.
          </p>
          <p class="project-desc" v-else>
            Three threads run in parallel. If one wobbles, the others carry it.
          </p>
        </div>

        <ul class="project-features">
          <li>
            <span class="ico">ᚠ</span>
            <div>
              <h4>Loavesting</h4>
              <p v-if="lang === 'ko'">로스트아크 재련 계산기. 커뮤니티가 매일 돌아오는 웹 유틸리티.</p>
              <p v-else>A Lost Ark refinement calculator — a web utility the community returns to daily.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚢ</span>
            <div>
              <h4>Feeder</h4>
              <p v-if="lang === 'ko'">익명 소셜 앱. App Store·Google Play 출시 완료.</p>
              <p v-else>An anonymous social app — shipped on the App Store and Google Play.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚦ</span>
            <div>
              <h4 v-if="lang === 'ko'">어시스턴트 솔루션</h4>
              <h4 v-else>Assistant Solutions</h4>
              <p v-if="lang === 'ko'">육묘장 어시스턴트 완성, 대기업 고객사 관리 솔루션 발주 진행 중.</p>
              <p v-else>Nursery Assistant completed; an enterprise account manager commissioned and in progress.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚨ</span>
            <div>
              <h4 v-if="lang === 'ko'">자세히 보기</h4>
              <h4 v-else>Dig deeper</h4>
              <p>
                <NuxtLink to="/solutions" class="inline-link" v-if="lang === 'ko'">솔루션 페이지 →</NuxtLink>
                <NuxtLink to="/solutions" class="inline-link" v-else>Solutions page →</NuxtLink>
              </p>
            </div>
          </li>
        </ul>
      </article>

      <article class="project-card reveal">
        <div>
          <div class="project-meta">
            <span>ᚦ</span>
            <span class="pill" v-if="lang === 'ko'">함께하기</span>
            <span class="pill" v-else>Get in touch</span>
          </div>
          <h2 class="project-name">
            <template v-if="lang === 'ko'">같은 <em>시간 감각</em>이라면</template>
            <template v-else>If you share the <em>sense of time</em></template>
          </h2>
          <p class="project-desc" v-if="lang === 'ko'">
            엔젤·프리시드 단계에서 길게 함께할 분, 발주·파트너십으로 솔루션을 함께 키울 분을 환영합니다. 짧은 메모 한 줄이면 충분합니다.
          </p>
          <p class="project-desc" v-else>
            We welcome angel and pre-seed partners for the long walk, and clients or partners to grow solutions together through commissions. One short note is enough.
          </p>
          <p class="project-desc">
            <a href="mailto:admin@siflab.org?subject=siflab%20investment" class="inline-link">admin@siflab.org →</a>
          </p>
        </div>

        <ul class="project-features">
          <li>
            <span class="ico">ᚠ</span>
            <div>
              <h4 v-if="lang === 'ko'">자료 요청</h4>
              <h4 v-else>Request the deck</h4>
              <p v-if="lang === 'ko'">제품 지표와 로드맵이 담긴 자료는 메일로 요청해 주세요.</p>
              <p v-else>Metrics and roadmap deck available on request by email.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚢ</span>
            <div>
              <h4 v-if="lang === 'ko'">소재지</h4>
              <h4 v-else>Based in</h4>
              <p>Seoul, KR · 37.5°N</p>
            </div>
          </li>
        </ul>
      </article>

      <div class="coming-soon">
        <span v-if="lang === 'ko'">
          <span class="rune">❖</span> 천천히, 정직하게, 길게 <span class="rune">❖</span>
        </span>
        <span v-else>
          <span class="rune">❖</span> Slow, honest, long-lasting <span class="rune">❖</span>
        </span>
      </div>
    </section>
  </main>
</template>
