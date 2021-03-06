package com.cdp.hanzoom.api.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

@Data
@ApiModel("BoardFindAllRes")
public class BoardFindAllRes {
    @ApiModelProperty(name="Board boardNo")
    Long boardNo;
    @ApiModelProperty(name="Board description")
    String description;
    @ApiModelProperty(name="Board imagePath")
    String imagePath;
    @ApiModelProperty(name="Board status")
    String status;
    @ApiModelProperty(name="Board type")
    String type;
    @ApiModelProperty(name="Board title")
    String title;
    @ApiModelProperty(name="Board viewCnt")
    Long viewCnt;
    @ApiModelProperty(name="Board likeCnt")
    Long likeCnt;
    @ApiModelProperty(name="Board userNickname")
    String userNickname;
    @ApiModelProperty(name="Board distance")
    Double distance;
    @ApiModelProperty(name="Board isLike")
    boolean isLike;
    List<BoardFindIngredientRes> boardFindIngredientResList;
}
