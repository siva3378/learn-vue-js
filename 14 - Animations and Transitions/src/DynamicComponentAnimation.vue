<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>3. Animating Dynamic Components</h1>
      <hr />
      <!-- JS Event Hooks -->

      <button
        class="btn btn-success"
        @click="selectedComponent = 'app-success-alert'"
      >app-success-alert</button>
      <button
        class="btn btn-danger"
        @click="selectedComponent = 'app-danger-alert'"
      >app-danger-alert</button>
      <br />
      <br />
      <h4>With mode</h4>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <component :is="selectedComponent"></component>
      </transition>
      <h4>With out mode</h4>
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <component :is="selectedComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
  name: "app-dynamic-component-animation",
  components: {
    "app-danger-alert": DangerAlert,
    "app-success-alert": SuccessAlert
  },
  data() {
    return {
      selectedComponent: "app-success-alert"
    };
  }
};
</script>

<style>
</style>
