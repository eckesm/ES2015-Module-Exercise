const choice = items => items[Math.floor(Math.random() * items.length)];

// const remove = (items, item) => items.splice(items.indexOf(item),1);
function remove(items, item) {
	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			return [ ...items.slice(0, i), ...items.slice(i + 1) ];
		}
	}
}

export { choice, remove };
