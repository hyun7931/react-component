# 📜 Smart Terms UI

금융 서비스 및 일반 앱에서 공통적으로 사용되는 **약관 동의 상세 페이지**를 위한 리액트 컴포넌트 라이브러리입니다. 사용자가 약관을 끝까지 읽어야만 확인 버튼이 활성화되는 UX 로직과 AI 요약 컴포넌트를 제공합니다.

## ✨ Key Features

- **Compound Component 패턴**: 하위 컴포넌트를 조립하여 자유롭게 레이아웃을 구성할 수 있습니다.
- **스크롤 감지 로직**: 사용자가 약관 본문을 끝까지 읽었을 때만 '확인' 버튼이 활성화됩니다.
- **AI 요약 레이아웃**: 복잡한 약관을 한눈에 파악할 수 있는 AI 요약 전용 배지 및 텍스트 레이아웃을 제공합니다.
- **디자인 커스터마이징**: CSS 변수(`--st-primary` 등)를 통해 브랜드 컬러를 쉽게 변경할 수 있습니다.

## 📦 Installation

```bash
npm install smart-terms-ui
```

## 🛠 Component

### Detail

| Prop        | Type       | Description                   | Default |
| ----------- | ---------- | ----------------------------- | ------- |
| `onConfirm` | `function` | 확인 버튼 클릭 시 실행될 콜백 | -       |

### Detail.Title

- 제목 컴포넌트

### Detail.Subtitle

- 소제목 컴포넌트

### Detail.Body

- 내용 컴포넌트

### Detail.BadgeGroup

- 배지 아이템을 래핑하는 그룹

### Detail.BadgeItem

- 불렛 포인트로 텍스트를 표시하는 컴포넌트

## 🚀 사용 예시

```jsx
import { Detail } from 'smart-terms-ui'

function App() {
  const handleConfirm = () => {
    console.log('약관 동의 완료!')
  }

  return (
    <Detail onConfirm={handleConfirm}>
      <Detail.Title>제1조 (목적)</Detail.Title>
      <Detail.Body>약관 내용입니다.</Detail.Body>

      {/* AI 요약 섹션 */}
      <Detail.BadgeGroup>
        <Detail.Subtitle>AI 요약</Detail.Subtitle>
        <Detail.BadgeItem>
          <Detail.Body>AI 요약 내용입니다.</Detail.Body>
        </Detail.BadgeItem>
      </Detail.BadgeGroup>
    </Detail>
  )
}
```

![alt text](image.png)
![alt text](image-1.png)

## 🎨 Customizing Theme

프로젝트의 전역 CSS에서 아래 변수들을 수정하여 디자인을 변경할 수 있습니다.

```css
:root {
  --st-primary: #0046ff; /* 메인 강조색 */
  --st-bg: #ffffff; /* 배경색 */
  --st-text-main: #111111; /* 기본 텍스트 색상 */
}
```
