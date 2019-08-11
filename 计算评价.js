    
jQuery(document).ready(function(){    
    jQuery("#field16218").bindPropertyChange(change_pj);
        change_pj();
});//endready

function change_pj(){
    var pj = "field16211"
    var points = jQuery("#field16218").val();
    if(points>=90) { 
        jQuery("#"+pj).val("一级");
     }
     else if(points>=80) {
        jQuery("#"+pj).val("二级");
     }
     else if(points>=70) {
        jQuery("#"+pj).val("三级");
     }
     else if(points>=60) {
        jQuery("#"+pj).val("四级");
     }
     else if(points<60) {
        jQuery("#"+pj).val("不合格");
     }
}
var check1Cid = "field16539";
var check2Cid = "field16540";
var check3Cid = "field16541";
var check4Cid = "field16542";
var check5Cid = "field16543";
var check6Cid = "field16544";

jQuery("input[id^='field16539']").attr("placeholder","分值范围1-15");
jQuery("input[id^='field16540']").attr("placeholder","分值范围1-15");
jQuery("input[id^='field16541']").attr("placeholder","分值范围1-15");
jQuery("input[id^='field16542']").attr("placeholder","分值范围1-15");
jQuery("input[id^='field16543']").attr("placeholder","分值范围1-15");
jQuery("input[id^='field16544']").attr("placeholder","分值范围1-25");

checkCustomize = function (){
    var check1 = jQuery("#"+check1Cid).val();
    var check2 = jQuery("#"+check2Cid).val();
    var check3 = jQuery("#"+check3Cid).val();
    var check4 = jQuery("#"+check4Cid).val();
    var check5 = jQuery("#"+check5Cid).val();
    var check6 = jQuery("#"+check6Cid).val();
    if(check1>15){ 
        top.Dialog.alert("“德”项目得分不能大于15!");
        return false;
    }
 
    if(check2>15){ 
        top.Dialog.alert("“能”项目得分不能大于15!");
        return false;
    }

    if(check3>15){ 
        top.Dialog.alert("“勤”项目得分不能大于15!");
        return false;
    }
 
    if(check4>15){ 
        top.Dialog.alert("“绩”项目得分不能大于15!");
        return false;
    }  
          
    if(check5>15){ 
        top.Dialog.alert("“廉”项目得分不能大于15!");
        return false;
    }

    if(check6>25){ 
        top.Dialog.alert("“系统应用”项目得分不能大于25!");
        return false;
    }
}

checkCustomize2 = function (){
    var check2 = jQuery("#"+check2Cid).val();
    if(check2>15){ 
        top.Dialog.alert("“能”项目得分不能大于15!");
        return false;
        }
}

checkCustomize3 = function (){
    var check3 = jQuery("#"+check3Cid).val();
    if(check3>15){ 
        top.Dialog.alert("“勤”项目得分不能大于15!");
        return false;
        }
}

checkCustomize4 = function (){
    var check4 = jQuery("#"+check4Cid).val();
    if(check4>15){ 
        top.Dialog.alert("“绩”项目得分不能大于15!");
        return false;
        }
}

checkCustomize5 = function (){
    var check5 = jQuery("#"+check5Cid).val();
    if(check5>15){ 
        top.Dialog.alert("“廉”项目得分不能大于15!");
        return false;
        }
}

checkCustomize6 = function (){
    var check6 = jQuery("#"+check6Cid).val();
    if(check6>25){ 
        top.Dialog.alert("“系统应用”项目得分不能大于25!");
        return false;
        }
}