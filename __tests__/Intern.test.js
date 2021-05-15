const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const internObj = new Intern("Allan", 1, "Allan.p94@gmail.com", "NDSU");

  expect(internObj.name).toBe("Allan");
  expect(internObj.id).toBe(1);
  expect(internObj.email).toBe("Allan.p94@gmail.com");
  expect(internObj.school).toBe("NDSU");

  expect(internObj.getSchool()).toEqual(expect.stringContaining("NDSU"));

  expect(internObj.getRole()).toEqual(internObj);
});
