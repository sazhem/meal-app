document.addEventListener('DOMContentLoaded', function() {
   
    function convertDay(day) {
        return day.format('dddd MMM D');
    }

    // Saving data to localStorage
    function savingData(day, data) {
        localStorage.setItem('day-block' + day, data);
    }

    // Loading data from localStorage
    function loadingData(day) {
        return localStorage.getItem('day-block' + day);
    }

    // Removing data from localStorage
    function removingData(day) {
        localStorage.removeItem('day-block' + day);
    }

// Getting the current day (using dayjs)
var currentDay = dayjs();

// Picking Monday as the start of the week
var startOfWeek = currentDay.startOf('week').day(1);

// Array for holding dayjs objects for each day of the week
var daysOfWeek = [];

// Populating the daysOfWeek array for the current week
for (var i = 0; i < 7; i++) {
    daysOfWeek.push(startOfWeek.add(i, 'day'));
}

// Selecting the container element in the DOM
var container = document.querySelector('.container');

// Creating day blocks for each day of the week
daysOfWeek.forEach(function(day) {
    // Creating the day block element
    var dayBlock = document.createElement('div');
    dayBlock.classList.add('day-block', 'row');

    // Storing the date in the correct format
    dayBlock.dataset.date = day.format('YYYY-MM-DD');

    // Adding a class if it's the current day
    if (day.isSame(currentDay, 'day')) {
        dayBlock.classList.add('current-day-style');
    }

    // Creating the day column
    var dayCol = document.createElement('div');
    dayCol.classList.add('day', 'col-2');
    dayCol.textContent = convertDay(day);

    // Creating the textarea for user input
    var taskText = document.createElement('textarea');
    taskText.classList.add('description', 'col-9');

    // Creating the save button
    var saveButton = document.createElement('button');
    saveButton.classList.add('saveBtn', 'col-1');
    saveButton.innerHTML = '<i class="fas fa-save"></i>';

    // Appending all the bits to the day block
    dayBlock.appendChild(dayCol);
    dayBlock.appendChild(taskText);
    dayBlock.appendChild(saveButton);

    // Appending the day block to the container
    container.appendChild(dayBlock);

    // Loading any saved data for the day
    var savedData = loadingData(day.format('YYYY-MM-DD'));
    if (savedData) {
        taskText.value = savedData;
    }
});

    // Event listener for click events in the container
    container.addEventListener('click', function(event) {
        // If the save button is clicked
        if (event.target.classList.contains('saveBtn')) {
            // Find the closest day block to the clicked button
            var dayBlock = event.target.closest('.day-block');
            // Get the relevant date
            var day = dayBlock.dataset.date;
            // Get the user input data
            var data = dayBlock.querySelector('.description').value;
            // Save the data
            savingData(day, data);
        }
    });

    // Event listener for automatically saving anything the user type
    // Might add this back in if we decide to remove the save button
    /*
    container.addEventListener('input', function(event) {
        if (event.target.classList.contains('description')) {
            var dayBlock = event.target.closest('.day-block');
            var day = dayBlock.dataset.date;
            if (event.target.value.trim() === '') {
                removingData(day);
            } else {
                var data = event.target.value;
                savingData(day, data);
            }
        }
    });
    */

    //Event listener for saving user input when they click the save button
    container.addEventListener('click', function(event) {
        if (event.target.closest('.saveBtn')) {
            var dayBlock = event.target.closest('.day-block');
            var day = dayBlock.dataset.date;
            var data = dayBlock.querySelector('.description').value;
            savingData(day, data);
        }
    });
});
