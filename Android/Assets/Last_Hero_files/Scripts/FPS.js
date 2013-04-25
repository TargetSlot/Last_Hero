#pragma strict

var updateInterval : float;
var lastInterval :float;
var frames : int;
var fps : int;
var timeNow : float;
     
function Start() {
  lastInterval = Time.time;
  updateInterval = 0.5F;
  frames = 0;
  frames = 0;
}

function Update() {
  ++frames;
  timeNow = Time.time;
  if (timeNow > lastInterval + updateInterval) {
    fps = frames / (timeNow - lastInterval); 
    frames = 0;
    lastInterval = timeNow;
  }
  guiText.text="FPS: " + fps.ToString("f2");
}
