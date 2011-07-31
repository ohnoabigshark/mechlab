WeaponFactory.prototype = new Factory();
WeaponFactory.constructor = WeaponFactory;


function WeaponFactory ( ) {
	this.type = "Weapon";
	this.schematic = new Schematic(["name","type","size","damage","reload","heat","recoil","effects"]);
}
//so now that we guarantee that a schematic has the same prop order
//can we make a generic build?



//name, type, size, damage, reload, heat, recoil, effects
WeaponFactory.prototype.build = function ( name ) { 
	var bp = this.getBlueprint(name);
	return new Weapon(bp[this.schematic.properties[0]],
					  bp[this.schematic.properties[1]],
					  bp[this.schematic.properties[2]],
					  bp[this.schematic.properties[3]],
					  bp[this.schematic.properties[4]],
					  bp[this.schematic.properties[5]],
					  bp[this.schematic.properties[6]],
					  bp[this.schematic.properties[7]]);
}


WeaponFactory.prototype.test = function ( ) { 
	var f = new WeaponFactory();
	f.addBlueprint({"name":"ERLL","type":C.LASER,"size":2,"damage":12,"reload":3000,"heat":10,"recoil":0,"effects":[]});
	cout(f);
	f.addStrict("LL",C.LASER,2,10,2500,8,0,[]);
	f.addStrict("SL",C.LASER,1,3,1000,5,0,[]);
	cout(f.printBlueprints());
	cout(f.build("ERLL"));
}