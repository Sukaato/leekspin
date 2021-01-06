import { Component, Event, EventEmitter, h, Host } from "@stencil/core";

@Component({
    tag: 'leek-input-range',
    styleUrl: 'leek-input-range.scss',
    shadow: true
})
export class LeekInputRange {

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
              min="0"
              max="100"
              step="1"
              onInput={ev => this.update(ev)} />
        </div>
        <img src="./assets/icon/volume_up.svg" alt="up"/>
      </Host>
    );
  }
}