<template>
  <div>
    <b-row align-h="between">
      <b-col
        sm="11"
        md="7">
        <span class="header">{{ $t("landingPage.about") }}</span>
        <bio-card
          :short="user.bio.short"
          :long="user.bio.long" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import BioCardVue from "../components/cards/BioCard.vue";

	import { mapGetters } from "vuex";
	import { ROUTES } from "../enums/router-enums";

	export default {
		name: "LandingPage",
		components:{
			"bio-card": BioCardVue
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
