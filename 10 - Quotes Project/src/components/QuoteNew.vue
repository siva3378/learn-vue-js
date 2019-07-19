<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
      <div class="form-group">
        <label for="new-quote">Enter Quote</label>
        <textarea id="new-quote" class="form-control" rows="3" @keydown.enter.exact.prevent="saveQuote" v-model="newQuote">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newQuote: ''
    }
  },
  props: {
    addQuote: {
      type: Function,
      default: ()=>{}
    },
  },
  methods: {
    saveQuote(e) {
      this.addQuote(e.target.value);
      this.newQuote = '';
    }
  },

};
</script>

<style scoped>
</style>