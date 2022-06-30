const inputs = document.querySelectorAll(".controls input");

function handlUpdate() {
  // 마우스가 움직이거나 값이 변경된 앨리먼트의 데이터 속성값이 sizing인 값이 존재한다면 가져오고,
  // 없다면 빈 문자열 "";을 가져온다.
  const suffix = this.dataset.sizing || "";
  // document.documentElement html style 요소를 반환
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handlUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handlUpdate));
