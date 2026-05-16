<template>
  <AppLayout>
    <div class="mx-auto flex max-w-[1560px] flex-col gap-5">
      <section class="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm dark:border-dark-700 dark:bg-dark-900">
        <div class="grid gap-0 lg:grid-cols-[minmax(0,1.04fr)_minmax(420px,0.96fr)]">
          <div class="flex min-h-[300px] flex-col justify-between gap-8 p-6 md:p-8">
            <div class="max-w-3xl">
              <div class="mb-4 flex flex-wrap items-center gap-2">
                <span class="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-800 dark:bg-teal-950/60 dark:text-teal-200">
                  AI 商业出图工作台
                </span>
                <span class="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 dark:border-dark-700 dark:text-dark-300">
                  商品图 / 海报 / 社媒封面
                </span>
              </div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-4xl">
                用一套模板，把商品图和营销图稳定交付出来。
              </h2>
              <p class="mt-4 max-w-2xl text-sm leading-6 text-gray-600 dark:text-dark-300">
                面向电商运营、内容团队和代理商：统一提示词规范、API Key 权限和图片生成参数，减少试错成本，快速产出可下载的商品主图、活动视觉和社媒素材。
              </p>
            </div>
            <div class="grid gap-3 sm:grid-cols-3">
              <div v-for="metric in heroMetrics" :key="metric.label" class="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 dark:border-dark-700 dark:bg-dark-800/70">
                <div class="text-2xl font-bold text-gray-950 dark:text-white">{{ metric.value }}</div>
                <div class="mt-1 text-xs text-gray-500 dark:text-dark-400">{{ metric.label }}</div>
              </div>
            </div>
          </div>
          <div class="relative min-h-[300px] overflow-hidden bg-slate-950 p-6 text-white">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.28),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(251,191,36,0.18),transparent_24%),linear-gradient(135deg,#0f172a,#020617)]"></div>
            <div class="relative grid h-full gap-4 lg:grid-cols-[1fr_0.88fr]">
              <div class="flex flex-col gap-4">
                <div class="overflow-hidden rounded-2xl border border-white/12 bg-white shadow-2xl shadow-teal-950/40">
                  <div class="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                    <div>
                      <div class="text-xs font-semibold text-gray-500">E-commerce Hero</div>
                      <div class="mt-1 text-sm font-bold text-gray-950">便携咖啡机主图</div>
                    </div>
                    <span class="rounded-full bg-teal-50 px-2 py-1 text-[11px] font-semibold text-teal-700">1:1</span>
                  </div>
                  <div class="relative h-32 bg-gradient-to-br from-stone-50 via-white to-teal-50">
                    <div class="absolute left-6 top-5 h-20 w-20 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-600 shadow-xl"></div>
                    <div class="absolute left-14 top-10 h-24 w-14 rounded-full border-[10px] border-teal-400 bg-teal-200 shadow-lg"></div>
                    <div class="absolute bottom-5 right-6 h-8 w-28 rounded-full bg-stone-200"></div>
                    <div class="absolute bottom-10 right-10 h-2 w-20 rounded-full bg-teal-300"></div>
                  </div>
                </div>
                <div class="rounded-2xl border border-white/12 bg-white/10 p-4">
                  <div class="mb-3 flex items-center justify-between">
                    <span class="text-xs font-semibold text-teal-100">Prompt Pack</span>
                    <span class="rounded-full bg-white/15 px-2 py-1 text-[11px] text-white/80">电商 · 海报 · 信息图</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="rounded-xl bg-white px-3 py-3 text-slate-950">
                      <div class="text-lg font-bold">32s</div>
                      <div class="mt-1 text-[11px] text-slate-500">首图出稿</div>
                    </div>
                    <div class="rounded-xl bg-white px-3 py-3 text-slate-950">
                      <div class="text-lg font-bold">3x</div>
                      <div class="mt-1 text-[11px] text-slate-500">批量变体</div>
                    </div>
                    <div class="rounded-xl bg-white px-3 py-3 text-slate-950">
                      <div class="text-lg font-bold">Key</div>
                      <div class="mt-1 text-[11px] text-slate-500">分组权限</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid gap-4">
                <div class="rounded-2xl border border-white/12 bg-gradient-to-br from-rose-50 to-orange-100 p-4 text-slate-950 shadow-2xl shadow-black/20">
                  <div class="text-xs font-semibold text-rose-600">Social Cover</div>
                  <div class="mt-2 text-2xl font-black leading-tight">周末上新</div>
                  <div class="mt-3 h-20 rounded-xl bg-white/70 p-3">
                    <div class="h-3 w-24 rounded-full bg-rose-300"></div>
                    <div class="mt-2 h-2 w-32 rounded-full bg-orange-200"></div>
                    <div class="mt-5 flex gap-2">
                      <span class="h-8 flex-1 rounded-lg bg-rose-200"></span>
                      <span class="h-8 flex-1 rounded-lg bg-teal-200"></span>
                    </div>
                  </div>
                </div>
                <div class="rounded-2xl border border-white/12 bg-white p-4 text-slate-950 shadow-2xl shadow-black/20">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-semibold text-slate-500">Campaign Visual</span>
                    <Icon name="sparkles" size="sm" class="text-teal-600" />
                  </div>
                  <div class="mt-4 grid grid-cols-3 gap-2">
                    <div class="h-16 rounded-xl bg-teal-100"></div>
                    <div class="h-16 rounded-xl bg-amber-100"></div>
                    <div class="h-16 rounded-xl bg-slate-200"></div>
                  </div>
                  <div class="mt-3 h-2 w-32 rounded-full bg-slate-200"></div>
                  <div class="mt-2 h-2 w-20 rounded-full bg-slate-100"></div>
                </div>
                <div class="rounded-2xl border border-white/12 bg-slate-900 p-4">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-white">OpenAI Images</span>
                    <span class="text-teal-200">可审计 · 可下载</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="grid gap-5 xl:grid-cols-[430px_minmax(0,1fr)]">
        <aside class="space-y-5">
          <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-lg font-semibold text-gray-950 dark:text-white">生成控制台</h3>
                <p class="mt-1 text-xs text-gray-500 dark:text-dark-400">模式、Key 与生成参数</p>
              </div>
              <button class="btn btn-secondary btn-sm" :disabled="loadingKeys" @click="loadApiKeys">
                <Icon name="refresh" size="sm" :class="loadingKeys ? 'animate-spin' : ''" />
              </button>
            </div>

            <div class="mt-5 grid grid-cols-2 rounded-xl bg-gray-100 p-1 dark:bg-dark-800">
              <button
                type="button"
                class="rounded-lg px-3 py-2 text-sm font-semibold transition"
                :class="mode === 'generations' ? 'bg-white text-gray-950 shadow-sm dark:bg-dark-700 dark:text-white' : 'text-gray-500 hover:text-gray-800 dark:text-dark-300 dark:hover:text-white'"
                @click="mode = 'generations'"
              >
                文生图
              </button>
              <button
                type="button"
                class="rounded-lg px-3 py-2 text-sm font-semibold transition"
                :class="mode === 'edits' ? 'bg-white text-gray-950 shadow-sm dark:bg-dark-700 dark:text-white' : 'text-gray-500 hover:text-gray-800 dark:text-dark-300 dark:hover:text-white'"
                @click="mode = 'edits'"
              >
                图生图
              </button>
            </div>

            <div class="mt-5 space-y-4">
              <label class="block">
                <span class="input-label">当前 API Key</span>
                <select v-model.number="selectedKeyId" class="input">
                  <option :value="0">请选择 API Key</option>
                  <option v-for="key in activeKeys" :key="key.id" :value="key.id">
                    {{ key.name }} · {{ key.group?.name || '未分组' }}
                  </option>
                </select>
              </label>

              <div v-if="selectedKeyBlocked" class="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                当前 Key 所属分组未开启生图权限，请切换分组或联系管理员开启。
              </div>

              <label class="block">
                <span class="input-label">模型</span>
                <select v-model="model" class="input">
                  <option v-for="option in modelOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </label>

              <label class="block">
                <span class="input-label">提示词</span>
                <textarea
                  v-model="prompt"
                  rows="8"
                  class="input min-h-[190px] resize-y leading-6"
                  placeholder="描述主体、场景、镜头、材质、光线、构图与禁止事项。也可以先点下方模板。"
                ></textarea>
              </label>

              <div v-if="mode === 'edits'" class="rounded-2xl border border-dashed p-4 transition" :class="dragOver ? 'border-teal-400 bg-teal-50 dark:bg-teal-950/30' : 'border-gray-300 bg-gray-50 dark:border-dark-600 dark:bg-dark-800/60'" @dragover.prevent="dragOver = true" @dragleave.prevent="dragOver = false" @drop.prevent="handleDrop">
                <input ref="fileInputRef" type="file" accept="image/*" multiple class="hidden" @change="handleImageInput" />
                <button type="button" class="flex w-full flex-col items-center justify-center gap-2 py-3 text-center" @click="fileInputRef?.click()">
                  <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm dark:bg-dark-700">
                    <Icon name="upload" size="lg" />
                  </span>
                  <span class="text-sm font-semibold text-gray-800 dark:text-white">上传参考图</span>
                  <span class="text-xs text-gray-500 dark:text-dark-400">支持拖拽，多图会一并传给编辑接口</span>
                </button>
                <div v-if="uploadedImages.length > 0" class="mt-3 grid grid-cols-3 gap-2">
                  <div v-for="item in uploadedImages" :key="item.url" class="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-dark-700">
                    <img :src="item.url" :alt="item.file.name" class="aspect-square w-full object-cover" />
                  </div>
                </div>
              </div>

              <div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="input-label mb-0">尺寸方案</span>
                  <span class="rounded-full border border-amber-200 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:border-amber-900 dark:text-amber-300">按图片计费层级</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    v-for="option in sizeOptions"
                    :key="option.value"
                    type="button"
                    class="rounded-xl border px-3 py-2 text-left transition"
                    :class="size === option.value ? 'border-teal-400 bg-teal-50 text-teal-800 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-100' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-200'"
                    @click="size = option.value"
                  >
                    <span class="block text-sm font-semibold">{{ option.label }}</span>
                    <span class="mt-0.5 block text-xs opacity-70">{{ option.hint }}</span>
                  </button>
                </div>
              </div>

              <div>
                <span class="input-label">生成质量</span>
                <div class="grid grid-cols-4 gap-2">
                  <button
                    v-for="option in qualityOptions"
                    :key="option"
                    type="button"
                    class="rounded-xl border px-2 py-2 text-sm font-semibold capitalize transition"
                    :class="quality === option ? 'border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-100' : 'border-gray-200 bg-white text-gray-600 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300'"
                    @click="quality = option"
                  >
                    {{ option }}
                  </button>
                </div>
              </div>

              <div>
                <span class="input-label">生成数量</span>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="option in countOptions"
                    :key="option"
                    type="button"
                    class="rounded-xl border px-3 py-2 text-sm font-semibold transition"
                    :class="count === option ? 'border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-100' : 'border-gray-200 bg-white text-gray-600 dark:border-dark-700 dark:bg-dark-800 dark:text-dark-300'"
                    @click="count = option"
                  >
                    {{ option }} 张
                  </button>
                </div>
              </div>

              <button class="btn btn-primary w-full py-3" :disabled="generating || !canGenerate" @click="handleGenerate">
                <Icon name="sparkles" size="md" :class="generating ? 'animate-pulse' : ''" />
                {{ generating ? '生成中...' : '立即生成' }}
              </button>
            </div>
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <div class="flex items-center justify-between gap-3">
              <div>
                <h3 class="text-lg font-semibold text-gray-950 dark:text-white">热门模板</h3>
                <p class="mt-1 text-xs text-gray-500 dark:text-dark-400">参考 awesome-gpt-image-2 场景整理</p>
              </div>
              <button class="btn btn-ghost btn-sm" @click="prompt = ''">清空</button>
            </div>
            <div class="mt-4 flex gap-2 overflow-x-auto pb-1">
              <button
                v-for="category in templateCategories"
                :key="category.id"
                type="button"
                class="whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition"
                :class="selectedCategory === category.id ? 'border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-100' : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-dark-700 dark:text-dark-300 dark:hover:bg-dark-800'"
                @click="selectedCategory = category.id"
              >
                {{ category.name }}
              </button>
            </div>
            <div class="mt-4 space-y-2">
              <button
                v-for="template in visibleTemplates"
                :key="template.id"
                type="button"
                class="group w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-left transition hover:border-teal-300 hover:bg-teal-50 dark:border-dark-700 dark:bg-dark-800/60 dark:hover:border-teal-700 dark:hover:bg-teal-950/30"
                @click="applyTemplate(template.prompt)"
              >
                <div class="flex items-center justify-between gap-3">
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ template.title }}</span>
                  <Icon name="arrowRight" size="sm" class="text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-teal-600" />
                </div>
                <p class="mt-1 line-clamp-2 text-xs leading-5 text-gray-500 dark:text-dark-400">{{ template.summary }}</p>
              </button>
            </div>
          </section>
        </aside>

        <main class="space-y-5">
          <section class="min-h-[680px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <div class="flex flex-col justify-between gap-3 border-b border-gray-100 pb-4 dark:border-dark-800 md:flex-row md:items-center">
              <div>
                <h3 class="text-lg font-semibold text-gray-950 dark:text-white">生成结果</h3>
                <p class="mt-1 text-xs text-gray-500 dark:text-dark-400">
                  {{ selectedKey ? `${selectedKey.group?.name || '未分组'} · ${model} · ${size}` : '选择 API Key 后开始生成' }}
                </p>
              </div>
              <button class="btn btn-secondary btn-sm" :disabled="generatedImages.length === 0" @click="clearResults">
                <Icon name="trash" size="sm" />
                清空结果
              </button>
            </div>

            <div v-if="generating" class="grid gap-4 py-5 md:grid-cols-2">
              <div v-for="item in count" :key="item" class="aspect-square animate-pulse rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800"></div>
            </div>

            <div v-else-if="generatedImages.length > 0" class="grid gap-4 py-5 md:grid-cols-2 2xl:grid-cols-3">
              <figure v-for="image in generatedImages" :key="image.id" class="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-dark-700 dark:bg-dark-800">
                <img :src="image.src" alt="Generated image" class="aspect-square w-full object-contain transition duration-300 group-hover:scale-[1.02]" />
                <figcaption class="flex items-center justify-between gap-2 border-t border-gray-200 p-3 dark:border-dark-700">
                  <span class="truncate text-xs text-gray-500 dark:text-dark-400">{{ image.revisedPrompt || prompt }}</span>
                  <div class="flex items-center gap-1">
                    <button class="rounded-lg p-2 text-gray-500 transition hover:bg-white hover:text-teal-600 dark:hover:bg-dark-700" title="复制图片地址" @click="copyImageUrl(image.src)">
                      <Icon name="copy" size="sm" />
                    </button>
                    <button class="rounded-lg p-2 text-gray-500 transition hover:bg-white hover:text-teal-600 dark:hover:bg-dark-700" title="下载图片" @click="downloadImage(image)">
                      <Icon name="download" size="sm" />
                    </button>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div v-else class="flex min-h-[560px] flex-col items-center justify-center rounded-2xl bg-gray-50 text-center dark:bg-dark-800/60">
              <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm dark:bg-dark-700">
                <Icon name="sparkles" size="xl" />
              </div>
              <h4 class="mt-5 text-lg font-semibold text-gray-950 dark:text-white">这里会显示最新生成的图片</h4>
              <p class="mt-2 max-w-md text-sm leading-6 text-gray-500 dark:text-dark-300">
                填写提示词，或套用左侧模板后开始生成。图生图模式会把参考图和提示词一起发送到编辑接口。
              </p>
            </div>
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-dark-700 dark:bg-dark-900">
            <div class="flex items-center justify-between gap-3">
              <div>
                <h3 class="text-lg font-semibold text-gray-950 dark:text-white">历史生成</h3>
                <p class="mt-1 text-xs text-gray-500 dark:text-dark-400">图片归档、缩略图与跨设备历史记录</p>
              </div>
            </div>
            <div class="mt-4 rounded-xl border border-dashed border-teal-200 bg-teal-50/60 p-8 text-center dark:border-teal-900/70 dark:bg-teal-950/20">
              <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm dark:bg-dark-800">
                <Icon name="document" size="lg" />
              </div>
              <h4 class="mt-4 text-base font-semibold text-gray-950 dark:text-white">功能敬请期待</h4>
              <p class="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500 dark:text-dark-300">
                历史生成需要稳定的对象存储来保存图片文件和缩略图。当前版本仅展示本次生成结果，后续接入存储桶后再开放历史归档。
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import Icon from '@/components/icons/Icon.vue'
import { keysAPI } from '@/api'
import { imageGenerationAPI, type GeneratedImage } from '@/api/imageGeneration'
import type { ApiKey } from '@/types'
import { useAppStore } from '@/stores/app'
import { extractApiErrorMessage } from '@/utils/apiError'

