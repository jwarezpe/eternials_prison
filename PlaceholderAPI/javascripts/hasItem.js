var player = BukkitPlayer;
var searchItem = null;
var searchName = null;
var amountOfItem = 0;

function checkForItem() {
  if (args !== undefined) {
    if (args.length >= 1) {
      searchItem = args[0].toUpperCase();
      searchItem = searchItem.replace("-", "_")
                             .replace("WOODEN", "WOOD")
                             .replace("SHOVEL", "SPADE");
    };
    if (args.length == 2) {
      searchName = args[1];
    };
  };

  var itemsInInventory = player.getInventory().getContents();

  for (i = 0; i < itemsInInventory.length; i++) {
    if (searchName != null) {
      if (itemsInInventory[i] != null && itemsInInventory[i].getType() == searchItem && itemsInInventory[i].getItemMeta().getDisplayName() == searchName) {
        amountOfItem = amountOfItem + itemsInInventory[i].getAmount();
      };
    }
    else if (itemsInInventory[i] != null && itemsInInventory[i].getType() == searchItem) {
      amountOfItem = amountOfItem + itemsInInventory[i].getAmount();
    };
  };
  if (searchItem == null) {
    return "&cSyntax: %" + "javascript_[MATERIAL]<,NAME>" + "%";
  }
  else {
    return amountOfItem.toString();
  };
};

checkForItem();