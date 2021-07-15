const timerRefs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

function timerOne({ days, hours, mins, secs }) {
  timerRefs.days.textContent = days;
  timerRefs.hours.textContent = hours;
  timerRefs.mins.textContent = mins;
  timerRefs.secs.textContent = secs;
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();
  }

  start() {
    setInterval(() => {
      const currentDate = new Date();
      const deltaTime = this.targetDate - currentDate;
      const time = this.getTimeComponents(deltaTime);

      this.selector(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: timerOne,
  targetDate: new Date('Jan 26, 2022'),
});
