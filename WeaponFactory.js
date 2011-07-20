function WeaponFactory ( type ) {
	this.type = type;
	this.specs = {};
}

WeaponFactory.prototype = new Factory("WEAPON");

//name, type, size, damage, reload, heat, recoil, effects
WeaponFactory.prototype.build = function ( name ) { 
	var bp = this.getBlueprint(name);
	return new Weapon(bp[name],bp[type],bp[size],bp[damage],bp[reload],bp[heat],bp[recoil],bp[effects]);
}


WeaponFactory.prototype.test = function ( ) { 
	var wf = new WeaponFactory("Laser");
}