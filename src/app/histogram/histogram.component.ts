import { Component, OnInit, OnDestroy } from '@angular/core';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import 'p5/lib/addons/p5.sound';

// declare const p5sound: any;

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit, OnDestroy {

  private p5;

  constructor() {
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
    this.createCanvas();
  }
  ngOnDestroy(): void {
    this.destroyCanvas();
  }
  private onWindowResize = (e) => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  }

  private destroyCanvas = () => {
    console.log('destroying canvas');
    this.p5.stopPlay();
    this.p5.noCanvas();
  }

  private drawing = function (sketch: any) {
    let sound, fft;
    // f5 preload
    sketch.preload = () => {
      sketch.soundFormats('wav', 'mp3');
      sound = sketch.loadSound('assets/a2002011001-e02.wav');
      fft = new p5.FFT();
    };


    // f5 setup
    sketch.setup = () => {
      const cnv = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight).parent('histogram');
      cnv.mouseClicked(sketch.togglePlay);
    };

    // f5 draw
    sketch.draw = () => {

      sketch.background(0);

      const spectrum = fft.analyze();
      sketch.noStroke();
      sketch.fill(0, 255, 0); // spectrum is green
      for (let i = 0; i < spectrum.length; i++) {
        let x = sketch.map(i, 0, spectrum.length, 0, sketch.width);
        let h = -sketch.height + sketch.map(spectrum[i], 0, 255, sketch.height, 0);
        sketch.rect(x, sketch.height, sketch.width / spectrum.length, h)
      }

      const waveform = fft.waveform();
      sketch.noFill();
      sketch.beginShape();
      sketch.stroke(255, 0, 0); // waveform is red
      sketch.strokeWeight(1);
      for (let i = 0; i < waveform.length; i++) {
        let x = sketch.map(i, 0, waveform.length, 0, sketch.width);
        let y = sketch.map(waveform[i], -1, 1, 0, sketch.height);
        sketch.vertex(x, y);
      }
      sketch.endShape();

      sketch.text('click to play/pause', 4, 10);
    };

    sketch.togglePlay = () => {
      if (sound.isPlaying()) {
        sound.pause();
      } else {
        sound.loop();
      }
    };
    sketch.stopPlay = () => {
      if (sound.isPlaying()) {
        sound.pause();
      }
    };
  }

}
