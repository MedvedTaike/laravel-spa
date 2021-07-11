(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{27:function(e,r,t){"use strict";t.r(r);var n=t(2),s=t(5),i=t(1);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d={mixins:[s.validationMixin],validations:{phone:{required:i.required,numeric:i.numeric,maxLength:Object(i.maxLength)(10),minLength:Object(i.minLength)(10)},name:{required:i.required,maxLength:Object(i.maxLength)(15),minLength:Object(i.minLength)(4)},password:{required:i.required,maxLength:Object(i.maxLength)(12),minLength:Object(i.minLength)(6)},address:{required:i.required}},data:function(){return{name:"",address:"",password:"",phone:"",loading:!1,errors:null}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&e.push("Имя не должен превышать 15 символов!"),!this.$v.name.minLength&&e.push("Слишком короткое имя!"),!this.$v.name.required&&e.push("Заполните поле пожалуйста!"),e):e},addressErrors:function(){var e=[];return this.$v.address.$dirty?(!this.$v.address.required&&e.push("Заполните поле пожалуйста!"),e):e},phoneErrors:function(){var e=[];return this.$v.phone.$dirty?(!this.$v.phone.maxLength&&e.push("Номер не должен превышать 10 символов!"),!this.$v.phone.minLength&&e.push("Слишком короткий номер!"),!this.$v.phone.required&&e.push("Заполните поле пожалуйста!"),!this.$v.phone.numeric&&e.push("Нужно вводить только цифры!"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.maxLength&&e.push("Пароль не должен превышать 12 символов!"),!this.$v.password.minLength&&e.push("Слишком короткий password!"),!this.$v.password.required&&e.push("Заполните поле пожалуйста!"),e):e}},methods:a(a({},Object(n.b)(["userLogin"])),{},{register:function(){this.$v.$invalid?this.$v.$touch():(this.loading=!0,this.$http.post("/api/register",{phone:this.phone,name:this.name,address:this.address,password:this.password}).then((function(e){201==e.status&&(this.userLogin(e.data),this.loading=!1)}),(function(e){this.errors=e.data,this.loading=!1})))}})},c=t(0),h=Object(c.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",[t("v-row",{staticClass:"justify-center"},[t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-card",[t("v-app-bar",{attrs:{color:"orange darken-4",dark:""}},[t("v-card-title",{staticClass:"text-h7"},[e._v("Регистрация")])],1),e._v(" "),t("v-card-text",[e.loading?t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{size:50,width:7,color:"purple",indeterminate:""}})],1):e.loading||e.errors?!e.loading&&e.errors?t("div",[t("v-alert",{attrs:{outlined:"",type:"warning",prominent:"",border:"left"}},[e._v("\n                    Введите правильные данные!\n                    ")])],1):e._e():t("form",[t("v-text-field",{attrs:{"error-messages":e.nameErrors,counter:15,label:"Ваше имя.",required:""},on:{input:function(r){return e.$v.name.$touch()},blur:function(r){return e.$v.name.$touch()}},model:{value:e.name,callback:function(r){e.name=r},expression:"name"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.addressErrors,label:"Введите ваш адрес.",required:""},on:{input:function(r){return e.$v.address.$touch()},blur:function(r){return e.$v.address.$touch()}},model:{value:e.address,callback:function(r){e.address=r},expression:"address"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.phoneErrors,counter:10,label:"Введите рабочий телефон.",required:""},on:{input:function(r){return e.$v.phone.$touch()},blur:function(r){return e.$v.phone.$touch()}},model:{value:e.phone,callback:function(r){e.phone=r},expression:"phone"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.passwordErrors,counter:12,label:"Введите желаемый пароль.",required:""},on:{input:function(r){return e.$v.password.$touch()},blur:function(r){return e.$v.password.$touch()}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1)]),e._v(" "),t("v-card-actions",{staticClass:"justify-center"},[t("v-btn",{attrs:{depressed:"",color:"error",rounded:""},on:{click:e.register}},[e._v("\n                    Регистрация\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=h.exports}}]);