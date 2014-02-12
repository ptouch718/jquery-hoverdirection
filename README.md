# jQuery Hover Direction
A simple plugin to add CSS classes based on direction of element entrance or exit.

## Usage
```
$(function () {
	$('selector').hoverDirection(options);
});
```

## Options
```
{
	cssPrefix: 'string' // Prefix directional classes. Defaults to 'hover'
}
```

## Methods

### removeClass
Removes all directional classes from selector

```
$(function () {
	$('selector').hoverDirection('removeClass');
});
```

### destroy
Unbinds all plugin methods from selector

```
$(function () {
	$('selector').hoverDirection('destroy');
});
```
