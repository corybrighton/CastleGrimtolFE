import { PlayService } from './../play.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnInit {

  title = 'Welcome to Castle Grimtol';
  userInput = '';

  constructor(private play: PlayService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.play.play(this.userInput).subscribe(reply => this.title = reply.toString());
  }
}
