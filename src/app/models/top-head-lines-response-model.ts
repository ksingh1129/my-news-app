export interface TopHeadLinesResponseModel {
    status: string;
    totalResults: number;
    articles: Array<Article>;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface ErrorMessage {
    status: string;
    code: string;
    message: string;
}
