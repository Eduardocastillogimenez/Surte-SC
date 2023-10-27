export function minutesToHours(minutes) {
  // Calculate hours and the remaining minutes
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;

  // Return the time in the format "hours:minutes"
  return hours + "h " + remainingMinutes + "m";
}
