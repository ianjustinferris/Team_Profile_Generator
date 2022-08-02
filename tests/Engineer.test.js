const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set github via constrcutor arguments", () => {
            // arrange
            const github = "ianjustinferris";
            // act
            const engineer = new Engineer("Ian", 1, "test@test.com", github);
            // assert
            expect(engineer.github).toBe(github);
        });
    });

    describe("Getter methods", () => {
        it("should get github via getGithub()", () => {
            // arrange
            const github = "ianjustinferris";
            // act
            const engineer = new Engineer("Ian", 1, "test@test.com", github);
            const engineerGithub = engineer.getGithub();
            // assert
            expect(engineerGithub).toBe(github);
        });

        it("should get role via getRole()", () => {
            // arrange
            const role = "Engineer";
            // act
            const engineer = new Engineer(
                "Ian",
                100,
                "test@test.com",
                "ianjustinferris"
            );
            const engineerRole = engineer.getRole();
            // assert
            expect(engineerRole).toBe(role);
        });
    });
});