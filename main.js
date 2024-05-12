const calendarGrid = document.getElementById("calendar-grid");
const monthsArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const currentDate = new Date();

for (let year = 2020; year <= 2030; year++) {
  const yearHeader = document.createElement("div");
  yearHeader.textContent = year;
  yearHeader.classList.add("year");
  calendarGrid.appendChild(yearHeader);

  for (let month = 0; month < 12; month++) {
    const monthHeader = document.createElement("div");
    monthHeader.textContent = monthsArray[month];
    monthHeader.classList.add("month");
    calendarGrid.appendChild(monthHeader);

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= 31; day++) {
      const dayBox = document.createElement("div");

      if (day > daysInMonth) {
        dayBox.classList.add("day", "empty");
      } else if (
        year < currentDate.getFullYear() ||
        (year === currentDate.getFullYear() &&
          month < currentDate.getMonth()) ||
        (year === currentDate.getFullYear() &&
          month === currentDate.getMonth() &&
          day < currentDate.getDate())
      ) {
        dayBox.classList.add("day", "past");
      } else if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate()
      ) {
        dayBox.classList.add("day", "current");
      } else {
        dayBox.classList.add("day", "future");
      }

      dayBox.textContent = day <= daysInMonth ? day : "";
      calendarGrid.appendChild(dayBox);
    }
  }
}

const startYear = 2020;
const endYear = 2030;
const totalYears = endYear - startYear + 1;
const yearsElapsed = currentDate.getFullYear() - startYear;
const progress = (yearsElapsed / totalYears) * 100;

const progressBar = document.getElementById("progress-bar");
progressBar.style.width = `${progress}%`;
