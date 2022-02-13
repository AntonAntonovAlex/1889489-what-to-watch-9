import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppScreenProps): JSX.Element {
  return (
    <MainScreen title = {title} genre = {genre} year = {year}/>
  );
}

export default App;
