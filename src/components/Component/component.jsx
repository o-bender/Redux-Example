import React from "react";


// Компонент
// genres и currentGenre придут из стора благодаря функции адаптеру mapStateToProps
// setCurrentGenre и loadGenres придут из стора благодаря функции адаптеру mapDispatchToProps

const Component = ({genres, currentGenre, setCurrentGenre, loadGenres, ...props}) => {
    return <div>
        <button type={`button`} onClick={() => loadGenres()}>Load more</button>
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
};

export default Component;