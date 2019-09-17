<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{$route.params.id}}</p>

    <!-- <router-link
      tag="button"
      :to="`/user/${$route.params.id}/edit`"
      class="btn btn-primary"
    >Edit via just url</router-link>-->

    <router-link tag="button" :to="link" class="btn btn-primary">Edit via object</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  created(){
    console.log('5 >> Component created');
  },
  beforeRouteEnter(to, from, next){
    console.log('3 >> route checks can be done inside component')
    console.log('4 >> this point of time, this component is not created, so we cannot access vue instance', this)
    next(vm => {
      console.log('6 >> Now we can access the vue instance here', vm.link);
    });
  }
};
</script>