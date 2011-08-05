function Schematic ( propertyNames ) {
	for ( var i = 0; i < propertyNames.length && propertyNames[i]!=="name"; i++);
	//(i==propertyNames.length)?propertyNames.push("name"):"";
	if(i==propertyNames.length)
		propertyNames.push("name");	
	this.properties = propertyNames; //should check if is array

}

Schematic.prototype.toString = function ( ) {
	return this.properties;
}