// src/data/scenes/3.js

const scene3 = {
    id: 3,
    text: "당신은 숨어들 방법을 찾지 못하고 시간이 흐릅니다.",
    options: [
      {
        text: "다시 시도한다.",
        conditions: [
          {
            check: () => true,
            nextScene: 2,
          },
        ],
      },
      {
        text: "포기하고 다른 방법을 찾는다.",
        conditions: [
          {
            check: () => true,
            nextScene: 1,
          },
        ],
      },
    ],
  };
  
  export default scene3;