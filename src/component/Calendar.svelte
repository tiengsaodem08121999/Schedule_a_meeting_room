<script>
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
  
    // Hàm để lấy tháng hiện tại và ngày hiện tại
    const getCurrentMonth = () => new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
  
    // Hàm để tạo bảng lịch cho tháng và năm hiện tại
    const generateCalendar = (month, year) => {
      const firstDay = new Date(year, month).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      let rows = [];
      let date = 1;
  
      // Tạo bảng lịch (6 hàng)
      for (let i = 0; i < 6; i++) {
        let row = [];
  
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            row.push({ muted: true, day: null });
          } else if (date > daysInMonth) {
            break;
          } else {
            row.push({ muted: false, day: date, isToday: date === today.getDate() && month === today.getMonth() && year === today.getFullYear() });
            date++;
          }
        }
        rows.push(row);
      }
      return rows;
    };
  
    // State cho calendar rows
    let calendarRows = generateCalendar(currentMonth, currentYear);
  
    // Xử lý nút previous month
    const prevMonth = () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      calendarRows = generateCalendar(currentMonth, currentYear);
    };
  
    // Xử lý nút next month
    const nextMonth = () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      calendarRows = generateCalendar(currentMonth, currentYear);
    };
  </script>
  
  <div class="calendar">
    <table>
      <thead>
        <tr>
          <th colspan="7">
            <span class="btn-group">
            <span class="btn active">{getCurrentMonth()}</span>
              <button on:click={prevMonth} class="btn"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
              <button on:click={nextMonth} class="btn"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </span>
          </th>
        </tr>
        <tr>
          <th>Su</th>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
        </tr>
      </thead>
      <tbody>
        {#each calendarRows as row}
          <tr>
            {#each row as cell}
              <td class={cell.isToday ? 'btn-primary' : cell.muted ? 'muted' : ''}>
                {cell.day || ''}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <style>
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
  
    .muted {
      color: #d3d3d3;
    }
  
    .btn-group {
      display: flex;
      justify-content: space-between;
    }
  
    .btn {
      padding: 5px;
      border: 1px solid #ccc;
      cursor: pointer;
    }
  
    .table-condensed {
      width: 100%;
      text-align: center;
    }
  
    th, td {
      padding: 3px 6px;
    }
  </style>
  