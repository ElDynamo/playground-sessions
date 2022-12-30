<script setup lang="ts">
	import Button from "primevue/button";
	import InputText from "primevue/inputtext";
	import Calendar from "primevue/calendar";
	import InputNumber from "primevue/inputnumber";
	import Textarea from "primevue/textarea";

	import { ref } from "vue";

	const minSessionDateValue = ref(new Date());
	var sessionDate = ref(new Date());
	var duration = ref(1);
	var startTime = ref(new Date());
	var slots = ref(1);
	var price = ref(999);
	let sessionName = ref(null);
</script>

<template>
	<div
		class="bg-gradient-to-bl rounded-xl flex flex-col mx-auto from-slate-700 via-gray-800 to-zinc-800 my-8 w- py-8 px-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
		<div class="flex flex-col p-fluid text-left text-gray-200 gap-4">
			<placeholder class="pl-2"> Session name </placeholder>
			<InputText
				type="text"
				placeholder="SkyTower + Plener"
				v-model="value1" />

			<div class="">
				<placeholder class="pl-2"> Session date </placeholder>
				<Calendar
					inputId="date1"
					dateFormat="dd.mm.yy"
					v-model="sessionDate" />
			</div>
			<div class="flex gap-2">
				<div class="w-1/2">
					<span class="p-float-label">
						<placeholder class="pl-2"> Start Time </placeholder>
						<Calendar
							:stepMinute="15"
							:showSeconds="false"
							:timeOnly="true"
							inputId="time"
							:showTime="true"
							v-model="startTime" />
					</span>
				</div>

				<div class="w-1/2">
					<span class="p-float-label">
						<placeholder class="pl-2"> Duration </placeholder>
						<InputNumber
							inputId="minmax-buttons"
							v-model="duration"
							mode="decimal"
							showButtons
							:min="1"
							:max="8" />
					</span>
				</div>
			</div>
			<div class="flex gap-2">
				<div class="w-1/2">
					<span class="p-float-label">
						<placeholder class="pl-2"> Price per seat </placeholder>
						<InputNumber
							inputId="currency-germany"
							v-model="price"
							mode="currency"
							currency="PLN"
							locale="pl-PL" />
					</span>
				</div>

				<div class="w-1/2">
					<span class="p-float-label">
						<placeholder class="pl-2"> Slots </placeholder>
						<InputNumber
							inputId="minmax-buttons"
							v-model="slots"
							mode="decimal"
							showButtons
							:min="0"
							:max="20" />
					</span>
				</div>
			</div>

			<div>
				<span>
					<Textarea
						id="place_of_meeting"
						placeholder="sesja odbedzie się przy wejściu do SkyTower od ulicy Gwiaździstej"
						v-model="value10"
						rows="3" />
				</span>
			</div>
		</div>

		<div class="flex my-2 pt-2 gap-2 justify-center">
			<Button
				class="p-button-danger p-button-raised w-1/2 !font-medium !text-gray-200"
				label="Cancel" />
			<Button
				class="p-button-success p-button-raised w-1/2 !font-medium !text-gray-200"
				label="Save" />
		</div>

		<!-- 
		<div class="flex my-2 gap-2 justify-center">
			<button
				class="bg-gradient-to-br rounded-lg font-medium from-red-600 to-red-800 text-lg py-3 px-10 transition text-gray-200 inline-block hover:shadow-xl hover:scale-105 focus:outline-none focus:ring active:bg-gray-100">
				Cancel
			</button>
		</div> -->

		<!-- <Calendar
			id="session_date"
			v-model="session.session_date"
			dateFormat="dd.mm.yy"
			required="true"
			autofocus
			hourFormat="24"
			:showButtonBar="true"
			:hideOnDateTimeSelect="true"
			:manualInput="false"
			:minDate="minSessionDateValue"
			:showIcon="true"
			:stepMinute="15"
			:showSeconds="false"
			:showTime="true"
			:class="{ 'p-invalid': submitted && !session.session_date }" /> -->
	</div>
</template>
