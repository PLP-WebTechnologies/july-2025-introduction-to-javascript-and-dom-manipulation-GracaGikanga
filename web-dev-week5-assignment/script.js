let greeting = "Hello, welcome to the self-care checker.Answer the questions and reflect on your wellness!";
alert(greeting);

function scoreCalculator() {
    let score = 0;

    // Question 1
    let water = document.querySelector('input[name="water"]:checked');
    if (water && water.value === "yes") {
        score += 1;
    }

    // Question 2
    let screen = document.querySelector('input[name="screen"]:checked');
    if (screen && screen.value === "yes") {
        score += 1;
    }

    // Question 3
    let movement = document.querySelector('input[name="movement"]:checked');
    if (movement && movement.value === "yes") {
        score += 1;
    }

    // Question 4
    let creative = document.querySelector('input[name="creative"]:checked');
    if (creative && creative.value === "yes") {
        score += 1;
    }

    // Question 5
    let air = document.querySelector('input[name="air"]:checked');
    if (air && air.value === "yes") {
        score += 1;
    }

    // ✅ Show result in the <p>
    document.getElementById("result").textContent = "Your self-care score is: " + score + "/5";

    feedback(score);
    showTips();
    return score;
}
// button click triggering AscoreCalculator
document.getElementById("but").addEventListener("click", scoreCalculator);



// Feedback function to provide personalized messages
function feedback(score) {
    let feedback = "";

    if (score === 5){
        feedback = "Excellent! You are taking great care of yourself.😘";
    } else if (score >= 3) {
        feedback = "Good job! But there's room for improvement.👍";
    } else {
        feedback = "Consider focusing more on your self-care habits❤️.";
    }

document.getElementById("result").textContent += "\n" + feedback;

}


// for loop to loop over an array
tips = ["Drink at least 8 glasses of water 💧", 
        "Take short breaks from screens 👀",
         "Move your body for 10 minutes 🏃",
          "Try something creative 🎨", 
          "Get fresh air 🌿"];
  for (let i=0 ;i < tips.length; i++){
    document.getElementById("tips").innerHTML += "<div>" + tips[i] + "</div>";
  }


let motivation = [
  "Believe in yourself 💪",
  "Stay positive 🌟",
  "Keep going 🚀",
  "Small steps lead to big change 🏆"]

for (let mot of motivation)
    document.getElementById("motivation").innerHTML += `<div>${mot}</div>`;