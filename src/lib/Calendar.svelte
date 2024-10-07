<script>
  // Tạo mảng chứa các mốc thời gian từ 00:00 đến 23:00
  let hours = [];
  for (let hour = 0; hour < 24; hour++) {
    hours.push(hour.toString().padStart(2, "0") + ":00");
  }
</script>
<div>
  <div class="left">
    
  </div>
  2024 DECEMBER
</div>
<div class="calendar">
  <div class="timeline">
    <div class="spacer"></div>
    {#each hours as hour}
      <div class="time-marker">{hour}</div>
    {/each}
  </div>
  <div class="days">
    <div class="day mon">
      <div class="date">
        <p class="date-num">9</p>
        <p class="date-day">Mon</p>
      </div>
      <div class="events">
        <div class="event start-2 end-5 securities">
          <p class="title">YOKOHAMA</p>
          <p class="time">2 PM - 5 PM</p>
        </div>
        <div class="event start-2 end-5 writing">
          <p class="title">YOKOHAMA</p>
          <p class="time">2 PM - 5 PM</p>
        </div>
        <div class="event start-2 end-5 corp-fi">
          <p class="title">YOKOHAMA</p>
          <p class="time">2 PM - 5 PM</p>
        </div>
      </div>
    </div>
    <div class="day tues">
      <div class="date">
        <p class="date-num">12</p>
        <p class="date-day">Tues</p>
      </div>
      <div class="events">
        <div class="event start-10 end-12 corp-fi">
          <p class="title">SAIGON</p>
          <p class="time">10 AM - 12 PM</p>
        </div>
        <div class="event start-1 end-4 ent-law">
          <p class="title">BERLIN</p>
          <p class="time">1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div class="day wed">
      <div class="date">
        <p class="date-num">11</p>
        <p class="date-day">Wed</p>
      </div>
      <div class="events">
        <div class="event start-12 end-5 writing">
          <p class="title">INTERVIEW</p>
          <p class="time">11 AM - 12 PM</p>
        </div>
        <div class="event start-2 end-5 securities">
          <p class="title">YOKOHAMA</p>
          <p class="time">2 PM - 5 PM</p>
        </div>
      </div>
    </div>
    <div class="day thurs">
      <div class="date">
        <p class="date-num">12</p>
        <p class="date-day">Thurs</p>
      </div>
      <div class="events">
        <div class="event start-10 end-12 corp-fi">
          <p class="title">SAIGON</p>
          <p class="time">10 AM - 12 PM</p>
        </div>
        <div class="event start-1 end-4 ent-law">
          <p class="title">BERLIN</p>
          <p class="time">1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div class="day fri">
      <div class="date">
        <p class="date-num">13</p>
        <p class="date-day">Fri</p>
      </div>
      <div class="events">
        <div class="event start-15 end-18 ent-law">
          <p class="title">BERLIN</p>
          <p class="time">1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div class="day sat">
      <div class="date">
        <p class="date-num">14</p>
        <p class="date-day">Sat</p>
      </div>
      <div class="events">
        <div class="event start-15 end-18 ent-law">
          <p class="title">BERLIN</p>
          <p class="time">1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div class="day sun">
      <div class="date">
        <p class="date-num">15</p>
        <p class="date-day">Sun</p>
      </div>
      <div class="events">
        <div class="event start-15 end-18 ent-law">
          <p class="title">BERLIN</p>
          <p class="time">1PM - 4PM</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --numDays: 7;
    --numHours: 24;
    --timeHeight: 60px;
    --calBgColor: #fff1f8;
    --eventBorderColor: #f2d3d8;
    --eventColor1: #ffd6d1;
    --eventColor2: #fafaa3;
    --eventColor3: #e2f8ff;
    --eventColor4: #d1ffe6;
  }

  .calendar {
    display: grid;
    gap: 10px;
    grid-template-columns: auto 1fr;
    margin: 2rem; 
    overflow-y: auto; /* Thêm cuộn dọc */
    height: 600px;
  }

  .timeline {
    display: grid;
    grid-template-rows: repeat(
      var(--numHours),
      var(--timeHeight)
    ); /* 24 giờ trong một ngày */
  }

  .days {
    display: grid;
    grid-column: 2;
    gap: 5px;
    grid-template-columns: repeat(var(--numDays), 1fr);
    max-height: calc(
      var(--numHours) * var(--timeHeight)
    ); /* Giới hạn chiều cao tối đa */

  }

  .day {
    display: grid;
    grid-template-rows: repeat(
      var(--numHours),
      var(--timeHeight)
    );
  }

  .events {
    display: grid;
    grid-template-rows: repeat(var(--numHours), var(--timeHeight));
    border-radius: 5px;
    background: var(--calBgColor);
    height: calc(
      var(--numHours) * var(--timeHeight)
    );
  }

  .start-10 {
    grid-row-start: 2; 
  }

  .start-15 {
    grid-row-start: 15; 
  }

  .end-18 {
    grid-row-end: 18;
  }

  .start-12 {
    grid-row-start: 4;
  }

  .start-1 {
    grid-row-start: 5;
  }

  .start-2 {
    grid-row-start: 6; 
  }

  .end-12 {
    grid-row-end: 4; 
  }

  .end-1 {
    grid-row-end: 5; 
  }

  .end-3 {
    grid-row-end: 7;
  }

  .end-4 {
    grid-row-end: 8; /* Kết thúc tại hàng 8 */
  }

  .end-5 {
    grid-row-end: 9; /* Kết thúc tại hàng 9 */
  }

  .title {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .event {
    border: 1px solid var(--eventBorderColor);
    border-radius: 5px;
    padding: 1px;
    margin: 0 1px;
    background: white;
  }

  .space,
  .date {
    height: 60px;
  }

  body {
    font-family: system-ui, sans-serif;
  }

  .corp-fi {
    background: var(--eventColor1);
  }

  .ent-law {
    background: var(--eventColor2);
  }

  .writing {
    background: var(--eventColor3);
  }

  .securities {
    background: var(--eventColor4);
  }

  .date {
    display: block;
    gap: 1em;
  }

  .date-num {
    font-size: 2rem;
    font-weight: 600;
    display: inline;
  }

  .date-day {
    display: inline;
    font-size: 2rem;
    font-weight: 100;
  }
</style>
