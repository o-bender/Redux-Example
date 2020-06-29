const mockedGenres = [`Genre1`, 'Genre2', 'Genre3', `Genre11`, 'Genre12', 'Genre13', `Genre21`, 'Genre22', 'Genre23'];


export const fetchGenres = function({offset=0, limit=2}) {
    return new Promise((r, rj) => {
        return r(mockedGenres.slice(offset, offset + limit));
    });
};
