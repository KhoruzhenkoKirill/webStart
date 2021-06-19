import {useEffect, useState} from "react";

export function usePosition() { //location
    const [coordinates, setCoordinates] = useState({
        latitude: null,
        longitude: null,
    });

    useEffect(
        () => {
            navigator.geolocation.getCurrentPosition(event => {
                setCoordinates({
                    latitude: event.coords.latitude,
                    longitude: event.coords.longitude,
                });
            });
        },
        []
    );

    return coordinates;
};

export default usePosition