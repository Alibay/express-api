import { IProject, IProjectDto } from '../interfaces';

export default class ProjectMapper {

  public projectsToProjectsDto(projects: IProject[]): IProjectDto[] {
    return projects.map(this.projectToProjectDto.bind(this));
  }

  public projectToProjectDto(project: IProject): IProjectDto {
    return {
      id: project.id,
      name: project.name,
    }
  }
}
