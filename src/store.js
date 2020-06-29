// Начальное стостояние хранилища

import {createStore} from "redux";

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

function reducer(state=initState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_GENRES:
            return {
                ...state,
                genres: [...state.genres, ...action.genres]
            };
        case ActionTypes.SET_CURRENT_GENRE:
            return {
                ...state,
                currentGenre: action.currentGenre
            };
        default:
            return state;
    }
}

// Функции обёртки для событий. Можно и без них, но с ними хороший тон
// Просто функции возвращающие объект события

export const loadGenres = (genres) => {
    return {
        type: ActionTypes.LOAD_GENRES,
        genres: genres
    }
};

export const setCurrentGenre = (genre) => {
    return {
        type: ActionTypes.SET_CURRENT_GENRE,
        currentGenre: genre,
    }
};

// Экземпляр хранилища

export const store = createStore(reducer);