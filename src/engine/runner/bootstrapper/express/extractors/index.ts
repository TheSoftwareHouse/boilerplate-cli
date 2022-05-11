import { ResourceExtractor } from "../../../shared/resource.extractor";
import { ExpressModule } from "../../../../configuration";
import { join } from "path";
import { FileParser } from "../../../shared/file.parser";
import { RedisExtractor } from "./redis.extractor";
import { DockerComposeParser } from "../../../shared/docker-compose.parser";
import { ModuleExtractor } from "../../../shared/module-extractor";

export const extractorsFactory = (
  dirname: string,
  modules: ExpressModule[]
): ModuleExtractor[] => {
  const dockerCompose = new DockerComposeParser(
    join(dirname, "./docker-compose.yml")
  );
  const env = new FileParser(join(dirname, "./.env.dist"));
  const resourceExtractor = new ResourceExtractor(dirname);

  const extractorMap = {
    [ExpressModule.Redis]: new RedisExtractor({
      dockerCompose,
      env,
      resourceExtractor,
    }),
  };

  return modules.map((module) => extractorMap[module]);
};
