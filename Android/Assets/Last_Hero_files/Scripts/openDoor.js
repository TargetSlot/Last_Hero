#pragma strict

var value_Rotate : float;
var value_now : float;
var speed : float;
var object_Rotate : GameObject;



function Start(){
  value_Rotate = 0.0;
  value_now = 0.0;
  speed = 0.2;
}

function Update () {
    value_now = value_now+(value_Rotate-value_now)*speed;
    object_Rotate.transform.rotation = Quaternion.identity;
    object_Rotate.transform.Rotate(-90,90-value_now,0);
}

function OnTriggerEnter(other: Collider){
  value_Rotate = 90.0;
  //value_now = 0;
}

function OnTriggerExit(other: Collider){
  value_Rotate=0;
  //value_now = 90;
}