const Employee = require("../models/Employee");

const addEmployee = async (req, res) => {
  const employee = await Employee.create(req.body);

  res.status(201).json({
    success: true,
    employee,
  });
};

const getEmployees = async (req, res) => {
  const employees = await Employee.find().sort({
    performanceScore: -1,
  });

  res.json(employees);
};

const searchEmployees = async (req, res) => {
  const { department } = req.query;

  const employees = await Employee.find({
    department,
  });

  res.json(employees);
};

const updateEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  Object.assign(employee, req.body);

  const updatedEmployee = await employee.save();

  res.json(updatedEmployee);
};

const deleteEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  await employee.deleteOne();

  res.json({
    success: true,
    message: "Employee deleted",
  });
};

module.exports = {
  addEmployee,
  getEmployees,
  searchEmployees,
  updateEmployee,
  deleteEmployee,
};