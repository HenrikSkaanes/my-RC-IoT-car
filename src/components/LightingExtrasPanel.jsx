import React from 'react';
import { Lightbulb, Flashlight, Sparkles, AlertTriangle, Zap, Settings } from 'lucide-react';
import './LightingExtrasPanel.css';

const LightingExtrasPanel = ({ 
  toggleStates = {}, 
  simulateKeyPress = () => {},
}) => {
  const buttons = [
    { key: 'KeyT', label: 'Underglow', Icon: Sparkles, type: 'lights' },
    { key: 'KeyY', label: 'Beacon', Icon: AlertTriangle, type: 'warning' },
    { key: 'KeyU', label: 'Extra 1', Icon: Zap, type: 'extra' },
    { key: 'KeyI', label: 'Extra 2', Icon: Settings, type: 'extra' },
    { key: 'KeyO', label: 'Extra 3', Icon: Lightbulb, type: 'extra' },
    { key: 'KeyP', label: 'Extra 4', Icon: Flashlight, type: 'extra' },
  ];

  return (
    <div className="lighting-extras-panel">
      <div className="button-grid">
        {buttons.map(({ key, label, Icon, type }) => (
          <button
            key={key}
            className={`metallic-btn ${type} ${toggleStates[key] ? 'active' : 'inactive'}`}
            onClick={() => simulateKeyPress(key)}
          >
            <div className="btn-icon">
              <Icon size={20} strokeWidth={2} />
            </div>
            <div className="btn-content">
              <span className="btn-label">{label}</span>
              <span className="btn-status">{toggleStates[key] ? 'ON' : 'OFF'}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LightingExtrasPanel;
