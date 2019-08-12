<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>File a Complaint</h1>
        <hr />
      </div>
      <div class="col-md-6">
        <form autocomplete="off">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-12">
              <div class="form-group">
                <label for="email">Mail</label>
                <!-- 
                  v-model="userData.email"
                  is a combination of :value and @input
                  as follows
                -->
                <input
                  type="text"
                  id="email"
                  class="form-control"
                  :value="userData.email"
                  @input="userData.email = $event.target.value"
                  autocomplete="username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  v-model="userData.password"
                  autocomplete="current-password"
                />
              </div>
              <div class="form-group">
                <label for="age">Age</label>
                <!-- 
                  v-model.lazy.number is a modifiers which only allows number
                 -->
                <input
                  type="number"
                  id="age"
                  class="form-control"
                  v-model.lazy.number="userData.age"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-12 form-group">
              <label for="message">Message</label>
              <br />
              <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
              <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-12">
              <div class="form-group">
                <label for="sendmail">
                  <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail" /> Send Mail
                </label>
                <label for="sendInfomail">
                  <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail" /> Send Infomail
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-12 form-group">
              <label for="male">
                <input type="radio" id="male" value="Male" v-model="userData.gender" /> Male
              </label>
              <label for="female">
                <input type="radio" id="female" value="Female" v-model="userData.gender" /> Female
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-12 from-group">
              <label for="priority">Priority</label>
              <select id="priority" class="form-control" v-model="priority">
                <option
                  v-for="(item, index) in priorities"
                  :key="index"
                  :selected="item === 'Medium'"
                >{{item}}</option>
              </select>
            </div>
          </div>
           <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-12 from-group">
              <label for="switch">Switch</label>
              <!-- Custom component with v-model -->
              <app-switch v-model="priority" :switches="priorities"/>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-12">
              <button class="btn btn-primary" @click.prevent="submitted()">Submit!</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>Your Data</h4>
              </div>
              <div class="panel-body">
                <p>Mail: {{userData.email}}</p>
                <p>Password: {{userData.password}}</p>
                <p>Age: {{userData.age}}</p>
                <p style="white-space: pre">Message: {{message}}</p>
                <p>
                  <strong>Send Mail?</strong>
                </p>
                <ul>
                  <li v-for="(item, index) in sendMail" :key="index">{{index}} - {{item}}</li>
                </ul>
                <p>Gender: {{userData.gender}}</p>
                <p>Priority: {{priority}}</p>
                <p>Switched:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Switch.vue';

export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 28,
        gender: "Male"
      },
      message: "This is a sample message",
      sendMail: [],
      priority: "High",
      priorities: ["Select", "High", "Medium", "Low"]
    };
  },
  components:{
    'app-switch': Switch
  },
  methods:{
    submitted(){
      this.userData = {
        email: "",
        password: "",
        age: 28,
        gender: ""
      };
      this.message="";
      this.priority="";
    }
  }
};
</script>

<style>
</style>
