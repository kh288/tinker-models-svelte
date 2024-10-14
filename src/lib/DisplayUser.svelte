<script lang="ts">
  import User from "../models/User";

  export let props: {
    user: User;
  };
  function storeUserToLocalStorage() {
    localStorage.setItem("user", JSON.stringify(props.user));
  }
</script>

<div class="grid m-2 p-2 bg-white rounded gap-2 border-2 border-gray-200">
  <h1 class="text-3xl">User</h1>
  <div class="flex justify-between gap-2">
    <p class="text-2xl">{props.user.name ? props.user.name : "No name"}</p>
    <p class="text-2xl">{props.user.age ? props.user.age : "No age"}</p>
  </div>
  <div class="grid gap-2">
    <input
      class="px-2 py-1 border border-gray-300 rounded"
      bind:value={props.user.name}
      type="text"
      placeholder="Name"
    />
    <input
      class="px-2 py-1 border border-gray-300 rounded"
      bind:value={props.user.age}
      type="number"
      placeholder="Age"
    />
    <div class="flex gap-2">
      <button
        class="w-full px-2 py-1 bg-black text-white hover:bg-neutral-500 rounded"
        on:click={() => {
          props.user = new User("", 0);
        }}>Clear</button
      >
      <button
        class="w-full px-2 py-1 bg-black text-white hover:bg-neutral-500 rounded"
        type="submit"
        on:click={() => storeUserToLocalStorage()}>Save</button
      >
    </div>
  </div>
</div>
