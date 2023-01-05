<template>
	<div>
		<Dialog
			:visible="isDialogVisible"
			:style="{ width: '28rem' }"
			:modal="true"
			contentClass=""
			:closable="false"
			:closeOnEscape="true"
			:showHeader="false">
			<div
				class="bg-gradient-to-bl p-fluid from-slate-700 via-gray-800 to-zinc-800 grid p-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] formgrid">
				<div class="my-2 text-left text-gray-300 gap-4 col-12 field md:col-12">
					<label class="text-white">Session name</label>
					<InputText
						type="text"
						v-model="session.session_name"
						placeholder="Session name" />
				</div>

				<div class="col-12 field md:col-6">
					<label>Session date</label>
					<Calendar
						inputId="date1"
						dateFormat="dd.mm.yy"
						v-model="session.session_date" />
				</div>

				<div class="col-12 field md:col-6">
					<label>Start time</label>
					<Calendar
						:stepMinute="15"
						:showSeconds="false"
						:timeOnly="true"
						inputId="time"
						:showTime="true"
						v-model="session.start_time" />
				</div>

				<div class="col-12 field md:col-4">
					<label> Duration [h]</label>
					<InputNumber
						inputId="duration_h"
						v-model="session.duration_h"
						mode="decimal"
						showButtons
						min="1"
						max="8"
						minFractionDigits="0"
						maxFractionDigits="0"
						step="1" />
				</div>

				<div class="col-12 field md:col-4">
					<label> Slots </label>
					<InputNumber
						inputId="slots"
						v-model="session.slots"
						mode="decimal"
						showButtons
						:min="1"
						:max="2" />
				</div>

				<div class="col-12 field md:col-4">
					<label> Price per seat </label>
					<InputNumber
						inputId="price"
						v-model="session.price"
						mode="currency"
						currency="PLN"
						locale="pl-PL" />
				</div>

				<div class="col-12 md:col-12">
					<label>Meeting place:</label>
					<Textarea
						id="meeting_place"
						placeholder="Meeting place"
						v-model="session.meeting_place"
						rows="3" />
				</div>

				<div class="my-2 pt-2 gap-2 col-12 justify-center md:col-6">
					<Button
						class="p-button-danger p-button-raised !font-medium !text-gray-200"
						label="Cancel"
						@click="cancelEditSession" />
				</div>

				<div class="my-2 pt-2 gap-2 col-12 justify-center md:col-6">
					<Button
						class="p-button-success p-button-raised !font-medium !text-gray-200"
						label="Save"
						@click="saveSession" />
				</div>
			</div>
		</Dialog>

		<Button
			icon="pi pi-pencil"
			class="p-button-info p-button-raised w-1/2 !font-medium"
			label="Update session"
			@click="editSession" />

		<!--
		<div class="flex my-2 gap-2 justify-center">
			<button
				class="bg-gradient-to-br rounded-lg font-medium from-red-600 to-red-800 text-lg py-3 px-10 transition text-gray-200 inline-block hover:shadow-xl hover:scale-105 focus:outline-none focus:ring active:bg-gray-100">
				Cancel
			</button>
		</div> -->
	</div>
</template>

<script lang="ts" setup>
	console.log("setup ...");
</script>

<script lang="ts">
	import { ref } from "vue";
	import type { Session } from "../types/session";

	var isDialogVisible = ref(false);

	const session = ref<Session | undefined>(undefined);
	session.value = {
		session_name: "SkyTowe+Plener 1",
		session_date: new Date(),
		start_time: new Date(),
		duration_h: 1,
		price: 1000,
		slots: 2,
		meeting_place: "Wejście od ul. Gwiaździstej",
	};

	const minSessionDateValue = ref(new Date());

	export function cancelEditSession() {
		isDialogVisible.value = false;
	}

	export function saveSession() {
		isDialogVisible.value = false;
	}

	export function editSession() {
		isDialogVisible.value = true;
	}
</script>

<style>
	div .p-dialog {
		pointer-events: auto;
		max-height: 90%;
		transform: scale(1);
	}

	.p-dialog .p-dialog-content {
		padding: 0 0.5rem 0rem 0.5rem;
	}
</style>
