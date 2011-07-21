function Factory ( type, schematic ) {
	this.type = type;
	this.schematic = schematic;
	this.blueprints = {};
	//this.build = buildFunc;
}


//INTENDED FACTORY USAGE PATTERN
//every schematic must have a name property
//var x = new Factory("Weapon"/*name*/,new Schematic(/*))


//factory should have a schematic that is an array of attr names
//the blueprint object is checked to ensure it has all attr names of the array
//and can subsequently pull them all from the object (blueprint[schematic[i]]) to construct a new 
//object of whatever type. This way the schematic could be output by any
//weapon/component/whathaveyou and automatically be set up. I think this
//also allows for a generic build if I want it (eval("new "+this.type+"("+args+");"))
//for rapid prototyping but can always extend Factory and write a specific build
//method. Removes need to have perfectly formatted schematics!
//Could have a SchematicProduct class that takes an array of arguments (the schematic)
//and can return them as a static method. This way we can eval(this.type+".prototype.getSchematic()")
//which can be pumped into the generic build eval mentioned earlier.

//but even all of that discussion seems mostly useless as we dont have a need
//to be able to create many factories with this kind of generic 
//having clearly extended factories that lack this generic nature is fine
//each would have a type and a build function that just took an object of params
//and would build strictly to that
Factory.prototype.addBlueprint = function ( blueprint ) { 
	if ( !blueprint.name ) {
		cout("blueprint doesnt have name, cant add");
		return;
	}
	if(this.blueprints[blueprint.name]){
		cout("blueprint "+blueprint.name+" already present in factory "+this.type);
		return;
	}
	if(!this.verifyBlueprint(blueprint)) {
		cout("blueprint could not be verified");
		return;
	}
	
	this.blueprints[blueprint.name] = blueprint; //assumes true, should assume false
}

Factory.prototype.removeBlueprint = function ( name ) {
	//should do a check to see if it's actually there
	delete this.blueprints[name];
}

Factory.prototype.verifyBlueprint = function ( blueprint ) {
	for ( var i = 0; i < this.schematic.properties.length; i++ ) {
		if(!blueprint.hasOwnProperty(this.schematic.properties[i]))
			return false;
	}
	return (i==this.schematic.properties.length)?true:false;
}

Factory.prototype.getBlueprint = function ( name ) {
	if (!this.blueprints[name])
		cout("no blueprint with name "+name+" found");
	return this.blueprints[name];
}

Factory.prototype.printBlueprints = function ( ) {
	var s = "";
	for ( var name in this.blueprints ) {
		if(this.blueprints.hasOwnProperty(name)) {
			s += (function ( that, name ) { //does this close over name? should we make it not?
				var ss = that.type+"Factory Blueprint: "; 
				for ( var bName in that.blueprints[name] ) {
					if(that.blueprints[name].hasOwnProperty(bName)) {
						ss+=bName+":"+that.blueprints[name][bName]+" ";						
					}
				}
				return ss; 
			})(this, name);
		}
	}
	if ( s === "" )
		s = "no blueprints";
	return s;
}

Factory.prototype.build = function ( name ) { 
	//cout("needs to be defined in subclasses");
	/*
	This code does not work. We would need a way to encapsulate
	data coming from the blueprint which is way too much work.

	var bp = this.getBlueprint(name);
	var s = "";
	for ( var i = 0; i<this.schematic.properties.length;i++) {
		s+=bp[this.schematic.properties[i]]+=",";
	}
	return eval("new Weapon("+s.substr(0,s.length-1)+");");*/
}

Factory.prototype.toString = function ( ) {
	return this.type+"Factory uses schematic:"+this.schematic.toString();
}

Factory.prototype.test = function ( ) { 
	var f = new Factory("Laser",new Schematic(["blue","green"]));
	f.addBlueprint({"blue":1,"green":2});
	f.addBlueprint({"name":"Test"});
	f.addBlueprint({"name":"Blah","blue":1,"green":2});
	cout(f.printBlueprints());
	f.removeBlueprint("Blah");
	cout(f.printBlueprints());
		f.addBlueprint({"name":"Blah","blue":1,"green":2});
	cout(f.printBlueprints());
	cout(f);
	f.build("Blah");
}