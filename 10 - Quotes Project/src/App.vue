<template>
  <div class="container">
    <app-quote-progress-bar :length="quotes.length" :maxQuotes="maxQuotes"/>
    <app-quote-new :addQuote="addQuote"></app-quote-new>
    <app-quote-grid :quotes="quotes" :deleteQuote="deleteQuote" />
  </div>
</template>

<script>
import appQuoteGrid from "./components/QuoteGrid.vue";
import appQuoteNew from "./components/QuoteNew.vue";
import appQuoteProgressBar from "./components/QuoteProgressBar.vue";

export default {
  data() {
    return {
      quotes: [
        "Just a quote",
        "Just a quote",
        "Just a quote",
        "Just a quote",
        "Just a quote",
        "Just a quote"
      ],
      maxQuotes: 10
    };
  },
  components: {
    appQuoteGrid,
    appQuoteNew,
    appQuoteProgressBar
  },
  watch: {
    quotes(newValue, oldValue) {
      if (newValue.length > this.maxQuotes) {
        this.quotes.pop();
        alert("You cannot enter more than 10 quotes. Please delete.");
      }
    }
  },
  methods: {
    addQuote(newQuote) {
      this.quotes.push(newQuote);
    },
    deleteQuote(index){
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
