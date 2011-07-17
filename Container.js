/*Have container extend an item class that would have all the construction features
but they would have differing drag/drop interactions 

or have a block item class then extend it for both weapon and container*/

function Container ( size, type ) {
	//needs a UID?
	var STARTER = 0;
	var EXTENSION = 1;
	that = this;
	this.size = size;
	this.type = type;
	this.div = new function ( ) {
		var container = document.createElement("div");
		switch ( type ) {
			case C.BALLISTIC: container.className = "yellow"; break;
			case C.LASER: container.className = "red"; break;
			case C.MISSILE: container.className = "green"; break;
			case C.OMNI: container.className = "gray"; break;
		}
		
		container.appendChild(that.blockConstructor(STARTER));
		for ( var i = 1; i < size; i++ ) {
			container.appendChild(that.blockConstructor(EXTENSION));
		}
		return container;
	};

}

Container.prototype.draw = function ( ) {
	
}

Container.prototype.toString = function ( ) {
		return "Container Type: "+this.type+" Container Size: "+this.size;
	}

Container.prototype.blockConstructor = function ( type ) {
			var block = document.createElement("div");
			switch ( type ) {
				case 0: block.className = "starterBlock"; break;
				case 1: block.className = "extensionBlock"; break;
			}
			return block;
		}