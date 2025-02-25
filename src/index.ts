import noHrefAssignment from "./rules/no-href-assignment";
import noUnhandledScheduling from "./rules/no-unhandled-scheduling";
import privateComponentMethods from "./rules/private-component-methods";
import unregisterEvents from "./rules/unregister-events";

export = {
  rules: {
    "no-href-assignment": noHrefAssignment,
    "private-component-methods": privateComponentMethods,
    "no-unhandled-scheduling": noUnhandledScheduling,
    "unregister-events": unregisterEvents,
  },
  configs: {
    recommended: {
      plugins: ["enterprise-extras"],
      rules: {
        "enterprise-extras/no-href-assignment": "error",
        "enterprise-extras/private-component-methods": "error",
        "enterprise-extras/no-unhandled-scheduling": "warn",
        "enterprise-extras/unregister-events": "error",
      },
    },
    all: {
      plugins: ["enterprise-extras"],
      rules: {
        "enterprise-extras/no-href-assignment": "error",
        "enterprise-extras/private-component-methods": "error",
        "enterprise-extras/no-unhandled-scheduling": "error",
        "enterprise-extras/unregister-events": "error",
      },
    },
  },
};
