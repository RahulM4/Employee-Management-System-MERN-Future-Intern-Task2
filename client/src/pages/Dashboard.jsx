import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch employee data from API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employee");
        setEmployees(response.data); // Assuming response.data is an array of employees
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch employees");
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/employee/${id}`); // Navigate to the employee details page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Employee Dashboard</h1>
      
      {/* List View of Employees */}
      <ul className="space-y-4">
        {employees.map((employee) => (
          <li
            key={employee._id} // Assuming _id is the unique identifier from MongoDB
            className="p-4 border-b border-gray-300 flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                src={employee.profileimag || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"}
                alt={employee.firstName}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-medium">{employee.firstName} {employee.lastName}</h2>
                <p className="text-gray-500">ID: {employee._id}</p>
              </div>
            </div>
            <button
              onClick={() => handleViewDetails(employee._id)}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
