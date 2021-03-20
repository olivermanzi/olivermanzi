<template>
  <div>
    <b-row align-h="around">
      <b-col
        class="mt-3"
        sm="11"
        md="6">
        <about-me-view
          :user="user"
          :edit-mode="editMode" />
      </b-col>
      <b-col
        class="mt-3"
        sm="11"
        md="4">
        <b-row>
          <b-col cols="12">
            <work-view
              :jobs="jobs"
              :edit-mode="editMode" />
          </b-col>
          <b-col
            class="mt-3"
            cols="12">
            <education-view
              :educations="educations"
              :edit-mode="editMode" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import { mapGetters } from "vuex";
	import ROUTES from "../enums/router-enums";

	import AboutMeViewVue from "../components/AboutMeView.vue";
	import WorkViewVue from "../components/WorkView.vue";
	import EducationViewVue from "../components/EducationView.vue";

	export default {
		name: "UserPage",
		components:{
			"about-me-view":AboutMeViewVue,
			"work-view":WorkViewVue,
			"education-view":EducationViewVue
		},
		props:{
			editMode: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			...mapGetters({
				user: "user/getUser",
				jobs: "user/getJobs",
				educations: "user/getEducations",
				isDarkTheme: "theme/isDarkTheme",
			}),
		},
		methods: {
			goToResume: function() {
				this.goTo(ROUTES.user.resume);
			},
			getActiveVariant: function(variant) {
				let removeOutline = variant.substring(8, variant.length);
				return removeOutline;
			}
		}
	};
</script>

<style>
.bio-text {
	text-align: justify;
}
</style>
