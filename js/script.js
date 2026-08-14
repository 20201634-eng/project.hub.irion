// ===== 카드 데이터 (PRD 8번 문구 기준) =====
const officialCards = [
  {
    id: 'mt-gihoek',
    title: 'MT 기획',
    place: '대성리 메이드유 펜션',
    desc: '이리온이 함께 떠난 MT! 레크레이션 기획부터 진행까지 집행국이 직접 이끌었어요.',
    episode: '밤새 눈 한 번 안 붙이고 마피아 게임을 즐긴 26기 집행국, 이 정도면 체력 하나는 인정 아닐까요?',
    illust: 'assets/illustrations/illust_mt-gihoek.svg',
    tone: 'purple'
  },
  {
    id: 'animal-rights-1',
    title: '1차 동물권 프로젝트',
    place: '여러 장소에서 진행 (전시회 관람 + 비건런 + 채식 체험)',
    desc: '캣츠앤독스 전시회 관람, 비건런, 채식 체험까지! 세 가지 활동으로 동물권을 몸소 느껴본 1차 프로젝트예요.',
    episode: '채식 체험 중 몰래 고기를 먹은 친구들이 여럿 있었다는 후문... 다음엔 진짜로 도전해보기로 약속!',
    illust: 'assets/illustrations/illust_animal-rights-1.svg',
    tone: 'sky'
  },
  {
    id: 'self-project',
    title: '집행국 자체 프로젝트',
    place: '여의도 한강공원',
    desc: '이리오너들과 함께 여의도 한강공원에서 즐긴 피크닉! 집행국이 직접 기획한 자체 프로젝트예요.',
    episode: '사람도 많고 맛있는 음식도 많았던 한강 피크닉, 다들 배부르고 즐거운 하루였답니다.',
    illust: 'assets/illustrations/illust_self-project.svg',
    tone: 'purple'
  },
  {
    id: 'animal-rights-2',
    title: '2차 동물권 프로젝트',
    place: '여러 장소에서 진행 (카드뉴스 제작 + 수제간식 만들기)',
    desc: '동물권 알리기 카드뉴스 제작과, 생공 강아지들을 위한 수제간식 만들기까지! 마음을 담은 두 가지 활동으로 채운 2차 프로젝트예요.',
    episode: '정성껏 만든 강아지 수제간식, 그런데 진우의 사촌 동생들이 한 통을 다 먹어버려서 다들 당황했다는 웃픈 후일담이 있어요.',
    illust: 'assets/illustrations/illust_animal-rights-2.svg',
    tone: 'sky'
  }
];

const memoryCards = [
  {
    id: 'karaoke',
    title: '집래방',
    place: '서울대입구 노래방',
    desc: '새벽 4시까지 이어진 노래방 타임, 그 후엔 PC방으로 옮겨 카트라이더까지 즐긴 집행국의 못 말리는 밤!',
    episode: '사장님의 끊이지 않는 서비스 덕분에 시간 가는 줄 몰랐고, 집행국 싸이 세연이 덕분에 노래방 분위기가 후끈 달아올랐던 밤이었어요.',
    illust: 'assets/illustrations/illust_karaoke.svg',
    tone: 'purple'
  },
  {
    id: 'boardgame-cafe',
    title: '보드게임 카페',
    place: '신촌 어딘가 (정확한 상호명 미상)',
    desc: '신촌 어딘가에서 몇 차례 즐긴 보드게임 카페 모임, 수경이의 친구도 함께해 새로웠던 경험이었어요.',
    episode: '웃음이 끊이지 않았던 집행국의 보드게임 타임, 다시 떠올려도 미소가 지어져요.',
    illust: 'assets/illustrations/illust_boardgame-cafe.svg',
    tone: 'sky'
  },
  {
    id: 'gangneung-trip',
    title: '강릉 여행',
    place: '강릉 (당일치기)',
    desc: '집행국원들과 함께 떠난 첫 여행지, 강릉! 당일치기였지만 알차게 채운 하루였어요.',
    episode: '강릉 시장에서 먹은 오징어순대, 그 맛이 자꾸 생각나서 또 바다 가자는 얘기가 절로 나와요.',
    illust: 'assets/illustrations/illust_gangneung-trip.svg',
    tone: 'purple'
  },
  {
    id: 'water-park',
    title: '캐리비안 베이 & 워터파크',
    place: '캐리비안 베이 & 에버랜드',
    desc: '집행국의 첫 1박 2일 여행! 캐리비안 베이에서 신나게 물놀이하고, 에버랜드까지 알차게 즐긴 여행이에요.',
    episode: '밤에는 깜짝 열린 지아의 발레 클래스! 너무 힘들었지만 그만큼 튼튼해진 것 같아요.',
    illust: 'assets/illustrations/illust_water-park.svg',
    tone: 'sky'
  },
  {
    id: 'jjimjilbang',
    title: '찜질방',
    place: '동묘앞 스파렉스',
    desc: '원래 계획이던 한강수영장이 취소되면서 대신 찾은 찜질방! 따뜻한 열기 속에서 몸도 마음도 노곤해진 하루였어요.',
    episode: '세연이가 계란으로 선우 머리를 콩 때려서 릴스를 찍은 사건 발생!',
    illust: 'assets/illustrations/illust_jjimjilbang.svg',
    tone: 'purple'
  }
];

