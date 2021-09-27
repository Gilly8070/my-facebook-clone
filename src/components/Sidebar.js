import React from 'react'
import '../styles/Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebarContainer d-none d-xl-flex flex-column'>
            <div className='mt-4' >
                <i className="far fa-user-circle sidebarUserIcon "></i>
                <p className='check2'>Zaid Shaikh</p>
                {/* <meter min='0' max='100' low='30' high='60' optimum='80' value='30'></meter> */}
            </div>
            <div>
                <i className="far fa-plus-square fs-3 " ></i>
                <p>COVID-19 Information Center</p>
            </div>
            <div>
                <i className="bi bi-flag fs-3 "></i>
                    <p>Pages</p>
            </div>
            <div>
                <i className="bi bi-people-fill fs-3 "> </i>
                <p>Friends</p>
            </div>
            <div>
                <i className="bi bi-chat-left-text-fill  fs-3 "></i>
                <p>Messenger</p>
            </div>
            <div>
                <i className="fas fa-store fs-4 " ></i>
                <p>Marketplace</p>
            </div>
            <div>
                <i className="fas fa-video fs-4 " ></i>
                <p>Videos</p>
            </div>
            <div>
                <i className="fas fa-chevron-down  fs-4 "></i> 
                <p>More</p>
            </div>
        </div>
    )
}

export default Sidebar
