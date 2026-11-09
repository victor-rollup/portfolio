<script setup lang="ts">
  import TCodeTag from './TCodeTag.vue';

  interface MetricItem {
    label: string;
    value: string;
    highlight?: boolean;
  }

  interface ICodeCardProps {
    fileName?: string;
    statusText?: string;
    metrics?: MetricItem[];
  }

  withDefaults(defineProps<ICodeCardProps>(), {
    fileName: 'runtime_diagnostics.ts',
    statusText: 'STABLE 100ms',
    metrics: () => [],
  });
</script>

<template>
  <div class="code-card">
    <div class="code-card__header">
      <div class="code-card__dots">
        <span class="code-card__dot code-card__dot--red"></span>
        <span class="code-card__dot code-card__dot--yellow"></span>
        <span class="code-card__dot code-card__dot--green"></span>
        <span class="code-card__filename">{{ fileName }}</span>
      </div>
      <div v-if="statusText" class="code-card__status">
        {{ statusText }}
      </div>
    </div>

    <div class="code-card__body">
      <pre class="code-card__pre">
        <code>
          <div class="code-card__line-row"><span class="code-card__line">01</span><TCodeTag type="keyword">import</TCodeTag> <TCodeTag>{</TCodeTag> <TCodeTag type="function">defineEnterpriseStack</TCodeTag> <TCodeTag>}</TCodeTag> <TCodeTag type="keyword">from</TCodeTag> <TCodeTag type="string">'@/frontend/profile'</TCodeTag>;</div>
          <div class="code-card__line-row"><span class="code-card__line">02</span></div>
          <div class="code-card__line-row"><span class="code-card__line">03</span><TCodeTag type="keyword">export</TCodeTag> <TCodeTag type="keyword">const</TCodeTag> <TCodeTag type="property">architectProfile</TCodeTag> <TCodeTag>=</TCodeTag> <TCodeTag type="function">defineEnterpriseStack</TCodeTag> ({</div>
          <div class="code-card__line-row"><span class="code-card__line">04</span><TCodeTag type="property">  specialization</TCodeTag>: <TCodeTag type="string">'Vue 3 Composition API & Pinia'</TCodeTag> ,</div>
          <div class="code-card__line-row"><span class="code-card__line">05</span><TCodeTag type="property">  latencyThreshold</TCodeTag>: <TCodeTag type="string">'&lt;100'</TCodeTag> , <TCodeTag type="comment">// ms across global edges</TCodeTag></div>
          <div class="code-card__line-row"><span class="code-card__line">06</span><TCodeTag type="property">  bundleBudget</TCodeTag>: <TCodeTag type="string">'Strict &lt;45kb gzip per chunk'</TCodeTag> ,</div>
          <div class="code-card__line-row"><span class="code-card__line">07</span><TCodeTag type="property">  typeIntegrity</TCodeTag>: <TCodeTag type="string">'Strict TypeScript 100%'</TCodeTag> ,</div>
          <div class="code-card__line-row"><span class="code-card__line">08</span><TCodeTag type="property">  status</TCodeTag>: <TCodeTag type="string">'Production Ready & High Scale'</TCodeTag></div>
          <div class="code-card__line-row"><span class="code-card__line">09</span><TCodeTag>});</TCodeTag></div>
          <div class="code-card__line-row"><span class="code-card__line">10</span></div>
        </code>
      </pre>
    </div>

    <div v-if="metrics && metrics.length" class="code-card__footer">
      <div
        v-for="(metric, index) in metrics"
        :key="index"
        class="code-card__metric-box"
      >
        <span class="code-card__metric-label">{{ metric.label }}</span>
        <span
          class="code-card__metric-value"
          :class="{ 'code-card__metric-value--highlight': metric.highlight }"
        >
          {{ metric.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  code {
    display: flex;
    flex-direction: column;
  }
  .code-card {
    --dm-bg-panel: #181818;
    --dm-bg-editor: #1f1f1f;
    --dm-border: #2b2b2b;
    --dm-text-main: #cccccc;
    --dm-text-muted: #6e7681;
    --dm-green: #89d185;

    background-color: var(--dm-bg-panel);
    border: 1px solid var(--dm-border);
    border-radius: 8px;
    font-family: 'Consolas', 'Courier New', monospace;
    overflow: hidden;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
    width: 100%;
  }

  .code-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background-color: var(--dm-bg-panel);
    border-bottom: 1px solid var(--dm-border);
    font-size: 0.75rem;
  }

  .code-card__dots {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .code-card__dot {
    width: 10px;
    height: 10px;
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
    margin-left: 8px;
    color: var(--dm-text-main);
    font-weight: 500;
  }

  .code-card__status {
    color: var(--dm-green);
    font-weight: 600;
    letter-spacing: 0.5px;
    font-size: 0.7rem;
  }

  .code-card__body {
    background-color: var(--dm-bg-editor);
    padding-inline: 1rem;
    overflow-x: auto;
  }

  .code-card__pre {
    font-size: 0.85rem;
    color: var(--dm-text-main);
    display: flex;
    padding-block: 1rem;
  }

  .code-card__line-row {
    display: flex;
    align-items: center;
    white-space: pre;
  }

  .code-card__line {
    color: var(--dm-text-muted);
    width: 2rem;
    display: inline-block;
    user-select: none;
    font-size: 0.8rem;
  }

  .code-card__footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1px;
    background-color: var(--dm-border);
    border-top: 1px solid var(--dm-border);
  }

  .code-card__metric-box {
    background-color: var(--dm-bg-panel);
    padding: 14px 16px;
  }

  .code-card__metric-label {
    display: block;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--dm-text-muted);
    margin-bottom: 4px;
  }

  .code-card__metric-value {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--dm-text-main);
  }

  .code-card__metric-value--highlight {
    color: var(--dm-green);
  }
</style>
