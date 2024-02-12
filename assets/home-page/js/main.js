$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});

///////// scroll y reveal whatsapp and call button 
window.addEventListener('scroll', function() {
    var box = document.getElementById('call-btn');
    var box2 = document.getElementById('whts-btn');
	var title=document.getElementById('hindititle');
    if (window.scrollY >= 100) {
      box.classList.add('reveal');
    } else {
      box.classList.remove('reveal');
    }
	if (window.scrollY >= 60) {
		box2.classList.add('reveal');
	  } else {
		box2.classList.remove('reveal');
	  }
	  if (window.scrollY >= 65) {
		title.classList.add('active');
	  } else {
		title.classList.remove('active');
	  }
  });


/////////close buttoon in mobile menu
function closeMenu(){
	let body=document.getElementById('body')
	body.classList.remove('offcanvas-menu')
}


//////////readmore button in about us
function viewMore(){
	let more=document.getElementById('more')
	more.classList.toggle('show');
	let btn = document.getElementById('btn-data');
  if (more.classList.contains('show')) {
    btn.innerHTML = "View Less";
	/* more.style.height="0" */
  } else {
	/* more.style.height=more.scrollHeight + "px" */
    btn.innerHTML = "View More";
  }
}

///////////accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}