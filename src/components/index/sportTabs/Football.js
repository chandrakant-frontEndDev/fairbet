import React from 'react'
import SideBar from './SideBar'
import TabNav from './TabNav';
import "../../../assets/css/api-football.css"

const Football = () => {
    return (
        <>
            <div className='filter_data bg-gray-100'>
                <div className='all_section'>
                    {/* <SideBar /> */}
                    <div className='container'>
                        <TabNav />
                        <article className="heading-component">
                            <div className="heading-component-inner">
                                <h5 className="heading-component-title">Football
                                </h5>
                            </div>
                        </article>
                        {/* <!-- Football--> */}
                        <div id="wg-api-football-games"
                            data-host="v3.football.api-sports.io"
                            data-key="344b4657332d395aa1a19b3027f9b8f2"
                            data-date=""
                            data-league=""
                            data-season=""
                            data-theme=""
                            data-refresh="1"
                            data-show-toolbar="true"
                            data-show-errors="false"
                            data-show-logos="true"
                            data-modal-game="true"
                            data-modal-standings="true"
                            data-modal-show-logos="true">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Football