// ===== 26기 집행국원 명단 =====
const members = [
  {
    name: '최수경',
    role: '구집행국장',
    age: '01',
    mbti: 'INTP',
    hometown: '경상남도 합천(대구 밑에 위치)',
    siblings: '4자매 중 첫째',
    note: '연애중',
    traits: [
      '첫째라 그런지 책임감이 강함',
      '카톡말투와 현실말투가 상반됨',
      '알바를 굉장히 다양히 함'
    ],
    tone: 'purple'
  },
  {
    name: '김세연',
    role: '집행국원',
    age: '02',
    mbti: 'ENFP(남지아와 이리온 텐션 1, 2위를 다투는 중)',
    hometown: '수원',
    siblings: '3남매 중 막내',
    note: '동안 외모',
    traits: [
      '집행국 싸이',
      '사진작가 수준의 촬영 실력',
      '심리학과라 심리분석을 잘함',
      '바른 생활 사나이'
    ],
    tone: 'sky'
  },
  {
    name: '남지아',
    role: '신집행국장',
    age: '02',
    mbti: 'ESTP (T라고 우기지만 집행국에서 눈물이 가장 많음)',
    hometown: '울산',
    siblings: '3남매 중 첫째',
    note: '발레 선생님',
    traits: [
      '20살 때부터 쉬지 않고 다양한 알바와 발레 학원 강사로 일하는 중',
      '그래서 그런지 학업을 소홀히 하는 편(학고 받은 전적 있음)',
      '이레, 타오라는 고양이 2마리 양육중'
    ],
    tone: 'purple'
  },
  {
    name: '윤선우',
    role: '집행국원',
    age: '01',
    mbti: 'INTJ',
    hometown: '서울',
    siblings: '쌍둥이',
    note: '투바투 덕질 중',
    traits: [
      '여행 마니아',
      '최근 말랑이에 빠져 말랑이 수집중',
      '언어 전공이지만 본인 전공 언어 때문에 고통 받는중',
      '여행자금을 위해 알바 경험 다수'
    ],
    tone: 'sky'
  },
  {
    name: '서예원',
    role: '집행국원',
    age: '03',
    mbti: 'ISFP',
    hometown: '일산',
    siblings: '2자매 중 첫째',
    note: '장거리 연애중(유럽에서 운명의 만남 예정)',
    traits: [
      '날티상이 이상형(서강준)',
      '하루 한도 체력이 떨어지면 집으로 도망감',
      '교환학생 부자생활을 꿈꾸며 투잡을 뛰었지만 번 만큼 써서 궁핍한 생활 예정',
      '2학기 프랑스 교환학생으로 자리비움'
    ],
    tone: 'purple'
  },
  {
    name: '신보현',
    role: '집행국원',
    age: '01',
    mbti: 'ENFJ',
    hometown: '거제(야호)',
    siblings: '쌍둥이 언니와 남동생',
    note: '연애중',
    traits: [
      '장기간 올리브영 알바 중',
      '매우 높은 사회성 보유',
      '알바, 학업, 학원, 자격증 등으로 바쁜 생활중',
      '수준급 댄스실력 보유'
    ],
    tone: 'sky'
  },
  {
    name: '오준영',
    role: '집행국원',
    age: '03',
    mbti: 'INTP',
    hometown: '대전',
    siblings: '2남매 중 첫째',
    note: '연애중',
    traits: [
      '과외 알바 중',
      '레드레드를 잘 부름',
      '쉐프급 요리실력',
      '새콤이와 달콤이라는 거북이 2마리 양육중'
    ],
    tone: 'purple'
  },
  {
    name: '이재민',
    role: '집행국원',
    age: '03',
    mbti: 'ESFP',
    hometown: '인천',
    siblings: '3형제 중 막내',
    note: '마계 인천에서 왔지만 진국',
    traits: [
      '먹을 것을 잘 나눠줌',
      '생공 가는 것을 좋아함',
      '혼자 코노가는 것을 좋아함',
      '카톡방에서 말이 제일 많음'
    ],
    tone: 'sky'
  }
];

function buildMemberCard(m) {
  const card = document.createElement('article');
  card.className = 'member-card';
  card.dataset.tone = m.tone;

  card.innerHTML = `
    <div class="member-top">
      <p class="member-name">${m.name}</p>
      <span class="member-role">${m.role}</span>
    </div>
    <ul class="member-meta">
      <li><span>나이</span><span>${m.age}</span></li>
      <li><span>MBTI</span><span>${m.mbti}</span></li>
      <li><span>고향</span><span>${m.hometown}</span></li>
      <li><span>형제관계</span><span>${m.siblings}</span></li>
      <li><span>특이사항</span><span>${m.note}</span></li>
    </ul>
    <ul class="member-traits">
      ${m.traits.map((t) => `<li>${t}</li>`).join('')}
    </ul>
  `;

  return card;
}

const memberGrid = document.getElementById('member-grid');
members.forEach((m) => memberGrid.appendChild(buildMemberCard(m)));
