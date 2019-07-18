import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/content/home'
import aboutUs from '@/components/content/aboutUs'
import classes from '@/components/content/classes'
import blog from '@/components/content/blog'
import contact from '@/components/content/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/classes',
      name: 'classes',
      component: classes
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }

  ],
  mode: 'history'
})
