import Vue from "vue";
import App from "./App.vue";

// basic directive
Vue.directive("highlight-basic", {
  bind(el, binding, vnode) {
    el.style.backgroundColor = "green";
    el.style.color = "white";
  }
});

// directive which accepts a value
Vue.directive("highlight-value", {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
});

// directive which accepts multiple values
Vue.directive("highlight-multiple-values", {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value.bg;
    el.style.color = binding.value.fg;
  }
});

// directive which accepts arguments
Vue.directive("highlight-arguments", {
  bind(el, binding, vnode) {
    if (binding.arg === "background") {
      el.style.backgroundColor = binding.value;
      el.style.color = "white";
    } else {
      el.style.color = binding.value;
    }
  }
});

// directive which accepts modifiers
Vue.directive("highlight-arguments-modifiers", {
  bind(el, binding, vnode) {
    var delay = 0;

    if (binding.modifiers["delayed"]) {
      delay = 2000;
    }

    setTimeout(() => {
      if (binding.arg === "background") {
        el.style.backgroundColor = binding.value;
        el.style.color = "white";
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
