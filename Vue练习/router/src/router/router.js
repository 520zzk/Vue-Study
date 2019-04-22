import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home.vue'
import about from '@/components/about.vue'
import document from '@/components/document.vue'
import user from '@/components/user.vue'
import login from '@/components/login.vue'

import d_one from '../viem/document/d-one.vue'
import d_two from '../viem/document/d-two.vue'
import d_three from '../viem/document/d-three.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    mode:'history',    //地址栏没有#【好看】（配合router-link可实现单页效果）
    linkActiveClass:'is-active',//设置点击的默认样式,选项卡效果
    scrollBehavior( to,from,savePosition){
      //to 将要去的路由对象
      //来时的路由对象
      //savePosition 前进后退记录的滚动条信息
        if(to.hash){  //利用hash  来是实现滚动
          return {
            selector:to.hash
          }
        }
        if(savePosition){ //利用前后记录的滚动条记录来实现滚动记忆
          return savePosition;
        }else{
          return {x:0,y:0}
        }
    },
    routes:[      //默认为hash方式
    {
      path:'/home',     //http://localhost:8080/home
      name:'Home',  
      meta:{    //用来配置自己需要的信息，$route.meta 获取信息 
        index:0,
        login:true,
        title:'Home'
      },
      component: home
    },
    {
      path:'/login',   
      component: login,
      meta:{
        title:'login'
      }
    },
    {
      path:'/about',    //http://localhost:8080/about
      component: about,
      meta:{
        index:1,
        title:'about'
      }
    },
    {
      path:'/document',    //http://localhost:8080/document
      component: document,
     
      children:[      //嵌套路由，路由中的路由
        {
          path:'',
          component: d_one,
          meta:{
            index:2,
            title:'document'
          },
        },
        {
          path:'two',
          component: d_two
        },
        {
          path:'three',
          name:'Three', //name的用法，在路径较长时，嵌套写起来太多，这时候name就可发挥作用
          component: d_three
        },

      ]
    },
    {
      path:'/user/:svip?/:userId?',  //动态路径 ？表示匹配0次或者多次  
      component: user,
      meta:{
        index:3,
        title:'user'
      }
    }
    // 
    // {
    //   path:'*',
    //   // component:no   表示以上的路径都没有访问，则取访问一个404组件
    //   // redirect:{path:'/home'} //重定向
    //   // redirect:{name:'Home'} //利用name来进行重定向
    //   redirect:(to)=>{
    //       //动态根据不同的路径做出不同的反应
    //       //to 目标路径对象，就是访问的路径的路由信息
    //       return '/home'  //要重新定向，返回一个路劲即可

    //   }
    // }
  ]
})

router.beforeEach((to,from,next)=>{ //全局前置守卫
//实例上的钩子函数，to,form 去那、从哪来
//     {
// next表示一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

// next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
//不执行则不会跳转链接
// next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

// next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航，重定向等

//     }

if(to.meta.login){
  next('/login');
}else{
  next();
}
})
router.afterEach((to,from)=>{
  if(to.meta.title){
    window.document.title = to.meta.title
  }else{
    window.document.title = '默认标题'
  }
})
export default router;