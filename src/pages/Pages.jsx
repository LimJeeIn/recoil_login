import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import SocialLogin from './login/SocialLogin';
import SignUp from './join/SignUp';
import JoinProfile from './join/JoinProfile';
import Search from './search/Search';
import Profile from './profile/Profile';
import ProfileEdit from './profileEdit/ProfileEdit';
import Follower from './follow/Follower';
import Following from './follow/Following';
import UploadProduct from './uploadProduct/UploadProduct';
import PostDetail from './postDetail/PostDetail';
import UploadPost from './uploadPost/UploadPost';
import PostEdit from './postEdit/PostEdit';
import ChatList from './chat/ChatList';
import ChatRoom from './chat/ChatRoom';
import Error from './error/Error';
import Splash from './splash/Splash';
import ProductEdit from './productEdit/ProductEdit';

//만약 from 뒤에 빨간색 에러가뜬다면 vs코드 껏다가 다시켜보기.

function Pages() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2400);
    }
  }, []);

  return loading ? <Splash /> : <MainPages />;
}

function MainPages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/join/signup" element={<SignUp />} />
      <Route path="/join/profile" element={<JoinProfile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile/:accountname" element={<Profile />} />
      <Route path="/profile/:accountname/edit" element={<ProfileEdit />} />
      <Route path="/profile/:accountname/follower" element={<Follower />} />
      <Route path="/profile/:accountname/following" element={<Following />} />
      <Route path="/product" element={<UploadProduct />} />
      <Route path="/product/edit/:productId" element={<ProductEdit />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/uploadpost" element={<UploadPost />} />
      <Route path="/post/edit/:postId" element={<PostEdit />} />
      <Route path="/socialLogin" element={<SocialLogin />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/chat/:id" element={<ChatRoom />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Pages;

// function MainPages() 리턴에 원래처음에 <Route path="/" element={isLogin() ? <Home /> : <SocialLogin />}/>
//이거 추가되어야하는데, isLogin을 지금추가하면 파일이 업스니오류뜰까봐 안넣는게좋을듯.
