<template>
	<b-sidebar
		:visible="isSidebarVisible"
		shadow
		no-header
		:bg-variant="getBootstrapTheme"
		:text-variant="getOppositeBootstrapTheme"
		@hidden="showSidebar(false)">
		<b-row
			class="ml-2"
			align-v="stretch">
			<!-- title -->
			<b-col
				class="my-3"
				cols="12">
				<nuxt-link
					class="brand"
					to="/name">
					Oliver
				</nuxt-link>
			</b-col>
			<!-- links -->
			<b-col
				v-for="item in getNavItems"
				:key="item.title"
				class="mt-2"
				cols="8">
				<b-link
					class="simple-link"
					:to="item.route">
					{{ item.title }}
				</b-link>
			</b-col>
			<!-- logout -->
			<b-col
				class="mt-auto"
				cols="8">
				<b-link
					v-if="inAdminMode"
					class="simple-link"
					@click="logout">
					logout ✌️
				</b-link>
			</b-col>
		</b-row>
		<template #footer="{ hide }">
			<b-row class="mb-3" align-h="around" align-v="center">
				<!-- close -->
				<b-col cols="8">
					<b-button
						block
						:variant="getBootstrapOutlineTheme"
						@click="hide">
						close
					</b-button>
				</b-col>
				<!-- theme -->
				<b-col cols="auto">
					<b-form-checkbox
						switch
						size="lg"
						:checked="isDarkTheme"
						@change="toggleTheme" />
				</b-col>
			</b-row>
		</template>
	</b-sidebar>
</template>

<script>
	import { mapGetters, mapMutations } from "vuex";

	export default {
		name: "TheSidebar",
		computed: {
			...mapGetters({
				getNavItems: "base/nav/getLinks",
				isSidebarVisible: "base/nav/isSidebarVisible"
			})
		},
		methods: {
			...mapMutations({
				toggleTheme: "base/ui/toggleTheme",
				showSidebar: "base/nav/showSidebar"
			})
		}
	};
</script>
