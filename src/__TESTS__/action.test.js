import * as actions from '../redux/reducer/actions';
import * as types from '../redux/reducer/types';

describe('actions', () => {
  it('Is expected to set the search element to the specified string', () => {
    const data = 'someElement';
    const expectedAction = {
      type: types.SEARCH,
      payload: data,
    };
    expect(actions.setSearch(data)).toEqual(expectedAction);
  });
});
