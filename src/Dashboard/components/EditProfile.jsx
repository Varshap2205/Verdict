import React, { useEffect, useState } from "react";
import { useFirebase } from "../../Firebase/FireBase";

function UserForm() {
  const firebase = useFirebase(); // Call useFirebase inside the component
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    if (firebase.user) {
      const userDoc = await firebase.getDocs(firebase.user.uid);
      if (userDoc.exists()) {
        const data = userDoc.data();
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          city: data.city || "",
          state: data.state || "",
          zip: data.zip || "",
        });
      }
    }
  };

  useEffect(() => {
    getData();
  }, [firebase.user]); // Optional: Add firebase.user as a dependency

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.updateProfile(formData, firebase.user.uid);
    alert("Profile updated");
  };

  // Delete the user document
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      await firebase.deleteUserDoc(firebase.user.uid);
      alert("User profile deleted");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold text-center mb-6">
        User Profile: {formData.firstName} {formData.lastName} {/* Display user's name */}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold text-gray-100">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="First name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-100">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold text-gray-100">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Email ID"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-100">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-100">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Address"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold text-gray-100">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="City"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-100">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="State"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-100">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Zip Code"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Profile
        </button>
      </form>

      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-6 rounded"
      >
        Delete Profile
      </button>
    </div>
  );
}

export default UserForm;
