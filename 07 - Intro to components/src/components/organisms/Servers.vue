<template>
  <div class="row">
    <app-server-list />
    <app-server-details />
  </div>
</template>

<script>

import ServerList from "../atoms/ServerList.vue";
import ServerDetails from "../atoms/ServerDetails.vue";

export default {
  components: {
    "app-server-list": ServerList,
    "app-server-details": ServerDetails
  }
};
</script>