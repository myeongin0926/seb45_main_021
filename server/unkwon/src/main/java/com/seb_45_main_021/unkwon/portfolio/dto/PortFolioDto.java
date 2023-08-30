package com.seb_45_main_021.unkwon.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

public class PortFolioDto {
    @Getter
    @Setter
    public static class Post{

        private long memberId;

        private String title;

        private String content;

    }

    @Getter
    @Setter
    public static class Patch{

        private long portfolioId;

        private String title;

        private String content;
    }

    @Getter
    @Setter
    @Builder
    public static class Response{

        private long portfolioId;
        private int view;
        private long memberId;
        private String email;
        private String username;

        private String title;
        private String content;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }

    @Getter
    @Setter
    @Builder
    public static class DetailResponse{
        private long memberId;
        private String email;
        private String username;
        private long portfolioId;
        private String title;
        private String content;
        private int view;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<PortFolioDto.CommentResponse> comments;
    }
    @Getter @Setter
    @Builder
    @AllArgsConstructor
    public static class CommentResponse {
        private long commentId;
        private String content;

        private long portfolioId;

        private long memberId;
        private String email;
        private String userName;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

}
