<script setup lang="ts">
  import CV from '@/ui/assets/CV.pdf';
  import Icon from '../components/icons/index.ts';
  import TCodeCard from '../components/TCodeCard.vue';
  import TDotPulse from '../components/TDotPulse.vue';
  import TExternalLinkCard from '../components/TExternalLinkCard.vue';
  import TMetricCard from '../components/TMetricCard.vue';
  import TSection from '../components/TSection.vue';
  import TTag from '../components/TTag.vue';
  import TChronologyCard from '../components/TChronologyCard.vue';

  const metricCardExample = {
    label: 'Experiencia laboral',
    value: '+6 años',
    description: 'Líder en desarrollo de software',
    // color: 'rgb(86 229 169)',
  };
</script>

<template>
  <div hidden class="padding | aux | column">
    <TChronologyCard />
    <TDotPulse />
    <TMetricCard v-bind="metricCardExample" />
    <div class="aux | row">
      <TTag v-bind="{ label: 'TypeScript' }" />
      <TTag
        v-bind="{
          label: '40% bundle size reduction',
          icon: Icon.TrendingDown,
          background: 'rgb(28 43 60)',
          color: 'rgb(86 229 169)',
        }"
      />
      <TTag
        v-bind="{
          label: '92% code coverage',
          icon: Icon.Verified,
          background: 'rgb(28 43 60)',
          color: 'rgb(142 213 255)',
        }"
      />
    </div>
    <div class="aux row">
      <TExternalLinkCard
        v-bind="{
          icon: Icon.LinkedIn,
          hyperlink: 'https:\/\/linkedin.com',
          label: 'LinkedIn Profile',
          description: 'Connect professionally',
          showExternalIcon: true,
        }"
        class="flex-auto"
      />
      <TExternalLinkCard
        v-bind="{
          icon: Icon.GitHub,
          hyperlink: 'https:\/\/github.com',
          label: 'GitHub Commits',
          description: 'Audit open repositories',
          showExternalIcon: true,
        }"
        class="flex-auto"
      />
      <TExternalLinkCard
        target="_self"
        v-bind="{
          icon: Icon.Calendar,
          hyperlink: 'mailto: desarrollador.victor@gmail.com',
          label: 'Agenda una entrevista',
          description: 'Direct technical discovery',
        }"
        class="flex-auto"
      />
      <TExternalLinkCard
        v-bind="{
          icon: Icon.Download,
          hyperlink: CV,
          label: 'Download CV',
          description: 'Full PDF dossier',
          filename: 'CV_VICTOR_LEON_SOFTWARE_DEVELOPER.pdf',
        }"
        class="flex-auto"
      />
    </div>
  </div>
  <div class="home">
    <section id="about" class="home__banner | row">
      <div class="home__banner-article | column">
        <h2 class="title">Víctor Eduardo</h2>
        <h2 class="subtitle">León Carreño</h2>
        <p>
          Senior Frontend Engineer specializing in Vue 3, TypeScript, and
          enterprise-grade frontend architecture. 6+ years transforming complex
          web applications into performant, scalable digital experiences with
          zero technical debt.
        </p>
      </div>
      <div class="home__banner-article | row">
        <TCodeCard class="home__code-card" />
      </div>
    </section>
    <TSection
      id="projects"
      class="home__section | home__section--dark"
      v-bind="{
        icon: Icon.Folder,
        title: 'Featured Projects & Systems',
        description: 'PRODUCTION ARTIFACTS',
        details:
          'Selected real-world architectures engineered for extreme latency thresholds, bulletproof state synchronization, and component resilience.',
      }"
    >
      <div class="simulated-content"></div>
    </TSection>
    <TSection
      id="experience"
      v-bind="{
        icon: Icon.TimelineEvent,
        title: 'Architectural Journey & Impact',
        description: 'CHRONOLOGY • TRACK RECORD',
        details:
          'Senior engineering roles focused on measurable performance gains, decoupled micro-frontends, and clean technical architecture.',
      }"
    >
      <div class="aux | row">
        <div class="timeline | | column">
          <div class="timeline-event"></div>
          <div class="timeline-event"></div>
          <div class="timeline-event"></div>
        </div>
        <div class="aux | column">
          <TChronologyCard class="job-card" />
          <TChronologyCard class="job-card" />
          <TChronologyCard class="job-card" />
        </div>
      </div>
    </TSection>
    <TSection
      id="skills"
      class="home__section | home__section--dark"
      v-bind="{
        icon: Icon.Stack,
        title: 'Skills & Technical Architecture',
        description: 'CAPABILITY MATRIX',
        details:
          'Deep mastery across the frontend lifecycle, systems architecture, distributed backend pipelines, and modern test automation.',
      }"
    >
      <div class="simulated-content"></div>
    </TSection>
    <section id="contact" class="home__section">Contactame</section>
  </div>
</template>

<style scoped>
  .timeline-event {
    width: 2rem;
    height: 2rem;
    background: rgb(189 200 209);
    clip-path: polygon(0% 18%, 72% 18%, 100% 50%, 72% 82%, 0% 82%);
  }

  .timeline {
    background: rgb(189 200 209 / 0.5);
    width: 0.125rem;
    justify-content: space-around;
    align-items: center;
    margin-block: 2rem;
  }

  .padding {
    padding: 2rem;
  }
  .aux {
    gap: 1rem;
  }
  .simulated-content {
    min-height: 40rem;
  }
  .home__section--dark {
    background: rgb(15, 30, 46);
  }

  .title {
    font-size: 4rem;
    color: rgb(212 228 250);
    font-weight: bolder;
  }
  .subtitle {
    font-size: 4rem;
    color: #89ceff;
    font-weight: bolder;
  }
  .home__banner {
    padding: 4rem;
    gap: 8rem;
    overflow-x: auto;
  }

  .home__code-card {
    max-width: 40rem;
  }

  .home__banner-article {
    /* flex: 1 1 50%; */
    justify-content: center;
  }

  @media(orientation: portrait) {
    .timeline {
      display: none;
    }
  }
</style>
