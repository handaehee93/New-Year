
## [ 프로젝트 소개 ]

- 해당 프로젝트는  React 강의를 수강하면서 만든 프로젝트입니다.
- 해당 강의를 통해 React-Query, Tailwind, Firebase에 대해 학습하였습니다.
- 특히 React-Query 는 [블로그](https://velog.io/@handaehee93/React-React-Query)에 한번 더 정리하면서 학습을 진행하였습니다.
- 강의만 수강한 것이 아닌 개인적으로 페이지네이션, 카테고리, 상품 가격에 콤마를 붙여 ui개선,  반응형 웹을 추가적으로 구현하였습니다.

## [ Link ]
- 배포 링크 : https://react-mall-806d6.firebaseapp.com/
    
## [ Skills ]
- React / JavaScript
    - React-Query를 활용하여 서버에서 불러온 데이터를 관리함
- Tailwind CSS
    - Tailwind로 CSS효과를 주었고, 반응형 웹 구현
- Context Api
    - Context를 사용하여 User의 정보를 전역적으로 사용할 수 있게 함
- Firebase
    - Firebase를 통해 구글 Auth 로그인을 구현
    - Firebase Database를 통해 상품 등록, 삭제, 장바구니 추가, 장바구니 삭제 구현
## [ 화면 구성 및 설명 ]
### [ 메인 페이지 ]

- React Query를 사용하여 불러온 데이터를 관리 하였고, 따 Query Hook을 만들어 Data가 필요한 페이지에서 간단하게 Data를 불러올 수 있게 구현

![스크린샷 2023-07-04 오후 10 27 21](https://github.com/handaehee93/New-Year/assets/111215434/d57a0953-d50c-4502-a24e-43467dce9bb8)


- 카테고리 버튼 클릭시 DropDown메뉴가 나타나고, 각 카테고리 별로 Data를 필터링 하여 렌더링
    
![스크린샷 2023-07-04 오후 10 27 50](https://github.com/handaehee93/New-Year/assets/111215434/499bc3c0-fdbb-4e24-a013-000ce1799111)

    

### [ 페이지네이션 구현 ]

- Pagination Hook을 만들어 컴포넌트 내부에서 Pagination 로직이 들어나지 않도록 구현
    
![스크린샷 2023-07-04 오후 10 28 35](https://github.com/handaehee93/New-Year/assets/111215434/a9aea97e-d8e8-4855-9701-36f95b30434f)

    

### [ 로그인 했을 경우 ]

- Navbar의 로그인 버튼을 클릭하면 구글 Auth 로그인을 할 수 있음
    
![스크린샷 2023-07-04 오후 10 29 30](https://github.com/handaehee93/New-Year/assets/111215434/0eaa5f45-d175-45a4-bfa9-3e14fb0aab08)

    
- 정상적으로 로그인을 진행 하면 Navbar의 상태가 변경이 되고, 로그인 한 사용자가 Admin일 경우 상품등록 아이콘이 나타남
- Firebase Database에 Admin유저의 uid를 저장하고, 현재 로그인한 사용자와 비교하여 일치하면 isAdmin: true를 추가하여 Admin 유저와 일반 유저를 구분
    
![스크린샷 2023-07-04 오후 10 30 05](https://github.com/handaehee93/New-Year/assets/111215434/c2cba32d-af4b-4331-a249-d543b18970c1)

    
- 상품등록 버튼 클릭시 상품 등록 페이지가 나타나고, 상품을 등록하면 Firebase Database에 상품이 등록됨
    
![스크린샷 2023-07-04 오후 10 31 40](https://github.com/handaehee93/New-Year/assets/111215434/40a5ff86-cb7e-4a22-adf9-4522dcab9b07)

    
- 사용자가 Admin이 아닐 경우 상품등록 아이콘이 나타나지 않음
    
![스크린샷 2023-07-04 오후 10 32 37](https://github.com/handaehee93/New-Year/assets/111215434/7f3faa8f-cd4b-43a6-9777-76d926d09692)

    

### [ 디테일 페이지 ]

- 상품을 클릭하면 디테일 페이지로 이동되고 사이즈를 선택하여 장바구니 추가 버튼을 클릭하면 상품을 장바구니에 담을 수 있음

![스크린샷 2023-07-04 오후 10 33 44](https://github.com/handaehee93/New-Year/assets/111215434/f89ca575-80d5-4595-b511-aa30b85d40a9)


### [ 장바구니 ]

- 장바구니에 담긴 상품의 갯수가 Navbar에 표시됨
    
 ![스크린샷 2023-07-04 오후 10 34 46](https://github.com/handaehee93/New-Year/assets/111215434/ab7b3443-63a7-4b7b-801e-b9bed0aae119)

    
- 마이너스 / 플러스 버튼 클릭시 갯수가 변하고, 하단 상품 총 금액이 변경 됨
- 삭제 버튼 클릭시 Database에 저장된 장바구니 상품 정보를 삭제
    
![스크린샷 2023-07-04 오후 10 35 31](https://github.com/handaehee93/New-Year/assets/111215434/afe9c5ce-d958-44da-a7bb-f58cc7311d53)


### [ 반응형 ]

- [ Iphone 12 pro ]
 <img width="340" alt="스크린샷 2023-07-02 오후 5 02 50" src="https://github.com/handaehee93/shopping/assets/111215434/e507930e-3e9f-4c5a-9af4-62deae52caed">


- [ Ipad Air ]

<img width="490" alt="스크린샷 2023-07-02 오후 4 58 13" src="https://github.com/handaehee93/shopping/assets/111215434/1a3e36c1-13ff-4878-a84f-80edaaec352f">

