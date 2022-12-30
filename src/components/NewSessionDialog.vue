<template>
  <Dialog
    :visible="isDialogVisible"
    :style="{ width: '50vw' }"
    :modal="true"
    contentClass="bg-gradient-to-bl rounded-xl flex flex-col mx-auto from-slate-700 via-gray-800 to-zinc-800  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
    class=""
    :closable="false"
    :closeOnEscape="true"
    :showHeader="false"
  >
    <div
      class="bg-gradient-to-bl my-8 w- py-8 px-6 rounded-xl flex flex-col mx-auto from-slate-700 via-gray-800 to-zinc-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
    >
      <div class="flex flex-col p-fluid text-left text-gray-200 gap-4">
        <placeholder class="pl-2"> Session name </placeholder>
        <InputText
          type="text"
          placeholder="SkyTower + Plener"
          v-model="session.session_name"
        />

        <div class="">
          <placeholder class="pl-2"> Session date </placeholder>
          <Calendar
            inputId="date1"
            dateFormat="dd.mm.yy"
            v-model="session.session_date"
          />
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
                v-model="session.start_time"
              />
            </span>
          </div>

          <div class="w-1/2">
            <span class="p-float-label">
              <placeholder class="pl-2"> Duration </placeholder>
              <InputNumber
                inputId="duration_h"
                v-model="session.duration_h"
                mode="decimal"
                showButtons
                min="1"
                max="8"
                minFractionDigits="0"
                maxFractionDigits="0"
                step="1"
              />
            </span>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="w-1/2">
            <span class="p-float-label">
              <placeholder class="pl-2"> Price per seat </placeholder>
              <InputNumber
                inputId="price"
                v-model="session.price"
                mode="currency"
                currency="PLN"
                locale="pl-PL"
              />
            </span>
          </div>

          <div class="w-1/2">
            <span class="p-float-label">
              <placeholder class="pl-2"> Slots </placeholder>
              <InputNumber
                inputId="slots"
                v-model="session.slots"
                mode="decimal"
                showButtons
                :min="1"
                :max="2"
              />
            </span>
          </div>
        </div>

        <div>
          <span>
            <Textarea
              id="place_of_meeting"
              placeholder="sesja odbedzie się przy wejściu do SkyTower od ulicy Gwiaździstej"
              v-model="session.meeting_place"
              rows="3"
            />
          </span>
        </div>
      </div>

      <div class="flex my-2 pt-2 gap-2 justify-center">
        <Button
          class="p-button-danger p-button-raised w-1/2 !font-medium !text-gray-200"
          label="Cancel"
          @click="cancelEditSession"
        />
        <Button
          class="p-button-success p-button-raised w-1/2 !font-medium !text-gray-200"
          label="Save"
          @click="saveSession"
        />
      </div>
    </div>
  </Dialog>

  <Button
    icon="pi pi-pencil"
    class="p-button-info p-button-raised w-1/2 !font-medium"
    label="Update session"
    @click="editSession"
  />

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
