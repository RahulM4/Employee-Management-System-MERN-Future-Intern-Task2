import mongoose, { Schema } from 'mongoose';

// Define the Employee schema
const EmployeeSchema = new Schema({
  profileimag:{type: String, default: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  position: { type: String, required: true },
  department: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  salary: {
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" }
  },
  skills: { type: [String], default: [] },
  projects: [
    {
      projectName: { type: String, required: true },
      role: { type: String },
      startDate: { type: Date },
      endDate: { type: Date }
    }
  ],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Export the model
export const Employees = mongoose.model("Employees", EmployeeSchema);
