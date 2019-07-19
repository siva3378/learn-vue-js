<template>
  <div>
    <h1>Author {{counter}}</h1>
    <button @click="counter++">Increase</button>

  </div>
</template>
<script>
export default {
  name: 'app-author',
  data(){
    return {
      counter: 0
    }
  }
};
</script>


