# jQuery Hover Direction
A simple plugin to add CSS classes based on direction of element entrance or exit.
[Example](http://htmlpreview.github.io/?https://raw.github.com/ptouch718/jquery-hoverdirection/master/example/index.html)

## Usage
```
$(function () {
	$('selector').hoverDirection({
		cssPrefix : 'hover'
	});
});
```
The folling CSS classes will be available for styling:

```
.<cssPrefix>-enter-top    {}
.<cssPrefix>-leave-top    {}
.<cssPrefix>-enter-right  {}
.<cssPrefix>-leave-right  {}
.<cssPrefix>-enter-bottom {}
.<cssPrefix>-leave-bottom {}
.<cssPrefix>-enter-left   {}
.<cssPrefix>-leave-left   {}
```

## Options
```
{
	cssPrefix: 'string' // Prefix directional classes. Defaults to 'hover'
}
```

## Methods

### removeClass
Removes all directional classes from selector.

```
$(function () {
	$('selector').hoverDirection('removeClass');
});
```

This comes in handy for removing classes after the completion of @key-frame animations:

```
$(function () {
	$('selector').on('webkitAnimationEnd mozAnimationEnd animationEnd', function () {
        $(this).filter('[class*="-leave-"]').hoverDirection('removeClass');
    });
});
```

### destroy
Unbinds all plugin methods from selector.

```
$(function () {
	$('selector').hoverDirection('destroy');
});
```
