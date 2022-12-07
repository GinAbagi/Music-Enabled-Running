<template>
  <div class="flex flex-col rounded-xl shadow-xl mt-4 mx-4 p-4 bg-white">
    <div id="box1" class="flex flex-row">
      <div class="flex justify-start items-start">
        <input
          type="checkbox"
          class="toggle-checkbox opacity-0 w-6 h-6 absolute"
        />
        <label
          class="
            toggle-label
            overflow-hidden
            border-2
            rounded
            w-6
            h-6
            flex flex-shrink-0
            justify-center
            items-center
            mr-2
            container
          "
        >
          <svg
            class="fill-current w-4 h-4 text-white pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </label>
      </div>
      <div class="select-none">Label Text</div>
    </div>

    <div id="box2" class="flex flex-row mt-2">
      <div class="flex justify-start items-start">
        <input
          type="checkbox"
          class="toggle-checkbox opacity-0 w-6 h-6 absolute"
        />
        <label
          class="
            toggle-label
            overflow-hidden
            border-2
            rounded
            w-6
            h-6
            flex flex-shrink-0
            justify-center
            items-center
            mr-2
            container
          "
        >
          <svg
            class="fill-current w-4 h-4 text-white pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </label>
      </div>
      <div class="select-none">Label Text</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeforeRunPlaylist",
};
</script>

<style scoped>
.toggle-checkbox:checked + .toggle-label {
  background: linear-gradient(
    113deg,
    rgba(83, 234, 224, 1) 0%,
    rgba(204, 230, 0, 1) 100%
  );
}
</style>