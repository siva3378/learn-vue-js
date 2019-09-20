<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Double counter is {{doubleCounter}}</p>
    <p>Click counter is {{clickCounter}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    ...mapGetters({
      doubleCounter: "doubleCounter",
      clickCounter: "clickCounter"
    })
  }

  //   computed: {
  //     counter() {
  //       return this.$store.state.counter;
  //     },
  //     doubleCounter() {
    //   instead of using individually, we can use mapGetters
  //       return this.$store.getters.doubleCounter;
  //     },
  //     clickCounter(){
  //         return this.$store.getters.clickCounter
  //     }
  //   }
};
</script>