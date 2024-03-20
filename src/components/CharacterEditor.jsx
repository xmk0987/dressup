import { useState } from "react";

export function CharacterEditor ({char, characters, hairs, changeChar}){
    const [showChars, toggleShowChars] = useState(true);

    return (
        <div className="editor-container">
            <div className="left-container">
                <div className="left-container-header">
                    <p onClick={() => toggleShowChars(!showChars)}>{showChars ? 'Hairs' : 'Characters'}</p>
                </div>
                <div className="items">
                    {showChars ? (characters &&
                        characters.map((character) => (
                            <div className="single-item" onClick={() => changeChar("face", character)}>
                                <img src={character} alt="character" className="editor-image" />
                            </div>
                        )))   : (hairs &&
                            hairs.map((hair) => (
                                <div className="single-item" onClick={() => changeChar("hair", hair)}>
                                    <img src={char.face} className="editor-image" alt="character"/>
                                    <img src={hair} className="editor-image editor-hair-image" alt="character"/>
                                </div>
                            ))) 
                    }
                </div>

            </div>
            <div className="right-container">
                <div className="editor-character">
                    <img src={char.face} alt="character-face" className="editor-character-face"/>
                    <img src={char.hair} alt="character-hair" className="editor-character-hair"/>
                </div>
            </div>
        </div>
    );
}
