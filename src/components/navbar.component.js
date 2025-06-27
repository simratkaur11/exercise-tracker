// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//         <Link to="/" className="navbar-brand">ExcerTracker</Link>
//         <div className="collapse navbar-collapse">
//         <ul className="navbar-nav mr-auto">
//           <li className="navbar-item">
//           <Link to="/" className="nav-link">Exercises</Link>
//           </li>
//           <li className="navbar-item">
//           <Link to="/create" className="nav-link">Create Exercise Log</Link>
//           </li>
//           <li className="navbar-item">
//           <Link to="/user" className="nav-link">Create User</Link>
//           </li>
//         </ul>
//         </div>
//       </nav>
//     );
//   }
// }

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
//       <Link className="navbar-brand" to="/">🏃‍♀️ ExerciseTracker</Link>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Exercises</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/create">Create Exercise</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/user">Create User</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand fw-bold">
//             <i className="bi bi-activity me-2"></i>ExerTracker
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">Exercises</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/create" className="nav-link">Create Exercise</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/user" className="nav-link">Create User</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">
            🏋️‍♀️ ExerciseTracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">📋 Exercises</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">➕ Create Exercise</Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">👤 Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
