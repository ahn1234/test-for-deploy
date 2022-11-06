__비즈니스 창업 프로젝트__
============= 

_얼리억세스 게임 개발자와 이용자간의 양방향 크라우딩 펀딩 웹사이트 제작_

---

>>## **시나리오**
>>>>### 1. 개발자는 본 사이트에 본인의 프로젝트를 등록, 등록내용은 게임이름, 썸네일 이미지, 후원기간, 목표금액, 게임에 대한 간단한 설명, 회사소개등이 있다.
>>>>### 2. 이용자는 사이트에 등록된 게임에 후원을 할 수 있다.
>>>>### 3. 이용자는 게임을 후원할 때 기존에 존재하는 후원목록에 추가적으로 후원하는 경우, 아니면 본인만의 새로운 후원의 내용을 등록하는 경우 두가지로 나뉜다.
>>>>### 4. 개발자는 후원의 내용을 보고 업데이트가 완료되었으면 확인 버튼을 누르고 후원금액을 가져갈 수 있다. 개발자가 완료버튼을 누르면 그 후원의 내용은 비활성화 상태로 바뀐다.

---

>>## __필요한 기능__    
>>>>### 1. 회원가입 & 로그인 기능
>>>>### 2. 게임 상세페에지에서 인원별 후원의 정도를 bar graph 형태로 표시한다. 후원을 하면서 동적으로 graph가 변한다.
>>>>### 3. 후원목록에는 후원에 대한 정보를 확인할 수 있다. 후원하기 버튼을 통해 추가적인 후원이 가능하다.
>>>>### 4. 새로운 후원등록하기 버튼을 통해 기존에 없는 새로운 후원을 제목, 내용, 금액을 입력하여 새로 생성이 가능하다.
>>>>### 5. 프로젝트 목록페이지에서는 항목별 분류가 가능하다. 물론 검색도 가능하다.
>>>>### 6. 프로젝트 알림페이지에서는 대기중인 프로젝트 목록들을 표시 알림기능 버튼이 추가
>>>>### 7. 프로젝트 신청페이지에서는 프로젝트 등록에 필요한 정보들을 입력

---

>>## __구현 계획__
* 프론트
    * 사용언어 : html/css/js/BootStrap
    * 12월 8일 까지 끝낼 예정
    * 17일 늦어도 20일까지는 끝내야 함
* 백앤드
    * 자바 스프링/배포는...?
    

---
>>## __TODO LIST__
* 프론트
    * *index(main).html 제작*
        * header nav기능 구현
        * signin,up 페이지 연결
        * 먼저 이미지와 함께 사이트에 대한 간단한 소개
        * 뷰의 왼쪽에는 feature project 소개
        * 뷰의 오른쪽에는 신규 등록 후원들을 나열(이 부분은 킥스타터 메뉴 참조)
        * 뷰의 아래는 신규 등록 프로젝트들 나열
        
          
    * list.html 제작
    * waiting html 제작
    * detail.html 제작
    * alreadysupport.html 제작
    * newsupport.html 제작
    * projectapplication.html 제작
    * ~~signin.html 제작~~
    * signup.html 제작

* 백앤드
    * 자바 스프링...공부하자
