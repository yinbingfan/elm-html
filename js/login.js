var mm=document.getElementById("mm");
var dx=document.getElementById("dx");
//var pass_one=document.getElementById("pass_one");
//var phone_one=document.getElementById("phone_one");
var content=document.getElementById("content");
var content_2=document.getElementById("content_2");
//pass_one.style.display="none";
dx.onclick=function(){

	content.style.display="none";
	content_2.style.display="none";
	content.style.display="block";
	content_2.style.display="none";
	dx.style.color="#55A0FF";
	mm.style.color="#ccccd6";
//	
	
}
mm.onclick=function(){

	content.style.display="block";
	content_2.style.display="none";
	content.style.display="none";
	content_2.style.display="block";
	dx.style.color= "#ccccd6";  
	mm.style.color= "#55A0FF";
}

//function $(id){
//	return document.getElementById(id);
//}
////验证邮箱号、手机号
//$("sj1").onblur = function(){
//	//console.log($("mail").value)
//	let str = $("sj1").value;
//	let reg = /^\w+@\w(\.\w+)+$/;
//	let reg1 = /^1\d{10}$/;
//	//验证邮箱号、手机号的正则
//	if((reg.test(str)) || (reg1.test(str))){
//		//验证用户名是否存在
//		jQuery.ajax({
//			url:"checkUser.php",
//			async:true,
//			data:"username="+$("sj1").value,
//			type:"post",
//			success:function(data){
//				//console.log(data+$("mail").value)
//				if(data=="1"){
//					jQuery("#mail1").html("该用户已经被注册了");
//					    
//				}else{
//					jQuery("#mail1").html("该用户没有人使用");
//					//location.href="denglu.html";
//				}
//			}		
//		});	}else{
//			$("mail1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
//			return;
//	}
//};
////验证密码
//$("passId").onblur = function(){
//	let str = $("passId").value;
//	let reg = /^[0-9a-zA-Z_]\w{5,11}$/;
//	if(reg.test(str)){
//		
//	}else{
//		$("pass1").innerHTML = "您好，请检查您的密码设置是否符合要求";
//		return;
//	}
//};
//$("imgNum").onclick = function(){//字母、数字组合验证码
//	code($("imgNum"));
//};
//
//function code(obj){
//	
//	let num;
//	let str1="";
//	while(true){
//		num = parseInt(Math.random()*123);
//		if(num>=65 && num<=90){
//			str1 += String.fromCharCode(num);
//		}
//		if(num>=97 && num<=122){
//			str1 += String.fromCharCode(num);
//		}
//		if(num>=0 && num<=9){
//			str1 += num.toString();
//		}
//		if(str1.length>=4){
//			break;
//		}
//	}
//	//随机颜色
//	var num1=parseInt(Math.random()*255);
//	var num2=parseInt(Math.random()*255);
//	var num3=parseInt(Math.random()*255);
//	//console.log(num1+":"+num2+":"+num3)
//	obj.innerHTML=str1;
//	obj.style.color="rgb("+num1+","+num2+","+num3+")";
//	
//}
//$("yan").onblur = function(){
//	var str2 = $("imgNum").innerHTML;
//	str2 = str2.toLowerCase();
//	var str3 = $("yan").value;
//	str3 = str3.toLowerCase();
//	if(str3!=str2){
//		$("yan1").innerHTML = "请输入正确的验证码";
//		return;
//	}
//};
//window.onload = function(){
//	code($("imgNum"));
//	code($("yzml"));
//	
//
//}
//
////验证邮箱号、手机号
//$("userPhone").onblur = function(){
//	//console.log($("mail").value)
//	let str = $("userPhone").value;
//	let reg = /^\w+@\w(\.\w+)+$/;
//	let reg1 = /^1\d{10}$/;
//	//验证邮箱号、手机号的正则
//	if((reg.test(str)) || (reg1.test(str))){
//		//验证用户名是否存在
//		jQuery.ajax({
//			url:"checkUser.php",
//			async:true,
//			data:"username="+$("userPhone").value,
//			type:"post",
//			success:function(data){
//				//console.log(data+$("mail").value)
//				if(data=="1"){
//					jQuery("#mail1").html("该用户已经被注册了");
//					    
//				}else{
//					jQuery("#mail1").html("该用户没有人使用");
//					//location.href="denglu.html";
//				}
//			}		
//		});	}else{
//			$("userPhone1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
//			return;
//	}
//};
//
//$("yzml").onclick = function(){//字母、数字组合验证码
//	code($("yzml"));
//};
//$("yzm").onblur = function(){
//	var str2 = $("yzml").innerHTML;
//	str2 = str2.toLowerCase();
//	var str3 = $("yzm").value;
//	str3 = str3.toLowerCase();
//	if(str3!=str2){
//		$("yzm2").innerHTML = "请输入正确的验证码";
//		return;
//	}
//};
