interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(
  salary: number | string
): DirectorInterface | TeacherInterface {
  if (typeof salary == "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(
  employee: TeacherInterface | DirectorInterface
): boolean {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export function executeWork(
  employee: TeacherInterface | DirectorInterface
): string {
  if (isDirector(employee)) {
    return (employee as DirectorInterface).workDirectorTasks();
  } else {
    return (employee as TeacherInterface).workTeacherTasks();
  }
}

export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
