namespace Subjects {
  
        export interface Teacher {
          experienceTeachingReact?: number;
        }
        
        export class React extends Subjects.Subject {
      
          getRequirements(): string => 'Here is the list of requirements for React';
      
          getAvailableTeacher(): string {
            if (this.teacher && this.experienceTeachingReact) {
              return `Available Teacher:${this.teacher.firstName}`;
            }
            return 'No available teacher';
          }
        }
      }
