var ref=document.referrer;if(ref.match(/^https?:\/\/([^\/]+\.)?github\.io(\/|$)/i)){function getAllUrlParams(e){var t=e?e.split("?")[1]:window.location.search.slice(1),r=[];if(t)for(var a=(t=t.split("#")[0]).split("&"),i=0;i<a.length;i++){var l=a[i].split("="),n=l[0].replace(/\[\d*\]/,function(e){return e.slice(1,-1),""}),o=void 0===l[1]||l[1];n=n.toLowerCase(),o=decodeURIComponent(o).toLowerCase(),r.push(o)}return r}var i,params=getAllUrlParams(),text="";for(i=0;i<params.length;i++)text+='<a href="'+params[i]+'" target="_blank">'+params[i]+"</a><br>";document.getElementById("test").innerHTML=text}