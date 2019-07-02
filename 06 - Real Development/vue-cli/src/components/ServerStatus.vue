<template>
  <div>
    <p>Server Status: {{status}}</p>
    <button @click="changeStatus">Change Status</button>
    <hr/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>