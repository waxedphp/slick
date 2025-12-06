
;(function ( $, window, document, undefined ) {

    var pluginName = 'slick',
        _search = '.waxed-slick',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.commands == 'object') { 
          for (var i=0; i<rec.commands.length; i++) {
            if (typeof rec.commands[i].cmd == 'string')
            switch(rec.commands[i].cmd) {
              case 'slickGoTo':
                $(that.element).slick(rec.commands[i].cmd, rec.commands[i].n, rec.commands[i].a);
                console.log(rec.commands[i].cmd);
              break;
              case 'slickNext':
              case 'slickPrev':
              case 'slickPause':
              case 'slickPlay':
                $(that.element).slick(rec.commands[i].cmd);
                console.log(rec.commands[i].cmd);
              break;              
            };
            
          };
        };

      },


      this.free = function() {

      },

      this.init=function() {
        
        $(that.element).slick({

  // normal options...
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots:false,
  infinite: true,
  mobileFirst: true
  /*

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
    */
});



        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
