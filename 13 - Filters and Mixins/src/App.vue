<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>all upper : {{text | toUpperCase}}</p>
        <p>all lower : {{text | toLowerCase}}</p>
        <p>piping : {{text | toUpperCase | toLowerCase}}</p>

        <h3>Global mixin</h3>
        {{globalMixinData}}


      </div>

      <!-- Bad practice to use filter for array filters -->
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h6>
          Computed functions are better then vue-filters <br/>
          when we are filtering a list, which depends on another v-model
        </h6>
        <button @click="fruits.push('New item')">Add item to mixin</button>
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
      </div>

      <!-- In this example we have a duplicate logic to filter the fruits -->
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h6>
          But here, if we want to use the same filtering logic in the other component, <br/>
          we need to duplicate the Computed function
        </h6>
        <!-- Duplication code is here -->
        <app-list></app-list>
      </div>

      <!-- So to avoid duplicate logics, we use mixins -->
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h6>
          To avoid duplicating computed functions, we use mixins
        </h6>
        <!-- List which uses mixin code is here -->
        <app-list-with-mixin></app-list-with-mixin>
      </div>
    </div>
  </div>
  
</template>

<script>
import List from './List.vue';
import ListWithMixin from './ListWithMixin.vue';
/*
<!-- Without mixin -->
export default {
  components:{
    'app-list': List
  },
  data() {
    return {
      text: "Hello there.. 123",
      filterText: "",
      fruits: ["Apple", "Banana", "Mango", "Melon"]
    };
  },
  // local filters
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  // best way for filtering data
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
*/

// With mixin
import {fruitMixin} from './fruitMixin';
export default {
  mixins: [fruitMixin],
  components:{
    'app-list': List,
    'app-list-with-mixin': ListWithMixin
  },
  data() {
    return {
      text: "Hello there.. 123",
    };
  },
  created(){
    console.log('App created')
  }
};
</script>

<style>
</style>
