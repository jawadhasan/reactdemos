
import 'regenerator-runtime/runtime'
import "./import-jquery.js";
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import './resources/bootstrap.slate.css';

import ko from "knockout";
import 'ol/ol.css';

import { ApplicationBase } from "./framework/application-base.js";
import { HomePage } from "./pages/home-page.js";
import { VehiclesPage } from "./pages/vehicles-page.js";

import { fleet } from "./services/fleet-data.js";
import { VehicleDataService } from "./services/vehicle-data-service";

import { CognitoPage } from './pages/cognito-page.js';

import { AjaxPage } from "./pages/ajax-page.js";
import { MouseEventPage } from "./pages/mouse-event-page.js";

import { mailer } from "./tools/mailer.js"; //subscriber --needed to reference to initialize (event-page)
import { appLogger } from "./tools/app-logger.js"; //subscriber --needed to reference to initialize
import { ajaxHandler } from "./tools/ajax-handler.js"; //subscriber --needed to reference to initialize
import { MouseButtonEventsPage } from "./pages/mouse-button-events-page.js";
import { KeyboardEventsPage } from "./pages/keyboard-events-page.js";
import { FormsEventsPage } from "./pages/forms-event-page.js";
import { GlobalAjaxEventsPage } from "./pages/global-ajax-events-page.js";
import { KnockoutPage } from "./pages/knockout-page.js";
import { VendingMachinePage } from "./pages/vending-machine-page.js";
import { FleetManagementPage } from "./pages/fleet-management.js";
import { MiscDemosPage } from "./pages/miscdemos-page.js";
import { ContactPage } from "./pages/contact-page.js";
import { KeyboarddPage } from "./pages/keyboard-page.js";
import { MyPluginPage } from "./pages/my-plugin-page.js";

import myPlugin from  './my-plugin/my-plugin.js'; //for global level
import { ReactPage } from "./pages/react-page.js";


//Any shared code b/w applications can go into ApplicationBase.
//App class then simply holds the code specific to this application only.
export class App extends ApplicationBase {

    constructor() {

        super('Application Demos');

        this.dataService = new VehicleDataService();
        this.dataService.loadData(fleet); //can load from API instead of mock
        //    console.log(this.dataService.cars);
        //    console.log(this.dataService.trucks);

        //for applicaiton routes scheme ==> [title, pageObject, isDefaultRoute]
        this.addRoute('Home', new HomePage(), true, true); //home-page link isHidden, routed auto

        this.addRoute('FleetManagement', new FleetManagementPage());
        this.addRoute('Vehicles', new VehiclesPage(), false, true);

        this.addRoute('VendingMachine', new VendingMachinePage());

        this.addRoute('CognitoBasics', new CognitoPage());

        this.addRoute('Keyboard', new KeyboarddPage());
        this.addRoute('MyPlugin', new MyPluginPage());

        this.addRoute('ReactPage', new ReactPage());

        this.addRoute('Contact', new ContactPage(), false, true);

        //misc demos pages
        this.addRoute('Misc-Demos', new MiscDemosPage());
        this.addRoute('Knockout', new KnockoutPage(), false, true);
        this.addRoute('Ajax', new AjaxPage(), false, true);
        this.addRoute('MouseCursorEvents', new MouseEventPage(), false, true);
        this.addRoute('MouseButtonEvents', new MouseButtonEventsPage(), false, true);
        this.addRoute('KeyboardEvents', new KeyboardEventsPage(), false, true);
        this.addRoute('FormEvents', new FormsEventsPage(), false, true);
        this.addRoute('GlobalAjaxEvents', new GlobalAjaxEventsPage(), false, true);
    }

}

//Bootstrapping and exporting applicaiton, so any other object e.g. pages can access the global object
export let application = new App();

$(function () {
    appLogger.log('ready');
    application.show($('.app-content'));
    application.showToast(application.title, 'Application Ready!');

    //Acitve Link, Highlighting
    $('.navbar-nav .nav-link').on('click', (e) => {
        $('.navbar-nav .nav-link').removeClass('active');
        $(e.target).addClass('active');
    });



    //footer links - click event binding
    $(".footer-links a").on('click', (e) => {
        let pageLink = e.target.getAttribute("data-link");
        console.log('data-', pageLink);
        application.activateRoute(pageLink ?? 'Contact');
    });

    
    //$(".page-content").myPlugin(); //working

})



//for global ajax events:
function increment(selector) {
    const obj = $(selector);
    try {
        const count = parseInt(obj.text()) + 1;
        obj.text(count);
    } catch {
        obj?.text("0");
    }
}

$(document)
    .ajaxComplete(() => increment(".complete--count"))
    .ajaxError(() => increment(".error--count"))
    .ajaxSend(() => increment(".send--count"))
    .ajaxStart(() => increment(".start--count"))
    .ajaxStop(() => increment(".stop--count"))
    .ajaxSuccess(() => increment(".success--count"));