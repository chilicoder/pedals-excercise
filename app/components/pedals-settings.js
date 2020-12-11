import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PlSettingsComponent extends Component {
    @service settings;
    @service gamepad;

    get gamepadAxis() {
        let gamepadId = this.settings.gamepadId;
        return this.gamepad.controller[gamepadId].axes;
    }

    @action submit() {
        return false;
    }
}
