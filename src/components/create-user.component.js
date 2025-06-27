// import React, { Component } from 'react';
// import axios from 'axios';

// export default class CreateUser extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: ''
//     }
//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const user = {
//       username: this.state.username
//     }

//     console.log(user);

//     axios.post('http://localhost:5000/users/add', user)
//       .then(res => console.log(res.data));

//     this.setState({
//       username: ''
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>Create New User</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group"> 
//             <label>Username: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 value={this.state.username}
//                 onChange={this.onChangeUsername}
//                 />
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Create User" className="btn btn-primary" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function CreateUser() {
//   const [username, setUsername] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const user = { username };
//     console.log(user);

//     axios.post('http://localhost:5000/users/add', user)
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err));

//     setUsername('');
//   };

//   return (
//     <div>
//       <h3>Create New User</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group"> 
//           <label>Username: </label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <input type="submit" value="Create User" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const user = { username };
    console.log(user);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/add`, user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    setUsername('');
    alert("✅ New user created successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4">🙋 Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">👤 Username:</label>
            <input
              type="text"
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter new username"
            />
          </div>
          <div className="d-grid">
            <input type="submit" value="➕ Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

