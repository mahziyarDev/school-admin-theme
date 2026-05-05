<!-- src/components/layout/AppLayout.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppFooter from './AppFooter.vue'

const sidebarOpen = ref(true)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
  if (isMobile.value) {
    sidebarOpen.value = false
  } else {
    sidebarOpen.value = true
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader
      @toggle-sidebar="sidebarOpen = !sidebarOpen"
      @toggle-mobile-menu="sidebarOpen = !sidebarOpen"
    />

    <div class="flex relative">
      <AppSidebar
        :is-open="sidebarOpen"
        @close="closeSidebar"
      />

      <main
        class="flex-1 p-4 md:p-6 transition-all duration-300"
        :class="{
          'md:mr-64': sidebarOpen && !isMobile,
          'md:mr-20': !sidebarOpen && !isMobile,
          'mr-0': isMobile
        }"
      >
        <div class="container mx-auto">
          <slot />
        </div>
      </main>
    </div>

    <AppFooter />
  </div>
</template>
