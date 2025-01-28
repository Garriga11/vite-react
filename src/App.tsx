import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>G19 Programs</h1>
      </header>

      {/* Main Content */}
      <main className="app-main">
        
        <h3>Contact: garriga@g19programs.com</h3>
        <p></p>
        <div className="video-container">
          <video controls>
            <source src="public/images/explosionHomePage.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2025 G19 Programs. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;


