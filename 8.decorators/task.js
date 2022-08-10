// ### Задача 1. Усовершенствуйте кэширующий декоратор

function cachingDecoratorNew(func) {
	let cache = [];

	return function wrapper(...arguments) {
		const hash = arguments.join(",");
		let inCache = cache.findIndex((element) => element.hash === hash);
		if (inCache !== -1) {
			console.log("Из кэша: " + cache[inCache].value);
			return "Из кэша: " + cache[inCache].value;
		}
		let result = func(...arguments);
		cache.push({ hash: hash, value: result });
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	};
}


// ### Задача 2. Debounce декоратор с моментальным вызовом

function debounceDecoratorNew(func) {
	let timer = null;
	let firstCall = true;

	function wrapper(...arguments) {
		if(!firstCall) {
			firstCall = false;
			func.apply(this, arguments);
		} else {
			clearTimeout(timer);
			timer = setTimeout(() => {
				firstCall = true;
				return func.apply(this, arguments);
			})
		}
	}
	return wrapper;
}


// ### Задача 3. Усовершенствуйте debounceDecoratorNew

function debounceDecorator2(func, ms) {
	let timer = null;
	let check = true;
	wrapp.count = 0

	function wrapper(...arguments) {
		wrapper.count = wrapper.count + 1;
		if (check === true) {
			func(...arguments);
			check = false;
		}

		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...arguments);
			check = true;
		}, ms);
	}

	wrapper.count = 0;
	return wrapper;
}  