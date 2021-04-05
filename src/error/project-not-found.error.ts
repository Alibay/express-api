import NotFoundError from './not-found.error';

export default class ProjectNotFoundError extends NotFoundError {
  public constructor(id: number) {
    super(`Project id=${id} not found`);
  }
}
