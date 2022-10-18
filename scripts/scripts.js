var pedidos = {};

function test_pizza() {
  document.getElementById("drinks").style.display = "none";
  document.getElementById("drink-menu").style.backgroundColor = "#ecf9fc";
  document.getElementById("pizza-menu").style.backgroundColor = "#00C5A1";
  document.getElementById("pizzas").style.display = "flex";
}

function test_drink() {
  document.getElementById("pizzas").style.display = "none";
  document.getElementById("drinks").style.display = "flex";
  document.getElementById("pizza-menu").style.backgroundColor = "#ecf9fc";
  document.getElementById("drink-menu").style.backgroundColor = "#00C5A1";
}

function addItemToCart(item, value, name) {
  if (pedidos['total'] == undefined) {
    pedidos['total'] = {
      total: value
    }
  } else {
    pedidos['total'].total = parseFloat((pedidos['total'].total + value).toFixed(2))
  }

  document.getElementById("empty-cart").style.display = "none";

  if (pedidos[item] == undefined) {
    pedidos[item] = {
      type: item,
      count: 1,
      value: value,
      name: name
    }
  } else {
    pedidos[item].count += 1
    pedidos[item].value = parseFloat((pedidos[item].value + value).toFixed(2))
  }
  updateTotalCart()
}

function updateTotalCart() {
  Object.values(pedidos).forEach(element => {
    if (element.type != undefined) {
      document.getElementById(element.type).textContent = element.count + "x " + element.name
      document.getElementById(element.type + "-total").textContent = "R$ " + element.value
    }
  });
  document.getElementById("total").textContent = "Total: R$ " + pedidos['total'].total
}