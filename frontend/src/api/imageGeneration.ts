import axios from 'axios'

export type ImageGenerationMode = 'generations' | 'edits'

export interface ImageGenerationJSONRequest {
  apiKey: string
  gatewayBaseUrl?: string
  model: string
  prompt: string
  size: string
  quality: string
  n: number
}

export interface ImageEditRequest extends ImageGenerationJSONRequest {
  images: File[]
}

export interface ImageGenerationDataItem {
  b64_json?: string
  url?: string
  revised_prompt?: string
}

export interface ImageGenerationResponse {
  created?: number
  data?: ImageGenerationDataItem[]
}

export interface GeneratedImage {
  id: string
  src: string
  revisedPrompt?: string
}

function resolveGatewayBaseUrl(gatewayBaseUrl?: string): string {
  const raw = (gatewayBaseUrl || '').trim()
  if (!raw) return ''
  return raw.replace(/\/api\/v1\/?$/, '').replace(/\/v1\/?$/, '').replace(/\/$/, '')
}

function gatewayUrl(mode: ImageGenerationMode, gatewayBaseUrl?: string): string {
  const baseUrl = resolveGatewayBaseUrl(gatewayBaseUrl)
  return `${baseUrl}/v1/images/${mode}`
}

function authHeaders(apiKey: string): Record<string, string> {
  return {
    Authorization: `Bearer ${apiKey}`,
  }
}

function normalizeImages(response: ImageGenerationResponse): GeneratedImage[] {
  const images: GeneratedImage[] = []
  ;(response.data || []).forEach((item, index) => {
    const src = item.b64_json
      ? `data:image/png;base64,${item.b64_json}`
      : item.url || ''
    if (!src) return
    images.push({
      id: `${Date.now()}-${index}`,
      src,
      revisedPrompt: item.revised_prompt,
    })
  })
  return images
}

export async function generateImages(request: ImageGenerationJSONRequest): Promise<GeneratedImage[]> {
  const { apiKey, gatewayBaseUrl, model, prompt, size, quality, n } = request
  const { data } = await axios.post<ImageGenerationResponse>(
    gatewayUrl('generations', gatewayBaseUrl),
    {
      model,
      prompt,
      size,
      quality,
      n,
      response_format: 'b64_json',
    },
    {
      headers: authHeaders(apiKey),
      timeout: 180000,
    },
  )
  return normalizeImages(data)
}

export async function editImages(request: ImageEditRequest): Promise<GeneratedImage[]> {
  const { apiKey, gatewayBaseUrl, model, prompt, size, quality, n, images } = request
  const formData = new FormData()
  formData.append('model', model)
  formData.append('prompt', prompt)
  formData.append('size', size)
  formData.append('quality', quality)
  formData.append('n', String(n))
  formData.append('response_format', 'b64_json')
  images.forEach((image) => formData.append('image', image))

  const { data } = await axios.post<ImageGenerationResponse>(
    gatewayUrl('edits', gatewayBaseUrl),
    formData,
    {
      headers: authHeaders(apiKey),
      timeout: 180000,
    },
  )
  return normalizeImages(data)
}

export const imageGenerationAPI = {
  generateImages,
  editImages,
}

export default imageGenerationAPI
