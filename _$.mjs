// @ts-check

export class _$ {
	/**
	 * tracked element
	 * @type {HTMLElement|Element|null}
	 */
	el;
	/** @param {HTMLElement|Element|null} element */
	constructor(element) {
		this.el = element;
	}
	/**
	 * @param {string} value
	 */
	outerHTML = (value) => {
		if (this.el) {
			this.el.outerHTML = value;
		}
	};
	/**
	 * @param {string} value
	 */
	innerHTML = (value) => {
		if (this.el) {
			this.el.innerHTML = value;
		}
		return this;
	};
	/**
	 * @param {string} value
	 */
	innerText = (value) => {
		if (this.el) {
			if (this.el instanceof HTMLElement) {
				this.el.innerText = value;
			}
		}
		return this;
	};
	/**
	 * @param {string} value
	 */
	textContent = (value) => {
		if (this.el) {
			this.el.textContent = value;
		}
		return this;
	};
	/**
	 * @param {string} value
	 */
	value = (value) => {
		if (this.el) {
			if (this.el instanceof HTMLInputElement) {
				this.el.value = value;
			}
		}
		return this;
	};
	/**
	 * @param {Object.<string,string>} styles_object
	 */
	styles = (styles_object) => {
		if (this.el) {
			if (this.el instanceof HTMLElement) {
				for (const style in styles_object) {
					this.el.style[style] = styles_object[style];
				}
			}
		}
		return this;
	};
	/**
	 * @param {Object.<'add'|'remove',string[]>} class_list_definition
	 */
	classList = (class_list_definition) => {
		if (this.el) {
			for (const add_or_remove in class_list_definition) {
				for (let i = 0; i < class_list_definition[add_or_remove].length; i++) {
					this.el.classList[add_or_remove](class_list_definition[add_or_remove][i]);
				}
			}
		}
		return this;
	};
	/**
	 * @param {HTMLElement|Element} node
	 */
	append = (node) => {
		if (this.el) {
			this.el.appendChild(node);
		}
		return this;
	};
	/**
	 * @param {HTMLElement|Element} elem
	 */
	prepend = (elem) => {
		if (this.el) {
			this.el.prepend(elem);
		}
		return this;
	};
	/**
	 * @param {HTMLElement|Element} elem
	 */
	before = (elem) => {
		if (this.el) {
			if (!this.el.parentNode) {
				return;
			}
			this.el.parentNode.insertBefore(elem, this.el);
		}
		return this;
	};
	/**
	 * @param {HTMLElement|Element} elem
	 */
	after = (elem) => {
		if (this.el) {
			this.el.insertAdjacentElement('afterend', elem);
		}
		return this;
	};
	/**
	 * @param {Object.<string,string|boolean>|NamedNodeMap} custom_attribute_n_value
	 * - you can generate NamedNodeMap from element.attributes
	 */
	attributes = (custom_attribute_n_value) => {
		if (this.el) {
			if (custom_attribute_n_value instanceof NamedNodeMap) {
				for (let i = 0; i < custom_attribute_n_value.length; i++) {
					const { name, value } = custom_attribute_n_value[i];
					if (value === 'true') {
						this.el.setAttribute(name, '');
					} else if (value === 'false') {
						this.el.removeAttribute(name);
					} else {
						this.el.setAttribute(name, value);
					}
				}
			} else {
				for (const key in custom_attribute_n_value) {
					const value = custom_attribute_n_value[key];
					if (value === true) {
						this.el.setAttribute(key, '');
					} else if (value === false) {
						this.el.removeAttribute(key);
					} else {
						this.el.setAttribute(key, value);
					}
				}
			}
		}
		return this;
	};
	/**
	 * @param {HTMLElement|Element} elem
	 */
	replace = (elem) => {
		if (this.el) {
			if (!this.el.parentNode) {
				return;
			}
			this.el.parentNode.replaceChild(elem, this.el);
		}
	};
	/**
	 * @param {((element:HTMLElement|Element)=>Promise<any>)} callback
	 */
	script = async (callback) => {
		if (this.el) {
			await callback(this.el);
		}
		return this;
	};
}
