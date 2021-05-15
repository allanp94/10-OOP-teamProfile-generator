const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employeeObj = new Employee("Allan", 1, "Allan.p94@gmail.com");

  expect(employeeObj.name).toBe("Allan");
  expect(employeeObj.id).toBe(1);
  expect(employeeObj.email).toBe("Allan.p94@gmail.com");

  expect(employeeObj.getName()).toEqual(expect.stringContaining("Allan"));

  expect(employeeObj.getId()).toEqual(1);

  expect(employeeObj.getEmail()).toEqual(
    expect.stringContaining("Allan.p94@gmail.com")
  );

  expect(employeeObj.getRole()).toEqual(employeeObj);
});
