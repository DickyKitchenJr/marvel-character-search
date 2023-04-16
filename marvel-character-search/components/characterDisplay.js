import React from "react";

function CharacterDisplay({ data }) {
  
  return (
    <>
      <p>Here I Am!</p>
    
      {/*TODO: create function that accomplishes:
      if data has information (is true) set display to visible, else set display to none  */}
      
      {!data[0] ? <h2>No Data</h2> : <h2>Data Recieved</h2>}
      
      {/* TODO: if data contains more than one character show each character name for user
      to select which character they want, else if only one character is in data show character picture and bio */}

      {/* TODO: per Marvel API the line "Data provided by Marvel. © 2014 Marvel" must be added along with a link provided by 
      URL arrays or "http://marvel.com"  */}
    </>
  );
}

export default CharacterDisplay;
