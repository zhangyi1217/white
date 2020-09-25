import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/Appindex'
import Login from '@/components/Login'
import Home from '@/components/home/Home'
import BookIndex from '@/components/book/BookIndex'
import BooksDetails from '@/components/book/BooksDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/books',
          name: 'Books',
          component: BookIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/booksdetails',
          name: 'BooksDetails',
          component: BooksDetails,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    }
  ]
})
