// Create calendar when document is ready
$(document).ready(function () {

    // We will refer to $calendar in future code

    var calendarOptions = { // Start of options
        header: {
            left: 'prevYear,nextYear',
            center: 'title',
            right: 'today,month,agendaDay,agendaWeek prev,next'
        },

    }; // End of options
    var $calendar = $("#calendar").fullCalendar(calendarOptions);
});