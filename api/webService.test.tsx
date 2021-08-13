import axios from "axios";

jest.mock("axios");

describe("Get Initial Data from mock JSON API", () => {
  test("Making Sure the API returns the status code successfully", async () => {
    const request = { status: 200 };
    axios.get = jest.fn().mockResolvedValueOnce(request);
    const mock = await axios.get(`https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json`);
    expect(mock).toEqual(request);
  });
});
