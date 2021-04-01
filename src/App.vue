<template>
	<div id="app">
		<Header 
			:numCorrect="numCorrect"
			:numTotal="numTotal"
		/>
		<b-container class="bv-example-row">
			<b-row>
				<b-col sm="6" offset="3">
					<QuestionBox
						v-if='questions.length'
						:currentQuestion='questions[index]'
						:next='next'
						:increment='increment'
					/>
				</b-col>
			</b-row>
		</b-container>
		<GameOver
			v-if='this.numTotal === 10'
			:index='index'
			:numCorrect='numCorrect'
			:numTotal='numTotal'
		>
		</GameOver>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'
import GameOver from './components/GameOver.vue'
import {eventBus} from "./main.js";

export default {
	name: 'App',
	components: {
		Header,
		QuestionBox,
		GameOver
	},
	data() {
		return {
			questions: [],
			index: 0,
			numCorrect: 0,
			numTotal: 0
		}
	},
	methods: {
		next() {
			this.index++
		},
		increment(isCorrect) {
			if (isCorrect) {
				this.numCorrect++
			}
			this.numTotal++
		},
		startOver() {
			this.numCorrect = 0
			this.numTotal = 0
			this.index = 0
		}
	},
	mounted: function() {
		fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
			method: 'get'
		})
			.then((response) => {
				return response.json()
			})
			.then((jsonData) => {
				this.questions = jsonData.results
			})

		eventBus.$on('gameOver', () => {
			this.startOver();
		})
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
