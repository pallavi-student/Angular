import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldApp';
  logoPath: string ='assets/BL_logo_square_jpg (3).jpg';
  url = "https://www.bridgelabz.com/"

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }

  onClick($event : MouseEvent){
    console.log("Save Button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}