// import React, { Component } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// export default class EditExercise extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.onChangeDuration = this.onChangeDuration.bind(this);
//     this.onChangeDate = this.onChangeDate.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: '',
//       description: '',
//       duration: 0,
//       date: new Date(),
//       users: []
//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
//       .then(response => {
//         this.setState({
//           username: response.data.username,
//           description: response.data.description,
//           duration: response.data.duration,
//           date: new Date(response.data.date)
//         })   
//       })
//       .catch(function (error) {
//         console.log(error);
//       })

//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }

//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value
//     })
//   }

//   onChangeDuration(e) {
//     this.setState({
//       duration: e.target.value
//     })
//   }

//   onChangeDate(date) {
//     this.setState({
//       date: date
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const exercise = {
//       username: this.state.username,
//       description: this.state.description,
//       duration: this.state.duration,
//       date: this.state.date
//     }

//     console.log(exercise);

//     axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
//       .then(res => console.log(res.data));

//     window.location = '/';
//   }

//   render() {
//     return (
//     <div>
//       <h3>Edit Exercise Log</h3>
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group"> 
//           <label>Username: </label>
//           <select ref="userInput"
//               required
//               className="form-control"
//               value={this.state.username}
//               onChange={this.onChangeUsername}>
//               {
//                 this.state.users.map(function(user) {
//                   return <option 
//                     key={user}
//                     value={user}>{user}
//                     </option>;
//                 })
//               }
//           </select>
//         </div>
//         <div className="form-group"> 
//           <label>Description: </label>
//           <input  type="text"
//               required
//               className="form-control"
//               value={this.state.description}
//               onChange={this.onChangeDescription}
//               />
//         </div>
//         <div className="form-group">
//           <label>Duration (in minutes): </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.duration}
//               onChange={this.onChangeDuration}
//               />
//         </div>
//         <div className="form-group">
//           <label>Date: </label>
//           <div>
//             <DatePicker
//               selected={this.state.date}
//               onChange={this.onChangeDate}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
//   }
// }

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// export default function EditExercise() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [username, setUsername] = useState('');
//   const [description, setDescription] = useState('');
//   const [duration, setDuration] = useState(0);
//   const [date, setDate] = useState(new Date());
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/exercises/' + id)
//       .then(response => {
//         setUsername(response.data.username);
//         setDescription(response.data.description);
//         setDuration(response.data.duration);
//         setDate(new Date(response.data.date));
//       })
//       .catch(error => console.log(error));

//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           setUsers(response.data.map(user => user.username));
//         }
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const exercise = {
//       username,
//       description,
//       duration,
//       date
//     };

//     axios.post('http://localhost:5000/exercises/update/' + id, exercise)
//       .then(res => console.log(res.data));

//     navigate('/');
//   }

//   return (
//     <div>
//       <h3>Edit Exercise Log</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Username: </label>
//           <select
//             required
//             className="form-control"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}>
//             {
//               users.map(user => (
//                 <option key={user} value={user}>{user}</option>
//               ))
//             }
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Description: </label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Duration (in minutes): </label>
//           <input
//             type="text"
//             className="form-control"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Date: </label>
//           <DatePicker selected={date} onChange={(d) => setDate(d)} />
//         </div>
//         <div className="form-group">
//           <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//   );
// }


// import React, { Component } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default class EditExercise extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.onChangeDuration = this.onChangeDuration.bind(this);
//     this.onChangeDate = this.onChangeDate.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: '',
//       description: '',
//       duration: 0,
//       date: new Date(),
//       users: []
//     };
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
//       .then(response => {
//         this.setState({
//           username: response.data.username,
//           description: response.data.description,
//           duration: response.data.duration,
//           date: new Date(response.data.date)
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });

//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username)
//           });
//         }
//       });
//   }

//   onChangeUsername(e) {
//     this.setState({ username: e.target.value });
//   }

//   onChangeDescription(e) {
//     this.setState({ description: e.target.value });
//   }

//   onChangeDuration(e) {
//     this.setState({ duration: e.target.value });
//   }

//   onChangeDate(date) {
//     this.setState({ date: date });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const exercise = {
//       username: this.state.username,
//       description: this.state.description,
//       duration: this.state.duration,
//       date: this.state.date
//     };

//     console.log(exercise);

//     axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
//       .then(res => console.log(res.data));

//     window.location = '/';
//   }

//   render() {
//     return (
//       <div className="container mt-5">
//         <div className="card shadow-sm p-4">
//           <h3 className="mb-4">✏️ Edit Exercise Log</h3>
//           <form onSubmit={this.onSubmit}>
//             <div className="mb-3">
//               <label className="form-label">👤 Username:</label>
//               <select required className="form-select" value={this.state.username} onChange={this.onChangeUsername}>
//                 {
//                   this.state.users.map(function(user) {
//                     return (
//                       <option key={user} value={user}>{user}</option>
//                     );
//                   })
//                 }
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">📝 Description:</label>
//               <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">⏱️ Duration (in minutes):</label>
//               <input type="number" className="form-control" value={this.state.duration} onChange={this.onChangeDuration} />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">📅 Date:</label>
//               <div>
//                 <DatePicker selected={this.state.date} onChange={this.onChangeDate} className="form-control" />
//               </div>
//             </div>

//             <div className="d-grid">
//               <input type="submit" value="💾 Update Exercise Log" className="btn btn-warning" />
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditExercise() {
  const { id } = useParams(); // ✅ React Router v6 way
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}${id}`)
      .then(response => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
      })
      .catch(error => console.log(error));

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/`)
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username));
        }
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedExercise = {
      username,
      description,
      duration,
      date
    };

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/exercises/update/${id}`, updatedExercise)
      .then(res => console.log(res.data));

    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4">✏️ Edit Exercise Log</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">👤 Username:</label>
            <select required className="form-select" value={username} onChange={(e) => setUsername(e.target.value)}>
              {users.map(user => <option key={user} value={user}>{user}</option>)}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">📝 Description:</label>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">⏱️ Duration (in minutes):</label>
            <input type="number" className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">📅 Date:</label>
            <DatePicker selected={date} onChange={(d) => setDate(d)} className="form-control" />
          </div>

          <div className="d-grid">
            <input type="submit" value="✅ Update Exercise" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
}
