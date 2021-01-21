import { Component, h, Host, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'leek-timer',
  styleUrl: 'leek-timer.scss',
  shadow: true,
})
export class LeekTimer {

  private interval: any;

  /** Indicate if audio is playing, if true timer can increment */
  @Prop() playing: boolean;

  @State() hours = 0;
  @State() minutes = 0;
  @State() seconds = 0;

  @Watch('playing') onPlayingChange(newValue: boolean) {
    newValue ? this.createTimer() : this.deleteTimer();
  }

  componentDidLoad(): void {
    this.createTimer();
  }

  disconnectedCallback(): void {
    this.deleteTimer();
  }

  private createTimer(): void {
    this.interval = setInterval(() => {
      this.playing && this.compteur();
    }, 1000);
  }

  private deleteTimer(): void {
    clearInterval(this.interval);
  }

  private compteur() {
    this.seconds += 1;

    if (this.seconds == 60) {
      this.seconds = 0;
      this.minutes += 1;
    }

    if (this.minutes == 60) {
      this.minutes = 0;
      this.hours += 1;
    }
  }

  private format(value: number): string {
    const stringValue = value.toString();

    return stringValue.length < 2 ? `0${stringValue}` : stringValue;
  }

  render() {
    return (
      <Host>
        <p>You have spinning for</p>
        <p>{this.format(this.hours)} : {this.format(this.minutes)} : {this.format(this.seconds)}</p>
      </Host>
    );
  }
}
