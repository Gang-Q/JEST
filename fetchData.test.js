import { fetchData, fetchDataCallback, fetchDataError } from "./fetchData";

// 回调类型异步函数测试
test("测试异步,返回结果为'success':true", (done) => {
  fetchDataCallback((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});

// promise对应的异步函数
test("测试异步函数fetchData,返回结果为'success':true", () => {
  return fetchData().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});

test("测试异步函数fetchDataError,返回结果为404", () => {
  expect.assertions(1);
  return fetchDataError().catch((e) => {
    // String.indexOf() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    expect(e.toString(e).indexOf("404") > -1).toBe(true);
  });
});

test("测试异步函数fetchData,返回结果为'success':true", () => {
  return expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

test("测试异步函数fetchDataError,返回结果为404", () => {
  return expect(fetchDataError()).rejects.toThrow();
});

test("测试异步函数fetchData,返回结果为'success':true", async () => {
  await expect(fetchData()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

test("测试异步函数fetchDataError,返回结果为404", async () => {
  await expect(fetchDataError()).rejects.toThrow();
});

test("测试异步函数fetchData,返回结果为'status':200", async () => {
  const response = await fetchData();
  await expect(response.status).toEqual(200);
});

test("测试异步函数fetchData,返回结果为'success':true", async () => {
  const response = await fetchData();
  await expect(response.data).toEqual({ success: true });
});

test("测试异步函数fetchDataError,返回结果为404", async () => {
  expect.assertions(1);
  try {
    await fetchDataError();
  } catch (error) {
    // console.log(error.toString());
    const response = error.toString();
    await expect(response).toEqual(
      "Error: Request failed with status code 404"
    );
  }
});
