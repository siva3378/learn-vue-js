<template>
  <div>
    <h1>New</h1>
  </div>
</template>
<script>
export default {
  name: 'app-new',
  created () {
    // This will be called every time for non-alive component
    // only once for alive components
    console.log('NewComponent > Created');
  },
  destroyed(){
    // This will be called every time for non-alive component
    // only once for alive components
    console.log('NewComponent > destroyed');
  },
  activated(){
    // This will be called every time for alive component
    console.log('NewComponent > activated');
  },
  deactivated(){
    // This will be called every time for alive component
    console.log('NewComponent > deactivated');
  },
};
</script>


