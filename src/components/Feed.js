import React from 'react'
import '../styles/Feed.css'
const Feed = () => {
    return (
        <div className='feedContainer container-sm  d-flex flex-column '>
            {/* <input type="range" name="Points" min='0' max='100' step='5' id="" /> */}
            <div className='feedStatusContainer d-flex mx-auto mt-4 py-3 px-2'>
                <div className='mx-lg-2'>
                    <i className="far fa-user-circle fa-3x "></i>
                    <p>Dima Haydamakha</p>
                </div>
                <div className='mx-lg-2'>
                    <i className="far fa-user-circle fa-3x"></i>
                    <p>Maksym Haydamakha</p>
                </div>
                <div className='mx-lg-2'>
                    <i className="far fa-user-circle fa-3x"></i>
                    <p>Karina Senkivskyy</p>
                </div>
                {/* <div>
                    <i className="far fa-user-circle"></i>
                    <p>Petro Shanovskiy</p>
                </div> */}
                {/* 
                <div>
                    <i className="far fa-user-circle"></i>
                    <p>Dima Monatik</p>
                </div> */}
            </div>

            <div className='msgBoxContainer d-flex flex-column mx-auto mt-5 bg-white px-2'>
                <div className='feedMsgBox d-flex mx-auto mt-2 '>
                    <i className="far fa-user-circle feedIcon ms-1 mt-1 me-3"></i>
                    <div className='feedInputContainer'>
                    <input className=' feedInput1 rounded-pill mb-3 me-3 border-0 mt-1  px-3 py-2 ' type="text" placeholder="What's on your mind," />
                    <input className=' feedInput2 rounded-pill  px-3 py-2 me-3 border-0' type="text" placeholder='Image URL (Optional)' />
                        <button className='feedBtn  border-0   rounded-pill bg-primary text-white'>Post</button>
                    </div>
                </div>
                <div className='additionalFeatureContainer d-flex justify-content-between mx-auto '>
                    <div>
                        <i className="fas fa-video text-danger"></i>
                        <p>Live   Video</p>
                    </div>
                    <div>
                        <i className="bi bi-images text-primary"></i>
                        <p>Photo/ Video</p>
                    </div>
                    <div>
                        <i className="bi bi-emoji-smile text-warning"></i>
                        <p>Feeling/ Activity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed