var C = {
	BALLISTIC: 0,
	LASER: 1,
	MISSILE: 2,
	OMNI: 3
}

var cout = function(text) {
    dojo.create("h1", {
        innerHTML: text
    }, dojo.byId("console"), "first");

}