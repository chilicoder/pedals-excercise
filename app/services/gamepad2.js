import Service from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default Service.extend({
    settings: storageFor('settings')
});
