function init () {
  const employeeList = {
  "Employee 1": {
    "name": "Employee 1",
    "designation": "Hospital Director",
    "department": "CEO",
    "lead": ""
  },
  "Employee 2": {
    "name": "Employee 2",
    "designation": "Patient Advocacy Services",
    "department": "CEO",
    "lead": ""
  },
  "Employee 3": {
    "name": "Employee 3",
    "designation": "Assistant Attorney General",
    "department": "CEO",
    "lead": ""
  }, "Employee 4": {
    "name": "Employee 4",
    "designation": "Human Resources",
    "department": "CEO",
    "lead": ""
  }, "Employee 5": {
    "name": "Employee 5",
    "designation": "Special Assistant",
    "department": "CEO",
    "lead": ""
  }, "Employee 6": {
    "name": "Employee 6",
    "designation": "Clinical Services Director",
    "department": "CEO",
    "lead": ""
  }, "Employee 7": {
    "name": "Employee 7",
    "designation": "Chief Of support services",
    "department": "CEO",
    "lead": ""
  }, "Employee 8": {
    "name": "Employee 8",
    "designation": "Deputy Hospital Director",
    "department": "CEO",
    "lead": ""
  },
  "Employee 9": {
    "name": "Employee 9",
    "designation": "Director of nursing",
    "department": "CEO",
    "lead": ""
  },
  "Employee 10": {
    "name": "Employee 10",
    "designation": "Director of nursing",
    "department": "CEO",
    "lead": ""
  }
}
function createContactCards() {
  let contactCardScroller = document.querySelector("#contactCardScroller");
  Object.keys(employeeList).forEach(function (employeeID) {
    let employee = employeeList[employeeID];
    const card = document.createElement('div');
    card.classList = 'card-body';

    const content = `
    <div class="card">
    <img src="images/img.png" style="width:100%">
    <div class="contact-info">
    <p class="contact-name">${employee.name}<p>
    <p class="contact-name" >${employee.department}</p>
    <p><button class="view-profile">View Profile</button></p>
    </div>

  </div>
    `;
    contactCardScroller.innerHTML += content;

  });
}
createContactCards();
}
init();
