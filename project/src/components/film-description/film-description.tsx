import { useState } from 'react';
import { TabType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/film-data/selectors';
import Tabs from '../tabs/tabs';

function FilmDescription(): JSX.Element {
  const selectedFilm = useAppSelector(getFilm);

  const [typeTabs, setTypeTabs] = useState(TabType.Overview);
  const [activeClassFilm, setActiveClassFilm] = useState(TabType.Overview);

  const tabs = [TabType.Overview, TabType.Details, TabType.Reviews];

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab)=>(
            <li key={tab} className={`film-nav__item ${activeClassFilm === tab ? 'film-nav__item--active' : ''}`}>
              <a href="#todo" className="film-nav__link"
                onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                  evt.preventDefault();
                  setTypeTabs(tab);
                  setActiveClassFilm(tab);
                }}
              >
                {tab[0].toUpperCase() + tab.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {selectedFilm && <Tabs type={typeTabs}/>}
    </div>
  );
}

export default FilmDescription;
