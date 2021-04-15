import React from 'react';
import './App.css';
import NavBar from "./component/nav-bar/nav-bar";
import Home from "./component/home/home";
import About from "./component/about/about";
import Skills from "./component/skills/skills";
import Experience from "./component/experience/experience";
import Projects from "./component/projects/projects";
import Contact from "./component/contact/contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LogoVideo from "./assets/LogoVideo.mp4";

class App extends React.Component<any, any>{
    state = {
        loading: false
    };

    sleep = (milliseconds: number) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
        this.setState({
            loading: false
        });
    };
    
    componentDidMount() {
        this.wait(2000);
    }
    render() {
        if (this.state.loading === true) {
            return (
                <video autoPlay muted >
                    <source src={LogoVideo}
                            type="video/mp4" />
                </video>
            )
        }
        else {
            return (
                <Router>
                    <div className="App">
                        <NavBar/>
                        <div className="main-content">
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route exact path="/about">
                                    <About/>
                                </Route>
                                <Route exact path="/skills">
                                    <Skills/>
                                </Route>
                                <Route exact path="/experience">
                                    <Experience/>
                                </Route>
                                <Route exact path="/projects">
                                    <Projects/>
                                </Route>
                                <Route exact path="/contact">
                                    <Contact/>
                                </Route>

                            </Switch>
                        </div>
                    </div>
                </Router>
            )
        }
    }
}

export default App;
