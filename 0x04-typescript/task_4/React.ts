import { Subject } from "./Subject";

namespace Subjects {
    interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
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