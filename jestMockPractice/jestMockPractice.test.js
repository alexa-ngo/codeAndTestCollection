import * as practiceLib from './jestMockPractice'

jest.mock('./jestMockPractice.js', () => ({
    add: jest.fn()
}));

describe("This tests the add function taking in x and y. ", () => {

    // The afterEach() method resets all the variables after each time the it is ran.
    afterEach(() => {
        jest.resetAllMocks();
    });

    it("Uses x = 4 and y = 5", () => {
        const addSpy = jest.spyOn(practiceLib, "add"); //Takes in the practiceLib as a library and uses the add method
        addSpy.mockImplementation(() => 5);

        const x = practiceLib.add(4, 5)
        console.log(x)
    });

    it("Uses x = 1 and y = 99", () => {
        console.log(practiceLib.add(1, 99));
    });
});

// import { fn1 } from "./random-lib.js";


// jest.mock("./random-lib.js");

// /**
//  * Here is what random-lib would look like when you MOCK it:
//  * {
//  *  fn1: jest.fn(),
//  *  fn2: jest.fn(),
//  *  fn2: jest.fn()
//  * }
//  *
//  * But it is not useful as it is, you want to give it your own implemenation.
//  So I in every test case (it) you will need to cast the function and assign it to what you
//  want it to do.
//  */

// describe("", () => {
//   it ("", () => {
//     (fn1 as jest.Mock) = jest.fn().mockReturnValue(4);
//     (fn2 as jest.Mock) = jest.fn().mockImplementation(() => {
//       return 5
//     });

//     const x = fn2()
//     x //5

//   });
// });

