import { Component, Event, EventEmitter, h, Host, State } from "@stencil/core";
import { LeekButtonType } from "../leek-button/button.type";

@Component({
  tag: 'leek-player',
  styleUrl: 'leek-player.scss',
  shadow: true
})
export class LeekPlayer {

  private audio!: HTMLAudioElement;

  @State() isPlaying = false;

  /** Event is emitted when the button is pressed */
  @Event() toggleState: EventEmitter<boolean>;

  componentDidLoad(): void {
    this.startStop(false);
    this.updateVolume(50);
  }

  private startStop(playing: boolean): void {
    this.isPlaying = playing;

    this.isPlaying ? this.audio.play() : this.audio.pause();
    this.toggleState.emit(this.isPlaying);
  }

  private updateVolume(value: number): void {
    this.audio.volume = value / 100;
  }

  private renderIcon(): LeekButtonType {
    return this.isPlaying ? "pause" : "play";
  }

  private renderImg() {
    if (this.isPlaying) return <img src="./assets/img/loituma.gif" alt="gif"/>;

    return [
      <p>Audio is paused</p>,
      <img src="./assets/img/loituma.jpg" alt="gif"/>
    ];
  }

  render() {
    return (
      <Host>
        <audio ref={elt => this.audio = elt} autoPlay loop>
          <source src="./assets/audio/loituma.mp3" type="audio/mp3" />
        </audio>
        <div id="img">
          {this.renderImg()}
        </div>
        <div id="control">
          <leek-button onClick={() => this.startStop(!this.isPlaying)} icon={this.renderIcon()} />
          <leek-input-range onUpdateVolume={ev => this.updateVolume(ev.detail)} />
        </div>
      </Host>
    );
  }
}