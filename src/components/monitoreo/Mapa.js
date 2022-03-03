import React from 'react';

import { MapContainer, TileLayer, ZoomControl, LayerGroup, Marker, Popup, Circle, SVGOverlay, LayersControl } from 'react-leaflet';

import ReactLeafletGoogleLayer from "react-leaflet-google-layer";


const Mapa = () => {

    const { BaseLayer } = LayersControl;

    const position = [-45.131166, -61.632]
    const bounds = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    return (
        <MapContainer center={[-43, -63]} zoom={4} zoomControl={false} att>
            <ZoomControl position='bottomright' />
            <LayersControl>
                <BaseLayer checked name="Mapa de Google">
                    <ReactLeafletGoogleLayer apiKey='AIzaSyC6Q679VOoSWEysynH1T7l32GybA3Ile1M' type={'hybrid'} />
                </BaseLayer>
                <BaseLayer checked name="Mapa Argentino">
                    <TileLayer
                        attribution='Argenmap v2 - Instituto Geográfico Nacional'
                        url="http://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png"
                    />
                </BaseLayer>
            </LayersControl>
        </MapContainer>
    );
};

export default Mapa;