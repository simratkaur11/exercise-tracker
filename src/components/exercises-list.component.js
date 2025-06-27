// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0,10)}</td>
//     <td>
//       <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//     </td>
//   </tr>
// )

// export default class ExercisesList extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteExercise = this.deleteExercise.bind(this)

//     this.state = {exercises: []};
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/exercises/')
//       .then(response => {
//         this.setState({ exercises: response.data })
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   deleteExercise(id) {
//     axios.delete('http://localhost:5000/exercises/'+id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       exercises: this.state.exercises.filter(el => el._id !== id)
//     })
//   }

//   exerciseList() {
//     return this.state.exercises.map(currentexercise => {
//       return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>Logged Exercises</h3>
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>Username</th>
//               <th>Description</th>
//               <th>Duration</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             { this.exerciseList() }
//           </tbody>
//         </table>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0,10)}</td>
//     <td>
//       <Link to={"/edit/"+props.exercise._id} className="btn btn-sm btn-outline-primary me-2">Edit</Link>
//       <button className="btn btn-sm btn-outline-danger" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>
//     </td>
//   </tr>
// );

// export default class ExercisesList extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteExercise = this.deleteExercise.bind(this);
//     this.state = { exercises: [] };
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/exercises/')
//       .then(response => this.setState({ exercises: response.data }))
//       .catch((error) => console.log(error));
//   }

//   deleteExercise(id) {
//     axios.delete('http://localhost:5000/exercises/' + id)
//       .then(res => console.log(res.data));

//     this.setState({
//       exercises: this.state.exercises.filter(el => el._id !== id)
//     });
//   }

//   exerciseList() {
//     return this.state.exercises.map(currentexercise => (
//       <Exercise
//         exercise={currentexercise}
//         deleteExercise={this.deleteExercise}
//         key={currentexercise._id}
//       />
//     ));
//   }

//   render() {
//     return (
//       <div className="container mt-5">
//         <div className="card shadow-sm p-4">
//           <h3 className="mb-4">📋 Logged Exercises</h3>
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover table-striped align-middle">
//               <thead className="table-dark">
//                 <tr>
//                   <th>Username</th>
//                   <th>Description</th>
//                   <th>Duration</th>
//                   <th>Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.exerciseList()}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Functional component for single exercise row
const Exercise = props => (
  <tr>
  <td>👤 <span className="fw-semibold">{props.exercise.username}</span></td>
    <td>📝 {props.exercise.description}</td>
    <td>⏱️ <span className="badge bg-info text-dark">{props.exercise.duration} min</span></td>
    <td>📅 {props.exercise.date.substring(0,10)}</td>
    <td>
      <Link
        to={"/edit/" + props.exercise._id}
        className="btn btn-sm btn-outline-primary me-2"
        title="Edit this entry"
      >
        ✏️ Edit
      </Link>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => props.deleteExercise(props.exercise._id)}
        title="Delete this entry"
      >
        🗑️ Delete
      </button>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => this.setState({ exercises: response.data }))
      .catch(error => console.log(error));
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/' + id)
      .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => (
      <Exercise
        exercise={currentexercise}
        deleteExercise={this.deleteExercise}
        key={currentexercise._id}
      />
    ));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <div className="container-fluid py-4">
        <h1 className="display-5 fw-bold">🏃‍♂️ Welcome to ExerciseTracker!</h1>
        <p className="col-md-8 fs-5 text-muted">
           Track your workouts, stay consistent, and smash your fitness goals. Your journey starts here 💪
        </p>
      <Link to="/create" className="btn btn-primary btn-lg mt-3">
      ➕ Start Logging Exercises
      </Link>
      </div>
      </div>

        <div className="card shadow-sm p-4 bg-light">
          <h3 className="mb-4 text-center text-primary">📋 Logged Exercises</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>👤 Username</th>
                  <th>📝 Description</th>
                  <th>⏱ Duration</th>
                  <th>📅 Date</th>
                  <th>⚙️ Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.exerciseList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

