$(document).ready(() => { $('.singleSelectTest').select2({ width: '100%', minimumResultsForSearch: Infinity }) })

$(document).ready(() => { $('.multiSelectTest').select2({ width: '100%', closeOnSelect: false }) })

if (document.getElementById('slider')) {
   $('#slider').ready(() => {
      noUiSlider.create(slider, {
         start: [30, 70],
         connect: true,
         step: 1,
         tooltips: [ true, true ],
         range: { 'min': 0, 'max': 100 }
      })
   })
}

//console.log(jQuery.fn.jquery)

//const slider = document.getElementById('slider')


/*
class MultiSelector extends HTMLElement {
   constructor() {
      super()
      this.innerHTML +=
      `<style>
         multi-selector input::-webkit-calendar-picker-indicator {
         display: none;
         }
         //NB use of pointer-events to only allow events from the × icon 
         multi-selector div.item::after {
            color: black;
            content: '×';
            cursor: pointer;
            font-size: 16px;
            pointer-events: auto;
            position: absolute;
            right: 5px;
            top: -1px;
            }
         </style>`
         this._shadowRoot = this.attachShadow({ mode: 'open' })
         this._shadowRoot.innerHTML += 
         `<style>
            :host {
               border: var(--multi-input-border, 1px solid #ddd);
               display: block;
               overflow: hidden;
               }
               // NB use of pointer-events to only allow events from the × icon 
               ::slotted(div.item) {
               background-color: var(--multi-selector-item-bg-color, #dedede);
               border: var(--multi-selector-item-border, 1px solid #ccc);
               border-radius: 2px;
               color: #222;
               display: inline-block;
               font-size: var(--multi-selector-item-font-size, 1rem);
               margin: 1px;
               padding: 0px 25px 0px 5px;
               pointer-events: none;
               position: relative;
               top: -1px;
               }
               // NB pointer-events: none above 
               ::slotted(div.item:hover) {
               background-color: #eee;
               color: black;
               }
               ::slotted(input) {
               border: none;
               font-size: var(--multi-selector-input-font-size, 1rem);
               outline: none;
            }
         </style>
         <slot></slot>`
         
         this._datalist = this.querySelector('datalist')
         this._allowedValues = []
   
         for (const option of this._datalist.options) { this._allowedValues.push(option.value) } //contains list of option values from LangInputs element
   
         this._input = this.querySelector('input')
         this._input.onblur = this._handleBlur.bind(this)
         this._input.oninput = this._handleInput.bind(this)
         this._input.onkeydown = (event) => { this._handleKeydown(event) }
   
         this._allowDuplicates = this.hasAttribute('allow-duplicates') //allow duplicates property
      }
   
      //called by Event
      _addItem(value) {
         this._input.value = ''
         const item = document.createElement('div') //div is created for the new item
         item.classList.add('item')
         item.textContent = value
         this.insertBefore(item, this._input) //inserts new item before the rest of the inputs
         item.onclick = () => { this._deleteItem(item) }
   
         if (!this._allowDuplicates) {
            for (const option of this._datalist.options) {
               if (option.value === value) option.remove() //removes duplicate from the list of options from the input selections
            }
   
            this._allowedValues = this._allowedValues.filter((item) => item !== value) //filters list of allowed values to contain everything except duplicate
         }
      }
   
      _deleteItem(item) {
         const value = item.textContent
         item.remove() //deletes the option from selected options
   
         if (!this._allowDuplicates) {
            const option = document.createElement('option')
            option.value = value
            this._datalist.insertBefore(option, this._datalist.firstChild)
            this._allowedValues.push(value)
         }
      }
   
      _handleBlur() { this._input.value = '' } //Cleans inputs when no longer focused on
   
      _handleInput() {
         const value = this._input.value
         if (this._allowedValues.includes(value)) this._addItem(value) //Adds an item when a new option has been selected from input
      } 
   
      _handleKeydown(event) {
         const itemToDelete = event.target.previousElementSibling
         const value = this._input.value
         if (value === '' && event.key === 'Backspace' && itemToDelete) { this._deleteItem(itemToDelete) }
         else if (this._allowedValues.includes(value)) { this._addItem(value) }
      }
   
      toArray() {
         const values = []
         const items = this.querySelectorAll('.item')
         for (const item of items) { values.push(item.textContent) }
         return values
      }
   }
   
   window.customElements.define('multi-selector', MultiSelector)
*/