interface PromptTemplate {
  id: string
  category: string
  title: string
  summary: string
  prompt: string
}

interface UploadPreview {
  file: File
  url: string
}

const LEGACY_HISTORY_STORAGE_KEY = 'sub2api_image_generation_history_v1'

const appStore = useAppStore()
const apiKeys = ref<ApiKey[]>([])
const selectedKeyId = ref(0)
const loadingKeys = ref(false)
const generating = ref(false)
const mode = ref<'generations' | 'edits'>('generations')
const model = ref('gpt-image-2')
const prompt = ref('')
const size = ref('1024x1024')
const quality = ref('auto')
const count = ref(1)
const generatedImages = ref<GeneratedImage[]>([])
const uploadedImages = ref<UploadPreview[]>([])
const dragOver = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)
const selectedCategory = ref('ecommerce')

const heroMetrics = [
  { value: '10+', label: '商业提示词模板' },
  { value: '3', label: '图片模型预设' },
  { value: '1-3', label: '批量出图变体' },
]

const modelOptions = [
  { value: 'gpt-image-2', label: 'gpt-image-2' },
  { value: 'gpt-image-1.5', label: 'gpt-image-1.5' },
  { value: 'gpt-image-1', label: 'gpt-image-1' },
]

const sizeOptions = [
  { value: '1024x1024', label: '1K 方图', hint: '1024 x 1024' },
  { value: '1536x1024', label: '横版 2K', hint: '1536 x 1024' },
  { value: '1024x1536', label: '竖版 2K', hint: '1024 x 1536' },
  { value: '2048x2048', label: '高清方图', hint: '2048 x 2048' },
]

