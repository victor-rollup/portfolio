<script setup lang="ts">
  import TIconTrendingDown from './icons/TIconTrendingDown.vue';
  import TTag from './TTag.vue';
</script>

<template>
  <article class="chronology-card | card | column">
    <header class="chronology-card__header | row | flex-wrap">
      <div class="column">
        <h3 class="chronology-card__role-name">Lead Frontend Architec</h3>
        <h4 class="chronology-card__enterprise-description">
          <small>Enterprise Cloud Scale Solutions</small>
        </h4>
      </div>
      <small class="chronology-card__employment-period">January 2022 — PRESENT</small>
    </header>
    <div class="chronology-card__content">
      <p class="chronology-card__role-description">
        Spearheaded the enterprise-wide transition from legacy Vue 2 Options API
        to modern Vue 3 Composition API and Pinia across 45+ isolated
        micro-frontends. Engineered unified runtime schemas, automated bundle
        analyzers, and zero-downtime canary deployment pipelines.
      </p>
    </div>
    <footer class="chronology-card__footer | row | flex-wrap">
      <TTag
        v-bind="{
          label: '40% bundle size reduction',
          icon: TIconTrendingDown,
          background: 'rgb(28 43 60)',
          color: 'rgb(86 229 169)',
        }"
      />
      <TTag v-bind="{ label: 'Vue 3 Composition API' }" />
      <TTag v-bind="{ label: 'Pinia' }" />
      <TTag v-bind="{ label: 'Vite' }" />
      <TTag v-bind="{ label: 'TypeScript' }" />
    </footer>
  </article>
</template>

<style scoped>
  .chronology-card {
    gap: 1rem;
    padding: 2rem;
  }

  .chronology-card__header {
    justify-content: space-between;
    align-items: last baseline;
  }

  .chronology-card__role-name {
    color: rgb(212 228 250);
  }

  .chronology-card__employment-period {
    color: rgb(135 146 154);
  }

  .chronology-card__enterprise-description {
    color: rgb(142 213 255);
  }

  .chronology-card__role-description {
    color: rgb(189 200 209);
  }

  .chronology-card__footer {
    gap: 0.5rem;
  }
</style>
