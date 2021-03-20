<template>
  <div>
    <b-row align-h="between">
      <b-col
        class="sub-header"
        sm="auto"
        md="auto">
        {{ $t("userPage.about") }}
      </b-col>
      <b-col
        v-if="editMode"
        class="bold-font"
        sm="auto"
        md="auto">
        {{ $t("form.actions.update") }}
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <bio-card
          :short="user.bio.short"
          :long="user.bio.long" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import BioCardVue from "./cards/BioCard.vue";

	export default {
		name:"AboutMeView",
		props:{
			user:{
				type: Object,
				required: true
			},
			editMode: {
				type: Boolean,
				default: false
			}
		},
		components:{
			"bio-card":BioCardVue
		}
	};
</script>
