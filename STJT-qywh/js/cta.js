// //动态设置html的font-size
// window.onresize=r;
// function r(){
// 	var winw=window.innerWidth
// 	document.getElementsByTagName("html")[0]
// 	.style.fontSize=winw*0.084745+"px"
// }
// r()

//导航栏滑入样式
$(".nav").on("click","li",function(){
	$(this).addClass("now").siblings("li").removeClass("now")
})

$(document).ready(function(){
	$(".li").click(function(){
		// 点击切换标签样式
		$(".li").removeClass("lig")
		$(this).addClass("lig")
		console.log($(this).attr("data-con1"))
		//点击改变标签页
		$(".bqy").css({"display":"none"})
		$(".bqy").eq($(this).attr("data-con1")).css({"display":"block"})
	})
	
})


