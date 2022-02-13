function FilmCard(): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src="img/bohemian-rhapsody.jpg"
          alt="Bohemian Rhapsody"
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
              Bohemian Rhapsody
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
