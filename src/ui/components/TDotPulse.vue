<template>
  <span class="dot-pulse | animate-pulse"></span>
</template>

<style scoped>
  .dot-pulse {
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
</style>
