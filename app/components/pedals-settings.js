import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PlSettingsComponent extends Component {
    @service gamepad;

    get settings() {
        return this.gamepad.settings;
    }

    get axes() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    get gamepadAxis() {
        let gamepadId = this.settings.get('gamepadId');
        let controller = this.gamepad.controller;
        return (typeof controller == 'object') ? controller[gamepadId].axes : 0;
    }

    @action submit() {
        return false;
    }

    @action
    changeGamepadId(event) {
        this.settings.set('gamepadId', Number(event.target.value));
    }

    @action
    changeAccAxis(event) {
        this.settings.set('accAxis', Number(event.target.value));
    }

    @action
    changeBrakeAxis(event) {
        this.settings.set('brakeAxis', Number(event.target.value));
    }
}
