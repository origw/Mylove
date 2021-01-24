
var begindate= '2020/04/09 00:00:00';  //开始时间
var time = Date.parse(new Date())/1000 - Date.parse(begindate)/1000;

function timedCount()
{
document.getElementById('shijian').innerHTML = fmoney(time,0);
time = time + 1;
t = setTimeout("timedCount()",1000);
}

/** ÿ��λ�������һ�����ţ������Ķ� **/

function fmoney(s, n)   
{   
   n = n > 0 && n <= 20 ? n : 2;   
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
   var l = s.split(".")[0].split("").reverse(),   
   r = s.split(".")[1];   
   t = "";   
   for(i = 0; i < l.length; i ++ )   
   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }   
   return t.split("").reverse().join("") /*+ "." + r*/;   
}