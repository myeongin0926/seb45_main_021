package com.seb_45_main_021.unkwon.project.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.seb_45_main_021.unkwon.commonCode.CommonCode;
import com.seb_45_main_021.unkwon.member.entity.Member;
import com.seb_45_main_021.unkwon.projectcard.entity.ProjectCard;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ProjectStatus { // 프로젝트 지원정보
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectStatusId;

    @ManyToOne
    @JoinColumn(name = "projectId")
    @JsonBackReference
    private Project project;

    @ManyToOne
    @JoinColumn(name = "memberId")
    @JsonIgnore
    private Member member;

    @ManyToOne
    @JoinColumn(name = "commonCodeId")
    private CommonCode commonCode;

    @ManyToOne
    @JoinColumn(name = "projectCardId")
    private ProjectCard projectCard;
}
