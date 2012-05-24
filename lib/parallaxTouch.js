/**
 * parallaxTouch.js jQuery plugin allows you to created a parallax-effect using
 * simple HTML and image defitions.  Options and settings can be set passing via.
 * data attributes on associated elements.
 *
 * @param  {jQuery} $ jQuery object to extend
 */
(function($)
{
	$.fn.parallax = function()
	{
		var base_parallax = this;
		$.parallax.init.call(base_parallax);

		var easing = this.data('easing');
		this.mousemove(function(e)
		{
			var y = e.pageY;
			var x = e.pageX;
			base_parallax.children().each(function(i, elem)
			{
				$(elem).css('top', i*y/easing);
				$(elem).css('left', i*x/easing);
			})
		})
	}

	$.parallax = {}
	
	/**
	 * Initialize the page for a paralax background
	 */
	$.parallax.init = function()
	{
		var path = this.data('src');
		var mime = this.data('mime') || 'png';

		// discover dimensions
		var height = this.attr('height');
		var width  = this.attr('width');
		this.children().each(function(i, elem)
		{
			// Set our children as aboslutely positioned for
			// parallax effect
			$(this).css('position', 'absolute');

			// Set some app-specific CSS
			$(this).css('height', height);
			$(this).css('width', width);

			var bg_url = null;

			if(navigator.userAgent.match(/iPad|iPhone|iPod/i))
			{
				var bg_url = path + '/' + i + '@2x.' + mime;
			} else
			{
				var bg_url = path + '/' + i + '.' + mime;
			}

			$(this).css('background-image', 'url("' + bg_url + '")');
		});	
	}

})(jQuery);