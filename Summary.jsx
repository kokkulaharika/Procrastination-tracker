import "./Summary.css";

function Summary({ logs }) {
  // totals from user input
  const totalWorked = logs.reduce((sum, l) => sum + Number(l.worked || 0),0);
  const totalWasted = logs.reduce((sum, l) => sum + Number(l.wasted || 0),0);
  console.log("Logs in Summary:", logs);

  // summary text
  let summaryText = "";
  let motivation = "";

  if (logs.length === 0) {
    summaryText = "No activity logged yet. Start tracking your day.";
    motivation = "Small steps today lead to big success tomorrow ";
  } else {
    summaryText = `You worked ${totalWorked} hrs and wasted ${totalWasted} hrs based on your logs.`;

    if (totalWorked >= totalWasted) {
      motivation = "Nice work  You're using your time well!";
    } else {
      motivation = "Try reducing distractions  You can improve!";
    }
  }

  return (
    <div className="summary">
      <h2>Summary</h2>

      <div className="box">
        <p>{summaryText}</p>
        <p className="motivation">{motivation}</p>
      </div>
    </div>
  );
}

export default Summary;