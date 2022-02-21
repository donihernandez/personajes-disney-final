import CharacterCard from "../CharacterCard/CharacterCard";
import './CharacterList.css';

const CharacterList = ({ characters }) => {
    return (
        <div className="characters_section">
            <h2 className="characters_title">Listado de Personajes</h2>
            <div className="character__list">
                {characters?.map(character => (
                    <CharacterCard key={character._id} character={character} />
                ))}
            </div>
        </div>
    );
}

export default CharacterList;