import { createAction, props } from '@ngrx/store';
import { Group } from '../models/group'

export const selectGroup = createAction(
  '[Group] Load Groups',
  (group: Group) => ({group})
);




