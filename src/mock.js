const mockedGenres = [`Genre1`, 'Genre2', 'Genre3', `Genre11`, 'Genre12', 'Genre13', `Genre21`, 'Genre22', 'Genre23'];
const mockedFilms = ['Film 1', 'Film 2', 'Film 3', 'Film 4', 'Film 5'];


const getMockData = (path) => {
    const url = new URL(path);
    const offset = parseInt(url.searchParams.get('offset') || 0, 10);
    const limit = parseInt(url.searchParams.get('limit') || 0, 10);
    console.log(url);
    switch (url.pathname) {
        case '/genres':
            return mockedGenres.slice(offset, offset + limit);
        case '/films':
            return mockedFilms.slice(offset, offset + limit);
    }
    throw new Error('404');
};


export const mockFetch = (path) => {
    try {
        return Promise.resolve(getMockData(path));
    } catch (e) {
        return Promise.reject(e);
    }
};
