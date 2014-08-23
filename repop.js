/* 
 * AUTHOR : James M. Lay,
 * SITE : jameslaydigital.com,
 * STACKOVERFLOW : James M. Lay,
 * Sat Aug 23 19:53:54 UTC 2014
 *
 * Feel free to use this without crediting me.  I just hope it is useful to you as it was to me.
 */

(function() {
  window._COOKIES = {
    get cookies () {
      var text = document.cookie;
      var arr = text.split("; ");
      var name = "";
      var val;
      var dict = {};
      for ( var i = 0; i < arr.length; i++ ) {
        name = arr[i].split('=')[0];
        val = arr[i].split('=').slice(1).join('=');
        dict[name] = val;
      }
      return dict;
    },
    set cookies (val) {
      if ( typeof val !== "string" ) {
        throw new TypeError("_COOKIES.cookies can only be set to a string value.  This is essentially an alias for document.cookie.");
      }
      document.cookie = val;
    },
    reset : function() {
      for ( var key in this.cookies ) {
        document.cookie = key+"=;expires="+new Date;
      }
      return true;
    },
    get repop () {
      if ( !!this.cookies.repop ) {
        return JSON.parse(this.cookies.repop);
      }
      return [];
    },
  };
  function repop(e) {
    var inputs = document.querySelectorAll("input, select");
    var values = _COOKIES.repop;
    for ( var i = 0; i < values.length; i++ ) {
      if(inputs[i].type === "radio" || inputs[i].type === "checkbox") {
        inputs[i].checked = values[i] === "true" ? true : false;
      } else {
        inputs[i].value = values[i];
      }
    }
  }
  function depop(e) {
    var inputs = document.querySelectorAll("input, select");
    var values = [];
    for ( var i = 0; i < inputs.length; i++ ) {
      if ( inputs[i].type === "radio" || inputs[i].type === "checkbox" ) {
        values.push(inputs[i].checked);
      } else {
        values.push( inputs[i].value );
      }
    }
    document.cookie = "repop="+JSON.stringify(values);
  }
  window.addEventListener("load", repop);
  window.addEventListener("keydown", depop );
  window.addEventListener("click", depop );
})();