const qualityOptions = ['auto', 'low', 'medium', 'high']
const countOptions = [1, 2, 3]

const templateCategories = [
  { id: 'ecommerce', name: '电商' },
  { id: 'poster', name: '海报' },
  { id: 'social', name: '小红书' },
  { id: 'infographic', name: '信息图' },
  { id: 'brand', name: '品牌' },
]

const templates: PromptTemplate[] = [
  {
    id: 'product-hero',
    category: 'ecommerce',
    title: '电商主图',
    summary: '白底高级产品主图，适合首图与详情页头图。',
    prompt:
      '为一款【产品名称】生成电商平台主图：产品居中占画面 70%，干净白色背景，柔和棚拍光，真实材质细节，轻微地面投影，高端消费电子广告质感。构图方正，画面无文字、无水印、无多余装饰。',
  },
  {
    id: 'product-scene',
    category: 'ecommerce',
    title: '生活方式场景图',
    summary: '把产品放入真实使用场景，强调质感和用途。',
    prompt:
      '生成一张【产品名称】生活方式广告图：产品放在真实使用环境中，前景清晰，背景有自然景深，午后自然光，材质真实，色彩克制高级，适合电商详情页氛围图。不要出现品牌 Logo 和文字。',
  },
  {
    id: 'bundle-sale',
    category: 'ecommerce',
    title: '促销组合图',
    summary: '适合套装、买赠、节日活动视觉。',
    prompt:
      '生成【产品套装】促销组合视觉：多件商品错落陈列，主商品最大，赠品作为辅助，背景为浅灰到暖白的干净影棚，光线明亮，商业摄影风格。预留右上角空白用于后期放价格文案，图片本身不要生成文字。',
  },
  {
    id: 'cinematic-poster',
    category: 'poster',
    title: '电影级概念海报',
    summary: '强光影、强主体、适合活动海报。',
    prompt:
      '生成一张电影级概念海报：主题是【主题】，一个强主体位于画面中心，低角度镜头，戏剧化侧逆光，空气中有轻微雾气，色彩对比强烈但不过饱和，海报级构图，预留顶部标题区域，不要生成任何文字。',
  },
  {
    id: 'event-key-visual',
    category: 'poster',
    title: '活动主视觉',
    summary: '适合发布会、课程、社群活动。',
    prompt:
      '为【活动主题】生成活动主视觉：现代科技感空间，清晰的视觉焦点，明亮层次光，蓝绿点缀色，干净背景，适合 16:9 横幅。画面要有可用于排版的留白，不要生成文字、二维码或 Logo。',
  },
  {
    id: 'redbook-cover',
    category: 'social',
    title: '小红书封面底图',
    summary: '强生活感、留白明确，方便二次排版。',
    prompt:
      '生成一张小红书封面底图：主题【主题】，明亮自然光，近景生活方式摄影，主体清晰，背景干净有质感，画面上半部保留大块留白用于后期标题，少女感但不幼稚，真实摄影质感，不要生成文字。',
  },
  {
    id: 'outfit-grid',
    category: 'social',
    title: '穿搭灵感拼图',
    summary: '同一风格的多元素视觉，不直接加文字。',
    prompt:
      '生成一张穿搭灵感视觉：风格【风格】，包含上衣、裤装、鞋包、配饰等单品平铺，统一色系，干净杂志编辑风，浅色背景，构图有呼吸感，适合社交媒体封面，不要生成文字。',
  },
  {
    id: 'explainer-infographic',
    category: 'infographic',
    title: '流程信息图底图',
    summary: '用于后期补字的结构化示意图。',
    prompt:
      '生成一张信息图底图：主题【主题】，包含 4 个连续步骤的视觉模块，每个模块用图标化插画表现，不生成任何文字。整体为浅色专业 SaaS 风格，线条干净，层次明确，预留标题和说明文字空间。',
  },
  {
    id: 'comparison-layout',
    category: 'infographic',
    title: '对比图底图',
    summary: '适合 before/after、方案对比、卖点对比。',
    prompt:
      '生成一张对比信息图底图：左侧表示【旧状态】，右侧表示【新状态】，中间用清晰的视觉过渡连接。整体干净、专业、浅色背景，适合后期添加中文说明，图片本身不要出现文字。',
  },
  {
    id: 'brand-mood',
    category: 'brand',
    title: '品牌情绪板',
    summary: '生成品牌风格方向，适合提案和落地前探索。',
    prompt:
      '为品牌【品牌名/行业】生成一张情绪板：包含材质、色彩、产品细节、场景光影和抽象符号，整体高级克制，现代品牌设计感，统一视觉系统，真实摄影与精致图形混合，不要生成文字或 Logo。',
  },
  {
    id: 'mascot',
    category: 'brand',
    title: '品牌 IP 角色',
    summary: '可爱但不过分幼稚的吉祥物方向。',
    prompt:
      '为【品牌/产品】设计一个 3D 品牌 IP 角色：圆润友好，材质柔和，表情自信，姿态自然，带有与行业相关的小道具，纯色浅背景，适合做贴纸和社交头像，不要生成文字。',
  },
]

