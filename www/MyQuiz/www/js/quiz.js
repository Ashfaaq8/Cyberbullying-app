$(document).ready(function() {
  var counter = 0;
  var score = 0;

  $("#next, .choices, #question, #count, #continue").hide();

  var quizQuestions = [{
  question:"How would you define cyberbullying?",
  choices:["All answers are correct", "When a person repeatedly punches, hits or kicks another", "When a person is harassed, humiliated, embarrassed, threatened or tormented through the use of digital technology","When charges are brought against an individual for using the internet to harass, intimidate or threaten another"],
  answer: 2
},
{
  question:"What is the best thing do when you are bullied?",
  choices:["Fight Back", "Ignore the cyberbullying.", "Tell your Friends","Report the case to the authorities."],
  answer: 3 
},
{
  question:"What can be an effect of cyberbullying? ",
  choices:["Happiness", "Getting Addicted to the internet.", "Depression or Suicide.", "Euphoria."],
  answer: 2
},
{
  question:"Kids who are cyberbullied are more likely to:",
  choices:["Skip School", "Get Bad Grades", "Have Health Problems", "All Of the Above"],
  answer: 3
},
{
  question:"What is an example of cyber bullying?",
  choices:["Ignoring someone that is talking to you.", "Mean text messages.", "Hitting someone.","Telling someone their shirt is ugly."],
  answer: 1
},
{
  question:"When can cyber bullying not happen?",
  choices:["At Home", "At School", "When you are playing an online game", " When you talk to someone face to face"],
  answer: 3
},
{
  question:"What do you do if you or someone you know is being cyber bullied?",
  choices:["Let someone know", "Keep it to Yourself.", "Delete the evidence.", "Get Into a Fight With that person.", ],
  answer: 0
},
{
  question:"How many teens that are victims of cyber bullying think of suicide?",
  choices:["1 in 8", "1 in 10", "1 in 3", "1 in 5"],
  answer: 3
},
{
  question:"What percentage of parents are unaware of their child being the target of bullying?",
  choices:["20%", "70%", "90%","50%"],
  answer: 2
},
{
  question:"What are some of the impacting factors of cyber-bullying?",
  choices:["Difficult to trace.", "Cyber-bullying can happen 24/7", "Anonymous posting and quickly circulated","All of the above"],
  answer: 3
},
]

  
  $("#next , #Start").on("click", function(){
        
    $(".choices, .questions").empty();
	$("#Start, h2").hide();
	$("#next, .choices ,h3, #count").show();
	

    function incrementCounter(){
        $("#count").text(counter+1);
          
    
      };    
      
        
      if(quizQuestions[counter]){
          $(".questions").append("<h2>" + quizQuestions[counter].question + "</h2>")
            
  for(var i = 0 ; i < quizQuestions[counter].choices.length;i+=1){
    $(".choices").append( "<ul>" + "<input type='radio' name='radio' value=' " + i + " '/>" + quizQuestions[counter].choices[i] + "</ul>");
  } 
                incrementCounter();
counter++
            }
        else //no more question, show total
        {
			$("#question, #count, #next").hide();
			$("#continue").show();
            $("#score").text(" You scored: " + score+ " out of 10");
           

            if(score >= 0 && score <= 3){
				$("#level").text("Your Knowledge of cyberbullying is very limited");
				
				$("#continue").on("click", function(){
					window.location.replace("../html/slowmain.html");
				});
            }
            else if(score > 4 && score <= 6){
				$("#level").text(" You have a decent understanding of what cyberbullying is.");
            }
            else if(score > 6 && score <=9){
				$("#level").text(" You have a very good understating of cyberbullying.");
			}
			else {
			$("#level").text(" You have a perfect understanding of cyberbullying.");	
            }
           
        
		}

});

    $("body").on("click","input", function() {

          $("input[type='radio']:checked").val();

          var $selectedText=$("input[type='radio']:checked").val();
         
  if($selectedText==quizQuestions[counter-1].answer) {
            score +=1;
          }
      
        
          
    });
  
});