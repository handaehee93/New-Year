

### [ 메인 페이지 ]

- React Query를 사용하여 불러온 데이터를 관리 하였고, 따 Query Hook을 만들어 Data가 필요한 페이지에서 간단하게 Data를 불러올 수 있게 구현
![스크린샷 2023-03-20 오후 8 25 56](https://github.com/handaehee93/shopping/assets/111215434/b4e1a494-ac89-4448-95ed-a92915397adb)

- 카테고리 버튼 클릭시 DropDown메뉴가 나타나고, 각 카테고리 별로 Data를 필터링 하여 렌더링

### [ 페이지네이션 구현 ]

- Pagination Hook을 만들어 컴포넌트 내부에서 Pagination 로직이 들어나지 않도록 구현
    

### [ 로그인 했을 경우 ]

- Navbar의 로그인 버튼을 클릭하면 구글 Auth 로그인을 할 수 있음
  
    
- 정상적으로 로그인을 진행 하면 Navbar의 상태가 변경이 되고, 로그인 한 사용자가 Admin일 경우 상품등록 아이콘이 나타남
- Firebase Database에 Admin유저의 uid를 저장하고, 현재 로그인한 사용자와 비교하여 일치하면 isAdmin: true를 추가하여 Admin 유저와 일반 유저를 구분
    

    
- 상품등록 버튼 클릭시 상품 등록 페이지가 나타나고, 상품을 등록하면 Firebase Database에 상품이 등록됨
    

    
- 사용자가 Admin이 아닐 경우 상품등록 아이콘이 나타나지 않음
    

    

### [ 디테일 페이지 ]

- 상품을 클릭하면 디테일 페이지로 이동되고 사이즈를 선택하여 장바구니 추가 버튼을 클릭하면 상품을 장바구니에 담을 수 있음



### [ 장바구니 ]

- 장바구니에 담긴 상품의 갯수가 Navbar에 표시됨
    

    
- 마이너스 / 플러스 버튼 클릭시 갯수가 변하고, 하단 상품 총 금액이 변경 됨
- 삭제 버튼 클릭시 Database에 저장된 장바구니 상품 정보를 삭제
    

    

### [ 반응형 ]

- [ Iphone 12 pro ]
 <img width="340" alt="스크린샷 2023-07-02 오후 5 02 50" src="https://github.com/handaehee93/shopping/assets/111215434/e507930e-3e9f-4c5a-9af4-62deae52caed">

    

    
- [ Ipad Air ]

<img width="490" alt="스크린샷 2023-07-02 오후 4 58 13" src="https://github.com/handaehee93/shopping/assets/111215434/1a3e36c1-13ff-4878-a84f-80edaaec352f">

