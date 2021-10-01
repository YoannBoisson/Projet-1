//=============MENU
const navigation = document.querySelector(".navigation");

document.querySelector(".toggle").onclick = function ()
{
   this.classList.toggle('active');
   navigation.classList.toggle('active');
}

//=============SMOOTH

const ratio = 0.3; //ratio d'apparition de l'objet

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

/* 
====> FONCTIONNE sur 1 classe
const handleIntersect = function (entries, observer) {
   entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
         entry.target.classList.add('reveal-visible')
         observer.unobserve(entry.target)
      } 
   })
}
      

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector(".reveal")) */

//====================SCROLL TOP

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
   })})

//==============================================
let sectionQuiz = document.getElementById("quiz");

if (window.scrollTo(sectionQuiz)){
const questions = [
    {
       prompt:"De quelle origine est l'obus dans le mur de l'Hôtel Cathédrale ?\n(a) Allemande\n(b) Prusse\n(c) Russe",
       answer: "b"
    },
    {
        prompt:"Pourquoi la rue Mercière se prénomme ainsi ?\n(a)En lien avec le commerce qui s'y tenait \n(b) Par rapport au politique qui résidait dans la rue\n(c) Sur décision du cardinal A.G. M. Rohan",
        answer: "a"
    },
   ]
    let score = 0 
   
    for(let i = 0 ; i < questions.length ; i++) {
       let response = window.prompt(questions[i].prompt);
       if (response == questions[i].answer){
          score ++;
          alert("Correct");
       } else {
          alert("Wrong");
       }
    }
   
    alert("You got" + score + "/" + questions.length)

}

