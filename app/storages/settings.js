// import StorageObject from 'ember-local-storage/local/object';

// // const Storage = StorageObject.extend();
// class SettingsStorage extends StorageObject {
//   initialState() {
//     return { counter: 0 };
//   }
// }


// export default SettingsStorage;

import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
    initialState() {
        return {
            gamepadId: 0,
            accAxis: 2,
            brakeAxis: 5
        }
    }
});

export default Storage;
