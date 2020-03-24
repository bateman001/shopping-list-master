//Submit item to form


function handleList(){ 
	$("#js-shopping-list-form").submit(function(event){
		
	event.preventDefault();
	
	let item = $("#shopping-list-entry").val();
	let listItem = $(`<li>
						<span class="shopping-item">${item}</span>
						<div class="shopping-item-controls">
          				<button class="shopping-item-toggle">
						<span class="button-label">check</span>
          				</button>
          				<button class="shopping-item-delete">
						<span class="button-label">delete</span>
          				</button>
        				</div>
      					</li>`);
	
	$(".shopping-list").append(listItem);
   
});



//Line through item
$(".shopping-list").on('click', ".shopping-item-toggle", function(event){
	
	let li = $(event.currentTarget).parent().parent();

	li.children(".shopping-item").toggleClass("shopping-item__checked");
});

//delete item
$('.shopping-list').on("click", ".shopping-item-delete", function(){
	$(this).closest("li").remove();
	
	
});
}

$(handleList);

