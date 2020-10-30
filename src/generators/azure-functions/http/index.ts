import { PlopGeneratorConfig } from "node-plop";

export const azureFunctionHttpGenerator: PlopGeneratorConfig = {
  description: "Azure Function: HTTP trigger",
  prompts: [
    {
      type: "input",
      name: "functionName",
      message: "Function name (PascalCased)",
    },
    {
      type: "input",
      name: "httpPath",
      message: "HTTP route endpoint",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/{{ functionName }}/index.ts",
      templateFile: __dirname + "/templates/index.ts.hbs",
    },
  ],
};
