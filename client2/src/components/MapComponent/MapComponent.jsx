import { YMaps, Map, Polyline } from '@pbe/react-yandex-maps';

import React, {useEffect, useState} from 'react';
import axios from "axios";
import * as path from "path";

function MapComponent({modal, setModal, setPathId, setPathName}) {
    const [paths, setPath] = useState([])
    const getRoutes = async () => {
        const { data } = await axios.get('/bikePaths');
        setPath(data);
    }
    const handleClick = (e, id, name) => {
        setModal(true);
        setPathId(id);
        setPathName(name);
    }

    function wrapAttributesInQuotes(jsonString) {
        // Ищем все названия атрибутов без кавычек и добавляем кавычки
        jsonString = jsonString.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
        return jsonString;
    }

    useEffect(() => {
        getRoutes()
    }, []);

    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [55.72, 37.44],
                    zoom: 10,
                }}
                width={"100%"}
                height={"90vh"}
            >
                {paths.map((item) => {
                    let pathCoords = JSON.parse(wrapAttributesInQuotes(item.geoData.replaceAll('=', ':').split(']]]')[0] + ']]]}')).coordinates[0]
                    pathCoords = pathCoords.map((item) => [item[1], item[0]])
                    return <Polyline
                        key={item.path_id}
                        onClick={(e) => {handleClick(e, item.path_id, item.Name)}}
                        geometry={pathCoords}
                        options={{
                            balloonCloseButton: false,
                            strokeColor: "#000",
                            strokeWidth: 4,
                            strokeOpacity: 0.5,
                        }}
                    />
                })}
            </Map>
        </YMaps>
    )
}

export default MapComponent;