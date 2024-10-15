<script>
  import { onMount } from "svelte";
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import listPlugin from "@fullcalendar/list";
  import EventModal from "./component/EventModal.svelte";
  import CalendarLeft from "./component/Calendar.svelte";

  let calendar;
  let eventName = "";
  let eventRoom = "";
  let startDate = "";
  let startTime = "";
  let endDate = "";
  let endTime = "";
  let isEdit = false;
  let showModal = false;

  onMount(() => {
    let calendarEl = document.getElementById("calendar");

    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "timeGridWeek", // Hiển thị chế độ xem tuần ban đầu
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right:
          "dayGridMonth,timeGridWeek,timeGridDay,listMonth customAddEventButton",
      },
      customButtons: {
        customAddEventButton: {
          text: "Add Event",
          click() {
            isEdit = false;
            eventName = "";
            eventRoom = "";
            startDate = "";
            startTime = "";
            endDate = "";
            endTime = "";
            showModal = true;
          },
        },
      },
      events: [
        {
          title: "A",
          start: "2024-10-15T15:00:00",
          end: "2024-10-15T17:00:00",
          backgroundColor: "red",
          borderColor: "red",
        },
        {
          title: "B",
          start: "2024-10-15T15:00:00",
          end: "2024-10-15T17:00:00",
        },
      ],
      allDaySlot: false,
      slotLabelFormat: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      },
      eventClick: function (info) {
        isEdit = true;
        eventName = info.event.title;
        const start = info.event.start.toISOString();
        const end = info.event.end.toISOString();
        startDate = start.slice(0, 10);
        startTime = start.slice(11, 16);
        endDate = end.slice(0, 10);
        endTime = end.slice(11, 16);
        showModal = true;
      },
    });

    calendar.render();
  });

  function handleSubmit(eventData) {
    if (isEdit) {
      console.log("Editing event", eventData);
    } else {
      calendar.addEvent({
        title: eventData.title,
        start: eventData.start,
        end: eventData.end,
        extendedProps: { room: eventData.room },
      });
    }
    showModal = false;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<div class="container-fluid">
  <div class="row">
    <!-- Sidebar -->
    <div class="col-1">
      <nav
        id="sidebarMenu"
        class="collapse d-lg-block sidebar collapse bg-white"
      >
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              ><i class="fas fa-calendar fa-fw me-3"></i>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fa-regular fa-bell"></i>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-search"></i>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fa-regular fa-calendar"></i>
            </a>
          </div>
        </div>
      </nav>
      <!-- Sidebar -->
    </div>
    <div class="col-9">
      <div id="calendar"></div>
    </div>
    <div class="col-2">
      <CalendarLeft />
      <hr />
      <div class="d-block">
        OTHERS
        <div>
          <input type="checkbox" class="rom_a" /> Rom A
        </div>
        <div>
          <input type="checkbox" class="rom_b" /> Rom B
        </div>
        <div>
          <input type="checkbox" class="rom_c" /> Rom C
        </div>
      </div>
    </div>
  </div>
</div>

<EventModal
  bind:title={eventName}
  bind:room={eventRoom}
  bind:startDate
  bind:startTime
  bind:endDate
  bind:endTime
  {isEdit}
  bind:showModal
  on:submit={handleSubmit}
  on:close={closeModal}
/>

<style>
  html,
  body {
    margin: 10px 10px;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  #calendar {
    max-height: 700px;
    width: 100%;
  }

  .modal.show {
    display: block !important;
  }
  .rom_a{
    accent-color: rgb(77, 128, 0);
  }
  .rom_b{
    accent-color: rgb(255, 234, 0);
  }
  .rom_c{
    accent-color: rgb(255, 25, 0);
  }
</style>
