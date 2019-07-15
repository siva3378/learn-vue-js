<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="id">
      <h4>Server #{{id}}</h4>
      <p>
        Status :
        <span>{{status}}</span>
      </p>
      <button @click="updateServerStatus()">Update to Normal</button>
    </div>
    <div v-else>
      <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
import EVENT_IDS from "./event_ids";
import { eventBus } from "../../main";
export default {
  data() {
    return { id: "", status: "" };
  },
  methods: {
    updateServerStatus() {
      eventBus.$emit(EVENT_IDS.UPDATE_STATUS, this.id, "Normal");
    }
  },
  created() {
    eventBus.$on(EVENT_IDS.SELECT_SERVER, (id, status) => {
      this.id = id;
      this.status = status;
    });
  }
};
</script>

<style scoped>
p span {
  display: inline-block;
  padding: 5px 10px;
  background: #f0f0f0;
  border-radius: 7px;
}
</style>
