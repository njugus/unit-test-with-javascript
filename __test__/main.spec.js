const { gradeLanguages, gradeReligiousEducation, gradeSciences, calculateGradesAndAverage, studentScore } = require("../main");
const x = gradeLanguages(studentScore);
const y = gradeReligiousEducation(studentScore);
const z = gradeSciences(studentScore);
const w = calculateGradesAndAverage(studentScore);


describe("Grade sciences", () => {
    it("checks if all the sciences are isolated as an object and graded", () => {
        expect(z).toEqual({ math: "A", phy: "B", chem: "C" });
    });
})

describe("Grade languages", () => {
    it("checks if all the languages are isolated as an object and are graded", () => {
        expect(x).toEqual({ eng: "B", kis: "Pass", comp: "A" });
    });
})

describe("Grade re", () => {
    it("checks if religious education is isolated as an object and are graded", () => {
        expect(y).toEqual({ re: "A" });
    });
})


describe("Calculate Average and return final students grades", () => {
    it("checks if the final object contains grades and average", () => {
        expect(w).toEqual({
            Name: 'Dennis Doe',
            math: 'A',
            phy: 'B',
            chem: 'C',
            eng: 'B',
            kis: 'Pass',
            comp: 'A',
            re: 'A',
            avg: 69
          });
    });
    
})