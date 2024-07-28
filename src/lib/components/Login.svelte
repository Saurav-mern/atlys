<script lang="ts">
    import { goto } from '$app/navigation';

    // components
    import Modal from "./Modal.svelte";

    // props
    export let navigate: () => void;
    
    // state
    let email: string = '';
    let password: string = '';

    function login() {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if ((user.email === email || user.username === email) && user.password === password) {
                goto('/home');
            } else {
                alert('Invalid credentials. Please try again.');
            }
        } else {
            alert('No user found. Please sign up first.');
        }
    }
</script>

<Modal>
    <h4>WELCOME BACK</h4>
    <h3>Log into your account</h3>
    <div class="input-group">
        <label for="email">Email or Username</label>
        <input type="text" id="email" bind:value={email} placeholder="Enter your email or username" />
    </div>
    <div class="input-group">
        <div class="password-label">
            <label for="password">Password</label>
            <a href="#" class="forgot-password">Forgot password?</a>
        </div>
        <input type="password" id="password" bind:value={password} placeholder="Enter your password" />
    </div>
    <button class="button" on:click={login}>Login now</button>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <p class="register-text">Not registered yet? <a on:click={navigate}>Register →</a></p>
</Modal>

<style>
    .password-label {
        display: flex;
        justify-content: space-between;
    }

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

    .forgot-password {
        display: block;
        text-align: right;
        font-size: 12px;
        color: #888;
        text-decoration: none;
    }

    .forgot-password:hover {
        text-decoration: underline;
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