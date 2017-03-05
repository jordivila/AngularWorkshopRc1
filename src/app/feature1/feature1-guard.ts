import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class Feature1Guard implements CanActivate {

    constructor() { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {

        return new Promise((resolve) => {
            setTimeout(() => { resolve(false); }, 10);
        });
    }
}
