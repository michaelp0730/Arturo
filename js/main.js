// main.js

// begin onLoad function
function onLoad(f) {
    if (onLoad.loaded)                  // If document is already loaded
        window.setTimeout(f, 0);        // Queue f to be run as soon as possible
    else if (window.addEventListener)   // Standard event registration method
        window.addEventListener("load", f, false);
    else if (window.attachEvent)        // IE8 and earlier use this instead
        window.attachEvent("onload", f);
}
// Start by setting a flag that indicates that the document is not loaded yet.
onLoad.loaded = false;
// And register a function to set the flag when the document does load.
onLoad(function() { onLoad.loaded = true; });
// end onLoad function


// image preloader
function preloadImages() {
	if (document.images) {
		for (var i = 0; i < preloadImages.arguments.length; i++) {
			(new Image()).src = preloadImages.arguments[i];	
		}
	}
} // end image preloader


// begin rollover code
onLoad(function() { // Everything in one anonymous function: no symbols defined
    // Loop through all images, looking for the data-rollover attribute
    for(var i = 0; i < document.images.length; i++) {
        var img = document.images[i]; 
        var rollover = img.getAttribute("data-rollover"); 
        if (!rollover) continue;  // Skip images without data-rollover

        // Ensure that the rollover image is in the cache
        (new Image()).src = rollover;

        // Define an attribute to remember the default image URL
        img.setAttribute("data-rollout", img.src);

        // Register the event handlers that create the rollover effect
        img.onmouseover = function() {
            this.src = this.getAttribute("data-rollover");
        };
        img.onmouseout = function() {
            this.src = this.getAttribute("data-rollout");
        };
    }
});
// end rollover code

// begin copyright code
onLoad(function copyright() {
	'use strict';
	
	// declare variables
	var date = new Date(),
	year = date.getFullYear(),
	copyright_year = document.getElementById('copyright_year');
	
	if (year == 2012) {
		copyright_year.innerHTML = '2012';	
	} else {
		copyright_year.innerHTML = '2012 - ' + year;
	}
	
	return false;
});
//window.onload = copyright;
// end copyright code
