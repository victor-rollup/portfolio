<script setup lang="ts">
  import type { IExternalLinkCard } from '@/types/component.types.ts';
  import TIconExternalLink from './icons/TIconExternalLink.vue';

  const props = defineProps<IExternalLinkCard>();
</script>

<template>
  <a
    :href="props.hyperlink"
    rel="noopener noreferrer"
    target="_blank"
    draggable="false"
    :download="props.filename"
    :filename="props.filename"
    class="external-link-card | column"
  >
    <div class="external-link-card__header | row">
      <component :is="props.icon" class="external-link-card__icon" />
      <TIconExternalLink
        v-if="showExternalIcon"
        class="external-link-card__external-icon"
      />
    </div>
    <p class="external-link-card__content | column">
      <span class="external-link-card__label">{{ props.label }}</span>
      <span class="external-link-card__description">{{
        props.description
      }}</span>
    </p>
  </a>
</template>

<style scoped>
  .external-link-card {
    width: fit-content;
    border-radius: 0.5rem;
    padding: 1rem;
    background: rgb(13 28 45);
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 1px 2px 0 rgb(0 0 0 / 0.05);
    color: rgb(135 146 154);
    text-decoration: none;
    gap: 0.5rem;
  }

  .external-link-card:hover .external-link-card__icon {
    color: rgb(137 206 255);
  }

  .external-link-card__header {
    justify-content: space-between;
  }

  .external-link-card__label {
    color: rgb(212 228 250);
    font-weight: bold;
  }

  .external-link-card__external-icon {
    --icon-dimension: 1rem;
  }
</style>
