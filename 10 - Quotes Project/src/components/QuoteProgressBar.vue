<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Add Quotes</h1>
    </div>
    <div class="col-md-6 col-md-offset-3">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :aria-valuenow="percent"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: `${percent}%` }"
        >{{percent}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    maxQuotes: Number
  },
  computed: {
    percent() {
      return (this.length / this.maxQuotes) * 100;
    }
  }
};
</script>

<style scoped>
</style>