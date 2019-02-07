import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Component1 from '@/components/componen1'
import SoalComponent from '@/components/soalcomponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/componen1',
      name: 'Component1',
      component: Component1
    },
    {
      path: '/soalcomponent',
      name: 'SoalComponent',
      component: SoalComponent
    },
  ]
})
