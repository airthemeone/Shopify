/**
 * Vendors
 */
import "alpinejs";

/**
 * Componets
 */
import product_images from "./components/product_images";
product_images.init();

/**
 * Utilities
 */
import "./utilities/public_path";
import objectToQueryParams from './utilities/object_to_query_params';

import moneyFormat from './utilities/format_money';
window.formatMoney = moneyFormat;

import add_to_cart from './utilities/add_to_cart';
window.add_to_cart = add_to_cart;

/**
 * Main App
 */
window.app = function() {
	const currency = window.Shopify.currency;

	return {
		cart_items_count: 0,
		cart: {
			items: [],
		},
		cart_drawer: false,
		cart_updating: false,
        cart_open: false,
		cart_rendered: false,
		cart_notification: false,
		currency: currency,
		menu_open: false,
		search_open: false,
		search_query: '',
		search_results: {
			products: []
		},
		search_results_show: false,
		update_cart(event) {
			fetch("/cart.json", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				method: "GET",
			})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.cart_items_count = response.item_count;
				this.cart = response;
				this.cart_rendered = true;
			});
		},
		update_line(line_index, addition) {
			this.cart_updating = true;
			fetch("/cart/change.json", {
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					method: "POST",
					body: JSON.stringify({
						line: line_index + 1,
						quantity: this.cart.items[line_index].quantity + addition,
					}),
				})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					this.cart_items_count = response.item_count;
					this.cart = response;
					this.cart_updating = false;
				});
		},
		remove_line(line_index) {
			this.cart_updating = true;
			fetch("/cart/change.json", {
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					method: "POST",
					body: JSON.stringify({
						line: line_index + 1,
						quantity: 0,
					}),
				})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					this.cart_items_count = response.item_count;
					this.cart = response;
                    this.cart_updating = false;
                    this.cart_rendered = false;
                    setTimeout(() => {
                        this.cart_rendered = true;
                    }, 50); 
				});
		},
		search() {
			const query = this.search_query.trim().replace(" ", "-").toLowerCase();
			if(query.length === 0) {
				return this.clear_search();;
			}

			const params = objectToQueryParams({
				resources: {
					type: ["product"],
					limit: 10,
					options: {
						unavailable_products: "last",
						fields: [
							"title"
						]
					}
				}
			});

			fetch("/search/suggest.json?q=" + encodeURIComponent(query) + "&" + params, {
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					method: "GET",
				})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					this.search_results.products = response.resources.results.products;
					if(this.search_results.products.length > 0) {
						this.search_results_show = true;
					}
				});
			
		},

		clear_search() {
			this.search_query = "";
			this.search_results = {
				products: []
			};
			this.search_results_show = false;
		}
	};
};