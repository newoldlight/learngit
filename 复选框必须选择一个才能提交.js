//复选框必须选择一个方可提交
jQuery(document).ready(function(){
    checkCustomize=function(){
        var num =0;
        var checkBox = jQuery('input[type="checkbox"]');
checkBox.each(function(){
if(jQuery(this).attr("checked")){
num ++;
}
});
if(num>0){
return true;
}else{
alert("没有选中任何印章类别，请至少选中一个！");
return false;
}
return false;
}
});

