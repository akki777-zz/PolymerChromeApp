Polymer('second-tab',{
  ready: function(){
    this.z = "3";
    this.hr = '128';
    this.hg = '128';
    this.hb = '128';
    this.hex = '#808080';
  },
  zChanged: function() {
          this.$.boxShadow.setZ(this.z);
          this.fire('shadow-z-changed'); //coz z="{{z}}" and change event not working
  },
  changeColor:function(){
    var hex,red,green,blue;

    if(this.hr<16){
        red = this.hr.toString(16);
        red = '0'+ red;
    }else{
      red = this.hr.toString(16);
    }
    
    if(this.hg<16){
      green = this.hg.toString(16);
      green = '0'+ green;
    }else{
      green = this.hg.toString(16);
    }
    
    if(this.hb<16){
      blue = this.hb.toString(16);
      blue = '0'+ blue;
    }else{
      blue = this.hb.toString(16);
    }
    
    hex = '#'+ red + green + blue;
    this.$.hexColor.value = hex;//important this.$....
    this.$.box.style.backgroundColor= hex;
    this.fire('color-changed');
    
  },
  hrChanged: function(){this.changeColor();}, //this keyword important
  hgChanged: function(){this.changeColor();},
  hbChanged: function(){this.changeColor();},
  
  hexToRgb: function(input) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  },
  
  invoke: function(){
    var red = this.hexToRgb(this.inputVal).r;
    var green = this.hexToRgb(this.inputVal).g;
    var blue = this.hexToRgb(this.inputVal).b;
    this.hr=red;this.hg=green;this.hb=blue;
    this.$.box.style.backgroundColor="rgb("+red+","+green+","+blue+")"; // important thing to pass var in RGB() 
    this.hrChanged();this.hgChanged();this.hbChanged();
  }
  
});