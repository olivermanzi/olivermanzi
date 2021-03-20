<template>
  <div>
    <b-row align-h="around">
      <b-col
        class="mt-3"
        sm="11"
        md="5">
        <span class="sub-header">{{ $t("landingPage.about") }}</span>
        <b-row>
          <b-col cols="12">
            <bio-card
              :short="user.bio.short"
              :long="user.bio.long" />
          </b-col>
        </b-row>
      </b-col>
      <b-col
        class="mt-3"
        sm="11"
        md="4">
        <b-row>
          <!-- education -->
          <b-col cols="12">
            <span class="sub-header">{{ $t("landingPage.education") }}</span>
            <b-row>
              <b-col
                cols="12"
                v-for="education in user.educations"
                :key="education.title">
                <hr>
                <education-card
                  class="mt-1"
                  :title="education.title"
                  :school="education.school"
                  :start-year="education.startYear"
                  :end-year="education.endYear"
                  :description="education.description"
                  :short-mode="true" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import BioCardVue from "../components/cards/BioCard.vue";

	import { mapGetters } from "vuex";
	import ROUTES from "../enums/router-enums";

	export default {
		name: "LandingPage",
		components:{
			"bio-card": BioCardVue,
			"education-card":EducationCardVue
		},
		computed: {
			...mapGetters({
				user: "user/getUser",
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
