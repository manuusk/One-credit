import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <button className="btn" onClick={() => { navigate('/student') }} > Register for course exemption</button>
        </>
    );
};

export default Home;