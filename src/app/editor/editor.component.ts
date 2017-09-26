import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  text = '';
  options: any = {maxLines: 1000, printMargin: false};

  onChange(code) {
    console.log('new code', code);
  }
}
