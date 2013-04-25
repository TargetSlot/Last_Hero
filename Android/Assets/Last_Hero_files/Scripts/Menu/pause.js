#pragma strict

var pause: byte;
var window: int;
var floatVolume: float;
var intVolume: int;




function Start () {
  window = 0;
  pause = 0;
  floatVolume = 50.0;
}

function Update() {
  if(Input.GetKeyUp(KeyCode.Escape)){
    if (pause==0){
      Time.timeScale = 0;
      pause = 1;
      window = 1;
    }
    else{
      Time.timeScale = 1;
      pause = 0;
      window = 0;
    }
  }
}

function OnGUI(){
  //GameMenu
  if (window ==1){
    GUI.Box(new Rect(Screen.width*0.3,Screen.height*0.15,Screen.width*0.4,Screen.height*0.7),"Game Menu");
    if (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.27,Screen.width*0.2,Screen.height*0.1),"Continue")){
      Time.timeScale = 1;
      pause = 0;
      window = 0;
    }
    if (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.40,Screen.width*0.2,Screen.height*0.1),"Options"))
      window = 2;
    if (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.53,Screen.width*0.2,Screen.height*0.1),"Menu")){
      Time.timeScale = 1;
      pause = 0;
      window = 0;
      Application.LoadLevel(0);
    }
    if (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.66,Screen.width*0.2,Screen.height*0.1),"Exit"))
      Application.Quit();
  }
  //Options
  if (window == 2){
    GUI.Box(new Rect(Screen.width*0.3,Screen.height*0.15,Screen.width*0.4,Screen.height*0.7),"Options");
    if (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.27,Screen.width*0.2,Screen.height*0.1),"Sound"))
      window = 3;
    if (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.40,Screen.width*0.2,Screen.height*0.1),"Back"))
      window = 1;
  }
  //Sound
  if (window == 3){
    GUI.Box(new Rect(Screen.width*0.3,Screen.height*0.15,Screen.width*0.4,Screen.height*0.7),"Sound");
    GUI.Label(new Rect(Screen.width*0.35,Screen.height*0.27,Screen.width*0.15,Screen.height*0.1),"Volume:");
    floatVolume = GUI.HorizontalSlider(new  Rect(Screen.width*0.45+20,Screen.height*0.282,Screen.width*0.12,Screen.height*0.1), floatVolume, 0, 100);
    //intVolume = floatVolume;

    if (GUI.Button(new Rect(Screen.width*0.4,Screen.height*0.40,Screen.width*0.2,Screen.height*0.1),"Back"))
      window = 2;   
  }
}