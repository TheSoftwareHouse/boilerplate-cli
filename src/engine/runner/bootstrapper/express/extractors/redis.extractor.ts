import { DockerComposeParser } from "../../../shared/docker-compose.parser";
import { FileParser } from "../../../shared/file.parser";
import { ModuleExtractor } from "../../../shared/module-extractor";
import { ResourceExtractor } from "../../../shared/resource.extractor";

interface RedisExtractorDependecies {
  dockerCompose: DockerComposeParser;
  env: FileParser;
  resourceExtractor: ResourceExtractor;
}

export class RedisExtractor implements ModuleExtractor {
  public dependencyName: string = "redis";

  private dockerCompose: DockerComposeParser;

  private env: FileParser;

  private resourceExtractor: ResourceExtractor;

  constructor({
    dockerCompose,
    env,
    resourceExtractor,
  }: RedisExtractorDependecies) {
    this.dockerCompose = dockerCompose;
    this.env = env;
    this.resourceExtractor = resourceExtractor;
  }

  public removeModule() {
    this.dockerCompose.removeService("redis");
    this.env.removeLinesIncludingKey("REDIS_URL");
    this.resourceExtractor.removeFiles([
      "/src/tests/shared/cache-decorator.spec.ts",
      "/src/tools/cache-client.ts",
    ]);
    this.resourceExtractor.removeDirs(["/src/shared/cache-decorator"]);
    this.resourceExtractor.removeLines("cacheClient", [
      "src/container/common.ts",
    ]);
    this.resourceExtractor.removeLines("CacheQuery", [
      "src/app/features/example/query-handlers/users.query.handler.ts",
    ]);
  }
}
