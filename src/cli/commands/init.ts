import { prompt } from "inquirer";
import { Configuration, ProjectType, Runner } from "../../engine";

export const initCommand = () =>
  prompt([
    {
      name: "project",
      message: "What do you want to do?",
      type: "list",
      choices: [
        { name: "Create an express project", value: ProjectType.Express },
        {
          name: "Create a serverless project",
          value: ProjectType.Serverless,
        },
      ],
    },
    {
      name: "name",
      message: "What is your project name?",
      type: "input",
    },
    {
      name: "modules",
      message: "Which modules would you like to launch?",
      type: "checkbox",
      choices: ["redis"],
    },
  ]).then((anserws: Configuration) => {
    new Runner(anserws).bootstrap();
  });
