<script setup lang="ts">
  interface IMetricCard {
    label: string;
    value: string;
    description: string;
    color?: string;
  }

  const props = defineProps<IMetricCard>();
</script>

<template>
  <div class="metric-card | column">
    <span class="metric-card__label">
      <small>{{ props.label }}</small>
    </span>
    <span class="metric-card__value" :style="{ color: props.color }">{{
      props.value
    }}</span>
    <span class="metric-card__description">{{ props.description }}</span>
  </div>
</template>

<style scoped>
  .metric-card {
    width: fit-content;
    border-radius: 0.5rem;
    padding: 1rem;
    background: rgb(13 28 45);
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  .metric-card__label {
    text-transform: uppercase;
    color: rgb(135 146 154);
  }

  .metric-card__value {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: bold;
    color: rgb(137 206 255);
  }

  .metric-card__description {
    color: rgb(189 200 209);
  }
</style>
