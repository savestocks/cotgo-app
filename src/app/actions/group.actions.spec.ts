import * as fromGroup from './group.actions';

describe('loadGroups', () => {
  it('should return an action', () => {
    expect(fromGroup.loadGroups().type).toBe('[Group] Load Groups');
  });
});
