import { Router } from 'express';
import { projectController } from './controller/project.controller';

const router = Router();

router.get('/projects', projectController.getProjects.bind(projectController));
router.get('/projects/:id', projectController.getProject.bind(projectController));
router.post('/projects', projectController.createProject.bind(projectController));

export default router;
