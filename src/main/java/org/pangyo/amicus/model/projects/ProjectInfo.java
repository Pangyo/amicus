package org.pangyo.amicus.model.projects;

import lombok.Data;

import java.time.ZonedDateTime;

/**
 * author : Jae Eun Yoo
 **/

@Data
public class ProjectInfo {
    private String title;
    private String url;
    private String gitHost;
    private String language;
    private String owner;
}
