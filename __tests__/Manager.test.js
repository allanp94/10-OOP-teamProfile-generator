const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const managerObj = new Manager("Allan", 1, "Allan.p94@gmail.com", 112);

  expect(managerObj.name).toBe("Allan");
  expect(managerObj.id).toBe(1);
  expect(managerObj.email).toBe("Allan.p94@gmail.com");
  expect(managerObj.officeNumber).toBe(112);

  expect(managerObj.getRole()).toEqual(managerObj);
});
