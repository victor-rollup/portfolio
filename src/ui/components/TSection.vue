<script setup lang="ts">
  import type { Component } from 'vue';

  interface ISection {
    icon: Component;
    title: string;
    details: string;
    description: string;
  }

  const props = defineProps<ISection>();
</script>

<template>
  <section class="section | column">
    <header class="section__header">
      <div class="section__description-container | row">
        <component :is="props.icon" class="section__icon" />
        <span class="section__description">{{ props.description }}</span>
      </div>
      <h2 class="section__title">{{ props.title }}</h2>
      <p class="section__details">{{ props.details }}</p>
    </header>
    <div class="section__container">
      <slot />
    </div>
  </section>
</template>

<style scoped>
  .section {
    padding-block: 2rem;
    padding-inline: 4rem;
    gap: 2rem;
  }

  .section__details {
    color: rgb(189 200 209);
  }

  .section__icon,
  .section__description {
    color: rgb(142 213 255);
    text-transform: uppercase;
  }

  .section__description {
    font-weight: bold;
  }

  .section__description-container {
    gap: 0.5rem;
    align-items: center;
  }

  .section__title {
    font-size: 2rem;
  }

  .section__details {
    max-width: 36rem;
  }

  @media(orientation: portrait) {
    .section {
      padding-inline: 2rem;
    }
  }
</style>
