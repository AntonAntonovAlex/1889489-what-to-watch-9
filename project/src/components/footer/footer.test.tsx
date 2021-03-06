import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Footer/>
      </HistoryRouter>,
    );

    expect(screen.getByText(/2019 What to watch Ltd/i)).toBeInTheDocument();
  });
});
