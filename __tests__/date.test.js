import "../src/js/date.js";

describe("Date.prototype.getName", () => {
  let now;
  let testDate;
  beforeEach(() => {
    now = Date.now();
    testDate = new Date(now);
  });

  test("Should return the current day name", () => {
    expect(testDate.getName()).toEqual("wednesday");
  });
});