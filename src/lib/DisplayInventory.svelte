<script lang="ts">
  import Inventory from "../models/Inventory";
  import Item from "../models/Item";

  export let props: {
    inventory: Inventory;
  };
  let newItem = new Item("", "", 0);
  function storeInventoryToLocalStorage() {
    props.inventory.items.push(newItem);
    newItem = new Item("", "", 0);
    props.inventory = props.inventory; // This simply triggers the reactivity by setting
    localStorage.setItem("inventory", JSON.stringify(props.inventory));
  }
</script>

<div class="grid m-2 p-2 bg-white rounded gap-2 border-2 border-gray-200">
  <div class="flex justify-between gap-2">
    <h1 class="text-3xl">Inventory</h1>
  </div>
  <div class="grid gap-2">
    <p class="text-2xl">Create new item</p>
    <input
      class="px-2 py-1 border border-gray-300 rounded"
      bind:value={newItem.name}
      type="text"
      placeholder="Name"
    />
    <input
      class="px-2 py-1 border border-gray-300 rounded"
      bind:value={newItem.description}
      type="text"
      placeholder="Description"
    />
    <input
      class="px-2 py-1 border border-gray-300 rounded"
      bind:value={newItem.price}
      type="number"
      placeholder="Price"
    />
  </div>
  <button class="px-2 py-1 btn" on:click={() => storeInventoryToLocalStorage()}> Save </button>
  <h2 class="text-2xl">Inventory List</h2>
  <div class="grid border border-gray-300 rounded p-2 bg-gray-100">
    <div class="flex px-2 pr-14">
      <h3 class="text-2xl text-left w-1/3">Name</h3>
      <h3 class="text-2xl text-center w-1/3">Description</h3>
      <h3 class="text-2xl text-right w-1/3">Price</h3>
    </div>

    <div class="grid gap-2">
      {#each props.inventory.items as currentItem}
        <div class="flex w-full gap-2">
          <div class="flex gap-2 border rounded p-2 bg-white items-center w-full">
            <p class="text-left w-1/3">{currentItem.name}</p>
            <p class="text-center w-1/3">{currentItem.description}</p>
            <p class="text-right w-1/3">${currentItem.price}.00</p>
          </div>
          <button
            class="px-3 btn"
            on:click={() =>
              (props.inventory.items = props.inventory.items.filter((i) => i !== currentItem))}
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
              />
            </svg></button
          >
        </div>
      {/each}
    </div>
  </div>
</div>
