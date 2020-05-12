import { ImageLinksType } from './ImageLinksType';
import { VolumeInfoType } from './VolumeInfoType';

export type BookType = {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: VolumeInfoType
}