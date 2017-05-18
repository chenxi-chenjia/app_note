var data=[
	{
		title:'断点换行',
		content:'word-break:break-all;'
	},
	{
		title:'截断文本',
		content:'overflow:hidden;<->text-overflow:ellipsis;<->white-space:nowrap;'
	},{
		title:'background',
		content:'background-size:cover,contain;'
	},{
		title:'webSocket',
		content:'它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。<-> 参照阮一峰博客。'
	}
];


data.forEach(function(v,i){
	v.id=i;
})


export const html_data=data;