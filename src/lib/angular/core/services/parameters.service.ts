import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
} from '@angular/router';

import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  private params: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event) => {
        let r: any = this.route;
        // we need to use fir st, or we will end up having
        // an increasing number of subscriptions after each route change.
        while (r.firstChild) {
          r = r.firstChild;
        }

        this.params = {};

        r.params.subscribe(params => {
          this.params = Object.assign(this.params, params);
        });

        r.queryParams.subscribe(queryParams => {
          this.params = Object.assign(this.params, queryParams);
        });
      });
  }

  getParams(): any {
    return this.params;
  }
}
