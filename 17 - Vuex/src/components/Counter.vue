<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <hr/>
        <button class="btn btn-primary" @click="incrementAsync">Increment Async</button>
        <button class="btn btn-primary" @click="decrementAsync">Decrement Async</button>
        <hr/>
        <button class="btn btn-primary" @click="addBy(100)">Add by 100</button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex';

    export default {

        methods: {
            ...mapMutations([
                'increment',
                'decrement',
                'addBy'
            ]),
            ...mapActions([
                'incrementAsync',
                'decrementAsync'
            ])

            // instead of following, we can use mapMutations
            // increment() {
            //     this.$store.commit('increment')
            // },
            // decrement() {
            //     this.$store.commit('decrement')
            // }
        }
    }
</script>