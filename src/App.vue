<!-- src/App.vue -->
<script setup lang="ts">
import AppLayout from './components/layout/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <div class="space-y-6">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">خوش آمدید!</h2>
        <p class="text-gray-600">
          این یک پروژه با لایه‌بندی حرفه‌ای است.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <i class="pi pi-box text-indigo-600 text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">کامپوننت‌های مجزا</h3>
          <p class="text-gray-600 text-sm">همه کامپوننت‌ها در پوشه‌های جداگانه سازماندهی شده‌اند</p>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <i class="pi pi-palette text-purple-600 text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
          <p class="text-gray-600 text-sm">استایل‌دهی سریع و مدرن با Tailwind</p>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <i class="pi pi-star text-pink-600 text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">PrimeVue</h3>
          <p class="text-gray-600 text-sm">کامپوننت‌های حرفه‌ای و غنی</p>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
