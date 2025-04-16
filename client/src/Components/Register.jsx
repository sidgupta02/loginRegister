import React, {useState} from "react";
import axios from "axios";

const Registration = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e)=> {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5000/api/register', formData);
      alert('Registration Successful');
      console.log(res.data);
    }
    catch(err){
      alert('Error during registration');
      console.log(err);
    }
  };

  return(
    <div className="felx justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Here !</h2>

        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border mb-4 rounded" required/>

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border mb-4 rounded" required/>

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border mb-4 rounded" required/>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>

        <h5 className="mt-2 text-xs">
          Already an account,{" "}
          <a href="/login" className="text-blue-600 text-semibold">
            Login
          </a>
        </h5>
      </form>
    </div>
  );
};

export default Registration;