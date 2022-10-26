class Question{
  constructor(question) {
    this.question = question
  }

  // instance method to render the object to the dom
  renderQuestions() {
   let questionsDiv = document.getElementById("questions-container")
    
   questionsDiv.innerHTML += `
    <form>
     <p><label for="w3review">First Question:</label></p>
     <textarea id="question" name="w3review" rows="4" cols="50"></textarea>
     <br>
   
     <p><label for="w3review">Second Question:</label></p>
     <textarea id="question" name="w3review" rows="4" cols="50"></textarea>
     <br>
   
     <p><label for="w3review">Third Question:</label></p>
     <textarea id="question" name="w3review" rows="4" cols="50"></textarea>
     <br>
     
     <input type="submit" value="Submit">
    </form>
   `
  }

   // add event listener for the form
  questionFormSubmission(){
    let questionsDiv = document.getElementById("questions-container")
    questionsDiv.addEventListener("submit", (event)=> {
      event.preventDefault();
      alert("Your response was recorded successfully!")
      event.target.reset()
    })
  }
}
