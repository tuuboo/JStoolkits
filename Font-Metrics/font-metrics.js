var FontMetrics = function($, fontSize, style){
  var tEl = $("<span>");
  if(style != null) {
    tEl.style = style;
  }
  tEl.css("font-size", fontSize + "px");
  tEl.css("position", "absolute");
  tEl.css("left", "-9999px");
  tEl.css("top", "-9999px");
  tEl.appendTo(document.body);
  
  this.usFontWidth = [];
  this.cnFontWidth = 0;
  for(var i=0; i<=255; i++) {
    tEl.text(String.fromCharCode(i));
    this.usFontWidth.push(tEl.width())
  }
  tEl.text("1 1"), this.usFontWidth[0x20] = tEl.width() - 2*this.usFontWidth["1".charCodeAt(0)]
  tEl.text("\u4f60"), this.cnFontWidth = tEl.width();
  
  tEl.remove();
  tEl = null;
  
  this.dotdotdotWidth = this.usFontWidth[46] * 3;
  this.maxFontWidth = this.cnFontWidth;
  for(var i=0; i<this.usFontWidth.length; i++) {
    if(this.usFontWidth[i]>this.maxFontWidth){
      this.maxFontWidth = this.usFontWidth[i];
    }
  }
  
  this.width = function(str){
    var w = 0;
    for(var i=0; i<str.length; i++) {
      w = w + (str.charCodeAt(i) <= 255?this.usFontWidth[str.charCodeAt(i)]:this.cnFontWidth);
    }
    return w;
  };
  
  this.strip = function(str, maxWidth){
    if(str.length * this.maxFontWidth < maxWidth){
      return str;
    }
    var w = 0, idx = 0;
    for(var i=0; i<str.length; i++) {
      w = w + (str.charCodeAt(i) <= 255?this.usFontWidth[str.charCodeAt(i)]:this.cnFontWidth);
      if(w+this.dotdotdotWidth <= maxWidth){
        idx = i+1;
      }
      if(w > maxWidth){
        return str.substr(0, idx) + "...";
      }
    }
    return str;
  }
};
