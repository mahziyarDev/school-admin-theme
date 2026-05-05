<!-- src/components/layout/AppHeader.vue -->
<script setup lang="ts">
import Button from 'primevue/button'
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  toggleSidebar: []
}>()

const isMobileMenuOpen = ref(false)
const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

const toggleMenu = () => {
  if (isMobile.value) {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  } else {
    emit('toggleSidebar')
  }
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
      <div class="flex items-center gap-3">
        <!-- فقط یک دکمه برای همه -->
        <Button
          icon="pi pi-bars"
          severity="secondary"
          text
          rounded
          @click="toggleMenu"
        />

        <h1 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          پروژه من
        </h1>
      </div>

      <div class="flex items-center gap-2 md:gap-3">
        <Button icon="pi pi-search" severity="secondary" text rounded />
        <Button icon="pi pi-bell" severity="secondary" text rounded />
        <Button icon="pi pi-user" severity="secondary" text rounded />
      </div>
    </div>

    <!-- منوی موبایل -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      @click="isMobileMenuOpen = false"
    >
      <div class="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-4" @click.stop>
        <div class="flex justify-between items-center mb-6 pb-4 border-b">
          <h2 class="text-xl font-bold text-gray-800">منو</h2>
          <Button icon="pi pi-times" severity="secondary" text rounded @click="isMobileMenuOpen = false" />
        </div>

        <nav>
          <ul class="space-y-3">
            <li>
              <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition">
                <i class="pi pi-home"></i>
                <span>داشبورد</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition">
                <i class="pi pi-chart-line"></i>
                <span>آمار</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition">
                <i class="pi pi-users"></i>
                <span>کاربران</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition">
                <i class="pi pi-cog"></i>
                <span>تنظیمات</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
