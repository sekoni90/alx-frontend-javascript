import { Teacher } from "./js/subjects/js/subjects/js/subjects/js/subjects/Teacher";

    export class Subject {
        //allow subclasses to access it and allow it to be optionally undefined
        protected teacher?: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
