import { ExpressBootstrapper } from "./express/bootstrapper";
import { Configuration, ProjectType } from "../../configuration/index";

export const getBootstraper = (configuration: Configuration) => {
  switch (configuration.project) {
    case ProjectType.Express:
      return new ExpressBootstrapper(configuration);
    default:
      throw new Error(`Project type ${configuration.project} is not supported`);
  }
};
