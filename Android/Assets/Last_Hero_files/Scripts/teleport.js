#pragma strict

var target : GameObject;

function OnTriggerEnter(other: Collider){
  if (other.gameObject.CompareTag("Player")){
    other.gameObject.transform.position=target.gameObject.transform.position;
    other.gameObject.transform.rotation=target.gameObject.transform.rotation;
  }
}