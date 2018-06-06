import { Component, OnInit } from '@angular/core';
import { IPiano } from './piano';
import { PianoService } from './piano.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {

  pianoKeys: IPiano[];

  constructor(private pianoService: PianoService) { }

  ngOnInit() {
    this.pianoKeys = [...this.pianoService.getKeys()]
    
  }

  keyPress(keyId: number) {
    const sound = this.pianoService.getNote(keyId);
    sound.play();
  }
}
