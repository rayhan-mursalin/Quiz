<template>
	<div class='game-over-container'>
		<h2>
			Quiz finished
		</h2>
		<p>
			Total score: {{ numCorrect }}/{{ numTotal }}
		</p>
		<button @click='gameOver()'>Start Over</button>
	</div>
</template>

<script >
import {eventBus} from "../main.js";

export default {
	props: {
		index: Object,
		numCorrect: Object,
		numTotal: Object
	},
	methods: {
		gameOver() {
			eventBus.$emit('gameOver');
		}
	}
}
</script>

<style scoped>
	.game-over-container {
		background: antiquewhite;
		height: 29rem;
		padding-top: 10rem;
		position: relative;
		top: -31rem;
	}
</style>yle