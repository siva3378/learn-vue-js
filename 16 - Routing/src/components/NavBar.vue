<template>
  <ul class="nav nav-pills">
    <router-link
      v-for="({label, path}) in routes"
      :key="path"
      :to="path"
      tag="li"
      class="nav-item"
      role="presentation"
      active-class="active"
      exact
    >
      <a>{{label}}</a>
    </router-link>
  </ul>
</template>

<script>
import { routeItems } from "../routes";

export default {
  data() {
    return {
      routes: routeItems
    };
  }
};
</script>

<style>
</style>
