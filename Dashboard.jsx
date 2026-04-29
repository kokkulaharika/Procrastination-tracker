import React, { useState } from "react";
import "./Dashboard.css";
import "./Dailyplan.jsx";
import "./Dailyplan.css";
import "./Log.jsx";
import "./Summary.jsx";
import DailyPlan from "./Dailyplan.jsx";
import Log from "./Log.jsx";
import Summary from "./Summary.jsx";


let Dashboard = ({user,setUser}) =>{
    const[activeTab, setActiveTab]=useState("plan");
     const [logs, setLogs] = useState([]);

    return(
        <div className="dashboard">
            <h2>Welcome, {user}</h2>
            <div className="tabs">
                <button className={activeTab === "plan" ?  "active" : ""}
                onClick={()=>
                    setActiveTab("plan")}>Daily plan</button>
                    <button className={activeTab === "log" ?  "active" : ""}
                onClick={()=>
                    setActiveTab("log")}>Distraction Log</button>
                    <button className={activeTab === "summary" ?  "active" : ""}
                onClick={()=>
                    setActiveTab("summary")}>Summary</button>
            </div>

            <div className="content">
                {activeTab === "plan" && <DailyPlan />}
                {activeTab === "log" && <Log logs={logs} setLogs={setLogs} />}
                {activeTab === "summary" &&  <Summary logs={logs} />}
            </div>

            <div className="logout">
                <button onClick={()=>{
                    localStorage.removeItem("user");
                    setUser("");
                }}>Logout</button>
            </div>

        </div>
    )
}

export default Dashboard;