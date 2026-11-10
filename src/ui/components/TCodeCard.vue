<script setup lang="ts">
  import TCodeTag from './TCodeTag.vue';
</script>

<template>
  <article class="code-card">
    <header class="code-card__header | row">
      <div class="code-card__dots">
        <span class="code-card__dot | code-card__dot--red"></span>
        <span class="code-card__dot | code-card__dot--yellow"></span>
        <span class="code-card__dot | code-card__dot--green"></span>
      </div>
      <div class="code-card__status">STABLE 100ms</div>
    </header>

    <div class="code-card__snippet | column">
      <div class="code-card__line-row">
        <span class="code-card__line">01</span>
        <TCodeTag type="keyword">import </TCodeTag>
        <TCodeTag>{ </TCodeTag>
        <TCodeTag type="function">defineEnterpriseStack </TCodeTag>
        <TCodeTag>} </TCodeTag>
        <TCodeTag type="keyword">from </TCodeTag>
        <TCodeTag type="string">'@/frontend/profile'</TCodeTag>
        <TCodeTag>;</TCodeTag>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">02</span>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">03</span>
        <TCodeTag type="keyword">export </TCodeTag>
        <TCodeTag type="keyword">const </TCodeTag>
        <TCodeTag type="property">architectProfile</TCodeTag>
        <TCodeTag> = </TCodeTag>
        <TCodeTag type="function">defineEnterpriseStack</TCodeTag>
        <TCodeTag>({</TCodeTag>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">04</span>
        <TCodeTag type="property" class="code-card__object-property">specialization: </TCodeTag>
        <TCodeTag type="string">'Vue 3 Composition API & Pinia'</TCodeTag>
        <TCodeTag>,</TCodeTag>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">05</span>
        <TCodeTag type="property" class="code-card__object-property">performance: </TCodeTag>
        <TCodeTag type="string">'100%'</TCodeTag>
        <TCodeTag>, </TCodeTag>
        <TCodeTag type="comment">// lighthouse standard result</TCodeTag>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">06</span>
        <TCodeTag type="property" class="code-card__object-property">bundleBudget: </TCodeTag>
        <TCodeTag type="string">'Strict 45kb gzip per chunk'</TCodeTag>
        <TCodeTag>, </TCodeTag>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">07</span>
        <TCodeTag type="property" class="code-card__object-property">typeIntegrity: </TCodeTag>
        <TCodeTag type="string">'Strict TypeScript 100%'</TCodeTag>
        <TCodeTag>, </TCodeTag>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">08</span>
        <TCodeTag type="property" class="code-card__object-property">status: </TCodeTag>
        <TCodeTag type="string">'Production Ready & High Scale'</TCodeTag>
        <TCodeTag>, </TCodeTag>
      </div>
      <div class="code-card__line-row">
        <span class="code-card__line">09</span>
        <TCodeTag>});</TCodeTag>
      </div>
    </div>

    <footer class="code-card__footer">
      <div class="code-card__metric-box">
        <span class="code-card__metric-label">Core Web Vitals</span>
        <span
          class="code-card__metric-value | code-card__metric-value--highlight"
        >
          100/100 Green
        </span>
      </div>
      <div class="code-card__metric-box">
        <span class="code-card__metric-label">Micro-Frontends Sync</span>
        <span class="code-card__metric-value"> 45+ federated notes </span>
      </div>
    </footer>
  </article>
</template>

<style scoped>
  .code-card {
    --dark-modern-background-panel: #181818;
    --dark-modern-background-editor: #1f1f1f;
    --dark-modern-border-color: #2b2b2b;
    --dark-modern-text-main: #cccccc;
    --dark-modern-text-muted: #6e7681;
    --dark-modern-green-color: #89d185;
  }

  .code-card {
    width: 100%;
    height: fit-content;
    background-color: var(--dark-modern-background-panel);
    border: 0.0125rem solid var(--dark-modern-border-color);
    border-radius: 0.5rem;
    font-family: 'Consolas', 'Courier New', monospace;
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0 0 0 / 0.45);
  }

  .code-card__header {
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--dark-modern-background-panel);
    border-bottom: 0.0125rem solid var(--dark-modern-border-color);
    font-size: 0.75rem;
  }

  .code-card__dots {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .code-card__dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }

  .code-card__dot--red {
    background-color: #f85149;
  }

  .code-card__dot--yellow {
    background-color: #d18616;
  }

  .code-card__dot--green {
    background-color: #2ea043;
  }

  .code-card__filename {
    color: var(--dark-modern-text-main);
    font-weight: bold;
  }

  .code-card__status {
    color: var(--dark-modern-green-color);
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 0.7rem;
  }

  .code-card__snippet {
    font-size: 0.85rem;
    color: var(--dark-modern-text-main);
    padding: 1rem;
  }

  .code-card__line-row {
    white-space: pre;
  }

  .code-card__line {
    color: var(--dark-modern-text-muted);
    width: 2rem;
    display: inline-block;
    user-select: none;
  }

  .code-card__footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.0125rem;
    background-color: var(--dark-modern-border-color);
    border-top: 0.0125rem solid var(--dark-modern-border-color);
  }

  .code-card__metric-box {
    background-color: var(--dark-modern-background-panel);
    padding: 1rem;
  }

  .code-card__metric-label {
    display: block;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--dark-modern-text-muted);
  }

  .code-card__metric-value {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--dark-modern-text-main);
  }

  .code-card__metric-value--highlight {
    color: var(--dark-modern-green-color);
  }

  .code-card__object-property {
    text-indent: 1rem;
  }
</style>
