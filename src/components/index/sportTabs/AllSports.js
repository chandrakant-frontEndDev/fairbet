import React from 'react';
import Baseball from './Baseball';
import Cricket from './Cricket';
import Football from './Football';
import LiveCard from './LiveCard';
import LiveCasino from './LiveCasino';
import SlotGames from './SlotGames';
import Soccer from './Soccer';
import Tennis from './Tennis';
import Volleyball from './Volleyball';
import { Link } from 'react-router-dom';

const AllSports = () => {
    return (
        <>
            <div className='all_sports_tabs'>
                <Cricket />
                <Soccer />
                {/* <Tennis /> */}
                <Football />
                {/* <Baseball />
                <Volleyball />
                <LiveCasino />
                <LiveCard />
                <SlotGames /> */}
            </div>
        </>
    )
}

export default AllSports