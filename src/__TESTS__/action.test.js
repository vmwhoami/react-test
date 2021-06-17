import * as actions from '../redux/reducer/actions';
import * as types from '../redux/reducer/types';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const data = 'someElement';
    const expectedAction = {
      type: types.SEARCH,
      payload: data,
    };
    expect(actions.setSearch(data)).toEqual(expectedAction);
  });
});
