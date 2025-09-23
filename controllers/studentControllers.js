import { getAllStudents, createStudent } from "../models/studentModel.js";

export async function listStudents(req, res) {
  try {
    const students = await getAllStudents();
    // If API response (JSON)
    // res.json(students);

    // If you want to render an HTML view instead:
    res.render("students", { students });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
}

export async function addStudent(req, res) {
  try {
    // const { name, email, department } = req.body;
    // await createStudent({ name, email, department });
    await createStudent(req.body);
     res.status(201).json({ message: "Student add Successfully" });
    // res.redirect("/students"); // reloads list after adding
  } catch (error) {
    res.status(500).json({ error: "Failed to add student" });
  }
}


export async function listStudentsAPI(req, res) {
  try {
    const students = await getAllStudents();
    // If API response (JSON)
    res.json(students);

    // If you want to render an HTML view instead:
    // res.render("students", { students });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
}
