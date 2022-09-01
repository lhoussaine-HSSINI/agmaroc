import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Login from "../view/Login.vue";
import Signup from "../view/Signup.vue";
import Activites from "../view/Activites.vue";
import store from '../store'
import MyAccount from '../view/MyAccount.vue'
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/Activites",
        name: "Activites",
        component: Activites,
    },
      {
    path: '/MyAccount',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  { path: '/:NotFound(.*)*', component: Home },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.user.isAuthenticated) {
    next({ name: 'Login', query: { to: to.path } });
  } else {
    next()
  }

})

export default router;