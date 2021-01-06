import { Component, h, Prop } from "@stencil/core";
import { LeekButtonType } from "./button.type";

@Component({
    tag: 'leek-button',
    styleUrl: 'leek-button.scss',
    shadow: true
})
export class LeekButton {

    /** type of icon displpayed */
    @Prop() icon: LeekButtonType = 'pause';

    private renderSvg() {
        return this.icon === 'pause' ? './assets/icon/stop.svg' : './assets/icon/play_circle_outline.svg';
    }

    render() {
        return (
            <button>
                <img src={this.renderSvg()} alt={this.icon} />
            </button>
        );
    }
}