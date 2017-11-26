package org.pangyo.amicus.controller;

import groovy.util.logging.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.pangyo.amicus.model.projects.ProjectInfo;
import org.pangyo.amicus.service.ProjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.is;
import static io.github.benas.randombeans.api.EnhancedRandom.randomListOf;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


/**
 * author : Jae Eun Yoo
 **/

@Slf4j
@RunWith(SpringRunner.class)
@WebMvcTest(ProjectsRestController.class)
public class ProjectsRestControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProjectsService projectsService;

    @Test
    public void testGetProjectInfoList() throws Exception {
        List<ProjectInfo> projectInfos = randomListOf(10, ProjectInfo.class);
        given(projectsService.getProjectInfos()).willReturn(projectInfos);
        mockMvc.perform(get("/api/project/list"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.length()", is(10)))
               .andExpect(jsonPath("$[0].title", is(projectInfos.get(0).getTitle())));
    }
}