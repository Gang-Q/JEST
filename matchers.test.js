test("测试10与10相匹配", () => {
  // toBe 匹配器 matchers
  //object.is ===
  expect(10).toBe(10);
});

test("测试对象内容相等", () => {
  //toEqual 匹配器 matchers
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});

test("测试对象内容为空", () => {
  //toBeNull 匹配器 matchers
  const a = null;
  expect(a).toBeNull();
});

//真假有关的匹配器
test("测试对象内容为undefined", () => {
  //toBeUndefined 匹配器 matchers
  const a = undefined;
  expect(a).toBeUndefined();
});

test("测试对象内容为defined", () => {
  const a = null;
  const b = 0;
  const c = 1;
  expect(a).toBeDefined();
  expect(b).toBeDefined();
  expect(c).toBeDefined();
});

test("测试对象内容为toBeTruthy", () => {
  const a = 1;
  expect(a).toBeTruthy();
});

test("测试对象内容为toBeFalsy", () => {
  const a = null;
  const b = 0;
  expect(a).toBeFalsy();
  expect(b).toBeFalsy();
});

test("测试not匹配器", () => {
  const a = 1;
  expect(a).not.toBeFalsy();
});

//数字相关的匹配器
test("测试toBeGreaterThan匹配器,比某个数值打", () => {
  const count = 10;
  expect(count).toBeGreaterThan(9);
});

test("测试toBeLessThan匹配器,比某个数值小", () => {
  const count = 10;
  expect(count).toBeLessThan(11);
});

test("测试toBeGreaterThanOrEqual匹配器", () => {
  const count = 10;
  expect(count).toBeGreaterThanOrEqual(10);
});

test("测试toBeCloseTo匹配器", () => {
  const firstNumber = 0.1;
  const secondNumber = 0.2;
  expect(firstNumber + secondNumber).toBeCloseTo(0.3);
});

//和string相关的匹配器
test("测试toMatch匹配器,包含某string", () => {
  const str = "https://www.google.com";
  expect(str).toMatch("google");
  expect(str).toMatch(/google/);
});

//和数组ArArray,Set相关的匹配器
test("测试toContain匹配器", () => {
  const arr = ["https", "google", "www", "com"];
  expect(arr).toContain("www");
  const data = new Set(arr);
  expect(data).toContain("google");
});

//和异常情况相关的匹配器
const throwNewErrorFunc = () => {
  throw new Error("This is a new Error!");
};
test("测试toThrow匹配器", () => {
  expect(throwNewErrorFunc).toThrow();
  expect(throwNewErrorFunc).toThrow("This is a new Error!");
});

// https://jestjs.io/docs/en/expect
