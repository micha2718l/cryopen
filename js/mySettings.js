// SLIDERS
$(document).ready(
	function(){			
		$('#photoCycle').cycle({
			fx: 'scrollLeft',
			speed:   	2000, 
			timeout: 	6000,
			pause: 		1,
			fit:        0,
			pauseOnPagerHover: true//,
			//next:   '#next2', 
    		//prev:   '#prev2'
		});
		$('#featureCycle').cycle({  
			fx:      'scrollLeft',
			speed:      2000, 
			timeout:    10000, 
			pause:   	1,
			random:     1,     // true for random, false for sequence (not applicable to shuffle fx) 
			fit:        0,     // force slides to fit container
			//pager:      '#navNews', 
			//pagerEvent: 'click',
			pauseOnPagerHover: true
		});
});