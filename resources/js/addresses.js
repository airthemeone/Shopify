// Import @shopify/theme-address anywhere you need it
import {AddressForm} from '@shopify/theme-addresses';

const forms = document.querySelectorAll('[data-address=root]');
if(forms.length) {
    for (let index = 0; index < forms.length; index++) {
        const form = forms[index];
        AddressForm(form, 'en');
    }
}
