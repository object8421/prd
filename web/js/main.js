require.config({
	baseUrl: 'js',
    paths: {
        jquery: 'jquery.min',
    },
	shim: {
　　　　'layer': {
　　　　　　deps: ['jquery'],
　　　　　　exports: 'layer',
　　　　}
　　}
});

define(['jquery', 'layer'],function($, layer) {
	layer.config({
    path: 'js/' 
	});
	
	$('#openreg').on('click', function(){
		layer.open({
			type: 1,
			title :'我要注册,马上买买买',
			closeBtn: 1,
			area: ['516px', '620px'],
			shadeClose: true,
			content: $('#reg')
		});
	});
});