import TrilhaJson from './3389426.map.json';
import api from '../services/api';

let cameraCoords = [TrilhaJson.config.config.mapState.longitude, TrilhaJson.config.config.mapState.latitude];
let geometryPropietes = TrilhaJson.datasets[0].data.allData[0][0].geometry;
let dataSourceSave = {
    type: 'Feature',
    geometry: geometryPropietes,
};
let nomeTrilha = 'Insira um nome';

let saveTrilha = {
    "title": nomeTrilha,
    "coordenadasCamera": {
        "latitute": TrilhaJson.config.config.mapState.longitude,
        "longitude": TrilhaJson.config.config.mapState.latitude,
    },
    "geometryPropietes": geometryPropietes
}


async function loadUsers() {
    const response = await api.post('/trilhas',
        {
            "title": "TrilhaTeste",
            "coordenadasCamera": {
                "latitute": TrilhaJson.config.config.mapState.longitude,
                "longitude": TrilhaJson.config.config.mapState.latitude,
            },
            "geometryPropietes": geometryPropietes
        }
    );
}
loadUsers()


