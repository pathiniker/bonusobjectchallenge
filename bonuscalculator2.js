function Person (name, id, salary, rating) {
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.rating = rating;
}

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);
// name, emp id, salary, rating



var employees = [atticus, jem, boo, scout];
for (var i = 0; i < employees.length; i++) {
  var report = employeeReport(employees[i]);
    console.log(report);
}

// convert employees to objects (Person)

  function employeeReport(employee) {
    var output = [];
    var employeeName = employee.name;
    var employeeId = employee.id;
    var salary = parseInt(employee.salary);
    var rating = employee.rating;
    var bonus = 0;

  // first index is employee name
  output [0] = employeeName;
  bonus = calcBonus(rating, employeeId, salary);

  // second index calculates bonus

  output [1] = bonus * 100 + '%';

  // third index is adj annual comp salary + bonus
  output [2] = '$' + (salary + (bonus * salary));

  output [3] = '$' + Math.round(bonus * salary);
  return output; }

  function calcBonus(rating, id, salary) {
    var bonus = 0;
    // - Those who have a rating of a 2 or below should not receive a bonus.
    // - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
    // - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
    // - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.

    switch (rating) {
      case 5:
        bonus = 0.1;
        break;
      case 4:
        bonus = 0.06;
        break;
      case 3:
        bonus = 0.04;
        break;
      default:
        bonus = 0;
    }

    // - If they have 4 employee numbers, this means they have been with the company for longer than 15 years,
    // and should receive an additional 5%.

    if (id.length == 4) {
      bonus += 0.05;
    }

    // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.


    if (salary > 65000) {
      bonus -= 0.01;
    }

        // - No bonus can be above 13% total.

        if (bonus > .13) {
          bonus = .13;
        }
        return bonus;
      }
