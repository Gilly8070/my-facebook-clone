import React from 'react'
import { FacebookProvider, Page,} from 'react-facebook';
import '../styles/Widget.css';
const Widget = () => {
    return (
        <div className='widgetContainer d-none d-md-flex'>
            <FacebookProvider appId="541429153796125">
                <Page href="https://www.facebook.com/imdb" tabs="timeline" width="300" height='600' />
            </FacebookProvider>
        </div>
    )
}

export default Widget;