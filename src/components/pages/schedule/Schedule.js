import React from 'react';
import HeroBanner from '../../../authentication/HeroBanner';
import GameSchedule from './GameSchedule';
import StandingsSchedule from './StandingsSchedule';

const Schedule = () => {
    return(
        <>
        <HeroBanner auth="SCHEDULE"/>
        <section className='section section-sm bg-gray-100'>
           <div className='container'>
           <div className='row row-50'>
                <div className='col-lg-8'>
                    <GameSchedule/>
                </div>
                <div className='col-lg-4'>
                    <StandingsSchedule/>
                </div>
            </div>
           </div>
        </section>
        </>
    )
}


export default Schedule;