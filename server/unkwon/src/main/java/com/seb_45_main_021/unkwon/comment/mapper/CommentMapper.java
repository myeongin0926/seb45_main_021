package com.seb_45_main_021.unkwon.comment.mapper;


import com.seb_45_main_021.unkwon.comment.dto.CommentDto;
import com.seb_45_main_021.unkwon.comment.entity.Comment;
import com.seb_45_main_021.unkwon.member.entity.Member;
import com.seb_45_main_021.unkwon.portfolio.entity.PortFolio;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    default Comment commentPostDtoToComment (CommentDto.PostDto commentPostDto) {

        Member member = new Member();
        member.setMemberId(commentPostDto.getMemberId());

        PortFolio portFolio =new PortFolio();
        portFolio.setPortfolioId(commentPostDto.getPortfolioId());

        Comment comment = new Comment();
        comment.setMember(member);
        comment.setPortFolio(portFolio);
        comment.setContent(commentPostDto.getContent());

        return comment;
    }

    Comment commentPatchDtoToComment (CommentDto.PatchDto commentPatchDto);

    default CommentDto.ResponseDto commentToCommentResponseDto(Comment comment) {

        CommentDto.ResponseDto commentResponseDto = new CommentDto.ResponseDto(
                comment.getCommentId(),
                comment.getContent(),
                comment.getPortFolio().getPortfolioId(),
                comment.getMember().getMemberId(),
                comment.getMember().getEmail(),
                comment.getMember().getUsername(),
                comment.getCreatedAt(),
                comment.getModifiedAt()
        );

        return commentResponseDto;

    }

    List<CommentDto.ResponseDto> commentsToCommentResponseDtos(List<Comment> comments);


}

