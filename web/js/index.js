define(['jquery', 'layer'],function($, layer) {	
	$('#openwx').on('click', function(){
		layer.alert('吹比请认准我欣');
	});
	
	$('#openphoto').on('click', function(){
		layer.open({
			type: 1,
			title: false,
			closeBtn: false,
			area: ['516px', '620px'],
			skin: 'layui-layer-nobg', 
			shadeClose: true,
			content: $('#tong')
		});
	});
	
});