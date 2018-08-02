$(document).ready(function() {

	$("#rform").submit(function () {

		var frm = $(this);
		var rtid = $("input[name=rtid]", frm).val();
		$('input', frm).removeClass("error");
		$('textarea', frm).removeClass("error");
		var error = false;
		$("input.validate",frm).each(function(i, element) {
			if ($.trim($(this).val()) == "") {
				error = true;
				$(this).addClass("error");
			}
		});
		$("textarea.validate",frm).each(function(i, element) {
			if ($.trim($(this).val()) == "") {
				error = true;
				$(this).addClass("error");
			}
		});
		if (error) {
			alert("В форме обнаружены ошибки!");
			return false;
		}
		var ht = '<input name="formsp" type="hidden" value="' + rtid + '">';
		frm.append(ht);
		return true;

	});
});