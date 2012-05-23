(function($)
{
	$.fn.parallax = function()
	{
		var path = this.data('src');
		var mime = this.data('mime') || 'png';

		// discover dimensions
		var height = this.data('height');
		var width  = this.data('width');
		this.children('li').each(function(i, elem)
		{
			// Set some app-specific CSS
			$(this).css('height', height + "px");
			$(this).css('width', width + "px");
			//$(this).css('background-image', 'url(path + "/" + i + "." + mime)');
		})
	}
})(jQuery);