import React from 'react';
import './CameraFeed.css';

const CameraFeed = ({ 
  title = "Cam 1", 
  isLarge = true,
  streamUrl = null,
  className = ""
}) => {
  return (
    <div className={`camera-feed ${isLarge ? 'large' : 'small'} ${className}`}>
      <div className="camera-header">
        <span className="camera-title text-shadow">{title}</span>
        <div className="status-indicator">
          <div className={`status-dot ${streamUrl ? 'connected' : 'disconnected'}`}></div>
          <span className="status-text">
            {streamUrl ? 'LIVE' : 'OFFLINE'}
          </span>
        </div>
      </div>
      
      <div className="video-container">
        {streamUrl ? (
          <video
            src={streamUrl}
            autoPlay
            muted
            playsInline
            className="video-element"
          />
        ) : (
          <div className="no-video-placeholder">
            <div className="rainbow-screen rainbow-bg"></div>
            <div className="no-video-text">
              <span className="text-shadow">No video available</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="camera-footer">
        <div className="resolution-info">
          {isLarge ? '1920x1080' : '640x480'}
        </div>
        <div className="fps-counter">
          {streamUrl ? '30 FPS' : '0 FPS'}
        </div>
      </div>
    </div>
  );
};

export default CameraFeed;
