import { useState, useEffect, useCallback } from 'react';

const useKeyboardControls = () => {
  // Throttle and steering state (-5 to 5 for both axes)
  const [throttle, setThrottle] = useState(0); // -5 (reverse) to 5 (forward)
  const [steering, setSteering] = useState(0); // -5 (left) to 5 (right)
  
  // Camera tilt state (-5 to 5 for vertical tilt)
  const [cameraTilt, setCameraTilt] = useState(0); // -5 (down) to 5 (up)
  
  // Camera and lighting toggles
  const [toggleStates, setToggleStates] = useState({
    KeyT: false,    // Underglow
    KeyY: false,    // Beacon
    KeyU: false,    // Extra 1
    KeyI: false,    // Extra 2
    KeyO: false,    // Extra 3
    KeyP: false,    // Extra 4
    Digit1: false,  // Camera 1
    Digit2: false,  // Camera 2
    Digit3: false   // Camera 3
  });

  // Currently pressed keys for visual feedback
  const [pressedKeys, setPressedKeys] = useState(new Set());

  const keyMappings = {
    'w': 'throttle_up',
    's': 'throttle_down', 
    'a': 'steering_left',
    'd': 'steering_right',
    'q': 'camUp',
    'e': 'camDown',
    '1': 'frontLight',
    '2': 'flashingLights'
  };

  const handleKeyDown = useCallback((event) => {
    const key = event.code; // Use event.code for better key detection
    
    // Prevent default for our control keys
    const controlKeys = ['KeyW', 'KeyS', 'KeyA', 'KeyD', 'KeyQ', 'KeyE', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyR', 'Digit1', 'Digit2', 'Digit3'];
    if (controlKeys.includes(key)) {
      event.preventDefault();
    }

    // Add to pressed keys for visual feedback
    setPressedKeys(prev => new Set(prev).add(key));

    // Handle throttle (w/s) - incremental changes
    if (key === 'KeyW') {
      setThrottle(prev => Math.min(5, prev + 1));
    } else if (key === 'KeyS') {
      setThrottle(prev => Math.max(-5, prev - 1));
    }

    // Handle steering (a/d) - incremental changes  
    else if (key === 'KeyA') {
      setSteering(prev => Math.max(-5, prev - 1));
    } else if (key === 'KeyD') {
      setSteering(prev => Math.min(5, prev + 1));
    }

    // Handle camera tilt (q/e) - incremental changes
    else if (key === 'KeyQ') {
      setCameraTilt(prev => Math.min(5, prev + 1)); // Q = tilt up
    } else if (key === 'KeyE') {
      setCameraTilt(prev => Math.max(-5, prev - 1)); // E = tilt down
    }

    // Handle toggle keys (lighting, camera, extras) - excluding Q and E which are now camera tilt
    else if (['KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP'].includes(key)) {
      setToggleStates(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }

    // Handle reset
    else if (key === 'KeyR') {
      setThrottle(0);
      setSteering(0);
      setCameraTilt(0);
    }
  }, []);

  const handleKeyUp = useCallback((event) => {
    const key = event.code;
    
    // Remove from pressed keys
    setPressedKeys(prev => {
      const newSet = new Set(prev);
      newSet.delete(key);
      return newSet;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // Helper function to check if key is pressed
  const isPressed = (key) => pressedKeys.has(key);

  // Manual controls for UI buttons
  const simulateKeyPress = (key) => {
    // Handle toggle states for buttons
    if (['KeyQ', 'KeyE', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO'].includes(key)) {
      setToggleStates(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
    
    // Add visual feedback
    setPressedKeys(prev => new Set(prev).add(key));
  };

  const simulateKeyRelease = (key) => {
    setPressedKeys(prev => {
      const newSet = new Set(prev);
      newSet.delete(key);
      return newSet;
    });
  };

  // Reset functions
  const resetThrottle = () => setThrottle(0);
  const resetSteering = () => setSteering(0);
  const resetCameraTilt = () => setCameraTilt(0);
  const resetAll = () => {
    setThrottle(0);
    setSteering(0);
    setCameraTilt(0);
  };

  return {
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
    resetAll,
    setThrottle,
    setSteering,
    setCameraTilt
  };
};

export default useKeyboardControls;
