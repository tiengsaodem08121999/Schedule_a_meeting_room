<script>
  import { onMount } from "svelte";
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import listPlugin from "@fullcalendar/list";
  import { writable } from "svelte/store";

  let calendar;
  let selectedEvent = writable(null); // Lưu sự kiện được chọn
  let eventName = ""; // Dữ liệu từ input 'name'
  let eventTime = ""; // Dữ liệu từ input 'time'

  const rooms = ['Room A', 'Room B', 'Room C']; // Danh sách room
  onMount(() => {
    let calendarEl = document.getElementById("calendar");

    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "timeGridWeek",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth,customAddEventButton",
      },
      customButtons: {
        customAddEventButton: {
          text: 'Add Event',
          click() {
            showModal = true; // Mở modal khi click Add Event
          }
        }
      },
      events: [
        // Thêm một số sự kiện mẫu
        {
          title: "A",
          start: "2024-10-08T15:00:00",
          end: "2024-10-08T17:00:00",
          backgroundColor: "red", // Đặt màu nền cho tiêu đề 'A'
          borderColor: "red", // Đặt màu viền cho tiêu đề 'A'
        },
        {
          title: "B",
          start: "2024-10-08T15:00:00",
          end: "2024-10-08T17:00:00",
        },
        {
          title: "B",
          start: "2024-10-08T15:00:00",
          end: "2024-10-08T17:00:00",
        },
      ], 
      allDaySlot: false,
      eventClick: function (info) {
        // Hiển thị modal với thông tin của sự kiện đã click
        selectedEvent.set({
          title: info.event.title,
          start: info.event.start,
        });
        eventName = info.event.title;
        eventTime = info.event.start.toISOString().slice(0, 16); // ISO format cho input datetime-local

        // Hiển thị modal
        let modal = new bootstrap.Modal(document.getElementById("eventModal"));
        modal.show();
      },
    });

    calendar.render();
  });

  function submitForm() {
    // Xử lý dữ liệu khi form được submit
    console.log("Name:", eventName);
    console.log("Time:", eventTime);

    // Ẩn modal sau khi submit
    let modal = bootstrap.Modal.getInstance(
      document.getElementById("eventModal"),
    );
    modal.hide();
  }
</script>

<div id="calendar"></div>

<!-- Bootstrap Modal -->
<div
  class="modal fade"
  id="eventModal"
  tabindex="-1"
  aria-labelledby="eventModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="eventModalLabel">Edit Event</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="eventName" class="form-label">Name:</label>
            <input
              type="text"
              class="form-control"
              id="eventName"
              bind:value={eventName}
            />
          </div>
          <div class="mb-3">
            <label for="eventTime" class="form-label">Time:</label>
            <input
              type="datetime-local"
              class="form-control"
              id="eventTime"
              bind:value={eventTime}
            />
          </div> 
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Cancel</button
        >
        <button type="button" class="btn btn-primary" on:click={submitForm}
          >Submit</button
        >
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
</style>
