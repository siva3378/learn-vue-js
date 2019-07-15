<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name : {{ switchName() }}</p>
    <p>Age: {{userAge}}</p>
    <button @click="resetNameViaCallback()">Reset Name via Callback</button>
    <button @click="resetNameViaEvent()">Reset Name via Event</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  // This nameProp will be passed by parent
  // props: ['nameProp'],

  // Validate the props
  props: {
    // Just specify type
    // nameProp: String

    // If it could be any of type String or an array
    // nameProp: [String, Array]

    // Provide default values
    nameProp: {
      type: [String, Array],
      // provide default value directly for premitive types
      // default: 'Default Value'

      // provide a function which returns default values for objects
      default: function() {
        return [1, 2, 3];
      }
    },
    userAge: Number,
    // Passing function as a prop
    resetNameFnProp: Function
  },
  methods: {
    switchName() {
      // you can access all the props via "this"
      if (typeof this.nameProp === "string") {
        return this.nameProp.split("").join(" ");
      } else {
        return this.nameProp;
      }
    },
    resetNameViaCallback() {
      // <app-user-detail :nameProp="name" :resetNameFnProp="resetName"/>
      // callback 'resetNameFnProp' prop must be passed by parent
      // call the callback to send data to parent
      this.resetNameFnProp("New name via callback");
    },
    resetNameViaEvent() {
      // <app-user-detail :nameProp="name" @resetNameEvent="resetName"/>
      // custom event: 'nameWasReset' prop must be passed by parent
      // 1st argument is the prop name and
      // 2nd argument is the values we want to send back
      this.$emit("resetNameEvent", "New name via event emitter");
    }
  },
  created() {
    eventBus.$on("ageWasChanged", age => {
        console.log('Age received', age)
      // we are changing the prop locally, so this wont update the parent prop
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
