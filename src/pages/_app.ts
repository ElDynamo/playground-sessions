import type { App } from "vue";

import Button from "primevue/button";
import PrimeVue from "primevue/config";
import Calendar from "primevue/calendar";
// import InputText from "primevue/inputtext";
// import Toolbar from "primevue/toolbar";
import Tooltip from "primevue/tooltip";

export default (app: App) => {
	app.use(PrimeVue, { ripple: false, inputStyle: "filled" });
	app.directive("tooltip", Tooltip);
	// app.component("Button", Button);
	app.component("Calendar", Calendar);
	// app.component("InputText", InputText);
	//   app.component("Toolbar", Toolbar);
};
