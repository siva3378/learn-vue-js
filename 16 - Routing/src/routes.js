// this will be in bundle
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";

// import User from "./components/user/User.vue";
// import UserStart from "./components/user/UserStart.vue";
// import UserDetail from "./components/user/UserDetail.vue";
// import UserEdit from "./components/user/UserEdit.vue";

// lazy loading by Webpack for vue
const User = resolve => {
  require.ensure(["./components/user/User.vue"], () => {
    resolve(require("./components/user/User.vue"));
  });
};
const UserStart = resolve => {
  require.ensure(["./components/user/UserStart.vue"], () => {
    resolve(require("./components/user/UserStart.vue"));
  }, 'user-child-components'); // group name loads all the group together
};
const UserDetail = resolve => {
  require.ensure(["./components/user/UserDetail.vue"], () => {
    resolve(require("./components/user/UserDetail.vue"));
  }, 'user-child-components');
};
const UserEdit = resolve => {
  require.ensure(["./components/user/UserEdit.vue"], () => {
    resolve(require("./components/user/UserEdit.vue"));
  }, 'user-child-components');
};

export const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      "header-top": NavBar
    }
  },
  {
    path: "/user",
    name: "user",
    components: {
      default: User,
      "header-bottom": NavBar
    },
    children: [
      { path: "", component: UserStart, name: "userStart" },
      {
        path: ":id",
        component: UserDetail,
        name: "userDetails",
        beforeEnter: (to, from, next) => {
          console.log("2 >> route checks can be done inside route setup");
          next(); // continues the journey
        }
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ]
  },
  {
    path: "/redirect-me",

    // redirect: '/user'

    // or you can also specify object
    redirect: { name: "userDetails", params: { id: 1 } }
  },
  // for routes that doesn't match
  // this should be at the end
  // this will get caught, if all the above routes doesn;t match
  {
    path: "*",
    redirect: "/"
  }
];

export const routeItems = [
  { path: "/", label: "Home" },
  { path: "/user", label: "User" }
];
