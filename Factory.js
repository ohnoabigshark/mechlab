function Factory ( type ) {
	this.type = type;
	this.blueprints = {};
}

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
	if(this.blueprints[blueprint.name]){
		cout("blueprint "+blueprint.name+" already present in factory "+this.type);
		return;
	}
	if ( !blueprint.name ) {
		cout("blueprint doesnt have name, cant add");
		return;
	}
	this.blueprints[blueprint.name] = blueprint;
}

Factory.prototype.removeBlueprint = function ( name ) {
	delete this.blueprints[name];
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
			if ( this.blueprints[name]["toString"] )

			s += this.blueprints[name];
		}
	}
	return s;
}

Factory.prototype.build = function ( name ) { 
	
}

Factory.prototype.toString = function ( ) {
	return this.type+"Factory";
}

Factory.prototype.test = function ( ) { 
	var f = new Factory("Laser");
	f.addBlueprint({"blue":1,"green":2});
	f.addBlueprint({"name":"Test"});
	cout(f.printBlueprints());
	cout(f.args);
}