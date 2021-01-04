import Component from '@glimmer/component';
import { action } from "@ember/object";
import Plotly from 'plotly.js';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PlChartComponent extends Component {
    @service gamepad;

    @tracked
    lastAccValue = Math.random() * 100;
    @tracked
    lastBrakeValue = Math.random() * 100;

    acc = [this.lastAccValue];
    brake = [this.lastBrakeValue];
    time = [new Date()];

    @action
    setupPlot(element) {
        setInterval(this._getLastPositins.bind(this), 10);
        setInterval(this._replot.bind(this, element), 100);
    }

    _replot(element) {
        let now = Date.now();
        let start = new Date(now - 3000);
        let end = new Date(now + 2000);


        let layout = {
            xaxis: { range: [start, end] },
            yaxis: { range: [0, 100] },
            margin: { t: 0 }
        };


        Plotly.newPlot(element, [{
            x: this.time,
            y: this.acc
        }, {
            x: this.time,
            y: this.brake
        }], layout);
    }

    _getLastPositins() {
        // let lastValues = this.gamepad.getLastPositions();
        // let lastAcc = this.acc[this.acc.length - 1];
        // let lastBrake = this.brake[this.brake.length - 1];
        // let lastAcc = this.acc[this.acc.length-1];
        this.lastAccValue = 50 * (1 - this.gamepad.accValue);
        this.lastBrakeValue = 50 * (1 - this.gamepad.brakeValue)
        this.acc.push(this.lastAccValue);
        this.brake.push(this.lastBrakeValue);
        this.time.push(new Date());
        // let brake = Math.random() * 100;
        // let time = new Date();

        // positions.push({ acc, brake, time })

        this.acc = this.acc.slice(-500)
        this.brake = this.brake.slice(-500)
        this.time = this.time.slice(-500)
    }

}
