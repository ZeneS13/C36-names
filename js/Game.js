class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    Player.getAll()
    if(allPlayers!==undefined){
      var y=0
      for(var plr in allPlayers){
        if(plr==="player"+player.index){
          fill("red")
        }
        else{
          fill("black")
        }
        y=y+60
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,130,y)
      }
    }
    if(keyDown(UP_ARROW)){
      player.distance+=50
      player.update();
    }



  }



}
