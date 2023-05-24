<script lang="ts">
    import { AbbyProvider , __abby__} from "$lib/abby";
    import type { LayoutServerData } from "./$types";
    import "../app.css";
 
    export let data: LayoutServerData;
</script>
 
<AbbyProvider {data} abby={__abby__}>
    <header class="bg-red-500">
        yooy 
    </header>
    <slot />
</AbbyProvider>