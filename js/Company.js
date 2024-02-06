class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(emloyee) {
        const index = this._employees.findIndex(({ id }) => id === emloyee.id);
        if (index < 0) {
            this._employees.push(emloyee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get maxSalary(){
        return this.size ? this._employees.reduce((max, emp) => max > emp.salary ? max : emp.salary, this._employees[0].salary) : 0;
    }

    get minSalary(){
        return this.size ? this._employees.reduce((min, emp) => min < emp.salary ? min : emp.salary, this._employees[0].salary) : 0;
    }

    get averageSalary(){
        return this.size ? this._employees.reduce((accum, emp) => accum + emp.salary, 0) / this.size : 0;
    }

    get maxAge(){
        return this.size ? this._employees.reduce((max, emp) => max > emp.age ? max : emp.age, this._employees[0].age) : 0;
    }

    get minAge(){
        return this.size ? this._employees.reduce((min, emp) => min < emp.age ? min : emp.age, this._employees[0].age) : 0;
    }
    get averageAge(){
        return this.size ? this._employees.reduce((accum, emp) => accum + emp.age, 0) / this.size : 0;
    }

    get size(){
        return this._employees.length;
    }

    get statisticsNode(){
        if (this.size){
            let age = this.averageAge;
            const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
            age = this.minAge;
            const h3min = createInfoElement(`Min age: ${age}`, 'h3');
            age = this.maxAge;
            const h3max = createInfoElement(`Max age: ${age}`, 'h3');
            let salary = this.averageSalary;
            const salaryAvg = createInfoElement(`Average salary: ${salary.toFixed(1)}`, 'h3');
            salary = this.minSalary;
            const salaryMax = createInfoElement(`Min salary: ${salary.toFixed(1)}`, 'h3');
            salary = this.maxSalary;
            const salaryMin = createInfoElement(`Max salary: ${salary.toFixed(1)}`, 'h3');
            
            return [h3avg, h3min, h3max, salaryAvg, salaryMin, salaryMax];
        }
        
        return null;
        
    }
}