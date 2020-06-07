import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <ul>
                <Link to='/definitions'>
                    <li>Definitions</li>
                </Link>
                <Link to='/questions'>
                    <li>Questions</li>
                </Link>
                <Link to='/dom'>
                    <li>DOM</li>
                </Link>
                <Link to='/css'>
                    <li>CSS</li>
                </Link>
                <Link to='/resume'>
                    <li>My Resume</li>
                </Link>
            </ul>
        </div>

    );
}

export default Home;