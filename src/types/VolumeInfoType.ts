import { ImageLinksType } from "./ImageLinksType";

type IndustryIdentifier = {
    type: string,
    identifier: string
}

export type VolumeInfoType = {
    title: string,
    authors: string[]
    publisher?: string,
    publishedDate?: string,
    description?: string,
    industryIdentifiers?: IndustryIdentifier[],
    pageCount?: number,
    printType?: string,
    categories?: string[],
    averageRating?: number,
    ratingsCount?: number,
    maturityRating?: string,
    imageLinks?: ImageLinksType
}