import { NodePlopAPI } from "plop";
import { azureFunctionHttpGenerator } from "./src/generators/azure-functions/http";

/*
 * You may consider to add some transform function:
 *
 * const tranform: AddActionConfig["transform"] = (template, data, conf) => { ... }
 *
 */

export default function (plop: NodePlopAPI) {
  plop.setGenerator("AzureFunction::Http", azureFunctionHttpGenerator);
  plop.setGenerator(
    "AzureDurableFunction::Activity",
    azureFunctionHttpGenerator
  );
}
