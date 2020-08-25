import React from 'react';
import TrilhaJson from './3385766.map.json';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

export default function viewTrilha() {
    const infosTrilha = ({
        camera: cameraCoords,
        info: dataSourceSave,
    })
    //console.log(TrilhaJson);
    let cameraCoords = [TrilhaJson.config.config.mapState.longitude, TrilhaJson.config.config.mapState.latitude];
    let geometryPropietes = TrilhaJson.datasets[0].data.allData[0][0].geometry;
    //let geometryCoords = dataAllData[0].geometry.coordinates;
    //console.log("so pra ter certeza", cameraCoords, geometryPropietes);
    let dataSourceSave = {
        type: 'Feature',
        geometry: geometryPropietes,
    };
    let viewItem = (
        <View>
            <MapboxGL.Camera

                zoomLevel={15}
                centerCoordinate={cameraCoords}
            >

            </MapboxGL.Camera>
            <MapboxGL.ShapeSource
                id={'routeSource'}
                shape={dataSourceSave}
            >
                <MapboxGL.LineLayer
                    id={'exampleLineLayer'}
                    style={
                        {
                            lineColor: 'red',
                            lineWidth: 5,
                        }
                    }
                >

                </MapboxGL.LineLayer>
            </MapboxGL.ShapeSource>
        </View>
    );
    return viewItem;
}
