import { Component, Event, EventEmitter, h, Host, Listen, State } from "@stencil/core";
import { LeekButtonType } from "../leek-button/button.type";

@Component({
  tag: 'leek-player',
  styleUrl: 'leek-player.scss',
  shadow: true
})
export class LeekPlayer {

  private audio!: HTMLAudioElement;

  @State() isPlaying = true;

  /** Event is emitted when the button is pressed */
  @Event() toggleState: EventEmitter<boolean>;

  @Listen('DOMContentLoaded', { target: "window" }) onContentFullyLoaded(): void {
    this.startStop(true);
  }

  private startStop(playing: boolean): void {
    this.isPlaying = playing;

    this.toggleState.emit(this.isPlaying);

    if (playing) {
      this.audio.play();
      this.updateVolume(50);
    } else {
      this.audio.pause();
    }
  }

  private updateVolume(value: number): void {
    this.audio.volume = value / 100;
  }

  private renderIcon(): LeekButtonType {
    return this.isPlaying ? "pause" : "play";
  }

  render() {
    return (
      <Host>
        <audio ref={elt => this.audio = elt} autoPlay loop >
          <source src="./assets/audio/loituma.mp3" type="audio/mp3" />
        </audio>
        <div id="img">
          <img src="./assets/img/loituma.gif" alt="gif"/>
        </div>
        <div id="control">
          <leek-button onClick={() => this.startStop(!this.isPlaying)} icon={this.renderIcon()} />
          <leek-input-range onUpdateVolume={ev => this.updateVolume(ev.detail)} />
        </div>
      </Host>
    );
  }
}