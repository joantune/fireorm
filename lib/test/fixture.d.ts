export declare class Coordinates {
    latitude: number;
    longitude: number;
}
export declare class FirestoreDocumentReference {
    id: string;
    path: string;
}
export declare class AlbumImage {
    id: string;
    url: string;
}
export declare class Album {
    id: string;
    name: string;
    releaseDate: Date;
    comment?: string;
}
export declare class Band {
    id: string;
    name: string;
    formationYear: number;
    lastShow: Date;
    lastShowCoordinates?: Coordinates;
    genres: Array<string>;
}
export declare const getInitialData: () => ({
    id: string;
    name: string;
    formationYear: number;
    lastShow: Date;
    lastShowCoordinates: {
        latitude: number;
        longitude: number;
    };
    genres: string[];
    albums: {
        id: string;
        name: string;
        releaseDate: Date;
        images: {
            id: string;
            url: string;
        }[];
    }[];
} | {
    id: string;
    name: string;
    formationYear: number;
    lastShow: Date;
    genres: string[];
    albums: {
        id: string;
        name: string;
        releaseDate: Date;
        images: {
            id: string;
            url: string;
        }[];
    }[];
    lastShowCoordinates?: undefined;
})[];
export declare const getBandFixture: () => Band[];
export declare const getFixture: () => {
    __collection__: {
        [x: string]: {
            __doc__: object;
        };
    };
};
