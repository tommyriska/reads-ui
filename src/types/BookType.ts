import { ImageLinksType } from './ImageLinksType';

export type BookType = {
    id: string,
    title: string,
    subtitle?: string,
    authors: string[],
    publisher?: string,
    publishedDate: string,
    description: string,
    isbn10: string,
    isbn13: string,
    pageCount: number,
    categories?: string[],
    maturityRating: string,
    imageLinks?: ImageLinksType,
    language: string,
    status: string
}