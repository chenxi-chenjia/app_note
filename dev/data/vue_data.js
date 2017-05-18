var data=[
	{
		title:'vue项目搭建',
		content:'vue项目使用vue-cli脚手架搭建项目<->\
		全局安装 vue-cli  npm i vue-cli -g <->\
		创建一个基于webpack 的模板新项目 vue i webpack (my-project省略则在本文件内直接创建) <->\
		安装依赖 (cd-my-project) npm i <->\
		npm run dev <->\
		创建静态文件 npm run build  创建好的静态文件在dist文件夹内'
	},{
		title:'开发文件配置',
		content:'在config文件中的index.js内 “assetsPublicPath” 的值由"/"改为"./"'
	},{
		title:'开发初步',
		content:'将需要引入的一些css+js文件放在static文件内，index.html中因如此文件即可；src文件中位开发文件，app文件应包含<router-view/>标签，为路由显示页面；路由.vue文件中为一个单独完整的页面文件，应该包括 js：<template></template><script/><style></style>标签，vue会自动解析；'
	}

];


data.forEach(function(v,i){
	v.id=i;
})


export const vue_data=data;