import { WageEmployee } from "./WageEmployee";

const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA",
 10000, 100,50);
 console.log(employee.id);
 employee.basicSalary = 60000;