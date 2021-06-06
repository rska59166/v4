 if (data.text == "!가리기"  &&adminList.includes(String(userId))) {
        channel.hideChat(data.chat);
        channel.hideChat(new node_kakao.ChatBuilder().attachment({ logId: data.attachment().src_logId }).build({ logId: data.attachment().src_logId, type: data.attachment().src_type }));
        channel.sendChat(`완료`)
    }
//가리기 명령어 사용시 가리고 싶은 문장,단어를 가리고 가리기 명령어도 가립니다.
