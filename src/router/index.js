import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Login from '../views/Login.vue'
import NotFound from '../component/error/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "登录"
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
});



router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});


export default router;
