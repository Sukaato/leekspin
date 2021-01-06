import { Component, h, Host, Prop, State } from '@stencil/core';

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

  componentDidLoad(): void {
    this.interval = setInterval(() => {
      if (this.playing) this.compteur();
    }, 1000);
  }

  disconnectedCallback(): void {
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
