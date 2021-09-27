import React from 'react';
// import { FacebookProvider, LoginButton, Like, EmbeddedPost, Page,  Group  } from 'react-facebook';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import './styles/App.css';
function App() {
  return (
    // <i className="bi bi-alarm"></i>
    <div className="">
      
      <Header />
      <div className='AppContainer d-flex position-relative'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>


      {/* <FacebookProvider appId="123456789">
        <LoginButton
          scope="email"
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider> */}
      {/* <FacebookProvider appId="541429153796125">
        <Like  href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider> */}
      {/* <FacebookProvider appId="541429153796125">
        <EmbeddedPost href="https://www.facebook.com/20531316728/posts/10154009990506729/" width="200"
        />
      </FacebookProvider> */}

      {/* <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fpoetry9122%2Fvideos%2F4658265134229831%2F&show_text=false&width=267&t=0" width="267" height="476" scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}

      
{/* 
      <i class="bi bi-facebook"></i>
<i class="fas fa-search"></i>
<i class="bi bi-house-door"></i>
<i class="bi bi-flag-fill"></i>
<i class="bi bi-collection-play-fill"></i>
<i class="bi bi-shop-window"></i>
      <i class="bi bi-people-fill"></i>
      <i class="bi bi-plus"></i>


<i class="fas fa-chevron-down"></i>

      
      <i class="far fa-user-circle"></i>
      <i class="bi bi-chat-right-fill"></i>
<i class="far fa-bell"></i> */}
      
      <br />
      {/* <i class="bi bi-flag"></i>
      <i class="far fa-plus-square"></i>
      <i class="far fa-user-circle"></i>
      <i class="bi bi-people-fill"></i>
      <i class="fas fa-store"></i>
      <i class="bi bi-chat-left-text-fill"></i>
      <i class="fas fa-video"></i>
<i class="fas fa-chevron-down"></i> */}

      <br />
      {/* <i class="far fa-user-circle"></i>
      <i class="fas fa-video"></i>
      <i class="bi bi-images"></i>
      <i class="bi bi-emoji-smile"></i> */}



      {/* <FacebookProvider appId="541429153796125">
        <Page href="https://www.facebook.com/imdb" tabs="timeline" width="300" height='500' />
      </FacebookProvider> */}





{/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMoHFWIndia%2Fposts%2F2011905035635560&show_text=true&width=500" width="500" height="778"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
      {/* <FacebookProvider appId="541429153796125">
        <Group
          href="https://www.facebook.com/groups/375934682909754"
          width="300"
          showSocialContext={true}
          showMetaData={true}
          skin="light"
        />
      </FacebookProvider> */}
      
      {/* <FacebookProvider appId="123456789">
        <Feed link="https://www.facebook.com">
            <button type="button">Share on Feed</button>
        </Feed>
      </FacebookProvider>   */}
      {/* <div
  className="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div> */}

    </div>
  );
}

export default App;
