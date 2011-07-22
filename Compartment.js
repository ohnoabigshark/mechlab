//compartment has a size
//this.name
//this.shortName
function Compartment(shortName) {
	this.shortName = shortName;
	this.armorType = "DEFAULT";
	this.armorLevel = 1;
	that = { "arguments": arguments };
	this.containers = new function ( ) {
		var containerArray = [];
		for(var i=1;i<that.arguments.length;i++){
			containerArray.push(that.arguments[i]);//we should do error checking to ensure its a container
		}
		return containerArray;
	};
	
	cout(this);
}

Compartment.prototype.addWeapon = function ( weapon, container ) {
	if ( container ) {
		getContainer(container).addWeapon(weapon);
	}
	for(var i=0;i<this.containers.length;i++) {
		var container = this.containers[i];
		if(weapon.type==container.type && weapon.size<=container.getAvailableSpace())
			container.addWeapon(weapon);
	}
}

Compartment.prototype.removeWeapon = function ( weaponName, container ) {
	this.getContainer(container).removeWeapon(weaponName);
}

Compartment.prototype.getContainer = function ( containerType ) {
	for ( var i = 0; i<this.containers.length;i++) {
		if ( this.containers[i].type === containerType ) 
			return this.containers[i];
	}
}

Compartment.prototype.toString = function ( ) {
		return this.shortName + "\n Armor Type: "+this.armorType
				+"\n Armor Level: " +this.armorLevel+ "\n Containers:"
				+this.containers;
	}