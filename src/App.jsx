import React, { useEffect } from 'react';
import './styles/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ThreadPage from './pages/ThreadsPage';
import DetailPage from './pages/DetailPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { asyncPreloadProcess } from './states/isPreload/thunk';
import { asyncUnsetAuthUser } from './states/authUser/thunk';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
          <Loading />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<ThreadPage />} />
            <Route path="/threads/:threadId" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/leaderboards" element={<LeaderboardPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }
  return (
    <div className="app-container">
      <header>
        <Loading />
        <Navigation authUser={authUser} signOut={onSignOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ThreadPage />} />
          <Route path="/leaderboards" element={<LeaderboardPage />} />
          <Route path="/threads/:threadId" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
