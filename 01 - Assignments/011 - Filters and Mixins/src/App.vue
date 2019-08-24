<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <hr />
        <h4>Exercise 1). Local Filter to reverse the text</h4>
        <p>{{textToReverse | reverseText}}</p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <hr />
        <h4>Exercise 2). Global Filter to count the text</h4>
        <p>{{textToCount | countText}}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <hr />
        <h4>Exercise 3). Computed properties to reverse the text</h4>
        <p>{{computedReverseText}}</p>
        <hr />
        <h4>Exercise 3). Computed properties to count the text</h4>
        <p>{{computedCountText}}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <hr />
        <h4>Exercise 4). Computed property to count the text via a Mixin</h4>
        <p>{{computedCountTextMixin}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import countTextMixin from './countTextMixin';

export default {
  mixins:[countTextMixin],
  data() {
    return {
      textToReverse: "This text will be reversed",
      textToCount: "This text will be counted"
    };
  },
  filters: {
    reverseText(value = "") {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    computedReverseText() {
      return this.textToReverse
        .split("")
        .reverse()
        .join("");
    },
    computedCountText(){
      return `${this.textToCount} (${this.textToCount.length})`
    }
  }
};
</script>

<style>
</style>
