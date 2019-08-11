var xmlxCid="field7801";
var sfyxmCid="field7704";
var xzhtCid="field7782";

var htjeCid="field12295";
var ykpjeCid="field5929";
var wkpjeCid="field5922";

var fplxCid="field5911";
var kpslCid="field15280";
var kpjeCid="field5914";

jQuery(document).ready(function(){
    showHtje();
	jQuery("#field7704").bindPropertyChange(checkPro);				//是否有项目
        checkPro();
  jQuery("#field12335").bindPropertyChange(getPMContractMoney);//获取PM合同开票
       var nodeid = jQuery("input[name='nodeid']").val();
       var requestid= jQuery("input[name='requestid']").val();
	//增加获取按钮
     
      

	if(nodeid == 176){
		var buttonStr = '<button id="get_button3" class="middle e8_btn_top_first" onclick="createCustomer()" type="button">新建客商</>';
		jQuery("#field7968").after(buttonStr);

                var buttonStr2 = '<button id="get_button" class="middle e8_btn_top_first" onclick="updateBankInfo()" style="display:none"  type="button">更新信息</>';
		jQuery("#field7968").after(buttonStr2);

var syncContractBtn = ' <button id="syncContract" class="middle e8_btn_top_first" onclick="jQuery.ajax({ url: \'http://oa.cnhh.com/HhWebPortal/h5/api.aspx?action=weaver.contract\', beforeSend: function () { jQuery(\'#syncContract\').attr(\'disabled\', \'true\');jQuery(\'#syncContract\').text(\'更新中\'); }, complete: function () { jQuery(\'#syncContract\').removeAttr(\'disabled\');jQuery(\'#syncContract\').text(\'更新合同\'); alert(\'更新成功\'); } });" type="button">更新合同</>';
jQuery("#field15287").after(syncContractBtn);


var htCopyBtnHtml= ' <button id="htCopyBtn" class="middle e8_btn_top_first" type="button">复制</button>';
jQuery("#syncContract").after(htCopyBtnHtml);
var htCopyBtn= new Clipboard("#htCopyBtn", {
    text: function(trigger) {
        return jQuery("#field7782span").find("a").text();
    }
});


	}

jQuery("#field7968").bindPropertyChange(function () {
		var comp = jQuery("#field7968").val();
                var xydm = jQuery("#field6303").val();
		if(comp.length>0){
			jQuery("#get_button3").hide();
		}else{
			jQuery("#get_button3").show();
		}
                
                if(comp.length>0 && xydm.length==0){
                      jQuery("#get_button").attr("style","");
                }else{
                      jQuery("#get_button").attr("style","display:none");
                }              

})




    jQuery("#"+sfyxmCid).bindPropertyChange(function () {
        var sfyxm = jQuery("#"+sfyxmCid).val();
	if(sfyxm=='0'){//是经营项目
                jQuery("#"+xmlxCid).val("13");
                jQuery("#"+xmlxCid+"span").text("经营管理系统数据(合同)");
                jQuery("#"+xmlxCid+"_readonlytext").text("经营管理系统数据(合同)");
                jQuery("#"+xmlxCid+"_browserbtn").remove();
	}    

    });//end select sfyxm

    jQuery("#"+xmlxCid).bindPropertyChange(function () {
        var sfyxm = jQuery("#"+sfyxmCid).val();
	var xmlx=jQuery("#"+xmlxCid).val();
         if(!sfyxm && xmlx){
                jQuery("#"+xmlxCid).val('');
	        jQuery("#"+xmlxCid+"span").html('');
               top.Dialog.alert("先选择是否经营项目");		
         }      

    });//end select xmlx

    jQuery("#"+fplxCid).bindPropertyChange(function () {
        var fplx= jQuery("#"+fplxCid).val();	 
		jQuery.ajax({ 
			type:'post',
			url:"/workflow/include/operation/srgetkpsl.jsp?fplx="+fplx+"&xzht="+ jQuery("#"+xzhtCid).val(),		
		        dataType : "json",
			async:false,
			success:function do4Success (obj){ 						
			   if(obj.res==false){
			        top.Dialog.alert("获取发票税率失败："+obj.msg);
		           }else{
                                jQuery("#"+kpslCid).val(obj.kpsl); 
                           }						
			}, error:function (){ 
			        top.Dialog.alert("系统错误!");
				return false;
			}
		});	

    });//end select fplx

/*
    checkCustomize = function (){
        var kpje = jQuery("#"+kpjeCid).val();
        if(parseFloat(kpje)<0){
            top.Dialog.alert("开票金额不能负数，作废请使用发票作废流程");
            return false;
        }
        return true;
    };
*/

})//endready	

