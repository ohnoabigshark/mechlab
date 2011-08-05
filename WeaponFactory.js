WeaponFactory.prototype = new Factory();
WeaponFactory.constructor = WeaponFactory;


function WeaponFactory ( ) {
	var propertyList = ["name","faction","class","slots","tons","range","damage","heat","reload","recoil","effects"];
	this.type = "Weapon";
	this.schematic = new Schematic(propertyList);
	var wf = Factory.call(this,this.type,this.schematic);
	wf.init();
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
					  bp[this.schematic.properties[7]],
					  bp[this.schematic.properties[8]],
					  bp[this.schematic.properties[9]],
					  bp[this.schematic.properties[10]]);
}

WeaponFactory.prototype.init = function ( ) { //need to change to slots, add tonnage
	this.addStrict("Flamer","Clan",C.LASER,2,1,150,1,2,4,0,[]);
	this.addStrict("Bombast Laser","Inner Sphere",C.LASER,2,7,500,10,4,4,0,[]);
	this.addStrict("ER Large Laser","Clan",C.LASER,2,4,800,8,4,5,0,[]);
	this.addStrict("ER Medium Laser","Clan",C.LASER,1,1,400,1.5,0.6,3,0,[]);
	this.addStrict("ER Small Laser","Clan",C.LASER,1,0.5,200,0.35,0.1,1,0,[]);
	this.addStrict("Large Laser","Inner Sphere",C.LASER,2,5,600,7.5,2.5,5,0,[]);
	this.addStrict("Medium Laser","Inner Sphere",C.LASER,1,1,300,1.2,0.3,3,0,[]);
	this.addStrict("Small Laser","Inner Sphere",C.LASER,1,0.5,150,0.3,0.05,1,0,[]);
	/*this.addStrict(0,[]);
	this.addStrict(0,[]);
	this.addStrict(0,[]);
	this.addStrict(0,[]);
	this.addStrict(0,[]);
	this.addStrict(0,[]);
	this.addStrict(0,[]);
	this.addStrict(0,[]);
	this.addStrict(0,[]);*/
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