const studentScore = {name: "Dennis Doe", math: 80, eng: 65, kis: 48, phy: 67, che: 56, re:89, comp: 82};

//Section 1: Grading Sciences

function gradeSciences(studentScore) {
    const sciencesObj = {};
    for (let key in studentScore) {
        if (key === "math" || key === "phy" || key === "che") {
            sciencesObj[key] = studentScore[key];
        }
    }

    const values = Object.values(sciencesObj);
    const grades = [];

    for (let val of values) {
        switch (true) {
            case val >= 70 && val <= 100:
                grades.push('A');
                break;
            case val >= 60 && val <= 69:
                grades.push('B');
                break;
            case val >= 50 && val <= 59:
                grades.push('C');
                break;
            case val >= 40 && val <= 49:
                grades.push('Pass');
                break;
            case val < 40:
                grades.push('Supp');
                break;
            default:
                break;
        }
    }

    const [math, phy, chem] = grades;
    return { math, phy, chem };
}




//Section 2: Grading Languages
function gradeLanguages(studentScore) {
    const languagesObj = {};
    for (let key in studentScore) {
        if (key === "eng" || key === "kis" || key === "comp") {
            languagesObj[key] = studentScore[key];
        }
    }

    const valuesLang = Object.values(languagesObj);
    const gradesLanguages = [];

    for (let val of valuesLang) {
        switch (true) {
            case val >= 75 && val <= 100:
                gradesLanguages.push('A');
                break;
            case val >= 65 && val <= 74:
                gradesLanguages.push('B');
                break;
            case val >= 55 && val <= 64:
                gradesLanguages.push('C');
                break;
            case val >= 45 && val <= 54:
                gradesLanguages.push('Pass');
                break;
            case val < 45:
                gradesLanguages.push('Supp');
                break;
            default:
                break;
        }
    }

    const [eng, kis, comp] = gradesLanguages;
    return { eng, kis, comp };
}




//Section 3: Grading Religious Education
function gradeReligiousEducation(studentScore) {
    const religiousEducation = {};
    for (let key in studentScore) {
        if (key === "re") {
            religiousEducation[key] = studentScore[key];
        }
    }

    const valuesRe = Object.values(religiousEducation);
    const gradesRe = [];

    for (let val of valuesRe) {
        switch (true) {
            case val >= 80 && val <= 100:
                gradesRe.push('A');
                break;
            case val >= 70 && val <= 79:
                gradesRe.push('B');
                break;
            case val >= 60 && val <= 69:
                gradesRe.push('C');
                break;
            case val >= 50 && val <= 59:
                gradesRe.push('Pass');
                break;
            case val < 50:
                gradesRe.push('Supp');
                break;
            default:
                break;
        }
    }

    const [re] = gradesRe;
    return { re };
}

// Usage
// const gradeObjRe = gradeReligiousEducation(studentScore);
// console.log(gradeObjRe);

function calculateGradesAndAverage(obj){
    scores = Object.values(obj);
    const Name = scores.shift()
    sum = 0
    for(let x of scores){
        sum += x;

    }
    averageOfScores = sum / scores.length;
    avg = Math.floor(averageOfScores);
    const roundedAverage = {avg};
    const gradeObj = gradeSciences(studentScore);
    const gradeObjLang = gradeLanguages(studentScore);
    const gradeObjRe = gradeReligiousEducation(studentScore);
    const finalOutput = {Name, ...gradeObj,...gradeObjLang, ...gradeObjRe, ...roundedAverage};
    return finalOutput;

 }

console.log(calculateGradesAndAverage(studentScore));
 
module.exports = { gradeSciences, gradeReligiousEducation, gradeLanguages, calculateGradesAndAverage, studentScore};