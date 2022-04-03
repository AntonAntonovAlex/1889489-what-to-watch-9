import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import Logo from './logo';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Logo/>
      </HistoryRouter>,
    );

    expect(screen.getByText(/W/i)).toBeInTheDocument();
    expect(screen.getByText(/T/i)).toBeInTheDocument();
  });
});
