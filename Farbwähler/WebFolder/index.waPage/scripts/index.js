
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var slider7 = {};	// @slider
	var slider6 = {};	// @slider
	var documentEvent = {};	// @document
	var slider3 = {};	// @slider
	var slider2 = {};	// @slider
	var slider1 = {};	// @slider
// @endregion// @endlock

// eventHandlers// @lock

	slider7.slidechange = function slider7_slidechange (event)// @startlock
	{// @endlock
    	$$('farbfeld').setHeight(400-yWert);
	};// @lock

	slider7.slide = function slider7_slide (event)// @startlock
	{// @endlock
    	$$('farbfeld').setHeight(400-yWert);
	};// @lock

	slider6.slidechange = function slider6_slidechange (event)// @startlock
	{// @endlock
		$$('farbfeld').setWidth(xWert);
	};// @lock

	slider6.slide = function slider6_slide (event)// @startlock
	{// @endlock
		$$('farbfeld').setWidth(xWert);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
	rWert = 0;
    gWert = 0;
    bWert = 0;
    xWert = 620;
    yWert = 400;
    document.all.farbfeld.style.backgroundColor = 'rgb(210,210,210)';
    $$('farbfeld').setWidth(xWert);
    $$('farbfeld').setHeight(yWert);
	};// @lock

	slider3.slide = function slider3_slide (event)// @startlock
	{// @endlock
		document.all.farbfeld.style.backgroundColor = 'rgb(' + rWert + ',' + gWert + ',' + bWert + ')';
	};// @lock

	slider3.slidechange = function slider3_slidechange (event)// @startlock
	{// @endlock
		document.all.farbfeld.style.backgroundColor = 'rgb(' + rWert + ',' + gWert + ',' + bWert + ')';
	};// @lock

	slider2.slide = function slider2_slide (event)// @startlock
	{// @endlock
		document.all.farbfeld.style.backgroundColor = 'rgb(' + rWert + ',' + gWert + ',' + bWert + ')';
	};// @lock

	slider2.slidechange = function slider2_slidechange (event)// @startlock
	{// @endlock
		document.all.farbfeld.style.backgroundColor = 'rgb(' + rWert + ',' + gWert + ',' + bWert + ')';
	};// @lock

	slider1.slide = function slider1_slide (event)// @startlock
	{// @endlock
		document.all.farbfeld.style.backgroundColor = 'rgb(' + rWert + ',' + gWert + ',' + bWert + ')';
	};// @lock

	slider1.slidechange = function slider1_slidechange (event)// @startlock
	{// @endlock
		document.all.farbfeld.style.backgroundColor = 'rgb(' + rWert + ',' + gWert + ',' + bWert + ')';
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("slider7", "slidechange", slider7.slidechange, "WAF");
	WAF.addListener("slider6", "slidechange", slider6.slidechange, "WAF");
	WAF.addListener("slider7", "slide", slider7.slide, "WAF");
	WAF.addListener("slider6", "slide", slider6.slide, "WAF");
	WAF.addListener("slider3", "slide", slider3.slide, "WAF");
	WAF.addListener("slider2", "slide", slider2.slide, "WAF");
	WAF.addListener("slider1", "slide", slider1.slide, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("slider3", "slidechange", slider3.slidechange, "WAF");
	WAF.addListener("slider2", "slidechange", slider2.slidechange, "WAF");
	WAF.addListener("slider1", "slidechange", slider1.slidechange, "WAF");
// @endregion
};// @endlock
