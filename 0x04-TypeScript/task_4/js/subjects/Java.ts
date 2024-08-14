namespace Subjects {
  
        export interface Teacher {
          experienceTeachingJava?: number;
        }
        
        export class Java extends Subjects.Subject {
      
          getRequirements(): string => 'Here is the list of requirements for Java';
      
          getAvailableTeacher(): string {
            if (this.teacher && this.experienceTeachingJava) {
              return `Available Teacher:${this.teacher.firstName}`;
            }
            return 'No available teacher';
          }
        }
      }
