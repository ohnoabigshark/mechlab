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
	var containers = [];
	for ( var i = 0; i<this.containers.length;i++) {
		if ( this.containers[i].type === containerType ) 
			containers.push(this.containers[i]);
	}
	return containers || null;
}

Compartment.prototype.getContainerById = function ( containerId ) { 
	for ( var i = 0; i < this.containers.length;i++){
		if(this.containers[i].id == containerId)
			return this.containers[i];
	}
	return null;
}

Compartment.prototype.addContainer = function ( container ) {
	if (this.getContainerById(container.id)) {
		cout("we already have a container with this id");
		return null;
	}
	this.containers.push(container);
}

Compartment.prototype.removeContainer = function ( id ) {
	for(var i=0;i<this.containers.length;i++) {
		if(this.containers[i].id == id ) {
			this.containers.splice(i,1);
		}
	}
}

Compartment.prototype.toString = function ( ) {
		return this.shortName + "\n Armor Type: "+this.armorType
				+"\n Armor Level: " +this.armorLevel+ "\n Containers:"
				+this.containers;
	}