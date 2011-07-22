//so if we make FactoryItem and each of these has a schematic, we can
//extend FactoryItem into any item we want to produce and have a getSchematic
//call. get the schematic from the prototype,

//all FactoryItems must hold a schematic (on their prototype) and will have a build method
//which takes the pos of the schem.prop and uses it to properly place the returned value



function FactoryItem ( schematic ) {
	this.schematic = schematic;
}

FactoryItem.prototype.build = function ( ) {
	
}