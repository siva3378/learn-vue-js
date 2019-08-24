export default {
  computed: {
    computedCountTextMixin(){
      return `${this.textToCount} (${this.textToCount.length})`
    }
  }
}