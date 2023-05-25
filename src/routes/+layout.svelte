<script lang="ts">
    import { AbbyProvider , __abby__} from "$lib/abby";
    import type { LayoutServerData } from "./$types";
    import "../app.css";
 
    export let data: LayoutServerData;
</script>
 
<AbbyProvider {data} abby={__abby__}>
    <header class="bg-pink-300 py-3" >
        <ul class="flex space-x-10 pl-10">
            <li>
                <a href="/">Back to index</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/home"> Home </a>
            </li>
            <li>
                <a href="/marketing">Marketing</a>
            </li>
        </ul>
    </header>
    <slot />
</AbbyProvider>