// 1. 스타일 임포트 (빌드 시 style.css로 묶입니다)
import './styles/theme.css'

// 2. 컴포넌트 불러오기
import Detail from './components/Detail/Detail'
import Agreement from './components/Agreement/Agreement'

// 3. 외부로 내보내기 (Named Export)
export { Detail, Agreement }
