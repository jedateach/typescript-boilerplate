import * as mylib from "mylib";

describe("Testing mylib", function() {
    it("has FOO", function() {
        expect(mylib.FOO).toBe("FOO");
    });
    it("Person.fullName", function() {
        const person = new mylib.Person("Jeremy", "Shipman");
        expect(person.fullName).toBe("Jeremy Shipman");
    });
    it("getDate", function() {
        expect(mylib.getDate()).toBeInstanceOf(String);
    });
});