<script setup lang="ts">
  import TSection from '../components/TSection.vue';
  import TCodeCard from '../components/TCodeCard.vue';
  import Icon from '../components/icons/index.ts';

  const techMetrics = [
    { label: 'CORE WEB VITALS', value: '100 / 100 Green', highlight: true },
    { label: 'MICRO-FRONTEND SYNC', value: '45+ federated nodes' },
  ];
</script>

<template>
  <div class="home">
    <section class="home__banner | row">
      <article class="home__banner-article | column">
        <h2 class="title">Víctor Eduardo</h2>
        <h2 class="subtitle">León Carreño</h2>
        <p>
          Senior Frontend Engineer specializing in Vue 3, TypeScript, and
          enterprise-grade frontend architecture. 6+ years transforming complex
          web applications into performant, scalable digital experiences with
          zero technical debt.
        </p>
      </article>
      <article class="home__banner-article | row">
        <TCodeCard
          file-name="runtime_diagnostics.ts"
          status-text="STABLE 100ms"
          :metrics="techMetrics"
          class="home__code-card"
        />
      </article>
    </section>
    <TSection
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
      v-bind="{
        icon: Icon.TimelineEvent,
        title: 'Architectural Journey & Impact',
        description: 'CHRONOLOGY • TRACK RECORD',
        details:
          'Senior engineering roles focused on measurable performance gains, decoupled micro-frontends, and clean technical architecture.',
      }"
    >
      <div class="simulated-content"></div>
    </TSection>
    <TSection
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
  </div>
</template>

<style scoped>
  .simulated-content {
    min-height: 40rem;
  }
  .home__section--dark {
    background: rgb(5, 20, 36);
  }
  .dot {
    display: block;
    border-radius: 50%;
    height: 0.5rem;
    width: 0.5rem;
    background: rgb(86 229 169);
  }
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
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
    padding: 4rem 2rem;
    gap: 2rem;
    overflow-x: auto;
  }

  .home__code-card {
    max-width: 40rem;
  }

  .home__banner-article {
    flex: 1 1 50%;
    justify-content: center;
  }
</style>