// ===== 클릭 활성화 헬퍼 =====
// 확장 카드처럼 애니메이션 중인 요소에서는 mousedown/mouseup이 서로 다른
// 요소에 떨어져 브라우저의 'click' 이벤트 자체가 발생하지 않는 경우가 있어
// (mousedown -> 배경, mouseup -> 버튼) 'pointerup'을 함께 사용한다.
// 'click'은 키보드(Enter/Space) 활성화를 위해 유지하고, 같은 상호작용에서
// 두 이벤트가 겹쳐 두 번 실행되지 않도록 짧은 시간 내 중복 호출은 무시한다.
function onActivate(el, handler) {
  let lastFired = 0;
  el.addEventListener('pointerup', (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    lastFired = Date.now();
    handler(e);
  });
  el.addEventListener('click', (e) => {
    if (Date.now() - lastFired < 400) return;
    handler(e);
  });
}

// ===== 카드 렌더링 =====
function buildCard(data) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.tone = data.tone;
  card.dataset.id = data.id;

  card.innerHTML = `
    <button class="card-detail-close" aria-label="닫기">✕</button>
    <img class="card-illust" src="${data.illust}" alt="${data.title} 일러스트">
    <p class="card-name">${data.title}</p>
    <p class="card-desc">${data.episode}</p>
    <div class="card-detail-body">
      <div class="detail-row">
        <span class="detail-label">장소</span>
        <p class="detail-text">${data.place}</p>
      </div>
      <div class="detail-row">
        <span class="detail-label">소개</span>
        <p class="detail-text">${data.desc}</p>
      </div>
      <div class="detail-row">
        <span class="detail-label">에피소드 · 후기</span>
        <p class="detail-text">${data.episode}</p>
      </div>
    </div>
  `;

  onActivate(card.querySelector('.card-detail-close'), (e) => {
    e.stopPropagation();
    collapseCard(card);
  });

  onActivate(card, () => {
    if (card.classList.contains('card-expanded')) return;
    expandCard(card);
  });

  return card;
}

// ===== GSAP 무한 카드 슬라이더 =====
// 카드 세트를 화면 폭보다 넉넉히 반복 배치한 뒤, 트랙을 카드 한 세트 너비만큼
// 일정한 속도로 이동시키고 repeat: -1 로 되감아 끊김 없이 반복되도록 한다.
function buildInfiniteSlider(viewport, cardsData, { reverse = false, speed = 55 } = {}) {
  const track = document.createElement('div');
  track.className = 'card-track';
  viewport.appendChild(track);

  cardsData.forEach(d => track.appendChild(buildCard(d)));
  const unitWidth = track.scrollWidth;

  const viewportWidth = viewport.clientWidth || window.innerWidth;
  const copiesNeeded = Math.max(2, Math.ceil(viewportWidth / unitWidth) + 2);
  for (let i = 1; i < copiesNeeded; i++) {
    cardsData.forEach(d => track.appendChild(buildCard(d)));
  }

  gsap.set(track, { x: reverse ? -unitWidth : 0 });
  const tween = gsap.to(track, {
    x: reverse ? 0 : -unitWidth,
    duration: unitWidth / speed,
    ease: 'none',
    repeat: -1
  });

  // 마우스를 올리면 천천히, 벗어나면 다시 원래 속도로
  viewport.addEventListener('mouseenter', () => tween.timeScale(0.3));
  viewport.addEventListener('mouseleave', () => tween.timeScale(1));

  return tween;
}

const rowOfficial = document.getElementById('row-official');
const rowMemory = document.getElementById('row-memory');
const sliderTweens = [
  buildInfiniteSlider(rowOfficial, officialCards, { reverse: false, speed: 55 }),
  buildInfiniteSlider(rowMemory, memoryCards, { reverse: true, speed: 55 })
];

