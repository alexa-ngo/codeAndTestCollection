import { fn1 } from "./random-lib.js";


jest.mock("./random-lib.js");

/**
 * Here is what random-lib would look like when you MOCK it:
 * {
 *  fn1: jest.fn(),
 *  fn2: jest.fn(),
 *  fn2: jest.fn()
 * }
 * 
 * But it is not useful as it is, you want to give it your own implemenation.
 So I in every test case (it) you will need to cast the function and assign it to what you 
 want it to do.
 */

describe("", () => {
  it ("", () => {
    (fn1 as jest.Mock) = jest.fn().mockReturnValue(4);
    (fn2 as jest.Mock) = jest.fn().mockImplementation(() => {
      return 5
    });

    const x = fn2()
    x //5 

  });
});