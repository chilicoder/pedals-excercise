import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { get, set } from '@ember/object';

export default class GamepadService extends Service {

    // gamepadId = localStorage.get()0,
    // accAxis: 0,
    // brakeAxis: 0
    // @computed
    // get settings() {
    //     return {
    //       gamepadId: 0,
    //       accAxis: 2,
    //       brakeAxis: 3
    //     };
    // }

    @storageFor('settings') settings;

    @tracked
    controllers = {};

    get accValue() {
        let result = this.settings.get('counter');
        let gamepadId = this.settings.get('gamepadId');
        let accAxis = this.settings.get('accAxis');

        if ((typeof gamepadId == 'number') && (typeof accAxis == 'number')) {
          if (typeof this.controllers[gamepadId] == 'object') {
            result = this.controllers[gamepadId].axes[accAxis];
          }
        }
        return result;
    }

    get brakeValue() {
        let result = 0;
        let gamepadId = this.settings.get('gamepadId');
        let brakeAxis = this.settings.get('brakeAxis');

        if ((typeof gamepadId == 'number') && (typeof brakeAxis == 'number')) {
          if (typeof this.controllers[gamepadId] == 'object') {
            result = this.controllers[gamepadId].axes[brakeAxis];
          }
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
            this.updateInterval = setInterval(this.scangamepads.bind(this), 5)
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
