<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>4. Transition Group</h1>
      <hr />
      <!-- JS Event Hooks -->

      <button class="btn btn-success" @click="addItem()">Add</button>
      <br />
      <br />

        <transition-group
          name="slide"
          enter-active-class="animated lightSpeedIn"
          leave-active-class="animated lightSpeedOut"
          tag="ul"
          class="list-group"
        >
          <li class="list-group-item" v-for="(aNumber, index) in numbers" :key="aNumber">
            {{aNumber}}
            <button
              class="btn btn-danger float-right clearfix"
              @click="removeItem(index)"
            >X</button>
          </li>
        </transition-group>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
  name: "app-transition-group-demo",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  }
};
</script>

<style>
.float-right {
  float: right;
}
.slide-move{
  transition: transform 1s;
}
.slide-leave{
  position: absolute;
}
</style>
