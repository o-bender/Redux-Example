import React from "react";
import {connect} from "react-redux";
import {loadGenres, setCurrentGenre} from "../../store";
import {fetchGenres} from "../../mock";

// Компонент
// genres и currentGenre придут из стора благодаря функции адаптеру mapStateToProps
// setCurrentGenre и loadGenres придут из стора благодаря функции адаптеру mapDispatchToProps

function Component({genres, currentGenre, setCurrentGenre, loadGenres, ...props}) {
    return <div>
        <button type={`button`} onClick={() => loadGenres(genres.length)}>Load more</button>
        <h2>{currentGenre}</h2>
        <ul>
            {
                genres.map((g) => {
                    return <li key={g}>
                        <a href={`#${g}`} onClick={() => setCurrentGenre(g)}>{g}</a>
                    </li>
                })
            }
        </ul>
    </div>;
}

// Функция создаёт объект который станет пропсом.
// Т.е. в функцию прилетит state из хранилища и нам надо взять необходимые параметры из хранилища
// и подогнать их под входные параметры (пропсы) компонента

const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        currentGenre: state.currentGenre,
    }
};

// Всё тоже самое, но для функций которые хотим пробросить как пропсы

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentGenre: (genre) => {
            dispatch(setCurrentGenre(genre));
        },
        // Асинхронное получение и обновление данных (например через fetch)
        loadGenres: (genresCount) => {
            fetchGenres({offset: genresCount}).then((genres) => {
                dispatch(loadGenres(genres));
            });
        }
    }
};

// Связываем компонент с хранилищем. На выходе получаем обычный React компонент

export const ComponentStoreConnected = connect(mapStateToProps, mapDispatchToProps)(Component);


export default Component;