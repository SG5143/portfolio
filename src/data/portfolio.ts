import type { Education, Experience, Profile, Project, SkillGroup } from '../types'

export const profile: Profile = {
  name: '이선구',
  role: 'Backend / Full-stack Developer',
  introduction:
    '개발과 운영을 함께 경험하며, 기능을 만드는 것만큼 실제 서비스에서 발생하는 문제를 해결하는 과정에 흥미를 느껴왔습니다. 새로운 기술과 도메인을 접하는 것을 즐기며, 다양한 사용자와 서비스 환경을 경험하면서 꾸준히 성장하는 개발자가 되고 싶습니다.',
  email: 'sg5260@naver.com',
  github: 'https://github.com/SG5143',
}

export const projects: Project[] = [
  {
    id: 'mingler',
    name: 'Mingler',
    period: '2026. 07 — 2026. 08',
    type: 'Personal project',
    role: '설계 · 백엔드 개발 · 배포',
    summary:
      '커머스 도메인을 학습하기 위해 회원 인증부터 상품 조회, 장바구니, 주문·결제까지 구현한 개인 프로젝트입니다.',
    highlights: [
      '주문 시 상품명·가격을 스냅샷으로 저장해 상품 정보가 변경되어도 주문 내역 유지',
      '결제 과정의 재고 예약·실패 복구와 멱등 처리를 구현해 중복 결제 방지',
      '토스페이먼츠 테스트 결제를 연동하고 외부 승인 호출과 DB 트랜잭션 분리',
    ],
    stack: ['Java', 'Spring Boot', 'JPA', 'Thymeleaf', 'MySQL', 'Docker'],
    media: [
      { alt: 'Mingler 결제 처리와 재고 복구 흐름도', caption: '결제 성공·실패 처리 설계', src: '/projects/mingler-03.png' },
      { alt: 'Mingler 메인 화면과 상품 목록', caption: '상품 탐색', src: '/projects/mingler-01.png' },
      { alt: 'Mingler 주문서와 결제수단 선택 화면', caption: '주문·결제 흐름', src: '/projects/mingler-02.png' },
    ],
    links: [
      // { label: 'Source', url: 'https://github.com/' },
      { label: 'Demo: https://demo1.sg5260.com', url: 'https://demo1.sg5260.com' },
    ],
  },
  {
    id: 'healthy',
    name: 'Healthy',
    period: '2026. 02 — 2026. 05',
    type: 'Personal project',
    role: '설계 · 백엔드 개발 · 앱 개발 · 관리자 페이지 배포',
    summary:
      '복용 중인 약과 복약 이력, 상태·부작용을 기록하는 건강 관리 서비스입니다. 모바일 앱에서 사용하는 API와 의약품 데이터를 관리하는 관리자 페이지를 구현했습니다.',
    highlights: [
      '복용 상태·진행도와 부작용을 기록하고, 모바일 환경 동기화 ID로 동일한 약·복약 기록의 중복 등록 방지',
      '공공 API의 의약품 데이터를 정기 수집하고, 기존 데이터와 변경 사항을 비교해 관리자 승인 후 서비스에 반영',
      'Flutter 앱에 시간·요일별 복약 알림과 Apple 소셜 로그인을 구현',
    ],
    stack: ['Java', 'Spring Boot', 'JWT', 'Thymeleaf', 'Dart', 'Flutter', 'MySQL', 'GitHub Actions'],
    media: [
      { alt: 'Healthy 모바일 앱의 복용 중인 약과 복약 기록 화면', caption: '복용 현황과 복약 기록', src: '/projects/healthy-01.png' },
      { alt: 'Healthy 관리자 페이지의 의약품 변경 내역 비교와 승인 화면', caption: '의약품 데이터 검수·반영', src: '/projects/healthy-02.png' },
    ],
    links: [
      { label: 'GitHub (Backend)', url: 'https://github.com/SG5143/healthy-spring' },
      { label: 'Demo (조회 전용 ID: healthy_demo / PW: demo1234)', url: 'https://healthy.sg5260.com/admin/login' },
    ],
  },
  {
    id: 'mediquick',
    name: 'MediQuick',
    period: '2026. 02 — 2026. 03',
    type: 'Team project',
    role: '영상 조회 API · 뷰어 구현',
    summary:
      'DICOM 영상을 웹에서 조회하고 조작할 수 있는 의료영상 뷰어 팀 프로젝트입니다. 검사별 영상 조회 파트를 담당했습니다.',
    highlights: [
      '검사·시리즈별 영상 조회 API와 NAS에 저장된 DICOM 파일 연동',
      'dcm4che로 DICOM 메타데이터를 추출해 시리즈 목록과 영상 정보에 표시',
      'Cornerstone을 활용해 영상 렌더링, 화면 분할 및 확대·이동·측정 도구 연결',
    ],
    stack: ['Java', 'Spring Boot', 'JSP', 'MySQL', 'Oracle'],
    media: [
      { alt: 'MediQuick 영상 조회 화면', caption: '영상 조회', src: '/projects/mediquick-01.png' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/SG5143/mediquick' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: '(주)에이스피지',
    period: '2025. 07 — 2026. 01',
    duration: '6 months',
    position: 'Java Developer',
    summary:
      '그룹웨어 솔루션에서 기능 개발 및 유지보수와 모바일 빌드 배포 업무를 수행했습니다. ',
    contributions: [
      '전자결재 진행 상태에 따라 결재자와 관련 사용자에게 알림 메일을 발송하는 기능을 개발했습니다.',
      '하이브리드 앱에서 푸시 알림을 선택하면 지정된 화면으로 이동하는 딥링크 기능을 구현하고 배포를 담당했습니다.',
      '요구사항에 따른 UI를 개선하고, 고객사별 전자결재 양식에 필요한 스크립트를 구현했습니다.',
    ],
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'MariaDB', 'MyBatis', 'React Native'],
  },
]

export const educations: Education[] = [
  {
    category: 'Education',
    title: '세명대학교',
    period: '2018 — 2024',
    description: '컴퓨터학부',
    detail: '학점 3.92 / 4.5',
  },
  {
    category: 'Training',
    title: '자바(JAVA)&클라우드(AWS) 활용 풀스택 취업캠프',
    period: '2024.08 — 2025.03',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    index: '01',
    title: 'Backend',
    description: 'Java와 Spring Boot를 중심으로 웹 기능과 API를 개발했습니다. JPA와 MyBatis를 사용해 데이터베이스를 연동한 경험이 있습니다.',
    skills: ['Java', 'Spring Boot', 'JPA', 'MyBatis'],
  },
  {
    index: '02',
    title: 'Frontend & App',
    description: 'Thymeleaf와 JSP를 사용해 웹 화면을 구현했습니다. Flutter를 활용한 모바일 앱 개발을 경험했습니다.',
    skills: ['Thymeleaf', 'JSP', 'Flutter', 'JavaScript'],
  },
  {
    index: '03',
    title: 'Database & Deployment',
    description: '프로젝트에서 관계형 데이터베이스를 사용하고, Docker와 GitHub Actions를 활용해 배포 환경을 구성했습니다.',
    skills: ['MySQL', 'MariaDB', 'Docker', 'GitHub Actions'],
  },
]
