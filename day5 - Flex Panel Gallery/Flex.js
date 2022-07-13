const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  // 두번째 클릭시 첫번째 클릭 이벤트 삭제 (원래대로 돌려놓기 )
  // panels.forEach((panel) => panel.classList.remove("open"));
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName); //propertyName을 통해 타깃의 이벤트명을 확인해온다.
  if (e.propertyName.includes("flex")) {
    // if(e.propertyName === "flex-grow")의 경우 브라우저의 유연성에 따라 달라지므로
    // 명시적으로 FlexGrow인지 확인하는 대신 flex라는 단어가 포함되어 있는지 확인해야한다.
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
// 두 번째 단계는 전환이 완료되A고 나면 위에서 단어를 가져오고 아래에서 단어를 가져오고
// 전환과 이벤트를 위해 toggle active라는 기능을 사용하여 open active 클래스를 가져온다.
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
