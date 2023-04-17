import React from "react";
import Image from "next/image";

function CharacterDisplay({ data }) {
  return (
    <>
    {console.log(`current credit is ${data.credit}`)}
    {console.log(data)}
      {/*TODO: create function that accomplishes:
      if data has information (is true) set display to visible, else set display to none  */}

      {!data[0] ? null : data[0] === "No Character Found" ? (
        <div>
          <h2>No Character Found</h2>
        <p>This may be due to a mispelling or Marvel.com (which provides the data used here) may not be updated with the current information for this character.</p>
        </div>
      ) : data.length === 1 ? (
        <div key={data[0].id}>
          <h2> One Character Found</h2>
          <h3>{data[0].name}</h3>
        </div>
        
      ) : (
        <div>
          <h2>Multiple Characters Found</h2>
          {data.map((items) => {
        return <div key={items.id}><h3>{items.name}</h3>
        <Image src={items.image} alt={items.name} width={168} height={252}/>
        {!items.description ? <h3>No Bio Found</h3> : <div><h3>Bio:</h3><p>{items.description}</p></div>}
        {data.credit}    
        </div>
      })}
        </div>
      )}
      
      {/* TODO: if data contains more than one character show each character name for user
      to select which character they want, else if only one character is in data show character picture and bio */}

      {/* TODO: per Marvel API the line "Data provided by Marvel. © 2014 Marvel" must be added along with a link provided by 
      URL arrays or "http://marvel.com"  */}
    </>
  );
}

export default CharacterDisplay;
