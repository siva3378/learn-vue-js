<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me! : Age = {{this.userAge}}</p>
    <button @click="increaseAge()">Increase Age</button>
    <button @click="increaseAgeViaEventBus()">Increase Age Via EventBus</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["userAge", "changeAge"],
  methods: {
    increaseAge() {
      this.changeAge(this.userAge + 1);
    },
    increaseAgeViaEventBus() {
      this.userAge += 1;
      eventBus.$emit("ageWasChanged", this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
