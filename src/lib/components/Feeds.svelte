<script lang="ts">
    // types
    import type { FeedItem } from '../types';

    export let feeds:FeedItem[];
</script>

{#each feeds as feed}
    <div class="card">
        <div class="feed-header">
            <img src={feed.image} alt={feed.userName} class="feed-avatar" />
            <div class="feed-info">
                <span class="feed-username t2">{feed.userName}</span>
                <span class="feed-time t3">{feed.lastSeen}</span>
            </div>
        </div>
        <div class="content-container">
            <div class="icon">{@html feed.htmlEntity}</div>
            <p class="message">{feed.message}</p>
        </div>
        <div class="feed-footer">
            <span>&#128488</span>
            <span class="t3">{feed.comments} comments</span>
        </div>
    </div>
{/each}

<style>
    .feed-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .feed-avatar {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    .feed-info {
        display: flex;
        flex-direction: column;
    }

    .content-container {
        align-items: flex-start;
    }

    .message {
        margin: 0 12px;
        font-size: 14px;
        color: #768183;
        line-height: 1.4;
    }

    .feed-footer {
        margin-top: 12px;
    }
</style>