import { Component,  OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GetCocktailsService } from './get-cocktails.service';
import { Cocktail } from './cocktail';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule,MatProgressSpinnerModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  cocktail: Cocktail | undefined;
  
  loading: boolean = false;
  errorMessage: any;

  private getCocktailsService = inject(GetCocktailsService);
  
  ngOnInit() {
    console.log(this.cocktail);
    this.getNewCocktail();
  }
  getNewCocktail(){
    this.loading = true;
    this.errorMessage = "";
    this.getCocktailsService.getCocktail().subscribe(
      { next:(response) => {
      this.cocktail = response.drinks[0];
      console.log(this.cocktail);
      }, error:(error) =>{   console.error('Request failed with error')
        this.errorMessage = error;
        console.log(this.errorMessage);
        this.loading = false; }, complete:()=> {
          console.log('Request completed')      //This is actually not needed 
          this.loading = false; 
        }
    })
  }
  
}
