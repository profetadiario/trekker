import React from 'react';
import TrilhaTeste from './3385766.map.json'
import MapboxGL from '@react-native-mapbox-gl/maps';

export default function viewTrilha() {
    //console.log(TrilhaTeste);
    let cameraCoords = [TrilhaTeste.config.config.mapState.longitude, TrilhaTeste.config.config.mapState.latitude];
    let geometryCoords = TrilhaTeste.datasets[0].data.allData[0][0].geometry.coordinates;
    //let geometryCoords = dataAllData[0].geometry.coordinates;
    //console.log("so pra ter certeza", cameraCoords, geometryCoords);
    let dataSourceSave = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: geometryCoords,
        }
    };
    let viewItem = (
        <MapboxGL.ShapeSource
            id={'routeSource'}
            shape={dataSourceSave}
        >
            <MapboxGL.LineLayer
                id={'exampleLineLayer'}
                style={
                    {
                        lineColor: 'red',
                        lineWidth: 4,
                    }
                }
            >

            </MapboxGL.LineLayer>
        </MapboxGL.ShapeSource>
    );
    return viewItem;
}