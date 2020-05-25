import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import playGame from "./phaser/scene";
import {Button, Container} from "nes-react";

//console.log(App);

export const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 600,
    height: 400,
    scene: playGame,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    }
};



const game = new Phaser.Game(config);

ReactDOM.render(
   <App/>
    ,
    document.getElementById("root") || document.createElement("div")
);
