import { Store, Action, Dispatch } from 'redux';
import { IAppState } from './app-store.service';

export const logger: any =
    (store: Store<IAppState>) =>
        (next: Dispatch<IAppState>) =>
            (action: Action) => {
                console.group(action.type);
                console.log('dispatching', action);
                const result = next(action);
                console.log('next state', store.getState());
                console.groupEnd();
                return result;
            };

export const crashReporter: any =
    (store: Store<IAppState>) =>
        (next: Dispatch<IAppState>) =>
            (action: Action) => {
                {
                    try {
                        return next(action);
                    } catch (err) {
                        console.error('Caught an exception!', err);
                        // send this error to your server by using any tool like Sentry
                        throw err;
                    }
                }
            };
