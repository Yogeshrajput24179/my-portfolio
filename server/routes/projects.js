import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// GET /api/projects — return all projects (or seed defaults if DB empty)
router.get("/", async (req, res) => {
  try {
    let projects = await Project.find().sort({ order: 1, createdAt: -1 });

    // Seed default projects if DB is empty
    if (projects.length === 0) {
      const defaults = [
        {
          title: "BharatCrafts",
          description: "A full-stack e-commerce platform featuring authentication, product management, order tracking, cart system, admin inventory dashboard, and user order history.",
          techStack: ["ReactJS", "Node.js", "MongoDB", "Express", "REST API"],
          githubUrl: "https://github.com/yogesh",
          liveUrl: "#",
          featured: true,
          order: 1,
        },
        {
          title: "Karigar",
          description: "A responsive business website promoting local artisans, built with ReactJS and Bootstrap. Optimized for UI performance, accessibility, and cross-browser compatibility.",
          techStack: ["ReactJS", "Bootstrap", "JavaScript", "CSS3"],
          githubUrl: "https://github.com/yogesh",
          liveUrl: "#",
          featured: true,
          order: 2,
        },
      ];
      await Project.insertMany(defaults);
      projects = await Project.find().sort({ order: 1 });
    }

    res.json(projects);
  } catch (err) {
    // Return hardcoded fallback if DB is unavailable
    res.json([
      {
        _id: "1",
        title: "BharatCrafts",
        description: "A full-stack e-commerce platform featuring authentication, product management, order tracking, cart system, admin inventory dashboard, and user order history.",
        techStack: ["ReactJS", "Node.js", "MongoDB", "Express", "REST API"],
        githubUrl: "#",
        liveUrl: "#",
        featured: true,
      },
      {
        _id: "2",
        title: "Karigar",
        description: "A responsive business website promoting local artisans, built with ReactJS and Bootstrap. Optimized for UI performance, accessibility, and cross-browser compatibility.",
        techStack: ["ReactJS", "Bootstrap", "JavaScript", "CSS3"],
        githubUrl: "#",
        liveUrl: "#",
        featured: true,
      },
    ]);
  }
});

// POST /api/projects — add a new project
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
