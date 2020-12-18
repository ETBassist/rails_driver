function itemCard(item) {
  let name = item.attributes.name
  let description = item.attributes.description
  let unit_price = item.attributes.unit_price
  let card = `
    <div class="card text-center">
      <div class="card-body">
        <h3 class="card-title"><a href='/items/${item.id}'>${name}</a></h3>
        <p>Price: $${unit_price}</p>
        <p class="card-text">${description}</p>
      </div>
    </div>
  `
  return card
}

function loadAllItems(container) {
  let uri = "/api/v1/items"
  loadMultipleResources(uri, function(item){
    card = itemCard(item)
    container.append(card)
  })
}

function loadItem(item_id, itemContainer) {
  let uri = `/api/v1/items/${item_id}`
  loadResource(uri, function(item){
    card = itemCard(item)
    itemContainer.append(card)
  })
}

function loadMerchantItems(merchant_id, container) {
  let uri = `/api/v1/merchants/${merchant_id}/items`
  loadMultipleResources(uri, function(item){
    item_element = itemCard(item)
    container.append(item_element)
  })
}

function loadItemMerchant(item_id, container) {
  let uri = `/api/v1/items/${item_id}/merchants`
  loadResource(uri, function(merchant){
    merchant_element = itemMerchantName(merchant)
    container.append(merchant_element)
  })
}

function itemMerchantName(merchant) {
  let name = merchant.attributes.name
  let merchant_element = `
    <p class="text-center" id="sold-by">This Item Sold By: ${name}</p>
  `
  return merchant_element
}
