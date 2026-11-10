// 1. 랜덤 미션 목록
const missions = [
    // 전투 관련 미션
    "헤드샷 3회 달성하기",
    "한 라운드에서 적 2명 처치하기",
    "한 게임에서 10킬 이상 달성하기",
    "스킬로 적 처치하기",
    "적의 머리만 노려서 공격하기",
    "한 라운드에서 퍼스트 블러드 달성하기",
    "적을 처치하지 않고 팀 승리에 기여하기",

    // 무기 관련 미션
    "권총으로 적 2명 처치하기",
    "스나이퍼로 적 처치하기",
    "산탄총으로 적 처치하기",
    "한 라운드 동안 밴달 사용하지 않기",
    "주운 무기로 적 처치하기",
    "팀원에게 무기 구매해 주기",

    // 플레이 스타일 관련 미션
    "한 라운드 동안 걷기만 하기",
    "한 라운드 동안 점프하지 않기",
    "스킬을 모두 사용하고 교전하기",
    "팀원과 함께 움직이기",
    "한 라운드 동안 스파이크 설치에 집중하기",
    "적에게 들키지 않고 사이트 진입하기",
    "팀원에게 매 라운드 정보 전달하기",

    // 도전 미션
    "한 라운드 노데스 달성하기",
    "체력이 30 이하인 상태에서 적 처치하기",
    "적의 스킬을 피하고 생존하기",
    "한 라운드에서 2킬 이상 달성하기",
    "마지막 생존자로 라운드 승리하기",
    "불리한 상황에서 라운드 역전하기",
    "한 게임에서 MVP 달성하기"
];

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
    const randomMission = missions[
        Math.floor(Math.random() * missions.length)
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