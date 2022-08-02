const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", () => {
            // Arrange
            const employee = new Employee();
            // Act

            // Assert
            expect(typeof employee).toBe("object");
        });

        it("should set name via constrcutor arguments", () => {
            // arrange
            const name = "Ian";
            // act
            const employee = new Employee(name);
            // assert
            expect(employee.name).toBe(name);
        });

        it("should set id via constrcutor arguments", () => {
            // arrange
            const id = 100;
            // act
            const employee = new Employee("Ian", id);
            // assert
            expect(employee.id).toBe(id);
        });

        it("should set email via constrcutor arguments", () => {
            // arrange
            const email = "test@test.com";
            // act
            const employee = new Employee("Ian", 100, email);
            // assert
            expect(employee.email).toBe(email);
        });
    });

    describe("Getter methods", () => {
        it("should get name via getName()", () => {
            // arrange
            const name = "Ian";
            // act
            const employee = new Employee(name, 100, "test@test.com");
            const employeeName = employee.getName();
            // assert
            expect(employeeName).toBe(name);
        });

        it("should get id via getId())", () => {
            // arrange
            const id = 100;
            // act
            const employee = new Employee("Ian", id, "test@test.com");
            const employeeId = employee.getId();
            // assert
            expect(employeeId).toBe(id);
        });

        it("should get email via getEmail()", () => {
            // arrange
            const email = "test@test.com";
            // act
            const employee = new Employee("Ian", 100, email);
            const employeeEmail = employee.getEmail();
            // assert
            expect(employeeEmail).toBe(email);
        });

        it("should get role via getRole()", () => {
            // arrange
            const role = "Employee";
            // act
            const employee = new Employee("Ian", 100, "test@test.com");
            const employeeRole = employee.getRole();
            // assert
            expect(employeeRole).toBe(role);
        });
    });
});