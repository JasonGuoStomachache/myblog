import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index.vue";
import home from "../views/home.vue";
import catalog from "../views/catalog.vue";
import collection from "../views/collection.vue";
import programming from "../views/programming.vue";
import about from "../views/about.vue";
import geek from "../views/catalog/geek.vue";
import bookreview from "../views/catalog/bookreview.vue";
import filmreview from "../views/catalog/filmreview.vue";
import comprehension from "../views/catalog/comprehension.vue";
import notes from "../views/catalog/notes.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "home",
        component: home,
      },
      {
        path: "/catalog",
        name: "catalog",
        component: catalog,
      },
      {
        path: "/collection",
        name: "collection",
        component: collection,
      },
      {
        path: "/programming",
        name: "programming",
        component: programming,
      },
      {
        path: "/about",
        name: "about",
        component: about,
      },
      {
        path: "/geek",
        name: "geek",
        component: geek,
      },
      {
        path: "/bookreview",
        name: "bookreview",
        component: bookreview,
      },
      {
        path: "/filmreview",
        name: "filmreview",
        component: filmreview,
      },
      {
        path: "/comprehension",
        name: "comprehension",
        component: comprehension,
      },
      {
        path: "/notes",
        name: "notes",
        component: notes,
      },
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
