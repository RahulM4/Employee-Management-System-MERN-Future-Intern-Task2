import React, { useEffect, useState } from "react";
import axios from "axios";



const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  //Read
  useEffect(() => {
    // Fetch employee data from the API
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employee");
        setEmployees(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  //Update
  const handleUpdate = (employee) => {
    setCurrentEmployee(employee);
    setIsModalOpen(true);
  };
  //Delete
  const handleDelete = async (employeeId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/employee/${employeeId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setEmployees((prev) => prev.filter((emp) => emp._id !== employeeId));
        alert("Employee deleted successfully!");
      } else {
        console.error("Failed to delete employee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };


  return (
    <>

      <div className="min-h-screen bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
        <div className="container px-4 py-8 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Employee Directory
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee) => (
              <div
                key={employee._id}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={employee.profileimag}
                    alt={`${employee.firstName} ${employee.lastName}`}
                    className="w-16 h-16 rounded-full shadow-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">
                      {employee.firstName} {employee.lastName}
                    </h2>
                    <p className="text-sm text-gray-500">{employee.position}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <span className="font-semibold">Email:</span> {employee.email}
                  </li>
                  <li>
                    <span className="font-semibold">Phone:</span> {employee.phone}
                  </li>
                  <li>
                    <span className="font-semibold">Department:</span> {employee.department}
                  </li>
                  <li>
                    <span className="font-semibold">Date of Joining:</span>{" "}
                    {new Date(employee.dateOfJoining).toLocaleDateString()}
                  </li>
                  <li>
                    <span className="font-semibold">Salary:</span> {employee.salary.amount}{" "}
                    {employee.salary.currency}
                  </li>
                  {employee.skills.length > 0 && (
                    <li>
                      <span className="font-semibold">Skills:</span>{" "}
                      {employee.skills.join(", ")}
                    </li>
                  )}
                </ul>
                {/* CRUD Buttons */}
                <div className="flex justify-around mt-4">

                  <button
                    className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
                    onClick={() => handleEdit(employee)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                    onClick={() => handleDelete(employee._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
