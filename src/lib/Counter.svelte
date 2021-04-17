<script lang="ts">
	let count = 0;

	const increment = () => {
		count += 1;
	};
</script>

<button
	class="py-3 px-7 text-red-500 bg-red-100 rounded-2xl border-red-500 shadow active:bg-red-300 hover:bg-red-200"
	on:click={increment}
>
	Clicks: {count}
</button>
