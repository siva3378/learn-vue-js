<template>
  <div class="col-sm-6 col-md-3 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.panel-body {
  font-size: 14px;
  color: chocolate;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
  text-decoration: line-through;
}
</style>