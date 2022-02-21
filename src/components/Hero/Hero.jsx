import './Hero.css';

const Hero = () => {

    return (
        <div className="hero">
            <div className="blur"></div>
            <div className="hero__content">
                <h1 className="hero__title">
                    Personajes de <span>Disney</span>
                </h1>
                <p className="hero__subtitle">
                    Descubre los personajes de Disney. Todo lo que necesitas saber.
                    Desde la historia hasta las películas.
                </p>
                <a href='/' className="hero__button">
                    Ver personajes
                </a>
            </div>
        </div>
    );
};

export default Hero;