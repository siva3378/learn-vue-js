<template>
  <div>
    <input v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>

    <h3>Global mixin</h3>
    {{globalMixinData}}
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";

export default {
  mixins: [fruitMixin]
};
</script>

<style>
</style>
