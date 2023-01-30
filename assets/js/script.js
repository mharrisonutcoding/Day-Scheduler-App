// display current date and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

//save button and input
$('.saveBtn').on("click", function() {
    let value = $(this).siblings('textarea').val();
    let key = $(this).parent().attr('id');
  
    localStorage.setItem(key, value);
})

// loops through each time block ID, displays value from local storage

$('.time-block').each(function(){
    var id = $(this).attr('id');
    
    $('#'+ id + ' .description').val(localStorage.getItem(id));
});


  //current hour
  function hourlyUpdate() {
    var currentHour = moment().format('HH');

    //loop for time block, updates css class based on current time
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id"));

      
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourlyUpdate();
