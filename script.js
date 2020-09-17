console.log(moment().format());
console.log(moment().format("hA"));
// Display on https://momentjs.com/docs/#/displaying/ will show you what to add to moment().format() to get what you need to display on the site.
// each time slot is a row with 3 columns. Create those using jQuery, not in the html

// TODO: Create one row with time, text area, and button using jQ.

// TODO: Show the time on the top of the calenda,r using moment.js, grab the time, and set the text of the p tag with the id of currentDay to be our time from moment.js

// TODO: Create an array to hold the hours ["9am", "10am", "11am",] etc

// TODO: Using a for loop, loop over the hours array and create a div for row, textarea, and a button
// Here's the started HTML code: 
/* <div class="row time-block">
    <div class="col-md-2 hour">
        "hour"
    </div>
    <textarea class="col-md-8 past">

    </textarea>
    <button class="col-md-2 saveBtn">
        "Save"
    </button>
</div> */

// TODO: Give elements content, and 

// TODO: give elements the class that they need based on time of day (ex. if time is past, give textArea class of past). 

// How do I compare hours on page to current time in real life? Find that in the moment.js API. Plugging ""hA"" into the moment().format(HERE) will give you the current hour and AM/PM. You can use this to create an if statement.

// using an if statement, we can check using moment.js to see if the hour we're looping over is past the current hour, if true, give it the class of past. Using military time and >< might be the best way to do it. 

// TODO: append elements to the row, and then append the row to the page

// TODO: Create event listener click event for save button

// TODO: Grab the value of the text area and save it to a variable - i need to be able to save only the text from the text area that is in the same row as my button

// TODO: using localStorage.setItem, save the text to local storage

// TODO: retrieve the local storage data using locaStorage.getItem and display it in the correct area that they belong to it.

// Here's the general layout of the code. swap out 'test' for the hour key, and apply a different class to each created row, like .first and .second usinf jQ. You can set the class to be the same as the key/hour using a varaible in the loop, and push the local storage data to that. 

// localStorage.setItem('test', 'test note 1');
// localStorage.setItem('test2', 'test note 2');

// var textFromLocalStorage1 = localStorage.getItem('test')
// $(".first").text(textFromLocalStorage);

// var textFromLocalStorage2 = localStorage.getItem('test2')
// $(".second").text(textFromLocalStorage);