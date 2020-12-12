import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';
import { tracked } from '@glimmer/tracking';

export default class GamepadService extends Service {
    @tracked
    settings = storageFor('settings');

    @tracked
    controllers = {};

    get accValue() {
        let result = 0;
        if ((typeof this.settings.gamepadId == 'number') && (typeof this.settings.accAxis == 'number')) {
            result = this.controllers[this.settings.gamepadId].axes[this.settings.accAxis]
        }
        return result;
    }

    get brakeValue() {
        let result = 0;
        if ((typeof this.settings.gamepadId == 'number') && (typeof this.settings.accAxis == 'number'))  {
            result = this.controllers[this.settings.gamepadId].axes[this.settings.brakeAxis]
        }
        return result;
    }

    constructor() {
        super(...arguments);
        window.addEventListener("gamepadconnected", this.connecthandler.bind(this));
        window.addEventListener("gamepaddisconnected", this.disconnecthandler.bind(this));
    }

    connecthandler(e) {
        let gamepad = e.gamepad;
        this.controllers[gamepad.index] = gamepad;
        if (typeof this.updateInterval == 'undefined') {
            this.updateInterval = setInterval(this.scangamepads.bind(this), 20)
        }

    }

    disconnecthandler(e) {
        let deletedControllerId = e.gamepad.index
        delete this.controller[deletedControllerId];
        if (length(Object.keys(this.controller)) == 0) {
            clearInterval(this.updateInterval);
            delete this.updateInterval;
        }
    }

    scangamepads() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
        for (var i = 0; i < gamepads.length; i++) {
            if (gamepads[i] && (gamepads[i].index in this.controllers)) {
                this.controllers[gamepads[i].index] = gamepads[i];
            }
        }
    }

}
