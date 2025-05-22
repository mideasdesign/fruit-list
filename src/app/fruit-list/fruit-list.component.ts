import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruit-list',
  standalone:true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl:'./fruit-list.component.html',
  styleUrl: './fruit-list.component.scss'
})

export class FruitListComponent {

  fruitlistdata = inject(FruitlistdataService)

  
addComment(comment:string, index:number){
this.fruitlistdata.addCommentToFruit(comment, index);
  }
}
