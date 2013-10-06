parallaxTouch.js
================

Mobile and browser based parallax effect.

Requirements
============
parallaxTouch.js current relies on jQuery 1.7.2 for DOM-manipulations.  This requirement is
likely to be removed in a future release.

You must include jQuery 1.7.2 as a script.

Use
===
To use parallaxTouch.js:

```html
<script src="lib/parallaxTouch.js"></script>
<link rel="stylesheet" href="lib/parallaxTouch.css">
```

Optionally, if you have large resolution images:

```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
```

Create your DOM structure, and define options using data attributes.  Each parallax layer much have it's own first-level child in your
parallax base.  Images should be numbered from 0 in the `data-src`

```html
<div id="parallax" width="IMAGE_WIDTH" height="IMAGE_HEIGHT">
	<div></div>
	<div></div>
	<div></div>
</div>
```

Data attributes are:

| attribute | definition | example |
|:---------:|:----------:|:-------:|
| src       | path to background images to use _required_| data-src="demo" |
| mime      | mime extension to use _optional: `png` is default_ | data-mime="jpg" |
| easing    | easing factor to use for parallax transition _required_ | data-easing="10" |

Then initialize the parallax effect on your parallax base element

```javascript
$('div#parallax').parallax()
```
