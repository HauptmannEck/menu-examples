import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from './image.png';
import image2 from './image2.png';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Menu Examples</h1>

                <Link to="/split">
                    <h2>Unique SubPages</h2>
                </Link>
                <p>
                    Based on the BBC style of navigation.
                    This creates a new page for every "Section"(Planning, Harvest, ...),
                    but allows for better information density and extra details around usage of pages and dependencies
                </p>

                <Link to="/vert">
                    <h2>Vertical Nav</h2>
                </Link>
                <p>
                    Move the Nav bar to the left so it can display lots of options in a small area.
                </p>

                <h2>
                    The Problem
                </h2>
                <p>
                    The Row and Perm crops sites are very flat, there is no structure that can get people to a sub page.
                </p>
                <img src={image2}/>
                <p>
                    Improving the structure to be tiered would make the navigation options more flexible.
                </p>
                <img src={image}/>
            </div>
        );
    }
}

export default Home;
