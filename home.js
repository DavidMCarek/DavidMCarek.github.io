var app = angular.module('homeApp',[])

app.controller('homeController',function($scope){
    
        
    var circle = document.getElementById('circle'), 
        button = document.getElementById('button');

    var result = document.getElementById('result'),
        totalCurrentPercent = 0,
        currentPercent = 0;

    var showPercent = window.setInterval(function() {
      if(currentPercent < 100)
      {
        currentPercent += 1;
      }
      else {
        currentPercent = 0;
      }
      result.innerHTML = currentPercent;
    }, 39); 


    function findKeyframesRule(rule) {
        var ss = document.styleSheets;
        for (var i = 0; i < ss.length; ++i) {
            for (var j = 0; j < ss[i].cssRules.length; ++j) {
                if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule) { return ss[i].cssRules[j]; }
            }
        }
        return null;
    }

    function change(anim) {
      var keyframes = findKeyframesRule(anim),
          length = keyframes.cssRules.length;
      
      var keyframeString = [];  
      for(var i = 0; i < length; i ++)
      {
        keyframeString.push(keyframes[i].keyText);
      }
      
        
      var keys = keyframeString.map(function(str) {
        return str.replace('%', '');
      });
      
      totalCurrentPercent += currentPercent;
      if(totalCurrentPercent > 100)
      {
        totalCurrentPercent -= 100;
      }
      var closest = getClosest(keys);
      
      var position = keys.indexOf(closest), 
          firstPercent = keys[position];
      
      for(var i = 0, j = keyframeString.length; i < j; i ++)
      {
        keyframes.deleteRule(keyframeString[i]);
      }
      
      var multiplier = firstPercent * 3.6;
      
      keyframes.insertRule("0% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 0) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 0) + "deg); background-color:red; }");
      keyframes.insertRule("13% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 45) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 45) + "deg); }");
      keyframes.insertRule("25% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 90) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 90) + "deg); }");
      keyframes.insertRule("38% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 135) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 135) + "deg); }");
      keyframes.insertRule("50% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 180) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 180) + "deg); }");
      keyframes.insertRule("63% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 225) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 225) + "deg); }");
      keyframes.insertRule("75% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 270) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 270) + "deg); }");
      keyframes.insertRule("88% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 315) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 315) + "deg); }");
      keyframes.insertRule("100% { -webkit-transform: translate(100px,100px) rotate(" + (multiplier + 360) + "deg) translate(-100px,-100px) rotate(" + (multiplier + 360) + "deg); }");
      
      circle.style.display = "inherit";
      circle.style.webkitAnimationName = anim; 
      
      window.clearInterval(showPercent);
      currentPercent = 0;
      showPercent = self.setInterval(function() {
        if(currentPercent < 100)
        {
          currentPercent += 1;
        }
        else {
          currentPercent = 0;
        }
        result.innerHTML = currentPercent;
      }, 39); 
    }

    button.onclick = function() {
      circle.style.webkitAnimationName = "none";
      circle.style.display = "none";
      setTimeout(function () { 
          change("rotate"); 
      }, 0);
    }

    function getClosest(keyframe) {
      var curr = keyframe[0];
      var diff = Math.abs (totalCurrentPercent - curr);
      for (var val = 0, j = keyframe.length; val < j; val++) {
        var newdiff = Math.abs(totalCurrentPercent - keyframe[val]);
        if (newdiff < diff) {
          diff = newdiff;
          curr = keyframe[val];
         }
      }
      return curr;
    }
    
});
