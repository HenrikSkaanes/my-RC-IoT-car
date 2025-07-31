import React from 'react';
import CameraFeed from './components/CameraFeed';
import ControlPanel from './components/ControlPanel';
import MapDisplay from './components/MapDisplay';
import LightingExtrasPanel from './components/LightingExtrasPanel';
import useKeyboardControls from './hooks/useKeyboardControls';
import './App.css';

function App() {
  const { 
    throttle,
    steering,
    cameraTilt,
    toggleStates, 
    isPressed,
    simulateKeyPress, 
    simulateKeyRelease,
    resetThrottle,
    resetSteering,
    resetCameraTilt,
    resetAll
  } = useKeyboardControls();

  const [isMapExpanded, setIsMapExpanded] = React.useState(false);

  return (
    <div className="app">
      <div className="app-main">
        <header className="app-header">
          <div className="header-content">
            <h1 className="app-title">RC Vehicle Control</h1>
            <div className="status-bar">
              <div className="status-item">
                <div className="status-dot connected"></div>
                <span>System Online</span>
              </div>
              <div className="status-item">
                <div className="status-dot connected"></div>
                <span>GPS Active</span>
              </div>
              <div className="status-item">
                <div className="status-dot disconnected"></div>
                <span>Video Offline</span>
              </div>
              <div className="status-item">
                <span>🔋 98%</span>
              </div>
            </div>
          </div>
        </header>

        <section className={`camera-section ${isMapExpanded ? 'with-expanded-map' : ''}`}>
          {!isMapExpanded ? (
            <>
              <CameraFeed 
                title="Main Camera" 
                isLarge={true}
                streamUrl={null} // No stream for now - shows rainbow placeholder
              />
              <CameraFeed 
                title="Rear View" 
                isLarge={false}
                streamUrl={null} // No stream for now - shows rainbow placeholder
              />
            </>
          ) : (
            <div className="expanded-map-container">
              <MapDisplay 
                lat={59.8745} 
                lng={10.6589}
                isExpanded={isMapExpanded}
                onToggleExpanded={setIsMapExpanded}
                className="expanded-map"
              />
            </div>
          )}
        </section>

        <section className="controls-section">
          <ControlPanel 
            throttle={throttle}
            steering={steering}
            cameraTilt={cameraTilt}
            toggleStates={toggleStates}
            isPressed={isPressed}
            simulateKeyPress={simulateKeyPress}
            simulateKeyRelease={simulateKeyRelease}
            resetThrottle={resetThrottle}
            resetSteering={resetSteering}
            resetCameraTilt={resetCameraTilt}
            resetAll={resetAll}
          />
        </section>

        <section className={`map-section ${isMapExpanded ? 'with-cameras' : ''}`}>
          {!isMapExpanded ? (
            <MapDisplay 
              lat={59.8745} 
              lng={10.6589}
              isExpanded={isMapExpanded}
              onToggleExpanded={setIsMapExpanded}
            />
          ) : (
            <div className="minimized-cameras">
              <CameraFeed 
                title="Main Camera" 
                isLarge={false}
                streamUrl={null}
                className="mini-camera"
              />
              <CameraFeed 
                title="Rear View" 
                isLarge={false}
                streamUrl={null}
                className="mini-camera"
              />
            </div>
          )}
        </section>

        <section className="future-section">
          <LightingExtrasPanel 
            toggleStates={toggleStates}
            simulateKeyPress={simulateKeyPress}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
