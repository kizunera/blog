  function GetUrlValue(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] == VarSearch){
            return decodeURIComponent(KeyValuePair[1]);
        }
else {return '';}
    }
}
if(GetUrlValue("id") !=""){
   document.getElementById('rep1').innerHTML="<img src=\"https://fbstatic-a.akamaihd.net/rsrc.php/v2/yl/r/t9XRT3p0-pq.gif\">";
}
if(GetUrlValue("id") !=""){
document.getElementById('id').value=GetUrlValue("id");stalk();
}

if (typeof(Storage) !== "undefined" && localStorage.getItem("latest") === null) {localStorage.setItem("latest","");}
if(typeof(Storage) !== "undefined" && localStorage.getItem("latest").length > 0) {
document.getElementById('latest').innerHTML ="<font size=\"4\"><b>Your History:</b></font><br />";
var ids = localStorage.getItem("latest").substr(0,localStorage.getItem("latest").length-1);
var arr_ids= ids.split("-");
var j=0;
for(var i = 0; i < arr_ids.length;i++){
document.getElementById('latest').innerHTML +="<a href=\"javascript:void(0)\" onclick=\"document.getElementById('id').value="+arr_ids[i]+";stalk();return false\"><img width=\"45\" src=\"https://graph.facebook.com/"+arr_ids[i]+"/picture?type=square\" /></a> ";
if (j == 15){document.getElementById('latest').innerHTML +="<br />";j=0;}

}
document.getElementById('clearhistory').innerHTML ="<a href=\"javascript:void(0)\" onclick=\"clearhistory();\" ><font color=\"#b0b0b0\" size=\"3\"><b>[X]</b></font> Clear History</a><br />";
}