import { useAppSelector } from '../../hooks';
import { getUserFilms } from '../../store/film-data/selectors';
import { Film } from '../../types/film';
import Filmslist from '../films-list/films-list';
import Footer from '../footer/footer';
import HeadUser from '../head-user/head-user';
import Logo from '../logo/logo';

function UserList(): JSX.Element {

  const filmsList: Film[] = useAppSelector(getUserFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <HeadUser/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <Filmslist films={filmsList}/>
      </section>
      <Footer/>
    </div>
  );
}

export default UserList;
