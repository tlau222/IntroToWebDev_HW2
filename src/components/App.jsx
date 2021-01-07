import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

// function createNote(part) {
//   return(
//     <Note 
//     key={part.id}
//     title={part.title}
//     content={part.content}/>
//   );
// }

function App() {
  return (
    <div>
      <Header name="Keeper"/>
      <Footer copyright="Copyright ©"/>
      <Note/>
    </div>
  );
}

export default App;