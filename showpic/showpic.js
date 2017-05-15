/**
 * Created by Administrator on 2017/4/24.
 */
function showPic(whichPic){             //whichPic是形参，看具体调用的地方
    //修改占位符图片
    var source = whichPic.getAttribute("href");
    var place = document.getElementById("zhanweifu");
    place.setAttribute("src",source);
    //修改照片下方描述性文字
    var text = whichPic.getAttribute("title")
    var txt = document.getElementById("description");
    //alert(txt.firstChild.nodeValue)//firstChild等价于childNodes[0]并且更加直观  于firstChild对应的还有个lastChild表示childNodes数组的最后一个元素
    txt.firstChild.nodeValue = text ;
}


//第二版V2.0 分析：如果使得html和js分离 那么我需要把onclick事件与id进行一个绑定需要进行如下代码编写:
//1.检查浏览器是否支持getElementsByTagname、getElementByID;
//2.判断网页是否存在id="gallerpic"的这样一个元素；
//3.遍历gallery元素中的所有链接;
//4.设置onclick事件让他在相关链接被点击时，将此链接作为参数传递给showPic并且取消链接被点击时的默认行为不打开新的窗口.
function prepareGallery(){
    if(!document.getElementsByTagName){return false;}
    if(!document.getElementById){return false;}
    if(!document.getElementById("gallerypic")){return false;}
    var gallery=document.getElementById("gallerypic");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++){          //for语句条件之间是分号不是逗号  要注意
        links[i].onclick = function(){
            showPic(this);return false;
        }
    }
}
//下面是执行这个prepareGallery函数，需要等到页面加载完onload之后，最简单的办法是定义一个匿名函数诸如
//window.onload = function(){
//    firstFunction();
//    secondFunction();
//}
//最佳的办法是调用addLoadEvent函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.omload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery)