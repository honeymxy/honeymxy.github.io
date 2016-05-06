window.onload=function(){

	var oLo=document.getElementById('loginbar-left1');
	var oSh=document.getElementById('loginbar-left-show1');
	var oP=document.getElementById('loginbar-left-p1');
	var oB=document.getElementById('b1');
	var oS=document.getElementById('s1');
	var oLi=document.getElementById('ul2-li1');
	var oOl=document.getElementById('ol1');
	var oA=document.getElementById('ul2-li-a1');
	var oB2=document.getElementById('b2');
	var oS2=document.getElementById('s2');
	var oLi4=document.getElementById('ul2-li4');
	var oSh1=document.getElementById('ul1-li-div-show');
	var oA4=document.getElementById('ul2-li-a4');
	var oB4=document.getElementById('b4');
	var oS4=document.getElementById('s4');
	var oLi2=document.getElementById('ul2-li2');
	var oOl2=document.getElementById('ol2');
	var oA2=document.getElementById('ul2-li-a2');
	var oB5=document.getElementById('b5');
	var oS5=document.getElementById('s5');
	var oLi3=document.getElementById('ul2-li3');
	var oOl3=document.getElementById('ol3');
	var oA3=document.getElementById('ul2-li-a3');
	var oB3=document.getElementById('b3');
	var oS3=document.getElementById('s3');
	var oA5=document.getElementById('ul2-li-a5');
	var oGou=document.getElementById('gouwuche');
	
	
		oLo.onmouseover=function(){
			oSh.style.display='block';
			oP.className='hover';
			oB.className='hover';
			oS.className='hover';
		}
		oLo.onmouseout=function(){
			oSh.style.display='none';
			oP.className='';
			oB.className='';
			oS.className='';
		}
		oSh.onmouseover=function(){
			oSh.style.display='block';
			oP.className='hover';
			oB.className='hover';
			oS.className='hover';
		}
		oSh.onmouseout=function(){
			oSh.style.display='none';
			oP.className='';
			oB.className='';
			oS.className='';
		}
		oLi.onmouseover=function(){
			oOl.style.display='block';
			oB2.className='hover';
			oA.className='hover';
			oS2.className='hover';
		}
		oLi.onmouseout=function(){
			oOl.style.display='none';
			oB2.className='';
			oA.className='';
			oS2.className='';
		}
		oLi4.onmouseover=function(){
			oSh1.style.display='block';
			oB4.className='hover';
			oA4.className='hover';
			oS4.className='hover';
		}
		oLi4.onmouseout=function(){
			oSh1.style.display='none';
			oB4.className='';
			oA4.className='';
			oS4.className='';
		}
		oLi2.onmouseover=function(){
			oOl2.style.display='block';
			oB5.className='hover';
			oA2.className='hover';
			oS5.className='hover';
		}
		oLi2.onmouseout=function(){
			oOl2.style.display='none';
			oB5.className='';
			oA2.className='';
			oS5.className='';
		}
		oLi3.onmouseover=function(){
			oOl3.style.display='block';
			oB3.className='hover';
			oA3.className='hover';
			oS3.className='hover';
		}
		oLi3.onmouseout=function(){
			oOl3.style.display='none';
			oB3.className='';
			oA3.className='';
			oS3.className='';
		}
		oA5.onmouseover=function(){
			oGou.style.display='block';
		}
		oA5.onmouseout=function(){
			oGou.style.display='none';	
		}
		oGou.onmouseover=function(){
			oGou.style.display='block';
		}
		oGou.onmouseout=function(){
			oGou.style.display='none';	
		}

	var oDiv=document.getElementById('banner');
	var oRight=document.getElementById('right');
	var oLeft=document.getElementById('left');
		oH=oDiv.getElementsByTagName('h3')[0];
		oImg=oDiv.getElementsByTagName('img')[0];
		oUl=oDiv.getElementsByTagName('ul')[0];
		aLi=oDiv.getElementsByTagName('li');
		
		aFeng=document.getElementsByTagName('feng')[0];
		//alert(oP.length)
		arrImg=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg'];
		//arrText=['11111','22222','33333','44444','55555','66666','77777','888888','999999','10101010','11111111',];
		arrBack=['#083592','#82DDE9','#BC1B2D','#DF2C53','#BA03FE','#F9F0E7','#FF004C','#E6CC8F','#F4D5FF','#8FC361','#1370C0'];
		
	var num=0;
		//for(var i=0;i<arrText.length;i++){
			//oUl.innerHTML+='<li>'+(i+1)+'</li>'
		//}
		
		function tab(){
			oH.innerHTML=(num+1)+'/'+arrImg.length;
			oImg.src=arrImg[num];
			
			aFeng.style.background=arrBack[num];
			//oP.innerHTML=arrText[num];
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			}
			aLi[num].className='hover'
		}
		tab();
		
		
		for(var i=0;i<aLi.length;i++){
			
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].getElementsByTagName('p')[0].style.display='';
				}
				num=this.index;
				tab();
				aLi[this.index].getElementsByTagName('p')[0].style.display='block';
			}
			aLi[i].onmouseout=function(){
				aLi[this.index].getElementsByTagName('p')[0].style.display='none';
			}
			
		}
		tab();
		oRight.onclick=function(){
			num++;
			if(num==arrImg.length){
				num=0;
			}
			tab();
		}
		
		oLeft.onclick=function(){
			num--;
			if(num<0){
				num=arrImg.length-1;
			}
			tab();
		}
		var timer=null;		
			function play(){
				timer=setInterval(function(){
					num++;
					if(num==aLi.length){
						num=0;
					}
					tab();
				},3000)
			}
			play();
			oDiv.onmouseover=function(){
				clearInterval(timer);
			}
			oDiv.onmouseout=function(){
				play();
			}
				
		
		
	/*var oSide=document.getElementById('sidebar');
	var oSli=document.getElementsByTagName("sidebar-li") 
	var oSdiv=document.getElementsByTagName("sidebar-show")*/
	
	var oSide=document.getElementById('sidebar-ul1');
	var oSli=oSide.getElementsByTagName('li');
	
	var oSdiv=oSide.getElementsByTagName('div');
