import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapDisplay.css';

// Fix for default markers in Leaflet with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapDisplay = ({ 
  lat = 59.8745, 
  lng = 10.6589, 
  className = "",
  isExpanded = false,
  onToggleExpanded = () => {}
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Add a small delay to ensure DOM is ready
    const initMap = () => {
      // Initialize map with proper settings for rectangular container
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [lat, lng],
        zoom: 15,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true,
        touchZoom: true,
        preferCanvas: true, // Better performance
        zoomSnap: 0.5,
        zoomDelta: 0.5
      });

      // Use satellite imagery for better visibility
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 18
      }).addTo(mapInstanceRef.current);

      // Create custom RC car icon
      const carIcon = L.divIcon({
        html: `
          <div class="car-marker">
            <div class="car-dot"></div>
            <div class="car-pulse"></div>
          </div>
        `,
        className: 'custom-car-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // Add marker for RC car location
      markerRef.current = L.marker([lat, lng], { icon: carIcon })
        .addTo(mapInstanceRef.current)
        .bindPopup(`
          <div class="car-popup">
            <strong>RC Car Position</strong><br>
            <small>Enerhøgdveien 13B<br>1459 Nesodden, Norway</small><br>
            <small>Lat: ${lat.toFixed(6)}<br>Lng: ${lng.toFixed(6)}</small>
          </div>
        `);

      // Style zoom controls
      setTimeout(() => {
        const zoomControls = document.querySelectorAll('.leaflet-control-zoom a');
        zoomControls.forEach(control => {
          control.style.background = 'var(--bg-glass)';
          control.style.backdropFilter = 'var(--blur-medium)';
          control.style.webkitBackdropFilter = 'var(--blur-medium)';
          control.style.border = '1px solid var(--border-glass)';
          control.style.color = 'var(--text-primary)';
          control.style.borderRadius = '8px';
          control.style.margin = '2px';
        });
        
        // Ensure map fills container properly
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 100);
    };

    // Initialize map with a small delay
    setTimeout(initMap, 50);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng]);

  // Update marker position when coordinates change
  useEffect(() => {
    if (markerRef.current && mapInstanceRef.current) {
      markerRef.current.setLatLng([lat, lng]);
      mapInstanceRef.current.setView([lat, lng], mapInstanceRef.current.getZoom());
      
      // Update popup content
      markerRef.current.setPopupContent(`
        <div class="car-popup">
          <strong>RC Car Position</strong><br>
          <small>Enerhøgdveien 13B<br>1459 Nesodden, Norway</small><br>
          <small>Lat: ${lat.toFixed(6)}<br>Lng: ${lng.toFixed(6)}</small>
        </div>
      `);
    }
  }, [lat, lng]);

  const toggleExpanded = () => {
    onToggleExpanded(!isExpanded);
    // Invalidate map size after expansion/collapse
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 300);
  };

  return (
    <div 
      className={`map-display ${isExpanded ? 'expanded' : ''} ${className}`}
    >
      <div className="map-header">
        <div className="map-title">
          <span>GPS Tracking</span>
        </div>
        <div className="map-controls">
          {!isExpanded ? (
            <button className="expand-btn" onClick={toggleExpanded} title="Expand Map">
              ⛶
            </button>
          ) : (
            <button className="collapse-btn" onClick={toggleExpanded} title="Collapse Map">
              ×
            </button>
          )}
        </div>
        <div className="coordinates">
          <span className="coord-item">
            <span className="coord-label">LAT</span>
            <span className="coord-value">{lat.toFixed(6)}</span>
          </span>
          <span className="coord-item">
            <span className="coord-label">LNG</span>
            <span className="coord-value">{lng.toFixed(6)}</span>
          </span>
        </div>
      </div>
      
      <div className="map-container">
        <div ref={mapRef} className="leaflet-map"></div>
      </div>
      
      <div className="map-footer">
        <div className="signal-strength">
          <div className="signal-bars">
            <div className="bar active"></div>
            <div className="bar active"></div>
            <div className="bar active"></div>
            <div className="bar"></div>
          </div>
          <span>GPS Signal</span>
        </div>
        <div className="satellite-count">
          <span>🛰️ 8 satellites</span>
        </div>
      </div>
    </div>
  );
};

export default MapDisplay;
