// src/data/scenes/2.js

const scene2 = {
    id: 2,
    text: "당신은 은밀히 성벽을 따라 움직이며 숨겨진 입구를 찾습니다.",
    options: [
      {
        text: "비밀 통로를 발견한다.",
        conditions: [
          {
            check: () => true,
            nextScene: 7,
          },
        ],
      },
    ],
  };
  
  export default scene2;