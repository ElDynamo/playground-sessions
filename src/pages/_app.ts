import type { App } from "vue";
import PrimeVue from "primevue/config";

import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import Tooltip from "primevue/tooltip";

export default (app: App) => {
  app.use(PrimeVue, { ripple: false, inputStyle: "filled" });

  app.directive("tooltip", Tooltip);

  app.component("Button", Button);
  app.component("Calendar", Calendar);
  app.component("Dialog", Dialog);
  app.component("InputNumber", InputNumber);
  app.component("InputText", InputText);
  app.component("Textarea", Textarea);
};
