<template>
  <div
    class="
      flex flex-row
      justify-between
      rounded-xl
      shadow-xl
      mb-4
      mx-4
      p-4
      bg-white
    "
  >
    <div class="font-bold">{{ settingText }}</div>
    <div
      class="
        relative
        inline-block
        w-10
        mr-2
        align-middle
        select-none
        transition
        duration-200
        ease-in
      "
    >
      <input
        type="checkbox"
        name="toggle"
        :id="settingText"
        class="
          toggle-checkbox
          absolute
          block
          w-6
          h-6
          rounded-full
          bg-white
          border-4
          appearance-none
          cursor-pointer
        "
      />
      <label
        :for="settingText"
        class="
          toggle-label
          block
          overflow-hidden
          h-6
          rounded-full
          bg-gray-300
          cursor-pointer
        "
      ></label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["settingText"],
};
</script>

<style scoped>
.toggle-checkbox:checked {
  @apply: right-0;
  right: 0;
}
.toggle-checkbox:checked + .toggle-label {
  background: linear-gradient(
    113deg,
    rgba(83, 234, 224, 1) 0%,
    rgba(204, 230, 0, 1) 100%
  );
}
</style>