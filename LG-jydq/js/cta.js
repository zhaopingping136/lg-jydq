//动态设置html的font-size
function r(){
	var winw=window.innerWidth
	document.getElementsByTagName("html")[0]
	.style.fontSize=winw*0.1331557+"px"
}
r()

//banner插件
    var swiper = new Swiper('.swiper1', {
      cssMode: true,
      navigation: {
        nextEl: '.cj_z1',
        prevEl: '.cj_y1',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
    });
	//banner下轮播展示插件
    var swiper = new Swiper('.swiper2', {
      slidesPerView: 4,
      direction: getDirection(),
      navigation: {
        nextEl: '.cj_z2',
        prevEl: '.cj_y2',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        }
      }
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      // var direction = window.innerWidth <= 0 ? 'vertical' : 'horizontal';

      return 'horizontal';
    }
	
	
	
$(document).ready(function(){
	//banner750宽切换图片
	function bnr(){
		//调用动态rem单位
		r()
		console.log(innerWidth)
		if(innerWidth>751){
			$(".bn_img").eq(0).attr({"src":"../images/cta1.jpg"})
			$(".bn_img").eq(1).attr({"src":"../images/cta3.jpg"})
			$(".bn_img").eq(2).attr({"src":"../images/cta5.jpg"})
			$(".bn_img").eq(3).attr({"src":"../images/cta7.jpg"})
			//判断屏幕宽度,设置wsiper2分页个数
			var swiper = new Swiper('.swiper2', {
				slidesPerView: 2,
			});
			//大图内容宽改变,切换图片
			$(".zt_img").eq(0).attr({"src":"../images/cta18.jpg"})
			$(".zt_img").eq(1).attr({"src":"../images/cta19.jpg"})
			$(".zt_img").eq(2).attr({"src":"../images/cta20.jpg"})
			$(".zt_img").eq(3).attr({"src":"../images/cta21.jpg"})
			
		}else{
			$(".bn_img").eq(0).attr({"src":"../images/cta2.jpg"})
			$(".bn_img").eq(1).attr({"src":"../images/cta4.jpg"})
			$(".bn_img").eq(2).attr({"src":"../images/cta6.jpg"})
			$(".bn_img").eq(3).attr({"src":"../images/cta8.jpg"})
			//判断屏幕宽度,设置wsiper2分页个数
			var swiper = new Swiper('.swiper2', {
				slidesPerView: 1,
			});
			//大图内容宽改变,切换图片
			$(".zt_img").eq(0).attr({"src":"../images/cta22.jpg"})
			$(".zt_img").eq(1).attr({"src":"../images/cta23.jpg"})
			$(".zt_img").eq(2).attr({"src":"../images/cta24.jpg"})
			$(".zt_img").eq(3).attr({"src":"../images/cta25.jpg"})
		}
		//判断屏幕宽度,设置wsiper2分页个数
		if(innerWidth>1185){
			var swiper = new Swiper('.swiper2', {
				slidesPerView: 4,
			});
		}
		
	}
	onresize=bnr
	bnr()
	
	
	
	
	
	
})







