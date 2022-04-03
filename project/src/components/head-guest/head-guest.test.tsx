import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import HeadGuest from './head-guest';

describe('Component: HeadGuest', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <HeadGuest/>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
