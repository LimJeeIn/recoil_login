// import React from 'react';
// import { RecoilRoot } from 'recoil';
// import Login from './pages/login/Login';
// import { recoilPersist } from 'recoil-persist';

// const { updateState } = recoilPersist();

// function App() {
//   return (
//     <RecoilRoot initializeState={updateState}>
//       <Login />
//     </RecoilRoot>
//   );
// }

// export default App;

import React from 'react';
import SignUp from './pages/join/SignUp';
import Pages from './pages/Pages';
import JoinProfile from './pages/join/JoinProfile';
import { Route, Routes } from 'react-router-dom';
import { userIntroductionState } from './atoms/AtomData';
import { useRecoilState } from 'recoil';
import Login from './pages/login/Login';

function App() {
  // const [userIntroduction, setUserIntroduction] = useRecoilState(
  //   userIntroductionState,
  // );
  // console.log(userIntroductionState);
  // console.log(userIntroduction);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join/signup" element={<SignUp />} />
        <Route path="/join/profile" element={<JoinProfile />} />
      </Routes>
    </>
  );
}

export default App;
