<script lang="ts">
  import DisplayUser from "./lib/DisplayUser.svelte";
  import DisplayInventory from "./lib/DisplayInventory.svelte";
  import Inventory from "./models/Inventory";
  import Item from "./models/Item";
  import User from "./models/User";

  function getUserLocalStorage() {
    const user = localStorage.getItem("user");
    if (user) {
      return new User(JSON.parse(user).name, JSON.parse(user).age) as User;
    }
    return new User("", 0);
  }

  function getInventoryLocalStorage() {
    const inventory = localStorage.getItem("inventory");
    if (inventory) {
      return new Inventory(JSON.parse(inventory).items as Item[]) as Inventory;
    }
    return new Inventory([]);
  }

  let user: User = getUserLocalStorage();
  let inventory: Inventory = getInventoryLocalStorage();
</script>

<main class="max-w-[800px] m-auto">
  <DisplayUser props={{ user }} />
  <DisplayInventory props={{ inventory }} />
</main>
