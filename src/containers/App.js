import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {

    // NEW STATE using array destructuring
    const [robots, setRobots] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');

    useEffect(() => { //Similar to componentDidMount(), takes 2 args!
        fetch('https://jsonplaceholder.typicode.com/users').then(res => {
            return res.json();
        }).then(users => {
            setRobots(users);
        });
    }, []);

    const onSearchChange = (e) => {
        setsearchQuery(e.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={ onSearchChange } />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ filteredRobots }></CardList>;
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

export default App;
