/**
 * Created by Administrator on 2017/5/5.
 */
var obj; //建立全局变量
function getTime()
{
    var myDate=new Date(); //得到时间对象

    var y=myDate.getFullYear(); //获取年
    var m=myDate.getMonth()+1; //获取月

    m=m>9?m:"0"+m; //如果月份小于10,则在前面加0补充为两位数字

    var d=myDate.getDate(); //获取日

    d=d>9?d:"0"+d; //如果天数小于10,则在前面加0补充为两位数字

    var h=myDate.getHours(); //获取小时

    h=h>9?h:"0"+h; //如果小时数字小于10,则在前面加0补充为两位数字

    var M=myDate.getMinutes(); //获取分

    M=M>9?M:"0"+M; //如果分钟小于10,则在前面加0补充为两位数字

    var s=myDate.getSeconds(); //获取秒

    s=s>9?s:"0"+s; //如果秒数小于10,则在前面加0补充为两位数字

    var NowTime=y+"-"+m+"-"+d+""+" "+h+":"+M+":"+s; //串联字符串用于输入
    obj=document.getElementById("NowTime"); //得到容器对象
    obj.value=NowTime;// 在文本框中输入时间
    window.setTimeout("getTime()",1000); //每隔1秒自动变换时间
}


/**
 * 获取当天初始时间  eg: 2016-02-24 00:00:00
 * @author maweijie
 * @date  2016-2-24 11:09:47
 *
 */
function getBeginTime(){
    var myDate = new Date();
    var month = myDate.getMonth()+1;       		 //月 +1
    month = month>9 ? month : "0"+month;
    var date = myDate.getDate();
    date = date>9 ? date : "0"+date;      		 //日
    return myDate.getFullYear()+"-"+month+"-"+date+" 00:00:00";

    /*var myDate = initDate();
     return myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" 00:00:00";*/
}



/**
 * 获取当天结束时间  eg: 2016-02-24 23:59:59
 * @author maweijie
 * @date  2016-2-24 11:25:53
 *
 */
function getEndTime(){
    var myDate = new Date();
    var month = myDate.getMonth()+1;       		 //月
    month = month>9 ? month : "0"+month;
    var date = myDate.getDate();
    date = date>9 ? date : "0"+date;      		 //日
    return myDate.getFullYear()+"-"+month+"-"+date+" 23:59:59";
}



/**
 * 这里可以抽出来，不过还是要 判断 日期是否加0 ，所以不用这个
 * @returns {Date}
 */
function initDate(){
    var myDate = new Date();
    var month = myDate.getMonth();       		 //月
    month = month>9 ? month : "0"+month;
    var date = myDate.getDate();
    date = date>9 ? date : "0"+date;      		 //日
    myDate = new Date(myDate.getFullYear(),month,date);
    return myDate;

}

/* 获取当前时间 */
function getNowTime() {
    var myDate = new Date();			//得到时间对象

    var y = myDate.getFullYear();		//获取年

    var m = myDate.getMonth() + 1;		//获取月
    m = m > 9 ? m : "0" + m;			//如果月份小于10，则在前面加0补充为两位数字

    var d = myDate.getDate();			//获取日
    d = d > 9 ? d : "0" + d;			//如果天数小于10，则在前面加0补充为两位数字

    var h = myDate.getHours();			//获取时
    h = h > 9 ? h : "0" + h;			//如果小时数字小于10，则在前面加0补充为两位数字

    var M = myDate.getMinutes();		//获取分
    M = M > 9 ? M : "0" + M;			//如果分钟小于10，则在前面加0补充为两位数字

    var s = myDate.getSeconds();		//获取秒
    s = s > 9 ? s : "0" + s;			//如果秒数小于10，则在前面加0补充为两位数字

    var nowTime = y + "-" + m + "-" + d + " " + h + ":" + M + ":" + s;	//串联字符串用于输入

    return nowTime;
}