class Question{
  constructor(question) {
    this.question = question
  }

// instance method to render the object to the dom

  renderQuestions() {
   let questionsDiv = document.getElementById("questions-container")
    
   questionsDiv.innerHTML += `
   <ul>
    <li> Hey there!</li>
   </ul>
   `
  }


}