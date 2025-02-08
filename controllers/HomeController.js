
const projectData = require('../views/Project/project.json');

exports.getHome =async (req, res) => {
    try {
        const categories = {
            "All Projects": projectData.projects,
            "Telecommunications": projectData.projects.filter(project => project.category === "Telecommunications"),
            "Infrastructure": projectData.projects.filter(project => project.category === "Infrastructure"),
            "Passive Solutions": projectData.projects.filter(project => project.category === "Passive Solutions"),
        };
        res.render('Home/Index', {categories});
    } catch (error) {
        res.status(500).json(error);
    }
}