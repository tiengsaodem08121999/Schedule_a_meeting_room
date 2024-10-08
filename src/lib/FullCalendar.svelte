<script>
  import { onMount } from "svelte";
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import listPlugin from "@fullcalendar/list";
  import { writable } from "svelte/store";

  let calendar;
  let selectedEvent = writable(null);
  let eventName = "";
  let eventRoom = "";
  let eventTime = "";
  const rooms = ['Room A', 'Room B', 'Room C'];

  onMount(() => {
    let calendarEl = document.getElementById("calendar");

    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "timeGridWeek",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth customAddEventButton",
      },
      customButtons: {
        customAddEventButton: {
          text: 'Add Event',
          click() {
            eventName = ""; // Reset input values
            eventRoom = "";
            eventTime = "";
            let addModal = new bootstrap.Modal(document.getElementById("addEventModal"));
            addModal.show(); // Show the modal when clicked
          }
        }
      },
      events: [
        {
          title: "A",
          start: "2024-10-08T15:00:00",
          end: "2024-10-08T17:00:00",
          backgroundColor: "red",
          borderColor: "red",
        },
        {
          title: "B",
          start: "2024-10-08T15:00:00",
          end: "2024-10-08T17:00:00",
        },
      ],
      allDaySlot: false,
      eventClick: function (info) {
        selectedEvent.set({
          title: info.event.title,
          start: info.event.start,
        });
        eventName = info.event.title;
        eventTime = info.event.start.toISOString().slice(0, 16);

        let modal = new bootstrap.Modal(document.getElementById("eventModal"));
        modal.show();
      },
    });

    calendar.render();
  });

  function submitForm() {
    console.log("Name:", eventName);
    console.log("Room:", eventRoom);
    console.log("Time:", eventTime);

    // Hide modal after submit
    let modal = bootstrap.Modal.getInstance(document.getElementById("addEventModal"));
    modal.hide();

    // Optionally, you can add the new event to the calendar
    calendar.addEvent({
      title: eventName,
      start: eventTime,
      extendedProps: { room: eventRoom }
    });
  }
</script>

<div id="calendar"></div>

<!-- Add Event Modal -->
<div class="modal fade" id="addEventModal" tabindex="-1" aria-labelledby="addEventModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addEventModalLabel">Add Event</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="eventName" class="form-label">Title:</label>
            <input type="text" class="form-control" id="eventName" bind:value={eventName} />
          </div>
          <div class="mb-3">
            <label for="eventRoom" class="form-label">Room:</label>
            <select class="form-select" id="eventRoom" bind:value={eventRoom}>
              <option value="" disabled selected>Select a room</option>
              {#each rooms as room}
                <option value={room}>{room}</option>
              {/each}
            </select>
          </div>
          <div class="mb-3">
            <label for="eventTime" class="form-label">Time:</label>
            <input type="datetime-local" class="form-control" id="eventTime" bind:value={eventTime} />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" on:click={submitForm}>Submit</button>
      </div>
    </div>
  </div>
</div>

<!-- Existing Event Modal -->
<div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="eventModalLabel">Edit Event</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="eventName" class="form-label">Name:</label>
            <input type="text" class="form-control" id="eventName" bind:value={eventName} />
          </div>
          <div class="mb-3">
            <label for="eventTime" class="form-label">Time:</label>
            <input type="datetime-local" class="form-control" id="eventTime" bind:value={eventTime} />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" on:click={submitForm}>Submit</button>
      </div>
    </div>
  </div>
</div>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  #calendar {
    height: 750px;
    width: 1000px;
  }
  .fc-button-group > .fc-customAddEventButton-button {
    margin-right: 3px ; 
  }
</style>
