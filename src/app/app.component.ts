import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, HomeComponent, CommonModule, ReversePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Skillup Angular';
  subtitle = 'My project';
  date = new Date();
  salary = 1000000;
  _obj = {'name':'NT'};
  isDisabled = false;

ChangeTitle(){
  this.title = "New Title"
}

updateTitle(event:any){
this.title = event.target.value
}

}