// ===== 인트로 -> 리스트 전환 =====
const introPage = document.getElementById('intro-page');
const listPage = document.getElementById('list-page');
const enterBtn = document.getElementById('enter-btn');

enterBtn.addEventListener('click', () => {
  introPage.classList.add('slide-up');
  listPage.classList.add('slide-in');

  // 카드는 한 번에 확 나타남 (순차 등장 X)
  document.querySelectorAll('.card-row').forEach(row => {
    row.classList.remove('cards-in');
    void row.offsetWidth; // reflow
    row.classList.add('cards-in');
  });
});

// ===== 카드 확장 / 축소 (인라인 확장, FLIP 애니메이션) =====
const backdrop = document.getElementById('backdrop');
let activeCard = null;
let originalRect = null;
let placeholder = null;

function expandCard(card) {
  activeCard = card;
  originalRect = card.getBoundingClientRect();
  sliderTweens.forEach(t => t.pause());

  // 카드가 빠져도 같은 줄의 다른 카드가 튀지 않도록 자리를 지키는 플레이스홀더 삽입
  placeholder = document.createElement('div');
  placeholder.className = 'card-placeholder';
  const cardStyle = getComputedStyle(card);
  placeholder.style.width = originalRect.width + 'px';
  placeholder.style.height = originalRect.height + 'px';
  placeholder.style.marginLeft = cardStyle.marginLeft;
  placeholder.style.visibility = 'hidden';
  card.parentElement.insertBefore(placeholder, card);

  // 원래 위치/크기 그대로 고정 배치로 전환 (점프 없이)
  card.style.top = originalRect.top + 'px';
  card.style.left = originalRect.left + 'px';
  card.style.width = originalRect.width + 'px';
  card.style.height = originalRect.height + 'px';
  card.style.margin = '0';

  document.body.appendChild(card);
  card.classList.add('card-expanded');
  listPage.classList.add('detail-active');
  backdrop.classList.add('active');

  // 목표 크기/위치 계산 (화면 중앙, 넉넉한 상세 사이즈)
  const targetWidth = Math.min(window.innerWidth * 0.88, 480);
  const targetHeight = Math.min(window.innerHeight * 0.82, 620);
  const targetTop = (window.innerHeight - targetHeight) / 2;
  const targetLeft = (window.innerWidth - targetWidth) / 2;

  requestAnimationFrame(() => {
    card.style.transition = 'top 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.top = targetTop + 'px';
    card.style.left = targetLeft + 'px';
    card.style.width = targetWidth + 'px';
    card.style.height = targetHeight + 'px';
    card.style.overflowY = 'auto';
  });

  document.addEventListener('keydown', onKeydownClose);
}

function collapseCard(card) {
  if (!card) return;

  // 스크롤/리사이즈로 원래 자리가 바뀌었을 수 있으니 플레이스홀더 기준으로 복귀 좌표 재계산
  const returnRect = placeholder ? placeholder.getBoundingClientRect() : originalRect;
  card.style.top = returnRect.top + 'px';
  card.style.left = returnRect.left + 'px';
  card.style.width = returnRect.width + 'px';
  card.style.height = returnRect.height + 'px';

  backdrop.classList.remove('active');
  listPage.classList.remove('detail-active');

  const onEnd = (e) => {
    // transitionend는 버블링되므로 카드 자신의 위치/크기 전환이 끝난 경우에만 처리
    // (자식 요소인 닫기 버튼의 hover 배경색 전환 등이 잘못 걸리지 않도록)
    if (e.target !== card) return;
    card.classList.remove('card-expanded');
    card.style.position = '';
    card.style.top = '';
    card.style.left = '';
    card.style.width = '';
    card.style.height = '';
    card.style.margin = '';
    card.style.transition = '';
    card.style.overflowY = '';

    if (placeholder && placeholder.parentElement) {
      placeholder.parentElement.insertBefore(card, placeholder);
      placeholder.remove();
    }
    placeholder = null;
    card.removeEventListener('transitionend', onEnd);
    sliderTweens.forEach(t => t.play());
  };
  card.addEventListener('transitionend', onEnd);

  document.removeEventListener('keydown', onKeydownClose);
  activeCard = null;
}

function onKeydownClose(e) {
  if (e.key === 'Escape' && activeCard) collapseCard(activeCard);
}

onActivate(backdrop, () => {
  if (activeCard) collapseCard(activeCard);
});
