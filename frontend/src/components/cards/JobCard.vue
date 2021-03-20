<template>
  <div>
    <b-row>
      <b-col cols="1">
        📁
      </b-col>
      <b-col cols="10">
        <b-row>
          <b-col cols="12">
            <b>{{ title }}</b>
          </b-col>
          <b-col cols="12">
            <small><b>{{ org }} ({{ startYear }}-{{ endYear }})</b></small>
          </b-col>
          <b-col cols="12">
            <small>
              -> 
              <span v-if="shortMode">
                {{ getShortDescription }}
              </span>
              <span v-else>
                {{ description }}
              </span>
            </small>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
	import i18n from "../../i18n";
	export default {
		name: "JobCard",
		props: {
			shortMode: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				required: true
			},
			org: {
				type: String,
				required: true
			},
			startYear: {
				type: Number,
				required: true
			},
			endYear: {
				type: Number,
				default: i18n.t("jobCard.presentYear")
			},
			description: {
				type: String,
				required: true
			}
		},
		computed:{
			getShortDescription: function(){
				const MAX_LENGTH = 40;
				let description = this.description;

				if(description.length > MAX_LENGTH){
					let shortDescription = description.substr(0, MAX_LENGTH);
					return `${shortDescription}...`;
				}else{
					return description;
				}
			}
		}
	};
</script>
