<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <h3>Quotes</h3>
      </div>
    </div>
    <div class="row">
      <app-quote v-for="(aQuote, index) in quotes" :key="index" @click.native="deleteQuote(index)">
        {{aQuote}}
      </app-quote>
    </div>
  </div>
</template>

<script>
import appQuote from "./Quote.vue";
import appQuoteProgressBar from './QuoteProgressBar.vue';

export default {
  props: {
    quotes: Array,
    deleteQuote: Function,
  },
  components: {
    appQuote,
    appQuoteProgressBar
  }
};
</script>

<style scoped>
h3{
  color: coral;
}
</style>