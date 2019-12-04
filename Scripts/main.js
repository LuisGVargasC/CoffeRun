(function (window) {
    'use strict';
    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;

    let myTruck = new Truck('itcamp', new DataStore());
    window.myTruck = myTruck;
    let checklist = new CheckList(CHECKLIST_SELECTOR);
    let formHandler = new FormHandler(FORM_SELECTOR);


    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checklist.addRow.call(checklist, data);
    });

})(window);