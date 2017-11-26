package org.pangyo.amicus.controller;

import org.pangyo.amicus.model.projects.ProjectInfo;
import org.pangyo.amicus.service.ProjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * author : Jae Eun Yoo
 **/

@RestController
@RequestMapping("/api")
public class ProjectsRestController {
    private ProjectsService projectsService;

    @Autowired
    public ProjectsRestController(ProjectsService projectsService){
        this.projectsService = projectsService;
    }

    @GetMapping("/project/list")
    public List<ProjectInfo> getProjectInfoList(){
        return projectsService.getProjectInfos();
    }
}