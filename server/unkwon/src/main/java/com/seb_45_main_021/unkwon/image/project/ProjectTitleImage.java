package com.seb_45_main_021.unkwon.image.project;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.seb_45_main_021.unkwon.project.entity.Project;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class ProjectTitleImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectTitleImageId;

    private String imageUrl;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "projectId")
    @JsonBackReference
    private Project project;
}
