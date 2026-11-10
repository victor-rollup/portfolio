<script setup lang="ts">
  import TLayout from '@/ui/components/TLayout.vue';
  import Logo from '@/ui/assets/logo.svg';
</script>

<template>
  <TLayout :showHeader="true" :showFooter="true" class="display">
    <template #TLayoutHeader>
      <div class="display__header | row">
        <div class="display__header-container | row">
          <img :src="Logo" alt="" height="50" draggable="false" />
          <h1 class="display__title">Víctor Eduardo León Carreño</h1>
        </div>
        <nav>
          <ul class="display__navigation-list | row">
            <li>
              <a href="#about" class="display__navigation-list-option"
                >Acerca de</a
              >
            </li>
            <li>
              <a href="#projects" class="display__navigation-list-option"
                >Proyectos</a
              >
            </li>
            <li>
              <a href="#experience" class="display__navigation-list-option"
                >Experiencia</a
              >
            </li>
            <li>
              <a href="#skills" class="display__navigation-list-option"
                >Habilidades</a
              >
            </li>
            <li>
              <a href="#contact" class="display__navigation-list-option"
                >Contacto</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </template>

    <RouterView />

    <div class="display__footer">
      <p>&copy; 2026 Víctor León. Frontend Engineer Senior.</p>
    </div>
  </TLayout>
</template>

<style scoped>
  .display {
    background: rgb(13, 28, 45);
    background: rgb(5, 20, 36);
  }

  .display__footer {
    min-height: 20rem;
  }

  .display__header {
    align-items: center;
    gap: 2rem;
    border-bottom: 0.0125rem solid;
    background: rgb(5, 20, 36);
    height: 4rem;
    padding-inline: 1rem;
  }

  .display__header-container {
    align-items: center;
    gap: 0.5rem;
  }

  .display__title {
    font-size: 1rem;
  }

  .display__navigation-list {
    gap: 1rem;
  }

  .display__navigation-list-option {
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: block;
  }

  .display__navigation-list-option:active {
    background: rgb(35, 35, 70);
  }

  @media(orientation: portrait) {
    .display__navigation-list {
      display: none;
    }
  }
</style>
