<script setup lang="ts">
  import TLayout from '@/ui/components/TLayout.vue';
</script>

<template>
  <TLayout :showHeader="true" :showFooter="true">
    <template #TLayoutHeader>
      <div class="header__brand">
        <span class="header__bracket">{</span>
        <span class="header__initials">VLC</span>
        <span class="header__bracket">}</span>
        <span class="header__title">Víctor León</span>
      </div>
    </template>

    <RouterView />

    <template #TLayoutFooter>
      <p>&copy; 2026 Víctor León. Frontend Engineer Senior.</p>
    </template>
  </TLayout>
</template>

<style scoped>
  .header__brand {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: bold;
  }

  .header__bracket {
    color: var(--theme-primary-color-500, #3b82f6);
  }
</style>
