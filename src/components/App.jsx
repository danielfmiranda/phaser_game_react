import React from "react";
import {Button, Container} from "nes-react";
import '../css/app.css';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className={'siteContainer'}>
                        <div className={'titleCard'}>
                            <Container className={'is-dark'}>
                                <h1> Phaser in React.JS </h1>
                                <h6> *Use the arrow-keys to move!</h6>
                            </Container>

                        </div>

                        <div className={'gameContainer'}>
                            <div id={"phaser-example"}>


                            </div>
                            <h1> DANNYBOY</h1>
                        </div>


                        <div className={'footer'}>
                            <a href={'https://www.danielfmiranda.com'}>
                                <Button className={"is-primary"}> www.danielfmiranda.com </Button>
                            </a>
                            <div className={'footerIconsContainer'}>
                                <a href={'https://www.github.com/manieldiranda'}>
                                    <i className={"nes-icon is-small github githubIcon footerIcon"}/>
                                </a>
                                <a href={'https://www.linkedin.com/daniel-f-miranda'}>
                                    <i className={"nes-icon is-small  linkedin linkedinIcon footerIcon"}/>
                                </a>
                                <a href={'mailto:manieldiranda@gmail.com'}>
                                    <i className={"nes-icon is-small  gmail gmailIcon footerIcon"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
