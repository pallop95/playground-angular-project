import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-flex-layout',
  templateUrl: './test-flex-layout.component.html',
  styleUrls: ['./test-flex-layout.component.css']
})
export class TestFlexLayoutComponent implements OnInit, OnDestroy {

  private mediaSub!: Subscription;
  private activeMediaQuery: string = '';

  constructor(private mediaObserver: MediaObserver) {
    // this.mediaSub = this.mediaObserver.asObservable()
    //   .pipe(
    //     distinctUntilChanged(
    //       (x: MediaChange[], y: MediaChange[]) => getTranslationDeclStmts(x) === getTranslationDeclStmts(y)
    //     )
    //   )
    //   .subscribe(
    //     (result) => {
    //       console.log(result);
    //     }
    // )
  }

  ngOnInit(): void {
    const getAlias = (MediaChange: MediaChange[]) => {
      return MediaChange[0].mqAlias;
    }

    this.mediaSub = this.mediaObserver
      .asObservable()
      .pipe(
        distinctUntilChanged(
          (x: MediaChange[], y: MediaChange[]) => getAlias(x) === getAlias(y)
        )
      )
      .subscribe((change) => {
        change.forEach((item) => {
          this.activeMediaQuery = item
            ? `'${item.mqAlias}' = (${item.mediaQuery})`
            : '';
          if (item.mqAlias === 'md') {
            this.loadMobileContent();
          }
          console.log('activeMediaQuery', this.activeMediaQuery);
        })
      });
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.mediaSub.unsubscribe();
  }

  loadMobileContent() {
    console.log('####################################');
    console.log('load mobile content');
  }
}
