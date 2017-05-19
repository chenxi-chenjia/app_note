var data=[
	{
		title:'vue项目搭建',
		content:'vue项目使用vue-cli脚手架搭建项目<->\
		全局安装 vue-cli  npm i vue-cli -g <->\
		创建一个基于webpack 的模板新项目 vue init webpack (my-project省略则在本文件内直接创建) <->\
		安装依赖 (cd-my-project) npm i <->\
		npm run dev <->\
		创建静态文件 npm run build  创建好的静态文件在dist文件夹内'
	},{
		title:'开发文件配置',
		content:'在config文件中的index.js内 “assetsPublicPath” 的值由"/"改为"./"'
	},{
		title:'开发初步',
		content:'将需要引入的一些css+js文件放在static文件内，index.html中因如此文件即可；src文件中位开发文件，app文件应包含<router-view/>标签，为路由显示页面；路由.vue文件中为一个单独完整的页面文件，应该包括 js：<template></template><script/><style></style>标签，vue会自动解析；'
	},{
		title:'事件绑定',
		content:'v-on:event="functionName" 添加事件，事件函数可以放于methods方法内监听；也可以直接内联， v-on:touchend="function(e)" ,传入并执行；在函数名后添加修饰符：v-on：submit.prevent="functionName" 相当于在触发事件时调用event.preventDefault()'
	},{
		title:'缩写',
		content:'v-bind：=> : <-> v-on: => @'
	},{
		title:'计算属性',
		content:'computed 属性 ，是一个对象，在其中放入函数，return 回的值可以作为data的一个值；计算属性是在其依赖项发生改变的时候进行改变，并且会储存起来。 '
	},{
		title:'v-bind',
		content:'根据依赖项进行改变'
	},{
		title:'利用 v-bind 进行类名变换',
		content:'对象语法：<->\
		<div v-bind:class="{ active: isActive }"></div> 根据 isActive 是否为真判断类名添加<->\
		 <div class="static"  v-bind:class="{ active: isActive, "text-danger": hasError }"></div> 判断 isActive 和 hasError 进行判断；<->\
		 数组语法：<->\
		 <div v-bind:class="[activeClass, errorClass]"> <->'
	},{
		title:'v-if',
		content:'v-if="abc",v-else,v-else-if'
	},{
		title:'key',
		content:'向不同的元素中添加不同的key值可以保证元素不被复用'
	},{
		title:'v-for',
		content:'可以循环数组，亦可以迭代对象<->\
		<div v-for="(value, key) in object">{{ key }} : {{ value }}</div>'
	},{
		title:'按键修饰符',
		content:'keyup.enter keyup.alt keyup.shift keyup.meta <->\
		keyup.meta 在windows 对应按键为 "开始" '
	},{
		title:'Vue.set',
		content:'Vue 不允许在已经创建的实例上动态添加新的根级响应式属性 (root-level reactive property)。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上： Vue.set(vm.someObject, "b", 2) <>\
		还可以使用 vm.$set 实例方法，这也是全局 Vue.set 方法的别名：this.$set(this.someObject,"b",2)'
	},{
		title:'vue 动画',
		content:'动画发生的4个阶段 : <->\
		css:v-enter v-enter-active v-leave v-leave-active<->\
		自定义类名： <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight" >'
	},{
		title:'给 animate 动画设置js 钩子',
		content:'<transition\
		  v-on:before-enter="beforeEnter"\
		  v-on:enter="enter"\
		  v-on:after-enter="afterEnter"\
		  v-on:enter-cancelled="enterCancelled"\
		  v-on:before-leave="beforeLeave"\
		  v-on:leave="leave"\
		  v-on:after-leave="afterLeave"\
		  v-on:leave-cancelled="leaveCancelled"\
		>'
	},{
		title:'使用 vue-cli 的一些问题',
		content:'vue-cli 使用使用时，默认使开发中的 .vue 文件为严格编写模式，及每个代码都严格遵循书写规范，对于一些不善于这些规范或不习惯编辑器的代码对齐功能的小伙伴（比如我），就会非常痛苦，简直痛不欲生。但这个问题也是有解决方案的。<->\
		方法就是在 .eslintignore 文件中将不参与书写规范的文件写入。我就来个一个狠的，直接 *.vue  *.js  突然世界就安静了.......'
	},{
		title:'vue-router 使用初级',
		content:'vue-router 使用是放在 <view-router></view-router> 标签内的，所以可以直接将头部和底部共用部分放在 APP.vue 文件中，实现一些你希望的效果'
	}

];


data.forEach(function(v,i){
	v.id=i;
})


export const vue_data=data;