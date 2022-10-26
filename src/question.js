class Question{
  constructor(question) {
    this.question = question
  }

  // instance method to render the object to the dom
  renderQuestions() {
   let questionsDiv = document.getElementById("questions-container")
    
   questionsDiv.innerHTML += `
    <form>
     <p><label for="w3review">Review of W3Schools:</label></p>
     <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
     <br>
   
     <p><label for="w3review">Review of W3Schools:</label></p>
     <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
     <br>
   
     <p><label for="w3review">Review of W3Schools:</label></p>
     <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
     <br>
     
     <input type="submit" value="Submit">
    </form>
   `
  }


}
