import React, { useState } from "react";
import "./Log.css";

let Log = ({logs, setLogs}) => {
  const [planned, setPlanned] = useState("");
  const [worked, setWorked] = useState("");
  const [wasted, setWasted] = useState("");
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");
  const [severity, setSeverity] = useState("");

  const handleAddbtn = () => {
    if (!planned || !worked || !wasted || !type || !reason || !severity) return;

    const newLog = {
      id: Date.now(),
      planned,
      worked,
      wasted,
      type,
      reason,
      severity,
    };

    
    setLogs([...logs, newLog]);

    setPlanned("");
    setWorked("");
    setWasted("");
    setType("");
    setReason("");
    setSeverity("");
  };

  const handleDelete = (id) => {
    setLogs(logs.filter((l) => l.id !== id));
  };

  //  INSIGHT LOGIC 

const insights = logs.map((l) => {
  const percent = ((l.wasted / l.planned) * 100).toFixed(1);

  let msg = "";
  if (percent < 20) msg = "Good control ";
  else if (percent < 50) msg = "Be careful ";
  else msg = "High distraction Deadline pressure!";

  return {
    id: l.id,
    wasted: l.wasted,
    planned: l.planned,
    percent,
    msg,
  };
});

  return (
    <div className="log">
      <h2>Distraction Log</h2>
      <h3>Log your worked and wasted time</h3>

      <div className="input-box">
        <label>Enter your planned hours</label>
        <input
          type="number"
          placeholder="Planned hours"
          value={planned}
          onChange={(e) => setPlanned(e.target.value)}
        />
        <label>Enter worked hours</label>
        <input
          type="number"
          placeholder="Worked hours"
          value={worked}
          onChange={(e) => setWorked(e.target.value)}
        />
        <label>Enter Wasted hours</label>
        <input
          type="number"
          placeholder="Wasted hours"
          value={wasted}
          onChange={(e) => setWasted(e.target.value)}
        />
        <label>Enter Distraction type</label>
        <input
          type="text"
          placeholder="Distraction type"
          value={type}
          onChange={(e) => setType(e.target.value.toLowerCase())}
        />
        <label>Enter Reason for Distraction</label>
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <label>select severity</label>
        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button onClick={handleAddbtn}>Add Log</button>
      </div>

      <ul>
        {logs.map((l) => (
          <li key={l.id}>
            <div>
              Planned: {l.planned}h <br />
              Worked: {l.worked}h <br />
              Wasted: {l.wasted}h <br />
              Type: {l.type} <br />
              Reason: {l.reason} <br />
              Severity: {l.severity}
            </div>

            <button onClick={() => handleDelete(l.id)}>Delete</button>
          </li>
        ))}
      </ul>
       
       {insights.length > 0 && (
  <div className="insight-box">
    <h3>Reality Check</h3>

    {insights.map((i) => (
      <div key={i.id} className="insight">
        <p>You wasted {i.wasted}h out of {i.planned}h</p>
        <p>{i.percent}% time lost</p>
        <p>{i.msg}</p>
      </div>
    ))}
  </div>
)}
      
    </div>
  );
};

export default Log;