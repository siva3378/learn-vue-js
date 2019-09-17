<template>
<div>
    <h3>Edit the User</h3>
    <p> Locale : {{$route.query.locale}}</p>
    <p> Q : {{$route.query.q}}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed=true">Confirm</button>
    <div style="height: 2000px"></div>
    <p id="data">Some extra data</p>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next){
        if(this.confirmed){
            next()
        } else if(confirm('Are you sure you want to leave')){
            this.confirmed = true
            next()
        } else {
            next(false)
        }
    }
}
</script>