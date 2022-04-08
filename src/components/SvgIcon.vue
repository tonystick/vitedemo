<template>
  <svg aria-hidden="true" :style="svgStyle">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{ prefix?: string; name: string; color?: string; size?: number }>(), {
  prefix: 'icon',
  color: '#333',
  size: 20,
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const svgStyle = computed(() => ({ width: `${props.size}px`, height: `${props.size}px` }));
</script>
