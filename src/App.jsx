import React, { useState } from 'react';
import Signup from './pages/Signup';
import './styles.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="container">
        <div className="form-section">
            <header>
                <h1>StudyHub</h1>
            </header>
            <main>
                
                {showLogin ? <Login /> : <Signup />}
                <div className="image-buttons">
                    <button onClick={toggleForm} className="img-btn">{
            showLogin
              ? 'Ir a Sign Up'
              : 'Ir a Log In'
          }</button>
                </div>
            </main>
        </div>
    <div className="image-section">
        <div className="cube-container">
            <div className="cube">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>

    </div>
</div>
  );
}

export default App;