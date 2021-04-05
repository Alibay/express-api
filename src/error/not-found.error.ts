import BaseError from './base.error';

export default class NotFoundError extends BaseError {
  public constructor(message: string = 'Resouce not found') {
    super(message);
  }
}
