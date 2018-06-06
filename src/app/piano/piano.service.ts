import { Injectable } from '@angular/core';
import { IPiano } from './piano';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class PianoService {

  pianoKeyMap: any = {};
  pianoKeys: IPiano[] = [];
  notes: any = {};

  constructor() {
    this.notes = {
      '2C': new Howl({ src: ['assets/medias/523-C.mp3'] }),
      '2Cs': new Howl({ src: ['assets/medias/545-C-sharp.mp3'] }),
      '2D': new Howl({ src: ['assets/medias/587-D.mp3'] }),
      '2Ds': new Howl({ src: ['assets/medias/622-D-sharp.mp3'] }),
      '2E': new Howl({ src: ['assets/medias/659-E.mp3'] }),
      '2F': new Howl({ src: ['assets/medias/698-F.mp3'] }),
      '2Fs': new Howl({ src: ['assets/medias/698-F-sharp.mp3'] }),
      '2G': new Howl({ src: ['assets/medias/783-G.mp3'] }),
      '2Gs': new Howl({ src: ['assets/medias/830-G-sharp.mp3'] }),
      '3A': new Howl({ src: ['assets/medias/880-A.mp3'] }),
      '3As': new Howl({ src: ['assets/medias/932-A-sharp.mp3'] }),
      '3B': new Howl({ src: ['assets/medias/987-B.mp3'] })
    };

    this.pianoKeys = [
      { whiteKeyId: 1, blackKeyId: 2 },
      { whiteKeyId: 3, blackKeyId: 4 },
      { whiteKeyId: 5 },
      { whiteKeyId: 6, blackKeyId: 7 },
      { whiteKeyId: 8, blackKeyId: 9 },
      { whiteKeyId: 10, blackKeyId: 11 },
      { whiteKeyId: 12 }
    ];

    this.pianoKeyMap = {
      1: ["2C"],
      2: ["2Cs"],
      3: ["2D"],
      4: ["2Ds"],
      5: ["2E"],
      6: ["2F"],
      7: ["2Fs"],
      8: ["2G"],
      9: ["2Gs"],
      10: ["3A"],
      11: ["3As"],
      12: ["3B"]
    }
  }

  getKeys() {
    return this.pianoKeys;
  }

  getNote(keyId: number) {
    const note = this.pianoKeyMap[keyId][0];
    return this.notes[note];
  }

}
