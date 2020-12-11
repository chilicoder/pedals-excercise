import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PlSettingsComponent extends Component {
    @service gamepad;

    get settings() {
        return this.gamepad.settings;
    }

    get gamepadAxis() {
        let gamepadId = this.settings.gamepadId;
        return this.gamepad.controller[gamepadId].axes;
    }

    @action submit() {
        return false;
    }

    @action
    changeGamepadId(event) {
        this.settings.gamepadId = Number(event.target.value);
    }

    @action
    changeAccAxis(event) {
        this.settings.accAxis = Number(event.target.value);
    }

    @action
    changeBrakeAxis(event) {
        this.settings.brakeAxis = Number(event.target.value);
    }
}
