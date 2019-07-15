<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <p>Name : {{name}}</p>
        <p>Age : {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- Passing data via props  
                    Here we are passing a prop "nameProp" with value "name"
                    <app-user-detail name="name"></app-user-detail>

                    Here we are passing a prop "nameProp" which is binded 
                    to the current component's data member called "name", 
                    so it will pass the value of the name as a prop
                    <app-user-detail :name="name"></app-user-detail>
                -->

                <!-- Passing event handlers
                    <app-user-detail 
                        :nameProp="name"
                        @resetNameEvent="resetName"
                    />
                 -->

                 <!-- Passing callback -->
                <app-user-detail 
                    :nameProp="name"
                    :userAge="age"
                    @resetNameEvent="resetName"
                    :resetNameFnProp="resetName"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    :changeAge="changeAge"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: undefined,
                age: 27
            }
        },
        methods: {
            changeName(){
                this.name = 'Siva Kumar'
            },
            resetName(newName){
                this.name = newName;
            },
            changeAge(newAge){
                this.age = newAge;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
