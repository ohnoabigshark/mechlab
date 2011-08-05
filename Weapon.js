Weapon.prototype = {};
Weapon.constructor = Weapon;

function Weapon ( name, type, faction, size, damage, reload, heat, recoil, effects ) {
	this.name = name;
	this.type = type;
	this.size = size;
	this.damage = damage;
	this.reload = reload;
	this.heat = heat;
	this.recoil = recoil;
	this.effects = effects;
	Object.call(this);
}



Weapon.prototype.toString = function ( ) {
	return this.name+" "+this.type+" ID:"+this.id;
}

Weapon.prototype.clone = function ( ) {
	return new Weapon(this.name,this.type,this.size,this.damage,this.reload,
						this.heat,this.recoil,this.effects);
}

Weapon.prototype.draw = function ( ) {
	var div = document.createElement("div");
	var nameNode = document.createElement("h1");
	nameNode.appendChild(document.createTextNode(this.name));
	var imageNode = document.createElement("img");
	imageNode.src = "http://placehold.it/24x24";
	div.className = "weapon";
	div.id = this.id;
	div.style.height = 24*this.size+"px";
	div.appendChild(nameNode);
	div.appendChild(imageNode);
	div.className += " hidden";
	document.body.appendChild(div);
	imageNode.style.top = (-nameNode.clientHeight)+((div.clientHeight/2)-(imageNode.clientHeight/2))+"px";
	imageNode.style.left = ((div.clientWidth/2)-(imageNode.clientWidth/2))+"px";
	document.body.removeChild(div);
	div.className = "weapon";
	return div;
}

