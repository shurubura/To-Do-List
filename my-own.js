
var numItems = $(".check-div").length;
var list=document.querySelector(".to-do");
var todos;

function local() {
	todos=list.innerHTML;
	localStorage.setItem('todos',todos);
}

$(".add").click(function(){ 
	var empty = true;
//check form for missing value
	$("input[type='text']").each(function(){
	   if($(this).val()!=""){
	      empty =false;
	    }
	});
//do if form is not missing
	if (empty==false) {
		numItems++;
		var text_value=$("input[type='text']").val();
		$("input[type='text']").val('');
		$( ".to-do" ).append("<div class='check-div checkbox-"+numItems+"'><div class='d-flex justify-content-between'><div class='task'><div class='roundedCheckbox check-"+numItems+"'><input type='checkbox' id='checkbox-"+numItems+"' name='check'/><label for='checkbox-"+numItems+"'></label></div><span id='checkbox-"+numItems+"'>"+text_value+"</span></div><div class='delete delete-checkbox-"+numItems+" text-center'>-</div></div></div>");
		local();
	}
});
//make checkbox checked
$('.to-do').on('click', '.roundedCheckbox', function() {
	var myClass = $(this).attr("class");
	var classes = myClass.split(' ');
	var checkbox = $("."+classes[1]+" input[type='checkbox']");

	if (checkbox.prop('checked')) {
		checkbox.prop('checked', false);
		checkbox.removeAttr('checked');
		$(this).removeClass("checked");
		$(this).next().removeClass('done');
		local();
	} else {
		checkbox.prop('checked', true);
		checkbox.checked;
		checkbox.attr("checked","checked");
		$(this).addClass('checked');
		$(this).next().addClass('done');
		local();
	}   

});
//remove task
$('.to-do').on('click', '.delete', function() {
	$(this).closest(".check-div").remove();
	local();
});

if (localStorage.getItem('todos')) {
	list.innerHTML=localStorage.getItem('todos');
}