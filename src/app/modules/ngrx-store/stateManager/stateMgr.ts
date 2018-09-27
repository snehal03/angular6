import {Action} from '@ngrx/store';

import { StorePayload } from './model';

export const USERS = 'USERS';




export interface Action {
    type: any;
    payload?: any;
}

// Nav Bar Data

export class NgrxStore implements Action {
    readonly type;
    constructor(public payload: StorePayload) {}

}



/**
 *
 * @param state
 * @param action
 */

 // Nav Bar Reducer
export function changeNavState(state: any[], action: NgrxStore) {

    switch (action.type) {
        case USERS:
            return state = action.payload.users;
            default: return state;
    }

}

