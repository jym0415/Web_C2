$(document).ready(function(){
var count = 0
var total = $("#slider li").length;

setInterval(function(){
    count ++
    count %= total
    $("#slider li").eq(count).addClass('show').siblings().removerClass('show')

},3000)
















})