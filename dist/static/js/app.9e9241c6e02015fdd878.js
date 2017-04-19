webpackJsonp([2,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var a=n(71),i=o(a),r=n(70),c=o(r),s=n(204),d=o(s);n(160),n(149),n(148);var l=n(206),u=o(l),f=n(39),m=o(f),v=n(166),p=o(v),h=n(162),g=o(h),b=n(91),R=o(b),y=n(45),k=o(y);n(147),window.axios=m.default,window.querystring=p.default,i.default.prototype.$http=m.default,window.md5=g.default;var w=new u.default({mode:"history",routes:R.default});w.beforeEach(function(t,e,n){t.meta.auth!==!0||k.default.loggedIn()?n():n("/login")}),i.default.use(d.default),i.default.use(u.default),i.default.material.registerTheme("custom",{primary:"light-green",accent:{color:"deep-orange",hue:"A700"},warn:"red",background:{color:"amber",hue:100}}),i.default.material.setCurrentTheme("custom"),new i.default({el:"#app",template:"<App/>",components:{App:c.default},router:w})},,,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={STORAGE_KEY:"todosvue_token",AUTH_CLIENT_ID:"1",AUTH_REDIRECT_URI:"http://localhost:8095/login",API_PROFILE_URL:"http://todosbackend.davidmartinez.2dam.acacha.org:8080/api/v1/loguser",ANDROID_SENDER_ID:"1066055111450",REGISTER_GCM_TOKEN_URL:"http://todosbackend.davidmartinez.2dam.acacha.org:8080/api/v1/user/gcmtoken",GET_MESSAGES_URL:"http://todosbackend.davidmartinez.2dam.acacha.org:8080/api/v1/user/messages"};e.default=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),i=o(a);e.default={loggedIn:function(){return!!window.localStorage.getItem(i.default.STORAGE_KEY)}}},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o,a;n(153),o=n(93);var i=n(197);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(192),i=o(a),r=n(193),c=o(r),s=n(191),d=o(s),l=n(189),u=o(l),f=n(188),m=o(f),v=n(186),p=o(v),h=n(185),g=o(h),b=n(190),R=o(b),y=n(187),k=o(y),w=[{path:"",redirect:"/todos"},{path:"/",redirect:"/todos"},{path:"/todos",component:i.default,meta:{auth:!0}},{path:"/tokens",component:c.default,meta:{auth:!1}},{path:"/profile",component:d.default,meta:{auth:!0}},{path:"/device",component:p.default,meta:{auth:!0}},{path:"/login",component:m.default,meta:{auth:!1}},{path:"/cordova",component:g.default,meta:{auth:!1}},{path:"/notifications",component:R.default,meta:{auth:!1}},{path:"/exit",component:k.default,meta:{auth:!1}},{path:"*",component:u.default,meta:{auth:!1}}];e.default=w},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),i=o(a),r=n(70),c=o(r),s=n(73),d=o(s);e.default={get:function(){return{notifications:this.fetchNotifications()}},fetchNotifications:function(){this.$http.get(i.default.GET_MESSAGES_URL).then(function(t){return t.data},function(t){console.log("error: "+t)})},enable:function(){this.init(),this.register(),this.subscribe("all"),this.process()},init:function(){c.default.push=window.PushNotification.init({android:{senderID:i.default.ANDROID_SENDER_ID},browser:{pushServiceURL:"http://push.api.phonegap.com/v1/push"},ios:{sound:!0,vibration:!0,badge:!0},windows:{}})},register:function(){c.default.push.on("registration",function(t){console.log("registration event: "+t.registrationId);var e=localStorage.getItem("registrationId");if(e!==t.registrationId){localStorage.setItem("registrationId",t.registrationId);var n=new d.default({registration_id:t.registrationId});n.post(i.default.REGISTER_GCM_TOKEN_URL).then(function(t){console.log("GCM token registered OK!")}).catch(function(t){console.log("And error ocurred adding GCM token to backend!"),console.log(t)})}})},subscribe:function(t){c.default.push.subscribe("/topics/"+t,function(){console.log("Success registration to all topic")},function(t){console.log("error registrating to all topic:"),console.log(t)})},process:function(){c.default.push.on("error",function(t){console.log("push error = "+t.message)}),c.default.push.on("notification",function(t){console.log("Notification event RECEIVED!!!!!!!!!!!!"),console.log("Title: "+t.title),console.log("Message: "+t.message),console.log("Foreground: "+t.additionalData.foreground)})}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(45),i=o(a),r=n(92),c=o(r);e.default={name:"app",created:function(){console.log(window.location.href),document.addEventListener("deviceready",this.onDeviceReady,!1)},data:function(){return{logged:!1}},methods:{onDeviceReady:function(){console.log("Working on platform: "+window.device.platform),c.default.enable(),this.overrideAlerts()},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},open:function(t){console.log("Opened: "+t)},close:function(t){console.log("Closed: "+t)},isLogged:function(){this.logged=i.default.loggedIn()},overrideAlerts:function(){navigator.notification&&(window.alert=function(t){navigator.notification.alert(t,null,"Alert","OK")})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},beforeDestroy:function(){document.removeEventListener("deviceready",this.onBeforeDestroy,!1)},methods:{onDeviceReady:function(){console.log("device Ready")},onBeforeDestroy:function(){console.log("device BeforeDestroy")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{model:""}},created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},methods:{onDeviceReady:function(){this.model=window.device.model}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},methods:{onDeviceReady:function(){navigator.notification.confirm("Do you want to quit?",this.onConfirmQuit,"QUIT",["OK","Cancel"])},onConfirmQuit:function(t){"1"===t&&(navigator.app?navigator.app.exitApp():navigator.device&&navigator.device.exitApp())}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),i=o(a);e.default={data:function(){return{authorized:!1}},created:function(){if(document.location.hash)var t=this.extractToken(document.location.hash);t&&this.saveToken(t),null==this.token&&(this.token=this.fetchToken()),this.token&&(this.authorized=!0,this.$emit("eventLogin"))},methods:{extractToken:function(t){return t.match(/#(?:access_token)=([\S\s]*?)&/)[1]},saveToken:function(t){window.localStorage.setItem(i.default.STORAGE_KEY,t)},fetchToken:function(){return window.localStorage.getItem(i.default.STORAGE_KEY)},logout:function(){window.localStorage.removeItem(i.default.STORAGE_KEY),this.authorized=!1,this.$emit("eventLogout")},login:function t(){console.log("Do connect here!"),e={client_id:i.default.AUTH_CLIENT_ID,redirect_uri:i.default.AUTH_REDIRECT_URI,response_type:"token",scope:""};var e=window.querystring.stringify(e);if(window.cordova&&"browser"!==window.device.platform){var n=window.cordova.InAppBrowser.open("http://todosbackend.davidmartinez.2dam.acacha.org:8080/oauth/authorize?"+e,"_blank","location=yes"),t=this;n.addEventListener("loadstart",function(e){var o=e.url,a=null;if(o.split("#")[1]&&(a=o.split("#")[1]),a){var i=t.extractToken("#"+String(a));i&&(t.saveToken(i),t.authorized=!0,n.close())}})}else console.log("http://todosbackend.davidmartinez.2dam.acacha.org:8080/oauth/authorize?"+e),window.location.replace("http://todosbackend.davidmartinez.2dam.acacha.org:8080/oauth/authorize?"+e)},initlogout:function(){this.openDialog("sureToLogout")},openDialog:function(t){this.$refs[t].open()},onCloseSureToLogout:function(t){"ok"===t&&this.logout()}}}},function(t,e){"use strict"},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{notifications:{type:Array,default:function(){return[]}}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),i=o(a);e.default={data:function(){return{avatar:"",id:null,name:null,email:null,createdAt:null,updatedAt:null,connecting:!0}},computed:{avatarHash:function(){return window.md5(this.email)}},created:function(){console.log("Component profile created"),this.fetchUserProfile()},methods:{fetchUserProfile:function(){var t=this;this.$http.defaults.headers.common.Authorization="Bearer "+window.localStorage.getItem(i.default.STORAGE_KEY),this.$http.get(i.default.API_PROFILE_URL).then(function(e){t.connecting=!1,console.log(e.data),t.id=e.data.id,t.name=e.data.name,t.email=e.data.email,t.createdAt=e.data.created_at,t.updatedAt=e.data.updated_at,t.avatar=t.fetchAvatar()},function(e){t.connecting=!1,t.showConnectionError()})},showConnectionError:function(){this.$refs.connectionError.open()},fetchAvatar:function(){return"https://s.gravatar.com/avatar/"+this.avatarHash+"?s=80"}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(103),i=o(a),r=n(10),c=o(r),s=n(205),d=o(s);e.default={components:{"vue-pull-refresh":d.default},data:function(){return{todos:[],from:0,to:0,total:0,perPage:0,page:1,connecting:!0,configRefresh:{errorLabel:"Oops, something went wrong",startLabel:"Swipe",readyLabel:"Release",loadingLabel:"Refreshing"}}},created:function(){var t=this;setTimeout(function(){t.fetchData()},500)},methods:{fetchData:function(){return this.fetchPage(1)},fetchPage:function(t){var e=this;this.$http.defaults.headers.common.Authorization="Bearer "+window.localStorage.getItem(c.default.STORAGE_KEY),this.$http.get("http://todosbackend.davidmartinez.2dam.acacha.org:8080/api/v1/task?page="+t).then(function(t){e.connecting=!1,console.log(t.data),e.todos=t.data.data,e.from=t.data.from,e.to=t.data.to,e.total=t.data.total,e.perPage=t.data.per_page},function(t){e.connecting=!1,console.log(t.data)})},onPagination:function(){},onRefresh:function(){var t=this;return this.connecting=!0,new i.default(function(t,e){setTimeout(function(){t()},500)}).then(function(){t.fetchPage(1)}).catch(function(){t.showConnectionError()})}}}},function(t,e){"use strict"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd1XVe53XvvD2eGQ/lXQcKuDwc2eFlCAGnUn7kT6T86J/+aNTgsWPchJJYciEOCQ8hF+G0hFCIHRSEqAuJBCqRaUEIEbmBppAIBGnESwZje8COZ+y587j3PLq+ffadGJix53HvPevcuz60xPjec89ZZ+39nf04+9vLSZKEFArFzHA1BAqFEkShUIIoFEoQhUIJolAoQRQKJYhCoQRRKJQgCoUSRKFQKEEUCiWIQrFo+Gv/8/YH+f/nsMWSHHMChyhxqPTTdyncWyJ3ScD/ztipiB3wXSqu6P17avN+TyFC5ggv4tRnmoxWTP1+5F+Mz17GPvPl49EKBWd3UsfXllPiso8VcYtmPba3fNuKrBVXrGFCbrdPwXndFL49ltI367roOpSUI4pGypv9s7q+ltj6JxqOQ07Bo/DgxGb2/a8cX0CnAWXJ5etz2TqdHiXHKlKj9w6i9XX8Ic41DmI8FVHhmmXk85MmRhCzJoiTWnig9LfJRHihgydxzAxJhBr7Bh/hK3yu+p9568FliTJF2aKMZfVd/kQOcKP6OBmS9+Rjm4zJ6faoeN0gOUn61MncLX4CJ+MRhe+P/dRxhfew2Df4CF/hs4jWg8vQYUKYMuWyRRkLjeHQ8YP0Z9mekVjA8Qj3VVcuoeDiXu63lkUE0ym6FA5PXBaNVr7qtPumGyPR4Bt8hK/wWUR5chn6XJYoU5StUHL8l+XEx2axhkS6yk+chJuP4rXLyOkIKJkS0B67adcqfL/0Y4pixxSysK6V8Yl9Mz7i3272NRFlhzJsu24Z5l9E9Ahmwfrpoj7uw3fZtktsRZKjIXnndlLxin7+W8ZTBwPf6I+Tg9HwxK2Ob8citbCoBoaxBxMCvsFH+CqjHCtUvLzflKWUcpwB91gupG5f9/Rtx39ZZBtmWyJtphKzHTQW0diP36b4aJmcLj/zGaSkHJPb4SWFi/tOJd8bTqd9s48VBRh4RKeUX/vjgXg8cpyCmz05xkJylxSoa8M5RF0eJaVIIkGOsg2yTc3UgpD94psiWxEOqDNYoOIXuHnGwE5AXUTFi46FTnRw4l/dwEm7/pSxcYnCF/gE3zInh52RRJkVP7/MlKFQcgCbjifHTAQBfsb2qsgBO3e1Cpf3UXBej3nRJKKrxU/rcH/pKzz4vNIQuRJTEmZklbg6EL4SPsE3GQPzinmfhbJDGQolB+r8w58abs5y8DqRt4ABeptLRR7koY9NleybEYw/MPisvF/ayT1/SvDewcnIcG32wfiCAbEvoCZyGaGsitdyz6XdTctQJq6fcT5mloNfYvu5yFZkpEz+RT0UrFoqpxVBV+vQxIrkaPnrbqdvXs6hcjbU+Jq4Nvvwd/BFRNeq2npwWfkX95iyE9p6PM72P/MhCPANTBSKu5WITHcC074Y9CUTkYglKBgcV/aVtlM5Kpp/RHFjDdfka7MP/2wG6m72661QNigjlBXKTGBtsjWKNs5atCf44Uds3xc5YD8Wknd2BxWuGjCzIxLWQzlFj+IjU108OL7bafM5sm5DDdfka/8T+9AJXyTMpqFsUEYoK5SZ0NbjVlvX500Q4Ha2A+JuCcEvhVS8qp/8MzspHhMSfO7mVPaP35BMRp9JsCQldbX+hmvxNfnamzJfqVvtWnGZoGxQRigroYs6UbfvOGHn4ORVkTaIbEWwtqg3MNO+Zql0JGCdVuCayhDuG9uJB7vp+oR17FbZc+NauCauLWLmKkqXr6NsUEYoK6GtxwY6CXXnEs0n2faIHLCPhhR8bikFKwRN+xZddHWu5a7Ol9yCZ2ZwHKdOxufGNeKRqS/hmnLWW1VMmQSrl5oyEkqOPbZu02IJAsic9sU7B+5uF9cOmqUfeLOdOaAZYb/CA+M/Ic9NxUoYMNfD/PT84f7xB807EAnrrbgMUBZt1w1SEpCIqfjF1Om5EuQNth0iu1r8tPLP76LCpX2yWpHDk2dGH018p6brtD5hOHf04cR3okOTZ0lqPVAW3gVdlMhdrfsTW6drRhDgRrYJcbeKZQxTkenvegNt6YBQwrQvOxG+P3ZHEia9TuClS9Br1XKge8XnxLlxjelzZ/2w4tijDMxyoHIsVQg1zvYPcy7KeZx4jG2zyFakFJF7Whu1XT2QvhfJeryeVNdplYPo4Pi9hKd7VVxVC8O5cH4+N65hXgoKuGfEHmWAskjGxI49Ntu6XHOCAD9ie1PcLSepjDNY00fB8m6KpSyJx/jgg9LfJEfLK40818w+LXY5e5zKaMfKl+DcIlSCZp0cd3U59igDI4+WOa2LunvfvDoD9RrcNLqAjDy3yzfrtKqbAkggSDIZmSlYxzz9a8BaJ101zF2rh3BuSTJaCKGMDEGujHbedXch0X2ebbdEkkDC6a9cQoWVguS53P0JP5xcHY1W/tppD9KxgrdAw5QxnwPn4nOukrPeqkzBJb0m9oJltLtt3a07QYD1IkMAeS7/hw0BXMhzJwXJc/eV7kuiyIN8OOGuUhLP06JUeoxz4FxiZLRouTsDM9WO2OdBRtsIgrzHtk3kgH00JO+cTipc2S9jqyCaluf2xwcnfuB6LndHuEsSzdP4N/gtzoFzSZHRIsaQQiPmidyXgttsnW0YQYDvsh2ROGBPxkMqXjNA/qlCFsnZ8UdlX+kfk0pymlnMWH2JOBfz0sWI+C3OMS1dzPphhPVWHOPC5wdMzIUOzFFHb1lwB2ARF+ZOPt0gshWBPLe/wCRZlu6CIkSei/cE0fD4g2ZbVWceyxH5WPwGvzXrrSTJaDnG7oBoGS3qaCULggCPsv1W5IAd8tzLllJwvpx1WthMIfyg9OVotHy1WVQ4V37wsfgNfkuSZLQcW8Q4lruU/RVbRykrggDXiwwN3uQWnXTa1xMkz2W/on2lndNajpNtAGePw2/MOicBMlqs+8K7GBNbjrFgGe2iX0nUgiAvs+0S2YpgndaFPVRc3SdmVanZlfGjifOiw5PrT/oGvPpG/vDkEH4jZ70Vt86rl5rYimmdP41/s3Uzc4Isup9XNxwvz+0tyNAlONPrtO6hctR+QnluKqNt52O3pxvtClhvxTH0egtmEwbBMlrUxU21OFGtCHKYbavIATv3j90z26kIea4QZRtahfhIuT0anrjH7O3rpjNVHzPIaLG3Lh8Tj5TbRQihjlNyehxTwTLarbZOiiEIcBfbPnGhMtroChXW9JN/VqeYdyPEY4nwwPj6ZCL8C1T+T61JhDqRv8MxZgwlJG2BxzEsrBmgeEzseqt9ti6SNIIA8t6wm901eFDZ66d7M4UkQ56LVgTTvvtKaRqFqoTWymjxGb6LpUzrImYcuzaOIWKJmAptPWpaB2sd+V+yvSB1wB6s7qXgwiUyBpbJdBqFq6MjU18mKCKhRsTyEbx558/wnRmYJzLiV+DYBat6JQ/MX7B1UCxBAKHy3IQrH6W7MhY9MWkUMNAN948/8Mm35/jMDIKlpC3gmBWQtsAjifkE61b36kGQP7DdL7KrVZXnXiYpjYKZxj09Gh7f4kB4yIa/8ZmU1brIIYiYIXaJ3Nbjflv3xBME+DZbSVwIzfIIK89dJkSea18Ihu+XflD9yPztCJnW5Ri5VRntpNh8giVb5ygvBIHu9yaRrchYRO6fFU0CSTPQlDLte6zshx9O3g3D3yJajySd4EDaAsQMsRPaetxk61zty+YTCXRqjf9jO19cOLnyYV+p8QffpcreMXJ7BeRgh77Ds6SIYhGbMBgB2tld1DW0nGL4VxbZfKBbdUHdhol1dl7mOi0MOjttGgWT11lAwU9r1mMSsX0oxwSxgYyWOvKXtiAvBPkV239I7GqZdVqX9FDw2V5+UoYipn2nt/WRMK3LMQlW9poYCZ7WfcrWsdwSBNggMrRYdcLdhjas0+q28lzJOc8bOU7jWLh2AwzEyLxclYm6Z2ZuBEE+YLtTZEVA9tzPdBh5biJ3q5rGD8yRjXbNAPkcm0RuyjTUqf3NQBDge2yHJFaGeDyi4tUD5J3WIXmzs8Y9NDgG3un80OCYIDZCHxqHbJ2iZiEIGmnB8twgzYIkd7vMxiBON59GLJyBQLKMdiM1qOPXyMn2f2f7X5EDdshzkUbhAtED0oZMXCAGiIXgtAW/YXusURdr9NsoufLcgmP20zKy2ErrNSNGRuunMUAshL7zABq61q/RBPkd2yNSn57+X3ZTQZA8t7H3H5p7RwwEt6KP2DrUtAQBIIUsiwt99Kf+tydFntuocVhVRltNWyBTRlumGslopRNkhO1mkRVlLCT3jHYzqyU48WSN+1ZWRou0BZDRyp3Ju9nWnaYnCHA3216JlQWy0gKy557dJSaNQn0nKNL1VrhnwTLavbbOUKsQBBApzzVpFHqsPFdIGoW6AfeG7cMwrcv3TC0io80LQZ5me07kU3WkYqSlhYvkpFGoz8C8bO7RyGjlpi14ztaVliMIIFOeizQKbpI+WdsDGfLcWvcmsaK53b4gdUW3lENZXjxrgrzNdq/IAftohbzzOql4eV/zjUUcu96K7w33KFhGi7rxVisTBEBSxWPiiqYqz71mGfmDQuS5tSIHstHyPZnd7+XKaI+RgKSxEggySWmKaXkVaSwi5xSbRmGiSdZpxVZGy/eEexMso73R1o2WJwiwk+11kQNZrNO6oo+Cc7vz39Wy07q4l+CKfnNvQu/ndVsnSAkifcCOAXq7R8W1y9JdRvI87QvfnTRtgdPeujLavBLkv9meEPnUHS2Tf1EPFT67lOKRnE77munrsrkH/+IeydPXqAO/VoLMDMhz5T2irTzXpFHoKeRPnluV0XYX0mlduTLamIRJtKUR5CDbbSIrGPfX/eUdVFyTQ3luku6OaNIW/HmH5LQFt9k6oAQ5Ab7PNiyxkmGndUhRvTNyJM9F1wrZaM9IZbQmG63MocewxIejRIKg+DaKbEXGI3KWBtT2hUFKyonUZeEfB3xkX4vsM3wXvIx/IwmMqCu0WH/B9qLIpzG6Wp/rpWBFj/x1WnaCAb4G7LPgad0XbZmTEmTukDnti0yzgZvKcwNPtDzXyGjZR5ONFincVEbbVAR5je0hkU/lkTL5F3TZzQ2EvjysJr1hH/0LuiVPTz9ky1oJsgB8iwQsN5hplISns5Hn9hXl9eurMlr2zUzrVsQuk5m0ZUxKkIXhKNsWkQN2yHNPhzx3WbqQMRZGYCOjXWZ8FDzjtsWWsRJkEfgh2zvyOvhWnovsucu75GTPtdlo4RN8i+W+s3nHli0pQRaPIXEeVeW53V46YJciz2Uf4IvxiX0juW/9h/JQ8fJCkGfZnpE5YK9QsHIJBZcIkOdW141d3Gt8EiyjfcaWqRKk6Z84kOc6duODjmzluUZGyz4g6Q18UhltaxHkXbbtIgfsRyvknQt5bobZc6dltP3Gl0SudmW7LUslSJ1mPUbFeWVUepDnDpB3SgazRtW0BXxt+ABfhE7rypyVbCKCTLF9U2QrgjQKg3b7zskGv3eI0+XsuDZ8EJy2YJMtQyVIHfEztldFDtghz728j4LzGphGoZq2gK9ZMDuwiH3ngTJ7OG+VLY8EAeTKc9ts9lwk42zEOi2st+JrYZIA1xYso12Xx4qWV4K8xPZzka3ISCrPDVY1YJ1WtfVYZWW0ctdbPW7LTAnSQHyDJCoykEYhTNdpuUsK6YDZqQ85cG5cw6y3CsWmLYBXG/NayfJMkI8oVR/KG7AfC8k7u4MKVw2kM1r1eB2RpDNXuAauJVhGe6stKyVIBrid7YA4r6o5N5BG4cxOI3mtaeWtymj53LiG4FwmKJs78lzB8k4QVIsN4ryqynN7AzP1ShXIc2tYg3GuSpJO6/aKltHK3KWmhQgCPMm2R+SAfTSkANlzV9Rw2rc6MDcyWtHZaPfYsiElSPaQOYVYiSnxiIprB8kpeGn+v8U2mZD8FjxzTpybKjqtqwQ5Od5g2yGyq4Xsued3UeHSvsW3IlUZLZ8L5xSctmCHLRMliCBgN/AJcV7F6SpbjBe8gUWkUaimLeBzmOUsU2JltOMkcbd+JQiNkYB8ErNVbPe0Nmq72i4kXMiwNUnfe+AcOJfgfCWbbVkoQQTiR2xvivPKynODNX0ULF9AGoVq2gL+Lc4hWEaL2N/XTBWq2Qgic3BYled2+ekeVfOV51az0WKNF59DsIx2XbNVpmYkyPNsuyWSBBJYf+USKsxHnlvNRsu/8WXLaHfb2CtBcoD1Ir2CPJf/wxSt2xmkupGT9c6QtoCPNdO66FfJldGub8aK1KwEeY9tm8gB+2hI3jmdVLii/+RbBdktfHAsfpPIfSm4zcZcCZIjfJftiMQBO1IQQBrrn3qCRYZ20SOOMTLacbHrrRDjW5q1EjUzQbiTTzeIbEUgz+232XNne59RfX+CbLT9omW0iHFFCZJPPMr2W5EDdshzL1tKwfkzrNOqrrfi73CMYBntKzbGpATJL64X6RXWZRVtxlnP+VgaBZO2wEu/wzGatkAJUk+8zLZLZCuCdVoXciux+rhVuXYVMD7Dd7Hc9Va7bGyVIE0Amf3kaXnuIHm9qTwXhr/xmWAZbUXk+E4JsmAcZtsqcsAOee6Z7VS08lwY/sZngmW0W21MlSBNhLvY9onzCqtIxipUuKqf3L6iMfyNz4RO6+6zsWwJ+NRawNvep8S1IhMxucie+8VT0o+6PIqPiB17rG+lCtNqBPkl2wts14gbsCONwqVLzT8Fr7d6wcawZeBS60Hm1GSSTu+a6d5EY6cEyQ5/YLtf4oCd4iQ1ma3H/TZ2SpAWwLfZSqSYK0o2ZqQEaQ1AN32T1vs54yYbMyVIC+GBVuwyLLBL+kCr3rzb4oV/vdZ/jZESZHb8iqS9F5GFp2yMlCAtjCENgcZGCTI79rPdqWH4FO60sVGCKOh7bIc0DNM4ZGNCShAFEFKOsyDVARttTJQgGoJpPMb2Gw2DicFjGgYlyExYpyHQGChBZsfv2B5p4ft/xMZAoQSZFZso3TKo1VC2965QgpwQI2w3t+B932zvXaEEOSnuZtvbQve7196zQgkyZ6zXe1UoQWbH02zPtcB9PmfvVaEEmTeG9B6VIIrZ8RbbvU18f/fae1QoQRYMJKU81oT3dYwkJj1VguQOk9REaY2Pw4323hRKkEVjJ9vrTXQ/r9t7UihBaobr9V6UIIrZ8Wu2J5rgPp6w96JQgtQcG2jmhGl5QWzvQaEEqQsOst2WY/9vs/egUILUtZIN59Dv4ZyTWwmSEyDnUx7luRtJar4qJUjT4RdsL+bI3xetzwolSMOwTn1Vgihmx2tsD+XAz4esrwolSMPxLZK9XGPS+qhQgmSCo2xbBPu3xfqoUIJkhh+yvSPQr3esbwolSOYYUp+UIIrZ8SzbM4L8ecb6pFCC6BNbWw8lSB7wLtt2AX5st74olCDikPWskfRZNSVIi2OKst2+c5P1QaEEEYuH2V7N4Lqv2msrlCDisa5FrqkEUSwIL7E93sDrPW6vqVCC5AaN0l/kVZ+iBGlxfMR2awOuc6u9lkIJkjvcwXagjuc/YK+hUILkEgnVdxeRDfYaCiVIbvEk2546nHePPbdCCZJ7rMvJORVKkEzwBtuOGp5vhz2nQgnSNMBu6uM1OM84Nedu80qQFscY1SYfx2Z7LoUSpOlwH9ubi/j9m/YcCiWIDth1YK4EaUU8z7Z7Ab/bbX+rUII0PdY36DcKJUgu8R7btnkcv83+RqEEaRncwnZkDscdsccqlCAthQrbDXM47gZ7rEIJ0nJ4lO2VE3z/ij1GoQRpWaxb4HcKJUhL4GW2XTN8vst+p1CCtDw+Oc6Y6/hEoQRpCRxm23rcv7fazxRKEIXFXZRuwBDZvxUC4GsIREHflguDkyQqaVYotIulUChBFAoliEKhBFEolCAKhRJEoVCCKBRKEIVCCaJQKJQgCoUSRKFQgigUShCFIhP8vwADACog5YM65zugAAAAAElFTkSuQmCC"},,,,function(t,e,n){var o,a;n(151),o=n(94);var i=n(195);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(158),o=n(95);var i=n(202);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(155),o=n(96);var i=n(199);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(159),o=n(97);var i=n(203);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(156),o=n(98);var i=n(200);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(152),o=n(99);var i=n(196);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(154),o=n(100);var i=n(198);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(157),o=n(101);var i=n(201);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,a;n(150),o=n(102);var i=n(194);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    TOKENS HERE\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    Cordova Template\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"notifications"}},[n("h1",[t._v("Received notifications: ")]),t._v(" "),t._l(t.notifications,function(e,o){return n("md-card",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(e.user.name))])]),t._v(" "),n("md-card-content",[t._v(t._s(e.message))])],1)})],2)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"phone-viewport"},[o("md-toolbar",[o("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("menu")])],1),t._v(" "),o("h2",{staticClass:"md-title"},[t._v("Todos")])],1),t._v(" "),o("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{"md-swipeable":""},on:{open:function(e){t.open("Left")},close:function(e){t.close("Left")}}},[o("md-toolbar",{staticClass:"md-large"},[t.logged?o("md-avatar",[o("img",{attrs:{src:n(181),alt:"Avatar"}})]):t._e(),t._v(" "),o("div",{staticClass:"md-toolbar-container"},[o("h3",{staticClass:"md-title"},[t._v("Todos")])])],1),t._v(" "),o("md-list",[o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/todos"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("list")]),o("span",[t._v("Todos")])],1)],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/tokens"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("redo")]),o("span",[t._v("Tokens")])],1)],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/device"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("android")]),o("span",[t._v("Device")])],1)],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/contacts"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("contacts")]),o("span",[t._v("Contactes")])],1)],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/cordova"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("dns")]),o("span",[t._v("Cordova")])],1)],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/notifications"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("alarm")]),o("span",[t._v("Notifications")])],1)],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/profile"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("face-profile")]),o("span",[t._v("Profile")])],1),t._v(" "),o("md-divider",{staticClass:"md-inset"})],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/login"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("lock")]),o("span",[t._v("Login/Logout")])],1),t._v(" "),o("md-divider",{staticClass:"md-inset"})],1),t._v(" "),o("md-list-item",[o("router-link",{attrs:{exact:"",to:"/exit"},nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[o("md-icon",[t._v("close")]),o("span",[t._v("Exit")])],1),t._v(" "),o("md-divider",{staticClass:"md-inset"})],1),t._v(" "),o("md-list-item",[o("md-avatar",[o("img",{attrs:{src:"https://placeimg.com/40/40/people/5",alt:"People"}})]),t._v(" "),o("span",[t._v("Abbey Christansen")]),t._v(" "),o("md-button",{staticClass:"md-icon-button md-list-action"},[o("md-icon",{staticClass:"md-primary"},[t._v("chat_bubble")])],1)],1)],1)],1),t._v(" "),o("transition",{attrs:{name:"bounce","enter-active-class":"animated slideInLeft","leave-active-class":"animated slideOutLeft"}},[o("router-view",{on:{eventLogin:t.isLogged,eventLogout:t.isLogged}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",{attrs:{"md-with-hover":""}},[n("md-card-header",[n("md-avatar",[n("img",{attrs:{src:t.avatar,alt:"David Martinez"}})]),t._v(" "),n("div",{staticClass:"md-title"},[t._v(t._s(t.id)+" "+t._s(t.name))]),t._v(" "),n("div",{staticClass:"md-subhead"},[t._v(t._s(t.email))])],1),t._v(" "),n("md-card-content",[n("md-spinner",{directives:[{name:"show",rawName:"v-show",value:t.connecting,expression:"connecting"}],staticClass:"md-accent",attrs:{"md-size":150,"md-indeterminate":""}}),t._v(" "),n("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[n("md-input-container",[n("label",[t._v("Name")]),t._v(" "),n("md-input",{directives:[{name:"show",rawName:"v-show",value:!t.connecting,expression:"!connecting"}],attrs:{placeholder:"Put your name here"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),n("md-input-container",[n("label",[t._v("Email")]),t._v(" "),n("md-input",{directives:[{name:"show",rawName:"v-show",value:!t.connecting,expression:"!connecting"}],attrs:{placeholder:"Put your email here"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("md-input-container",[n("label",[t._v("Created at")]),t._v(" "),n("md-input",{directives:[{name:"show",rawName:"v-show",value:!t.connecting,expression:"!connecting"}],attrs:{placeholder:"Date here"},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}})],1),t._v(" "),n("md-input-container",[n("label",[t._v("Updated at")]),t._v(" "),n("md-input",{directives:[{name:"show",rawName:"v-show",value:!t.connecting,expression:"!connecting"}],attrs:{placeholder:"Date at here"},model:{value:t.updatedAt,callback:function(e){t.updatedAt=e},expression:"updatedAt"}})],1)],1)],1),t._v(" "),n("md-card-actions",[n("md-button",[t._v("Edit")]),t._v(" "),n("md-button",[t._v("Delete")])],1),t._v(" "),n("md-snackbar",{ref:"connectionError",attrs:{"md-position":"bottom center","md-duration":"4000"}},[n("span",[t._v("Connection error. Please reconnect using connect button!.")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    ROUTE NOT FOUND\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-pull-refresh",{attrs:{"on-refresh":t.onRefresh,config:t.configRefresh}},[n("md-table-card",[n("md-toolbar",[n("h1",{staticClass:"md-title"},[t._v("Todos")]),t._v(" "),n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("filter_list")])],1),t._v(" "),n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("search")])],1)],1),t._v(" "),n("md-table",[n("md-table-header",[n("md-table-row",[n("md-table-head",[t._v("#")]),t._v(" "),n("md-table-head",[t._v("Name")]),t._v(" "),n("md-table-head",[t._v("Priority")]),t._v(" "),n("md-table-head",[t._v("Done")])],1)],1),t._v(" "),n("md-spinner",{directives:[{name:"show",rawName:"v-show",value:t.connecting,expression:"connecting"}],staticClass:"md-accent",attrs:{"md-size":150,"md-indeterminate":""}}),t._v(" "),n("md-table-body",t._l(t.todos,function(e,o){return n("md-table-row",[n("md-table-cell",[t._v(t._s(o+t.from))]),t._v(" "),n("md-table-cell",[t._v(t._s(e.name))]),t._v(" "),n("md-table-cell",[n("md-progress",{attrs:{"md-progress":10*e.priority}})],1),t._v(" "),n("md-table-cell",[n("md-switch",{staticClass:"md-primary",attrs:{id:"done",name:"done"},model:{value:e.done,callback:function(t){e.done=t},expression:"todo.done"}})],1)],1)}))],1),t._v(" "),n("md-table-pagination",{attrs:{"md-size":t.perPage,"md-total":t.total,"md-page":t.page,"md-label":"Tasks","md-separator":"of","md-page-options":[5,15,25,50]},on:{pagination:t.onPagination}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[n("md-input-container",[n("label",[t._v("Model")]),t._v(" "),n("md-input",{attrs:{readonly:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v("Login")])]),t._v(" "),n("md-card-content",[n("md-button",{directives:[{name:"show",rawName:"v-show",value:!t.authorized,expression:"!authorized"}],staticClass:"md-raised md-primary",nativeOn:{click:function(e){t.login(e)}}},[t._v("Login")]),t._v(" "),n("md-button",{directives:[{name:"show",rawName:"v-show",value:t.authorized,expression:"authorized"}],staticClass:"md-raised md-primary",nativeOn:{click:function(e){t.initlogout(e)}}},[t._v("Logout")])],1),t._v(" "),n("md-dialog-confirm",{ref:"sureToLogout",attrs:{"md-title":"Logout","md-content":"Are you sure you want to logout?","md-ok-text":"Ok","md-cancel-text":"Cancel"},on:{close:t.onCloseSureToLogout}})],1)},staticRenderFns:[]}},,,,,function(t,e){},function(t,e){}]);
//# sourceMappingURL=app.9e9241c6e02015fdd878.js.map