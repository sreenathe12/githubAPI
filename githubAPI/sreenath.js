
/*
var sreenath = XMLHttpRequest();
var url = "#";

sreenath.onreadystatechange = function(){

if(this.readyState == 4 && this.status == 200){

	var array= JSON.parse(this.responseText);
	myFunction(myArr);
}
};
sreenath.open("GET", url, true);
sreenath.send();

function myFunction(======){

	var out = "";
	var i;
	for(i=0;i<=###.length;i++){
		out  += ###[i].name;
	}

	document.getElementById("search").innerHTML = out;
}


*/

$(function(){
$('#hot_repo').click(function(){
	$.getJSON("https://api.github.com/search/repositories?q=stars%3A%3E%3D53000",function(data){
		var item = $('#lastmonth tbody');
		
	    item.empty();
		$(data).each(function(key,value){
			var objects = data;
			for(var i = 0;i<objects.items.length;i++){
			item.append('<tr><td>'+ value.items[i].id  + '</td><td>'+ value.items[i].name+'</td><td>'+ value.items[i].description +'</td><td>'+  value.items[i].forks  +'</td></tr>');
		
			};
			});
		
	});
});	

});

/*

$('#prolific_users').click(function(){
$.ajax({
	url:'https://api.github.com/search/users?q=repos:%3E42+followers:%3E19000',
	dataType:'json',
	method:'get',
	success:function(data){
		 
		var item = $('#lastyear tbody');
		item.empty();
		
		$(data).each(function(key,value){
	
			var objects1=data;
			for(var j=0;j<objects1.items.length;j++){
			item.append('<tr><td>'+ value.items[j].id+ '</td><td>'+  value.items[j].login +'</td><td>'+value.items[j].avatar_url+ '</td><td>' +value.items[j].followers_url +'</td></tr>');
			   
			   
			
			
			
	
			};
			});
			
			
	}
	});
});	


*/

$('#prolific_users').click(repeatme);
function repeatme(){

$.ajax({
	url:'https://api.github.com/search/users?q=repos:%3E42+followers:%3E19000',
	dataType:'json',
	method:'get',
	
	success:function(data){
		 
		var item = $('#lastyear tbody');
		item.empty();
		
		$(data).each(function(key,value){
	
			var objects1=data;
			for(var j=0;j<objects1.items.length;j++){
			item.append('<tr><td>'+ value.items[j].id+ '</td><td>'+  value.items[j].login +'</td><td>'+value.items[j].avatar_url+ '</td><td>' +value.items[j].followers_url +'</td></tr>');
			   
			  
			
			
			
	
			};
			});
			
				
	}

	});
	 
};
setInterval(repeatme,120000);





	
 

