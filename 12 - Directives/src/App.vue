<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built in Directives</h1>
        <p v-text="'This is a text directive'"></p>
        <p v-html="'This is a <strong>html text</strong> directive'"></p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>

        <!-- Basic directive -->
        <p v-highlight-basic>This is a basic directive</p>
        <hr />
        <!-- Passing values to custom directive-->
        <p v-highlight-value="'red'">Passing values to custom directive</p>
        <hr />
        <!-- Passing multiple values to custom directive-->
        <p
          v-highlight-multiple-values="{bg:'red', fg:'white'}"
        >Passing multiple values to custom directive</p>
        <hr />
        <!-- Passing arguments to custom directive-->
        <p v-highlight-arguments="'blue'">Passing arguments to custom directive</p>
        <p v-highlight-arguments:background="'blue'">Passing arguments to custom directive</p>
        <hr />
        <!-- Modifying a custom directive with Modifiers -->
        <p v-highlight-arguments-modifiers:background.delayed="'violet'">
          Modifying a custom directive with Modifiers
          <strong>Delayed</strong>
        </p>
        <p v-highlight-arguments-modifiers:background="'violet'">
          Modifying a custom directive with Modifiers
          <strong>No Delayed</strong>
        </p>
        <hr />
        <!-- Local directive with multiple Modifiers -->
        <p v-local-highlight:background.delayed.blink="'darkmagenta'">
          Local directive with arguments and multiple Modifiers
          <strong>multiple Modifiers</strong>
        </p>
        <p v-local-highlight.blink="'darkmagenta'">
          Local directive with arguments and multiple Modifiers
          <strong>only blink Modifier</strong>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  padding: 10px;
}
</style>
<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;

        const colorChanger = bgColor => {
          if (binding.arg === "background") {
            el.style.backgroundColor = bgColor;
            el.style.color = "white";
          } else {
            el.style.color = bgColor;
          }
        };

        if (binding.modifiers["delayed"]) {
          delay = 2000;
        }

        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "gray";
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor =
                currentColor === secondColor ? mainColor : secondColor;
              colorChanger(currentColor);
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => colorChanger(binding.value), delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
