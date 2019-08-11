jQuery(document).ready(function(){
    jQuery("#field6045").bind("blur",function(){
        var a = jQuery("#field6045").val();
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(a))){
            alert("联系电话只能输入11位数字！你输入信息有误，请重新输入。");
            jQuery("#field6045").attr("value","");
        }
    });
});
