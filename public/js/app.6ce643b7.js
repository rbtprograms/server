(function(e){function t(t){for(var s,o,a=t[0],c=t[1],u=t[2],l=0,p=[];l<a.length;l++)o=a[l],r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={1:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=c;i.push([8,0]),n()})({"0puU":function(e,t,n){"use strict";var s=n("C40d"),r=n.n(s);r.a},"3IGt":function(e,t,n){},"5gkA":function(e,t,n){"use strict";var s=n("vKYt"),r=n.n(s);r.a},8:function(e,t,n){e.exports=n("Vtdi")},Auh5:function(e,t,n){},BrpT:function(e,t,n){},C40d:function(e,t,n){},"E/T6":function(e,t,n){},LbGE:function(e,t,n){e.exports=n.p+"img/seasonly_logo_white.e6eacdcb.svg"},"M/vZ":function(e,t,n){"use strict";var s=n("cMPI"),r=n.n(s);r.a},Mv9E:function(e,t,n){"use strict";var s=n("E/T6"),r=n.n(s);r.a},"P/Lg":function(e,t,n){"use strict";var s=n("BrpT"),r=n.n(s);r.a},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var s=n("Kw5r"),r=n("jE9Z"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",[s("img",{attrs:{id:"top-logo",src:n("LbGE")}}),s("nav",[s("router-link",{staticClass:"link",attrs:{to:"/"}},[e._v("HOME")]),e._v("   |\n         \n        "),s("router-link",{staticClass:"link",attrs:{to:"/about"}},[e._v("ABOUT")]),e._v("   |\n         "),s("router-link",{staticClass:"link",attrs:{to:"/search"}},[e._v("SEARCH")]),e._v("\n          |\n         \n        "),e.isLoggedIn?s("span",[s("router-link",{staticClass:"link",attrs:{to:"/shopping-list"}},[e._v("LIST")]),e._v("\n            |\n           \n          "),s("router-link",{staticClass:"link",attrs:{to:"/favorite-recipes"}},[e._v("FAVORITES")])],1):s("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggleLogin(t)}}},[e._v("REGISTER/LOGIN")]),e.isLoggedIn?s("span",[e._v("\n            |\n           \n          "),s("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("LOGOUT")])]):e._e()],1)]),s("router-view",{attrs:{userShoppingList:e.userShoppingList,addToMasterList:e.addToMasterList,addToMasterFavoriteList:e.addToMasterFavoriteList,deleteFromMasterList:e.deleteFromMasterList,updateMasterList:e.updateMasterList,clearMasterList:e.clearMasterList,userid:e.userid,toggleZoom:e.toggleZoom}}),s("transition",{attrs:{name:"fade"}},[e.isZoomed?s("auth",{attrs:{id:"auth",toggleZoom:e.toggleZoom,loggedIn:e.loggedIn}}):e._e()],1)],1)},o=[],a=(n("91GP"),"K0ACWNU09ihIYSJfG0UmG4u99d9Oj2Da"),c="http://localhost:3000/api";function u(e){return console.log("response is",e),e.ok?e.json():e.json().then(function(e){throw e.message})}function d(e){var t={};e&&(t["Content-Type"]="application/json");var n=localStorage.user;if(n)try{t["Authorization"]=JSON.parse(n).id}catch(e){localStorage.removeItem("user")}return t}function l(e){return fetch("".concat(c,"/auth/signin"),{method:"POST",headers:d(!0),body:JSON.stringify(e)}).then(u)}function p(e){return fetch("".concat(c,"/auth/signup"),{method:"POST",headers:d(!0),body:JSON.stringify(e)}).then(u)}function h(e){var t="https://api2.bigoven.com/recipes?pg=1&rpp=5&any_kw="+encodeURIComponent(e)+"&api_key="+a;return fetch(t).then(function(e){return e.json()})}function f(e){var t="https://api2.bigoven.com/recipe/"+e+"?api_key="+a;return fetch(t).then(function(e){return e.json()})}function g(){return fetch("".concat(c,"/search"),{headers:{"Content-Type":"application/json"}}).then(u)}function m(e){return console.log("user is ",e),fetch("".concat(c,"/list/").concat(e),{headers:d()}).then(u)}function v(e){return console.log("ingredients are",e),fetch("".concat(c,"/list"),{method:"POST",headers:d(!0),body:JSON.stringify(e)}).then(u)}function y(e){return console.log("in the api",e),fetch("".concat(c,"/list/update"),{method:"PUT",headers:d(!0),body:JSON.stringify(e)}).then(u)}function _(e){return console.log("package is",JSON.stringify(e.items)),fetch("".concat(c,"/list/update/").concat(e.userid),{method:"DELETE",headers:d(!0),body:JSON.stringify(e.items)}).then(u)}function b(e){return fetch("".concat(c,"/list/").concat(e),{method:"DELETE",headers:d()}).then(u)}function w(){return fetch("".concat(c,"/months"),{headers:d()}).then(u)}function L(e){return fetch("".concat(c,"/favorite-recipes/").concat(e),{headers:d()}).then(u)}function S(e){return console.log("this is in api bobby",e),fetch("".concat(c,"/favorite-recipes"),{method:"POST",headers:d(!0),body:JSON.stringify(e)}).then(u)}var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"full-screen",attrs:{id:"click-me"},on:{click:e.handleZoom}}),n("div",{staticClass:"full-screen",attrs:{id:"container-main"}},[n("div",{attrs:{id:"container-login"}},[n("form",{key:e.newUser?"abc":"def",on:{submit:function(t){t.preventDefault(),e.newUser?e.handleSignUp():e.handleSignIn()}}},[n("h1",[e._v(e._s(this.newUser?"Sign Up":"Sign In"))]),n("span",{attrs:{id:"exit"},on:{click:function(t){return t.preventDefault(),e.handleZoom(t)}}},[n("b",[e._v("X")])]),n("div",{attrs:{id:"message"}}),e._v("\n      Username:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.username,expression:"creds.username"}],ref:"username",attrs:{required:"",pattern:".{3,20}"},domProps:{value:e.creds.username},on:{keyup:e.validate,input:function(t){t.target.composing||e.$set(e.creds,"username",t.target.value)}}}),n("br"),e._v("\n      Password:\n      "),"checkbox"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{required:"",name:e.newUser?"new-password":"current-password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,20}",type:"checkbox"},domProps:{checked:Array.isArray(e.creds.password)?e._i(e.creds.password,null)>-1:e.creds.password},on:{keyup:function(t){return t.preventDefault(),e.validate(t)},change:function(t){var n=e.creds.password,s=t.target,r=!!s.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);s.checked?o<0&&e.$set(e.creds,"password",n.concat([i])):o>-1&&e.$set(e.creds,"password",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.creds,"password",r)}}}):"radio"===(e.show?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{required:"",name:e.newUser?"new-password":"current-password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,20}",type:"radio"},domProps:{checked:e._q(e.creds.password,null)},on:{keyup:function(t){return t.preventDefault(),e.validate(t)},change:function(t){e.$set(e.creds,"password",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{required:"",name:e.newUser?"new-password":"current-password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,20}",type:e.show?"text":"password"},domProps:{value:e.creds.password},on:{keyup:function(t){return t.preventDefault(),e.validate(t)},input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.newUser,expression:"!newUser"}],attrs:{id:"show-hide"},on:{click:function(t){t.preventDefault(),e.show=!e.show}}},[e._v(e._s(e.show?"Click to Hide Your Password":"Click to Show Your Password"))]),n("br"),n("br"),n("span",{directives:[{name:"show",rawName:"v-show",value:e.newUser,expression:"newUser"}],attrs:{id:"requirements"}},[e._m(0),n("br"),n("strong",[e._v("Password must contain:")]),n("br"),n("span",{attrs:{id:"lower"}},[e._v("1 lower case letter")]),n("br"),n("span",{attrs:{id:"upper"}},[e._v("1 upper case letter")]),n("br"),n("span",{attrs:{id:"number"}},[e._v("1 number")]),n("br"),n("span",{attrs:{id:"symbol"}},[e._v("1 symbol")]),n("br"),n("span",{attrs:{id:"limit"}},[e._v("8-20 characters")]),n("br")]),n("br"),n("div",{attrs:{id:"handlers"}},[n("a",{attrs:{id:"link-switch"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v("\n          "+e._s(e.newUser?"Already a member?":"New user?")+"\n        ")]),n("button",{attrs:{type:"submit"}},[e._v("\n          Submit\n        ")])])])])])])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("strong",[n("span",{attrs:{id:"user-limit"}},[e._v("Username must be 3-20 characters")])])}];n("SRfc");function T(){return{username:"",password:""}}var I={props:{toggleZoom:{type:Function,required:!0},loggedIn:{type:Function,required:!0}},data:function(){return{newUser:!1,creds:T(),label:null,show:!1,valid:!1}},methods:{toggle:function(){this.newUser=!this.newUser,this.valid=!this.newUser,this.show=!1,this.creds.password="",this.validate()},validate:function(){var e=document.getElementById("user-limit"),t=document.getElementById("lower"),n=document.getElementById("upper"),s=document.getElementById("number"),r=document.getElementById("limit"),i=document.getElementById("symbol");this.creds.username.match(/^.{3,20}$/)?e.style.color="green":e.style.color="red",this.creds.password.match(/[a-z]/g)?t.style.color="green":t.style.color="red",this.creds.password.match(/[A-Z]/g)?n.style.color="green":n.style.color="red",this.creds.password.match(/[\d]/g)?s.style.color="green":s.style.color="red",this.creds.password.match(/^.{8,20}$/)?r.style.color="green":r.style.color="red",this.creds.password.match(/\W/g)?i.style.color="green":i.style.color="red"},handleSignUp:function(){var e=this,t=document.getElementById("message"),n=!1;this.creds.username=this.creds.username.toLowerCase(),p(this.creds).then(function(s){t.textContent="Successful creation!",e.creds=T(),n=!0,e.loggedIn(s),e.toggleZoom()}),n||(t.textContent="Username already exsists!")},handleSignIn:function(){var e=this,t=document.getElementById("message"),n=!1;this.creds.username=this.creds.username.toLowerCase(),l(this.creds).then(function(s){t.textContent="Welcome back "+s.username.charAt(0).toUpperCase()+s.username.slice(1),e.creds=T(),n=!0,e.loggedIn(s),e.toggleZoom()}),n||(t.textContent="Invalid username or password!",this.creds.password="")},handleZoom:function(){this.toggleZoom()}},mounted:function(){this.$refs.username.focus()}},M=I,R=(n("0puU"),n("KHd+")),Z=Object(R["a"])(M,k,C,!1,null,"7130ea97",null),O=Z.exports,E={name:"app",data:function(){return{isZoomed:!1,isLoggedIn:!1,favoritesList:[],userShoppingList:[],userid:null}},methods:{toggleZoom:function(){console.log("everyday I'm togglin"),this.isZoomed=!this.isZoomed},logout:function(){this.isLoggedIn=!1,this.favoritesList=[],this.userShoppingList=[],this.userid=null,localStorage.clear(),this.$router.push("/")},loggedIn:function(e){localStorage.setItem("userid",e.id),this.userid=e.id,console.log("user logged in",this.userid),this.isLoggedIn=!0,this.setMasterList(this.userid)},toggleLogin:function(){this.isZoomed=!0},addToMasterList:function(e){var t=this;v(e).then(function(n){n.added&&(t.userShoppingList=t.userShoppingList.concat(Object.assign(e)))})},setMasterList:function(e){var t=this;return m(e).then(function(e){t.userShoppingList=Object.assign(e)})},deleteFromMasterList:function(e){var t=this,n={};n.userid=this.userid,n.items=e,_(n).then(function(e){e.updated&&(t.userShoppingList=t.userShoppingList.filter(function(e){return!e.selected}))})},clearMasterList:function(){var e=this;b(this.userid).then(function(t){t.cleared&&(e.userShoppingList=[])})},updateMasterList:function(e){var t=this;console.log("\n\n list is",e),y(e).then(function(n){n.updated&&(t.userShoppingList=e)})},addToMasterFavoriteList:function(e){var t=this;S(e).then(function(n){n.added&&(t.favoritesList=e)})}},components:{Auth:O},created:function(){this.userid=parseInt(localStorage.getItem("userid")),this.userid&&(this.setMasterList(this.userid),this.isLoggedIn=!0)}},x=E,F=(n("M/vZ"),Object(R["a"])(x,i,o,!1,null,"2b8c3fce",null)),U=F.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-main",attrs:{id:"home"}},[n("p",{staticClass:"content"},[e._v("Our Seasonly app helps you to consume food in a more environmentally conscious way by identifying and purchasing foods that are in season! Search for ingredients that are in season this month, find recipes using those items and automatically add them to your shopping list. You can also save your favorite recipes!")]),n("blockquote",[e._v("Supporting local food production is so much healthier for people. It's better for the local economy, and it's a lot of fun."),n("br"),e._v("\n  - Jack Johnson")]),n("a",{staticClass:"ghost-button",attrs:{href:"/#/search"}},[e._v("Get Started")])])}],j={},D=j,N=(n("iOlZ"),Object(R["a"])(D,A,P,!1,null,"733999b6",null)),$=N.exports,J=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-main",attrs:{id:"about"}},[n("h1",[e._v("Team Running with Scissors")]),n("h3",[e._v("Wow look at those guys!")]),n("div",[n("div",{staticClass:"image",staticStyle:{}}),n("p",[e._v("Mark is one cool dude")])]),n("div",[n("div",{staticClass:"image",staticStyle:{}}),n("p",[e._v("Robert is one cool dude")])]),n("div",[n("div",{staticClass:"image",staticStyle:{}}),n("p",[e._v("Erik is one cool dude")])]),n("div",[n("div",{staticClass:"image",staticStyle:{}}),n("p",[e._v("Robyn is one cool dude")])])])}],B={},G=B,V=(n("ZPob"),Object(R["a"])(G,J,q,!1,null,"ef7c7484",null)),W=V.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container-main",attrs:{id:"container-whole"}},[n("div",[n("h4",[e._v("It's simple to get started. Just choose a month, category of food, click on a food and see your results!")]),n("div",{attrs:{id:"month-holder"}},e._l(e.months,function(t){return n("button",{key:t.id,staticClass:"filter-button",class:[e.monthChoice===t.id?e.active:""],on:{click:function(n){e.monthChoice=t.id}}},[e._v(e._s(t.month))])})),n("span",{staticClass:"food-type-button-container"},[n("button",{staticClass:"filter-button",class:[0===e.ingredientType?e.active:""],on:{click:function(t){e.ingredientType=0}}},[e._v("All")]),n("button",{staticClass:"filter-button",class:[1===e.ingredientType?e.active:""],on:{click:function(t){e.ingredientType=1}}},[e._v("Veggies")]),n("button",{staticClass:"filter-button",class:[2===e.ingredientType?e.active:""],on:{click:function(t){e.ingredientType=2}}},[e._v("Fruit")]),n("button",{staticClass:"filter-button",class:[3===e.ingredientType?e.active:""],on:{click:function(t){e.ingredientType=3}}},[e._v("Meat")]),n("button",{staticClass:"filter-button",class:[4===e.ingredientType?e.active:""],on:{click:function(t){e.ingredientType=4}}},[e._v("Seafood")])]),n("br"),e._l(e.filteredIngredients,function(t){return n("button",{key:t.index,staticClass:"filter-button results",on:{click:function(n){e.handleSearch(t.food)}}},[e._v("\n        "+e._s(t.food)+"\n      ")])})],2),n("div",{attrs:{id:"container-main"}},[e.searched?n("ul",e._l(e.searchResults,function(t){return n("li",{key:t.RecipeID,on:{click:function(n){n.preventDefault(),e.handleView(t.RecipeID)}}},[n("div",{attrs:{id:"image"}},[n("img",{attrs:{src:t.PhotoUrl}})]),n("h1",[e._v(e._s(t.Title))]),n("p",[e._v(e._s(t.Description))])])})):e._e(),e.recipeZoom?n("recipe-card",{attrs:{selectedRecipe:e.selectedRecipe,toggleRecipe:e.toggleRecipe,addToMasterList:e.addToMasterList,toggleZoom:e.toggleZoom,userid:e.userid,userShoppingList:e.userShoppingList,addToMasterFavoriteList:e.addToMasterFavoriteList}}):e._e()],1)])])},z=[],K=(n("xfY5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"full-screen",attrs:{id:"container-main"}},[n("div",{attrs:{id:"container-recipe"}},[n("div",{attrs:{id:"exit"},on:{click:function(t){return t.preventDefault(),e.handleZoom(t)}}},[n("b",[e._v("X")])]),n("h1",[e._v(e._s(e.selectedRecipe.Title))]),n("button",{on:{click:e.handleSaveFav}},[e._v("Add to favorites")]),n("div",{attrs:{id:"container-details"}},[e.addedToList?n("div",{attrs:{id:"items-added"}},[n("h3",[e._v("Items added to shopping list!")])]):n("div",{attrs:{id:"ingredients"}},[n("ul",e._l(e.selectedRecipe.Ingredients,function(t,s){return n("li",{key:s},[e._v("\n            "+e._s(t.Name)+"\n          ")])})),n("button",{on:{click:function(t){return t.preventDefault(),e.handleAdd(t)}}},[e._v("Add to shopping list")])]),n("div",{attrs:{id:"instructions"}},[n("p",[e._v(e._s(e.selectedRecipe.Instructions))])])])]),n("span",{staticClass:"full-screen",attrs:{id:"click-me"},on:{click:function(t){return t.preventDefault(),e.handleZoom(t)}}})])])}),H=[],X=n("a94B"),Q={props:{toggleRecipe:{type:Function,require:!0},selectedRecipe:Object,addToMasterList:{type:Function},addToMasterFavoriteList:{type:Function},userid:Number,userShoppingList:Array},data:function(){return{addedToList:!1}},methods:{handleZoom:function(){this.toggleRecipe()},handleAdd:function(){var e=this;if(console.log("this userid is",this.userid,Object(X["a"])(this.userid)),"number"!==typeof this.userid||isNaN(this.userid))this.toggleRecipe(!0);else{var t=this.selectedRecipe.Ingredients.filter(function(t){return e.userShoppingList.every(function(e){return t.Name!==e.item})}),n={};n=t.reduce(function(t,n,s){return t[s]={item:n.Name,selected:!1,user_id:parseInt(e.userid)},t},[]),this.addToMasterList(n),this.addedToList=!0}},handleSaveFav:function(){if(null===this.userid)this.toggleRecipe(!0);else{var e={};e=[{recipe_name:this.selectedRecipe.Title,user_id:parseInt(this.userid),recipe_id:this.selectedRecipe.RecipeID,selected:!1}],this.addToMasterFavoriteList(e)}}}},ee=Q,te=(n("5gkA"),Object(R["a"])(ee,K,H,!1,null,"57bb5126",null)),ne=te.exports,se={props:{addToMasterList:{type:Function,required:!0},addToMasterFavoriteList:{type:Function,required:!0},toggleZoom:{type:Function,required:!0},userid:Number,userShoppingList:Array},components:{RecipeCard:ne},data:function(){return{searchTerm:"",searchResults:null,searched:!1,seasonalIngredients:[],recipeZoom:!1,selectedRecipe:null,ingredientType:0,active:"active",monthChoice:6,months:null}},created:function(){var e=this,t=new Date,n=t.getMonth();this.monthChoice=n+1,g().then(function(t){e.seasonalIngredients=t}),w().then(function(t){e.months=t})},methods:{handleSearch:function(e){var t=this;h(e).then(function(e){t.searchResults=e.Results,t.searched=!0})},handleView:function(e){var t=this;console.log(e),f(e).then(function(e){t.recipeZoom=!0,t.selectedRecipe=e})},toggleRecipe:function(e){e?this.toggleZoom():this.recipeZoom=!this.recipeZoom}},computed:{monthFilteredIngredients:function(){var e=this;return this.seasonalIngredients.filter(function(t){return 0===e.monthChoice||e.monthChoice===t.month_id})},filteredIngredients:function(){var e=this;return this.monthFilteredIngredients.filter(function(t){return 0===e.ingredientType||e.ingredientType===t.type_id})},currentMonth:function(){switch((new Date).getMonth()){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"Dicember"}}}},re=se,ie=(n("Mv9E"),Object(R["a"])(re,Y,z,!1,null,"76d56a46",null)),oe=ie.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-main",attrs:{id:"favorite-recipes"}},[e.recipeZoom?n("recipe-card",{attrs:{selectedRecipe:e.selectedRecipe,toggleRecipe:e.toggleRecipe,userShoppingList:e.userShoppingList,userid:e.userid,addToMasterList:e.addToMasterList}}):e._e(),n("ul",e._l(e.userFavorites,function(t){return n("li",{key:t.RecipeID,on:{click:function(n){n.preventDefault(),e.handleView(t.recipe_id)}}},[e._v(e._s(t.recipe_name)+"\n    ")])}))],1)},ce=[],ue={data:function(){return{userFavorites:[],selectedRecipe:{},recipeZoom:!1}},props:{userShoppingList:Array,userid:Number,addToMasterList:Function},components:{RecipeCard:ne},created:function(){var e=this;L(localStorage.getItem("userid")).then(function(t){e.userFavorites=t})},methods:{handleView:function(e){var t=this;f(e).then(function(e){t.recipeZoom=!0,t.selectedRecipe=e})},toggleRecipe:function(){this.recipeZoom=!this.recipeZoom}}},de=ue,le=(n("P/Lg"),Object(R["a"])(de,ae,ce,!1,null,"254d2761",null)),pe=le.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-main",attrs:{id:"shopping-list"}},[n("form",[e.userShoppingList.length>0?n("ul",[n("h2",{staticClass:"list-header"},[e._v("Shopping List")]),e._l(e.userShoppingList,function(t,s){return n("li",{key:s,class:t.selected?"checked":"unchecked",on:{click:function(n){n.preventDefault(),e.handleUpdate(t)}}},[e._v("\n        "+e._s(t.item)+"\n      ")])})],2):n("div",{attrs:{id:"please-add"}},[n("h2",[e._v("Please add items to your shopping list.")])]),n("div",{attrs:{id:"buttons"}},[n("button",{staticClass:"ghost-button",on:{click:function(t){return t.preventDefault(),e.handleClear(t)}}},[e._v("Clear List")]),n("button",{staticClass:"ghost-button",on:{click:function(t){return t.preventDefault(),e.handleClearSelected(t)}}},[e._v("Clear Selected")])])])])},fe=[],ge={props:{updateMasterList:{type:Function,required:!0},deleteFromMasterList:{type:Function,required:!0},clearMasterList:{type:Function,required:!0},userShoppingList:Array},methods:{handleUpdate:function(e){e.selected=!e.selected,this.updateMasterList(this.userShoppingList)},handleClearSelected:function(){var e=this.userShoppingList.filter(function(e){return e.selected});this.deleteFromMasterList(e)},handleClear:function(){this.clearMasterList()}}},me=ge,ve=(n("wySo"),Object(R["a"])(me,he,fe,!1,null,"112111ac",null)),ye=ve.exports,_e=new r["a"]({routes:[{path:"/",component:$},{path:"/about",component:W},{path:"/search",component:oe},{path:"/favorite-recipes",component:pe},{path:"/shopping-list",component:ye},{path:"*",redirect:"/"}]});s["a"].config.productionTip=!1,s["a"].use(r["a"]),s["a"].component("ViewRouter"),new s["a"]({router:_e,render:function(e){return e(U)}}).$mount("#app")},ZPob:function(e,t,n){"use strict";var s=n("xLwP"),r=n.n(s);r.a},cMPI:function(e,t,n){},iOlZ:function(e,t,n){"use strict";var s=n("Auh5"),r=n.n(s);r.a},vKYt:function(e,t,n){},wySo:function(e,t,n){"use strict";var s=n("3IGt"),r=n.n(s);r.a},xLwP:function(e,t,n){}});
//# sourceMappingURL=app.6ce643b7.js.map