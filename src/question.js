class Question{
  constructor(question) {
    this.question = question
  }

  // instance method to render the object to the dom
  renderQuestions() {
   let questionsDiv = document.getElementById("questions-container")
    
   questionsDiv.innerHTML += `
    <form>
    <label for="username">Name:</label>
    <input type="text" id="username" name="username" size="30" required>

     <p><label for="first-question">What did you accomplish today:</label></p>
     <textarea id="question" name="w3review" rows="4" cols="50" required></textarea>
     <br>
   
     <p><label for="second-qustion">Second Question:</label></p>
     <textarea id="question" name="w3review" rows="4" cols="50" required></textarea>
     <br>
   
     <p><label for="third-question">Third Question:</label></p>
     <textarea id="question" name="w3review" rows="4" cols="50" required></textarea>
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
