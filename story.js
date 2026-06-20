var 선배 = "아섭선배";
const storyData = {
    start: {
        text: "연습이 끝난 방과 후 운동장. 저 멀리서 아섭선배가 땀을 닦으며 걸어온다.",
        character: "images/선배1.png", // 지정하신 파일 경로
        background: "images/배경1.jpg",
        name: "나",
        choices: [{
                text: 선배 + ", 오늘 연습 고생하셨어요!",
                next: "praise",
                score: 10
            },
            {
                text: "아직도 안 가셨어요? 공이랑 사귀시겠어",
                next: "tease",
                score: 5
            },
            {
                text: 선배 + ", 사랑해요(키스를 갈긴다)",
                next: "거절",
                score: -10
            }
        ]
    },
    praise: {
        text: "아, 너 안가고 있었나. (선배가 쑥스러운 듯 웃으며) 니덕에 3000안타 치겠다.",
        character: "images/선배_웃음.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
                text: "저 선배한테 음료 사드리고 싶은데..",
                next: "cafe1",
                score: 0
            },
            {
                text: "내일 경기 꼭 보러 갈게요!",
                next: "stadium1_1",
                score: 10
            }
        ]
    },
    stadium1_1: {
        text: "온다고? (선배가 놀란 표정으로) 고맙데이 치어리더가 온다는데 우리야 좋지",
        character: "images/선배_웃음.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
                text: "헉! 이렇게 빨리 받아주실줄은 몰랐는데..",
                next: "stadium1_2",
                score: 10
            },
            {
                text: "하하하 이제 내가 있으니 우리학교가 대통령배 1등이겠군",
                next: "stadium1_2",
                score: 10
            }
        ]
    },
    stadium1_2: {
        text: "근데 니 그거 아나.\n내일 비 억수로온다니까 경기 없을거같고 나중에 날 잡고 와봐라",
        character: "images/선배_웃음.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
            text: "하하하 알겠어요 대신 제가 응원단장 꼭 할게요",
            next: "day1end",
            score: 10,
        }]
    },
    cafe1: {
        text: "뭐라노 이 머스마가, 오늘 이 행님이 쏠테니까 같이 가자.\n 얼라주제에 내 챙겨주기까지 하나.. (선배가 웃는다)",
        character: "images/선배_웃음.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
            text: "(헉 너무 잘생긴 선배가 내 음료를 사주시다니)ㅎ..헉 좋아요..!!!!",
            next: "cafe1_1",
            score: 10
        }]
    },
    cafe1_1: {
        text: "카페에서" + 선배 + "가 쏘는 음료를 마시다니 이렇게 해도 되는거 맞을까?",
        character: "images/선배_웃음.png",
        background: "images/카페.webp",
        name: "나",
        choices: [{
            text: "선배가 저리 좋아하는데 알빠노~",
            next: "cafe1_2",
            score: 10
        }]
    },
    cafe1_2: {
        text: "카페에서 선배와 시간을 보내본다. 선배는 조금 긴장이 되는듯 해보였다. 이 분위기를 어떻게 풀어가야하지?",
        character: "images/선배_긴장.png",
        name: "나",
        choices: [{
                text: "선배, 마라탕 사주세요! 그럼 탕후루도 같이? (냅다 마라탕후루를 춘다)",
                next: "cafe1_3_2",
                score: 10,
            },
            {
                text: "선배, 선배는 혹시 야구 어떻게 시작하게 되신거에요?",
                next: "cafe1_3_1",
                score: 0
            },
            {
                text: "선배, 혹시 쿵쿵따란 게임 알아요? (냅다 쿵쿵따를 춘다)",
                next: "cafe1_3_2",
                score: 10
            }
        ]
    },
    cafe1_3_1: {
        text: "내는 어릴때부터 야구 좋아했는데, 롯데랑 한화 야구 보다가 초등학교때 야구부에 들어가면서부터 했던것같다\n 니는 어떻게 야구 시작하게 됐노?",
        character: "images/선배2.png",
        name: 선배,
        choices: [{
                text: "이러니까 역시 오빠지..",
                next: "cafe1_3_2",
                score: 10
            },
            {
                text: "그러니까 20살 어린남자애가 좋아하지",
                next: "cafe1_3_2",
                score: 10
            }
        ]
    },
    cafe1_3_2: {
        text: "(선배가 갑자기 당황한 표정으로 쳐다본다.)",
        character: "images/선배_당황.png",
        background: "images/카페.webp",
        name: 선배,
        choices: [{
                text: "아, ㅅ..선배 그...",
                next: "cafe1_3_3",
                score: 0
            },
            {
                text: "선배 ㅈ잠시만요 표정이...",
                next: "cafe1_3_3",
                score: 0,
            }
        ]
    },
    cafe1_3_3: {
        text: "(선배가 웃는다) 와 ㅋㅋㅋㅋㅋㅋㅋ 니 개그맨 지망하나 ㅋㅋㅋㅋㅋ 진짜 웃기게 말을 잘 하노ㅋㅋㅋㅋ",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "(어라라.. 이걸 원한건 아녔는데) 제가 좀 재치있게 한다는 소리는 자주 들었어요 하하하",
            next: "cafe1_4",
            score: 10
        }]
    },
    cafe1_4: {
        text: "(시간을 보니 벌써 저녁이다.)\n와 시간 와이렇게 빠르노?\n니 집에 통금 없나",
        name: 선배,
        choices: [{
            text: "어 뭐 딱히 그런건 없는데.. 선배 이제 집 들어가셔야해요?",
            next: "cafe1_5",
            score: 0
        }, ]
    },
    cafe1_5: {
        text: "뭐 그런거는 아니지만.. 내일 수행평가 준비도 있고 조금 공부는 해야할 것 같아서. 혹시 니 집 어디고?",
        character: "images/선배_긴장.png",
        name: 선배,
        choices: [{
            text: "제가 서울서와서 이렇게 말하는지는 모르겠는데 교대..?에 살아요",
            next: "cafe1_6",
            score: 0
        }, ]
    },
    cafe1_6: {
        text: "아 니 교대가???? 와~ 멀리서도 오네\n근데 니 그거 아나, 내도 양정이라 니랑 집가는 방향이 같다.",
        character: "images/선배_웃음.png",
        background: "images/길거리.jpg",
        name: 선배,
        choices: [{
            text: "헐헐헐헐 진짜요????\n안그래도 반에서도 저 혼자만 연제구라 서러웠는데..",
            next: "cafe1_7",
            score: 10
        }, ]
    },
    cafe1_7: {
        text: "(그렇게 선배와 나는 지하철승강장으로 함께 향했다.) 뭐.. 니 학교생활 하다가 힘든거 있으면 내한테 말해라. ",
        character: "images/선배_당황.png",
        background: "images/지하철.webp",
        name: 선배,
        choices: [{
                text: "진짜 부산 역시 따듯하고 정이 많구나..",
                next: "day1end_1",
                score: 10
            },
            {
                text: "저 지금 선배가 너무 힘들어요",
                next: "cafe1_8",
                score: 0
            }
        ]
    },
    cafe1_8: {
        text: "(선배가 갑자기 놀란 표정으로)\ㅜ뭐?",
        character: "images/선배_정색.png",
        background: "images/지하철.webp",
        name: 선배,
        choices: [{
            text: "선배가 너무 멋있어서 힘들다고요.. 서울은 이런거 잘 없는데..",
            next: "cafe1_9",
            score: -10
        }, ]
    },
    cafe1_9: {
        text: "(선배가 잠시 멈칫하다가, 갑자기 웃으며 말한다.)\nㅋㅋㅋㅋㅋㅋ 아 뭐야 플러팅이었나.\n머찐 오빠로써 용서해준다 내가 ㅋㅋㅋㅋ",
        character: "images/선배_웃음.png",
        background: "images/지하철.webp",
        name: 선배,
        choices: [{
            text: "(다음)",
            next: "day1end_1",
            score: 0
        }]
    },
    day1end_1: {
        text: "(선배가 잠깐 생각하더니)\n니 오늘부터 내 꼬붕할래?",
        character: "images/선배_웃음.png",
        background: "images/지하철.webp",
        name: 선배,
        choices: [{
            text: "(헉 너무 멋진 선배의 꼬붕이라니)\nㅎ..헉 좋아요..!!!! 근데 선배 이제 양정역이라 내리셔야하지 않아요?",
            next: "day1end_2",
            score: 10,
        }]
    },
    day1end_2: {
        text: "아니, 나도 니랑 같이 내려야지.\n(선배가 웃으며) 니가 내 꼬붕이니까",
        character: "images/선배_웃음.png",
        background: "images/지하철.webp",
        name: 선배,
        choices: [{
            text: "(이게 뭔 개소린지 싶다가도 이런 선배랑 함꼐 한다면 재밌을것같다.)",
            next: "day2start",
            score: 10,
            nextDay: true
        }]
    },
    tease: {
        text: "프로가 될라믄 이 정도는 해야한데이.",
        character: "images/선배_당황.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
                text: "앗.. 기분 나쁘셨다면 죄송해요.",
                next: "tease1_1"
            },
            {
                text: "선배 멋있어서 그래요, 멋있어서!",
                next: "tease1_2"
            }
        ]
    },
    tease1_1: {
        text: "아니, 기분 나쁘다기보단.. \n(선배가 잠시 생각하다가) 그래도 고맙데이.",
        character: "images/선배_웃음.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
            text: "그래도 선배는 멋있어요!",
            next: "day1end"
        }]
    },
    tease1_2: {
        text: "내 므찐건 나도 안다 그래도 인정받으니까 기분은 좋네",
        character: "images/선배_당황.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
            text: "뭐야 이런거 선배가 알고있으면 어떡해요",
            next: "day1end"
        }]
    },
    거절: {
        text: "(선배가 갑자기 당황한 표정으로 쳐다본다.) 뭐꼬 니 나 좋아하나? ㅋㅋㅋㅋㅋ 이런후배 어디서왔노",
        character: "images/선배_당황.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
                text: "저는 선배 진짜 좋아하는데요.",
                next: "day1end"
            },
            {
                text: "저 서울에서 왔습니다!",
                next: "거절1"
            }
        ]
    },
    거절1: {
        text: "서울점마들은 다 이러나, 좀 특이하네.",
        character: "images/선배_당황.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
            text: "아 뭐 그런건 아니지만..",
            next: "day1end"
        }]
    },
    day1end: {
        text: "(선배가 잠시 멈칫하다가, 갑자기 웃으며 말한다.)\n 니 오늘부터 내 꼬붕해라.",
        character: "images/선배_웃음.png",
        background: "images/배경1.jpg",
        name: 선배,
        choices: [{
            text: "(헉 너무 잘생긴 선배의 꼬붕이라니)ㅎ..헉 좋아요..!!!!\n저 가야할 곳이 있어서 내일 봐요 선배!!",
            next: "day2start",
            score: 10,
            nextDay: true
        }]
    },
    //2일차 선배와의 저녁데이트
    day2start: {
        text: "오, 꼬붕아 내 보러왔나",
        character: "images/선배_웃음.png",
        background: "images/학교복도.png",
        name: 선배,
        choices: [{
                text: "저 선배 보러온거 아닌데요.",
                next: "day2_1",
                score: 0
            },
            {
                text: "진짜 선배 잘생겼다고 막말하면 꽃도 활짝 웃잖아요.",
                next: "day2_2",
                score: 10
            }
        ]
    },
    day2_1: {
        text: "뭐야 꼬붕이 왜그래? 니가 내 보러왔다고 생각하는데..",
        character: "images/선배_당황.png",
        background: "images/학교복도.png",
        name: 선배,
        choices: [{
            text: "그냥 선생님 보러가는 길이었어서..",
            next: "day2_3",
            score: 0
        }]
    },
    day2_2: {
        text: "하하하 니 자꾸 내한테 점수딸려고 작정했나",
        character: "images/선배_웃음.png",
        background: "images/학교복도.png",
        name: 선배,
        choices: [{
                text: "(뭐야 이 선배 눈치 겁나 빠르네) 하하핫 역시 선배도 참~",
                next: "day2_3",
                score: 20
            },
            {
                text: "(뭐야 이 선배 예의상 말한건데 혼자 망상하나) 하하하",
                next: "day2_3",
                score: -10
            }
        ]
    },
    day2_3: {
        text: "뭐 아무튼 오늘 하늘도 우중충한데 연습도 없겠다 니랑 오늘 학교끝나고 야자하면서 밥이라도 무러 갈까하는데.",
        character: "images/선배_웃음.png",
        background: "images/학교복도.png",
        name: 선배,
        choices: [{
                text: "네! 선배랑 밥 먹고 싶어요!",
                next: "day2_5",
                score: 10
            },
            {
                text: "아니요.. 저 오늘 약속이 있어서...",
                next: "day2_4",
                score: -10
            }
        ]
    },
    day2_4: {
        text: "아 그런거였나. 알겠다 나중에 또 보자",
        character: "images/선배_당황.png",
        background: "images/학교복도.png",
        name: 선배,
        choices: [{
                text: "아, 네!",
                next: "day3",
                score: 10,
                nextDay: true
            },
            {
                text: "(ㅅㅂ진짜지랄이야) 아 네.",
                next: "day3",
                score: -30,
                nextDay: true
            }
        ]
    },
    day2_5: {
        text: "그래? 어디 갈래? (선배가 웃으며) 니가 고르라",
        character: "images/선배_웃음.png",
        background: "images/학교복도.png",
        name: 선배,
        choices: [{
                text: "선배 마라탕 사주세요 그럼 탕후루도 같이?",
                next: "day2_6",
                score: 0
            },
            {
                text: "선배 하이디라오 사주세요!",
                next: "day2_6",
                score: 0
            }
        ]
    },
    day2_6: {
        text: "아. 그런거였나..",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "선배, 혹시 매운거 못드시면.. 저희집에서 라면 먹고 가실래요?",
                next: "day2_7_1",
                score: 10
            },
            {
                text: "선배, 부산사람은 국밥 좋아한다던데 국밥 같이 드실래요..?",
                next: "day2_7_2_1",
                score: 30
            }
        ]
    },
    day2_7_1: {
        text: "(선배가 당황한다) ㄹ..라면? 니 지금 내한테 플러팅하는거가.",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "아니면 집에 볶음밥도 있는데",
                next: "day2_7_1_1",
                score: 5
            },
            {
                text: "제가 설마 야구부 몸관리 하는 사람한테 라면을 줄까요",
                next: "day2_7_1_1",
                score: 10
            }
        ]
    },
    day2_7_1_1: {
        text: "(선배가 당황한다) 니 요리할줄아나.",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "선배 설마 저 못 믿으세요?",
                next: "day2_7_1_2",
                score: 10
            },
            {
                text: "선배, 선배가 해주시는거에요?",
                next: "day2_7_1_2",
                score: 0
            }
        ]
    },
    day2_7_1_2: {
        text: "꼬붕아 노인공경 모르나. 당연히 니가 해줘야지",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "진짜 선배 왜그러세요..",
                next: "day2_7_1_4",
                score: 10
            },
            {
                text: "선배 제가 독 타도 그냥 드실거에요?",
                next: "day2_7_1_3",
                score: 0
            }
        ]
    },
    day2_7_1_3: {
        text: "됐다. 그럴거면 안가지.",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "선배 아 진짜 장난이에요..",
                next: "day2_7_1_4",
                score: 10
            },
            {
                text: "아.. 알겠어요..",
                next: "day2_7_1_4",
                score: 0
            }
        ]
    },
    day2_7_1_4: {
        text: "ㅋㅋㅋㅋㅋㅋ 니 귀여워서 함 놀려봤다.\n하여튼 학교끝나고 내 교실 앞으로 와라",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "알겠어요!",
            next: "day2_7_1_5",
            score: 10
        }]
    },
    day2_7_1_5: {
        text: "학교끝나고 선배의 교실앞에서 기다린다.\n3학년 선배들이 지나가는데 너무 무섭다.",
        character: "images/선배_당황.png",
        name: "나레이션",
        choices: [{
            text: "아.. 선배 언제 나오지..",
            next: "day2_7_1_6",
            score: 0
        }]
    },
    day2_7_1_6: {
        text: "꼬붕이라 말은 잘 듣네.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "선배 진짜 얼릉 가요 3학년 복도에 있기 무서워요..",
            next: "day2_7_1_7",
            score: 0
        }]
    },
    day2_7_1_7: {
        text: "니가 내 꼬붕인이상 에겐남은 용납 못한데이.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
                text: "어라.. 선배 그게 말이에요",
                next: "day2_7_1_8",
                score: 0
            },
            {
                text: "저 이미 테토남인데요",
                next: "day2_7_1_8",
                score: 0
            }
        ]
    },
    day2_7_1_8: {
        text: "잔말말고 안내 시작해라.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "도대체 저 선배 뭐지..",
            next: "day2_7_1_9",
            score: 0
        }, ]
    },
    day2_7_1_9: {
        text: `{user}의 집에 온 ${선배}도 진도가 빠르단건 알고있다. 하지만 어쩌겠나. 이미 후배의 집 앞에 와있다.`,
        character: "",
        background: "images/아파트.png",
        name: "나레이션",
        choices: [{
            text: "선배 저희집 여기에요",
            next: "day2_7_1_10",
            score: 0
        }]
    },
    day2_7_1_10: {
        text: "꼬붕아. 집에 뭐 있나.",
        character: "images/선배1.png",
        background: "images/집안.png",
        name: 선배,
        choices: [{
                text: "선배, 제가 밥해드릴게요",
                next: "day2_7_1_11",
                score: 0
            },
            {
                text: "저희집에 라면 뭐 그런거 있는데..",
                next: "day2_7_1_11",
                score: 0
            }
        ]
    },
    day2_7_1_11: {
        text: "왜 니가 할생각을 하노. 냄비 좀 줘 봐라.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "어.. 네..",
            next: "day2_7_1_12",
            score: 0
        }]
    },
    day2_7_1_12: {
        text: "(선배는 라면을 끓인다. 익숙하게 능숙한 솜씨로 라면을 끓인다)\n꼬붕아 나 이제 다 했는데",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "아 식탁 준비 다 했어요!",
            next: "day2_7_1_13",
            score: 0
        }]
    },
    day2_7_1_13: {
        text: "(선배와 라면을 먹는데, 선배가 말을 걸어온다.) 꼬붕아 나 셰프할까 차라리",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "맛있기는 한데 선배는 야구가 더 어울려요",
                next: "day2_7_1_14_1",
                score: 0
            },
            {
                text: "손셰프님~ ㅋㅋㅋㅋㅋ",
                next: "day2_7_1_14_2",
                score: 0
            }
        ]
    },
    day2_7_1_14_1: {
        text: "막 그렇게 돌려안말해도 된다.",
        name: 선배,
        choices: [{
            text: "(왜 물어본거야 도대체)",
            next: "day2_7_1_15",
            score: 0
        }]
    },
    day2_7_1_14_2: {
        text: "근데 나중에 결혼해서 여자 데리고살라면 이정도는 헤야된데이.",
        name: 선배,
        choices: [{
            text: "(왜 물어본거야 도대체)\n하하하 맞죠맞죠..",
            next: "day2_7_1_15",
            score: 0
        }]
    },
    day2_7_1_15: {
        text: "뭐 어쨌거나 여기 오래있기 좀 그러니 이제 슬슬 집에 가봐야겠노",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "아 선배 역까지 같이가요!",
                next: "day2_7_1_16_1",
                score: 0
            },
            {
                text: "너무 아쉽다..",
                next: "day2_7_1_16_2",
                score: 0
            }
        ]
    },
    day2_7_1_16_1: {
        text: "그래? 그럼 같이 가자.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "제가 모셔다 드려야죠~",
            next: "day2_7_1_17",
            score: 10
        }, ]
    },
    day2_7_1_16_2: {
        text: "나 근데 여기는 잘 모르는데 데려다줄수 있나.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "설마 제가 안모셔다 드릴까봐~ 제가 모셔다 드려야죠~",
            next: "day2_7_1_17",
            score: 10,
        }]
    },
    day2_7_1_17: {
        text: "선배를 역에 데려다드린다.\n선배는 개찰구를 통과하기전까지도 나를보며 웃어준다.",
        character: "",
        background: "images/역.webp",
        name: "나",
        choices: [{
            text: "(다음)",
            next: "day3",
            score: 0,
            nextDay: true
        }, ]
    },
    day2_7_2_1: {
        text: "내는 고기국밥 아니면 안먹는데이.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "선배 진짜 뼛속까지 부산사람이네..",
                next: "day2_7_2_2",
                score: 0
            },
            {
                text: "아.. 전 콩나물국밥인데..",
                next: "day2_7_2_2_1",
                score: 0
            }
        ]
    },
    day2_7_2_2: {
        text: "와. 니 부산사람 반응 첨보나",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "그런건 아니지만 전 선배같은사람이 제일 좋아요!",
                next: "day2_7_2_3",
                score: 0
            },
            {
                text: "네.. 처음봐요",
                next: "day2_7_2_3",
                score: 0
            }
        ]
    },
    day2_7_2_2_1: {
        text: "뭐라노. 임마 낭만을 모르노",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "하하하..\n(도대체 뭐하는거지)",
            next: "day2_7_2_3",
            score: 0
        }, ]
    },
    day2_7_2_3: {
        text: "뭐 어쨌든 학교근처에 맛있는 국밥집 있으니께 좀따 학교끝나고 내한테 와라.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "네!",
            next: "day2_7_2_4",
            score: 0
        }]
    },
    day2_7_2_4: {
        text: "학교끝나고 선배의 교실앞에서 기다린다.\n3학년 선배들이 지나가는데 너무 무섭다.",
        character: "images/선배_당황.png",
        name: "나레이션",
        choices: [{
            text: "아.. 선배 언제 나오지..",
            next: "day2_7_2_5",
            score: 0
        }]
    },
    day2_7_2_5: {
        text: "꼬붕이라 말은 잘 듣네.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "선배 진짜 얼릉 가요 3학년 복도에 있기 무서워요..",
            next: "day2_7_2_6",
            score: 0
        }]
    },
    day2_7_2_6: {
        text: "니가 내 꼬붕인이상 에겐남은 용납 못한데이.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
                text: "어라.. 선배 그게 말이에요",
                next: "day2_7_2_7",
                score: 0
            },
            {
                text: "저 이미 테토남인데요",
                next: "day2_7_2_7",
                score: 0
            }
        ]
    },
    day2_7_2_7: {
        text: "잔말말고 따라온나",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "도대체 저 선배 뭐지..",
            next: "day2_7_2_8",
            score: 0
        }, ]
    },
    day2_7_2_8: {
        text: ` ${선배}와 밥먹으러온 {user}, 뭘 먹어야할지 고민한다.`,
        character: "",
        background: "images/국밥집.jpg",
        name: "나레이션",
        choices: [{
                text: "선배, 저 선배가 추천해주는거 먹을래요!",
                next: "day2_7_2_9",
                score: 5
            },
            {
                text: "저는 콩나물국밥 먹을래요!",
                next: "day2_7_2_9_1",
                score: 0
            }
        ]
    },
    day2_7_2_9: {
        text: "그럼 내가 좋아하는 소고기국밥 먹어봐라.\n 이모~ 여기 소고기 2개요~",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "역시 선배는 선배군..",
            next: "day2_7_2_10",
            score: 0
        }, ]
    },
    day2_7_2_9_1: {
        text: "뭐라노. 꼬붕아 그 에겐같은거 내가 하지 말라했지",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "아.. 힝..",
                next: "day2_7_2_9_2",
                score: 0
            },
            {
                text: "저희 아빠가 즐겨드시는건데..",
                next: "day2_7_2_9_3",
                score: 0
            }
        ]
    },
    day2_7_2_9_2: {
        text: "정원하면 시키던가.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "앗싸 야로야로~",
            next: "day2_7_2_10",
            score: 0
        }, ]
    },
    day2_7_2_9_3: {
        text: "어린놈의 애가 벌써부터 탈룰라를 쓰노..\n니가 그렇게 원한다면 시키던가..",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "앗싸 야로야로~",
            next: "day2_7_2_10",
            score: 0
        }, ]
    },
    day2_7_2_10: {
        text: "선배와 맛있는 국밥을 먹는다. 선배는 국밥을 먹으면서 {user}의 입맛에 맞는지 궁금해한다.",
        character: "images/선배1.png",
        name: "나레이션",
        choices: [{
                text: "선배, 국밥 너무 맛있어요!!!",
                next: "day2_7_2_11",
                score: 10
            },
            {
                text: "선배여기 깍두기가 맛있네요!!",
                next: "day2_7_2_11",
                score: -5
            }
        ]
    },
    day2_7_2_11: {
        text: "선배는 {user}가 국밥을 맛있게 먹는 모습을 보며 흐뭇해한다. 선배는 {user}가 부산 음식도 잘 맞는 것 같다고 생각한다.",
        character: "images/선배1.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day2_7_2_12",
            score: 0
        }, ]
    },
    day2_7_2_12: {
        text: "밥을 다 먹고 나서 선배는 야자를 하러가자고 한다,",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "아 좋아요!! 선배 오늘 제 옆자리에서 같이 하실래요?",
                next: "day2_7_2_12_1",
                score: 10
            },
            {
                text: "어... 좋아요!! 근데 저 오늘은 친구들이랑 같이 야자할거라..",
                next: "day2_7_2_12_2",
                score: 0
            }
        ]
    },
    day2_7_2_12_1: {
        text: "그래? 그럼 오늘은 니 옆자리에서 같이 하자.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "네! 좋아요!",
            next: "day3",
            score: 10,
            nextDay: true
        }, ]
    },
    day2_7_2_12_1_1: {
        text: "선배와 함께 야자를 한다.\n선배는 {user}가 옆에 있어서 기분이 좋은지 자주 웃는다.\n선배는 {user}와 함께 야자하는 시간이 너무 즐거운 것 같다.",
        character: "images/선배1.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day3",
            score: 0,
            nextDay: true
        }, ]
    },
    day2_7_2_12_2: {
        text: "아 그런거였나. 알겠다 나중에 또 보자",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "넵! 선배 열공하세요!!",
            next: "day3",
            score: 0,
            nextDay: true
        }]
    },
    //3일차:선배와의 급식실데이트
    day3: {
        text: "오늘은 급식실에서 선배랑 안마주치겠지?",
        background: "images/급식실.png",
        name: "{user}",
        choices: [{
            text: "(다음)",
            next: "day3_1",
            score: 0
        }, ]
    },
    day3_1: {
        text: "(급식실에서 혼자 밥을 먹고 있는데, 선배가 갑자기 나타난다.)\n선배는 {user}를 보고 놀란 표정을 짓는다.",
        character: "images/선배_당황.png",
        name: "나레이션",
        choices: [{
            text: "(선배가 왜 갑자기 나타난거지?)",
            next: "day3_2",
            score: 0
        }, ]
    },
    day3_2: {
        text: "꼬붕아 니 오늘도 또 보네 ㅋㅋㅋㅋㅋ",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "아,, 안녕하세요",
            next: "day3_3",
            score: 0
        }, ]
    },
    day3_3: {
        text: "니 옆자리 내가 앉아도 되나.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "아,, 좋아요",
                next: "day3_4_1",
                score: 0
            },
            {
                text: "아,, 저..그..",
                next: "day3_4_2",
                score: 0
            },
        ]
    },
    day3_4_1: {
        text: "(선배가 옆자리에 앉는다.)\n선배는 {user}를 보며 웃는다.",
        character: "images/선배_웃음.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day3_5",
            score: 0
        }, ]
    },
    day3_4_2: {
        text: "(선배는 {user}가 뭐라든 그냥 앉는다.)\n선배는 {user}를 보며 웃는다.",
        character: "images/선배_웃음.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day3_5",
            score: 0
        }, ]
    },
    day3_5: {
        text: "(선배와 함께 밥을 먹는다. 선배는 {user}가 밥을 맛있게 먹는 모습을 보며 흐뭇해한다.)\n꼬붕아. 니 밥 먹는 모습이 참 귀엽네.",
        character: "images/선배_웃음.png",
        name: "나레이션",
        choices: [{
                text: "아 진짜요?",
                next: "day3_6",
                score: 0
            },
            {
                text: "아 진짜요?(선배가 왜 갑자기 그런 말을 하는거지?)",
                next: "day3_6",
                score: -20
            },
            {
                text: "선배가 더 귀여우면서 거짓말하지 마요~",
                next: "day3_6",
                score: 10
            },
        ]
    },
    day3_6: {
        text: "사실 뭐.. 그건 그렇고.. 니 낼모래 뭐하노?",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "아.. 저 딱히 약속은 없는데..",
                next: "day3_7_1",
                score: 0
            },
            {
                text: "아.. 저 선배랑 놀고싶어요",
                next: "day3_7_2",
                score: 10
            },
        ]
    },
    day3_7_1: {
        text: "그러면 (선배가 주머니에서 꼬깃꼬깃한 야구티켓을 보여준다)\n니 내랑 야구장 갈래?",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "어??? 좋아요!!!",
                next: "day3_7_1_1",
                score: 0
            },
            {
                text: "아.. 저 야구장은 음.. 그렇게..",
                next: "day3_7_1_2",
                score: -10
            }
        ]
    },
    day3_7_2: {
        text: "ㅋㅋㅋㅋㅋ 니 내랑 그렇게 놀고싶나\n내 안그래도 야구장티켓 생겨서 니랑 보러갈까 하는데.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "와 선배 이번주 한화전 저 진짜 너무 가고싶었는데 선배진짜 센스만점 너무사랑해요!!!!!!!",
            next: "day3_7_1_1",
            score: 50
        }]
    },
    day3_7_1_1: {
        text: "알았데이. 그러면 니 낼모래 학교끝나고 내 교실로 와라.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "(그사이에 밥을 다 먹은{user})네!! 선배 저 먼저 가볼게요!!",
            next: "day4start",
            score: 10,
            nextDay: true,
            event: true
        }, ]
    },
    day3_7_1_2: {
        text: "아.. 뭐 그런거였나.. 알겠다. 나중에 또 보자.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "아, 네",
                next: "day4start",
                score: 0,
                nextDay: true
            },
            {
                text: "(ㅅㅂ진짜지랄이야) 아 네.",
                next: "day4start",
                score: -80,
                nextDay: true
            }
        ]
    },
    //4일차:선배와의 노래방데이트
    day4start: {
        text: "휴.. 6교시까지 선배 안마주쳤으니 오늘도 안마주치겠지?",
        character: "",
        background: "images/학교복도.png",
        name: "{user}",
        choices: [{
            text: "(다음)",
            next: "day4_1",
            score: 0
        }, ]
    },
    day4_1: {
        text: "꼬붕이 오늘또 또 보네 ㅋㅋㅋㅋ",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "아.. 안녕하세요",
            next: "day4_2",
            score: 0
        }, ]
    },
    day4_2: {
        text: "꼬붕아. 니 오늘 나랑 노래방 갈 생각 없나?",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
                text: "노래방이요??(긍정적)",
                next: "day4_3",
                score: 10
            },
            {
                text: "어... 노래방이라..(부정적)",
                next: "day4_4",
                score: -10
            }
        ]
    },
    day4_3: {
        text: "그럼 좀따 학교끝내고 내 교실 앞에서 보제이~",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "저 선배 도대체 뭐지...",
            next: "day4_5",
            score: 0
        }]
    },
    day4_4: {
        text: "니 노래방 싫어하나.. 알았데이..",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
            text: "(선배가 그냥 가버려서 더는 대화를 이어나가기 어려울 것 같다.)",
            next: "day5start",
            score: -30,
            nextDay: true
        }]
    },
    day4_5: {
        text: "학교끝나고 선배의 교실앞에서 기다린다.\n3학년 선배들이 지나가지만 이제는 별거 아닌 것 처럼 느껴진다.",
        name: "나레이션",
        background: "images/학교복도.png",
        choices: [{
            text: "아.. 선배 언제 나오지..",
            next: "day4_6",
            score: 0
        }]
    },
    day4_6: {
        text: "꼬붕이라 말은 잘 듣네.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "(선배가 다른 선배들을 데려왔다)",
            next: "day4_7",
            score: 0
        }]
    },
    day4_7: {
        text: "니가 얘 꼬붕이냐~",
        character: "images/강민호.png",
        name: "강민호선배",
        choices: [{
            text: "아.. 네..",
            next: "day4_8",
            score: 0
        }]
    },
    day4_8: {
        text: "꼬붕치고 잘생긴거 아니냐.",
        character: "images/양의지.png",
        name: "양의지선배",
        choices: [{
            text: "(다음)",
            next: "day4_9",
            score: 0
        }]
    },
    day4_9: {
        text: "마. 질투나나 ㅋㅋㅋㅋㅋ.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "(저선배 또 시작이네...)",
            next: "day4_10",
            score: 0
        }]
    },
    day4_10: {
        text: "선배들과 노래방에 가게된 {user}.\n선배들이 먼저 선곡을 하는동안 {user}는 무엇을 부를지 고민한다.",
        character: "",
        background: "images/노래방.png",
        name: "나레이션",
        choices: [{
            text: "아.. 뭐부르지..",
            next: "day4_11",
            score: 0
        }]
    },
    day4_11: {
        text: "(양의지와 강민호가 노래를 부르는동안" + 선배 + "는{user}에게 다가가 말을 건다.)\n니 내랑 애상 함 부르자. 니가 여자파트해라.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "오 선배 이 노래 아세요???",
                next: "day4_12",
                score: 0
            },
            {
                text: "아.. 네..",
                next: "day4_13",
                score: 0
            }
        ]
    },
    day4_12: {
        text: "그럼 이걸 모를줄 알았나 이 꼬붕아.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
                text: "하하하..",
                next: "day4_13",
                score: 0
            },
            {
                text: "저 진짜 좋아하거든요!",
                next: "day4_13",
                score: 10
            }
        ]
    },
    day4_13: {
        text: "선배와 함께 애상을 부른다.\n선배는 {user}가 노래를 잘 부르는 모습을 보며 흐뭇해한다.",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "(다음)",
            next: "day4_14",
            score: 30
        }]
    },
    day4_14: {
        text: "(노래가 끝난 후)\n야 니는 노래방 와서 꼬붕이랑 부른단게 애상이냐",
        character: "images/강민호.png",
        name: "강민호선배",
        choices: [{
            text: "(다음)",
            next: "day4_15",
            score: 0
        }]
    },
    day4_15: {
        text: "ㅋㅋㅋㅋㅋ 꼬붕이 취향이라는데 선배가 맞춰줘야하지 않겠나 ㅋㅋㅋㅋ",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "하하하..",
            next: "day4_16",
            score: 0
        }]
    },
    day4_16: {
        text: "선배들과 노래방에서 즐거운 시간을 보낸다.\n선배들은 {user}가 노래를 부를때마다 못미덥긴 했지만, " + 선배 + "만은 아주 좋아하는것 같다.",
        character: "images/선배1.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day4_17",
            score: 20
        }]
    },
    day4_17: {
        text: "노래방에서 나와 선배들과 함께 집으로 향한다.\n양의지선배와 강민호선배는 지하철을 타지 않아서 " + 선배 + "와 지하철역으로 향했다.",
        character: "",
        background: "images/길거리.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day4_18",
            score: 0
        }]
    },
    day4_18: {
        text: "선배와 있어서 너무 즐거웠다고 말하니, 선배도 즐거웠다고 말을 한다.\n선배가 내릴 역에 도착하자 {user}는 아쉬워했지만, 선배는 다음에 또 보자고 말을 한다.",
        character: "images/선배1.png",
        name: "나레이션",
        background: "images/지하철.webp",
        choices: [{
            text: "네! 선배 다음에 또 봐요!",
            next: "day5",
            score: 10,
            nextDay: true
        }]
    },
    //5일차:선배와의 야구장데이트
    day5start: {
        text: "오늘은 한화와 롯데의 경기를 보러 가는 날이다. 선배의 말대로 선배의 교실 앞에서 선배를 기다린다.",
        character: "",
        background: "images/학교복도.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day5_1",
            score: 0
        }, ]
    },
    day5_1: {
        text: "선배가 야구장에 갈 패션으로 나타났다.",
        character: "images/선배_야구복.webp",
        name: "나레이션",
        choices: [{
                text: "선배 오늘 패션은 좀..",
                next: "day5_2",
                score: 0
            },
            {
                text: "와 선배 오늘 패션 너무 멋있어요!!",
                next: "day5_2_1",
                score: 10
            }
        ]
    },
    day5_2: {
        text: "뭐라노. 원래 야구장갈때 이렇게 하고 가야한다.",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "아잇 선배 한국말은 끝까지 들어야죠 멋있다고요!!",
                next: "day5_3",
                score: 20
            },
            {
                text: "하하.. 그렇긴 하죠",
                next: "day5_3",
                score: 0
            }
        ]
    },
    day5_2_1: {
        text: "ㅋㅋㅋㅋㅋㅋ 고맙데이. 니가 그렇게 말해주니까 기분 좋네.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "(다음)",
            next: "day5_3",
            score: 0
        }]
    },
    day5_3: {
        text: "선배와 함께 야구장에 간다.\n선배는 야구장에 가는 길에도 계속해서 말을 건다.",
        character: "images/선배_야구복.webp",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day5_4",
            score: 0
        }]
    },
    day5_4: {
        text: "오늘은 한화와 롯데의 경기. 선발투수는 신인괴물투수라고 불리는 류현진이다. 선배는 한화가 이길거라며 기대를 한다.",
        character: "images/선배_야구복.webp",
        background: "images/야구장.png",
        name: "나레이션",
        choices: [{
            text: "(다음)",
            next: "day5_5",
            score: 0
        }]
    },
    day5_5: {
        text: "한화이글스의 공격이 시작되자 한화는 선배의 기대와는 달리 3회까지 점수를 내지 못한다.\n선배는 점점 초조해하는 모습을 보인다.",
        character: "images/선배_초조.png",
        name: "나레이션",
        choices: [{
            text: "선배, 그래도 오늘은 한화가 꼭 이길거니까 걱정하지 마요 ㅋㅋㅋ",
            next: "day5_6",
            score: 0
        }]
    },
    day5_6: {
        text: "한화이글스의 4회초 공격이 시작하자 2점을 내면서 선배는 엄청나게 좋아한다. 하지만 4회말 롯데가 3점을 주면서 상황은 역전이 된다.",
        character: "images/선배_초조.png",
        name: "나레이션",
        choices: [{
            text: "선배,, 그래도 아직 5이닝 남았잖아요 할 수 있을거에요!!",
            next: "day5_7",
            score: 0
        }, ]
    },
    day5_7: {
        text: "그러다 5회초에 한화가 3점을 내며 다시 역전을 하게된다. 선배는 진짜 너무 좋아한다.",
        character: "images/선배_웃음.png",
        name: "나레이션",
        choices: [{
            text: "선배 거봐요 한화 오늘 이긴다니깐요?",
            next: "day5_8",
            score: 0
        }]
    },
    day5_8: {
        text: "(선배가 경기를 보면서 말을 건다)\n니는 언제부터 야구를 좋아했나.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
                text: "저는.. 사실 뭐 오래되진 않았지만.. 주변 영향이 좀 컸던것같아요.",
                next: "day5_9_1",
                score: 0
            },
            {
                text: "손광민 니때문에 내가 야구 보게 된거라고.",
                next: "day5_9_2",
                score: 10
            }
        ]
    },
    day5_9_1: {
        text: "뭐.. 그렇고만 나도 주변에서 애들이랑 야구장 자주 가갖고 야구 보게된건데 어쩌다보니까 내가 야구를 하고있더라.",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "ㅋㅋㅋㅋㅋ 선배근데 진짜 하시는거보면 한화 들어갈것같은데 ㅋㅋㅋ",
            next: "day5_10",
            score: 0
        }]
    },
    day5_9_2: {
        text: "..뭐라노 손광민 점마가 누군데. 근데 왜 내한테 니라하나.",
        character: "images/선배_당황.png",
        name: 선배,
        choices: [{
                text: "아.. 사실 제가 타임머신타고 와서 선배의 미래를 알아요",
                next: "day5_9_3",
                score: 0
            },
            {
                text: "아.. 그런게 있어요 하하하",
                next: "day5_10",
                score: 0
            }
        ]
    },
    day5_9_3: {
        text: "니 정신머리가 타임머신타고간거 아이가 ㅋㅋㅋ 재밌네",
        character: "images/선배_웃음.png",
        name: 선배,
        choices: [{
            text: "하하하..",
            next: "day5_10",
            score: 0
        }]
    },
    day5_10: {
        text: "선배와 스몰토크를 하면서 야구경기를 계속 즐긴다.\n그런데 9회말까지 한화가 2점차로 이기고 있었는데, 롯데가 2점을 내면서 동점이 되고 결국 연장전에 들어가게 된다.",
        character: "images/선배_초조.png",
        name: "나레이션",
        choices: [{
            text: "선배,, 괜찮으세요..?",
            next: "day5_11",
            score: 0
        }, ]
    },
    day5_11: {
        text: "선배는 연장전이 시작되자 점점 더 초조해하는 모습을 보인다.\n그러다 12회초에 한화가 1점을 내면서 다시 리드를 하게된다.",
        character: "images/선배_초조.png",
        name: "나레이션",
        choices: [{
            text: "선배 우리 막을 수 있을거에요 아자아자!!",
            next: "day5_12",
        }]
    },
    day5_12: {
        text: "결국 한화는 12회 말에 문동환이 잘 막아내면서 한화의 승리로 끝이 나게 되었다.",
        character: "images/선배_웃음.png",
        name: "나레이션",
        choices: [{
            text: "선배 이제 11시간 하지만 이겼네요.. 선배 진짜 오늘 경기 보시느냐고 수고하셨어요..!!!",
            next: "day5_13",
            score: 10
        }, ]
    },
    day5_13: {
        text: "(선배와 최근에 생긴 3호선을 타러간다.)\n니 이렇게 야구 광팬인줄 몰랐다. 니 나중에 내가 야구선수해갖고 안타 못치면 쫓아오는거 아이가 ㅋㅋㅋㅋ",
        character: "images/선배_웃음.png",
        background: "images/역.webp",
        name: 선배,
        choices: [{
                text: "뭐야 선배 진짜 눈치 하나는 빠르시네요 ㅋㅋㅋ",
                next: "day5_14",
                score: 10
            },
            {
                text: "에이 선배 사생도 아니고 그게 무슨소리에요..",
                next: "day5_14",
                score: 10
            }
        ]
    },
    day5_14: {
        text: "뭐 하여튼 야구만 잘하면 되는거지. 근데 오늘은 니랑 내랑 연산에서 따로 타야되겠네..",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "그러게요 너무 아쉽다..",
            next: "day5_15",
            score: 0
        }]
    },
    day5_15: {
        text: "내일이 놀토라 망정이지 학교갔으면 지금 이러고 있지도 못했다 ㅋㅋㅋ",
        character: "images/선배1.png",
        name: 선배,
        choices: [{
            text: "그니까요 ㅋㅋㅋㅋ",
            next: "day5_16",
            score: 0
        }]
    },
    day5_16: {
        text: "이제 선배와 갈라져서 타야하는 연산역에 도착하고 선배와 나는 서로 인사를 한뒤에 헤어졌다. 선배는 오늘 굉장히 좋았나보다.",
        character: "",
        name: "나레이션",
        choices: [{
            text: "(다음 날)",
            next: "day6start",
            score: 50,
            nextDay: true
        }]
    },
    //6일차:선배와의 전화데이트
    day6start: {
        text: "갑자기 선배에게서 전화가 막 걸려온다.\n선배와는 노래방에서 헤어지기 전에 전번교환을 했다.",
        character: "",
        name: "나레이션",
        background: "images/집안",
        choices: [{
            text: "전화를 안받기는 뭐한데.. 일단 받아나 볼까?",
            next: "day6_1",
            score: 0
        }]
    },
    day6_1: {
        text: "꼬붕아~ 뭐하고 있었노.",
        character: "images/핸드폰",
        name: 선배,
        choices: [{
                text: "아 저,, 그냥 놀토니까 침대에서 있었죠!!!",
                next: "day6_2",
                score: 0
            },
            {
                text: "선배 연락 기다리고 있었어요!",
                next: "day6_3",
                score: 100
            },
        ]
    },
    day6_2: {
        text: "침대는 니 싫어한데이",
        character: "images/핸드폰.png",
        name: 선배,
        choices: [{
                text: "침대야 니는 내 못이긴데이~",
                next: "day6_4",
                score: 50
            },
            {
                text: "무슨소리에요 ㅋㅋㅋ",
                next: "day6_4",
                score: 10
            },
        ]
    },
    day6_3: {
        text: "임마 사회생활 할줄아네 ㅋㅋㅋㅋㅋ",
        character: "images/핸드폰.png",
        name: 선배,
        choices: [{
                text: "아잇 선배님 과찬이십니다",
                next: "day6_4",
                score: 50
            },
            {
                text: "슈퍼 대스타님이 하시는데 당연히 기다려야죠 지금 무슨소리세요.",
                next: "day6_4",
                score: 50
            },
        ]
    },
    day6_4: {
        text: "뭐... 니 생각나서 했다는건 아니고,, 일종의 팬서비스차원에서 해본거다",
        character: "images/핸드폰.png",
        name: 선배,
        choices: [{
                text: "결국엔 자기가 생각나서 한거면서 ㅋㅋㅋㅋㅋ",
                next: "day6_5",
                score: 10
            },
            {
                text: "역시 부산고 에이스 손아섭",
                next: "day6_5",
                score: 20
            },
        ]
    },
    day6_5: {
        text: "니 그 서울에서 내려왔으면 서면 뭔지 아나.",
        name: 선배,
        character: "images/핸드폰.png",
        choices: [{
            text: "서면이요? 국수집 이름이에요?",
            next: "day6_6",
            score: 0
        }]
    },
    day6_6: {
        text: "서면이 뭔지 모르나.. 그 서면이라고 동네 있는데 니 내일 서면 나올 수 있나.",
        name: 선배,
        character: "images/핸드폰.png",
        choices: [{
            text: "어... 몇시까지 가면 되는거에요?",
            next: "day6_7",
            score: 0
        }]
    },
    day6_7: {
        text: "서면역이라고 1호선타면 있는데 니 서면역 4번출구로 3시까지 와라.",
        name: 선배,
        character: "images/핸드폰.png",
        choices: [{
            text: "아... 넵!",
            next: "day6_8",
            score: 0
        }]
    },
    day6_8: {
        text: "아. 니 저녁 뭐 먹고싶나.",
        name: 선배,
        character: "images/핸드폰.png",
        choices: [{
            text: "어.. 파스타? 먹고싶어요!!",
            next: "day6_9",
            score: 0
        }]
    },
    day6_9: {
        text: "마 니 파스타 좋아하나\n진짜 에겐이네.",
        name: 선배,
        character: "images/핸드폰.png",
        choices: [{
            text: "아.. 그 다른거라면..",
            next: "day6_10",
            score: 0
        }]
    },
    day6_10: {
        text: "됐다 뭘 또 바꾸나.. 이미 머리속에 지도 그리고있다.",
        name: 선배,
        character: "images/핸드폰.png",
        choices: [{
            text: "오.. 선배가 이끌어주신다니..",
            next: "day6_11",
            score: 0
        }]
    },
    day6_11: {
        text: "서면 모르는놈한테 뭘 바라노. 내일 3시까지 온나.",
        name: 선배,
        character: "images/핸드폰.png",
        choices: [{
            text: "넵 선배!! 내일 뵈어요!!",
            next: "day7start",
            score: 0,
            nextDay: true
        }]
    },
    //7일차:선배와의 서면데이트 ->고백, 게임오버 여기서부터 불가
    day7start: {
        text: "음.. 서면역 엄청 복잡하네..\n선배는 어디까지 오셨을라나..",
        background: "images/서면.png",
        name: '{user}',
        character: "",
        choices: [{
            text: "(다음)",
            next: "day7_1",
            score: 0
        }]
    },
    day7_1: {
        text: "꼬붕아.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
                text: "오 미친 존나 잘생겼다",
                next: "day7_2",
                score: 50
            },
            {
                text: "저 사이비 안믿어요.",
                next: "day7_2",
                score: 0
            },
        ]
    },
    day7_2: {
        text: "임마 뭐라는거고?\n서면 왔는데 뭐 재밌게 놀아야지 않겠나.\n사람 많으니까 잘 따라와라.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
                text: "넵!!",
                next: "day7_3",
                score: 10
            },
            {
                text: "재밌겠다~~",
                next: "day7_3",
                score: 10
            },
        ]
    },
    day7_3: {
        text: "그렇게 선배와 나는 서면 전포동을 돌아댕기며 옷도 사고, 배팅장도 가고, 선배의 재미없는 농담에 웃어주기도 했지만, 결코 선배가 나쁘지많은 않다.",
        name: "나레이션",
        character: "images/핸드폰.png",
        choices: [{
            text: "(다음)",
            next: "day7_4",
            score: 0
        }]
    },
    day7_4: {
        text: "니 안배고프나.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "음.. 이제 좀 슬슬 배고프네요..",
            next: "day7_5",
            score: 0
        }]
    },
    day7_5: {
        text: "이제 밥 무러 가자.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "좋아요!!!",
            next: "day7_6",
            score: 0
        }]
    },
    day7_6: {
        text: 선배 + "와 파스타집에 오게된 {user}, 선배와 메뉴를 정하고 파스타를 주문한다.",
        name: "나레이션",
        background: "images/파스타집.png",
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_7",
            score: 0
        }]
    },
    day7_7: {
        text: "선배는 뭔가 파스타집이 처음인것같아 이후에 뭘 해야할지를 모르는듯 했다.",
        name: "나레이션",
        character: "images/멋있는선배.png",
        choices: [{
            text: "(수저 포크를 놓으며)선배, 혹시 피클 드세요?",
            next: "day7_8",
            score: 0
        }]
    },
    day7_8: {
        text: "뭐.. 안먹지는 않는데 왜.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "그러면 피클좀 가져올게요!!",
            next: "day7_9",
            score: 0
        }]
    },
    day7_9: {
        text: "피클을 가져오면서 음료수도 챙겨온다.",
        name: "나레이션",
        character: "",
        choices: [{
            text: "(다음)",
            next: "day7_10",
            score: 10
        }]
    },
    day7_10: {
        text: "오 꼬붕이 임마 센스가 좋네 ㅋㅋㅋㅋ",
        name: 선배,
        character: "images/선배_웃음.png",
        choices: [{
            text: "ㅋㅋㅋㅋㅋㅋ 이정도는 기본이죠~~",
            next: "day7_11",
            score: 50
        }]
    },
    day7_11: {
        text: "선배와 스몰토크를 하고있는 도중 파스타가 나왔다.",
        name: "나레이션",
        character: "images/멋있는선배.png",
        choices: [{
            text: "오 맛있겠다!!",
            next: "day7_12",
            score: 0
        }]
    },
    day7_12: {
        text: "내가 꼬붕이 니때문에 여친있는 애들한테 다 수소문했는데 맛없으면 안되는거 아이가ㅋㅋㅋ",
        name: 선배,
        character: "images/선배_웃음.png",
        choices: [{
            text: "ㅋㅋㅋㅋ 감사합니다!!",
            next: "day7_13",
            score: 50
        }]
    },
    day7_13: {
        text: "뭐.. 엔빵이긴 하지만 맛있게 먹어라",
        name: "선배",
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_14",
            score: 0
        }]
    },
    day7_14: {
        text: "(선배는 뭔가 먹는게 어색해보이지만 한편으로는 귀여우시네~)",
        name: '{user}',
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_15",
            score: 0
        }]
    },
    day7_15: {
        text: "선배, 저 선배꺼 한번 먹어볼래요!",
        name: '{user}',
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_16",
            score: 0
        }]
    },
    day7_16: {
        text: "그래 함 무 봐라",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_17",
            score: 0
        }]
    },
    day7_17: {
        text: "선배꺼 엄청 맛있네요 ㅋㅋㅋ 이걸로 시킬껄 그랬나...",
        name: '{user}',
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_18",
            score: 0
        }]
    },
    day7_18: {
        text: "선배와 밥을 다 먹고나서 집에 가는 길이었다.",
        name: "나레이션",
        background: "images/서면_밤.jpg",
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_19",
            score: 0
        }]
    },
    day7_19: {
        text: ".. 선배 서면 밤길이 참 멋있네요",
        name: '{user}',
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_20",
            score: 0
        }]
    },
    day7_20: {
        text: "선배. 근데요..\n저 사실,, 요즘따라 선배만 보면 미칠것같고, 사실 선배랑 요즘 있는 시간들이 많이 재밌는것같아요. 처음에는 이 선배가 진짜 미친건가 뭐하는 새낀지 이해가 전혀 되지 않았는데, 선배랑 있는 시간동안 선배의 진심도 느껴진것같고,, 그냥 모르겠어요.. 그냥 저 지금 선배를 너무 좋아하나봐요..",
        name: '{user}',
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_21",
            score: 0
        }]
    },
    day7_21: {
        text: "...",
        name: 선배,
        character: "images/선배_당황.png",
        choices: [{
            text: "(선배 많이 당황하셨나..)",
            next: "day7_22",
            score: 0
        }]
    },
    day7_22: {
        text: "ㅋㅋㅋㅋㅋㅋㅋㅋ 니 나 그렇게 좋아했나. \n이놈의 인기란..\n근데 마. 고백멘트가 그게 뭐꼬 ㅋㅋㅋㅋㅋ 내가 에겐 안받는다 했지.",
        name: 선배,
        character: "images/선배_웃음.png",
        choices: [{
            text: "(다음)",
            next: "day7_23",
            score: 0
        }]
    },
    day7_23: {
        text: "뭐 근데 나도 니가 싫지만은 않네.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "그러면 오늘부터 1일인거죠..?",
            next: "day7_24",
            score: 0
        }]
    },
    day7_24: {
        text: "오늘부터 1일 하던가",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "저.. 그러면 형이라고 해도 되는거죠?",
            next: "day7_25",
            score: 0
        }]
    },
    day7_25: {
        text: "뭐 그러던가. 말도 좀 놓고.",
        name: "선배",
        character: "images/멋있는선배.png",
        choices: [{
            text: "..응!",
            next: "day7_26",
            score: 0
        }]
    },
    day7_26: {
        text: "{user}는 할 말을 잃었다. 사실 이게 꿈인지 생시인지도 모르겠는데, 선배가 고백을 받았다니.\n선배가 이제 말도 놓으랜다.",
        name: "나레이션",
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day7_27",
            score: 0
        }]
    },
    day7_27: {
        text: "서면역에서 선배가 먼저 내리는 양정역까지 {user}는 선배의 손을 붙잡고 기대면서 집에 간다.",
        name: "나레이션",
        character: "images/멋있는선배.png",
        background: "images/지하철.webp",
        choices: [{
            text: "(다음)",
            next: "day7_28",
            score: 0
        }]
    },
    day7_28: {
        text: "아. 이제 양정이네.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "형, 오늘 진짜 너무 좋았는데 아니 그냥 지금 너무 좋다. 내일 학교에서 보고, 잘자!",
            next: "day7_29",
            score: 0
        }]
    },
    day7_29: {
        text: "니도 잘자고. 내일 학교에서 보자.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "day8start",
            score: 0,
            nextDay: true
        }]
    },
    //8일차:선배와의 점심데이트
    day8start: {
        text: "그렇게 오늘 선배와 2일이 되었다.\n선배.. 아니 형의 남친은 나고 내 남친도 형이다.\n",
        name: "{user}",
        character: "",
        background: "images/학교복도.png",
        choices: [{
            text: "(다음)", next: "day8_1" }
                 ]
    },
    day8_1: {
        text: "오늘은 형과 밥을 먹기로 했다.\n남고에서, 그것도 단둘이 급식을 먹는건 커플로 보이기 쉽다가 아니라 그냥 이제 커플이니 상관없으려나?",
        name: "{user}",
        character:"",
        choices:[
          {text:"(다음)", next:"day8_2"}
        ]
    },
    day8_2:{
      text:"마. 귀신도 그렇게는 안사라진다 어딨었노?",
      name:"{user}",
      character:"선배1.png",
      choices:[
        {text:"형!! 나 계속 교실에 있었는데,, 형이 못찾았던거 아니야? ㅋㅋㅋ", next:"day8_3",score:10},
        {text:"와 개놀래라 귀신의집인줄;;", next:"day8_3", score:5}
      ]
    },
    day8_3:{
      text:"뭐 아무튼 밥 무러 가자.",
      name:선배,
      character:"선배1.png",
      choices:[
        {text:"형 근데 오늘 메뉴 뭔지 알아?",next:"day8_4_1",score:0},
        {text:"응!! 얼렁 가자!!", next:"day8_4_2"}
      ]
    },
    day8_4_1:{
     text:"아 오늘 클로렐란지 뭔지 급식 진짜 맛대가리 뒤지게없다 했는데, 매점 어떻노",
     name:선배,
     character:"선배1.png",
     choices:[
       {text:"매점? 바로갈겨.", next:"day8_4_1_1",score:10},
       {text:"형, 오늘 뭔가 매점 사람 많을것같지않아?", next:"day8_4_1_2",score:-5}
     ]
    },
    day8_4_1_1:{
      text:"매점에 도착한 아섭과 {user}\n밥이 맛없어서 그런지 매점에는 사람이 많았다.",
      name:선배,
      character:"선배1.png",
      background:"images/매점.png",
       choices:[
        {text:"형.. 사람 개많은데 어떻게 해?",next:"day8_4_1_1_1"},
        {text:"형 그냥 우리 급식 먹자..",next:"day8_4_1_1_1"}
      ]
    },
    day8_4_1_1_1:{
        text:"마. 니 여기서 기다려라.",
        character:"images/선배1.png",
        name:선배,
        choices:[
            {text:"형 도대체 뭐할려고 그러는거지..",next:"day8_4_1_1_2"}
      ]
    },
    day8_4_1_1_2:{
      text:"아섭이형은 후배들 사이를 비집고 들어가더니 30초만에 피자빵 2개를 가져온다.",
      character:"",
      name:"나레이션",
      choices:[
        {text:"형 먹 삥뜯은거 아니죠..??",next:"day8_4_1_1_3"}
      ]
    },
    day8_4_1_1_3:{
        text:"난 그런 에겐짓은 안한다.",
        name:선배,
        character:"선배1,png",
        choices:[
          {text:"존나 카리스마있네.",next:"day8_4_1_1_4",score:10},
        ]
    },
    day8_4_1_1_4:{
        text:"...뭐 어디서 무까..",
        name:선배,
        choices:[
            {text:"저기 의자서 먹을래?",next:"day8_4_1_1_5",score:10},
        ]
    },
    day8_4_1_1_5:{
        text:"(의자에 온 아섭과 {user})\n매점 빵 맛은 있나.",
        name:선배,
        character:"선배1.png",
        background:"images/학교공터.png",
        choices:[
            {text:"이러니까 매점이지~~ 근데 형은 안먹어? 배고플텐데..",next:"day8_4_1_1_6"}
        ]
    },
    day8_4_1_1_6:{
      text:"뭐라노.. 니 먹는 모습보니까 괜찮다.",
      name:선배,
      character:"선배1.png",
      choices:[
        {text:"가오는 ㅋㅋㅋㅋ\n형 그냥 먹어~ 좀따 내일 경기 연습해야할거 아녀~",next:"day8_4_1_1_7"}
      ]
    },
    day8_4_1_1_7:{
        text:"니가 무라니까 또 먹기 싫어지는데.\n(아섭은 {user}의 표정을 살핀다)\n안먹으면 잡아먹을 기세네 무섭노~",
        name:선배,
        character:"선배1.png",
        choices:[
          {text:"진짜 ㅋㅋㅋㅋ 형 오늘 연습은 못보니까 먹는거라도 봐야할거 아냐..",next:"day8_4_1_1_8"}
        ]
    },
    day8_4_1_1_8:{
        text:"아.. 니 오늘 못오나.. 아쉽네..",
        name:선배,
        character:"선배1.png",
        choices:[
          {text:"웅.. 오늘 야자도 해야하고 뭣도 해야하고 해서.. 형이랑 더 있고싶은데.. 아쉽다..",next:"day8_4_1_1_9"}
        ]
    },
    day8_4_1_1_9:{
        text:"뭐.. 바쁘면 가끔은 못보기도 하는거지..\n이제 점심시간 끝나가는것같으니까 학교끝나고 연락은 해라.",
        name:선배,
        character:"선배1.png",
        choices:[
          {text:"응!! 형 좀있다가 연락할게~~",next:"day9start",score:10,nextDay:true}
        ]
    },
    day8_4_1_2:{
      text:"꼬붕아 에겐행동 하지 말라했지.",
      name:선배,
      character:"선배1.png",
      choices:[
        {text:"힝..",next:"day8_4_1_1"},
        {text:"아니 형 오늘급식이 맛대가리가 없으니까 매점에 사람이 뒤지게 많을거아니야, 그러니까 급식을 먹어야 하지 않을까?",next:"day8_4_1_2_1"}
      ]
    },
    day8_4_1_2_1:{
        text:"잔말말고 걍 매점으로 따라와라.",
        name:선배,
        character:"선배1.png",
        choices:[
          {text:"어..어??",next:"day8_4_1_1"}
        ]
    },
    day8_4_2:{
        text:"급식실에 도착한 아섭과 {user}.\n너무 한산한 급식실을 보고 당황한다.",
        name:"나레이션",
        character:"선배_당황.png",
        background:"급식실.png",
        choices:[
          {text:"형 오늘 급식 어떤거 나오는지 알아....?",next:"day8_4_2_1"}
        ]
    },
    day8_4_2_1:{
        text:"아 오늘 클로렐란지 뭔지 급식 진짜 맛대가리 뒤지게없다 했는데, 매점 어떻노",
        name:선배,
        character:"선배1.png",
        choices:[
          {text:"매점?", next:"day8_4_2_2",score:10},
     ]
    },
    day8_4_2_2:{
        text:"말이 끝나기도 무섭게 아섭은 {user}를 데리고 매점에 간다.",
        name:"나레이션",
        character:"선배1.png",
        choices:[
          {text:"(다음)",next:"day8_4_1_1"}
        ]
    },  
    //9일차:선배야구 모습관람
      day9start:{
        text:"오늘은 형이 야구경기를 하는 날이다.\n형은 엄청나게 머찐 사람이니까 오늘 경기 활약해줄거라고 믿는다.",
        name:"{user}",
        character:"",
        background:"images/학교복도.png",
        choices:[
          {text:"(다음)", next:"day9_1"}
        ]   
    },
    day9_1:{
        text:"형은 내가 오늘 야자한다고 경기를 못보러오는줄 알고있지만 나는 오늘 형의 경기를 보러왔다.",
        name:"{user}",
        character:"",
        background:"images/학교야구장.png",
        choices:[
          {text:"(다음)", next:"day9_2"}
        ]
    },
    day9_2:{
        text:"오늘은 형이 1번타자라서 오늘 경기 활약을 기대해본다.",
        name:"{user}",
        character:"",
        background:"images/학교야구장.png",
        choices:[
          {text:"(다음)", next:"day9_3"}
        ]   
    },
    
    //10일차:선배야구 연습관람
    //11일차:괴롭힘당하는 유저->no손아섭
    //12일차:선배와의 진실데이트
    //13일차:선배야구 모습관람
    //14일차:선배와의 야구장데이트
    //15일차:선배와의 급식실데이트
    //16일차:선배야구 모습관람
    //17일차:선배와의 야구데이트 이서님템플릿
    //18일차:선배와의 저녁데이트
    //19일차:선배와의 전화데이트
    //20일차:선배와의 시험공부
    //21일차:선배와의 저녁데이트
    //22일차:선배와의 시험공부
    //23일차:시험
    //24일차:시험
    //25일차:시험
    //26일차:시험 & 선배와의 서면데이트
    //27일차:선배와의 노래방데이트
    //28일차:선배와의 서울데이트 (투투)
    //29일차:(공휴일)선배와의 잠옷파티
    //30일차:선배와의 해운대데이트
    //번외:07년 드래프트
    //번외2:유명해진 나

    // 여기에 계속해서 분기를 추가할 수 있습니다.
    고백실패: {
        text: "뭐.. 나 좋아했었나.. 근데 난 여자가 좋다.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "고백실패_1",
            score: 0
        }]
    },
    고백실패_1: {
        text: "근데 뭐 니가 나 좋다고 하는거 선긋기도 미안하고, 내가 니 남친으로는 있진 못하겠지만 니가 싫진 않다.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "(다음)",
            next: "고백실패_2",
            score: 0
        }]
    },
    고백실패_2: {
        text: "친한 선 후배사이가 좋은것같다. 에겐마냥 짜지지 말고.",
        name: 선배,
        character: "images/멋있는선배.png",
        choices: [{
            text: "알겠어요..",
            next: "고백실패_3",
            score: 0
        }]
    },
    고백실패_3: {
        text: "그 뒤로 선배와 나는 지난 일주일처럼 매일같이 재밌게 지내며 친하게 지냈다.\n선배는 자신한테 고백했다는건 누구에게도 알리지 않았다.",
        name: "나레이션",
        background: "images/학교교실.png",
        choices: [{
            text: "(다음)",
            next: "고백실패_4",
            score: 0
        }]
    },
    고백실패_4: {
        text: "이후 선배는 알다시피 최다안타도 치는 안타왕 손아섭이 되어있었고, 나는 그런 선배와 함께 했었다는 사실이 너무나도 좋았다. 고백은 차였지만..",
        name: '{user}',
        background: "images/야구장.png",
        choices: [{
            text: "(다음)",
            next: "고백실패_5",
            score: 0
        }]
    },
    고백실패_6: {
        text: "하지만 그래도 괜찮다. 가끔씩 아섭선배는 부산에 놀러오면 나랑 술을 마시며 이야기도 좀 하고, 지금까지 잘 지낸다. 현재 나는 손아섭의 덕후가 되었다.",
        name: '{user}',
        background: "images/야구장.png",
        choices: [{
            text: "(다음)",
            next: "고백실패_7",
            score: 0
        }]
    },
    고백실패_7: {
        text: "손아섭의 친한 덕후엔딩",
        name: "엔딩1",
        background: "images/야구장.png",
        choices: [{
            text: "다른 엔딩도 보기(처음으로 돌아가기)",
            next: "start_reset",
            score: 0
        }]
    },
    bad_ending_score: {
        text: "선배는 이제 당신의 얼굴만 봐도 한숨을 쉽니다. 더 이상 대화를 이어가기 어려울 것 같습니다. (게임 오버)",
        character: "", // 배드엔딩용 이미지
        background: "images/학교교실.png",
        name: "시스템",
        choices: [{
            text: "처음부터 다시 도전하기",
            next: "start_reset"
        }]
    },
    // 다시 시작을 위한 특별 키
    start_reset: {
        text: "시간을 되돌려 다시 시작하시겠습니까?",
        name: "시스템",
        choices: [{
                text: "네, 다시 시작합니다.",
                next: "start"
            },
            {
                text: "아니요, 게임을 종료합니다.",
                next: "game_over"
            }
        ]
    },
    game_over: {
        text: "게임이 종료되었습니다. 이용해 주셔서 감사합니다.",
        name: "시스템",
        choices: [{
            text: "타이틀로 돌아가기",
            next: "force_reload"
        }]
    },
    force_reload: {
        // 이 키는 아래 로직에서 페이지를 새로고침하게 만듭니다.
    }

};
