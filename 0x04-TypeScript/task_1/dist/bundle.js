/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacher('Joshua', 'Bubune'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'working from home';
    };
    Director.prototype.getToWork = function () {
        return this.getCoffeeBreak();
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
function isDirector(employee) {
    return 'getToWork' in employee;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
function teachClass(todayClass) {
    console.log("Teaching ".concat(todayClass));
    return "Teaching ".concat(todayClass);
}
teachClass('Math');
teachClass('History');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBQztJQUM1QyxDQUFDO0FBQ0wsQ0FBQztBQUNELFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFJbEMsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBWSxVQUFVLENBQUUsQ0FBQztJQUNyQyxPQUFPLG1CQUFZLFVBQVUsQ0FBRTtBQUNuQyxDQUFDO0FBRUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlcnMge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbixcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcixcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IGFueSwgICAgXG59XG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlcnMgPSB7XG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgICBjb250cmFjdDogZmFsc2UsXG59O1xuY29uc29sZS5sb2codGVhY2hlcjMpO1xuXG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVycyB7XG4gICAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXIsICAgXG59XG5jb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgICBsYXN0TmFtZTogJ0RvZScsXG4gICAgbG9jYXRpb246ICdMb25kb24nLFxuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gICAgbnVtYmVyT2ZSZXBvcnRzOiAxNyxcbn07XG5jb25zb2xlLmxvZyhkaXJlY3RvcjEpO1xuXG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nLFxufVxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyAgPT4ge1xuICAgIHJldHVybiBgJHtmaXJzdE5hbWVbMF19LiAke2xhc3ROYW1lfWA7XG59XG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoJ0pvc2h1YScsICdCdWJ1bmUnKSk7XG5cblxuaW50ZXJmYWNlIFN0dWRlbnQge1xuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyxcbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcsXG59XG5cblxuY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudCB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgICAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWVcbiAgICB9XG5cbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0N1cnJlbnRseSB3b3JraW5nJztcbiAgICB9XG5cbiAgICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcsXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nLFxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyxcbn1cblxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcsXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nLFxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nLFxufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICd3b3JraW5nIGZyb20gaG9tZSdcbiAgICB9XG5cbiAgICBnZXRUb1dvcmsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29mZmVlQnJlYWsoKVxuICAgIH1cblxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhaydcbiAgICB9XG5cbiAgICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnXG4gICAgfVxufVxuXG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnXG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJ1xuICAgIH1cblxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGVhY2hlcigpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKVxufVxuXG5cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7XG5cblxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogYW55KTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICAgIHJldHVybiAnZ2V0VG9Xb3JrJyBpbiBlbXBsb3llZTtcbn1cblxuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogYW55KTogdm9pZCB7XG4gICAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpKVxuICAgIH1cbn1cbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuXG5cbnR5cGUgU3ViamVjdHMgPSAnTWF0aCcgfCAnSGlzdG9yeSc7XG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmxvZyhgVGVhY2hpbmcgJHt0b2RheUNsYXNzfWApXG4gICAgcmV0dXJuIGBUZWFjaGluZyAke3RvZGF5Q2xhc3N9YFxufVxuXG50ZWFjaENsYXNzKCdNYXRoJyk7XG50ZWFjaENsYXNzKCdIaXN0b3J5Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=