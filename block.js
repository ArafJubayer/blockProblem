import 'bootstrap@4.6.0'
import $ from 'jquery'
 
$('button')
  .html('Click me') // Try edit it...
  .on('click', () => console.log(suitableBlock()))
 
var blocks = [
  {
    gym: true,
    school: false,
    store: false
  },
    {
    gym: true,
    school: false,
    store: false
  },
    {
    gym: false,
    school: true,
    store: false
  },
    {
    gym: false,
    school: false,
    store: true
  },
    {
    gym: true,
    school: false,
    store: true
  }
];
 
var items = ["gym", "school", "store"];
 
function suitableBlock() {
 
  var minDist = 100;
  var desiredBlockIndex = 0;
 
  for(var i=0; i<blocks.length; i++){
    var dist = 0;
  
    for(var x=0; x<items.length; x++){
      var itemDist;
      if(blocks[i][items[x]] === true){
        itemDist = 0;
      } else {
        var d = 100;
        for (var p = i ; p < blocks.length;  p++){
          if(blocks[p][items[x]] === true){
             d = p - i;
             break;
          }
        }
 
        var u = 100;
        for (var q = i ; q >= 0;  q--){
          if(blocks[q][items[x]] === true){
             u = i - q;
             break;
          }
        }
 
        if(d>u){
          itemDist = u;
        } else{
          itemDist = d;
        }
      }
      dist += itemDist;
    }
    
    
    if(dist<minDist){
      minDist = dist
      desiredBlockIndex = i;
    }
   
  }
  return desiredBlockIndex;
}