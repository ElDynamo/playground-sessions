import type { App } from "vue";
import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import Password from "primevue/password";
// import ProductService from "./service/ProductService";

export default (app: App) => {
	app.use(PrimeVue, { ripple: false, inputStyle: "filled" });
	app.use(ConfirmationService);
	app.use(ToastService);

	app.directive("tooltip", Tooltip);

	app.component("Button", Button);
	app.component("Calendar", Calendar);
	app.component("Card", Card);
	app.component("Carousel", Carousel);
	app.component("ConfirmPopup", ConfirmPopup);
	app.component("Dialog", Dialog);
	app.component("InputNumber", InputNumber);
	app.component("InputText", InputText);
	app.component("Textarea", Textarea);
	app.component("Toast", Toast);
	app.component("Password", Password);
	// app.component("ProductService", ProductService);
};
