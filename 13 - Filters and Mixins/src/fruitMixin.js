export const fruitMixin = {
  // this data is shared to read. Vuejs makes a copy of this data to the component
  // So, we can easily change the mixin data with in the component, 
  // which will not affect the other components
  data() {
    return {
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
  },
  created(){
    console.log('Mixin created')
  }
};
