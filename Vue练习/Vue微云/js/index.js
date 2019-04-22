var list=[
    {
        fileName:'文件夹1',
        fileType:''
    },
    {
        fileName:'文件夹2',
        fileType:''
    },
    {
        fileName:'陪我去流浪.MP3',
        fileType:'audio/mpeg'
    },
    {
        fileName:'偏爱.MP3',
        fileType:'audio/mpeg'
    },
    {
        fileName:'刘亦菲.jpg',
        fileType:'image/jpeg'
    },
    {
        fileName:'index.html',
        fileType:'text/html'
    },
    {
        fileName:'我的计划.text',
        fileType:'text/plain'
    },
    {
        fileName:'海王.avi',
        fileType:'video/x-msvideo'
    },
    {
        fileName:'反贪风云.avi',
        fileType:'video/x-msvideo'
    }
]
Vue.directive('draw',{
    bind:function(el,binding){
      el.onmousedown = function(ev){
        let L = ev.clientX;
        let T = ev.clientY;
            document.onmousemove = function(ev){
                ev.preventDefault();
                let a = ev.clientX;
                let b = ev.clientY;
                let elRect = el.getBoundingClientRect();
                if(binding.modifiers.boundary){
                    if(ev.clientX < elRect.left){
                            a= elRect.left;
                        }else if(ev.clientX > elRect.right){
                            a = elRect.right
                    }
                    if(ev.clientY < elRect.top){
                            b = elRect.top
                        }else if(ev.clientY > elRect.bottom){
                            b = elRect.bottom
                    }
                }
                let nowL = L < a ? L : a;
                let nowT = T < b ? T : b;
                var w = Math.abs(a - L);
                var h = Math.abs(b - T);
                
                app.draw ={
                    width:w + 'px',
                    height:h + 'px',
                    left:nowL+'px',
                    top:nowT +'px'
                }
            }
            document.onmouseup = function(){
              document.onmousemove = null
                app.draw = {}
            }
            return false;
      }
    }
})
var app = new Vue({
    el:"#app",
    data:{
        list,
        appName:'千年老妖',
        filemodel:'thum',
        filecur:'all',
        mapped:{
            text:['text/html','text/plain','text/css'],
            pic:['image/jpeg'],
            video:['video/x-msvideo'],
            music:['audio/mpeg']
        },
        NowType:'全部',
        draw:{}
    },
    computed:{
        filethis(){
            return this.filecur=='all' ? this.list.filter(item=>item.fileType==""):[];
        },
        fileother(){
            let a = this.list.filter(item=>item.fileType!="");
            if(this.filecur=='all'){
                return a;
            }else{
                return a.filter(item=>this.mapped[this.filecur].includes    (item.fileType))
            }
        }
    },
    methods:{
        fileView(view){
            this.filemodel = view;
        },
        fileCut(view,type){
            this.filecur = view;
            this.NowType = type;
        }
    }
})


/**rectObject = object.getBoundingClientRect();
值节
返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的CSS 边框集合 。

DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。

getBoundingClientRect示例图

空边框盒（译者注：没有内容的边框）会被忽略。如果所有的元素边框都是空边框，那么这个矩形给该元素返回的 width、height 值为0，left、top值为第一个css盒子（按内容顺序）的top-left值。

当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，也就是说，当滚动位置发生了改变，top和left属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）
。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给top、left属性值加上当前的滚动位置（通过window.scrollX和window.scrollY），这样就可以获取与当前的滚动位置无关的值。 */