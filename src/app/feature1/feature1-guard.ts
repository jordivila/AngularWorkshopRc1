// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Feature1Actions } from './feature1-actions';
// import { AppStoreService } from './../app-store.service';


// @Injectable()
// export class Feature1Guard implements CanActivate {

//     constructor(
//         private appStore: AppStoreService,
//         private feature1Actions: Feature1Actions) { }

//     canActivate(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot): Promise<boolean> {


//         return new Promise((resolve) => {
//             setTimeout(() => { resolve(true); }, 10);
//         });
//     }
// }





import { Feature1Actions } from './feature1-actions';
import { IFeature1Store } from './feature1-store';
import { AppStoreService } from './../app-store.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class Feature1Guard implements CanActivate {

    constructor(
        private appStore: AppStoreService,
        private feature1Actions: Feature1Actions) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {

        const self = this;

        return new Promise((resolve, reject) => {

            self.appStore.subscribe(() => {
                if (self.appStore.getState().Feature1Store.isInitialized) {
                    if (self.appStore.getState().Feature1Store.canActivateError) {
                        reject('Some error ocurred while getting permission');
                    } else {
                        resolve(self.appStore.getState().Feature1Store.canActivate);
                    }
                }
            });

            if (!this.appStore.getState().Feature1Store.isInitialized) {
                this.appStore.dispatch(this.feature1Actions.getUserRights('someTokenValue'));
            }

        });
    }
}
