function WeaponFactory ( type ) {
	this.type = type;
	this.blueprints = {};
}

WeaponFactory.prototype = new Factory("WEAPON");

WeaponFactory.prototype.build = function ( ) { 
	
}