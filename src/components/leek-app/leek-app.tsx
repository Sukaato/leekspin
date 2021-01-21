import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'leek-app',
  styleUrl: 'leek-app.scss',
  shadow: true,
})
export class LeekApp {

  @State() isPlaying = true;

  render() {
    return (
      <Host>
        <header>
          <img src="/assets/icon/leek-64.png" alt=""/>
          <h1>Leekspin</h1>
        </header>

        <main>
          <leek-player onToggleState={e => this.isPlaying = e.detail} />
          <leek-timer playing={this.isPlaying} />
        </main>

        <footer>
          <p>Developed with <span id="heart">♥</span> by <a href="https://www.github.com/Sukaato">Sukaato</a></p>
        </footer>
      </Host>
    );
  }
}
