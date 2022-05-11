import { Cleaner } from "./cleaner";
import { extractorsFactory } from "./extractors";
import { ModuleExtractor } from "../../shared/module-extractor";
import { Configuration, ExpressModule } from "../../../configuration";
import { Bootstrapper } from "../types";

export class ExpressBootstrapper implements Bootstrapper {
  private cleaner: Cleaner;

  private extractors: ModuleExtractor[];

  constructor(configuration: Configuration) {
    const allModules = Object.values(ExpressModule);
    const modulesToExtract = allModules.filter(
      (module) => !configuration.modules.includes(module)
    );
    this.extractors = extractorsFactory(
      configuration.dirname,
      modulesToExtract
    );

    const packageNames = this.extractors.map(
      (extractor) => extractor.dependencyName
    );
    this.cleaner = new Cleaner({
      dirname: configuration.dirname,
      packageNames,
    });
  }

  execute() {
    this.extractors.forEach((extractor) => extractor.removeModule());
    this.cleaner.cleanUp();
  }
}
