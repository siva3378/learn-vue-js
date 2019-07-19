<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!-- 
          Lession 1: Default and named slots
          <app-quote>
          <h1 slot="title">{{title}}</h1>
          <p slot="quote">Some wonderful quote</p>
          <h6>This is something which do not have a slot: This will go in default slot</h6>
        </app-quote> -->


        <button @click="selectedComponent = 'app-quote'">Quote</button>
        <button @click="selectedComponent = 'app-author'">Author</button>
        <button @click="selectedComponent = 'app-new'">New</button>
        <hr/>
        <p>{{selectedComponent}}</p>
        
        <!-- In this way, we can use dynamic components, 
          but when we switch from one component to another, 
          components gets destroyed and created again and again.
        -->
        <component :is="selectedComponent">
            <p>Default Dynamic Component</p>
        </component> 
        <hr/>
        <!-- 
          In order to restrict the above behaviour, we can keep the rendered components alive by wrapping them with keep-alive
         -->
         <h3>Alive components</h3>
         <keep-alive>
         <component :is="selectedComponent">
            <p>Alive Dynamic Components</p>
        </component> 
         </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";

export default {
  data() {
    return {
      title: "Quote #123",
      selectedComponent: "app-quote",
    };
  },
  components: {
    "app-quote": Quote,
    "app-author": Author,
    "app-new": New,
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
p {
  color: #f0f;
}
</style>
