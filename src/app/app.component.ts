import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PoolCarz';
  loginTitle = "LogIN"
  constructor(){}
  ngOnInit(): void {
    console.log("App Component created and initialized")
  }

  login(){
    alert("Login Clicked")
  }
}
