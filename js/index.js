dv='',bv='',hv='',av='',np='input',x=$(np),la='label',l=$(la), d=x.eq(0),b=x.eq(1),h=x.eq(2);a=x.eq(3);
x.on(np,function(){n=$(this).val();y=x.index(this);
	if(y==0&&n.match(/^[0-9]+$/)){dv=n; bv=c(n,10,2); hv=c(n,10,16); av=String.fromCharCode(n);}
	else if(n!=''){if(y==1&&n.match(/^[0-1]+$/)){dv=c(n,2,10);}
	if(y==2&&n.match(/^[A-Fa-f0-9]+$/)){dv=c(n,16,10);}
	if(y==3){dv=n.charCodeAt();} d.val(dv); d.trigger(np);} as(n);
});
function c(s,f,t){return parseInt(s, f).toString(t);}
function as(n){if(n==''){dv='',bv='',hv='',av='';}d.val(dv);b.val(bv);h.val(hv);a.val(av);}

l.addClass('col-1 col-form-label'); l.prev(la).addClass('offset-3'); l.next(la).addClass('offset-1'); x.addClass('form-control col-3');$("<br><br>").insertAfter(x);
