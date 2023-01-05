<template>
	<div
		class="rounded-xl flex flex-col mx-auto min-h-[36rem] w-full p-4 text-gray-50 dialog-color">
		<h2 class="font-medium mx-auto pb-4 text-3xl">RECENT RESERVATIONS</h2>
		<div class="flex flex-col gap-4">
			<ClientCard />
			<ClientCard />
			<ClientCard />
		</div>
	</div>
</template>

<script setup lang="ts">
	import ClientCard from "./ClientCard.vue";
</script>
