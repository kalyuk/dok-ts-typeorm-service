import { getService } from 'dok-ts';

export function getInstance(instanceName: string): any {
  return getService('TypeORMService').getInstance(instanceName);
}

export * from './TypeORMService'
export * from 'typeorm'
export { Entity } from 'typeorm/decorator/entity/Entity'