$(function () {
  // ↑ $(document).ready(function(){}) 동일 (약어? 함축해서 쓰는법)

  //  추가 버튼 클릭 이벤트
  $('.headAddBtn').click(function () {
    if ($('#headtxtBox').val() === '') {
      alert('빈값');
    } else {
      //  함수 호출
      addList($('#headtxtBox').val());
      //  데이터 비우기
      //$('#headtxtBox').val(''); //value값 초기화 (사용자 편의성 기능)
    }
  });

  $('.input_Area').keydown(function (key) {
    //키를 눌렀을 때 기능
    if (key.keyCode === 13) {
      //이벤트 키가 13일 때
      if ($('#headtxtBox').val() === '') {
        // 입력값이 null일 경우
        alert('빈값'); // 경고
      } else {
        //  함수 호출
        addList($('#headtxtBox').val());
        //  데이터 비우기
        $('#headtxtBox').val(''); //value값 초기화 (사용자 편의성 기능)
      }
    }
  });

  // chk의 checkbox 변함에 따른 기능
  $('.list_Area').on('change', '.chk', function () {
    const chkRes = $(this).is(':checked'); // .chk기준 현재 checkbox의 정보를 boolean으로 저장
    const findParent = $(this).parent(); // .chk의 부모를 저장 (inputListBox)

    if (chkRes == true) {
      findParent
        .find('.lb_Text')
        .css('text-decoration', 'line-through')
        .css('color', 'gray');
    } else {
      findParent
        .find('.lb_Text')
        .css('text-decoration', 'none')
        .css('color', 'black');
    }
  });

  // 삭제
  $('.list_Area').on('click', '.deleteBtn', function () {
    //deleteBtn이 클릭된다면
    const deleteList = $(this).parent().parent(); //부모의 부모로 이동
    deleteList.remove();
  });

  //  마이너스 버튼 이벤트
  $('.list_Area').on('click', '.minusBtn', function () {
    /**
     * this = minusBtn
     * parent = numberBox
     * find = 자식요소 찾기
     */
    let miNum = Number($(this).parent().find('.numCount').val()) - 1;
    // min값이 0이 넘어갈 경우
    if (miNum < 0) {
      alert('최소 0입니다');
      return false;
    }
    $(this).parent().find('.numCount').val(miNum);
  });

  //  플러스 버튼 이벤트
  $('.list_Area').on('click', '.plusBtn', function () {
    let plNum = Number($(this).parent().find('.numCount').val()) + 1;
    // max값이 20이 넘어갈 경우
    if (plNum > 20) {
      alert('최대 20입니다');
      return false;
    }
    $(this).parent().find('.numCount').val(plNum);
  });
});

//  데이터를 추가하는 함수
function addList(getData) {
  //  추가할 데이터
  const setData = `
  <div class="toDo_List">
    <div class="inputListBox">
      <input type="checkbox" class="chk">
      <span class="lb_Text">${getData}</span>
      <button class="deleteBtn">X</button>
    </div>
    <div class="numberBox">
      <button class="countBtn minusBtn">-</button>
      <input class="numCount" type="number"value="0" max="20" min="0"/>
      <button class="countBtn plusBtn">+</button>
    </div>
  </div>
`;

  //  선택한 요소 하위에 데이터 넣기
  $('.list_Area').append(setData);
}
