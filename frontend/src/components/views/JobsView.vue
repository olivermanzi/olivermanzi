<template>
  <div>
    <b-row align-h="between">
      <b-col
        class="sub-header"
        sm="auto"
        md="auto">
        {{ $t("pages.user.job") }}
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        v-for="job in jobs"
        :key="job.title">
        <job-card
          class="mt-1"
          :title="job.title"
          :org="job.org"
          :start-year="job.startYear"
          :end-year="job.endYear"
          :description="job.description"
          :short-mode="true"
          :edit-mode="editMode" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import JobCardVue from "../cards/JobCard.vue";

	export default {
		name:"JobsView",
		props:{
			jobs:{
				type: Array,
				required: true
			},
			editMode: {
				type: Boolean,
				default: false
			}
		},
		components:{
			"job-card":JobCardVue
		}
	};
</script>
