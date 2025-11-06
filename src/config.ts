<<<<<<< HEAD
const DEFAULT_API_BASE_URL = 'https://api.dupilot.store'
=======
const DEFAULT_API_BASE_URL = 'http://ec2-43-203-118-46.ap-northeast-2.compute.amazonaws.com:8000'
>>>>>>> e0c72d2 (fix: geturl 설정파일 추가)

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL as string | undefined

const normalisedBaseUrl = rawBaseUrl?.replace(/\/+$/, '') || DEFAULT_API_BASE_URL

export function getApiUrl(path: string): string {
  const normalisedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalisedBaseUrl}${normalisedPath}`
}

export const config = {
  apiBaseUrl: normalisedBaseUrl,
}
