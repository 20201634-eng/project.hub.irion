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
    episode: '재민이가 계란으로 선우 머리를 콩 때려서 릴스를 찍은 사건 발생!',
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

// ===== GSAP 공식 seamless 무한 루프 헬퍼 (horizontalLoop) =====
// GreenSock(GSAP 개발사)이 공식적으로 배포하는 헬퍼 함수. 트랙 전체를 한 덩어리로
// 옮기고 되감는 방식이 아니라, 카드 하나하나를 개별적으로 xPercent 트윈하다가
// 화면 밖으로 나가면 반대쪽 끝으로 이어붙이는 방식이라 세트를 여러 번 복제할
// 필요가 없고, "같은 카드가 화면에 동시에 두 번 보이는" 문제가 구조적으로
// 발생하지 않는다. (출처: GSAP 공식 헬퍼 함수 모음 - Seamless Looping)
function horizontalLoop(items, config) {
  let timeline;
  items = gsap.utils.toArray(items);
  config = config || {};
  gsap.context(() => {
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate: onChange && function () {
          let i = tl.closestIndex();
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
          }
        },
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () =>
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        spaceBefore[0] +
        items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(), b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 + gsap.getProperty(el, 'xPercent')
          );
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, { xPercent: (i) => xPercents[i] });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth : 0;
        center &&
          times.forEach((t, i) => {
            times[i] = timeWrap(tl.labels['label' + i] + (tl.duration() * widths[i]) / 2 / totalWidth - timeOffset);
          });
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
          tl.to(
            item,
            { xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100), duration: distanceToLoop / pixelsPerSecond },
            0
          )
            .fromTo(
              item,
              { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
              {
                xPercent: xPercents[i],
                duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false
              },
              distanceToLoop / pixelsPerSecond
            )
            .add('label' + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      onResize = () => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        populateTimeline();
        populateOffsets();
        tl.progress(progress, true);
      };

    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener('resize', onResize);

    tl.times = times;
    tl.progress(1, true).progress(0, true); // 최초 렌더링 미리 계산(성능)
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    timeline = tl;
  });
  return timeline;
}

// ===== 뷰포트 중앙 포커스 연출 =====
// GSAP 공식 "Infinite Card Slider" 쇼케이스처럼, 뷰포트 중앙에 가장 가까운
// 카드 딱 하나만 크고 또렷하게 강조한다.
//
// 중요: horizontalLoop은 리사이즈 시 populateWidths()에서 .card-slide를
// getBoundingClientRect()로 다시 측정해 카드 사이 간격(spaceBefore)을 재계산한다.
// 만약 .card-slide 자체에 scale을 걸어두면, 그 시점에 어떤 카드가 확대되어
// 있었는지에 따라 "정상 간격"이 왜곡된 채로 굳어버려 간격이 카드마다 달라 보이는
// 버그가 생긴다. 그래서 scale/그림자 등 시각 강조는 반드시 안쪽 .card에만 걸고,
// .card-slide는 GSAP의 x/xPercent(위치) 전용으로 남겨둔다.
//
// 또한 모든 카드를 거리 기반으로 연속적으로 확대/축소하면 스크롤 중 인접
// 카드쌍마다 겹침 정도가 계속 달라져 간격이 제각각으로 보인다. 그래서 "중앙
// 카드 1개만 강조 / 나머지는 전부 동일한 기본 상태"인 이진 상태로 단순화하고,
// 중앙 카드가 바뀔 때만(매 프레임이 아니라) 클래스를 토글해 CSS transition이
// 자연스럽게 애니메이션하도록 한다.
function attachCenterFocus(viewport, slides) {
  let currentCenter = null;

  function update() {
    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    let closestSlide = null;
    let closestDist = Infinity;

    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const dist = Math.abs(slideCenter - viewportCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestSlide = slide;
      }
    });

    if (closestSlide !== currentCenter) {
      if (currentCenter) currentCenter.classList.remove('is-center');
      closestSlide.classList.add('is-center');
      currentCenter = closestSlide;
    }
  }

  gsap.ticker.add(update);
}

