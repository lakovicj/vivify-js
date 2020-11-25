function writeLog(l) {
    let now = new Date();
    let log = `[${now.toLocaleString("en-US")}] ${l}\n`;
    
    const fs = require('fs');

    fs.appendFile('log.txt', log, err => {
        if (err) {
            throw err;
        }
    })
}

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Doctor extends User {
    constructor(firstName, lastName, spec) {
        super(firstName, lastName);
        this.spec = spec;
        writeLog(` Kreiran doktor "${this.firstName}"`)
    }

    scheduleExam(patient, exam) {
        patient.addExam(exam);
    }
}

class Patient extends User {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.scheduledExams = [];
        writeLog(` Kreiran pacijent "${this.firstName}"`)
    }

    assignDoctor(doc) {
        this.doctor = doc;
        writeLog(` Pacijent "${this.firstName}" bira doktora "${doc.firstName}"`)
    }

    addExam(exam) {
        this.scheduledExams.push(exam);
    }

    doExam(index) {
        if (this.scheduledExams[index] instanceof BloodPressureExam) {
            this.scheduledExams[index].setUpper();
            this.scheduledExams[index].setLower();
            this.scheduledExams[index].setPulse();
        } else {
            this.scheduledExams[index].setValue();
            this.scheduledExams[index].setLastMealTime();
        }
        writeLog(` Pacijent "${this.firstName}" obavlja analizu.`)
        this.scheduledExams[index].printValues();

    }
}

class Exam {
    constructor(date, time) {
        this.date = date;
        this.time = time;
    }
}

class BloodPressureExam extends Exam {
    constructor(date, time) {
        super(date, time);
    }

    setUpper() { this.upper = Math.floor(Math.random() * 220) + 90;  }
    getUpper() { return this.upper; }

    setLower() { this.lower = Math.floor(Math.random() * 120) + 50; }
    getLower() { return this.lower; }

    setPulse() { this.pulse = Math.floor(Math.random() * 120) + 50;  }
    getPulse() { return this.pulse; }

    printValues() {
        console.log("Blood Pressure Analysis",
                    "\nUpper: ", this.getUpper(),
                    "\nLower: ",this.getLower(),
                    "\nPulse: ", this.getPulse());
    }

}

class SugarOrCholesterolExam extends Exam {
    constructor(date, time, type="sugar") {
        super(date, time);
        this.type = type;
    }

    setValue() { 
        if (this.type === "sugar") {
            this.value = Math.floor(Math.random() * 100) + 300;
        } else {
            this.value = Math.floor(Math.random() * 100) + 250;
        }
    }
    getValue() { return this.value; }

    setLastMealTime() { this.lastMealTime = "12.12.2020. 14:30"; }
    getLastMealTime() { return this.lastMealTime; }

    printValues() {
        if (this.type === "sugar") {
            console.log("Blood Sugar Analysis");
        } else {
            console.log("Cholesterol Analysis");
        }
        console.log("Value: ", this.getValue(),
                    "\nTime of last meal: ", this.getLastMealTime());
    }
}

let docMilan = new Doctor("Milan", "Milanovic", "kardio-hirurg");
let pacDragan = new Patient("Dragan", "Draganovic");
pacDragan.assignDoctor(docMilan);

let exam1 = new SugarOrCholesterolExam("20.12.2020.", "07:00");
docMilan.scheduleExam(pacDragan, exam1);

let exam2 = new BloodPressureExam("20.12.2020.", "08:00");
docMilan.scheduleExam(pacDragan, exam2);

pacDragan.doExam(0);
pacDragan.doExam(1);

