import { IProject } from '../interfaces';
import BaseRepository from './base.repository';

export default class ProjectRepository extends BaseRepository<IProject> {

  private readonly projects: IProject[] = [
    { id: 1, name: 'First project', description: 'My first project' },
    { id: 2, name: 'Second project', description: 'My second project' },
    { id: 3, name: 'Third project', description: 'My third project' },
  ];

  public getProject(id: number): Promise<IProject | undefined> {
    const project = this.projects.find(p => p.id === id);
    return Promise.resolve(project);
  }

  public getProjects(): Promise<IProject[]> {
    return Promise.resolve(this.projects);
  }

  public getNextId(): Promise<number> {
    const maxId = this.projects.reduce((max: number, next: IProject) => next.id > max ? next.id : max, 0);
    return Promise.resolve(maxId + 1);
  }
}
