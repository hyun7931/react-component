export const fetchAiSummary = async content => {
  // 실제로는 백엔드 API 엔드포인트를 호출하는 것이 안전합니다.
  const response = await fetch('https://api.your-server.com/summarize', {
    method: 'POST',
    body: JSON.stringify({ text: content }),
  })
  return response.json()
}
