import { Component } from '@angular/core';

@Component({
    selector:'app-left',
    templateUrl: `./left.Component.html`,
  styleUrls: [`./left.component.css`]
})


export class leftcomponent {

  title = "NEWS";  
  items:Array<string> = ['Sucesos ','Politica ','Economia ','Internacionales '];
}