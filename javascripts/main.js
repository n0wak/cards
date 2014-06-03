// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();





var card_list = [
{"id":1, "name":"Hit", "type":"","cost":"11","energy":"1"},
{"id":2, "name":"Push", "type":"","cost":"2","energy":"22"},
{"id":3, "name":"Hit", "type":"","cost":"12","energy":"333"},

];


var deck = [
{"id":3,"position":"deck"},
{"id":1,"position":"deck"},
{"id":2,"position":"deck"},
{"id":1,"position":"deck"},
];









$( ".card.active" ).on("click",
function(e) {
    //alert("!");
    //$(this).toggleClass("flipped");
}).draggable(
    {
        scroll : false,
      stack : ".card.active",
      start: function() {
          $(this).addClass("dragging");
      },
      drag: function() {
      },
      stop: function() {
          $(this).removeClass("dragging");
      }
});
