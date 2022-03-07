import { shareReplay } from 'rxjs';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
@Injectable({
  providedIn: 'root'
})
export class BreakPoint {

  constructor(private breakpointObserver:BreakpointObserver){
  }
     // for small devices
  smallDevice$:Observable<boolean> = this.breakpointObserver.observe(['(max-width: 599px)'])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  padDevice$:Observable<boolean> = this.breakpointObserver.observe(['(min-width: 799px)'])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  largeDevice$:Observable<boolean> = this.breakpointObserver.observe(['(min-width: 1100px)'])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
}
