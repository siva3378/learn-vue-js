<template>
  <div class="container">
    <div class="row" v-if="!isFormSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <form>
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <app-full-name v-model="fullName"/>
          <!-- Mail -->
          <div class="form-group">
            <label for="mail">Email</label>
            <input
              type="email"
              class="form-control"
              id="mail"
              placeholder="Email"
              v-model="userEmail"
              autocomplete="none"
            />
          </div>
          <!-- Password -->
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="password"
              autocomplete="none"
            />
          </div>
          <!-- Store Data? Yes/No -->
          <div class="form-group">
            <label for="store-data-yes">
              <input type="radio" id="store-data-yes" value="Yes" v-model="storeInDB" /> Yes
            </label>
            <label for="store-data-no">
              <input type="radio" id="store-data-no" value="No" v-model="storeInDB" /> No
            </label>
          </div>

          <div class="form-group">
            <p>
              <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="isFormSubmitted=true"
              >Sign up</button>
            </p>
          </div>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </form>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fullName}}</p>
            <p>Mail: {{userEmail}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{storeInDB}}</p>

            <div class="form-group">
              <p>
                <button
                  type="button"
                  class="btn btn-default"
                  @click.prevent="isFormSubmitted=false"
                >Go back</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue';

export default {
  data() {
    return {
      isFormSubmitted: false,
      fullName: "Siva Kumar",
      // firstName: "",
      // lastName: "",
      userEmail: "",
      password: "",
      storeInDB: "No"
    };
  },
  components:{
    'app-full-name': FullName
  }
};
</script>

<style>
</style>