//	alert(oSdiv.length)
	
/*	document.getElementById()//通过ID名获取DOM节点
	document.getElementsByName()//通过name属性获取DOM节点
	document.getElementsByTagName()//通过标签名名获取DOM节点
*/
		for(var i=0;i<=oSli.length-1;i++){
		oSli[i].index=i
		oSli[i].onmouseover=function(){
		for(j=0;j<=text.length-1;j++){
			oSdiv[j].style.display="none"
			oSli[j].className=""
		}
		oSdiv[this.index].style.display="block"
		oSli[this.index].className="hover"
		}
		oSli[i].onmouseout=function(){
		for(j=0;j<=text.length-1;j++){
			oSdiv[j].style.display="none"
			oSli[j].className=""
		}
		oSdiv[this.index].style.display="none"
		oSli[this.index].className=""
		}
	}

	
	var oConright=document.getElementById('center-right');
	var oConleft=document.getElementById('center-left');
	var oCon=document.getElementById('main-01-center-00');
	var oCenter=oCon.getElementsByTagName('div');
	var u=0;
	var len = oCenter.length;
			
		oConright.onclick=function(){
			u++;
			if(u>oCenter.length-1){
				u=0
			}
			for(var t=0;t<len;t++){
				oCenter[t].style.display="none"
			}
			oCenter[u].style.display="block"
		}
		oConleft.onclick=function(){
			u--;
			if (u<=-1) {
				u=len-1;
			}
			for(var t=0;t<len;t++){
				oCenter[t].style.display="none"
			}
			oCenter[u].style.display="block"
		}
		
	var oMul=document.getElementById("main02-ul");
	var oMli=document.getElementsByClassName("main02-li");
	var oMdiv=oMul.getElementsByTagName('div');
	
	
		for(var i=0;i<=oMli.length-1;i++){
		oMli[i].index=i;
		oMli[i].onmouseover=function(){
			for(var i=0;i<=oMdiv.length-1;i++){
				oMdiv[i].style.display='none';
			}oMdiv[this.index].style.display='block';
				
		}
	}
		
	
}
