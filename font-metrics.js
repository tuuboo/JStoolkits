var FontMetrics = function($, style, fontSize){
  var tEl = $("<span>");
  if(style != null) {
    tEl.style = style;
  }
  tEl.css("font-size", fontSize + "px");
  tEl.css("position", "absolute");
  tEl.css("left", "-9999px");
  tEl.css("top", "-9999px");
  tEl.appendTo(document.body);
  
  var usFontWidth = [];
  var cnFontWidth = 0;
  for(var i=0; i<=255;i++) {
    tEl.text(String.fromCharCode(i));
    usFontWidth.push(tEl.width())
  }
  tEl.text("1 1"), usFontWidth[32] = tEl.width() - 2*usFontWidth["1".charCodeAt(0)]
  tEl.text("\u4f60"), cnFontWidth = tEl.width();
  
  tEl.remove();
  tEl = null;
};
