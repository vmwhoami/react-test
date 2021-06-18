import moxios from 'moxios';
import makeMockStore from './utils';
import * as actions from '../redux/reducer/actions';

const store = makeMockStore({
  data: null,
  errors: false,
  search: '',
  errorsObj: {},
});

const mockSuccess = data => ({ status: 200, response: { data } });
// const mockError = error => ({ status: 500, response: error });

describe('Get data', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('Get data successfully', () => {
    const data = {
      data: ['an array', 'of', 'elements'],
      errors: false,
      search: '',
      errorsObj: {},
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(data));
    });
    const expected = [actions.getData(data)];
    store.dispatch(actions.getAllData()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expected);
    });
  });
});
