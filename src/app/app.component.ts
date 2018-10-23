import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  thenBlock: TemplateRef<any>|null = null;

  show = true;

  @ViewChild('primaryBlock')
  primaryBlock: TemplateRef<any>|null = null;
  @ViewChild('secondaryBlock')
  secondaryBlock: TemplateRef<any>|null = null;

  ngOnInit() {
    console.log(this.primaryBlock);
    this.thenBlock = this.primaryBlock;
  }

  toggle() {
    this.show = !this.show;
    this.thenBlock = (this.show)
      ? this.primaryBlock
      : this.secondaryBlock;
  }

  onClick(value) {
    console.log(value);
  }
}
