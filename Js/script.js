// 1. 랜덤 미션 목록
const missions = {

    // 쉬운 미션
    easy: [
        "팀원에게 무기 구매해 주기",
        "한 라운드 동안 점프하지 않기",
        "팀원에게 적 위치 브리핑하기",
        "한 라운드 동안 걷기만 하기",
        "스킬을 한 번 이상 사용하기",
        "본인이 스파이크 설치하기"
    ],

    // 보통 미션
    normal: [
        "헤드샷 3회 달성하기",
        "스킬로 적 처치하기",
        "한 라운드에서 적 2명 처치하기",
        "권총으로 적 처치하기",
        "한 라운드 죽지않기",
        "주운 무기로 적 처치하기"
    ],

    // 어려운 미션
    hard: [
        "한 라운드에서 3킬 이상 달성하기",
        "체력이 30 이하인 적 처치하기",
        "마지막 생존자로 라운드 승리하기",
        "불리한 상황에서 라운드 역전하기",
        "한 게임에서 MVP 달성하기",
        "헤드샷만으로 적 3명 처치하기"
    ]

};

// 2. 랜덤 요원 목록
const agents = [
    "제트",
    "레이나",
    "세이지",
    "피닉스",
    "소바",
    "브리치",
    "사이퍼",
    "킬조이",
    "레이즈",
    "오멘",
    "브림스톤",
    "바이퍼",
    "요루",
    "아스트라",
    "케이/오",
    "스카이",
    "체임버",
    "네온",
    "페이드",
    "하버",
    "게코",
    "데드록",
    "아이소",
    "클로브",
    "바이스",
    "테호",
    "웨이레이",
    "비토",
    "믹스",
    "허시"
];

// 3. 랜덤 총기 목록
const weapons = [
    "밴달",
    "팬텀",
    "클래식",
    "쇼티",
    "프렌지",
    "고스트",
    "셰리프",
    "스펙터",
    "불독",
    "아레스",
    "가디언",
    "아웃로",
    "마샬",
    "오퍼레이터",
    "저지",
    "버키"
];

// 4. 랜덤 뽑기 함수
function randomPick() {

    // 미션 랜덤 선택
    // 선택한 난이도 가져오기
    const difficulty = document.getElementById("difficulty").value;
    // 선택한 난이도의 미션 목록 가져오기
    const missionList = missions[difficulty];
    // 미션 랜덤 선택
    const randomMission = missionList[
        Math.floor(Math.random() * missionList.length)
    ];

    // 요원 랜덤 선택
    const randomAgent = agents[
        Math.floor(Math.random() * agents.length)
    ];

    // 총기 랜덤 선택
    const randomWeapon = weapons[
        Math.floor(Math.random() * weapons.length)
    ];

    // HTML 화면에 결과 출력
    document.getElementById("mission-result").textContent = randomMission;
    document.getElementById("agent-result").textContent = randomAgent;
    document.getElementById("weapon-result").textContent = randomWeapon;
}