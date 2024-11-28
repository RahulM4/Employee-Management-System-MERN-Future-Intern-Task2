import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profileimag: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    position: "",
    department: "",
    dateOfJoining: "",
    salary: { amount: "", currency: "INR" },
    skills: "",
    projects: [{ projectName: "", role: "", startDate: "", endDate: "" }],
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 2) {
      // Handle nested fields (e.g., address.street)
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: {
          ...prev[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else if (keys[0] === "salary") {
      // Handle salary fields
      setFormData((prev) => ({
        ...prev,
        salary: {
          ...prev.salary,
          [keys[1]]: value,
        },
      }));
    } else {
      // Handle regular fields
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleProjectChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects[index][field] = value;
      return { ...prev, projects: updatedProjects };
    });
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { projectName: "", role: "", startDate: "", endDate: "" }],
    }));
  };

  const removeProject = (index) => {
    setFormData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects.splice(index, 1);
      return { ...prev, projects: updatedProjects };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/employee/create", formData);
      console.log("Employee registered:", response.data);
      // Show success toast
      toast.success("Employee registered successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
      setTimeout(() => navigate("/"), 5000); // Redirect after 5 seconds
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to register employee.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Register New Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div>
          <label className="block text-sm font-medium">Profile Image URL</label>
          <input
            type="text"
            name="profileimag"
            value={formData.profileimag}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Address Section */}
        <h2 className="text-xl font-bold mt-6">Address</h2>
        {["street", "city", "state", "zip", "country"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={`address.${field}`}
              value={formData.address[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        ))}

        {/* Position, Department, and Salary */}
        <div>
          <label className="block text-sm font-medium">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date of Joining</label>
          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label className="block text-sm font-medium">Salary Amount</label>
            <input
              type="number"
              name="salary.amount"
              value={formData.salary.amount}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Currency</label>
            <input
              type="text"
              name="salary.currency"
              value={formData.salary.currency}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium">Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        {/* Projects Section */}
        <h2 className="text-xl font-bold mt-6">Projects</h2>
        {formData.projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <div>
              <label className="block text-sm font-medium">Project Name</label>
              <input
                type="text"
                value={project.projectName}
                onChange={(e) => handleProjectChange(index, "projectName", e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Role</label>
              <input
                type="text"
                value={project.role}
                onChange={(e) => handleProjectChange(index, "role", e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  value={project.startDate}
                  onChange={(e) => handleProjectChange(index, "startDate", e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="date"
                  value={project.endDate}
                  onChange={(e) => handleProjectChange(index, "endDate", e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="mt-2 text-red-500 hover:underline"
            >
              Remove Project
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addProject}
          className="mt-2 text-blue-500 hover:underline"
        >
          Add Another Project
        </button>

        {/* Active Status */}
        <div>
          <label className="block text-sm font-medium">Is Active?</label>
          <select
            name="isActive"
            value={formData.isActive}
            onChange={(e) => setFormData({ ...formData, isActive: e.target.value === "true" })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Submit */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};


export default FormPage;
