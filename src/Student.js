import React from "react";
import "./Student.css";

const Student = () => {
  return (
    <div>
      <h3>Register</h3>
      <form >
        <label htmlFor="name">
          Name <br />
          <input
            type="text"
            name="name"
          />
        </label>
        <br />

        <label htmlFor="rollno">
          Roll Number <br />
          <input
            type="text"
            name="rollno"

          />
        </label>
        <br />

        <label htmlFor="email">
          Email id <br />
          <input
            type="email"
            name="email"

          />
        </label>{" "}
        <br />

        <label htmlFor="phoneno">
          Phone Number <br />
          <input type="text" name="phoneno"></input>
        </label>{" "}
        <br />
        <label htmlFor="dept">
          Department <br />
          <select name="" id="">
            <option value="">AERO</option>
            <option value="">AGRI</option>
            <option value="">AUTO</option>
            <option value="">BIOMEDICAL</option>
            <option value="">BIOTECH</option>
            <option value="">CIVIL</option>
            <option value="">CSBS</option>
            <option value="">CSE</option>
            <option value="">CT</option>
            <option value="">EEE</option>
            <option value="">ECE</option>
            <option value="">EIE</option>
            <option value="">FT</option>
            <option value="">FD</option>
            <option value="">IT</option>
            <option value="">ISE</option>
            <option value="">MECH</option>
            <option value="">MTRS</option>
            <option value="">TXT</option>
            <option value="">AIDS</option>
            <option value="">AIML</option>
            <option value="">CSD</option>
          </select>
        </label>
        <br />
        <label htmlFor="year">
          Year <br />
          <select name="" id="">
            <option value="">Third</option>
            <option value="">Fourth</option>
          </select>
        </label>
        <br />
        <label htmlFor="sem">
          Semester
          <br />
          <select name="" id="">
            <option value="">7</option>
            <option value="">8</option>
          </select>
        </label>
        <br />
        <label htmlFor="yopo">
          Year of Passing Out <br />
          <select name="" id="">
            <option value="">2024</option>
            <option value="">2025</option>
            <option value="">2026</option>
            <option value="">2027</option>
          </select>
          <br />
        </label>
        <button className="submit" type="submit">


          Submit
        </button>
      </form>
    </div>
  );
};

export default Student;
