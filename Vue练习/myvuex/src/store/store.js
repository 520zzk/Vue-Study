import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store  = new Vuex.Store({
    state:{ //所有的状态
        count:100  
    },
    mutations:{ 
        //唯一修改的事件回调函数,要修改必须在这里
        //同步操作，异步操作放在Actions
        addCount(state,obj){    //state 就是保存所有状态的 见上面
            state.count +=obj.n;
        },
        deCount(state,obj){
            state.count -=obj.de;
        }
    },
    actions:{
        addAction(context){
            setTimeout(()=>{
                //改变提交状态，提交一个mutations
                context.commit('addCount',{n:5})
            },1000)
        }
    }
})

export default store