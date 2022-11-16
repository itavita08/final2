# 🎨 Deep-Story
그림일기 블로그 만들기

✔️ **프로젝트 명** 

딥러닝 GAN 을 이용한 그림 일기 블로그 

**✔️ 프로젝트 기간**

2022.10.13 ~ 2022.11.11

**✔️ 홈페이지 url** 

deepstories.online

**✔️ 프로젝트 설명**


- 딥러닝 인공지능 모델을 이용한 그림 포스팅 서비스
- 사용자 간의 소통을 돕는 서비스
- 서버 관리 편의성을 돕는 관리자 전용 서비스

## 01. 팀 소개

**✔️ 팀 ‘ 알사모 ’**


| 이름 | 포지션 | 담당 기능 구현 |
| --- | --- | --- |
| 김영준 |  |  |
| 은혜선 | Front Back | React와 Flask 연동 작업, 게시물 만들기 Front - Back, 게시물 상세 페이지 Front - Back, 비밀 게시물 신청, 수락, 비밀 게시물 관련 페이지 생성 및 React - Spring Boot와 연동 |
| 이명호 |  |  |
| 최소영 |  |  |



## 02. 프로젝트 기획

**✔️ 주제 선정 이유 및 기획 의도**

팀원 모두 딥러닝에 관심이 많아 이에 대해 조사하던 중, GAN 이미지 생성 모델에 관심을 가지게 되었습니다.

그리고 이를 활용한 서비스는 무엇일까 고민한 끝에 인공지능이 생성한 이미지로 

그림 일기를 작성 할 수 있는 블로그가 있다면, 기존의 블로그와 차별화된 서비스가 될 것이라는 생각에서 본 프로젝트를 기획하게 되었습니다.


**✔️ 주요 서비스**

**🙋‍♀️ 일반 User 공통 서비스**

- **그림 포스팅 서비스 “Create Post”**
    
    👉 **인공지능 이미지 생성** 
    
    - 사용자가 입력한 텍스트에 대해 인공지능이 그린 이미지를 제공하여,
        
        자신만의 그림 일기를 만들 수 있는 서비스
        
    
- **사용자 간의 소통을 돕는 서비스 “Secret Diary”**
    - 비밀 친구 맺기 기능
    - 친구와 함께 공유 다이어리를 쓸 수 있는 기능
    
- **사용자 갤러리 기능 “Gallery”**
    - 유저가 생성한 이미지를 모아둔 갤러리 서비스를 제공

- **공유 게시글 좋아요 기능 “Interest”**
    - 마음에 드는 게시물에 좋아요 을 누를 수 있는 서비스를 제공
    - 좋아요 상위 게시물 메인 페이지에 노출

**🧑‍💼 Admin 전용 서비스**

- **로그 시각화 그래프 “Dash Board”**
    - ‘전체 유저 수’, ‘전체 포스팅 수 ’,  ‘시간대 별 유저 접속 분포(월 별 필터)’,
        
         ‘성비 별 유저 비율’ ,  ‘나이 대 별 성비 유저 비율’  분석 및 시각화 그래프를 확인할 수 있는 서비스를 제공
        
    
- **Deep Learning model Flask AWS 서버 ON/OFF 기능**
    - 딥러닝 Flask EC2 인스턴스 를 시작 중지를 제어할 수 있는 서비스를 제공
        
        클라우드 서비스에 대해 비용 절감을 도움.

