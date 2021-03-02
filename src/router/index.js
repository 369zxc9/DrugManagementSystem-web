import Vue from 'vue'
import VueRouter from 'vue-router'

import Usermanegement from '../components/Usermanegement.vue'
import Header from '../components/Header.vue'

Vue.use(VueRouter)


  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path:'/Menu',
    name:'Menu',
    component: () => import( '../views/Menu.vue')

  },
  {
    path:'/Usermanegement',
    name:'Usermanegement',
    component:Usermanegement
  },
  {
    path:'/Header',
    name:'Header',
    component:Header
  },
  {
    path:'/Stockmanegement',
    name:'Stockmanegement',
    component: () => import( '../components/Stockmanegement.vue')
  },
  {
    path:'/LoginForm',
    name:'LoginForm',
    component: () => import( '../components/LoginForm.vue')
  },
  {
    path:'/Stockinmanegement',
    name:'Stockinmanegement',
    component: () => import( '../components/Stockinmanegement.vue')

  },
  {
    path:'/Stockoutmanegement',
    name:'Stockoutmanegement',
    component: () => import( '../components/Stockoutmanegement.vue')

  },
  {
    path:'/Buyuser',
    name:'Buyuser',
    component: () => import( '../components/Buyuser.vue')

  },
  {
    path:'/Saleuser',
    name:'Saleuser',
    component: () => import( '../components/Saleuser.vue')

  },
  {
    path:'/Stocksearch',
    name:'Stocksearch',
    component: () => import( '../components/Stocksearch.vue')

  },
  {
    path:'/Stockin',
    name:'Stockin',
    component: () => import( '../components/Stockin.vue')

  },
  {
    path:'/Stockout',
    name:'Stockout',
    component: () => import( '../components/Stockout.vue')

  },
  {
    path:'/Purchasecheck',
    name:'Purchasecheck',
    component: () => import( '../components/Purchasecheck.vue')

  },
  {
    path:'/Supplier',
    name:'Supplier',
    component: () => import( '../components/Supplier.vue')

  },
  {
    path:'/Salesearch',
    name:'Salesearch',
    component: () => import( '../components/Salesearch.vue')

  },
  {
    path:'/Buymanmenu',
    name:'Buymanmenu',
    component: () => import( '../components/Buymanmenu.vue')

  },
  {
    path:'/Salesmanmenu',
    name:'Salesmanmenu',
    component: () => import( '../components/Salesmanmenu.vue')

  },
  {
    path:'/Top',
    name:'Top',
    component: () => import( '../components/Top.vue')

  },
  {
    path:'/Demo',
    name:'Demo',
    component: () => import( '../components/Demo.vue')

  },
  {
    path:'/Register',
    name:'Register',
    component: () => import( '../components/Register.vue')

  },
  {
    path:'/test',
    name:'test',
    component: () => import( '../components/test.vue')

  },
  {
    path:'/Drug',
    name:'Drug',
    component: () => import( '../components/Drug.vue')

  },
  {
    path:'/Pharmacy',
    name:'Pharmacy',
    component: () => import( '../components/Pharmacy.vue')

  },
  {
    path:'/Demand',
    name:'Demand',
    component: () => import( '../components/Demand.vue')

  },
  {
    path:'/Examine',
    name:'Examine',
    component: () => import( '../components/Examine.vue')

  },
  {
    path:'/Drugdetail',
    name:'Drugdetail',
    component: () => import( '../components/Drugdetail.vue')

  },
  {
    path:'/Drugadd',
    name:'Drugadd',
    component: () => import( '../components/Drugadd.vue')

  },
  {
    path:'/Logo',
    name:'Logo',
    component: () => import( '../components/Logo.vue')

  },
  {
    path:'/Drugform',
    name:'Drugform',
    component: () => import( '../components/Drugform.vue')

  },
  {
    path:'/Purchasedetail',
    name:'Purchasedetail',
    component: () => import( '../components/Purchasedetail.vue')

  },
  {
    path:'/Supplieradd',
    name:'Supplieradd',
    component: () => import( '../components/Supplieradd.vue')

  },
  {
    path:'/Demandsum',
    name:'Demandsum',
    component: () => import( '../components/Demandsum.vue')

  },







]

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
