import { useState } from 'react'
import { fetchAiSummary } from '../services/aiService'

export const useAiSummary = () => {
  const [summary, setSummary] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getSummary = async text => {
    setIsLoading(true)
    try {
      const result = await fetchAiSummary(text)
      setSummary(result.summary)
    } catch (error) {
      console.error('AI 요약 실패:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { summary, isLoading, getSummary }
}
