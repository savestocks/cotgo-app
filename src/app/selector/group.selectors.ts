import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGroup from '../reducers/group.reducer';

export const selectGroupState = createFeatureSelector<fromGroup.GroupState>(
  fromGroup.groupFeatureKey,
);
export const selectedGroup = createSelector(
    selectGroupState,
  (state: fromGroup.GroupState) => state.selectedGroup
);