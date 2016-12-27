var droppedIn = false;
		
		function ID(id){
			return document.getElementById(id);
		}

		function drag_start(event){
			ID('status').innerHTML = "Dragging element " + event.target.getAttribute('id');
			event.dataTransfer.dropEffect = "move";
			event.dataTransfer.setData("text",event.target.getAttribute('id'));
		}

		function drag_enter(event){
			ID('status').innerHTML = "You are dragging element " + event.target.getAttribute('id');
		}

		function drag_leave(event){
			ID('status').innerHTML = "You left the " + event.target.getAttribute('id');
		}

		function drag_drop(event){
			event.preventDefault();
			var data = event.dataTransfer.getData("text");
			event.target.appendChild(ID(data));
			ID('status').innerHTML = " dropped " + data +" into the " + event.target.getAttribute('id');
			ID(data.removeAttribute("draggable"));
			ID(data).style.cursor = "default";
			droppedIn = true;
		}

		function drag_end(event){
			if(droppedIn == false){
			ID('status').innerHTML = "You let " + event.target.getAttribute('id') +" go";
			}
			droppedIn = false;
		}

		function readDropZone(){
			for(var i=0;i<ID("drop_zone").children.length;i++){
				alert(ID("drop_zone").children[i].id+ " is in the drop zone");
			}
			/* code for ajax */
		}