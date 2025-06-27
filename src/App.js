// import React from 'react';
// import {BrowserRouter as Router,Route, Routes}from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"

// import Navbar from "./components/navbar.component";
// import ExerciseList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercises.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";

// function App() {
//   return (
//     <Router>
//       <div className="container">
//       <Navbar />
//       <Routes>
//       <Route path="/" exact component={ExerciseList} />
//       <Route path="/edit/:id" exact component={EditExercise} />
//       <Route path="/create" exact component={CreateExercise} />
//       <Route path="/user" exact component={CreateUser} />
//       </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;







// import React, { useRef} from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";


// import Navbar from "./components/navbar.component";
// import ExerciseList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercises.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";
// import Footer from './footer';


// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<ExerciseList />} />
//           <Route path="/edit/:id" element={<EditExercise />} />
//           <Route path="/create" element={<CreateExercise />} />
//           <Route path="/user" element={<CreateUser />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


function App() {
  return (
    <div>
      <h2>Hello from Vercel Frontend!</h2>
    </div>
  );
}

export default App;