const activeKeys = computed(() => apiKeys.value.filter((key) => key.status === 'active'))
const selectedKey = computed(() => activeKeys.value.find((key) => key.id === selectedKeyId.value) || null)
const selectedKeyBlocked = computed(() => selectedKey.value?.group?.allow_image_generation === false)
const canGenerate = computed(() => Boolean(selectedKey.value && prompt.value.trim() && !selectedKeyBlocked.value && (mode.value === 'generations' || uploadedImages.value.length > 0)))
const visibleTemplates = computed(() => templates.filter((template) => template.category === selectedCategory.value))

async function loadApiKeys() {
  loadingKeys.value = true
  try {
    const response = await keysAPI.list(1, 100, { sort_by: 'created_at', sort_order: 'desc' })
    apiKeys.value = response.items
    if (!selectedKey.value && activeKeys.value.length > 0) {
      selectedKeyId.value = activeKeys.value[0].id
    }
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, '加载 API Key 失败'))
  } finally {
    loadingKeys.value = false
  }
}

function applyTemplate(value: string) {
  prompt.value = value
}

function handleImageInput(event: Event) {
  const target = event.target as HTMLInputElement
  setUploadedFiles(target.files)
  if (target) {
    target.value = ''
  }
}

function handleDrop(event: DragEvent) {
  dragOver.value = false
  setUploadedFiles(event.dataTransfer?.files || null)
}

