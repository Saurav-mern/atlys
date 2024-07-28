<script lang="ts">
    import { goto } from '$app/navigation';
    
    // components
    import Login from "$lib/components/Login.svelte";
</script>

<Login navigate={() => goto('/signup')}/>
