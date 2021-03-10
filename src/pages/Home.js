import React from 'react';
import CardList from '../components/CardList';
import {Row} from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
        <Row>
            <CardList/>
        </Row>
            
        </div>
    )
}
