// Add to stats total salary and average salary
const firm = new Company();

addPerson.onclick = function () {
    if (isAllInputsFilled()) {
        const emp = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), birthDate.value, salary.value.trim());
        if (firm.addEmployee(emp)) {
            clearStats();
            const li = emp.createNode();
            const buttonDel = createButtonDel(() => {
                clearStats();
                firm.removeEmployee(emp.id);
            });
            li.appendChild(buttonDel);
            personsList.append(li);
        } else {
            alert(`Person with id = ${emp.id} exists`);
        }
        clearAllInputs();
    }
};

calcStats.onclick = function () {
    clearStats();
    const divStats = document.createElement('div');

    if (firm.size) {
        divStats.append(...firm.statisticsNode);
    } else {
        const h3Error = createInfoElement('No data for processing', 'h3');
        divStats.append(h3Error);
    }

    stats.appendChild(divStats);
};

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.firstElementChild.nextElementSibling.remove();
    }
}

function clearAllInputs() {
    personId.value = firstName.value = lastName.value = birthDate.value = salary.value = '';
}