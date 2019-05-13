import Vue from 'vue'
import Router from 'vue-router'
import First from './components/first.vue'
import Selectcon from './components/selectcon.vue'
import  Detailss from './components/detailss.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect: '/first'
      },
    {
        path: '/first',
        name: 'first',
        component: First
    },
      {
          path: '/selectcon',
          name: 'selectcon',
          component: Selectcon
      },
      {
          path:'/detailss',
          name:'detailss',
          component:Detailss
      }
  ]
})
