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
    <input type="text" id="name" name="username" size="30" required>
     <br></br>
     
     <p><label for="first-question">What did you accomplish today?</label></p>
     <textarea id="question" rows="4" cols="50" required></textarea>
     <br>
     
     <p><label for="second-qustion">How will you improve your tomorrow?</label></p>
     <textarea id="question" rows="4" cols="50" required></textarea>
     <br>

     <p><label for="third-question"> Can you name 2 things that motivated you today?</label></p>
     <textarea id="question" rows="4" cols="50" required></textarea>
     <br></br>

     <div id="button"> <input type="submit" > </div>
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
