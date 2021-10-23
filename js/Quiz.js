class Quiz {
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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
question.hide()

background("white")

textSize(15)
fill("black")
text("results",130,125)

Contestant.getContestantInfo()
if(allContestants!=undefined){
var displayPosition=130
for(var plr in allContestants){
  var correctAnswer="2"
  if(correctAnswer === allContestants[plr].answer){
fill("green")
}
else{fill("red")}
displayPosition=displayPosition+30
textSize(25)
text(allContestants[plr].name+":"+allContestants[plr].answer,120,displayPosition)
}
}

  }

}
