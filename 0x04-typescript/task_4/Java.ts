import { Subject } from "./task_4";

namespace Subjects {
    interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        teacher: any;
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
