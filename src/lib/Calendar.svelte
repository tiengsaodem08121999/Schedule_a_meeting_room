
<script>
  document.addEventListener('DOMContentLoaded', function() {
var calendarEl = document.getElementById('calendar');

var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
  height: 'parent',
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  },
  defaultView: 'dayGridMonth',
  defaultDate: '2024-02-12',
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  eventLimit: true, // allow "more" link when too many events
  events: [
    {
      title: 'All Day Event',
      start: '2024-02-01',
    },
    {
      groupId: 999,
      title: 'Repeating Event',
      start: '2024-02-09T16:00:00'
    },
    {
      groupId: 999,
      title: 'Repeating Event',
      start: '2024-02-16T16:00:00'
    },
    {
      title: 'Meeting',
      start: '2024-02-12T10:30:00',
      end: '2024-02-12T12:30:00'
    },
    {
      title: 'Lunch',
      start: '2024-02-12T12:00:00'
    },
    {
      title: 'Meeting',
      start: '2024-02-12T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2024-02-12T17:30:00'
    },
    {
      title: 'Dinner',
      start: '2024-02-12T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: '2024-02-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2024-02-28'
    }
  ]
});

calendar.render();
});

</script>

<div id='calendar-container'>
  <div id='calendar'></div>
</div>