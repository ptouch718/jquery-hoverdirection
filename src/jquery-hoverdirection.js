;(function ($, window, document, undefined) {

  var _pluginName = 'hoverDirection',
      _defaults = {
        cssPrefix : 'hover'
      },
      _settings = {},
      _stylePrefixRegex; 
      
  // -- Private ----------------------------------------------------
  function _convertFaceToDir (face) {
    switch (face) {
      case 0:
        return 'top';
      case 1:
        return 'right';
      case 2:
        return 'bottom';
      case 3:
        return 'left';
      default :
        break;
    }
  }

  function _constructStyleClass (event) {
    var $this       = $(this),        
        h           = $this.height(),
        w           = $this.width(),
        x           = (event.pageX - $this.offset().left - (w/2)) * ( w > h ? (h/w) : 1 ),
        y           = (event.pageY - $this.offset().top  - (h/2)) * ( h > w ? (w/h) : 1 ),
        eventDir    = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180 ) / 90 ) + 3 )  % 4,
        prefixClass = _settings.cssPrefix,
        typeClass   = (event.type === 'mouseleave') ? 'leave' : 'enter',
        dirClass    = _convertFaceToDir(eventDir);

    return prefixClass + '-' + typeClass + '-' + dirClass;
  }

  function _addClass (event) {
    var className = _constructStyleClass.apply(this, [event]);
    $(this).addClass(className);
  }

  function _removeClass() {
    $(this).removeClass(function (index, styleClass) {
      return (styleClass.match(_stylePrefixRegex) || []).join(' ');
    });
  }

  function _handleMouse (event) {
    _removeClass.apply(this);
    _addClass.apply(this, [event]);
  }
  
  // -- Public ----------------------------------------------------
  var methods = {
    init : function (options) {
      _settings = $.extend(_defaults, options);
      _stylePrefixRegex = new RegExp('\\' + _settings.cssPrefix + '\\S+','g');
      
      // Main plugin code
      return this.each(function () {
        $(this).on('mouseenter mouseleave', _handleMouse);
      }); 
  
    },

    removeClass : function () {
      _removeClass.apply(this);
       return this;
    },

    destroy : function () {
      _removeClass.apply(this);
      return this.each(function () {
        $(this).off('mouseenter mouseleave', _handleMouse);
      });
    }
  };
  
  $.fn[_pluginName] = function (method) {
    if (methods[method]) { // Call Method
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) { // Initialize
      return methods.init.apply(this);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.' + _pluginName);
    }
  };
} (jQuery, window, document));