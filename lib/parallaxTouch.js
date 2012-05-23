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
			$(this).css('background-image', 'url("' + path + '/' + i + '.' + mime + '")');
			$(this).css('height', height);
			$(this).css('width', width);
		});
	}
})(jQuery);