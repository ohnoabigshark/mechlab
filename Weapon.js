function Weapon ( name, type, size, damage, reload, heat, recoil, effects ) {
	this.name = name;
	this.type = type;
	this.size = size;
	this.damage = damage;
	this.reload = reload;
	this.heat = heat;
	this.recoil = recoil;
	this.effects = effects;
}

Weapon.prototype.toString = function ( ) {
	return this.name+" "+this.type;
}
