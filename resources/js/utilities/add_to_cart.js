export default function(product_id) {
	const product = window['product_'+ product_id];

	let selected_id = product.variants[0].id;

    if(window.location.search.match(/variant=([0-9]+)/)) {
        const matches = window.location.search.match(/variant=([0-9]+)/);
        selected_id = matches[1];
    }

	return {
		product: product,
		selected_id: selected_id,
		quantity: 1,
		add_to_cart() {
			fetch("/cart/add.json", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					quantity: this.quantity,
					id: this.selected_id,
				}),
			}).then((response) => {
				window.dispatchEvent(
					new Event("cartupdated", {
						bubbles: true,
						cancelable: true,
						detail: {
							quantity: this.quantity,
							id: this.selected_id,
						},
					})
				);

				window.dispatchEvent(
					new Event("cartnotification", {
						bubbles: true,
						cancelable: true,
						detail: {},
					})
				);
			});
		},

		change_variant(value) {
			window.location.search = 'variant=' + value;
		}
	};
};