import { YMaps, Map } from '@pbe/react-yandex-maps';
import './map.sass'
function Mapp() {
    return (
        <YMaps>
            <div className="map__body">
                <Map width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
        </YMaps>
    );
}

export default Mapp;