#pragma strict

var window: int;

function Start () {
  window = 0;
}


function OnGUI(){
  if (window==0){
    GUI.Box(new Rect(Screen.width*0.1,Screen.height*0.15,Screen.width*0.8,Screen.height*0.7),"Last Hero");
    if (GUI.Button(new Rect(Screen.width*0.20,Screen.height*0.25,Screen.width*0.6,Screen.height*0.2),"Start"))
      Application.LoadLevel(1);
    if (GUI.Button(new Rect(Screen.width*0.20,Screen.height*0.50,Screen.width*0.6,Screen.height*0.2),"Exit"))
      Application.Quit();
  }
}

