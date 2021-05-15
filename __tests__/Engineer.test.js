const Engineer = require("../lib/Engineer");

test("creates a manager object", () => {
  const engineerObj = new Engineer(
    "Allan",
    1,
    "Allan.p94@gmail.com",
    "allanp94"
  );

  expect(engineerObj.name).toBe("Allan");
  expect(engineerObj.id).toBe(1);
  expect(engineerObj.email).toBe("Allan.p94@gmail.com");
  expect(engineerObj.github).toBe("allanp94");

  expect(engineerObj.getGithub()).toEqual(expect.stringContaining("allanp94"));

  expect(engineerObj.getRole()).toEqual(engineerObj);
});
