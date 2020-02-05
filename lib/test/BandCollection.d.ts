import { Album as AlbumEntity, Coordinates, FirestoreDocumentReference } from './fixture';
import { ISubCollection } from '../src/types';
declare class AlbumImage {
    id: string;
    url: string;
}
declare class Album extends AlbumEntity {
    name: string;
    images?: ISubCollection<AlbumImage>;
}
export declare class Band {
    id: string;
    name: string;
    formationYear: number;
    lastShow: Date;
    contactEmail?: string;
    lastShowCoordinates: Coordinates;
    genres: Array<string>;
    albums?: ISubCollection<Album>;
    relatedBand?: FirestoreDocumentReference;
    getLastShowYear(): number;
    getPopularGenre(): string;
}
export {};
