function secondsToTime(inputSeconds) {
    const secondsInAMinute = 60;
    const secondsInAnHour = 60 * secondsInAMinute;
    const secondsInADay = 24 * secondsInAnHour;
    const secondsInAweek = secondsInADay * 7;
    const secondsInAmonth = secondsInADay * 31;

    // Extract months
    const months = Math.floor(inputSeconds / secondsInAmonth);
    
    // Extract weeks
    const weeks = Math.floor((inputSeconds/ secondsInAweek) % 4.34524);
    
    // Extract days
    const days = Math.floor((inputSeconds / secondsInADay) % 7);
    
    // Extract hours
    const hourSeconds = inputSeconds % secondsInADay;
    const hours = Math.floor(hourSeconds / secondsInAnHour);

    // Extract minutes
    const minuteSeconds = hourSeconds % secondsInAnHour;
    const minutes = Math.floor(minuteSeconds / secondsInAMinute);

    // Extract the remaining seconds
    const remainingSeconds = minuteSeconds % secondsInAMinute;
    const seconds = Math.ceil(remainingSeconds);

    // Format and return
    const timeParts = [];
    const sections = {
        month: +months,
        week: +weeks,
        day: +days,
        hour: +hours,
        minute: +minutes,
        second: +seconds,
    };
    
    for (const key in sections) {
      const value = sections[key];
      if(value) {
        timeParts.push(`${value} ${key}${value > 1 ? 's' : ''}`);
      }
    }

    return timeParts.join(', ');
}

const testCase = [
  60, //1 minute
  3600, //1 hour
  86400, //1 day
  604800, //1 week
  2628000, //1 month
  10000000, // 3 months... 3weeks....
]

testCase.map(item => console.log(secondsToTime(item)));