import { BaseService } from 'dok-ts/base/BaseService';
import { Connection, createConnection } from 'typeorm';

export class TypeORMService extends BaseService {
  public static options = {
    instances: {}
  };

  private instances: {[key: string]: Connection} = {};

  public init() {
    super.init();
    Object.keys(this.config.instances)
      .forEach((instanceName) => {
        createConnection(this.config.instances[instanceName])
          .then((connection) => {
            this.instances[instanceName] = connection;
          })
      });
  }

  public getInstance(key: string) {
    return this.instances[key];
  }
}