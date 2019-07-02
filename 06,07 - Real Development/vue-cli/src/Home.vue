<template>
  <div>
    <!-- aoo-server-status is registerd as a local component -->
    <app-server-status v-for="server in 5" :key="server"/>
  </div>
</template>

<script>
import ServerStatus from "./components/ServerStatus.vue";
export default {
  // Local components
  components: {
    "app-server-status": ServerStatus
  }
};
</script>