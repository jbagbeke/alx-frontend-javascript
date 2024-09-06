namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        teacher: Teacher;

        getRequirements(): string {
            return 'Here is the list of requirements for Java'
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingJava !== undefined ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}
