
import {Action, createReducer, on} from '@ngrx/store';
import * as GroupActions from '../actions/group.actions';
import {Group} from '../models/group';
export const groupFeatureKey = 'group';
export interface GroupState {
  selectedGroup: Group;
}
export const initialState: GroupState = {
  selectedGroup: null
};
export const groupReducer = createReducer(
  initialState,
  on(GroupActions.selectGroup,
    (state: GroupState, {group}) =>
      ({...state,
        selectedGroup:group
      }))
);
export function reducer(state: GroupState | undefined, action: Action): any {
  return groupReducer(state, action);
26
}