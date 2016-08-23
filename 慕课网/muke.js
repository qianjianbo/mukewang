
var prev = document.querySelectorAll('.t')[0];
var next = document.querySelectorAll('.t')[1];
var btns = document.querySelectorAll('.btn');
var pics =document.querySelectorAll('.bannedr-top .imgg');
var length = btns.length;
var index =0;
for(var i = 0; i<length;i++){
	btns[i].index=i;
	btns[i].onmouseover=function () {
		clearInterval(timer);
		for(var i = 0;i<length;i++){
			pics[i].id='';
			btns[i].id='';


		}
		pics[this.index].id='active';
		btns[this.index].id='active';
	}
	btns[i].onmouseout=function () {
		timer = setInterval(xiaYiGe,3500);
	}
}	




	var timer = setInterval(xaiYiGe,3500);
	function xaiYiGe(){
		index--;
	if (index<0){
		index=length-1;
	}
	for(var i =0;i<length;i++){
		btns[i].id='';
		pics[i].id='';

	}
	btns[index].id='active';
	pics[index].id='active';
	}


prev.onclick=function(){
	xaiYiGe();

}


next.onclick=function(){
	index++;
	if (index>1){
		index=0;
	}
	for(var i =0;i<length;i++){
		btns[i].id='';
		pics[i].id='';

	}
	btns[index].id='active';
	pics[index].id='active';
}
	
	var tab =document.querySelectorAll('.div');
	var right = document.querySelectorAll('.k');


		for(var i =0;i<7;i++){
			tab[i].index=i;
			tab[i].onmouseover=function(){
				right[this.index].style.display='block';
			}
			tab[i].onmouseout=function(){
				right[this.index].style.display='none';
			}
			right[i].onmouseover=function(){
				this.style.display='block';
			}
			right[i].onmouseout=function(){
				this.style.display='none';
			}
		}


		var shouji = document.querySelector('.shouji');
		var app = document.querySelector('.app');
		shouji.onmouseover=function(){
			app.style.display='block';
		}
		shouji.onmouseout=function(){
			app.style.display='none';
		}




