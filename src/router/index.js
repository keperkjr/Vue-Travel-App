import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails"),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () => import(/*webpackChunkName: "ExperienceDetails"*/ "../views/ExperienceDetails")
      }
    ],
  },     
  // {
  //   path: "/brazil",
  //   name: "brazil",
  //   component: () => import(/* webpackChunkName: "brazil" */ "../views/Brazil")
  // },
  // {
  //   path: "/hawaii",
  //   name: "hawaii",
  //   component: () => import(/* webpackChunkName: "hawaii" */ "../views/Hawaii")
  // },
  // {
  //   path: "/jamaica",
  //   name: "jamaica",
  //   component: () => import(/* webpackChunkName: "jamaica" */ "../views/Jamaica")
  // },
  // {
  //   path: "/panama",
  //   name: "panama",
  //   component: () => import(/* webpackChunkName: "panama" */ "../views/Panama")
  // }, 
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes,
  scrollBehavior: function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else if (to.hash) {
        return document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth' });
      } else {
          return { x: 0, y: 0 }
      }
  },  
});

export default router;
