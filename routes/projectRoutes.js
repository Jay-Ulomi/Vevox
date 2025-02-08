const express = require('express');
const router = express.Router();
const projectData = require('../views/Project/project.json'); // Ensure correct path

router.get('/', (req, res) => {
    const projectsPerPage = 12; // Adjust per page count
    const page = parseInt(req.query.page) || 1;
    const totalProjects = projectData.projects.length;
    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    // Ensure page boundaries
    const startIndex = (page - 1) * projectsPerPage;
    const endIndex = Math.min(startIndex + projectsPerPage, totalProjects);
    const paginatedProjects = projectData.projects.slice(startIndex, endIndex);

    res.render('Project/project', {
        projects: paginatedProjects,
        currentPage: page,
        totalPages: totalPages,
        totalProjects: totalProjects
    });
});

module.exports = router;
