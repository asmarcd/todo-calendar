// Display on https://momentjs.com/docs/#/displaying/ will show you what to add to moment().format() to get what you need to display on the site.
// each time slot is a row with 3 columns. Create those using jQuery, not in the html



// Global variables:
var container = $('.container');
var currentDay = $('#currentDay');
var currentHour = moment().format('H');

// This displays the current date and time at the top of the page.
currentDay.text(moment().format('dddd, MMMM Do, YYYY. h:mm A'));

// These are the hours referenced by the time block elements:
var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// This for loop creates the time blocks, titles them, and dynamically colors them based on the time of day
for (var i = 0; i < timeArray.length; i++) {
    // Variables for each part of the time blocks:
    var timeBlock = $("<div class='row time-block'>");
    var hourBox = $("<div class='col-md-2 hour'>");
    var textBox = $(`<textarea id = 'hour-${timeArray[i]}'></textarea>`);
    var saveBtn = $(`<button class='col-md-2 saveBtn ${timeArray[i]}'>`);

    // Adding elements of time block to the page
    container.append(timeBlock);
    timeBlock.append(hourBox);
    timeBlock.append(textBox);
    timeBlock.append(saveBtn);

    // Content for time blocks:
    var timeAmPm = timeArray[i] - 12
    if (timeArray[i] < 12) {
        hourBox.html(`<br><br>${timeArray[i]} AM`);
    } else if (timeArray[i] === 12){
        hourBox.html(`<br><br>12 PM`);
    } else {
        hourBox.html(`<br><br>${timeAmPm} PM`)
    };
    saveBtn.html('<i class="fas fa-save"></i>');

    // Applying coloration based on time
    if (timeArray[i] < currentHour) {
        textBox.attr('class', `col-md-8 past`)
    } else if (timeArray[i] > currentHour) {
        textBox.attr('class', 'col-md-8 future')
    } else if (timeArray[i] == currentHour) {
        textBox.attr('class', 'col-md-8 present')
    }
};

// These click events track the button you've clicked and store the data accordingly

container.on("click", ".9", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('9am', textInput.val())
});

container.on("click", ".10", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('10am', textInput.val())
});

container.on("click", ".11", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('11am', textInput.val())
});
container.on("click", ".12", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('12pm', textInput.val())
});
container.on("click", ".13", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('1pm', textInput.val())
});
container.on("click", ".14", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('2pm', textInput.val())
});
container.on("click", ".15", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('3pm', textInput.val())
});
container.on("click", ".16", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('4pm', textInput.val())
});
container.on("click", ".17", function () {
    var textInput = $(this).siblings('textarea');
    localStorage.setItem('5pm', textInput.val())
});

// This function takes your local storage and reapplies it to the page even when you refresh.
function displayToDos() {
var textFromLocalStorage1 = localStorage.getItem('9am');
$("#hour-9").text(textFromLocalStorage1);
var textFromLocalStorage2 = localStorage.getItem('10am');
$("#hour-10").text(textFromLocalStorage2);
var textFromLocalStorage3 = localStorage.getItem('11am');
$("#hour-11").text(textFromLocalStorage3);
var textFromLocalStorage4 = localStorage.getItem('12pm');
$("#hour-12").text(textFromLocalStorage4);
var textFromLocalStorage5 = localStorage.getItem('1pm');
$("#hour-13").text(textFromLocalStorage5);
var textFromLocalStorage6 = localStorage.getItem('2pm');
$("#hour-14").text(textFromLocalStorage6);
var textFromLocalStorage7 = localStorage.getItem('3pm');
$("#hour-15").text(textFromLocalStorage7);
var textFromLocalStorage8 = localStorage.getItem('4pm');
$("#hour-16").text(textFromLocalStorage8);
var textFromLocalStorage9 = localStorage.getItem('5pm');
$("#hour-17").text(textFromLocalStorage9);
}

displayToDos();