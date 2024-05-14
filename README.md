# element_modifier

simple client side element modifier for `@html_first` internal dependency;

## installation

```shell
npm i @html_first/element_modifier
```

## js usage example

```js
// @ts-check

import { _$ } from '@html_first/element_modifier';

const element = document.querySelector('#example_element');

new _$(element)
	.attributes({
		visibility: 'visible',
	})
	.classList({
		add: [''],
		remove: ['box'],
	}) /** chainnable with _$ methods */;
```
