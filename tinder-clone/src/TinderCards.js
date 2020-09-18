import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

import axios from './axios';
// import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    // initialize variable
    // const [people, setPeople] = useState([
    //     {
    //         name: 'Elon Musk',
    //         url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
    //     },
    //     {
    //         name: 'Jeff Bezoz',
    //         url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
    //     },
    //     {
    //         name: 'Sandra Bullok',
    //         url: 'https://i.pinimg.com/564x/a4/2f/39/a42f39daacbb47e15a3545f937dc8cb3.jpg'
    //     },
    // ]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("http://localhost:8081/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen');
    }


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                        // <h1>{person.name}</h1>
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardleftScreen={() => outOfFrame(person.name)}
                    >
                        {/*  no-repeat center */}
                        <div style={ {background: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
