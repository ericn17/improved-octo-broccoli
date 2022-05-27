// Save button variable
var saveBtn = $(".saveBtn");

// Displays current day in the jumbotron 
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Color coded each time block to indicate past, present, or future
function timeBlockColor() {
  var hour = moment().hours();

  $(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id"));
    
    if (currentHour > hour) {
      $(this).addClass("future");
    } else if  (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  })
};

// Clicking on the save button will store the event in a local storage
saveBtn.on("click", function() {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();
  localStorage.setItem(time, plan)
});

// Even when I refresh the page, the saved events should still show
function usePlanner () {
  
  $(".hour").each(function() {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);

    if(currentPlan !== null) {
      $(this).siblings(".plan").val(currentPlan);
    }
  });
}

timeBlockColor();
usePlanner();