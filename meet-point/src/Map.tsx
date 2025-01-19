import { buffer } from "@turf/buffer";
import { point } from "@turf/helpers";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

//To make this work, enable location services in your browser and reload
export default function Map() {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [buffered, setBuffered] = useState<any>(null);

    useEffect(() => {
        //Need to do it like this because we use the browser's geolocation api which is async
        navigator.geolocation.getCurrentPosition((pos) => {
            const newPos: [number, number] = [pos.coords.longitude, pos.coords.latitude];
            const pointer = point(newPos);
            const bufferer = buffer(pointer, 0.5);
            setPosition(newPos);
            setBuffered(bufferer);
        });
        console.log(position);
    }, []);

    if (!position || !buffered) {
        //Need this for prefetching dont remove
        return <div>Loading...</div>;
    }

    return (
        //center property does exist lint just doesnt like it idk why
        <MapContainer  center={[position[1], position[0]]} zoom={15} style={{ height: 400, width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={buffered} />
        </MapContainer>
    );
}