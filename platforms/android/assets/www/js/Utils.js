var Utils = {
	wrapDiv: function(div, desiredScale) {
		var outerDiv = $("<div>")
		var innerWidth = div.width();
		var innerHeight = div.height();
		var outerWidth = Math.floor(desiredScale*innerWidth);
		var outerHeight = Math.floor(desiredScale*innerHeight);
		var dx = -(innerWidth-outerWidth)/2;
		var dy = -(innerHeight-outerHeight)/2;
		console.log(innerWidth, innerHeight);
		var scaleStr = "scale("+desiredScale+")"	
		div.css("position", "absolute");
		div.css("-moz-transform", scaleStr);
		div.css("-webkit-transform", scaleStr);
		div.css("transform", scaleStr);
		div.css("left", dx);
		div.css("top", dy);
		div.wrap(outerDiv)
		div.parent().css({
			"position": "relative",
			"width": outerWidth,
			"height": outerHeight,
			"overflow": "hidden"
		})
		return outerDiv;		
	}
}