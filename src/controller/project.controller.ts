import { Request, Response, NextFunction } from 'express';
import ProjectNotFoundError from '../error/project-not-found.error';
import ProjectRepository from '../repository/project.repository';
import ProjectService from '../service/project.service';
// import ProjectValidator from '../validator/project.validator';

export default class ProjectController {

  private readonly projectRepository = new ProjectRepository();
  private readonly projectService = new ProjectService();
  // private readonly projectValidator = new ProjectValidator();

  public async getProject(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;

      const project = await this.projectRepository.getProject(id);
      if (!project) {
        throw new ProjectNotFoundError(id);
      }

      res.sendOk(project);
    } catch (err) {
      next(err);
    }
  }

  public async getProjects(_req: Request, res: Response, _next: NextFunction) {
    const project = await this.projectService.getProjects();
    res.sendOk(project);
  }

  public async createProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await this.projectService.createProject(req.body);
      res.sendOkCreated(project);
    } catch (err) {
      next(err);
    }
  }
}

export const projectController = new ProjectController();
