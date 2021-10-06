//=============MENU
const navigation = document.querySelector(".navigation");

document.querySelector(".toggle").onclick = function ()
{
   this.classList.toggle('active');
   navigation.classList.toggle('active');
}

//=============SMOOTH

const ratio = 0.5; //ratio d'apparition de l'objet

const options = { //observateur d'intersection
   root: null,
   rootMargin: "0px",
   threshold: ratio
}


const handleIntersect = function (entries, observer) {
   entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {           //si ratio dépassé par défilement
         entry.target.classList.add('reveal-visible')  //changement de classe de la div
         observer.unobserve(entry.target)              //cesse d'observer l'élément
      } 
   })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll("[class*=reveal-]").forEach(function (r) { 
   observer.observe(r);  // élément à observer
})


/* ====> FONCTIONNE sur 1 classe */
const handleIntersect2 = function (entries, observer) {
   entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
         entry.target.classList.add('rexeal-visible')
         observer.unobserve(entry.target)
      } 
   })
}
      

const observer2 = new IntersectionObserver(handleIntersect2, options)
observer2.observe(document.querySelector(".rexeal"))

const handleIntersect3 = function (entries, observer) {
   entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
         entry.target.classList.add('rexeal2-visible')
         observer.unobserve(entry.target)
      } 
   })
}
      

const observer3 = new IntersectionObserver(handleIntersect3, options)
observer3.observe(document.querySelector(".rexeal2"))

//====================SCROLL TOP

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
   })})

//==============================================

    //    prompt:"Pourquoi la rue Mercière se prénomme ainsi ?\n(a)En lien avec le commerce qui s'y tenait \n(b) Par rapport au politique qui résidait dans la rue\n(c) Sur décision du cardinal A.G. M. Rohan",
 
   let myQuestions = [
      {
         question: "De quelle armée provient l'obus de l'Hôtel Cathédrale ?",
         answers: {
            a: 'Russe',
            b: 'Germanique',
            c: 'Prusse'
         },
         correctAnswer: 'c'
      },
      {
         question: "D'où provient le nom de la rue Mercière ?",
         answers: {
            a: 'En lien avec le commerce qui s\'y tenait',
            b: 'Vis-à-vis d\'un politique habitant la rue',
            c: 'Sur décision du cardinal A.G. M. Rohan'
         },
         correctAnswer: 'a'
      },
      {
         question: "Que signifie 'spaetzle' ?",
         answers: {
            a: '...',
            b: '...',
            c: '...'
         },
         correctAnswer: 'a'
      },
      {
         question: "Bonus : quel film a été tourné à Strasbourg ?",
         answers: {
            a: '...',
            b: '...',
            c: '...'
         },
         correctAnswer: 'a'
      }
   ];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('valider');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

      function showQuestions(questions, quizContainer){
         
         let output = [];
         let answers;
      
  
         for(let i=0; i<questions.length; i++){
            
            // table des réponses
            answers = [];
      
            // BOUTON RADIO SUR HTML
            for(letter in questions[i].answers){
               answers.push(
                  '<label>'
                     + '<input type="radio" name="question'+i+'" value="'+ letter +'">'
                     + "  " + /* letter + */ "  "
                     + questions[i].answers[letter]
                  +'</label>'
               );
            }
      
          
            output.push(
               '<div class="question">' + questions[i].question + '</div>'
               + '<div class="answers">' + answers.join('') + '</div>'
            );
         }
      
         
         quizContainer.innerHTML = output.join('');

         }
   
      
   
      function showResults(questions, quizContainer, resultsContainer){
	

         let answerContainers = quizContainer.querySelectorAll('.answers');
         

         let userAnswer = '';
         let numCorrect = 0;
         

         for(let i=0; i<questions.length; i++){
      
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked') || {}).value; //undefined si pas de réponse mais pas erreur
            
            if(userAnswer===questions[i].correctAnswer){
               numCorrect++;
           
               answerContainers[i].style.color = 'lightgreen';
            }
            else{
               answerContainers[i].style.color = 'red';
            }
         }
      // SCORE
      resultsContainer.innerHTML = numCorrect + ' sur ' + questions.length;
      resultsContainer.style.textAlign = "center";
      resultsContainer.style.fontStyle = "bold"
      resultsContainer.style.fontSize = "1em"
      resultsContainer.style.fontFamily = "Poppins"
   }

   showQuestions(questions, quizContainer);
   
 
      submitButton.onclick = function(){
         showResults(questions, quizContainer, resultsContainer);
      }
   }








