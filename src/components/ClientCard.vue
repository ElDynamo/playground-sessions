<template>
	<div class="flex gap-2">
		<div class="flex flex-col">
			<div class="rounded-xl flex h-32 shadow-subtle w-full p-3 glassmorphism">
				<div class="flex flex-col w-full">
					<div class="flex flex-col">
						<div class="flex gap-2 align-center justify-center">
							<i
								class="pi pi-user"
								style="font-size: 3rem"></i>
							<h2 class="">Jan Kowalski</h2>
						</div>
					</div>
					<div class="flex flex-col py-2">
						<p>Skytower + Plener</p>
						<p>26.05.2023 <span> 13:00</span></p>
					</div>
				</div>
			</div>
			<p class="text-right text-sm text-gray-200">20.02.2023</p>
		</div>

		<div class="flex flex-col gap-2 items-start justify-start">
			<Button
				icon="pi pi-check"
				class="p-button-rounded p-button-raised w-1/2" />
			<Button
				icon="pi pi-times"
				class="p-button-rounded p-button-outlined p-button-secondary p-button-raised w-1/2" />
		</div>
	</div>
</template>
