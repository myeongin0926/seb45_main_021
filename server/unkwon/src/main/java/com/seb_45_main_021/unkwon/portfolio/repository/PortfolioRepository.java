package com.seb_45_main_021.unkwon.portfolio.repository;


import com.seb_45_main_021.unkwon.portfolio.entity.Portfolio;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PortfolioRepository extends JpaRepository<Portfolio,Long> {
    @Query(
        value = "SELECT * FROM PORTFOLIO AS p WHERE p.tags LIKE :tagLikeQuery",
        countQuery = "SELECT COUNT(*) FROM PORTFOLIO AS p WHERE p.tags LIKE :tagLikeQuery",
        nativeQuery = true)
    Page<Portfolio> findByTags(String tagLikeQuery,Pageable pageable);
    @Query(
            value = "SELECT * FROM PORTFOLIO AS p WHERE p.lang LIKE :langLikeQuery",
            countQuery = "SELECT COUNT(*) FROM PORTFOLIO AS p WHERE p.lang LIKE :langLikeQuery",
            nativeQuery = true)
    Page<Portfolio> findByLang(String langLikeQuery,Pageable pageable);
    @Query(value = "SELECT * FROM PORTFOLIO AS p WHERE p.tags LIKE :tagLikeQuery AND p.lang LIKE :langLikeQuery",
            countQuery = "SELECT COUNT(*) FROM PORTFOLIO AS p WHERE p.tags LIKE :tagsLike AND p.lang LIKE :langsLike",
            nativeQuery = true)
    Page<Portfolio> findByTagsAndLang(String tagLikeQuery, String langLikeQuery,Pageable pageable);
    Page<Portfolio> findTop10ByOrderByHeartCountDesc(Pageable pageable);

}