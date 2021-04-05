import { IProject, IProjectDto } from '../interfaces';
import ProjectMapper from '../mapper/project.mapper';
import ProjectRepository from '../repository/project.repository';

export default class ProjectService {
  private readonly projectRepository: ProjectRepository = new ProjectRepository();
  private readonly projectMapper: ProjectMapper = new ProjectMapper();

  public async getProjects(): Promise<IProjectDto[]> {
    const projects = await this.projectRepository.getProjects();
    return this.projectMapper.projectsToProjectsDto(projects);
  }

  public async createProject(projectDto: IProject): Promise<IProject> {
    const nextId = await this.projectRepository.getNextId();
    return {
      id: nextId,
      name: projectDto.name,
      description: projectDto.description,
    };
  }
}
