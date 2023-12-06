import { Subjects } from "./subjects/Subject";
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";

// Create and export constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create a Teacher object with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};
