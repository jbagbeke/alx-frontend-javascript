namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number; 
    }

    export class React extends Subject {
        teacher: Teacher;

        getRequirements(): string {
            return 'Here is the list of requirements for React'
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingReact !== undefined ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}