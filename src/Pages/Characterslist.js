import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./characterlist.css"
import { GET_CHARACTERS } from '../queries';


export default function CharactersList() {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    fetchPolicy: "cache-first",
  });

  console.log( {loading, error, data });

  if(loading) return <div>...Spinner</div>

  if(error) return <div> Something went wrong </div>

  return (  
    <div className="Characterlist">
  {data.characters.results.map(character => {
      return <div>
        <img src={character.image}></img>
        <h2> {character.name} </h2>
      </div>

  })}

  </div>
   
  )
}
