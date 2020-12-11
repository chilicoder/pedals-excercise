import Component from '@glimmer/component';
import { action } from "@ember/object";
import Plotly from 'plotly.js';
import { inject as service } from '@ember/service';

export default class PlChartComponent extends Component {
    @service gamepad;

    acc = [Math.random() * 2];
    brake = [Math.random() * 2];
    time = [new Date()];

    @action
    setupPlot(element) {
        setInterval(this._getLastPositins.bind(this), 25);
        setInterval(this._replot.bind(this, element), 100);
    }

    _replot(element) {
        Plotly.newPlot(element, [{
            x: this.time,
            y: this.acc
        }], {
            margin: { t: 0 }
        });
    }

    _getLastPositins() {
        // let lastValues = this.gamepad.getLastPositions();
        let lastAcc = this.acc[this.acc.length-1];
        let lastBrake = this.brake[this.brake.length-1];
        // let lastAcc = this.acc[this.acc.length-1];
        this.acc.push(lastAcc + Math.random() * 2 - 1);
        this.brake.push(lastBrake + Math.random() * 2 - 1);
        this.time.push(new Date());
        // let brake = Math.random() * 100;
        // let time = new Date();

        // positions.push({ acc, brake, time })

        this.acc = this.acc.slice(-500)
        this.brake = this.brake.slice(-500)
        this.time = this.time.slice(-500)


    }

}
