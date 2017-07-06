import Vue from 'vue'
import App from './App.vue'
//下面两行代码来自vue路由文档的说明
import Router from 'vue-router'
import routeConfig from './route'
//导入vue-reserve 就可以获取json数据了
import Resource from 'vue-resource'

Vue.use(Router);
Vue.use(Resource);

var router = new Router({
  routes:routeConfig
});

new Vue({
  el: '#app',
  router,
  mounted(){

  },
  render: h => h(App)
})
