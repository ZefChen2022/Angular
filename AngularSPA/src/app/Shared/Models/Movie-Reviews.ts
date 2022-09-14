export interface MovieReviews{
    userId: number;
    movieReview: MovieReview[];
}

export interface MovieReview{
    userId:      number;
    movieId:     number;
    reviewText:  string;
    rating:      number;
    title:       string;
}