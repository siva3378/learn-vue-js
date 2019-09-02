<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12  col-md-6">
            <app-using-http-resource/>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
            <app-using-custom-resource/>
        </div>
    </div>
  </div>
</template>

<script>
import UsingHttpResource from './UsingHttpResource.vue';
import UsingCustomResource from './UsingCustomResource.vue';

export default {
    components:{
        'app-using-http-resource': UsingHttpResource,
        'app-using-custom-resource': UsingCustomResource,
    }
};
</script>

<style>
</style>
