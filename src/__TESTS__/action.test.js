import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../redux/reducer/actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore();

describe('getAllData', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('There is async action getAllData', () => {
    store.dispatch(actions.getAllData()).then(() => {
      const expectedActions = [];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Dispatches the correct action and payload for SEARCH ACTION', () => {
    const expectedActions = [
      {
        payload: 'something',
        type: 'SEARCH',
      },
    ];

    store.dispatch(actions.setSearch('something'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
