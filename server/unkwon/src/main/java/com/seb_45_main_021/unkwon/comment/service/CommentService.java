package com.seb_45_main_021.unkwon.comment.service;


import com.seb_45_main_021.unkwon.comment.entity.Comment;
import com.seb_45_main_021.unkwon.comment.repository.CommentRepository;
import com.seb_45_main_021.unkwon.exception.BusinessLogicException;
import com.seb_45_main_021.unkwon.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class CommentService {
    private final CommentRepository commentRepository;
//    private final JwtTokenizer jwtTokenizer;

    public CommentService(CommentRepository commentRepository/*, JwtTokenizer jwtTokenizer*/) {
        this.commentRepository = commentRepository;
//        this.jwtTokenizer = jwtTokenizer;
    }

    public Comment findVerifiedComment(long commentId){

        Optional<Comment> optional = commentRepository.findById(commentId);

        Comment findComment = optional.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;

    }

//    public void checkMemberId(long memberId, String accessToken) {
//
//        String secretKey = jwtTokenizer.getSecretKey();
//        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(secretKey);
//
//        long findMemberId = jwtTokenizer.getMemberIdFromAccessToken(accessToken, base64EncodedSecretKey);
//
//        if (memberId != findMemberId) {
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCHED);
//        }
//    }


    // 댓글 생성
    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }


    // 댓글 수정
    public Comment updateComment(Comment comment/*, String accessToken*/) {

        Comment findComment = findVerifiedComment(comment.getCommentId());

//        checkMemberId(findComment.getMember().getMemberId(), accessToken);

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));

        return commentRepository.save(findComment);

    }


    // 댓글 삭제
    public void deleteComment(long commentId/*, String accessToken*/) {
        Comment findComment = findVerifiedComment(commentId);

//        checkMemberId(findComment.getMember().getMemberId(), accessToken);

        commentRepository.delete(findComment);
    }


}
