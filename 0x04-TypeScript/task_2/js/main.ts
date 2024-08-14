interface CommonInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
      }
      
      interface DirectorInterface extends CommonInterface {
        workDirectorTasks(): string;
      }
      
      interface TeacherInterface extends CommonInterface {
        workTeacherTasks(): string;
      }
      
      class Director implements DirectorInterface {
        workFromHome = (): string => 'Working from home';
        getCoffeeBreak = (): string => 'Getting a coffee break';
        workDirectorTasks = (): string => 'Getting to director tasks';
      }
      
      class Teacher implements TeacherInterface {
        workFromHome = (): string => 'Cannot work from home';
        getCoffeeBreak = (): string => 'Cannot have a break';
        workTeacherTasks = (): string => 'Getting to work';
      }
      
      function createEmployee(salary: number | string): Director | Teacher {
        if (typeof salary === 'number' && salary < 500) {
          return new Teacher();
        }
        return new Director();
      }
      
      function isDirector(employee: Director | Teacher): boolean {
        return employee instanceof Director;
      }
      
      function executeWork(employee: Director | Teacher): string {
        if (employee instanceof Director) {
          return employee.workDirectorTasks();
        }
        return employee.workTeacherTasks();
      }
      
      type Subjects = 'Math' | 'History';
      
      function teachClass(todayClass: Subjects): string {
        if (todayClass === 'Math') {
          return 'Teaching Math';
        }
        return 'Teaching History';
      }
