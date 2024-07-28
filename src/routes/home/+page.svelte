<script lang="ts">
    import { onMount } from 'svelte';

    // components
    import CreatePost from '../../lib/components/CreatePost.svelte';
    import Feeds from '../../lib/components/Feeds.svelte';
    import Login from '$lib/components/Login.svelte';
    import Signup from '$lib/components/Signup.svelte';

    // types
    import type { LoadData } from '../../lib/types';

    // page data
    let data: LoadData = {
    userName: "Jane",
    feed: [
      {
        userName: "Theresa Webb",
        lastSeen: "5 mins ago",
        image: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        htmlEntity: "👋",
        message:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, source.",
        comments: 24,
      },
      {
        userName: "Marvin McKinney",
        lastSeen: "12 mins ago",
        image: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
        htmlEntity: "&#128524",
        message:
          "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        comments: 10,
      },
      {
        userName: "Saurav Singh",
        lastSeen: "43 mins ago",
        image: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
        htmlEntity: "&#128521",
        message:
          "Making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        comments: 11,
      },
    ],
  };

  // state
  export let screenToShow:string = 'feed';

  onMount(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
        alert('No user found. Please sign up or login first.');
        screenToShow = 'login';
    }
  });

  function navigateToLogin() {
      screenToShow = 'login';
  }

  function navigateToSignup() {
      screenToShow = 'signup';
  }

</script>

{#if screenToShow === 'login'}
    <Login navigate={navigateToSignup} />
{/if}
{#if screenToShow === 'signup'}
    <Signup navigate={navigateToLogin} />
{/if}
<div class="feed-container">
    <h2>Hello {data.userName}</h2>
    <p>How are you doing today? Would you like to share something with the community &#x1F917;</p>
    <CreatePost />
    <Feeds feeds={data.feed} />
</div>
