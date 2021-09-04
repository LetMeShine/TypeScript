import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router';
import Routers  from './router'
// 引入view UI组件
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.use(VueRouter);
const router = new VueRouter({
    routes: Routers
})

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
