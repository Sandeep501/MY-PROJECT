function populate() {
  if (quiz.isEnded()) {
showscores();
  }
  else {

    var element=document.getElementById("question");
    element.innerHTML=quiz.getquestionIndex().text;
    var choices=quiz.getquestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element=document.getElementById("choice"+i);
      element.innerHTML=choices[i];
      guess("btn"+i,choices[i]);
    }
    showprogress();
  }
};
function guess(id,guess)
{
var button=document.getElementById(id);
button.onclick=function () {
  quiz.guess(guess);
  populate();
}
};
function showprogress()
{
  var currentQuestionNumber=quiz.questionIndex+1;
  var element=document.getElementById("progress");
  element.innerHTML="Question"+currentQuestionNumber+"of"+quiz.questions.length;
}
function showscores() {
  var gameoverHtml="<h1>Result</h1>";
  gameoverHtml+="<h2 id='score'>Your score:"+quiz.score+"</h2>";
  var element=document.getElementById("quiz");
  element.innerHTML=gameoverHtml;
};




var questions=[
  new Question("who is the president of INDIA?",["Pranab mukarji","thilak","prathibha patel"," Ramnath kovind"],"Ramnath kovind"),
  new Question("PM of INDIA?",["Gokule","Jagadesh chatargi","Narendra singh","Modi"],"Modi"),
  new Question("who is the current Defence Secretry Minister?",["sanjeev malhotra","Ramnath chatul","Sanjay Mitra ","pushkar patel"],"Sanjay Mitra"),
  new Question("who is the Director General of DRDO?",["Avinash chander","Raman thivari","Neelam kumar","Prathap singh"],"Avinash chander"),
  new Question("who is the financial minister of INDIA?",["Arun jaitle","Sarpal singh","Thanujan","Devendra gowda"],"Arun jaitle")];
var quiz=new Quiz(questions);
populate();