function checkPro(){
  var isPro= jQuery("#field7704").val();
  if(isPro== '0'){
    jQuery(".projectDiv").show();
  }else{
    jQuery(".projectDiv").hide();
  }
}


function createCustomer(){
    window.open("/formmode/view/AddFormMode.jsp?mainid=0&modeId=33&formId=-78&type=1");
}

function updateBankInfo(){
    var customer = jQuery("#field7968").val();
    var shxyh_ = jQuery("#field6303").val();
    var yhda_ = jQuery("#field7369").val();
    var yhzh_ = jQuery("#field7370").val();
    var dz_ = jQuery("#field5916").val();
    var lxdh_ = jQuery("#field5918").val();

    var url = "/workflow/include/operation/updateCustomerBankInfo.jsp?customerid="+customer +"&shxyh="+shxyh_+"&yhda="+yhda_+"&yhzh="+yhzh_+"&dz="+dz_+"&lxdh="+lxdh_;		//alert(url);	
url = encodeURI(encodeURI(url)); 					
		jQuery.ajax({ 
			type:'get',
			url:url,
		        dataType : "json",
			async:false,
			success:function do4Success (obj){ 						
			   if(obj.res=="false"){
			        top.Dialog.alert("更新失败!");
		           }else{
		                top.Dialog.alert("更新成功!");	
                           }
						
			}, error:function (){ 
			        top.Dialog.alert("System Error!");
				return false;
			}
		});	
}

//选了经营项目才取合同，如果先选了合同
function getPMContractMoney(){
    var xmlx= jQuery("#"+xmlxCid).val();
    var htpk= jQuery("#field12335").val();
    if(xmlx){
        if(xmlx=="13" && htpk){//经营项目
            getPMContractMoneyAjax(htpk);
        }else {
            jQuery("#"+htjeCid).val('');  
            jQuery("#"+ykpjeCid).val(''); 
            jQuery("#"+wkpjeCid).val('');
            showHtje();
        }
    }else { //默认是经营项目，也获取
         getPMContractMoneyAjax(htpk);
    }
}
function getPMContractMoneyAjax(htpk){
    var url = "/workflow/include/operation/checkPMContractMoney.jsp?htpk="+htpk;			
		jQuery.ajax({ 
			type:'get',
			url:url,
		        dataType : "json",
			async:false,
			success:function do4Success (obj){ 						
			   if(obj.res==false){
			        top.Dialog.alert("经营系统合同数据获取失败!");
		           }else{
                                jQuery("#"+htjeCid).val(obj.htmoney);
                                jQuery("#"+ykpjeCid).val(obj.ykpje);
		                jQuery("#"+wkpjeCid).val(obj.nkpje);
		               showHtje();
                           }						
			}, error:function (){ 
			        top.Dialog.alert("System Error!");
				return false;
			}
		});	
}

checkCustomize = function (){
    var sfyxm = jQuery("#"+sfyxmCid).val();
    var nowJe = jQuery("#field5914").val();
    var leaveJe = jQuery("#field5922").val();

    if(sfyxm =="0"){//经营项目
        if (!nowJe && !leaveJe ){   
             top.Dialog.alert("获取不到开票金额和未开票金额!");
            return false;
        }
/*
        if (parseFloat(nowJe) > parseFloat(leaveJe)) {         
            top.Dialog.alert("本次开票金额不能超出合同未开票金额!");
            return false;
        } 
        */
    }
    else if(sfyxm =="1"){ //无项目的，从客商赋值发票抬头
          jQuery("#field7373").val(jQuery("#field7968span .e8_showNameClass a").text());
    }
    return true;
}

function showHtje(){
     jQuery("#htje").text(jQuery("#"+htjeCid).val()); 
     jQuery("#ykpje").text(jQuery("#"+ykpjeCid).val()); 
     jQuery("#wkpje").text(jQuery("#"+wkpjeCid).val()); 
}