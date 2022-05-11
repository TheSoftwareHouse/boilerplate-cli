import { join } from "path";
import { Configuration, ProjectType } from "./../configuration";
import { getBootstraper } from "./bootstrapper/index";
import { gitClone } from "./shared/git-clone";

export class Runner {
  private dirname = process.cwd();
  constructor(private config: Configuration) {}

  bootstrap() {
    const boilerplateDirname = join(this.dirname, this.config.name);

    gitClone({
      url: this.getRepositoryUrl(this.config.project),
      name: this.config.name,
      dirname: this.dirname,
    });

    const bootstraper = getBootstraper({
      ...this.config,
      dirname: boilerplateDirname,
    });

    bootstraper.execute();
  }

  private getRepositoryUrl(projectType: ProjectType) {
    return {
      [ProjectType.Express]:
        "https://github.com/TheSoftwareHouse/express-boilerplate.git",
      [ProjectType.Serverless]:
        "https://github.com/TheSoftwareHouse/serverless-boilerplate.git",
    }[projectType];
  }
}
