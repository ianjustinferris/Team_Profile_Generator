const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set office Number via constrcutor arguments", () => {
            // arrange
            const officeNumber = 100;
            // act
            const manager = new Manager("Ian", 1, "test@test.com", officeNumber);
            // assert
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe("Getter methods", () => {
        it("should get office number via getOffice()", () => {
            // arrange
            const officeNumber = 100;
            // act
            const manager = new Manager("Ian", 1, "test@test.com", officeNumber);
            const managerOfficeNumber = manager.getOffice();
            // assert
            expect(managerOfficeNumber).toBe(officeNumber);
        });

        it("should get role via getRole()", () => {
            // arrange
            const role = "Manager";
            // act
            const manager = new Manager("Ian", 100, "test@test.com", 100);
            const managerRole = manager.getRole();
            // assert
            expect(managerRole).toBe(role);
        });
    });
});