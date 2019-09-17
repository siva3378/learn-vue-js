<template>
    <section>
        <h1>The User Page</h1>
        <hr/>
        <button @click="toHome" class="btn btn-default">Go to home</button>
        <hr/>
        <router-view></router-view>
    </section>
</template>
<script>
export default {
    data(){
        return{
            id : this.$route.params.id
        }
    },
    watch:{
        '$route'(to, from){
            this.id = to.params.id
        }
    },
    methods: {
        toHome(){
            // push the path or
            // this.$router.push('/');

            // push an object with route name
            this.$router.push({name : 'home'});
        }
    }
}
</script>