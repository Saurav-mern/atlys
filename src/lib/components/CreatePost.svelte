<script lang="ts">
    // Your script logic can go here if needed
</script>

<div class="card">
    <p>Create post</p>
    <div class="content-container">
        <div class="icon">💬</div>
        <input type='text' placeholder='How are you feeling today?' />
    </div>
    <div class="btn-container">
        <button class="button">Post</button>
    </div>
</div>

<style>
    .btn-container {
        display: flex;
        justify-content: flex-end;
    }

    .card p {
        margin: 0;
        padding-bottom: 12px;
        font-size: 14px;
    }

    input[type='text'] {
        background: none;
        border: none;
        outline: none;
        color: white;
        font-size: 14px;
        flex: 1;
    }

    input[type='text']::placeholder {
        color: #aaa;
    }
</style>
