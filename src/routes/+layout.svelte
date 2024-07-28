<script lang="ts">
    // styles
    import './styles.css';
</script>

<div class="container">
    <slot />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center; /* Centers the content vertically (optional) */
        min-height: 100vh; /* Optional: Makes sure the container takes the full height of the viewport */
    }
</style>
