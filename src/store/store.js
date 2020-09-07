// Начальное стостояние хранилища

import {createStore} from "redux";
import {mockFetch} from "../mock";

const initState = {
    currentGenre: null,
    genres: [],
};

// Набор событий. Имена произвольные

const ActionTypes = {
    LOAD_GENRES: `LOAD_GENRES`,
    SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
};

// Функция обработчик событий и обновляльщик хранилища

export const reducer = (state=initState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_GENRES:
            return {
                ...state,
                genres: [...state.genres, ...action.payload]
            };
        case ActionTypes.SET_CURRENT_GENRE:
            return {
                ...state,
                currentGenre: action.payload
            };
        default:
            return state;
    }
}

// Функции обёртки для событий. Можно и без них, но с ними хороший тон
// Просто функции возвращающие объект события

export const Actions = {
    loadGenres: (genres) => {
        return {
            type: ActionTypes.LOAD_GENRES,
            payload: genres
        }
    },

    setCurrentGenre: (genre) => {
        return {
            type: ActionTypes.SET_CURRENT_GENRE,
            payload: genre,
        }
    }
};


// Ассинхронные операции

export const Operations = {
    loadGenres: () => (dispatch, getState, api) => {
        const store = getState();
        const genresCount = store.genres.length;
        return mockFetch(`http://localhost/genres?limit=4&offset=${genresCount}`)
            .then((response) => {
                dispatch(Actions.loadGenres(response));
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
