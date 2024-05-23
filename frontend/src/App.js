import React, { useState, useEffect } from 'react';

function App() {
  const [members, setMembers] = useState([]);
  const [member1, setMember1] = useState('');
  const [member2, setMember2] = useState('');
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    fetch('/members')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  const findConnection = () => {
    fetch('/connections/find', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ member1, member2 })
    })
      .then(res => res.json())
      .then(data => setConnection(data));
  };

  return (
    <div>
      <h1>Band Romantic Connections</h1>
      <input type="text" value={member1} onChange={e => setMember1(e.target.value)} placeholder="Member 1" />
      <input type="text" value={member2} onChange={e => setMember2(e.target.value)} placeholder="Member 2" />
      <button onClick={findConnection}>Find Connection</button>
      {connection && (
        <div>
          <h2>Connection Path</h2>
          <p>{connection.join(' -> ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
