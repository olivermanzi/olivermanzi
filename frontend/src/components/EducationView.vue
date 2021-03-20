<template>
  <div>
    <b-row align-h="between">
      <b-col
        class="sub-header"
        sm="auto"
        md="auto">
        {{ $t("pages.user.education") }}
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
      <b-col
        cols="12"
        v-for="education in educations"
        :key="education.title">
        <education-card
          class="mt-1"
          :title="education.title"
          :org="education.org"
          :start-year="education.startYear"
          :end-year="education.endYear"
          :description="education.description"
          :short-mode="true" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import EducationCardVue from "./cards/EducationCard.vue";

	export default {
		name:"EducationView",
		props:{
			educations:{
				type: Array,
				required: true
			},
			editMode: {
				type: Boolean,
				default: false
			}
		},
		components:{
			"education-card":EducationCardVue
		}
	};
</script>

<style>

</style>
