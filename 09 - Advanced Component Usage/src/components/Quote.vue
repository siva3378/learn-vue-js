<template>
  <div>
    <!-- Normal default template slot -->
    <slot></slot>

    <!-- Named slots -->
    <slot name="title"></slot>
    <hr/>
    <slot name="quote"></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  /* This style overides the parent style */
  color: blue;
}

h6{
  color: gray;
}
div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 0 4px #e0e0e0;
}
</style>


