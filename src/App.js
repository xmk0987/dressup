import { CharacterEditor } from "./components/CharacterEditor";
import { useState } from "react";
import "./App.css";

const characters = require.context("./utils/images/Animal/characters", true);
const characterList = characters.keys().map((image) => characters(image));

const hairs = require.context("./utils/images/Animal/ahair", true);
const hairsList = hairs.keys().map((image) => hairs(image));

function App() {
  const [char, setChar] = useState({
    face: characterList[2],
    hair: hairsList[5],
  });

  const changeCharacter = (type, item) => {
    switch (type) {
      case "face":
        setChar({ ...char, face: item });
        break;
      case "hair":
        setChar({ ...char, hair: item });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <CharacterEditor
        char={char}
        characters={characterList}
        hairs={hairsList}
        changeChar={changeCharacter}
      />
    </div>
  );
}

export default App;
