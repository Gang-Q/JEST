import { add, minus, multi } from "./math";

test("测试加法3+7", () => {
  expect(add(3, 7)).toBe(10);
});

test("测试剑法7-3", () => {
  expect(minus(7, 3)).toBe(4);
});

test("测试乘法3*7", () => {
  expect(multi(3, 7)).toBe(21);
});

// 单元测试,集成测试
// 模块测试,多个模块测试
