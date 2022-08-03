 if (data.text == "!가리기"  &&adminList.includes(String(userId))) {
        channel.hideChat(data.chat);
        channel.hideChat(new node_kakao.ChatBuilder().attachment({ logId: data.attachment().src_logId }).build({ logId: data.attachment().src_logId, type: data.attachment().src_type }));
        channel.sendChat(`완료`)
    }
if(data.text.startsWith("/업다운"){
   channel.sendChat("업다운 게임을 시작합니다.");
   chose =Math.floor(Math.random()*100);
   }
   if(data.text.startsWith("//")){
      var num_2=Text.substr(2);
      if(num_2 < chose){
         channel.sendChat("Up");
        } else if (num_2 > chose) {
          channel.sendChat("Down");
        } else if (num_2 == chose) {
          channel.sendChat("정답!");
        } else {
          channel.sendChat(" 0~100 사이의 숫자를 입력해주세요!");
        }
      }

//가리기 명령어 사용시 가리고 싶은 문장,단어를 가리고 가리기 명령어도 가립니다.

