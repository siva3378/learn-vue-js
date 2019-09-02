<template>
  <section>
    <article>
      <h1>Http</h1>
      <form>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="user.password" />
        </div>
        <div class="button-group">
          <button type="button" class="btn btn-primary" @click="submit">Submit</button>
        </div>
      </form>
    </article>
    <article>
      <hr />
      <div class="button-group">
        <button type="button" class="btn btn-primary" @click="fetch">Fetch Data</button>
      </div>

      <br />
      <br />

      <div class="col-xs-12">
        <table class="table">
          <tbody>
            <tr v-for="aUser in users" :key="aUser.id">
              <td>{{aUser.id}}</td>
              <td>{{aUser.username}}</td>
              <td>{{aUser.password}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </section>
</template>

<script>
const RESOURCE_USERS = "users.json";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      users: []
    };
  },
  methods: {
    errorHandler(error) {
      console.error(error);
    },
    reset() {
      // clear them
      this.user.username = "";
      this.user.password = "";
    },
    submit() {
      // added by VueResource module
      this.$http.post(RESOURCE_USERS, this.user).then(response => {
        this.users.push(
          Object.assign(
            {},
            {
              id: response.body.name,
              username: this.user.username,
              password: this.user.password
            }
          )
        );
        this.reset();
      }, this.errorHandler);
    },
    fetch() {
      // added by VueResource module
      this.$http.get(RESOURCE_USERS).then(response => {
        const resultArray = [];

        for (let id in response.body) {
          resultArray.push(Object.assign({}, { id }, response.body[id]));
        }

        this.users = resultArray;
      }, this.errorHandler);
    }
  },
};
</script>

<style>
</style>
