(() => {
  const hourHand = document.querySelector('.hour');
  const minuteHand = document.querySelector('.minute');
  const secondHand = document.querySelector('.second');

  const setClock = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegree = ((hours / 12) * 360) + (360 / 12 * (((minutes / 60) * 360) / 360));
    const minuteDegree = ((minutes / 60) * 360);
    const secondDegree = ((seconds / 60) * 360);

    if (hourDegree === 0) {
      hourHand.style.transition = 'all 0s';
    } else {
      hourHand.style.transition = 'all 0.2s linear';
    }

    if (minuteDegree === 0) {
      minuteHand.style.transition = 'all 0s';
    } else {
      minuteHand.style.transition = 'all 0.2s linear';
    }

    if (secondDegree === 0) {
      secondHand.style.transition = 'all 0s';
    } else {
      secondHand.style.transition = 'all 0.2s cubic-bezier(0, 2, 1, 0.6)';
    }

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    window.requestAnimationFrame(setClock);
  };

  window.requestAnimationFrame(setClock);

  const hour1box = document.querySelector('.hour-1 .box');
  const hour1 = hour1box.querySelectorAll('div');
  const hour2box = document.querySelector('.hour-2 .box');
  const hour2 = hour2box.querySelectorAll('div');
  const minute1box = document.querySelector('.minute-1 .box');
  const minute1 = minute1box.querySelectorAll('div');
  const minute2box = document.querySelector('.minute-2 .box');
  const minute2 = minute2box.querySelectorAll('div');
  const second1box = document.querySelector('.second-1 .box');
  const second1 = second1box.querySelectorAll('div');
  const second2box = document.querySelector('.second-2 .box');
  const second2 = second2box.querySelectorAll('div');

  let firstDigital = true;

  let hours1old;
  let hours1deg = 0;
  let h1 = 1;
  let hours2old;
  let hours2deg = 0;
  let h2 = 1;
  let minutes1old;
  let minutes1deg = 0;
  let m1 = 1;
  let minutes2old;
  let minutes2deg = 0;
  let m2 = 1;
  let seconds1old;
  let seconds1deg = 0;
  let s1 = 1;
  let seconds2old;
  let seconds2deg = 0;
  let s2 = 1;

  hour1box.style.transform = `rotateX(${hours1deg}deg)`;
  hour2box.style.transform = `rotateX(${hours2deg}deg)`;
  minute1box.style.transform = `rotateX(${minutes1deg}deg)`;
  minute2box.style.transform = `rotateX(${minutes2deg}deg)`;
  second1box.style.transform = `rotateX(${seconds1deg}deg)`;
  second2box.style.transform = `rotateX(${seconds2deg}deg)`;

  const setDigital = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hours1 = Math.floor(hours / 10);
    const hours2 = hours % 10;
    const minutes1 = Math.floor(minutes / 10);
    const minutes2 = minutes % 10;
    const seconds1 = Math.floor(seconds / 10);
    const seconds2 = seconds % 10;

    if (firstDigital) {
      firstDigital = false;
      hours1old = hours1;
      hours2old = hours2;
      minutes1old = minutes1;
      minutes2old = minutes2;
      seconds1old = seconds1;
      seconds2old = seconds2;

      hour1[0].innerHTML = hours1;
      hour2[0].innerHTML = hours2;
      minute1[0].innerHTML = minutes1;
      minute2[0].innerHTML = minutes2;
      second1[0].innerHTML = seconds1;
      second2[0].innerHTML = seconds2;
    } else {
      if (hours1old !== hours1) {
        hours1deg -= 90;
        hour1box.style.transform = `rotateX(${hours1deg}deg)`;
        hours1old = hours1;
        if (h1 > 3) {
          h1 = 0;
        }
        hour1[h1].innerHTML = (hours1) % 10;
        h1 += 1;
      }

      if (hours2old !== hours2) {
        hours2deg -= 90;
        hour2box.style.transform = `rotateX(${hours2deg}deg)`;
        hours2old = hours2;
        if (h2 > 3) {
          h2 = 0;
        }
        hour2[h2].innerHTML = (hours2) % 10;
        h2 += 1;
      }

      if (minutes1old !== minutes1) {
        minutes1deg -= 90;
        minute1box.style.transform = `rotateX(${minutes1deg}deg)`;
        minutes1old = minutes1;
        if (m1 > 3) {
          m1 = 0;
        }
        minute1[m1].innerHTML = (minutes1) % 10;
        m1 += 1;
      }

      if (minutes2old !== minutes2) {
        minutes2deg -= 90;
        minute2box.style.transform = `rotateX(${minutes2deg}deg)`;
        minutes2old = minutes2;
        if (m2 > 3) {
          m2 = 0;
        }
        minute2[m2].innerHTML = (minutes2) % 10;
        m2 += 1;
      }

      if (seconds1old !== seconds1) {
        seconds1deg -= 90;
        second1box.style.transform = `rotateX(${seconds1deg}deg)`;
        seconds1old = seconds1;
        if (s1 > 3) {
          s1 = 0;
        }
        second1[s1].innerHTML = (seconds1) % 10;
        s1 += 1;
      }

      if (seconds2old !== seconds2) {
        seconds2deg -= 90;
        second2box.style.transform = `rotateX(${seconds2deg}deg)`;
        seconds2old = seconds2;
        if (s2 > 3) {
          s2 = 0;
        }
        second2[s2].innerHTML = (seconds2) % 10;
        s2 += 1;
      }
    }

    window.requestAnimationFrame(setDigital);
  };

  window.requestAnimationFrame(setDigital);

  const day1box = document.querySelector('.day-1 .box');
  const day1 = day1box.querySelectorAll('div');
  const day2box = document.querySelector('.day-2 .box');
  const day2 = day2box.querySelectorAll('div');
  const month1box = document.querySelector('.month-1 .box');
  const month1 = month1box.querySelectorAll('div');
  const month2box = document.querySelector('.month-2 .box');
  const month2 = month2box.querySelectorAll('div');
  const year1box = document.querySelector('.year-1 .box');
  const year1 = year1box.querySelectorAll('div');
  const year2box = document.querySelector('.year-2 .box');
  const year2 = year2box.querySelectorAll('div');
  const year3box = document.querySelector('.year-3 .box');
  const year3 = year3box.querySelectorAll('div');
  const year4box = document.querySelector('.year-4 .box');
  const year4 = year4box.querySelectorAll('div');

  const days1deg = 0;
  const days2deg = 0;
  const months1deg = 0;
  const months2deg = 0;
  const years1deg = 0;
  const years2deg = 0;
  const years3deg = 0;
  const years4deg = 0;

  day1box.style.transform = `rotateX(${days1deg}deg)`;
  day2box.style.transform = `rotateX(${days2deg}deg)`;
  month1box.style.transform = `rotateX(${months1deg}deg)`;
  month2box.style.transform = `rotateX(${months2deg}deg)`;
  year1box.style.transform = `rotateX(${years1deg}deg)`;
  year2box.style.transform = `rotateX(${years2deg}deg)`;
  year3box.style.transform = `rotateX(${years3deg}deg)`;
  year4box.style.transform = `rotateX(${years4deg}deg)`;

  const setDate = () => {
    const now = new Date();

    const years = now.getFullYear();
    const months = now.getMonth() + 1;
    const days = now.getDate();

    const days1 = Math.floor(days / 10);
    const days2 = days % 10;
    const months1 = Math.floor(months / 10);
    const months2 = months % 10;
    const years1 = Math.floor(years / 1000);
    const years2 = Math.floor(years / 100) % 10;
    const years3 = Math.floor(years / 10) % 100;
    const years4 = years % 10;

    day1.forEach((side) => {
      const element = side;
      element.innerHTML = days1;
    });
    day2.forEach((side) => {
      const element = side;
      element.innerHTML = days2;
    });
    month1.forEach((side) => {
      const element = side;
      element.innerHTML = months1;
    });
    month2.forEach((side) => {
      const element = side;
      element.innerHTML = months2;
    });
    year1.forEach((side) => {
      const element = side;
      element.innerHTML = years1;
    });
    year2.forEach((side) => {
      const element = side;
      element.innerHTML = years2;
    });
    year3.forEach((side) => {
      const element = side;
      element.innerHTML = years3;
    });
    year4.forEach((side) => {
      const element = side;
      element.innerHTML = years4;
    });

    window.requestAnimationFrame(setDate);
  };

  window.requestAnimationFrame(setDate);
})();
