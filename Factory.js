function Factory ( type ) {
	this.type = type;
	this.blueprints = {};
}

Factory.prototype.addBlueprint = function ( name, blueprint ) { 
	if(this.blueprints[name]){
		cout("blueprint already present in factory "+this.type);
		return;
	}
	this.blueprints[name] = blueprint;
}

Factory.prototype.removeBlueprint = function ( name ) {
	delete this.blueprints[name];
}

Factory.prototype.build = function ( ) { 
	cout("this is not implemented");
	return;
}