import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const Home = require("./../pages/Home").default;
const About = require("./../pages/About").default;
// const NotFound = require("./pages/NotFound.vue").default;
import NotFound from "./../pages/NotFound";
import User from "./../pages/User";

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/user/:name",
        component: User
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    linkActiveClass: "active"
});

export default router;
