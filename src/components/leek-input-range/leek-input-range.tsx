import { Component, Event, EventEmitter, h, Host, Prop } from "@stencil/core";

@Component({
    tag: 'leek-input-range',
    styleUrl: 'leek-input-range.scss',
    shadow: true
})
export class LeekInputRange {

  @Prop() disabled = false;
  @Prop() min = 0;
  @Prop() max = 100;
  @Prop() step = 1;

  @Event() updateVolume: EventEmitter<number>;

  private update(ev: Event) {
    const volume = parseInt((ev.target as HTMLInputElement).value);
    this.updateVolume.emit(volume);
  }

  render() {
    return (
      <Host id="slider">
        <img src="./assets/icon/volume_down.svg" alt="down"/>
        <div>
          <input
              type='range' 
              min={this.min}
              max={this.max}
              step={this.step}
              disabled={this.disabled}
              onInput={ev => this.update(ev)} />
        </div>
        <img src="./assets/icon/volume_up.svg" alt="up"/>
      </Host>
    );
  }
}