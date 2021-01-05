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
        if (this.icon === 'pause') return './assets/icon/stop.svg';
        return './assets/icon/play_circle_outline.svg';
    }

    render() {
        return (
            <button>
                <img src={this.renderSvg()} alt={this.icon} />
            </button>
        );
    }
}