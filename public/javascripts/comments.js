$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        //$("#json").text(jobj);
	var url = "comment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
  		success: function(data,textStatus) {
      			//$("#done").html(textStatus);
  		}
	})
    	});
     $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<table class='table'><th>Comments</th><tbody>";
        for(var comment in data) {
          com = data[comment];
          everything += "<tr><td>Name: " + com.Name + " -- Comment: " + com.Comment + "</td></tr>";
        }
        everything += "</tbody></table>";
        $("#comments").html(everything);
      })
    })
});
