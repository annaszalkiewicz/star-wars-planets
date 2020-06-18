export class Film {
    public title: string;
    public id: number;
    public openingCrawl: string;
    public director: string;
    public producer: string;
    public releaseDate: string;
    constructor(
        title: string,
        id: number,
        openingCrawl: string,
        director: string,
        producer: string,
        releaseDate: string
    ) {
        this.title = title;
        this.id = id;
        this.openingCrawl = openingCrawl;
        this.director = director;
        this.producer = producer;
        this.releaseDate = releaseDate;
    }
}
