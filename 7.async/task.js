class AlarmClock {
    constructor () {
        this.alarmCollection = [],
        this.timerId = null
    }

    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('error text');
        }
        else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
            return console.error('Такой звонок уже существует.');
        }
        return this.alarmCollection.push({id, time, callback});
    }
    removeClock (id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }
    getCurrentFormattedTime () {
		return new Date().toTimeString().slice(0, 5);
    }
    start () {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {this.alarmCollection.forEach(clock => checkClock(clock));}, 1000);
        }
        return;
    }
    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }
    printAlarms () {
        return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
    }
    clearAlarms () {
        this.stop();
        return this.alarmCollection = [];
    }
}


// let PhoneClock = new AlarmClock();
// PhoneClock.addClock('09:00', () => console.log ('Подъем!'), 1);
// PhoneClock.addClock('09:30', () => console.log ('Опять подъем!'), 2);
// PhoneClock.removeClock(2);
// PhoneClock.addClock('22:00', () => console.log ('Отбой!'), 3);
// PhoneClock.start();
// PhoneClock.stop();
// PhoneClock.printAlarms();