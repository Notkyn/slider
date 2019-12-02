# Slider
Horizontal slider. Switch slides using the side controls or an optional navigation unit.
## How to use:    
- **creating:**
```javascript
import { Slider } from './script';
const slider = new Slider('slider');
```
**`slider`** - slider container class, default calue `**slider**`
- **layout structure:**
```html
<div class="key">
    <div class="key-wrap">
	    <div class="key-item">
		    ... content
		</div>
		<div class="key-item">
			..........
		</div>
		<div class="key-item">
			... content_N
		</div>
		<div class="key-prev">
            ... control layout: previous
        </div>
		<div class="key-next">  
            ... control layout: next
        </div>
	</div>
	<div class="key-dots-wrap">
	    <div class="key-dot key-dot-active"></div>
	    <div class="key-dot"></div>
        ........
	    <div class="key-dot"></div>
    </div>
</div>
```
**`key`** - key class, set to the common container of slider (_example: `slider`_), used to define nested containers

**`${key}-item`** - content class (_example: `slider-item`_)

**`${key}-prev`** and **`${key}-next`** - control layout class for previous and next slider (_example: `slider-prev`, `slider-next`_)

**`${key}-dot`** - switch class (_example: `slider-dot`_)

**`${key}-active-dot`** - class for indicating activated switch (_example: `slider-active-dot`_)

The number of content blocks and switches should be the same.
- **run:**
```javascript
slider.aplly(param1, param2);
```
**`param1`** - slider index from which to start showing, default value **`1`**

**`param2`** - time interval for automatic slide switching, set in milliseconds (_off by default_)
