/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(employeeArr) {
  let employeeRecord = {
    firstName: employeeArr[0],
    familyName: employeeArr[1],
    title: employeeArr[2],
    payPerHour: employeeArr[3],
    timeInEvents: [],
    timeOutEvents: [],
    allWagesFor: function() {
      const datesWorked = this.timeInEvents.map(event => event.date);
      const wagesEarned = datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
      return wagesEarned;
    }
  };
  return employeeRecord;
}


function createEmployeeRecords(employeesArr) {
  let employeeRecords = employeesArr.map(createEmployeeRecord);
  return employeeRecords;
}

function createTimeInEvent(dateTimeString) {
  const [date, hour] = dateTimeString.split(' ');
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}
let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
let updatedBpRecord = createTimeInEvent.call(bpRecord, "2014-02-28 1400")
let newEvent = updatedBpRecord.timeInEvents[0]
createTimeInEvent.call(bpRecord, "2023-04-30 0900")
console.log(bpRecord.timeInEvents);

  function createTimeOutEvent(dateTimeString) {
  const [date, hour] = dateTimeString.split(' ');
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}
  
function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return hoursWorked;
}

//let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
createTimeInEvent.call(cRecord, "2044-03-15 0900");
createTimeOutEvent.call(cRecord, "2044-03-15 1100");

const hoursWorked = hoursWorkedOnDate.call(cRecord, "2044-03-15");

console.log(hoursWorked);

  
function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const wagesEarned = hoursWorked * this.payPerHour;
  return wagesEarned;
}

//let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);
createTimeInEvent.call(cRecord, "2044-03-15 0900");
createTimeOutEvent.call(cRecord, "2044-03-15 1100");

const wagesEarned = wagesEarnedOnDate.call(cRecord, "2044-03-15");

console.log(wagesEarned);

function allWagesFor() {
  const datesWorked = this.timeInEvents.map(event => event.date);
  const wagesEarned = datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
  return wagesEarned;
}
// const allWagesFor = function () {
//   const eligibleDates = this.timeInEvents.map(function (e) {
//       return e.date
//   })

//   const payable = eligibleDates.reduce(function (memo, d) {
//       return memo + wagesEarnedOnDate.call(this, d)
//   }.bind(this), 0) 

//   return payable
// }
const cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);
createTimeInEvent.call(cRecord, "2044-03-14 0900");
createTimeOutEvent.call(cRecord, "2044-03-14 2100");
createTimeInEvent.call(cRecord, "2044-03-15 0900");
createTimeOutEvent.call(cRecord, "2044-03-15 1100");

const allWages = allWagesFor.call(cRecord);

console.log(allWages);
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName === firstName);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((acc, employee) => acc + employee.allWagesFor(), 0);
  }
  
  
 
  const thor = createEmployeeRecord(["Thor", "Odinsson", "Electrical Engineer", 27]);
  const loki = createEmployeeRecord(["Loki", "Laufeysson-Odinsson", "HR Representative", 35]);
  
  createTimeInEvent(thor, "2018-01-01 0900");
  createTimeOutEvent(thor, "2018-01-01 1700");
  assertDeepEqual(thor.timeInEvents[0], { type: "TimeIn", hour: 900, date: "2018-01-01" }, "1) creates the correct type");
  assertEqual(thor.timeInEvents[0].date, "2018-01-01", "2) extracts the correct date");
  assertEqual(thor.timeInEvents[0].hour, 900, "3) extracts the correct hour");
  
  createTimeInEvent(loki, "2018-01-01 1000");
  createTimeOutEvent(loki, "2018-01-01 1800");
  assertDeepEqual(loki.timeOutEvents[0], { type: "TimeOut", hour: 1800, date: "2018-01-01" }, "4) creates the correct type");
  assertEqual(loki.timeOutEvents[0].date, "2018-01-01", "5) extracts the correct date");
  assertEqual(loki.timeOutEvents[0].hour, 1800, "6) extracts the correct hour");
  
  assertEqual(hoursWorkedOnDate(thor, "2018-01-01"), 8, "7) calculates that the employee worked 8 hours");
  assertEqual(wagesEarnedOnDate(thor, "2018-01-01"), 216, "8) calculates that the employee earned 216 dollars");
  
  createTimeInEvent(thor, "2018-01-02 0900");
  createTimeOutEvent(thor, "2018-01-02 1700");
  assertEqual(allWagesFor.call(thor), 432, "10) calculates that the employee earned 432 dollars");
  
  const employees = [thor, loki];
  assertEqual(calculatePayroll(employees), 742, "12) calculates that the employees earned 742 dollars");
  
  const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ];
  
  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-01 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ];
  
  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-01 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ];
  
  const employeeRecords = createEmployeeRecords(csvDataEmployees);
  employeeRecords.forEach((employee, index) => {
    csvTimesIn[index][1].forEach(timeIn => createTimeInEvent(employee, timeIn));
    csvTimesOut[index][1].forEach(timeOut => createTimeOutEvent(employee, timeOut));
  });
  
  assertEqual(calculatePayroll(employeeRecords), 12480)
  




