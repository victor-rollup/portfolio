<script setup lang="ts">
  import type { ITag } from '@/types/component.types';

  const props = defineProps<ITag>();
</script>

<template>
  <span class="tag | row" :style="{ background: props.background }">
    <component
      :is="props.icon"
      class="tag__icon"
      :style="{ color: props.color }"
    />
    <small class="tag__label" :style="{ color: props.color }">{{
      props.label
    }}</small>
  </span>
</template>

<style scoped>
  .tag {
    align-items: center;
    gap: 0.25rem;
    padding-block: 0.25rem;
    padding-inline: 0.5rem;
    width: fit-content;
    border-radius: 0.25rem;
    background: rgb(18 33 49);
    color: rgb(189 200 209);
  }

  .tag__icon {
    --icon-dimension: 1rem;
  }
</style>
