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
export default {
  data() {
    return {
      filterText: "",
      fruits: ["Apple", "Banana", "Mango", "Melon"]
    };
  },
  // local filters
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  // best way for filtering data
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
</script>

<style>
</style>
