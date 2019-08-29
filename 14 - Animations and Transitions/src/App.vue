<template>
  <div class="container">
    <app-transition-group-demo/>
    <app-dynamic-component-animation />
    <app-js-animation-demo />
    <app-css-animation-demo />
  </div>
</template>

<script>
import CssAnimationDemo from "./CssAnimationDemo.vue";
import JsAnimationDemo from "./JsAnimationDemo.vue";
import DynamicComponentAnimation from "./DynamicComponentAnimation.vue";
import TransitionGroupDemo from "./TransitionGroupDemo.vue";

export default {
  components: {
    "app-css-animation-demo": CssAnimationDemo,
    "app-js-animation-demo": JsAnimationDemo,
    "app-dynamic-component-animation": DynamicComponentAnimation,
    "app-transition-group-demo": TransitionGroupDemo,
  }
};
</script>

<style>
</style>
