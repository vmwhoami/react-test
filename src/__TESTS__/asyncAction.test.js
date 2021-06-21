import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../redux/reducer/actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
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
});
