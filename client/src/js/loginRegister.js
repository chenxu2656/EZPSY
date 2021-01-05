//注册登录页面
$('#button-register').click(function() {
	if ($("input[type='submit']").is(':checked') === false) {
		alert('您未勾选用户协议');
	} else {
		document.getElementById("register").submit();
	}
})