<script setup lang="ts">
const { lang } = useLang()

useHead({
  title: 'Assistant Solutions — siflab',
  meta: [
    {
      name: 'description',
      content:
        '엑셀과 수기 업무의 불편을 줄이는 작은 솔루션 시리즈. 육묘장 어시스턴트와 대기업 고객사 관리 솔루션을 진행 중입니다.'
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
        <span v-if="lang === 'ko'">어시스턴트 솔루션</span>
        <span v-else>Assistant Solutions</span>
        <span class="sep">/</span>
        <span class="current" v-if="lang === 'ko'">엑셀·수기 업무 효율화</span>
        <span class="current" v-else>Excel &amp; Paperwork Efficiency</span>
      </nav>

      <h1 class="solution-title reveal">
        <template v-if="lang === 'ko'">
          엑셀과 수기로 <em>버티던 일</em>을,<br>
          하루의 <em>흐름</em>으로.
        </template>
        <template v-else>
          From Excel and paper —<br>
          into the <em>rhythm</em> of a working day.
        </template>
      </h1>

      <p class="solution-lead reveal delay-1" v-if="lang === 'ko'">
        현장의 기록은 대부분 <em>엑셀과 손글씨</em>로 시작됩니다. siflab의 어시스턴트 솔루션은 이미 익숙한 작업 흐름은 그대로 두되, 반복과 오류가 쌓이는 지점만 조용히 자동화합니다. 큰 시스템이 아니라, <em>매일 켜는 작은 도구</em>입니다.
      </p>
      <p class="solution-lead reveal delay-1" v-else>
        Most field records still begin in <em>Excel and handwriting</em>. siflab's assistant solutions leave the familiar rhythm untouched and quietly automate only the spots where repetition and errors accumulate — not a large system, but a <em>small tool you open every day</em>.
      </p>

      <div class="solution-status-strip reveal delay-2">
        <span v-if="lang === 'ko'">시리즈 <strong>001</strong></span>
        <span v-else>Series <strong>001</strong></span>
        <span v-if="lang === 'ko'">현재 작업 <strong>2</strong>개</span>
        <span v-else>Active works <strong>2</strong></span>
        <span v-if="lang === 'ko'">상태 <strong>진행 중</strong></span>
        <span v-else>Status <strong>In progress</strong></span>
      </div>
    </section>

    <section class="projects">
      <article class="project-card reveal">
        <div>
          <div class="project-meta">
            <span>ᚠ · 001</span>
            <span class="pill pill-done" v-if="lang === 'ko'">완성</span>
            <span class="pill pill-done" v-else>Completed</span>
          </div>
          <h2 class="project-name">
            <template v-if="lang === 'ko'"><em>육묘장</em> 어시스턴트</template>
            <template v-else>The <em>Nursery Farm</em> Assistant</template>
          </h2>

          <p class="project-desc" v-if="lang === 'ko'">
            육묘장은 파종일, 품종, 트레이 수, 출하 일정, 작업자 메모가 매일 쌓이는 곳입니다. 그 모든 기록이 지금은 <strong>엑셀 시트와 작업장 노트</strong> 사이에 흩어져 있습니다.
          </p>
          <p class="project-desc" v-if="lang === 'ko'">
            육묘장 어시스턴트는 <em>한 번의 입력</em>으로 파종 — 이식 — 출하 — 정산까지 이어지는 작은 보조자입니다. 화면은 단순하고, 글씨는 크고, 손이 흙에 묻어 있어도 누를 수 있는 버튼으로 만듭니다.
          </p>

          <p class="project-desc" v-if="lang === 'en'">
            A nursery accumulates daily records — sowing dates, varieties, tray counts, shipment schedules, worker notes — most of them scattered between <strong>Excel sheets and the shed notebook</strong>.
          </p>
          <p class="project-desc" v-if="lang === 'en'">
            The Nursery Farm Assistant is a small companion that links sowing — transplanting — shipment — settlement from <em>a single input</em>. Plain screens, large type, buttons big enough for hands still covered in soil.
          </p>
        </div>

        <ul class="project-features">
          <li>
            <span class="ico">ᚠ</span>
            <div>
              <h4 v-if="lang === 'ko'">파종 기록</h4>
              <h4 v-else>Sowing log</h4>
              <p v-if="lang === 'ko'">날짜·품종·트레이 수를 한 번에 입력하면 자동으로 식별 번호가 붙습니다.</p>
              <p v-else>Date, variety, tray count entered once — an identifier is generated automatically.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚢ</span>
            <div>
              <h4 v-if="lang === 'ko'">생육 일정</h4>
              <h4 v-else>Growth calendar</h4>
              <p v-if="lang === 'ko'">품종별 표준 생육 기간으로 이식·출하일을 미리 알려줍니다.</p>
              <p v-else>Standard growth windows per variety predict transplant and shipment dates.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚦ</span>
            <div>
              <h4 v-if="lang === 'ko'">출하·정산</h4>
              <h4 v-else>Shipment &amp; settlement</h4>
              <p v-if="lang === 'ko'">거래처별 출하량과 단가를 모아 월말 정산까지 한 번에.</p>
              <p v-else>Volumes and prices per buyer roll up into month-end settlement in one place.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚨ</span>
            <div>
              <h4 v-if="lang === 'ko'">현장 메모</h4>
              <h4 v-else>Field notes</h4>
              <p v-if="lang === 'ko'">사진·짧은 음성 메모로 이상 증상이나 작업 변경을 그대로 남깁니다.</p>
              <p v-else>Photos and short voice memos capture symptoms or task changes as they happen.</p>
            </div>
          </li>
        </ul>
      </article>

      <article class="project-card reveal">
        <div>
          <div class="project-meta">
            <span>ᚢ · 002</span>
            <span class="pill" v-if="lang === 'ko'">발주 · 진행 중</span>
            <span class="pill" v-else>Commissioned · In progress</span>
          </div>
          <h2 class="project-name">
            <template v-if="lang === 'ko'"><em>대기업 고객사</em> 관리 솔루션</template>
            <template v-else>The <em>Enterprise Account</em> Manager</template>
          </h2>

          <p class="project-desc" v-if="lang === 'ko'">
            대기업을 상대하는 영업팀의 기록은 담당자 변경, 계약 갱신일, 단가표, 미팅 메모가 <strong>여러 엑셀과 메신저</strong>에 흩어진 채 쌓입니다. 사람이 바뀌면 맥락도 함께 사라집니다.
          </p>
          <p class="project-desc" v-if="lang === 'ko'">
            한 고객사로부터 직접 <em>발주를 받아 진행 중</em>인 솔루션입니다. 고객사·담당자·계약·이력을 하나의 흐름으로 묶어, 누가 맡아도 같은 맥락 위에서 일하도록 만듭니다.
          </p>

          <p class="project-desc" v-if="lang === 'en'">
            For teams selling into large enterprises, records pile up across <strong>scattered spreadsheets and chat threads</strong> — contact changes, renewal dates, price tables, meeting notes. When people change, the context disappears with them.
          </p>
          <p class="project-desc" v-if="lang === 'en'">
            A solution <em>commissioned directly by a client and now in progress</em>. It binds accounts, contacts, contracts, and history into one flow so anyone who takes over works on the same context.
          </p>
        </div>

        <ul class="project-features">
          <li>
            <span class="ico">ᚠ</span>
            <div>
              <h4 v-if="lang === 'ko'">고객사 원장</h4>
              <h4 v-else>Account ledger</h4>
              <p v-if="lang === 'ko'">고객사별 담당자·조직도·연락 이력을 한 화면에서 추적합니다.</p>
              <p v-else>Contacts, org chart, and contact history per account on a single screen.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚢ</span>
            <div>
              <h4 v-if="lang === 'ko'">계약·갱신 알림</h4>
              <h4 v-else>Contract &amp; renewal alerts</h4>
              <p v-if="lang === 'ko'">계약 만료·갱신·단가 변경일을 미리 알려 놓치는 일을 막습니다.</p>
              <p v-else>Expiry, renewal, and price-change dates surfaced early so nothing slips.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚦ</span>
            <div>
              <h4 v-if="lang === 'ko'">미팅 기록</h4>
              <h4 v-else>Meeting log</h4>
              <p v-if="lang === 'ko'">미팅 메모와 합의 사항을 고객사 타임라인에 그대로 누적합니다.</p>
              <p v-else>Meeting notes and agreements accumulate on each account's timeline.</p>
            </div>
          </li>
          <li>
            <span class="ico">ᚨ</span>
            <div>
              <h4 v-if="lang === 'ko'">인수인계</h4>
              <h4 v-else>Handover</h4>
              <p v-if="lang === 'ko'">담당자가 바뀌어도 맥락과 이력이 끊기지 않게 한 번에 넘깁니다.</p>
              <p v-else>When owners change, context and history transfer in one move, unbroken.</p>
            </div>
          </li>
        </ul>
      </article>

      <div class="coming-soon">
        <span v-if="lang === 'ko'">
          <span class="rune">❖</span> 다음 분야의 솔루션을 준비합니다 <span class="rune">❖</span>
        </span>
        <span v-else>
          <span class="rune">❖</span> Next assistants in the workshop <span class="rune">❖</span>
        </span>
      </div>
    </section>
  </main>
</template>
