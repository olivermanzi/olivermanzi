<template>
	<div>
		<b-row class="mt-3">
			<b-col cols="12">
				<experience-list :experiences="experiences" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import ExperienceListVue from "~/components/experience/ExperienceList.vue";

	export default {
		name: "ExperiencesPage",
		components: {
			"experience-list": ExperienceListVue
		},
		computed: {
			...mapGetters({
				experiences: "user/getExperiences"
			})
		}
	};
</script>
