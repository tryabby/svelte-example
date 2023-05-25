<script lang="ts">
    import { getABResetFunction } from "../lib/abby"
    const handleClick = () => {
        console.log("clicked")
    }
</script>
<button class="ml-16 w-36 px-6 py-4 my-3 bg-gray-900 text-white font-bold p-2 rounded-lg hover:bg-gray-700 hover:scale-110 transition-transform duration-200 ease-in-out" on:click={handleClick}> Reset Cookie</button>