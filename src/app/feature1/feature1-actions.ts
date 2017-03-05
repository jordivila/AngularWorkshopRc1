import { LoadingHelperService } from './../core/components/loading/loading-helper.service';
import { Injectable } from '@angular/core';
import { Action, ActionCreator } from 'redux';
import { Subscription } from 'rxjs/Subscription';
import { IFeature1Store } from './feature1-store';

export const CANACTIVATE_SET = 'CANACTIVATE_SET';
export const CANACTIVATE_ERROR = 'CANACTIVATE_ERROR';

export interface IFeature1Action extends Action {
    canActivate?: boolean;
    error?: string;
};

// tslint:disable-next-line
interface IGetState<S> { (): S; }


@Injectable()
export class Feature1Actions {

    private _userInfoGetSubscription: Subscription;

    constructor(private loadingService: LoadingHelperService) { }

    getUserRights = (jToken?: string) => {
        return (dispatch: any, getState: IGetState<IFeature1Store>) => {
            this.loadingService.show('Checking user permissions');
            setTimeout(() => {
                dispatch(this.setInfo(true));
                this.loadingService.hide();
            }, 3000);
        };
    }

    setInfo: ActionCreator<IFeature1Action> =
    (data: boolean) => ({
        type: CANACTIVATE_SET,
        canActivate: data
    })

    setError: ActionCreator<IFeature1Action> =
    (error: string) => ({
        type: CANACTIVATE_ERROR,
        canActivate: false,
        error: error
    })

}
