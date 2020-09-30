export default function() {
	return {
		quantity: 1,
		add_to_cart(id) {
			fetch("/cart/add.json", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					quantity: this.quantity,
					id: id,
				}),
			}).then((response) => {
				window.dispatchEvent(
					new Event("cartupdated", {
						bubbles: true,
						cancelable: true,
						detail: {
							quantity: this.quantity,
							id: id,
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
	};
};