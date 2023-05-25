<script lang="ts">
    import { getABResetFunction } from "../lib/abby"
    const handleClick = () => {
        console.log("clicked")
    }
</script>
<button class="ml-16 w-36 px-6 py-4 my-3 bg-gray-800 text-white font-semibold p-2 rounded-lg hover:bg-red-500" on:click={handleClick}> Reset Cookie</button>