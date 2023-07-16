import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { useLocation, useParams } from 'react-router-dom';

const UbicacionMoto = () => {
  const location = useLocation();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [ubicacion, setUbicacion] = useState(null);

  useEffect(() => {
    const fetchUbicacion = async () => {
      try {
        const response = await fetch(`https://motos-app.onrender.com/api/position/moto/${id}`);
        const data = await response.json();
        const ultimaUbicacion = data[data.length - 1];
        setUbicacion(ultimaUbicacion);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUbicacion();
  }, [id]);

  const loadMap = () => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAGBh5nFmK-H5bfg_PNlZ7XBKQNRFbNVWA&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    document.head.appendChild(googleMapsScript);

    googleMapsScript.onload = createMap;
  };

  const createMap = () => {
    const mapOptions = {
      center: { lat: parseFloat(ubicacion.latitude), lng: parseFloat(ubicacion.longitude) }, // Coordenadas del marcador
      zoom: 12 // Nivel de zoom del mapa
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new window.google.maps.Marker({
      position: { lat: parseFloat(ubicacion.latitude), lng: parseFloat(ubicacion.longitude) }, // Coordenadas del marcador
      map: map
    });
  };

  useEffect(() => {
    if (ubicacion) {
      loadMap();
    }
  }, [ubicacion]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!ubicacion) {
    return <div>No se encontraron ubicaciones de la moto</div>;
  }

  return (
    <div className="flex">
      <Menu />
      <div className="flex-1">
        <div className="bg-blue-100 min-h-screen py-8">
          <div className="container mx-auto px-4">
          <h1>ULTIMA UBICACION DE LA MOTO</h1>
            <h2>ID de la moto: {id}</h2>
            <p>URL: {location.pathname}</p>
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbicacionMoto;