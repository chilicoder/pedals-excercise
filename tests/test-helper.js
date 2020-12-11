import Application from 'pedals-exercise/app';
import config from 'pedals-exercise/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
