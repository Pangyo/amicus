package org.pangyo.amicus.service;

import org.pangyo.amicus.model.projects.ProjectInfo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * author : Jae Eun Yoo
 **/

@Service
public class ProjectsService {
    public List<ProjectInfo> getProjectInfos(){
        List<ProjectInfo> projectInfos = new ArrayList<>();
        for(int i=0; i<10; i++){
            ProjectInfo projectInfo = new ProjectInfo();
            projectInfo.setGitHost("GITHUB");
            projectInfo.setLanguage("Java");
            projectInfo.setOwner("Jae Eun Yoo");
            projectInfo.setUrl("http://www.naver.com");
            projectInfos.add(projectInfo);
        }
        return projectInfos;
    }
}
