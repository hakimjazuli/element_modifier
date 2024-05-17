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

## method list

-   `outerHTML`:
    > -   chainable: `false`;
    > -   params:
    >     > -   `value`: `string`;
-   `innerHTML`:
    > -   chainable: `true`;
    > -   params:
    >     > -   `value`: `string`;
-   `innerText`:
    > -   chainable: `true`;
    > -   params:
    >     > -   `value`: `string`;
-   `textContent`:
    > -   chainable: `true`;
    > -   params:
    >     > -   `value`: `string`;
-   `value`:
    > -   chainable: `true`;
    > -   params:
    >     > -   `value`: `string`;
-   `styles`:
    > -   chainable: `true`;
    > -   params:
    >     > -   `styles_object`: `Object.<string,string>`;
-   `classList`:
    > -   chainable: `true`;
    > -   params:
    >     > -   `class_list_definition`: `Object.<'add'|'remove',string[]>`;
-   `append`:
    > -   chainable: `true`;
    > -   detail: will append element as last child;
    > -   params:
    >     > -   `elem`: `'HTMLElement'|'Element'`;
-   `prepend`:
    > -   chainable: `true`;
    > -   detail: will prepend element as first child;
    > -   params:
    >     > -   `elem`: `'HTMLElement'|'Element'`;
-   `before`:
    > -   chainable: `true`;
    > -   detail: will insert element before `this.element`;
    > -   params:
    >     > -   `elem`: `'HTMLElement'|'Element'`;
-   `after`:
    > -   chainable: `true`;
    > -   detail: will insert element after `this.element`;
    > -   params:
    >     > -   `elem`: `'HTMLElement'|'Element'`;
-   `attributes`:
    > -   chainable: `true`;
    > -   detail: will modify `this.element` attributes;
    > -   params:
    >     > -   `custom_attribute_n_value`: `Object.<string,string|boolean>|NamedNodeMap`;
    > -   boolean to toggle attribute;
    > -   you can get NamedNodeMap from `${your_element}.attributes`;
-   `replace`:
    > -   chainable: `false`;
    > -   params:
    >     > -   `elem`: `HTMLElement|Element`;
-   `script`:
    > -   chainable: `true`;
    > -   params:
    >     > -   `callback`: `((element:HTMLElement|Element)=>Promise<any>)`;
    > -   where `arguement_0`(`element`) is `this.element`
    > -   this method return `promise`
    >     > -   which in atlaAS case, it will block your `__Queue` and enable you to perform async
    >     >     funtions like fetching things and stuffs...;
