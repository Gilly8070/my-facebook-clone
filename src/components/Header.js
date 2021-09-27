import React from 'react'
import '../styles/Header.css'
const Header = () => {
    return (
        <div className='headerContainer d-flex   justify-content-between bg-white position-fixed'>
            <div className='d-flex'>
                 {/* d-flex col-8 col-md-4 col-lg-3 */}
            <i className="bi bi-facebook fa-3x ms-2 ms-sm-2 ms-lg-3 align-self-center text-primary"></i>
                <div className='headerInputContainer  p-2
                    ms-sm-3 ms-3 ms-xl-3 align-self-center rounded-pill'>
                    <i className="fas fa-search "></i>
                    <input className='headerInput ms-2 border-0 '  type="text" placeholder='Search Facebook' />
                </div>
            </div>
            {/* col-md-5 col-lg-7  */}
            <div className=' d-none d-lg-flex   justify-content-between align-items-center'>
                <div className='middleIconContainer '>
                    <i className="bi bi-house-door-fill fa-2x  middleIcon currentIn"></i>
                    {/* me-3 me-xl-5 */}
                </div>
                <div className='middleIconContainer'>
                    <i className="bi bi-flag-fill fa-2x middleIcon"></i>
                    {/* mx-5 mx-xl-5 */}
                </div>
                <div className='middleIconContainer'>
                    <i className=" bi bi-collection-play-fill fa-2x middleIcon"></i>
                    {/* mx-4 mx-xl-5 */}
                </div>
                <div className='middleIconContainer'>
                    <i className="bi bi-shop-window fa-2x middleIcon"></i>
                    {/* mx-5 mx-xl-5 */}
                </div>
                <div className='middleIconContainer'>
                    <i className="bi bi-people-fill fa-2x middleIcon"></i>
                    {/* ms-3 ms-xl-5 */}
                </div>
                
            </div>
            {/* col-3 col-md-2 col-lg-2 */}
            <div className='d-none d-md-flex  justify-content-between align-items-center '>
                {/* ms-lg-1 mx-xl-2 */}
                    <i className=" far fa-user-circle fa-3x  d-none d-xl-block text-dark rightSideIcon "></i>
                <p className='d-none d-xl-block mt-3 ms-2 me-xl-2  text-dark'>Zaid Shaikh</p>
                <div className='rightSideIconContainer'>
                    {/* <i className=" bi bi-plus fa- rightSideIcon"></i> */}
                    <i class="fas fa-plus rightSideIcon"></i>
                </div>
                <div className='rightSideIconContainer'>
                    {/* <i className="  bi fa- bi-chat-right-fill   rightSideIcon"></i> */}
                    <i class="far fa-comment-alt rightSideIcon"></i>
                </div>
                <div className='rightSideIconContainer'>
                    <i className="far fa-bell rightSideIcon"></i> 
                </div>
                <div className='rightSideIconContainer'>
                    <i className="fas fa-chevron-down    rightSideIcon"></i>
                </div>
                </div>
        </div>
    )
}

export default Header
