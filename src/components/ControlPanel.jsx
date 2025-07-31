import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import './ControlPanel.css';

const ControlPanel = ({ 
  throttle = 0, 
  steering = 0,
  cameraTilt = 0,
  toggleStates = {}, 
  isPressed = {},
  simulateKeyPress = () => {},
  simulateKeyRelease = () => {},
  resetThrottle = () => {},
  resetSteering = () => {},
  resetCameraTilt = () => {},
  resetAll = () => {}
}) => {  // Calculate progress bar percentages for visual indicators
  const getThrottleProgress = () => {
    if (throttle >= 0) {
      return {
        width: `${(throttle / 5) * 50}%`,
        left: '50%'
      };
    } else {
      return {
        width: `${(Math.abs(throttle) / 5) * 50}%`,
        left: `${50 - (Math.abs(throttle) / 5) * 50}%`
      };
    }
  };

  const getSteeringProgress = () => {
    if (steering >= 0) {
      return {
        height: `${(steering / 5) * 50}%`,
        bottom: '50%'
      };
    } else {
      return {
        height: `${(Math.abs(steering) / 5) * 50}%`,
        bottom: `${50 - (Math.abs(steering) / 5) * 50}%`
      };
    }
  };

  return (
    <div className="control-panel">
      {/* Vehicle Movement Controls */}
      <div className="control-section">
        <h3 className="section-title">Vehicle Controls</h3>
        
        <div className="vehicle-controls">
          {/* Crosshair Control Display */}
          <div className="crosshair-container">
            <div className="crosshair-display">
              {/* Grid dots for coordinates */}
              {Array.from({length: 11}, (_, i) => i - 5).map(x => 
                Array.from({length: 11}, (_, j) => j - 5).map(y => (
                  <div 
                    key={`${x}-${y}`}
                    className="grid-dot"
                    style={{
                      left: `${50 + (x / 5) * 40}%`,
                      top: `${50 - (y / 5) * 40}%`
                    }}
                  ></div>
                ))
              ).flat()}
              
              {/* Horizontal line (steering) */}
              <div className="crosshair-line horizontal"></div>
              
              {/* Vertical line (throttle) */}
              <div className="crosshair-line vertical"></div>
              
              {/* Crosshair indicators - positioned relative to main container */}
              <div 
                className="crosshair-indicator" 
                style={{
                  left: `${50 + (steering / 5) * 40}%`,
                  top: '50%'
                }}
              ></div>
              <div 
                className="crosshair-indicator" 
                style={{
                  left: '50%',
                  top: `${50 - (throttle / 5) * 40}%`
                }}
              ></div>
              
              {/* Center point */}
              <div className="crosshair-center"></div>
              
              {/* Intersection dot */}
              {(throttle !== 0 || steering !== 0) && (
                <div 
                  className="intersection-dot"
                  style={{
                    left: `${50 + (steering / 5) * 40}%`,
                    top: `${50 - (throttle / 5) * 40}%`
                  }}
                ></div>
              )}
              
              {/* Value displays */}
              <div className="crosshair-values">
                <div className="value-display throttle">
                  <span className="value-label">THR</span>
                  <span className="value-number">{throttle}</span>
                </div>
                <div className="value-display steering">
                  <span className="value-label">STR</span>
                  <span className="value-number">{steering}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Controls */}
        <div className="reset-controls">
          <button 
            className="reset-btn" 
            onClick={resetThrottle}
            title="Reset Throttle to 0"
          >
            Reset Throttle
          </button>
          <button 
            className="reset-btn" 
            onClick={resetSteering}
            title="Reset Steering to 0"
          >
            Reset Steering
          </button>
          <button 
            className="reset-btn" 
            onClick={resetAll}
            title="Reset All Controls"
          >
            Reset All
          </button>
        </div>
      </div>

      {/* Camera Controls */}
      <div className="control-section">
        <h3 className="section-title">Camera Controls</h3>
        <div className="camera-controls">
          <button
            className={`camera-btn ${isPressed.Digit1 ? 'active' : ''}`}
            onMouseDown={() => simulateKeyPress('Digit1')}
            onMouseUp={() => simulateKeyRelease('Digit1')}
            onMouseLeave={() => simulateKeyRelease('Digit1')}
          >
            <span className="key-hint">1</span>
            <span className="btn-label">Front Cam</span>
            <span className="btn-status">{isPressed.Digit1 ? 'ACTIVE' : 'STANDBY'}</span>
          </button>
          <button
            className={`camera-btn ${isPressed.Digit2 ? 'active' : ''}`}
            onMouseDown={() => simulateKeyPress('Digit2')}
            onMouseUp={() => simulateKeyRelease('Digit2')}
            onMouseLeave={() => simulateKeyRelease('Digit2')}
          >
            <span className="key-hint">2</span>
            <span className="btn-label">Rear Cam</span>
            <span className="btn-status">{isPressed.Digit2 ? 'ACTIVE' : 'STANDBY'}</span>
          </button>
          <button
            className={`camera-btn ${isPressed.Digit3 ? 'active' : ''}`}
            onMouseDown={() => simulateKeyPress('Digit3')}
            onMouseUp={() => simulateKeyRelease('Digit3')}
            onMouseLeave={() => simulateKeyRelease('Digit3')}
          >
            <span className="key-hint">3</span>
            <span className="btn-label">Side Cam</span>
            <span className="btn-status">{isPressed.Digit3 ? 'ACTIVE' : 'STANDBY'}</span>
          </button>
        </div>
      </div>

      {/* Camera Tilt Controls */}
      <div className="control-section">
        <h3 className="section-title">Camera Tilt</h3>
        <div className="camera-tilt-controls">
          <div className="tilt-buttons">
            <button
              className={`tilt-btn up ${isPressed.KeyQ ? 'active' : ''}`}
              onMouseDown={() => simulateKeyPress('KeyQ')}
              onMouseUp={() => simulateKeyRelease('KeyQ')}
              onMouseLeave={() => simulateKeyRelease('KeyQ')}
            >
              <div className="btn-icon">
                <ChevronUp size={18} strokeWidth={2.5} />
              </div>
              <div className="btn-content">
                <span className="btn-label">Up</span>
                <span className="key-hint">Q</span>
              </div>
            </button>
            <button
              className={`tilt-btn down ${isPressed.KeyE ? 'active' : ''}`}
              onMouseDown={() => simulateKeyPress('KeyE')}
              onMouseUp={() => simulateKeyRelease('KeyE')}
              onMouseLeave={() => simulateKeyRelease('KeyE')}
            >
              <div className="btn-icon">
                <ChevronDown size={18} strokeWidth={2.5} />
              </div>
              <div className="btn-content">
                <span className="btn-label">Down</span>
                <span className="key-hint">E</span>
              </div>
            </button>
          </div>
          
          <div className="tilt-indicator">
            <div className="tilt-scale">
              <div className="scale-marker top">+5</div>
              <div className="scale-marker center">0</div>
              <div className="scale-marker bottom">-5</div>
            </div>
            <div className="tilt-bar">
              <div className="tilt-fill" style={{
                height: `${((cameraTilt + 5) / 10) * 100}%`,
                background: cameraTilt > 0 ? 
                  'linear-gradient(180deg, #10b981, #059669)' : 
                  cameraTilt < 0 ? 
                  'linear-gradient(180deg, #ef4444, #dc2626)' : 
                  'linear-gradient(180deg, #6b7280, #4b5563)'
              }}></div>
              <div className="tilt-indicator-dot" style={{
                bottom: `${((cameraTilt + 5) / 10) * 100}%`
              }}></div>
            </div>
            <div className="tilt-value">{cameraTilt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
