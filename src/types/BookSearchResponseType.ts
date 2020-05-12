import { BookType } from './BookType';

export type BookSearchResponseType = {
    kind: string,
    totalItems: number,
    items: BookType[]
}