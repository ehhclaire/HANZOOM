package com.cdp.hanzoom.db.repository;

import com.cdp.hanzoom.db.entity.Ingredient;
import com.cdp.hanzoom.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * 식재료 종류 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}