function enTimeF(n,t){var o=PLCountdown2(n,t),e=addling(o.d).toString(),i=addling(o.h).toString(),d=addling(o.m).toString(),r=addling(o.s).toString();PD(".Countdown_Day").text(e.slice(0,1)),PD(".Countdown_Days").text(e.slice(1,2)),PD(".Countdown_When").text(i.slice(0,1)),PD(".Countdown_time").text(i.slice(1,2)),PD(".Countdown_Branch").text(d.slice(0,1)),PD(".Countdown_component").text(d.slice(1,2)),PD(".Countdown_Seconds").text(r.slice(0,1)),PD(".Countdown_Sec").text(r.slice(1,2)),setTimeout(function(){enTimeF(n,t+1e3)},1e3)}function addling(n){return 10>n?"0"+n:n}function PLCountdown2(n,t,o){o||(o=1),t||(t=(new Date).getTime());var e=parseInt(n)-parseInt(t),i=Math.floor(e/1e3/60/60/24),d=Math.floor(e/1e3/60/60%24),r=Math.floor(e/1e3/60%60),a=Math.floor(e/1e3%60),l=o+1;0>e&&(i=d=r=a=0);var c={d:i,h:d,m:r,s:a,i:l,end:n,sta:t};return c}!function(){PD(window).scroll(function(){var n=PD(window).scrollTop();PD(".floor-nav-wrap")[n>400?"show":"hide"]()})}();