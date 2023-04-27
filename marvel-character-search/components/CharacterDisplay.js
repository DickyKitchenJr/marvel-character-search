import React from "react";
import Image from "next/image";
import styles from "../styles/CharacterData.module.css"

function CharacterDisplay({ data }) {
  return (
    <>
      {/* PURPOSE: depending on contents of data, will show either error message or character info requested by user */}
      {!data[0] ? null : data[0] === "No Character Found" ? (
        <div>
          <h2 className={styles.h2}>No Character Found</h2>
          <p>
            This may be due to a mispelling or Marvel.com (which provides the
            data used here) may not be updated with the current information for
            this character.
          </p>
        </div>
      ) : data.length === 1 ? (
        <div key={data[0].id}>
          <h2 className={styles.h2}> One Character Found</h2>
          <h3>{data[0].name}</h3>
          <Image
            src={data[0].image}
            alt={data[0].name}
            width={168}
            height={252}
          />
          {!data[0].description ? (
            <h3>
              No Bio Found: Marvel.com (which provides the data used here) may
              not be updated with the current information for this character.
            </h3>
          ) : (
            <div>
              <h3>Bio:</h3> <p>{data[0].description}</p>
            </div>
          )}
          <a href="https://marvel.com" className={styles.footer}>{data.credit}</a>
        </div>
      ) : (
        <div>
          <h2 className={styles.h2}>Multiple Characters Found</h2>
          {data.map((items) => {
            return (
              <div key={items.id} className={styles.characterBlock}>
                <h3>{items.name}</h3>
                <Image
                  src={items.image}
                  alt={items.name}
                  width={168}
                  height={252}
                />
                {!items.description ? (
                  <h3>
                    No Bio Found: Marvel.com (which provides the data used here)
                    may not be updated with the current information for this
                    character.
                  </h3>
                ) : (
                  <div>
                    <h3>Bio:</h3>
                    <p>{items.description}</p>
                  </div>
                )}
              </div>
            );
          })}
          <br />
          <a href="https://marvel.com" className={styles.footer}>{data.credit}</a>
        </div>
      )}
    </>
  );
}

export default CharacterDisplay;
