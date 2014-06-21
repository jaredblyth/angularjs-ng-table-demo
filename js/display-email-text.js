	//initialize the 2 popup css class names - create more if needed
	var matchClass=['popupMeta','popupEmail'];
	//Set your 2 basic sizes and other options for the class names above - create more if needed
	var popupMeta = 'width=1000,height=700,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=20,top=20';
	var popupEmail = 'width=1000,height=700,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=20,top=20';
	
	//When the link is clicked, this event handler function is triggered which creates the pop-up windows 
	function eventHandler() {
			var x = 0;
			var popupSpecs;
			//figure out what popup size, etc to apply to the click
			while(x < matchClass.length){
					if((" "+this.className+" ").indexOf(" "+matchClass[x]+" ") > -1){
						popupSpecs = matchClass[x];
						var popurl = this.href;
					}
			x++;
			}
		//Create a "unique" name for the window using a random number
		var popupName = Math.floor(Math.random()*10000001);
		//Opens the pop-up window according to the specified specs
		newwindow=window.open(popurl,popupName,eval(popupSpecs));
		return false;
	}

	//Attach the onclick event to all your links that have the specified CSS class names
	function attachPopup(){
		var linkElems = document.getElementsByTagName('a'),i;
		for (i in linkElems){
			var x = 0;
			while(x < matchClass.length){
				if((" "+linkElems[i].className+" ").indexOf(" "+matchClass[x]+" ") > -1){
					linkElems[i].onclick = eventHandler;
				}
			x++;
			}
		}
	}

	//Call the function when the page loads
	window.onload = function (){
	    attachPopup();
	}