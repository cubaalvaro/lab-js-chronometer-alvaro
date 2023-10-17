class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 1000);
  }


  getMinutes() {
    let currentTimeMinutes = Math.floor(this.currentTime / 60);
    return currentTimeMinutes;
  }

  getSeconds() {
    let secondsModulo = this.currentTime % 60;
    return secondsModulo;
  }

  computeTwoDigitNumber(value) {
    const valueStr = value.toString();
    if(valueStr.length < 2) {
      return "0" + valueStr;
    } else {
      return valueStr;
    }
  }

  stop() {
    clearInterval (this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutesStr = this.computeTwoDigitNumber(this.getMinutes());
    let secondsStr = this.computeTwoDigitNumber(this.getSeconds());
    let timeFormatted = minutesStr + ":" + secondsStr;
    return timeFormatted;
  }
}


