<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link
                tag="li"
                class="list-group-item"
                style="cursor: pointer"
                v-for="n in 5"
                :key="n"
                :to="`/user/${n}`"
            >
                User {{n}}
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            totalUsers: 3
        }
    }
}
</script>