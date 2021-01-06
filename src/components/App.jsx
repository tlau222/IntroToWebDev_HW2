import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header name="Keeper"/>
      <Footer copyright="Copyright ©"/>
      <Note title="This is the note title" content="This is the note content"/>
    </div>
  );
}

export default App;