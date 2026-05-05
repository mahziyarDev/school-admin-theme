<!-- src/components/layout/AppSidebar.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const isMobile = ref(window.innerWidth < 768)

// بررسی تغییر سایز صفحه
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
  if (isMobile.value && props.isOpen) {
    emit('close')
  }
}

window.addEventListener('resize', handleResize)
watch(() => props.isOpen, (newVal) => {
  if (isMobile.value && newVal) {
    emit('close')
  }
})

const menuItems = ref([
  { icon: 'pi pi-home', label: 'داشبورد', route: '/' },
  { icon: 'pi pi-chart-line', label: 'آمار', route: '/stats' },
  { icon: 'pi pi-users', label: 'کاربران', route: '/users' },
  { icon: 'pi pi-shopping-cart', label: 'سفارشات', route: '/orders' },
  { icon: 'pi pi-cog', label: 'تنظیمات', route: '/settings' },
])
</script>

<template>
  <!-- Overlay برای موبایل -->
  <div
    v-if="isMobile && isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    @click="emit('close')"
  ></div>

  <!-- سایدبار -->
  <aside
    class="fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg transition-all duration-300 z-40 overflow-y-auto"
    :class="{
      'w-64': isOpen && !isMobile,
      'w-20': !isOpen && !isMobile,
      'translate-x-0': isOpen && isMobile,
      'translate-x-full': !isOpen && isMobile,
      'left-auto right-0': true
    }"
  >
    <nav class="p-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.label">
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors group"
            :class="isOpen ? 'justify-start' : 'justify-center'"
          >
            <i :class="item.icon" class="text-xl text-gray-600 group-hover:text-indigo-600"></i>
            <span v-if="isOpen" class="text-gray-700 group-hover:text-indigo-600">{{ item.label }}</span>
          </a>
        </li>
      </ul>

      <!-- دکمه کوچک کردن سایدبار (فقط دسکتاپ)
      <div v-if="!isMobile" class="mt-8 pt-4 border-t">
        <button
          @click="emit('close')"
          class="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-600 hover:text-indigo-600 transition"
        >
          <i :class="isOpen ? 'pi pi-angle-double-right' : 'pi pi-angle-double-left'"></i>
          <span v-if="isOpen">بستن</span>
        </button>
      </div> -->
    </nav>
  </aside>
</template>
