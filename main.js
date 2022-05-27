function calculateDays(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);
  var days = (end - start) / (1000 * 60 * 60 * 24);
  return Math.round(days) + " days left !  ⏳";
}

document.querySelector("#days").innerHTML = calculateDays(
  new Date(),
  new Date("2022-12-31") // YYYY-MM-DD
);
