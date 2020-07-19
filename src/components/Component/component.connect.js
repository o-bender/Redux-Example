import {Actions, Operations} from "../../store/store";
import {connect} from "react-redux";
import Component from "./component";

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
            dispatch(Actions.setCurrentGenre(genre));
        },
        // Асинхронное получение и обновление данных (например через fetch)
        loadGenres: () => {
            dispatch(Operations.loadGenres());
        }
    }
};

// Связываем компонент с хранилищем. На выходе получаем обычный React компонент

export default connect(mapStateToProps, mapDispatchToProps)(Component);
