if (data.text == "!text" && adminList.includes(String(userId))) {
        let bend = chat.rawAttachment.src_userId;
        client.open.kickUser(chat.channel, bend);
        channel.sendChat(new node_kakao_1.ChatBuilder().append(new node_kakao_1.MentionContent(userInfo)).text("님, 킥완료").build(1));
	}

//아직 테스트 안해서 될지 안될지 모릅니다.//
