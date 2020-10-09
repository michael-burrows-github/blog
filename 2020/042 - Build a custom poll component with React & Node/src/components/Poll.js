import React, { useState, useEffect } from "react";
import "./Poll.css";

function StrawPoll() {

  const [voteData, setVoteData] = useState();
  const [totalVotes, setTotalVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const url = "http://localhost:5000/poll";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVoteData(data);
        let sum = 0;
        data.forEach(function (obj) {
          sum += obj.votes;
        });
        setTotalVotes(sum);
      });
  }, []);

  const submitVote = (e) => {
    if(voted === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData[voteSelected].votes;
      voteData[voteSelected].votes = voteCurrent + 1;
      setTotalVotes(totalVotes + 1);
      setVoted(!voted);
      const options = {
        method: "POST",
        body: JSON.stringify(voteData),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };  

  let pollOptions;
  if (voteData) {
    pollOptions = voteData.map((item) => {
      return (
        <li key={item.id}>
          <button onClick={submitVote} data-id={item.id}>
            {item.option}
            <span>- {item.votes} Votes</span>
          </button>          
        </li>
      );
    });
  }  

  return (
    <div className="poll">
      <h1>Which option do you like the best?</h1>
      <ul className={voted ? "results" : "options"}>{pollOptions}</ul>
      <p>Total Votes: {totalVotes}</p>
    </div>
  );
  
}

export default StrawPoll;
