<script lang="ts">
    import { goto } from '$app/navigation';

    // components
    import Signup from '../../lib/components/Signup.svelte'
</script>

<Signup navigate={() => goto('/login')}/>