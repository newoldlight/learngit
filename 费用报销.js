<script type="text/javascript">
var bxfsCid="field5816";
var ykrCid="field5835";
var khyhCid="field5836";
var yhzhCid="field5837";
var sjfkjeCid="field6275";//实际付款金额
jQuery(document).ready(function(){
        var nodeid = jQuery("input[name='nodeid']").val();
	//增加获取按钮
	if(nodeid == 423){
		var buttonStr = '<button id="get_button3" class="middle e8_btn_top_first" onclick="createCustomer()" type="button">新建客商</>';
		jQuery("#field7043").after(buttonStr);

                jQuery("#"+bxfsCid).bindPropertyChange(function(){	
                      if(jQuery("#"+bxfsCid).val()=="8") {
                            hideZxzm();                               
                      }else{ showZxzm();  }
                      if(jQuery("#"+bxfsCid).val()=="6" || jQuery("#"+bxfsCid).val()=="7") {
                            jQuery("#"+sjfkjeCid).val(0);
                      }
	        });//end
	}

       //禁用 报销合计金额
       jQuery("#field_lable5798").attr("disabled","disabled");
})
function createCustomer(){
    window.open("/formmode/view/AddFormMode.jsp?mainid=0&modeId=33&formId=-78&type=1");
}
function hideZxzm(){
    jQuery("#"+ykrCid+"_tdwrap").hide();
    jQuery("#"+khyhCid+"_tdwrap").hide();
    jQuery("#"+yhzhCid+"_tdwrap").hide();
}
function showZxzm(){
    jQuery("#"+ykrCid+"_tdwrap").show();
    jQuery("#"+khyhCid+"_tdwrap").show();
    jQuery("#"+yhzhCid+"_tdwrap").show();
}
</script>