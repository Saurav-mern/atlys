<script lang="ts">
    import { goto } from '$app/navigation';

    // components
    import Modal from "./Modal.svelte";

    // props
    export let navigate: () => void;

    // state
    let email: string = '';
    let username: string = '';
    let password: string = '';

    function signup() {
        if (email && username && password) {
            localStorage.setItem('user', JSON.stringify({ email, username, password }));
            goto('/login');
        } else {
            alert("Please fill in all fields.");
        }
    }
</script>

<Modal>
    <h4>SIGN UP</h4>
    <h3>Create an account to continue</h3>
    <div class="input-group">
        <label for="email">Email</label>
        <input type="text" id="email" bind:value={email} placeholder="Enter your email address" />
    </div>
    <div class="input-group">
        <label for="email">Username</label>
        <input type="text" id="email" bind:value={username} placeholder="Enter a preferred username" />
    </div>
    <div class="input-group">    
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} placeholder="Enter your password" />
    </div>
    <button class="button" on:click={signup}>Continue</button>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <p class="register-text">Already have an account? <a on:click={navigate}>Login →</a></p>
</Modal>

<style>
    h4 {
        margin: 0;
        text-align: center;
        color: #555;
    }

    h3 {
        margin: 10px 0;
        text-align: center;
        color: white;
        margin-bottom: 32px;
    }

    .input-group {
        margin-bottom: 15px;
    }

    .input-group label {
        display: block;
        color: #888;
        font-size: 12px;
        margin-bottom: 5px;
    }

    .input-group input {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #2c2c2c;
        color: white;
        box-sizing: border-box;
    }

    .input-group input::placeholder {
        color: #666;
    }

    .button {
        width: 100%;
        padding: 10px;
        font-size: 16px;
    }

    .register-text {
        text-align: center;
        color: #888;
        margin-top: 15px;
        font-size: 14px;
    }

    .register-text a {
        color: #007bff;
        text-decoration: none;
    }

    .register-text a:hover {
        text-decoration: underline;
    }
</style>