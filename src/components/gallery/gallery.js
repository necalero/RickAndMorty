import React, {useEffect, useState} from 'react';
import Card from '../card/Card';

const apiURL = 'https://rickandmortyapi.com/api/character'

const Gallery = () => {
    useEffect(function (){
        fetch(apiURL).then(res=>res.json()).then(response => {
            const {results} = response
            const characters = results.map(character => character)
            console.log(characters);
            setCards(characters);
        })
    }
    )
    const [cards, setCards] = useState([]);
    return (
        cards.map(singleCard => Card(singleCard.image, singleCard.name, singleCard.gender, singleCard.status))
    );
}

export default Gallery;