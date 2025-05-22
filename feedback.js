// Done by: Jaiyanah Baring

function showAlert(event) {
    event.preventDefault();  // Add this line to stop form submission and page reload
    
    var name = document.getElementById("name").value;
    var rate1 = Number(document.getElementById("rating1").value);
    var rate2 = Number(document.getElementById("rating2").value);
    var rate3 = Number(document.getElementById("rating3").value);

    if (name == "" || isNaN(rate1) || isNaN(rate2) || isNaN(rate3)) {
      alert("Please enter your name and all three ratings.");
      return;
    }

    var total = rate1 + rate2 + rate3;
    var average = Math.round(total / 3);

    var message = "";
    if (average >= 4) {
      message = "Thanks for the high rating!";
    } else if (average >= 3) {
      message = "Sorry, We'll try to improve!";
    } else {
      message = "Sorry, We'll do better.";
    }

    alert("Hi " + name + "!\nYour average rating is " + average + ".\n" + message);
}