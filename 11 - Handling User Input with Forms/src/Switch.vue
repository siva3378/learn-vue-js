<template>
  <ul>
    <li
      v-for="item in switches"
      :key="item"
      :class="{active: value===item}"
      @click="switched(item)"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: ["value", "switches"],
  methods: {
    switched(currentValue) {
      this.$emit("input", currentValue);
    }
  }
};
</script>

<style scoped>
* {
  --radius: 7px;
}

ul {
  margin: 0px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
li {
  list-style: none;
  padding: 10px;
  margin: 0;
  min-width: 100px;
  border: 1px solid #c1c1c1;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
}

li.active {
  background: #077cfa;
  border-color: #077cfa;
  color: white;
}

ul li:first-child {
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}

ul li:last-child {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
</style>