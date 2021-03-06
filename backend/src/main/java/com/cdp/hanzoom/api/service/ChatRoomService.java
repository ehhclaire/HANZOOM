package com.cdp.hanzoom.api.service;

import com.cdp.hanzoom.api.request.ChatRoomReq;
import com.cdp.hanzoom.api.response.ChatRoomInfoRes;
import com.cdp.hanzoom.api.response.ChatRoomRes;
import com.cdp.hanzoom.db.entity.ChatRoom;

import java.util.List;

public interface ChatRoomService {
    /** 채팅방을 생성하는 registerChatRoom 입니다. **/
    String registerChatRoom(ChatRoomReq chatRoomReq);
    /** 유저가 속한 채팅방을 전체 조회하는 findAllChatRoom 입니다. **/
    List<ChatRoomRes> findAllChatRoom(String userNickname);
    /** 채팅방 아이디(roomId)를 이용하여 채팅방 정보를 조회하는 findChatRoomInfoByRoomId 입니다. **/
    ChatRoomInfoRes findChatRoomInfoByRoomId(String roomId);
    /** 유저1과 유저2의 채팅방이 존재하는지 확인하는 findChatRoom 입니다. (true: 존재 O, false: 존재 X) **/
    String findChatRoom(ChatRoomReq chatRoomReq);
    /** 채팅방에서 유저 참가 정보를 삭제하는 deleteUserInfo 입니다. **/
    void deleteUserInfo(String id, String userEmail);
}
