import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input='';
  AppComponent(){
  }
  ngOnInit(){
    this.input='';
  }
  execOperator(val:string){
    var pattern = new RegExp('^[(]?[-]?([0-9]+)[)]??([(]?([-+/*]([0-9]))?([.,][0-9]+)?[)]?)*$');
    var dispEquation =this.input+val;
    var result=pattern.test(dispEquation);
    if(result){
    this.input=this.input==''?val:this.input+val;
    }
  }
  reset(){
    this.input='';
  }
}
