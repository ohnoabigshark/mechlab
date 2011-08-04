function Factory ( type, schematic ) {
	this.type = type;
	this.schematic = schematic;
	this.blueprints = {};
	this.uid = 0;
	//this.build = buildFunc;
}

Factory.prototype.initBlueprints = function ( blueprints ) { //should have support for reading a file in nodejs
	//todo file import/DB import
	//check if blueprints is an array. add support for recognizing file input
	//or just have something convert for us
	for ( var i=0; i < blueprints.length; i++ ) {
		this.addBlueprint(blueprints[i]);
	}
}

Factory.prototype.readBlueprintFile = function () {
	//do this for nodejs
}

Factory.prototype.getUID = function ( ) {
	return this.type+(++this.uid);
}

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

Factory.prototype.addStrict = function ( ) {
	var tempBlueprint = { };
	for ( var i = 0; i<arguments.length;i++) {
		tempBlueprint[this.schematic.properties[i]] = arguments[i];
	}
	this.addBlueprint(tempBlueprint);
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
				var ss = "<br>"+that.type+"Factory Blueprint: "; 
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

Factory.prototype.getBlueprints = function ( ) {  //returns an array
	var blueprints = [];
	for ( var name in this.blueprints ) { 
		if ( this.blueprints.hasOwnProperty(name)) { //probs wanna check if what we're getting back is a bluepritn as well
			blueprints.push(this.blueprints[name]);			
		}
	}
	return blueprints;
}

Factory.prototype.build = function ( name ) { 

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
		f.addBlueprint({"name":"Blah2","blue":1,"green":2});
	cout(f.printBlueprints());
	cout(f);
	f.build("Blah");
	cout(f.getBlueprints());
	cout(f.getUID()+ " "+f.getUID()+ " " +f.getUID());
}