// ===== 카드 무한 슬라이더 배치 =====
function buildInfiniteSlider(viewport, cardsData, { reverse = false, speed = 55 } = {}) {
  const track = document.createElement('div');
  track.className = 'card-track';
  viewport.appendChild(track);

  // 카드는 위치 이동(GSAP)을 담당하는 .card-slide 래퍼로 한 번 감싼다.
  // 이렇게 분리해야 GSAP가 옮기는 transform과 .card 자체의 호버 바운스
  // transform이 같은 속성을 두고 서로 충돌하지 않는다.
  const slides = cardsData.map((d) => {
    const slide = document.createElement('div');
    slide.className = 'card-slide';
    slide.appendChild(buildCard(d));
    track.appendChild(slide);
    return slide;
  });

  // 카드 세트 한 벌의 폭이 뷰포트보다 좁으면 루프가 도는 동안 빈 공간이 보이거나
  // 같은 카드가 두 번 보일 수 있다. 카드 사이 간격을 벌려서 한 벌의 폭이 뷰포트
  // 폭 이상이 되도록 만들면(뷰포트에는 항상 서로 다른 카드만 보이게 됨) 이를 없앤다.
  //
  // 카드 너비는 getComputedStyle(...).width로 읽는다 — getBoundingClientRect는
  // 중앙 강조 카드의 scale(transform)까지 포함된 "보이는" 크기를 반환하므로,
  // 그 순간 어떤 카드가 확대되어 있었는지에 따라 계산이 흔들린다. computed width는
  // transform의 영향을 받지 않는 레이아웃 크기라 항상 안정적이다. 같은 이유로,
  // 매번 새로 계산해 적용하지 이전에 적용한 gap 위에 누적하지 않는다(그러면
  // 리사이즈를 반복할 때마다 오차가 쌓인다).
  // horizontalLoop은 "마지막 카드 -> 첫 카드로 되감기는" 이음매 구간의 간격을
  // spaceBefore[0](= 트랙의 첫 카드 앞 여백, 기본 0)로 계산한다. 우리 트랙은
  // 앞쪽 padding이 없으므로 이 값이 항상 0이라, 카드 사이 간격이 아무리 넓어도
  // 루프가 이어지는 지점(마지막 카드->첫 카드)에서만 간격이 0에 가깝게 붙어
  // 보이는 문제가 생긴다. config.paddingRight를 현재 gap 값으로 채워주면
  // horizontalLoop이 이 이음매 구간에도 동일한 간격을 확보한다.
  const loopConfig = { repeat: -1, speed: speed / 100, reversed: reverse, paddingRight: 0 };

  // '공식 행사'처럼 특정 섹션만 다른 섹션보다 살짝 좁은 간격을 쓰도록,
  // .card-row에 붙은 --card-gap-scale(기본 1, .card-row--official은 0.88)을
  // 최종 gap에 곱한다. 뷰포트를 채우기 위해 늘어난 간격에도 똑같이 곱해야
  // 넓은 화면에서도 두 섹션의 간격 차이가 실제로 보인다.
  const syncTrackGap = () => {
    const sampleCard = slides[0].querySelector('.card');
    const cardWidth = parseFloat(getComputedStyle(sampleCard).width) || sampleCard.getBoundingClientRect().width;
    const rowStyle = getComputedStyle(viewport);
    const baseGap = parseFloat(rowStyle.getPropertyValue('--card-gap')) || 28;
    const gapScale = parseFloat(rowStyle.getPropertyValue('--card-gap-scale')) || 1;
    const viewportWidth = viewport.clientWidth || window.innerWidth;
    const n = cardsData.length;
    const neededGap = n > 1 ? (viewportWidth - cardWidth * n) / (n - 1) : baseGap;
    const gap = Math.max(baseGap, neededGap) * gapScale;
    track.style.gap = gap + 'px';
    loopConfig.paddingRight = gap;
  };

  syncTrackGap();
  // horizontalLoop도 리사이즈 시 카드 위치를 다시 측정하므로(populateWidths),
  // 간격이 바뀐 *다음*에 그 재측정이 일어나야 한다. addEventListener는 등록
  // 순서대로 실행되므로, horizontalLoop을 만들기 전에 여기서 먼저 리스너를
  // 붙여 syncTrackGap이 항상 먼저 실행되도록 한다.
  window.addEventListener('resize', syncTrackGap);

  const tl = horizontalLoop(slides, loopConfig);

  attachCenterFocus(viewport, slides);

  // 마우스를 올리면 천천히, 벗어나면 다시 원래 속도로
  viewport.addEventListener('mouseenter', () => tl.timeScale(0.3));
  viewport.addEventListener('mouseleave', () => tl.timeScale(1));

  return tl;
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
  const cardStyle = getComputedStyle(card.parentElement); // 카드 간격은 .card-slide 래퍼가 담당
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

  // 목표 크기/위치 계산 (화면 중앙, 넉넉한 상세 사이즈. 기존 대비 0.8배)
  const targetWidth = Math.min(window.innerWidth * 0.704, 384);
  const targetHeight = Math.min(window.innerHeight * 0.656, 496);
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
