import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  date = new Date();
  check:any = false; 
  activation:string = "Activate"; 
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  onToggleColorTheme(event){
    console.log(event.detail.checked);
    if (event.detail.checked) {
      /* document.body.setAttribute('color-theme', 'dark'); */
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      this.check=true;
      event.detail.checked=true;
      this.activation="Desactivate";
    } else {
      /* document.body.setAttribute('color-theme', 'light'); */
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      this.check=false;
      event.detail.checked=false;
      this.activation="Activate";
    }
  }

}
