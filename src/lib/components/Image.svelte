<script>
  export let src;
  export let alt;
  export let classes;

  import { onMount } from "svelte";

  let loaded = false;
  let thisImage;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<figure class="relative border border-base-content border-opacity-5">
  {#if alt && alt !== ""}
    <div
      class="tooltip absolute left-4 top-4 z-10 tooltip-right tooltip-info"
      data-tip="The alt of the image"
    >
      <span class="badge badge-sm">
        {alt}
      </span>
    </div>
  {/if}
  <img
    {src}
    {alt}
    class={classes}
    class:loaded
    bind:this={thisImage}
    loading="lazy"
  />
</figure>

<style>
  img {
    @apply blur-md transition ease-in-out duration-1000 object-cover;
    /* opacity: 0; */
    height: 150px;
    max-height: 300px !important;
    background-color: transparent;
    background-image: url("/static/images/lazy.svg");
  }
  img.loaded {
    @apply blur-0 object-cover;
    background-image: none;
    opacity: 1;
    height: auto;
    max-height: 300px !important;
  }
</style>
