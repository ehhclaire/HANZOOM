# 한 줌(HANZOOM)

# 1. 서비스 설명

### 개요

- **진행 기간** : **2022.04.11 ~ 2022.05.20(6주)**

- 한줄 소개 :
- 서비스 명 : **한 줌(HANZOOM)**

<br/>

<br/>

# 2. 기획 배경

### 🖼 배경

### 🎯 타겟

<br/>

<br/>

# 3. 서비스 화면

### 📺 시연영상

[![시연영상](이미지 경로)](유튜브 링크)

<br/>

<br/>

### 🛠 주요기능

<br/>

타이틀 - gif 이미지 파일 들어갈 부분

### 일정

- 일정 잡기

![일정잡기](./exec/assets/%EC%9D%BC%EC%A0%95%EC%9E%A1%EA%B8%B0.gif)

- 일정 상세보기(공유)

![일정상세보기](./exec/assets/%EC%9D%BC%EC%A0%95%EA%B3%B5%EC%9C%A0.gif)

<br/>
<br/>

# 4. 기술스택

## API

`한줌` 에서는 , `한줌` 만의 차별점을 갖기 위해 다양한 API를 사용합니다.

<br/>
<br/>

# 5. 프로젝트 진행

프로젝트 진행 기간동안 전면 비대면으로, 온라인으로 진행되었기에 특히나 진행 방식과 소통 방법이 중요했습니다. 그래서 우리는 `Agile` 방법으로 프로젝트를 진행했고, Jira를 사용한 스프린트 관리, Notion을 통한 문서 정리, Discord를 활용하여 커뮤니케이션 소통을 하였습니다.

<br/>

## (1). Git Flow

git flow 사용을 위해 `우아한 형제들`의 [git flow 사용](https://techblog.woowahan.com/2553/)을 참고했습니다. 각자 맡은 기능에 맞게 `feature` 브랜치를 생성하고, 완료된 기능은 `develop`에 merge하여 사용했습니다. 충돌 상황을 최소화하고자 매일 오전 스크럼에 `develop` 최신 버전을 `pull`받고 시작할 것을 강조했습니다.

또한 `commit message` 는 `[feature/역할/기능] git 컨벤션` 와 같이 통일하여 작성했습니다.

```update : 기존의 기능 수정
- add : 새로운 기능 추가
- update : 기존의 기능 수정
- delete: 기존의 파일 삭제
- fix : 버그를 고친 경우
- rename : 이름 변경이 있을 때
- chore : 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우
- test : 테스트 코드 추가, 테스트 리팩토링
- build : 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm, gulp, yarn 레벨)
- ci : CI관련 설정 style : 코드 의미에 영향을 주지 않는 변경사항 (포맷, 세미콜론 누락, 공백 등)
- refactor : 성능 개선
```

<br/>

## (2). Jira

매주 월요일 오전 회의에서 차주에 진행되어야 할 이슈를 백로그에 등록했습니다. 금주에 완료하지 못한 이슈나, 앞으로 진행할 이슈들을 추가합니다.

- 에픽은 가장 큰 단위 기준으로 구성하였습니다.

- 스토리는 실제 유저 플로우를 고려하여 `홈페이지에서 로그인 창을 통해 로그인 한다` 와 같이 작성하였으며,

- 이슈는 스토리를 완료하기 위한 작은 업무 단위로 생성했습니다.
- 에픽링크 태그를 사용하여 이슈를 구별하기 쉽게 했습니다.
- 무엇보다 담당자와 스토리 포인트 설정, 현재 작업중인 내용 지라에 실시간으로 반영하는 것을 가장 중요하게 생각했습니다.

<br/>

## (3). Notion

모두가 공유해야할 자료 및 링크는 노션에 정리했습니다. 특히 `userflow`나 `api 명세` 와 같이 여러번 다시 봐야하고 중요한 정보들은 특히 노션에 공유하여 불필요한 커뮤니케이션 리소스를 줄이기 위해 노력했습니다.

프로젝트 컨벤션, 문서, 참고자료, 산출물, 데일리 스크럼 등을 설정했습니다.

![]() 이미지 넣으면 될듯

![notion2]()<br/>

<br/>

# 6. 배포

서버는 AWS EC2 ubuntu를 사용했습니다

<br/>

## (1). ⚙ 시스템 환경 및 구성

![기술스택]()아키텍처 사진 들어갈 부분.

- OS: Windows10
- Backend Framework: Spring Boot 2.4.5
- Frontend Framework: React 18.0.0
- DB: 8.0.29-0ubuntu0.20.04.3 (Ubuntu)
- WAS: Gradle
- JVM: openJDK (1.8.0_192)
- Node.js: 16.14
- Docker: 20.10.14
- WEB: Nginx (1.18.0)

<br/>

## (2). Docker

서로 다른 도커 이미지로 저장되어 있어 각각의 이미지를 실행시킵니다.

필요한 이미지들의 설정은 docker-compose.yml 파일에 작성합니다.

docker 내부는 같은 네트워크로 묶어주기 위해 docker-compose로 실행합니다.
<br/>

## (3). DevOps

`Jenkins`로 CI/CD를 구축하여 develop 브랜치에 `merge` 이벤트 발생시 build하도록 구성했습니다.

build 후 docker-compose를 실행하도록 했습니다.

<br/>

# 7. UI / UX

## (1). 와이어프레임(Figma)

figma를 사용해 홈페이지의 초안을 작성합니다. 관련 레퍼런스를 참고하고, 서비스 특성에 맞게 제작했습니다.

![Figma사진](./exec/assets/figma.png)

<br/>

<br/>

# 8. DB

## (1). ERD

![ERD사진](./exec/assets/ERD.png)

<br/>
<br/>

# 9. 팀원 소개 및 소감

## 👩‍💻 팀원 소개

<br/>

|                    [김광희](https://github.com/heeya15)                    |   [김동주]()   |   [김동현]()   |   [정윤정]()   |                  [최영진](https://github.com/youngjin98)                   |                            [한성희](https://github.com/ehhclaire)                             |
| :------------------------------------------------------------------------: | :------------: | :------------: | :------------: | :------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: |
| <img src="./exec/assets/gwanghee.jpg" width="80px;" height="80px" alt=""/> |                |                |                | <img src="./exec/assets/youngjin.PNG" width="80px;" height="80px" alt=""/> | <img src="https://avatars.githubusercontent.com/u/22373060?v=4?s=100" width="100px;" alt=""/> |
|                     Front-end<br/>Back-end<br/>Dev-Ops                     | Front-end<br/> | Front-end<br/> | Front-end<br/> |                           Front-end<br/>Back-end                           |                                    Front-end<br/>Back-end                                     |

<br/>

### 🐮🍅 소감

- **김광희** :

- **김동주** :

- **김동현** :

- **정윤정** :
- **최영진** :

- **한성희** :

  <br/>
