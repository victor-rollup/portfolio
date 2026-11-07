<script setup lang="ts">
  import TLayout from '@/ui/components/TLayout.vue';
</script>

<template>
  <TLayout :showHeader="true" :showFooter="true">
    <!-- Slot para el encabezado global (Navbar / Header) -->
    <template #TLayoutHeader>
      <header class="header">
        <div class="header__brand">
          <span class="header__bracket">{</span>
          <span class="header__initials">VLC</span>
          <span class="header__bracket">}</span>
          <span class="header__title">Víctor León</span>
        </div>
        <!-- Aquí agregaremos la navegación principal más adelante -->
      </header>
    </template>

    <!-- Contenido principal dinámico controlado por Vue Router -->
    <RouterView />

    <!-- Slot para el pie de página global -->
    <template #TLayoutFooter>
      <footer class="footer">
        <p>&copy; 2026 Víctor León. Frontend Engineer Senior.</p>
      </footer>
    </template>
  </TLayout>
</template>

<style scoped>
  /* Estilos base opcionales para la estructura global del layout */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 0.0625rem solid var(--separator-border-color, #e5e7eb);
  }

  .header__brand {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: bold;
  }

  .header__bracket {
    color: var(--theme-primary-color-500, #3b82f6);
  }

  .footer {
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    font-size: 0.875rem;
    border-top: 0.0625rem solid var(--separator-border-color, #e5e7eb);
  }
</style>
