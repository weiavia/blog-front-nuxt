exports.ids=[4],exports.modules={148:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return h}));var o=n(42),r=n(4),c=n(46),l=n(5);const d={filters:{time(t){let time=Object(o.b)(t);return`${time.year}年${time.month}月${time.day}日 ${time.hour}:${time.minute}:${time.second}`},className(t){let e=r.c.find(e=>{if(e.type==t)return e});return e?e.name:"null"}}},h={filters:{sourcePrefix:t=>`${c.a}/static/${t}`,time(t){let time=Object(o.b)(t);return`${time.month}月${time.day}日 ${time.hour}:${time.minute}:${time.second}`},timeParagraphFilter(t){let time=Object(o.b)(t);return Object(o.g)(time.hour)}},methods:{sourcePrefix:t=>(t=encodeURIComponent(t),`${c.a}/static/${t}`)}};e.b={methods:{async eventPreCheckAuth(t){localStorage.getItem("token")||(t.preventDefault(),Object(l.a)())}}}},157:function(t,e,n){var content=n(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("33260ebf",content,!0,t)}},167:function(t,e,n){"use strict";n.r(e);var o=n(157),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},168:function(t,e,n){(e=n(2)(!1)).push([t.i,".triangle[data-v-6cc7a252]{width:0;height:0;border:10px solid transparent;border-bottom-color:hsla(0,0%,100%,.2);transform:rotate(-90deg);position:absolute;left:-20px;top:10px}.timeline .main[data-v-6cc7a252]{width:calc(100% - 10px);height:100%}.timeline .main .content[data-v-6cc7a252]{padding-left:40px;padding-bottom:40px;box-sizing:border-box;border-left:1px solid hsla(0,0%,100%,.2)}.main .circle[data-v-6cc7a252]{position:absolute;width:10px;height:10px;background:#fff;border-radius:50%;border:5px solid #058;left:-50px;top:10px}.main .textarea[data-v-6cc7a252]{position:relative;z-index:200;width:100%;background:hsla(0,0%,100%,.2)}.main .textarea textarea[data-v-6cc7a252]{background:none;width:100%;min-height:80px;border:none;outline:none;padding:10px;box-sizing:border-box}.main .textarea header[data-v-6cc7a252]{line-height:40px;height:40px;padding:0 10px;border-bottom:1px solid #999;overflow:hidden;position:relative}.main .textarea header .area_show[data-v-6cc7a252]{font-size:40px;vertical-align:middle;color:#555;transform:rotate(90deg)}.main .textarea header .file_form[data-v-6cc7a252]{position:absolute;left:-60px;top:-60px;width:100px;height:100px;opacity:0;cursor:pointer;z-index:2}.main .textarea header>.iconfont[data-v-6cc7a252]{margin-right:10px;color:#333}.main .textarea header span[data-v-6cc7a252]{font-size:12px;color:#666}.main .textarea header .writed[data-v-6cc7a252]{font-size:14px;cursor:pointer}.main .item[data-v-6cc7a252]{position:relative;width:100%;background:hsla(0,0%,100%,.2);margin-top:20px;border-radius:4px;padding:10px;box-sizing:border-box;font-size:14px}.main .item header[data-v-6cc7a252]{display:block;padding-bottom:10px;font-size:12px}.main .item header i[data-v-6cc7a252]{font-size:12px}.main .item .text[data-v-6cc7a252]{color:#444;line-height:1.6}.main .half[data-v-6cc7a252]{width:50%}.main .imgs[data-v-6cc7a252]{width:200px;height:200px;border:1px solid #aaa;margin-top:20px;cursor:pointer;position:relative}.main .imgs img[data-v-6cc7a252]{width:100%;height:100%;opacity:0}.main .imgs .tag[data-v-6cc7a252]{position:absolute;color:#fff;padding:2px;right:0;bottom:0;background:hsla(0,0%,100%,.2)}.main .img_tag[data-v-6cc7a252]{font-size:12px;padding:6px;background:hsla(0,0%,100%,.5);display:inline-block;border-radius:0 10px 0 0}.main .img_tag .iconfont[data-v-6cc7a252]{font-size:12px}.nav .wapper[data-v-6cc7a252]{position:relative;display:inline-block;padding-right:40px;padding-bottom:10px}.nav .wapper .year[data-v-6cc7a252]{font-size:14px;margin-bottom:10px;cursor:pointer;padding-top:10px}.nav .wapper .year.active[data-v-6cc7a252]{color:#058}.nav .wapper .month[data-v-6cc7a252]{font-size:12px}.nav .wapper .month p[data-v-6cc7a252]{margin-bottom:5px;text-decoration:underline;cursor:pointer;color:#555}.nav .wapper .month p.active[data-v-6cc7a252]{color:#058}.nav .line[data-v-6cc7a252]{position:absolute;height:100%;width:2px;background:hsla(0,0%,100%,.2);right:0}",""]),t.exports=e},181:function(t,e,n){"use strict";n.r(e);var o=n(47),r=n(45),c=n(5),l=n(4),d=n(42);function h(param){let t=l.b+"/timeline"+Object(d.e)(param);return Object(c.b)({url:t,data:param})}var m=n(148),v={middleware:"common",mixins:[m.c,m.b],async asyncData({isDev:t,route:e,store:n,env:o,params:r,query:c,req:l,res:d,redirect:m,error:v}){let x=await h();return console.log(x),{timelines:x}},data:()=>({textareaShow:!0,weather:null,timeParagraph:"",content:"",timelines:[],imgs:[],showarea:!1,page:0}),created(){this.timeParagraph=Object(d.g)()},mounted(){console.log(this.timelines),this.$refs.file.addEventListener("change",this.uploadImg,!1);let t=this;document.tianqi=function(e){console.log("天气："),console.log(e),t.weather=e};let script=document.createElement("script");document.body.appendChild(script),script.src="https://tianqiapi.com/api?version=v6&appid=42324257&appsecret=CkpQQ6GC&callback=document.tianqi&city=衡阳"},methods:{selectFile(t){t.preventDefault()},clearImg(){this.imgs=[]},async more(){let t=await h({page:++this.page});this.timelines=this.timelines.concat(t)},async uploadImg(t){let e=t.target.files,n=await Object(r.d)(e);this.imgs=n.data.data},async submit(){let param={content:this.content,address:this.weather.city,weather:this.weather.wea+this.weather.tem+"℃",photos:this.imgs};await function(param){let t=l.b+"/timeline";return Object(c.b)({url:t,type:"post",data:param})}(param);this.timelines.unshift({content:this.content,address:this.weather.city,weather:this.weather.wea+this.weather.tem,creteTime:(new Date).getTime(),photos:this.imgs}),this.content="",this.imgs="",this.$notify.success({title:"提示",message:"发表成功!",position:"top-right"})}},components:{Scroll:o.a}},x=n(1);var component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{staticClass:"timeline clearfix",on:{onEnd:t.more}},[n("div",{staticClass:"main fr"},[n("div",{staticClass:"content"},[n("div",{staticClass:"textarea"},[n("i",{staticClass:"circle"}),t._v(" "),n("header",{staticClass:"clearfix"},[n("div",{staticClass:"fl"},[n("input",{ref:"file",staticClass:"file_form",attrs:{type:"file",multiple:"",accept:"image/gif, image/jpeg, image/png"},on:{click:function(e){return t.eventPreCheckAuth(e)}}}),t._v(" "),n("i",{staticClass:"iconfont icon-tupian pointer",attrs:{title:"插入图片"}}),t._v(" "),n("span",{staticClass:"tianqi"},[t._v("  "),t.weather?n("span",[t._v(" "+t._s(t.weather.city)+" "+t._s(t.weather.wea)+" "+t._s(t.weather.tem)+"℃")]):t._e()]),t._v(" "),n("span",[t._v(t._s(t._f("time")(new Date))+" "+t._s(t.timeParagraph)+" ")])]),t._v(" "),n("div",{staticClass:"fr"},[t.showarea?n("span",{directives:[{name:"show",rawName:"v-show",value:t.textareaShow,expression:"textareaShow"}],staticClass:"writed",on:{click:function(e){t.eventPreCheckAuth(e),t.submit()}}},[t._v("写好了")]):t._e(),t._v(" "),n("i",{staticClass:"iconfont pointer area_show active",class:{"icon-shousuo2":t.showarea,"icon-shousuo1":!t.showarea},on:{click:function(e){t.showarea=!t.showarea}}})])]),t._v(" "),t.showarea?n("div",[n("textarea",{directives:[{name:"show",rawName:"v-show",value:t.textareaShow,expression:"textareaShow"},{name:"model",rawName:"v-model",value:t.content,expression:"content"}],domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("footer",[n("p",{directives:[{name:"show",rawName:"v-show",value:this.imgs.length,expression:"this.imgs.length"}],staticClass:"img_tag"},[t._v(t._s(this.imgs.length)+"张图片 "),n("i",{staticClass:"iconfont icon-guanbi pointer",on:{click:t.clearImg}})])])]):t._e()]),t._v(" "),t._l(t.timelines,(function(e){return n("div",{staticClass:"item"},[n("div",{staticClass:"triangle"}),t._v(" "),n("div",{staticClass:"circle"}),t._v(" "),n("header",[n("i",{staticClass:"iconfont icon-tianqi"}),t._v(" "),n("span",[t._v(t._s(e.address)+" "+t._s(e.weather)+",")]),t._v(" "),n("span",[t._v(t._s(t._f("time")(e.creteTime))+" - "+t._s(t._f("timeParagraphFilter")(e.creteTime))+" ")])]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(e.content))]),t._v(" "),e.photos[0]&&e.photos[0].src?n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"imgs",style:{background:"url("+t.sourcePrefix(e.photos[0].src)+") no-repeat center center",backgroundSize:"cover"}},[t._l(e.photos,(function(e){return n("img",{attrs:{src:t._f("sourcePrefix")(e.src)}})})),t._v(" "),n("p",{staticClass:"tag"},[t._v(t._s(e.photos.length)+"张")])],2):t._e()])}))],2)])])}),[],!1,(function(t){var e=n(167);e.__inject__&&e.__inject__(t)}),"6cc7a252","27d0ca03");e.default=component.exports}};