function setUploadedFiles(files: FileList | null) {
  if (!files) return
  clearUploadedImages()
  uploadedImages.value = Array.from(files)
    .filter((file) => file.type.startsWith('image/'))
    .slice(0, 4)
    .map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }))
}

function clearUploadedImages() {
  uploadedImages.value.forEach((item) => URL.revokeObjectURL(item.url))
  uploadedImages.value = []
}

async function handleGenerate() {
  if (!selectedKey.value) {
    appStore.showWarning('请先选择 API Key')
    return
  }
  if (!prompt.value.trim()) {
    appStore.showWarning('请输入提示词')
    return
  }
  if (selectedKeyBlocked.value) {
    appStore.showWarning('当前分组未开启生图权限')
    return
  }
  if (mode.value === 'edits' && uploadedImages.value.length === 0) {
    appStore.showWarning('图生图模式需要先上传参考图')
    return
  }

  generating.value = true
  try {
    const baseRequest = {
      apiKey: selectedKey.value.key,
      gatewayBaseUrl: appStore.apiBaseUrl,
      model: model.value,
      prompt: prompt.value.trim(),
      size: size.value,
      quality: quality.value,
      n: count.value,
    }
    const images = mode.value === 'generations'
      ? await imageGenerationAPI.generateImages(baseRequest)
      : await imageGenerationAPI.editImages({
          ...baseRequest,
          images: uploadedImages.value.map((item) => item.file),
        })

    generatedImages.value = images
    appStore.showSuccess(`已生成 ${images.length} 张图片`)
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, '图片生成失败，请稍后重试'))
  } finally {
    generating.value = false
  }
}

function clearResults() {
  generatedImages.value = []
}

async function copyImageUrl(src: string) {
  try {
    await navigator.clipboard.writeText(src)
    appStore.showSuccess('图片地址已复制')
  } catch {
    appStore.showError('复制失败')
  }
}

function downloadImage(image: GeneratedImage) {
  const link = document.createElement('a')
  link.href = image.src
  link.download = `sub2api-image-${new Date().toISOString().replace(/[:.]/g, '-')}.png`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function clearLegacyHistory() {
  try {
    localStorage.removeItem(LEGACY_HISTORY_STORAGE_KEY)
  } catch {
    // Ignore storage access errors in privacy or restricted browser modes.
  }
}

watch(mode, (nextMode) => {
  if (nextMode === 'generations') {
    clearUploadedImages()
  }
})

onMounted(() => {
  clearLegacyHistory()
  loadApiKeys()
})

onBeforeUnmount(() => {
  clearUploadedImages()
})
</script>
