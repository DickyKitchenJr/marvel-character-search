import Head from "next/head";
import { Inter } from "next/font/google";
import CharacterDisplay from "../components/CharacterDisplay";
import { useState } from "react";
import MD5 from "crypto-js/md5";

const inter = Inter({ subsets: ["latin"] });

//PURPOSE: set MD5 hash per Marvel API requirements
const getHash = (ts, privateAPI, publicAPI) => {
  return MD5(ts + privateAPI + publicAPI).toString();
};

const marvelAPIForCharacters =
  "https://gateway.marvel.com/v1/public/characters?nameStartsWith=";
let ts = Date.now().toString();
const publicAPI = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const privateAPI = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
let hash = getHash(ts, privateAPI, publicAPI);

export default function Home() {
  //PURPOSE: set the user input to be used with API request
  const [characterName, setCharacterName] = useState("");
  //PURPOSE: set the data to be passed to characterDisplay.js
  const [data, setData] = useState([]);

  //PURPOSE: combine user input with required GET request parts, send request, and return data
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `${marvelAPIForCharacters}${characterName}&ts=${ts}&apikey=${publicAPI}&hash=${hash}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //PURPOSE: verifies character exists sets data to message if not
        if (json.data.count === 0) {
          return setData(['No Character Found']);
        } else {
          //PURPOSE: map returns an object of set key:values for name, description and img
          const characters = json.data.results.map((info) => {
            return {
              id: info.id,
              name: info.name,
              description: info.description,
              image: info.thumbnail.path + "/portrait_fantastic.jpg",
            }
          });
          //PURPOSE: adds attribution credit to be used per Marvel API rules
          characters.credit = json.attributionText;
          //PURPOSE: sets data to character so it can be passed to characterDisplay.js
          return setData(characters);
        }
      });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Marvel Character Search built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1>Marvel Character Search</h1>
        <form onSubmit={handleSubmit}>
          <label>Enter Character Name</label> <br /><br />
          <input
            type="text"
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <CharacterDisplay data = {data} />
      </main>
    </>
  );
}
