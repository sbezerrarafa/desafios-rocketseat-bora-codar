const prevBtn = document.querySelector('.prev');
const title = document.querySelector('.title');
const nextBtn = document.querySelector('.next');

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: false,
    titleFormat: {
      year: 'numeric',
      month: 'long',
    },

    height: 'auto',
    selectable: true,

    dayMaxEventRows: 2,
    editable: true,
    eventStartEditable: true,
    eventResizableFromStart: true,
  });
  calendar.render();
  calendar.setOption('locale', 'pt-br');
  title.innerHTML = calendar.currentData.viewTitle;


  prevMonth(calendar);
  nextMonth(calendar);


});


function nextMonth(calendar) {
  nextBtn.addEventListener('click', () => {
    calendar.next();
    title.innerHTML = calendar.currentData.viewTitle;
  });
}

function prevMonth(calendar) {
  prevBtn.addEventListener('click', () => {
    calendar.prev();
    title.innerHTML = calendar.currentData.viewTitle;
  });
}


