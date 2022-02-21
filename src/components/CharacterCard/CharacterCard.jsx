import './CharacterCard.css';

const CharacterCard = ({ character }) => {
    return (
        <div className="character__card">
            <div className='character__img'>
                <img className="character__image" src={character.imageUrl} alt={character.name} />
            </div>

            <div className="character__card__info">
                <h2 className="character__card__title">{character.name}</h2>
                {character.tvShows.length > 0 && (
                    <>
                        <h4 className='character__tv__shows'>TV Shows</h4>
                        <ul className='character__tv__list'>
                            {character.tvShows.map((show, index) => (
                                <li key={index}>{show}</li>
                            ))}
                        </ul>
                    </>
                )}

                {character.films.length > 0 && (
                    <>
                        <h4 className='character__films'>Films</h4>
                        <ul className='character__film__list'>
                            {character.films.map((film, index) => (
                                <li key={index}>{film}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default CharacterCard;