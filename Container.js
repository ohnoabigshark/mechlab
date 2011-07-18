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
	this.weapons = [];
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

Container.prototype.addWeapon = function ( weapon ) {
	this.weapons.push(weapon);
}

Container.prototype.removeWeapon = function ( name ) {
	for(var i=0;i<this.weapons.length;i++) {
		if(this.weapons[i].name === name ) {
			delete this.weapons[i];
			return;
		}
	}
}

Container.prototype.getAvailableSpace = function ( ) {
	var space = 0+this.size;
	for(var i=0;i<this.weapons.length;i++) {
		space -= (this.weapons[i])?this.weapons[i].size:0;
	}
	return space;
}

Container.prototype.toString = function ( ) {
		var that=this;
		var weaponString = (function ( ) {
			var st = "";
			for ( var i=0;i<that.weapons.length;i++){
				st+=((st)?",":"")+that.weapons[i];
			}
			return st;
		})();
		return "Container Type: "+this.type+"\n Container Size: "+this.size
				+"\n Container Space: " + this.getAvailableSpace()
				+"\n Container Weapons: " + weaponString;
	}

Container.prototype.blockConstructor = function ( type ) {
			var block = document.createElement("div");
			switch ( type ) {
				case 0: block.className = "starterBlock"; break;
				case 1: block.className = "extensionBlock"; break;
			}
			return block;
		}

Container.prototype.test = function ( lasers ) {
	var ballistic = new Container ( 4, C.BALLISTIC );
	var laser = new Container( 4, C.LASER );
	var missile = new Container( 4, C.MISSILE );
	var omni = new Container( 4, C.OMNI );
	cout(laser.getAvailableSpace());
	laser.addWeapon(lasers.createWeapon("ERLL"));
	cout(laser.getAvailableSpace());
	cout(laser);
	laser.addWeapon(lasers.createWeapon("ERLL"));
	cout(laser);
	laser.removeWeapon("ERLL");
	cout(laser);
}