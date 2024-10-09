const scene1 = {
  id: 1,
  text: "당신은 성새 도시 자드의 입구에 서 있습니다. 무엇을 하시겠습니까?",
  options: [
    {
      text: "은밀히 숨어들 방법을 찾는다.",
      conditions: [
        {
          check: ({ character, items, events }) => character.attack >= 40,
          nextScene: 2,
        },
        {
          check: ({ character, items, events }) => items.some(item => item.name === '은신 망토'),
          nextScene: 2,
        },
        {
          check: () => true,
          nextScene: 3,
        },
      ],
    },
    {
      text: "정문으로 당당히 입성한다.",
      conditions: [
        {
          check: ({ character, items, events }) => character.defense >= 50,
          nextScene: 4,
        },
        {
          check: () => true,
          nextScene: 5,
        },
      ],
    },
    {
      text: "주변을 탐색하여 정보를 수집한다.",
      conditions: [
        {
          check: () => true,
          nextScene: 6,
        },
      ],
    },
  ],
};

export default scene1;