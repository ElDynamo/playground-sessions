<template>
	<div
		class="rounded-xl flex flex-col mx-auto h-[28rem] w-full p-4 text-gray-50 dialog-color">
		<h2 class="font-medium mx-auto pb-4 text-3xl">UPCOMING PHOTOSHOOTS</h2>
		<Carousel
			:value="products"
			:numVisible="3"
			:numScroll="3"
			:responsiveOptions="responsiveOptions">
			<template #item="slotProps">
				<div class="flex product-item justify-center">
					<div class="product-item-content">
						<Card style="width: 8rem; margin-bottom: 2em; margin-top: 2em">
							<template #header>
								<div class="pt-4">
									<i
										class="pi pi-calendar"
										style="font-size: 6rem"></i>
								</div>
							</template>
							<template #title>
								{{ slotProps.data.name }}
							</template>
							<template #content>
								<p>{{ slotProps.data.date }}</p>
								<p>{{ slotProps.data.start_time }}</p>
							</template>
							<template #footer>
								<Button
									icon="pi pi-info-circle"
									label="Details"
									@click="visibility = true" />
							</template>
						</Card>
					</div>
				</div>
			</template>
		</Carousel>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	const visibility = ref(false);
	const products = ref([
		{ name: "Sesja skytower", date: "2023-01-01", start_time: "20:21" },
		{ name: "Sesja plener", date: "2023-01-01", start_time: "20:21" },
		{ name: "Sesja skytower", date: "2023-01-01", start_time: "20:21" },
		{ name: "Sesja skytower", date: "2023-01-01", start_time: "20:21" },
		{ name: "Sesja skytower", date: "2023-01-01", start_time: "20:21" },
	]);
	const responsiveOptions = ref([
		{
			breakpoint: "1024px",
			numVisible: 3,
			numScroll: 3,
		},
		{
			breakpoint: "600px",
			numVisible: 2,
			numScroll: 2,
		},
		{
			breakpoint: "480px",
			numVisible: 1,
			numScroll: 1,
		},
	]);
</script>
