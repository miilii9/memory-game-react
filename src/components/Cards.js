import { useState } from "react";
import "./Cards.css";
export default function Cards({ decks, handlChoice }) {
    const picHandler = (card) => {
        handlChoice(card);
        // console.log( 'card js : ' , card);
    };
    return (
        <div className="card-grid" key={Math.random()}>
            {decks.map((deck) => {
                return (
                    <div className="card" key={Math.random()}>
                        <img
                            className="front"
                            src={deck.src}
                            alt="card front"
                        />
                        <img
                            src="\img\cover.png"
                            alt="back"
                            onClick={() => {
                                picHandler(deck);
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
