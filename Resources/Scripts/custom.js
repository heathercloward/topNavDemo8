 
// Google Analytics script //
(function(i, s, o, g, r, a, m)
	{
		i['GoogleAnalyticsObject'] = r; 
		i[r] = i[r] || function(){
				(i[r].q = i[r].q || []).push(arguments)
				},
		i[r].l = 1 * new Date();
		a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
		a.asynch = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-121391607-2', 'auto');
ga('send', 'pageview');
ga('set', 'anonymizelp', true);

// Model Menu Drop Down script //
var panel = document.getElementById('sections_panel'), 
	navarrow = document.getElementById("navarrow");

navarrow.onclick = function() {
		if(panel.style.display == 'block'){
			panel.style.display = "none";
			navarrow.innerHTML = "▼";
		} else {
			panel.style.display = "block";
			navarrow.innerHTML = "▲";
		}
		window.onclick = function(event) {
				if (event.target == panel) {
					panel.style.display = "none";
					navarrow.innerHTML = "▼";
				}
			}
	};

// Back to top button script //
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// Feedback Widget script //
$(document).ready(function(){
   
		/* -------------- Feedback -------------- */
		/* Yes click */
		$('.feedback-yes').click(function() {
				/* fade out question, fade in thankyou message */
				$('.feedback-question').fadeOut(function() {
						$('.feedback-reason.yes-thanks').fadeIn();
					});
               
				ga('send', 'event', 'Feedback - Yes', 'N/A', location.href);

			});

		/* No click */
		$('.feedback-no').click(function() {
				/* fade out question, fade in thankyou message */
				$('.feedback-question').fadeOut(function() {
						$('.feedback-reason.no').fadeIn();
					});
			});
      
		/* No - response reasons */
		$('.feedback-reason .option').change(function() {
				/* if any options change, disable checkbox, record event, and fade in thankyou and email link */
				$(this).attr('disabled', true);
				if ($(this).is(':checked')) {
					var reason = $(this).attr('data-analytics-label');
					ga('send', 'event', 'Feedback - No', reason, location.href);
				}
				$('.feedback-reason.no-thanks').fadeIn();
			});
   
	});  