import { Component, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("dashboardSubmenu") dashboardSubmenu;
  constructor(private renderer: Renderer){

   }

  toggleItemVisibility(event){
    console.log(event)
    if(event.target.classList.contains("dashboard-submenu__item"))
      return;
    if(this.dashboardSubmenu.nativeElement.classList.contains('open')) {
      this.renderer.setElementClass(this.dashboardSubmenu.nativeElement, "open", false);
    }
    else{
      this.renderer.setElementClass(this.dashboardSubmenu.nativeElement, "open", true);
      this.renderer.setElementClass(this.dashboardSubmenu.nativeElement, "close", false);
    }
     
  }

  highlightItem(event){
    this.renderer.setElementClass(event.target,"selected",true);

  }
}
