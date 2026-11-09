<script setup lang="ts">
  interface ICodeTag {
    type?: string;
  }

  const props = withDefaults(defineProps<ICodeTag>(), {
    type: 'default',
  });
</script>

<template>
  <code class="code-tag" :class="[`code-tag--${props.type}`]">
    <slot />
  </code>
</template>

<style scoped>
  .code-tag {
    font-family: 'Consolas', 'Courier New', monospace;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    color: #d4d4d4;
    /* background-color: #2b2b2b; */
    /* border: 0.0125rem solid #3c3c3c; */
  }

  .code-tag--keyword {
    color: #569cd6;
  }

  .code-tag--function {
    color: #dcdcaa;
  }

  .code-tag--string {
    color: #ce9178;
  }

  .code-tag--number {
    color: #b5cea8;
  }

  .code-tag--property,
  .code-tag--variable {
    color: #9cdcfe;
  }

  .code-tag--type,
  .code-tag--class {
    color: #4ec9b0;
  }

  .code-tag--comment {
    color: #6a9955;
  }
</style>
