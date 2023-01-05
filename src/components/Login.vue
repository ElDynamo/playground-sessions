<template>
	<div
		class="rounded-xl flex flex-col mx-auto px-4 text-gray-100 w-96 dialog-color">
		<h1 class="font-medium m-2 m-4 text-3xl">Welcome Back!</h1>
		<form class="flex flex-col gap-2 table-caption">
			<div>
				<h1 class="text-left w-full p-1">Login</h1>
				<div class="">
					<InputText
						class="w-full"
						type="text"
						placeholder="login"
						v-model="login" />
				</div>
			</div>
			<div>
				<h2 class="text-left w-full p-1">Password</h2>
				<div class="">
					<Password
						class="w-full"
						inputClass="w-full"
						:feedback="false"
						placeholder="******"
						v-model="password" />
				</div>
			</div>
		</form>

		<div class="mt-4 mb-4">
			<Button
				label="SIGN IN"
				icon="pi pi-user"
				class="w-full"
				@click="loginHandle" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useConfirm } from "primevue/useconfirm";
	import { useToast } from "primevue/usetoast";

	import { defineEmits } from "vue";
	// import loginUser from "@/server/login";
	import { ref } from "vue";

	const confirm = useConfirm();
	const toast = useToast();

	// variables
	// ------------------------------------------------------------------------
	const emit = defineEmits(["login"]);

	const login = ref("");
	const password = ref("");

	// functions
	// ------------------------------------------------------------------------
	const loginHandle = async () => {
		// let res = await loginUser(login.value, password.value);
		// emit("login", res);
	};

	const confirm1 = (event: any) => {
		confirm.require({
			target: event.currentTarget,
			message: "Are you sure you want to proceed?",
			icon: "pi pi-exclamation-triangle",
			accept: () => {
				toast.add({
					severity: "info",
					summary: "Confirmed",
					detail: "You have accepted",
					life: 3000,
				});
			},
			reject: () => {
				toast.add({
					severity: "error",
					summary: "Rejected",
					detail: "You have rejected",
					life: 3000,
				});
			},
		});
	};
</script>
