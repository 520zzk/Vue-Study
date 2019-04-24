import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/home.vue"
import Layout from "../views/layout"
import project from '../views/backend/project.vue'
import workbench from '../views/backend/workbench.vue'
import doc from '../views/backend/doc.vue'
import login from "../components/login.vue"
Vue.use(Router)

// let Layout = (resolve)=>{       //webpack分块加载，有需要便加载
//     return require.ensure([],()=>{
//         resolve(require('../views/layout'))
//     },"layout") //标识 如果某两个一样，则打包成一个文件
// }


// let Layout = (resolve)=>{     //第二种加载方式,不足无法将多个打包成一个文件  
//     return import("../views/layout.vue")
// }

let router = new Router({
    mode:"history",
    linkActiveClass:"is-active",
    routes:[
        {
            path:"/",
            component:Home,
            name:"Home"
        },
        {
            path:"/management",
            name:"Management",
            component:Layout,
            children:[
                {
                    path:"/project",
                    name:"Project",
                    meta:{
                        login:true
                    },
                    component:project
                },
                {
                    path:"/workbench",
                    name:"Workbench",
                    meta:{
                        login:true
                    },
                    component:workbench
                },
                {
                    path:"/doc",
                    name:"Doc",
                    meta:{
                        login:false
                    },
                    component:doc
                },
            ]
        },
        {
            path:"/login",
            name:"Login",
            component:login
        },
        {
            path:"*",
            redirect:"/"    //重定向
        }
    ]

})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(item=> item.meta.login)){
        let info = router.app.$local.fetch('miaov');
        if(info.login){ //已经登陆
            next()
        }else{
        router.push({
            path:'/login',
            query:{
                redirect:to.path.slice(1)
            }
        })
        }
    }else{
        next()
    }
    
})

export default router
