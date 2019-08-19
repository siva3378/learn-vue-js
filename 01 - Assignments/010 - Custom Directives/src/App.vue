<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-myOn:click="handleClick">Click here</button>
        <div
          v-myOn:mouseenter="handleMouseEnter"
          v-myOn:mouseleave="handleMouseLeave"
          class="hello-div"
        >Hello div</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myOn: {
      bind(el, binding) {
        const eventHandler = binding.value;
        const eventType = binding.arg;
        el.addEventListener(eventType, eventHandler);
      }
    }
  },
  methods: {
    handleClick() {
      alert("button clicked");
    },
    handleMouseEnter() {
      console.log("handleMouseEnter");
    },
    handleMouseLeave() {
      console.log("hhandleMouseLeave");
    }
  }
};
</script>

<style>
.hello-div {
  height: 200px;
  width: 200px;
  background: lightgreen;
}
</style>
