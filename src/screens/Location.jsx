import GoogleMapReact from 'google-map-react';


export default function Location() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 20
    };

    return (
        <div className="w-screen py-20 bg-slate-500">
            <div className="h-[80vh] w-11/12 mx-auto">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
};