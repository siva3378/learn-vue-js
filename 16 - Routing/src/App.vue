<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>

        <!-- We can also have named routers which we can specify -->
        <router-view name="header-top"></router-view>
        
        <!-- In order to animate route, just wrap it with transition -->
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <!-- Here is the default placeholder where the route contents will be rendered -->
            <router-view></router-view>
        </transition>
        <hr/>
        
        <!-- Some other name route -->
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>
