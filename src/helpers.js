const choice = items => items[Math.floor(Math.random() * items.length)];

const remove = (items, item) => items.splice(items.indexOf(item),1);

export {choice, remove}