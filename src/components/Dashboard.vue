<template>
	<div class="flex gap-4">
		<div class="w-1/4">
			<RecentPhotoshootsVue />
		</div>
		<div class="w-3/4">
			<UpcomingPhotshootsVue />
		</div>
	</div>
</template>

<script setup lang="ts">
	import RecentPhotoshootsVue from "./RecentPhotoshoots.vue";
	import UpcomingPhotshootsVue from "./UpcomingPhotshoots.vue";
</script>
