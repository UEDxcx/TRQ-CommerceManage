import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/pages/login.vue'
import home from '@/components/pages/home/home.vue'
import companyList from '@/components/pages/home/tab/companyList.vue'
import moneyList from '@/components/pages/home/tab/moneyList.vue'
import invite from '@/components/pages/home/tab/invite.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'companyList',
          name: 'companyList',
          component: companyList
        },
        {
          path: 'moneyList',
          name: 'moneyList',
          component: moneyList
        },
        {
          path: 'invite',
          name: 'invite',
          component: invite
        }
      ]
    }
  ]
})
