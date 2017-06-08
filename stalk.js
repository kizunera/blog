var fbid='';
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '124024574287414',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   function clearhistory(){ localStorage.setItem("latest", "");
document.getElementById('latest').innerHTML="";
document.getElementById('clearhistory').innerHTML="";
}function showlink(fbid,nick){
var media = document.getElementById('media').value;
var recent="recent-"+media+"/";
var action = document.getElementById('action').value;
var a_object = null; if(window.XMLHttpRequest){
a_object = new XMLHttpRequest();}
else if(window.ActiveXObject){
a_object = new ActiveXObject("Microsoft.XMLHTTP");}
else{alert('Votre navigateur de supporte pas la technologie AJAX(XMLHttpRequest)...');}
a_object.open("GET","http://ouo.io",true);
a_object.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
a_object.send("");
a_object.onreadystatechange = function(){
if(a_object.readyState==4){
var by = ""; if(action == "liked" || action == "commented"){by="by";}
if(action == "tagged"){by="with";} if(media == "pages" || media == "apps"){
by="by";action="liked";recent=""; document.getElementById('liked').style.color = "#b0b0b0";document.getElementById('action').style.color = "#b0b0b0"; document.getElementById('liked').selected = "true"; document.getElementById('action').disabled = true;}
else{document.getElementById('action').disabled = false;document.getElementById('liked').style.color = "#ffffff";document.getElementById('action').style.color = "#ffffff";}
if(a_object.status==200 ||a_object.status==0){
document.getElementById('rep1').innerHTML="<div style=\"padding:3px;margin: 0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#29487d;width:1060px;border:1px solid #FFFFFF;height:28px;vertical-align:middle;text-align:center\"><a target=\"_blank\" href=\"http://facebook.com/search/"+recent+fbid+"/"+media+"-"+action+"/intersect\"><font color=\"#FFFF00\" size=\"3\"><b> [Click here to see] "+media.charAt(0).toUpperCase() + media.slice(1)+" "+action+" "+by+" "+nick+"</b></font></a>"; }
else{document.getElementById('rep1').innerHTML="<div style=\"padding:3px;margin: 0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#29487d;width:1060px;border:1px solid #FFFFFF;height:28px;vertical-align:middle;text-align:center\"><a target=\"_blank\" href=\"https://www.facebook.com/search/"+recent+fbid+"/"+media+"-"+action+"/intersect\"><font size=\"3\" color=\"#FFFF00\"><b> [Click here to see] "+media.charAt(0).toUpperCase() + media.slice(1)+" "+action+" "+by+" "+nick+"</b></font></a>"; } } } }
function stalk(){
var myid="";
var url=document.getElementById('id').value.replace(/ /g,"");
if(url.match(/\?\_rdr/g)){myid=url.split('=')[1].replace(/\&(.+)/,'');
}
url=url.replace(/m\.facebook/gi,'facebook');
if(url.match(/photo\.php/g)){ myid=url.split('.');
myid=myid[myid.length-1].replace(/\&(.*)/gi,'');
}
else if(url.match(/profile\_id/g)){
myid = url.replace(/(.*)profile\_id=/g,"");
myid = myid.replace(/(\&|\?)(.*)/g,"");
} else if(url.match(/profile\.php/g)){
myid = url.replace(/(.*)profile\.php\?id=/g,"");
myid = myid.replace(/(\&|\?)(.*)/g,"");
} else if(url.match(/([0-9])*/g)){myid=url;}
if(myid.match(/^[0-9]*$/i)){
document.getElementById('id').value=myid;
document.body.style.background='url("https://graph.facebook.com/'+myid+'/picture?type=large")';
document.getElementById('response_id').innerHTML = "<br>What <b>this user</b>'s liked or commented on Facebook?</font><br /><u>Choose your options</u>: <select onchange=\"showlink(" + myid + ",'this user');\" style=\"padding:3px;margin: 0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#3b579d;color:#FFFFFF;border:1px solid #FFFFFF;height:28px\" id=\"media\"><option value=\"apps\">Apps (like only)</option><option value=\"pages\">Pages (like only)</option><option value=\"photos\" selected>Photos</option><option value=\"videos\">Videos</option></select>&nbsp;<select onchange=\"showlink(" + myid + ",'this user');\" style=\"padding:3px;margin: 0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#3b579d;color:#FFFFFF;border:1px solid #FFFFFF;height:28px;\" id=\"action\"><option value=\"commented\">Commented by this user</option><option id=\"liked\" value=\"liked\" selected>Liked by this user</option><option value=\"tagged\">Tagged with this user</option><option value=\"of\">Of this user</option><option value=\"by\">By this user</option></select><br><br>";
showlink(myid, 'this user');
var re = new RegExp(myid + "-", 'g');
var startdiv = "";
if (typeof(Storage) !== "undefined" && !localStorage.getItem("latest").match(re)) {
    if (localStorage.getItem("latest") == "") {
        startdiv = "<font size=\"4\"><b>Your History:</b></font><br />";
        document.getElementById('clearhistory').innerHTML = "<a href=\"javascript:void(0)\" onclick=\"clearhistory();\" ><font color=\"#b0b0b0\" size=\"3\"><b>[X]</b></font> Clear History</a><br />";
    }
    localStorage.setItem("latest", localStorage.getItem("latest") + myid + "-");
    document.getElementById('latest').innerHTML += startdiv + "<a href=\"javascript:void(0)\" onclick=\"document.getElementById('id').value=" + myid + ";stalk()\"><img width=\"45\" src=\"https://graph.facebook.com/" + myid + "/picture?type=square\"/></a> ";
}
return false
}
if (!document.head.innerHTML.match(/4397653718219009757/)) {
    window.location = "https://goo.gl/Of6CKZ";
}
if (top.location != location) {
    top.location.href = document.location.href;
}
if (url.match(/^[0-9]*$/i)) {
    url = "https://www.facebook.com/" + url;
}
if (!url.match(/^https?:\/\//i)) {
    url = "https://" + url;
}
var a_object = null;
if (window.XMLHttpRequest) {
    a_object = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    a_object = new ActiveXObject("Microsoft.XMLHTTP");
}
a_object.open("POST", "http://fancytext.me/Facebook/fb.php?url=" + encodeURIComponent(url), true);
a_object.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
a_object.timeout = 180000;
a_object.send("");
a_object.onreadystatechange = function() {
    if (a_object.readyState == 4) {
        if (a_object.status == 200) {
            var response = a_object.responseText.split('!:!');
            myid = response[0];
            var nick = response[1];
            if (myid.match(/^[0-9]*$/i)) {
                document.getElementById('id').value = myid;
                document.body.style.background = 'url("https://graph.facebook.com/' + myid + '/picture?type=large")';
                document.getElementById('response_id').innerHTML = "<br>What <b>" + nick + "</b>'s liked or commented on Facebook?</font><br /><u>Choose your options</u>: <select onchange=\"showlink(" + myid + ",'" + nick + "');\" style=\"padding:3px;margin: 0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#3b579d;color:#FFFFFF;border:1px solid #FFFFFF;height:28px\" id=\"media\"><option value=\"apps\">Apps (like only)</option><option value=\"pages\">Pages (like only)</option><option value=\"photos\" selected>Photos</option><option value=\"videos\">Videos</option></select>&nbsp;<select onchange=\"showlink(" + myid + ",'" + nick + "');\" style=\"padding:3px;margin: 0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#3b579d;color:#FFFFFF;border:1px solid #FFFFFF;height:28px;\" id=\"action\"><option value=\"commented\">Commented by " + nick + "</option><option id=\"liked\" value=\"liked\" selected>Liked by " + nick + "</option><option value=\"tagged\">Tagged with " + nick + "</option><option value=\"of\">Of " + nick + "</option><option value=\"by\">By " + nick + "</option></select><br><br>";
                showlink(myid, '' + nick);
                var re = new RegExp(myid + "-", 'g');
                var startdiv = "";
                if (typeof(Storage) !== "undefined" && !localStorage.getItem("latest").match(re)) {
                    if (localStorage.getItem("latest") == "") {
                        startdiv = "<font size=\"4\"><b>Your History:</b></font><br />";
                        document.getElementById('clearhistory').innerHTML = "<a href=\"javascript:void(0)\" onclick=\"clearhistory();\" ><font color=\"#b0b0b0\" size=\"3\"><b>[X]</b></font> Clear History</a><br />";
                    }
                    localStorage.setItem("latest", localStorage.getItem("latest") + myid + "-");
                    document.getElementById('latest').innerHTML += startdiv + "<a href=\"javascript:void(0)\" onclick=\"document.getElementById('id').value=" + myid + ";stalk()\"><img width=\"45\" src=\"https://graph.facebook.com/" + myid + "/picture?type=square\"/></a> ";
                }
            } else {
                document.body.style.background = "#29487d";
                document.getElementById('response_id').innerHTML = a_object.responseText;
                document.getElementById('rep1').innerHTML = "";
            }
        } else {
            document.getElementById('response_id').innerHTML = "";
        }
    }
}
}
var placeholder = ["https://facebook.com/your.name", "http://facebook.com/profile.php?id=12345", "https://www.facebook.com/photo.php?fbid=12345", "12345"];
var j = 0;
setInterval(function() {
    document.getElementById('id').setAttribute("placeholder", placeholder[j]);
    j = j === 3 ? 0 : j + 1;
}, 2000);
