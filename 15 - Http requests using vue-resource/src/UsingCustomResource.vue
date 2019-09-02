<template>
  <section>
    <article>
      <h1>Custom resource</h1>
      <form>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
            v-model="user.username"
            autocomplete="off"
            autofill="off"
          />
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
        <select v-model="collectionName" class="form-control">
          <option value="logs">From Log collection</option>
          <option value="users">From User collection</option>
        </select>
        <br/>
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
const RESOURCE_LOGS = "logs.json";

export default {
  created() {
    /**
     * ------------------------------------------------------------------------------------------
     * Creating our simple resource using the VueResource provided $resource
     * ------------------------------------------------------------------------------------------
     * we are telling VueResource to append the "users.json" to the root url
      
    this.resource = this.$resource(RESOURCE_USERS);
    */

    /**
     * -----------------------------------------------------------------------------------------
     * Creating our custom resource with custom actions using the VueResource provided $resource
     * ------------------------------------------------------------------------------------------

    // 1st - create our own custom actions
    const customActions = {
      // simple save alternative
      log: {
        method: "POST",
        url: RESOURCE_LOGS
      },
    };

    // 2nd - telling VueResource
    this.resource = this.$resource(
      RESOURCE_USERS, // root + resource url
      {}, // params to pass on the url
      customActions // custom actions
    );

     */

    /**
     * ------------------------------------------------------------------------------------------
     * Creating our custom resource with custom actions with template urls
     */

    // 1st - create our own custom actions
    const customActions = {
      // simple save alternative
      log: {
        method: "POST",
        url: RESOURCE_LOGS
      },

      // fetching data dynamycally using - URI Template Syntax
      // https://medialize.github.io/URI.js/uri-template.html
      getData: { method: "GET" }
    };

    // 2nd - telling VueResource regarding the url of this resource
    // here we are using the template url
    this.resource = this.$resource(
      "{collectionName}.json", // root + resource url
      {}, // params to pass on the url
      customActions // custom actions
    );
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      users: [],
      resource: {},
      collectionName: ""
    };
  },
  methods: {
    errorHandler(error) {
      console.error(error);
    },
    successHandler(response) {
      const resultArray = [];

      for (let id in response.body) {
        resultArray.push(Object.assign({}, { id }, response.body[id]));
      }

      this.users = resultArray;
    },
    reset() {
      // clear them
      this.user.username = "";
      this.user.password = "";
    },
    submit() {
      // sends a post request
      this.resource.save(
        {}, // query params
        this.user // data
      );

      // call custom action on the resource which we have created
      // which will makes a different post request on 'logs.json' collection
      this.resource.log(this.user);
    },
    fetch() {
      /*
      // added by VueResource module
      this.$http.get(RESOURCE_USERS).then(
        this.successHandler,
        this.errorHandler
        );
      */

      /*
     calling our custom action by passing values to the dynamic template url
     here node contains the collection name
     */
      this.resource
        .getData({ collectionName: this.collectionName })
        .then(this.successHandler, this.errorHandler);
    }
  }
};
</script>

<style>
</style>
