var numpostx = 12,
thumbSize = 140,
contjumlah = 0,
pBlank = "http://4.bp.blogspot.com/-GTi1qJI5XEQ/U4nnmPWZGaI/AAAAAAAADhc/L3g0KV4hoRo/s1600/no-image2.png",
pkBlank = "http://3.bp.blogspot.com/-zkU-NPD-TGk/U4nnlyy_8_I/AAAAAAAADhY/V51m4qNLTZM/s1600/avatar.png",
numcomment = 5,
thumbcsize = 140,
cmsumm = 50;
$(document).ready(function(){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results="+numpostx+"",type:"get",dataType:"jsonp",success:function(g){var k,n,b,m,h,d="",o=g.feed.entry;if(o!==undefined){d="<ul>";for(var f=0;f<o.length;f++){for(var e=0;e<o[f].link.length;e++){if(o[f].link[e].rel=="alternate"){k=o[f].link[e].href;break}}for(var c=0;c<o[f].link.length;c++){if(o[f].link[c].rel=="replies"&&o[f].link[c].type=="text/html"){h=o[f].link[c].title.split(" ")[0];break}}if("content" in o[f]){n=o[f].content.$t}else{if("summary" in o[f]){n=o[f].summary.$t}else{n=""}}if("media$thumbnail" in o[f]){postimg=o[f].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+thumbSize+"-c")}else{postimg=pBlank}var p=/<\S[^>]*>/g;n=n.replace(p,"");if(n.length>contjumlah){n=n.substring(0,contjumlah)}b=o[f].title.$t;m=o[f].published.$t.substring(0,10),m=m.replace(/-/g,"/");d+='<li><div class="thumb-featured"><a href="'+k+'" target="_blank"><span><img alt="'+b+'"src="'+postimg+'"title="'+b+'" /></span></a></div><div class="title-featured"><h4><a href="'+k+'" title="'+b+'" target="_blank">'+b+'</a></h4><div class="datex"><span class="dt">'+m+'</span><span class="cm">'+h+" "+cmtext+'</span></div></div><div class="contxisi">'+n+"</div></li>"}d+="</ul>";$("#featured").html(d);(function(){$.fn.infiniteCarousel=function(){function i(j,l){return new Array(l+1).join(j)}return this.each(function(){var q=$("> div",this).css("overflow","hidden"),r=q.find("> ul").width(9999),s=r.find("> li"),j=s.filter(":first");singleWidth=j.outerWidth(),visible=Math.ceil(q.innerWidth()/singleWidth),currentPage=1,pages=Math.ceil(s.length/visible);if(s.length%visible!=0){r.append(i('<li class="empty" />',visible-(s.length%visible)));s=r.find("> li")}s.filter(":first").before(s.slice(-visible).clone().addClass("cloned"));s.filter(":last").after(s.slice(0,visible).clone().addClass("cloned"));s=r.find("> li");q.scrollLeft(singleWidth*visible);function l(u){var t=u<currentPage?-1:1,w=Math.abs(currentPage-u),v=singleWidth*t*visible*w;q.filter(":not(:animated)").animate({scrollLeft:"+="+v},3000,function(){if(u>pages){q.scrollLeft(singleWidth*visible);u=1}else{if(u==0){u=pages;q.scrollLeft(singleWidth*visible*pages)}}currentPage=u})}q.after('<a href="#" class="arrow back">&lt;</a><a href="#" class="arrow forward">&gt;</a>');$("a.back",this).click(function(){l(currentPage-1);return false});$("a.forward",this).click(function(){l(currentPage+1);return false});$(this).bind("goto",function(t,u){l(u)});$(this).bind("next",function(){l(currentPage+1)})})}})(jQuery);var a=true;$("#featured-wrap").infiniteCarousel().mouseover(function(){a=false}).mouseout(function(){a=true});setInterval(function(){if(a){$("#featured-wrap").trigger("next")}},8000)}else{$("#featured").html("<span>No result!</span>")}},error:function(){$("#featured").html("<strong>Error Loading Feed!</strong>")}});$.ajax({url:"/feeds/comments/default?alt=json-in-script&max-results="+numcomment+"",type:"get",dataType:"jsonp",success:function(n){var f,a,c,m,g,h,b="",j=n.feed.entry;if(j!==undefined){b="<ul>";for(var e=0;e<j.length;e++){for(var d=0;d<j[e].link.length;d++){if(j[e].link[d].rel=="alternate"){m=j[e].link[d].href;break}}if("content" in j[e]){f=j[e].content.$t}else{if("summary" in j[e]){f=j[e].summary.$t}else{f=""}}if(j[e].author[0].gd$image.src=="http://img1.blogblog.com/img/blank.gif"){a=pkBlank}else{a=j[e].author[0].gd$image.src.replace(/\/s[0-9]+(\-c|\/)/,"/s"+thumbcsize+"$1")}var l=/<\S[^>]*>/g;c=(j[e].author[0].uri)?j[e].author[0].uri.$t:"#nope";g=j[e].author[0].name.$t;f=f.replace(l,"");if(f.length>cmsumm){f=f.substring(0,cmsumm)+"..."}h=j[e].gd$extendedProperty[1].value;b+='<li><div class="kmtimg"><a rel="nofollow" href="'+m+'"><span><img src="'+a+'" title="'+g+'" alt="'+g+'"/></span></a></div><div class="ketkomt"><a rel="nofollow" href="'+m+'" title="'+g+'" class="tooltip">'+g+"</a><span>"+h+'</span></div><div class="komtsum">'+f+"</div></li>"}b+="</ul>";$("#rcentcomnets").html(b)}else{$("#rcentcomnets").html("<span>No result!</span>")}},error:function(){$("#rcentcomnets").html("<strong>Error Loading Feed!</strong>")}})});