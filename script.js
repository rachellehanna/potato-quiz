const questions = [
  {
    text: `What's your fave potato food?`,
    options: ["Potato salad", "French fries", "Mash", "Tots"],
  },
  {
    text: `What's your biggest fear?`,
    options: ["Spiders", "Death", "Heights", "Failure"],
  },
  {
    text: `What's your fave potato condiment?`,
    options: ["Ketchup", "Mayonnaise", "Vinegar", "Butter"],
  },
  {
    text: `Are you a cat or a dog person?`,
    options: ["Cat person", "Dog person", "Neither", "Both"],
  },
  {
    text: `What's your fave potato movie?`,
    options: ["Napoleon Dynamite", "Sling Blade", "The Martian", "Toy Story"],
  },
  {
    text: `Do you like your potatoes skin-on or off?`,
    options: ["On", "Off", "Both", "Who cares"],
  },
  {
    text: `Do you have any tattoos?`,
    options: ["Yes", "No", "Rather not say", "Sort of"],
  },
  {
    text: `If I gave you a potato right now, what would you do with it?`,
    options: ["Cook it", "Eat it raw", "Use it as a battery", "Toss it"],
  },
  {
    text: `Which colour do you prefer?`,
    options: ["Gold", "Yellow", "Purple", "Red"],
  },
  {
    text: `Are you an introvert or an extrovert?`,
    options: ["Introvert", "Extrovert", "I don't know", "It depends"],
  },
];

let currentQuestionIndex = 0;
let score = 0;

$("#question").text(questions[currentQuestionIndex].text);
$("#button0").text(questions[currentQuestionIndex].options[0]);
$("#button1").text(questions[currentQuestionIndex].options[1]);
$("#button2").text(questions[currentQuestionIndex].options[2]);
$("#button3").text(questions[currentQuestionIndex].options[3]);

function handleClick(event) {
  const id = event.target.id;
  const value = Number.parseInt(id[id.length - 1]);
  score = score + value;

  if (currentQuestionIndex === questions.length - 1) {
    const potatoId = calculateResult(score);
    $(".question-area").hide();
    $(".answer-area").hide();
    $(potatoId).show();
  } else {
    currentQuestionIndex = currentQuestionIndex + 1;
    $("#question").text(questions[currentQuestionIndex].text);
    $("#button0").text(questions[currentQuestionIndex].options[0]);
    $("#button1").text(questions[currentQuestionIndex].options[1]);
    $("#button2").text(questions[currentQuestionIndex].options[2]);
    $("#button3").text(questions[currentQuestionIndex].options[3]);
  }
}

$(".answer-area button").click(handleClick);

function calculateResult(score) {
  if (score <= 6) {
    return "#red-potato";
  } else if (score <= 12) {
    return "#sweet-potato";
  } else if (score <= 18) {
    return "#fingerling-potato";
  } else if (score <= 24) {
    return "#russet-potato";
  } else {
    return "#yukon-gold-potato";
  }
}

function scrollToMain() {
  document.querySelector("main").scrollIntoView();
}

$("#take-the-quiz").click(scrollToMain);

function playAgain(event) {
  $(".question-area").show();
  $(".answer-area").show();
  $(".potato-result > div").hide();
  currentQuestionIndex = 0;
  score = 0;
  $("#question").text(questions[currentQuestionIndex].text);
  $("#button0").text(questions[currentQuestionIndex].options[0]);
  $("#button1").text(questions[currentQuestionIndex].options[1]);
  $("#button2").text(questions[currentQuestionIndex].options[2]);
  $("#button3").text(questions[currentQuestionIndex].options[3]);
}

$(".potato-result button").click(playAgain);
