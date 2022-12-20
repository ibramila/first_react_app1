// import './App.css';
// import Navbar from "./components/Navbar";
// import Welcome from "./components/Welcome";
// import Footer from "./components/Footer";

// function App() {
//   let users = [{
//     id: 1,
//     name: "malahat",
//     age: 18,
//     image: "https://media.gettyimages.com/id/1311737764/photo/flame-towers-in-baku-at-dusk.jpg?s=612x612&w=gi&k=20&c=_eY1WurnoRaLHfl38TNsrhwIF4m6siEq1ORPf7YfhrU=",
//     hobbies: ["1","2"]
//   }
//     ,
//   {
//     id: 2,
//     name: "malsdvsahat",
//     age: 13,
//     image: "https://media.gettyimages.com/id/1311737764/photo/flame-towers-in-baku-at-dusk.jpg?s=612x612&w=gi&k=20&c=_eY1WurnoRaLHfl38TNsrhwIF4m6siEq1ORPf7YfhrU=",
//     hobbies: [1, 2, 5]
//   }
//   ]

//   return (
//     <>
//       <Navbar />
//       {users.map((user) => { return <Welcome key={user.id} name={user.name} age={user.age} image={user.image} hobbies={user.hobbies} /> })}
//       <Footer />
//     </>
//   );
// }


// import Form from "./components/Form";
import Box from "./components/Box";

function App() {

  return (
    <>
      {/* <Form /> */}
      <Box />
    </>
  );
}
export default App;
