import { expect } from "chai";
import { countVowels, runLengthEncoding, isPaired } from "../../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    describe("countVowels", () => {
        it("counts vowels", () => {
            expect(countVowels("This is SOME Text")).to.equal(5);
        });
    });

    describe("runLengthEncoding", () => {
        it("compresses a string", () => {
            expect(runLengthEncoding("aaaabbbccd")).to.equal("a4b3c2d");
        });


        it("compresses a string", () => {
            expect(runLengthEncoding("aaaabccdd")).to.equal("a4bc2d2");
        });

        it("compresses a string", () => {
            expect(runLengthEncoding("")).to.equal("");
        });
    });

    describe("isPaired", () => {
        it("returns true for a string with paired parens", () => {
            expect(isPaired("([{}])")).to.be.true;
        });

        it("returns false when the parens are not paired", () => {
            expect(isPaired("(]")).to.be.false;
        });
    });
});