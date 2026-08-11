(function() {
  try {
    if (typeof document != "undefined") {
      var Ft = document.createElement("style");
      Ft.id = "kaching-bundles-styles", Ft.appendChild(document.createTextNode(`.kaching-bundles .kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles .kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photos{position:relative;display:flex;align-items:center;flex-shrink:0;padding-block:2px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo{box-sizing:border-box;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;background-color:#fff;border-radius:8px;border:1px solid var(--kaching-free-gift-background-color, #fff)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo{border-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo:not(:first-child){margin-inline-start:-16px}.kaching-bundles .kaching-bundles__multiple-gifts-selector__photo-count{box-sizing:border-box;position:absolute;top:0;inset-inline-end:0;transform:translate(18%,-3%);display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;border:1px solid var(--kaching-free-gift-text-color, #000);background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3));color:var(--kaching-free-gift-text-color, #000);font-size:calc(var(--kaching-free-gift-font-size, 13px) - 2px);font-weight:var(--kaching-free-gift-font-weight, bold);line-height:1}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__multiple-gifts-selector__photo-count{border-color:var(--kaching-free-gift-selected-text-color, #fff);background-color:var(--kaching-free-gift-selected-background-color, #000);color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products--hidden{display:none}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing{display:flex;justify-content:flex-end}.kaching-bundles .kaching-bundles__mix-and-match-product__pricing .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end;gap:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;flex:1;min-width:0;overflow-wrap:break-word}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;position:relative;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell--badge-border-all{margin:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-top{margin-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-bottom{margin-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-left{min-height:var(--badge-border-min-length, auto);margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell--badge-border-right{min-height:var(--badge-border-min-length, auto);margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-border-thickness, 22px))}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--top{inset:calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--bottom{inset:auto 0 calc(-1 * var(--badge-border-thickness, 22px));height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--left{inset:0 auto 0 calc(-1 * var(--badge-border-thickness, 22px));width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell .kaching-bundles__badge-border--right{inset:0 calc(-1 * var(--badge-border-thickness, 22px)) 0 auto;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all .kaching-bundles__free-gift:last-child,.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__free-gift:last-child{margin-inline:0;margin-block-end:0;border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__free-gift:last-child{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-left{margin-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-right{margin-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-all:last-child,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell--badge-border-bottom:last-child{margin-block-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.kaching-bundles .kaching-bundles__product-personalisation__image--default{width:70%;height:70%;-o-object-fit:contain;object-fit:contain;opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-error{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles-savings-summary{display:flex;align-items:center;justify-content:var(--kaching-bundles-savings-summary-alignment, flex-start);gap:8px;padding:12px 16px;margin-top:calc(10px * var(--block-spacing, 1));background-color:var(--kaching-bundles-savings-summary-background-color, #f5fcf7);color:var(--kaching-bundles-savings-summary-text-color, #1b5933);border-style:solid;border-color:var(--kaching-bundles-savings-summary-border-color, #457757);border-width:var(--kaching-bundles-savings-summary-border-width, 1px);border-radius:var(--kaching-bundles-savings-summary-border-radius, 8px);font-size:var(--kaching-bundles-savings-summary-title-font-size, 14px);font-style:var(--kaching-bundles-savings-summary-title-font-style, normal);font-weight:var(--kaching-bundles-savings-summary-title-font-weight, 500)}.kaching-bundles .kaching-bundles-savings-summary__icon{display:flex;align-items:center;width:1.2em;height:1.2em;flex-shrink:0;color:var(--kaching-bundles-savings-summary-icon-color, #1c5632)}.kaching-bundles .kaching-bundles-savings-summary__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles-savings-summary__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles-savings-summary__value{color:var(--kaching-bundles-savings-summary-value-color, #000000)}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display, block);width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}@media (width < 750px){.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{display:var(--kaching-bundles-sticky-atc-image-display-mobile, var(--kaching-bundles-sticky-atc-image-display, block));height:var(--kaching-bundles-sticky-atc-product-photo-size-mobile, var(--kaching-bundles-sticky-atc-product-photo-size, 40px));border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius-mobile, var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{font-size:var(--kaching-bundles-sticky-atc-title-font-size-mobile, var(--kaching-bundles-sticky-atc-title-font-size, 16px))}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{font-size:var(--kaching-bundles-sticky-atc-button-font-size-mobile, var(--kaching-bundles-sticky-atc-button-font-size, 16px));padding:var(--kaching-bundles-sticky-atc-button-padding-mobile, var(--kaching-bundles-sticky-atc-button-padding, 15px));border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius-mobile, var(--kaching-bundles-sticky-atc-button-corner-radius, 8px))}}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__bar-variant__content.kaching-bundles__bar-variant__content--with-option-names{align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant-option{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__bar-variant-option__name{font-size:13px;line-height:1.3}.kaching-bundles .kaching-bundles__bar-variant-option__name-label{font-weight:600}.kaching-bundles .kaching-bundles__bar-variant-option__name-value{font-weight:400;opacity:.85}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights--horizontal{flex-flow:row wrap}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );padding:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bars--badge-border-top{padding-top:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-bottom{padding-bottom:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left{padding-left:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-right{padding-right:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bars--badge-border-left,.kaching-bundles .kaching-bundles__bars--badge-border-right{min-height:var(--badge-border-min-length, auto);border-radius:var(--bar-border-radius, 8px);box-shadow:0 1px 10px var(--badge-border-wrap-color, rgba(0, 0, 0, .12))}.kaching-bundles .kaching-bundles__bars--badge-border-all,.kaching-bundles .kaching-bundles__bars--badge-border-top,.kaching-bundles .kaching-bundles__bars--badge-border-bottom{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__subscriptions-wrapper{position:relative}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-all>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top>.kaching-bundles__scratch-off,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom>.kaching-bundles__scratch-off{margin-block:0}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{position:relative;z-index:1;flex:1;box-sizing:border-box;min-height:var(--badge-border-min-length, auto);padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px);background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);display:flex;flex-direction:column;justify-content:center}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper{margin-inline-start:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-start-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{margin-inline-end:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border-start-end-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:3}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:var(--badge-size, 56px);width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular--fancy svg{width:var(--badge-size, 102px);height:auto}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-radius:0 0 5px 5px;font-family:sans-serif;font-size:var(--badge-text-size, 12px);font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__badge-border{position:absolute;z-index:1;display:flex;box-sizing:border-box;overflow:hidden;align-items:center;justify-content:center;font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;line-height:1;letter-spacing:normal;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color, #000)}.kaching-bundles .kaching-bundles__badge-border--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0}.kaching-bundles .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:var(--badge-border-thickness, 22px);border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px)}.kaching-bundles .kaching-bundles__badge-border__side{position:absolute;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap}.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__badge-border .kaching-bundles__badge-border__side{letter-spacing:normal}.kaching-bundles .kaching-bundles__badge-border__curve{position:absolute;inset:0;width:100%;height:100%}.kaching-bundles .kaching-bundles__badge-border__curve text{font-family:sans-serif;font-size:max(6px,min(var(--badge-text-size, 12px),var(--badge-border-thickness, 22px) - 6px));font-weight:700;letter-spacing:normal;fill:var(--bar-most-popular-color, #fff)}.kaching-bundles .kaching-bundles__badge-border--all{inset:0;background-color:transparent;pointer-events:none}.kaching-bundles .kaching-bundles__badge-border__band{display:block;position:absolute;inset:0;padding:var(--badge-border-thickness, 22px);border-radius:calc(var(--bar-border-radius, 8px) + var(--badge-ring-outer));background-color:var(--bar-most-popular-background-color, #000);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.kaching-bundles .kaching-bundles__badge-border__side--top{inset:0 0 auto;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__badge-border__side--bottom{inset:auto 0 0;height:var(--badge-border-thickness, 22px);transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--left{inset:var(--badge-border-thickness, 22px) auto var(--badge-border-thickness, 22px) 0;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl;transform:rotate(180deg)}.kaching-bundles .kaching-bundles__badge-border__side--right{inset:var(--badge-border-thickness, 22px) 0 var(--badge-border-thickness, 22px) auto;width:var(--badge-border-thickness, 22px);writing-mode:vertical-rl}.kaching-bundles .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:var(--badge-border-thickness, 22px);border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0}.kaching-bundles .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{writing-mode:vertical-rl;white-space:nowrap;text-align:center}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--all{inset:calc(-1 * var(--badge-ring-outer))}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top{inset:0 0 auto;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0 0;display:flex;align-items:flex-start;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left top/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--top .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom{inset:auto 0 0;height:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px);display:flex;align-items:flex-end;justify-content:center;-webkit-mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat;mask:linear-gradient(#000,#000) left bottom/100% var(--badge-border-thickness, 22px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-depth, 8px) var(--badge-concave-extra) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--bottom .kaching-bundles__badge-border__text{display:flex;align-items:center;height:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left{inset:0 auto 0 0;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:var(--bar-border-radius, 8px) 0 0 var(--bar-border-radius, 8px);display:flex;align-items:center;justify-content:flex-start;-webkit-mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) left top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 100% 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 100% 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) right bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right{inset:0 0 0 auto;width:calc(var(--badge-border-thickness, 22px) + var(--badge-concave-extra));border-radius:0 var(--bar-border-radius, 8px) var(--bar-border-radius, 8px) 0;display:flex;align-items:center;justify-content:flex-end;-webkit-mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat;mask:linear-gradient(#000,#000) right top/var(--badge-border-thickness, 22px) 100% no-repeat,radial-gradient(circle at 0 100%,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left top/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat,radial-gradient(circle at 0 0,rgba(0,0,0,0) calc(var(--badge-concave-depth, 8px) - 1px),#000 var(--badge-concave-depth, 8px)) left bottom/var(--badge-concave-extra) var(--badge-concave-depth, 8px) no-repeat}.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--left .kaching-bundles__badge-border__text,.kaching-bundles .kaching-bundles__bar-container .kaching-bundles__badge-border--right .kaching-bundles__badge-border__text{display:flex;align-items:center;justify-content:center;width:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-all{--badge-ring-outer: calc( var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px) );margin:var(--badge-ring-outer)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{--badge-concave-extra: max( 0px, var(--badge-concave-depth, 8px) - var(--badge-border-gap, 0px) )}.kaching-bundles .kaching-bundles__bar-container--badge-border-top{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:after{content:"";position:absolute;inset:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-top:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:after{content:"";position:absolute;inset:0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar-container--badge-border-right{box-shadow:none;background-color:transparent;min-height:var(--badge-border-min-length, auto)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-left:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(:focus-visible),.kaching-bundles .kaching-bundles__bar-container--badge-border-right:hover,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(:focus-visible),.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right{box-shadow:none}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:after{content:"";position:absolute;inset:0 0 0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-left:var(--badge-border-gap-border, none);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar-container--badge-border-right:after{content:"";position:absolute;inset:0 calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px)) 0 0;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-right:var(--badge-border-gap-border, none);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px);pointer-events:none;z-index:2}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left:after,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right:after{border-width:2px;border-color:var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-main{display:flex;flex-direction:column;min-width:0}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants,.kaching-bundles .kaching-bundles__bar-variants--visible{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bar{margin-block:0}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-top .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars,.kaching-bundles .kaching-bundles__bars--badge-border-bottom .kaching-bundles__subscriptions-wrapper .kaching-bundles__bars{row-gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bar-container--badge-border-left:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar-container--badge-border-right:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-top:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--badge-concave-depth, 8px);border-start-end-radius:var(--badge-concave-depth, 8px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper{position:relative;z-index:1;margin-bottom:calc(var(--badge-border-thickness, 22px) + var(--badge-border-gap, 0px));background-color:var(--bar-background-color, #fff);border-start-start-radius:var(--bar-border-radius);border-start-end-radius:var(--bar-border-radius);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) .kaching-bundles__bar-wrapper{margin-bottom:0;border-end-start-radius:0;border-end-end-radius:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom:has(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts) :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-bottom:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts),.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts){position:relative;z-index:1;margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-left :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-start:var(--badge-border-thickness, 22px);border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bars--badge-border-all .kaching-bundles__bar-container--badge-border-right :is(.kaching-bundles__free-gift,.kaching-bundles__upsell,.kaching-bundles__deal-bar-progressive-gifts):last-child{margin-inline-end:var(--badge-border-thickness, 22px);border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0;border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--badge-concave-depth, 8px);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift:last-child{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--badge-concave-depth, 8px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-top .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__deal-bar-progressive-gift,.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__deal-bar-progressive-gift{margin-inline:0}.kaching-bundles .kaching-bundles__bar-container--badge-border-left .kaching-bundles__free-gift__divider{margin-inline-start:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar-container--badge-border-right .kaching-bundles__free-gift__divider{margin-inline-end:var(--badge-border-thickness, 22px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-top .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-bottom .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-left .kaching-bundles__bar-wrapper,.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container--badge-border-right .kaching-bundles__bar-wrapper{background-color:var(--bar-selected-background-color)}`)), document.head.appendChild(Ft);
    }
  } catch (tn) {
    console.error("vite-plugin-css-injected-by-js", tn);
  }
})();
var pm = Object.defineProperty, bm = Object.getPrototypeOf, fm = Reflect.get, hg = (Ft) => {
  throw TypeError(Ft);
}, vm = (Ft, tn, In) => tn in Ft ? pm(Ft, tn, { enumerable: !0, configurable: !0, writable: !0, value: In }) : Ft[tn] = In, wn = (Ft, tn, In) => vm(Ft, typeof tn != "symbol" ? tn + "" : tn, In), qo = (Ft, tn, In) => tn.has(Ft) || hg("Cannot " + In), me = (Ft, tn, In) => (qo(Ft, tn, "read from private field"), In ? In.call(Ft) : tn.get(Ft)), mt = (Ft, tn, In) => tn.has(Ft) ? hg("Cannot add the same private member more than once") : tn instanceof WeakSet ? tn.add(Ft) : tn.set(Ft, In), xt = (Ft, tn, In, hs) => (qo(Ft, tn, "write to private field"), tn.set(Ft, In), In), ln = (Ft, tn, In) => (qo(Ft, tn, "access private method"), In), _m = (Ft, tn, In) => fm(bm(Ft), In, tn);
(function(Ft) {
  var tn, In, hs, hl, $i, Er, Di, pl, Za, Ai, Ja, Pa, Vi, bl, fl, sa, Go, vl, ps, Dr, dr, _l, Rr, Ya, Nr, mr, ar, Qr, Sa, Ba, oa, Ka, Ca, bs, fs, gr, Oo, Fo, kl, ml, vs, Ia, Ti, xl, _s, Lo, ca, xr, qi, yl, ks, ms, jo, Gi, Ar, Ma, xs, wl, Eo, Ro, Wr, Ur, ua, ys, Hr, Oi, Pl, Sl, Bl;
  String.prototype.replaceAll || (String.prototype.replaceAll = function(n, t) {
    if (typeof n == "string") {
      const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return this.replace(new RegExp(r, "g"), t);
    }
    if (n instanceof RegExp) {
      if (!n.global) throw new TypeError("replaceAll must be called with a global RegExp");
      return this.replace(n, t);
    }
    return this.replace(n, t);
  }), typeof window != "undefined" && ((hs = (In = (tn = window.__svelte) != null ? tn : window.__svelte = {}).v) != null ? hs : In.v = /* @__PURE__ */ new Set()).add("5");
  const Cl = "[!", za = {}, An = Symbol(), pg = !1;
  var Fi = Array.isArray, bg = Array.prototype.indexOf, ws = Array.from, Il = Object.keys, $a = Object.defineProperty, Da = Object.getOwnPropertyDescriptor, No = Object.getOwnPropertyDescriptors, Qo = Object.prototype, fg = Array.prototype, Ml = Object.getPrototypeOf, Wo = Object.isExtensible;
  const yr = () => {
  };
  function vg(n) {
    return n();
  }
  function zl(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  const Li = 16, $l = 32, Uo = 64, wr = 256, Ps = 512, Nn = 1024, Zr = 2048, Aa = 4096, Vr = 8192, Xa = 16384, Ss = 32768, ei = 65536, _g = 1 << 17, Ho = 1 << 19, Bs = 1 << 21, kg = 1 << 22, Va = 1 << 23, Jr = Symbol("$state"), Zo = Symbol("legacy props"), mg = Symbol(""), Cs = new class extends Error {
    constructor() {
      super(...arguments), wn(this, "name", "StaleReactionError"), wn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function Jo(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function ji(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let Pt, ht = !1;
  function Yn(n) {
    ht = n;
  }
  function Vn(n) {
    if (n === null) throw ji(), za;
    return Pt = n;
  }
  function hr() {
    return Vn(Sr(Pt));
  }
  function y(n) {
    if (ht) {
      if (Sr(Pt) !== null) throw ji(), za;
      Pt = n;
    }
  }
  function da(n = 1) {
    if (ht) {
      for (var t = n, r = Pt; t--; ) r = Sr(r);
      Pt = r;
    }
  }
  function Dl(n = !0) {
    for (var t = 0, r = Pt; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== Cl || (t += 1);
      }
      var l = Sr(r);
      n && r.remove(), r = l;
    }
  }
  function Yo(n) {
    if (!n || n.nodeType !== 8) throw ji(), za;
    return n.data;
  }
  function Ko(n) {
    return n === this.v;
  }
  function Al(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function xg(n, t) {
    return n !== t;
  }
  function Xo(n) {
    return !Al(n, this.v);
  }
  let ti = !1;
  const yg = [];
  function ga(n, t = !1, r = !1) {
    return Vl(n, /* @__PURE__ */ new Map(), "", yg, null, r);
  }
  function Vl(n, t, r, a, l = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var c = t.get(n);
      if (c !== void 0) return c;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (Fi(n)) {
        var s = Array(n.length);
        t.set(n, s), l !== null && t.set(l, s);
        for (var i = 0; i < n.length; i += 1) {
          var u = n[i];
          i in n && (s[i] = Vl(u, t, r, a, null, o));
        }
        return s;
      }
      if (Ml(n) === Qo) {
        for (var g in s = {}, t.set(n, s), l !== null && t.set(l, s), n) s[g] = Vl(n[g], t, r, a, null, o);
        return s;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return Vl(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let on = null;
  function ni(n) {
    on = n;
  }
  function ri(n) {
    return ec().get(n);
  }
  function ai(n, t) {
    return ec().set(n, t), t;
  }
  function Ke(n, t = !1, r) {
    on = { p: on, c: null, e: null, s: n, x: null, l: ti && !t ? { s: null, u: null, $: [] } : null };
  }
  function Xe(n) {
    var t = on, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) yc(a);
    return n !== void 0 && (t.x = n), on = t.p, n != null ? n : {};
  }
  function ii() {
    return !ti || on !== null && on.l === null;
  }
  function ec(n) {
    var t;
    return on === null && Jo(), (t = on.c) != null ? t : on.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const l = a.c;
        if (l !== null) return l;
        a = a.p;
      }
      return null;
    })(on) || void 0);
  }
  const wg = typeof requestIdleCallback == "undefined" ? (n) => setTimeout(n, 1) : requestIdleCallback;
  let ha = [], li = [];
  function tc() {
    var n = ha;
    ha = [], zl(n);
  }
  function nc() {
    var n = li;
    li = [], zl(n);
  }
  function Pg() {
    return ha.length > 0 || li.length > 0;
  }
  function Ta(n) {
    if (ha.length === 0 && !Ri) {
      var t = ha;
      queueMicrotask(() => {
        t === ha && tc();
      });
    }
    ha.push(n);
  }
  function Sg() {
    ha.length > 0 && tc(), li.length > 0 && nc();
  }
  const Bg = /* @__PURE__ */ new WeakMap();
  function rc(n) {
    var t = Vt;
    if (t === null) return Gt.f |= Va, n;
    if ((t.f & Ss) === 0) {
      if (!(128 & t.f)) throw !t.parent && n instanceof Error && ac(n), n;
      t.b.error(n);
    } else si(n, t);
  }
  function si(n, t) {
    for (; t !== null; ) {
      if (128 & t.f) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && ac(n), n;
  }
  function ac(n) {
    const t = Bg.get(n);
    t && ($a(n, "message", { value: t.message }), $a(n, "stack", { value: t.stack }));
  }
  const Is = /* @__PURE__ */ new Set();
  let vn = null, Ei = null, Ms = /* @__PURE__ */ new Set(), qa = [], Tl = null, zs = !1, Ri = !1;
  hl = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Ja = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakSet(), Go = function(n) {
    var t;
    n.f ^= Nn;
    for (var r = n.first; r !== null; ) {
      var a = r.f, l = !!(96 & a);
      if (!(l && (a & Nn) !== 0 || (a & Vr) !== 0 || this.skipped_effects.has(r)) && r.fn !== null) {
        l ? r.f ^= Nn : 4 & a ? me(this, Pa).push(r) : (a & Nn) === 0 && ((a & kg) !== 0 ? ((t = r.b) != null && t.is_pending() ? me(this, Ai) : me(this, Za)).push(r) : Fl(r) && ((r.f & Li) !== 0 && me(this, Vi).push(r), di(r)));
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; ) r = c.next, c = c.parent;
    }
  }, vl = function(n) {
    for (const t of n)
      ((t.f & Zr) !== 0 ? me(this, bl) : me(this, fl)).push(t), tr(t, Nn);
    n.length = 0;
  }, ps = function() {
    if (!me(this, pl)) for (const n of me(this, $i)) n();
    me(this, $i).clear();
  };
  let Ga = class To {
    constructor() {
      mt(this, sa), wn(this, "current", /* @__PURE__ */ new Map()), mt(this, hl, /* @__PURE__ */ new Map()), mt(this, $i, /* @__PURE__ */ new Set()), mt(this, Er, 0), mt(this, Di, null), mt(this, pl, !1), mt(this, Za, []), mt(this, Ai, []), mt(this, Ja, []), mt(this, Pa, []), mt(this, Vi, []), mt(this, bl, []), mt(this, fl, []), wn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      var r;
      qa = [], Ei = null;
      for (const o of t) ln(this, sa, Go).call(this, o);
      if (me(this, Za).length === 0 && me(this, Er) === 0) {
        ln(this, sa, ps).call(this);
        var a = me(this, Ja), l = me(this, Pa);
        xt(this, Ja, []), xt(this, Pa, []), xt(this, Vi, []), Ei = vn, vn = null, lc(a), lc(l), vn === null ? vn = this : Is.delete(this), (r = me(this, Di)) == null || r.resolve();
      } else ln(this, sa, vl).call(this, me(this, Ja)), ln(this, sa, vl).call(this, me(this, Pa)), ln(this, sa, vl).call(this, me(this, Vi));
      for (const o of me(this, Za)) di(o);
      for (const o of me(this, Ai)) di(o);
      xt(this, Za, []), xt(this, Ai, []);
    }
    capture(t, r) {
      me(this, hl).has(t) || me(this, hl).set(t, r), this.current.set(t, t.v);
    }
    activate() {
      vn = this;
    }
    deactivate() {
      vn = null, Ei = null;
      for (const t of Ms) if (Ms.delete(t), t(), vn !== null) break;
    }
    neuter() {
      xt(this, pl, !0);
    }
    flush() {
      qa.length > 0 ? ic() : ln(this, sa, ps).call(this), vn === this && (me(this, Er) === 0 && Is.delete(this), this.deactivate());
    }
    increment() {
      xt(this, Er, me(this, Er) + 1);
    }
    decrement() {
      if (xt(this, Er, me(this, Er) - 1), me(this, Er) === 0) {
        for (const t of me(this, bl)) tr(t, Zr), oi(t);
        for (const t of me(this, fl)) tr(t, Aa), oi(t);
        xt(this, Ja, []), xt(this, Pa, []), this.flush();
      } else this.deactivate();
    }
    add_callback(t) {
      me(this, $i).add(t);
    }
    settled() {
      var t, r, a;
      return ((t = me(this, Di)) != null ? t : xt(this, Di, { promise: new Promise((l, o) => {
        r = l, a = o;
      }), resolve: r, reject: a })).promise;
    }
    static ensure() {
      if (vn === null) {
        const t = vn = new To();
        Is.add(vn), Ri || To.enqueue(() => {
          vn === t && t.flush();
        });
      }
      return vn;
    }
    static enqueue(t) {
      Ta(t);
    }
  };
  function k(n) {
    var t = Ri;
    Ri = !0;
    try {
      for (; ; ) {
        if (Sg(), qa.length === 0 && !Pg() && (vn == null || vn.flush(), qa.length === 0)) return void (Tl = null);
        ic();
      }
    } finally {
      Ri = t;
    }
  }
  function ic() {
    var n = ui;
    zs = !0;
    try {
      var t = 0;
      for (Mc(!0); qa.length > 0; ) {
        var r = Ga.ensure();
        t++ > 1e3 && Cg(), r.process(qa), ba.clear();
      }
    } finally {
      zs = !1, Mc(n), Tl = null;
    }
  }
  function Cg() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      si(n, Tl);
    }
  }
  let pa = null;
  function lc(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && Fl(a) && (pa = [], di(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? Bc(a) : a.fn = null), (pa == null ? void 0 : pa.length) > 0)) {
          ba.clear();
          for (const l of pa) di(l);
          pa = [];
        }
      }
      pa = null;
    }
  }
  function oi(n) {
    for (var t = Tl = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (zs && t === Vt && (r & Li) !== 0) return;
      if (96 & r) {
        if ((r & Nn) === 0) return;
        t.f ^= Nn;
      }
    }
    qa.push(t);
  }
  function sc(n) {
    let t, r = 0, a = Yr(0);
    return () => {
      Gt === null || Cr || (e(a), Wi(() => (r === 0 && (t = nn(() => n(() => ir(a)))), r += 1, () => {
        Ta(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, ir(a));
        });
      })));
    };
  }
  class Ig {
    constructor(t, r, a) {
      mt(this, gr), wn(this, "parent"), mt(this, Dr, !1), mt(this, dr), mt(this, _l, ht ? Pt : null), mt(this, Rr), mt(this, Ya), mt(this, Nr), mt(this, mr, null), mt(this, ar, null), mt(this, Qr, null), mt(this, Sa, null), mt(this, Ba, 0), mt(this, oa, 0), mt(this, Ka, !1), mt(this, Ca, null), mt(this, bs, () => {
        me(this, Ca) && ci(me(this, Ca), me(this, Ba));
      }), mt(this, fs, sc(() => (xt(this, Ca, Yr(me(this, Ba))), () => {
        xt(this, Ca, null);
      }))), xt(this, dr, t), xt(this, Rr, r), xt(this, Ya, a), this.parent = Vt.b, xt(this, Dr, !!me(this, Rr).pending), xt(this, Nr, Kr(() => {
        if (Vt.b = this, ht) {
          const l = me(this, _l);
          hr(), l.nodeType === 8 && l.data === Cl ? ln(this, gr, Fo).call(this) : ln(this, gr, Oo).call(this);
        } else {
          try {
            xt(this, mr, qn(() => a(me(this, dr))));
          } catch (l) {
            this.error(l);
          }
          me(this, oa) > 0 ? ln(this, gr, ml).call(this) : xt(this, Dr, !1);
        }
      }, 589952)), ht && xt(this, dr, Pt);
    }
    is_pending() {
      return me(this, Dr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!me(this, Rr).pending;
    }
    update_pending_count(t) {
      ln(this, gr, vs).call(this, t), xt(this, Ba, me(this, Ba) + t), Ms.add(me(this, bs));
    }
    get_effect_pending() {
      return me(this, fs).call(this), e(me(this, Ca));
    }
    error(t) {
      var r = me(this, Rr).onerror;
      let a = me(this, Rr).failed;
      if (me(this, Ka) || !r && !a) throw t;
      me(this, mr) && (Gn(me(this, mr)), xt(this, mr, null)), me(this, ar) && (Gn(me(this, ar)), xt(this, ar, null)), me(this, Qr) && (Gn(me(this, Qr)), xt(this, Qr, null)), ht && (Vn(me(this, _l)), da(), Vn(Dl()));
      var l = !1, o = !1;
      const c = () => {
        l ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (l = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), Ga.ensure(), xt(this, Ba, 0), me(this, Qr) !== null && Xr(me(this, Qr), () => {
          xt(this, Qr, null);
        }), xt(this, Dr, this.has_pending_snippet()), xt(this, mr, ln(this, gr, kl).call(this, () => (xt(this, Ka, !1), qn(() => me(this, Ya).call(this, me(this, dr)))))), me(this, oa) > 0 ? ln(this, gr, ml).call(this) : xt(this, Dr, !1));
      };
      var s = Gt;
      try {
        Qn(null), o = !0, r == null || r(t, c), o = !1;
      } catch (i) {
        si(i, me(this, Nr) && me(this, Nr).parent);
      } finally {
        Qn(s);
      }
      a && Ta(() => {
        xt(this, Qr, ln(this, gr, kl).call(this, () => {
          xt(this, Ka, !0);
          try {
            return qn(() => {
              a(me(this, dr), () => t, () => c);
            });
          } catch (i) {
            return si(i, me(this, Nr).parent), null;
          } finally {
            xt(this, Ka, !1);
          }
        }));
      });
    }
  }
  function oc(n, t, r) {
    const a = ii() ? Ni : ql;
    if (t.length !== 0) {
      var l = vn, o = Vt, c = (function() {
        var i = Vt, u = Gt, g = on, b = vn, h = ht;
        if (h) var v = Pt;
        return function() {
          Tr(i), Qn(u), ni(g), b == null || b.activate(), h && (Yn(!0), Vn(v));
        };
      })(), s = ht;
      Promise.all(t.map((i) => Mg(i))).then((i) => {
        l == null || l.activate(), c();
        try {
          r([...n.map(a), ...i]);
        } catch (u) {
          (o.f & Xa) === 0 && si(u, o);
        }
        s && Yn(!1), l == null || l.deactivate(), cc();
      }).catch((i) => {
        si(i, o);
      });
    } else r(n.map(a));
  }
  function cc() {
    Tr(null), Qn(null), ni(null);
  }
  function Ni(n) {
    var t = 2050, r = Gt !== null && 2 & Gt.f ? Gt : null;
    return Vt === null || r !== null && (r.f & wr) !== 0 ? t |= wr : Vt.f |= Ho, { ctx: on, deps: null, effects: null, equals: Ko, f: t, fn: n, reactions: null, rv: 0, v: An, wv: 0, parent: r != null ? r : Vt, ac: null };
  }
  function Mg(n, t) {
    let r = Vt;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, l = void 0, o = Yr(An), c = null, s = !Gt;
    return (function(i) {
      Br(4718592, i, !0);
    })(() => {
      var i;
      try {
        var u = n();
        c && Promise.resolve(u).catch(() => {
        });
      } catch (_) {
        u = Promise.reject(_);
      }
      var g = () => u;
      l = (i = c == null ? void 0 : c.then(g, g)) != null ? i : Promise.resolve(u), c = l;
      var b = vn, h = a.is_pending();
      s && (a.update_pending_count(1), h || b.increment());
      const v = (_, f = void 0) => {
        c = null, h || b.activate(), f ? f !== Cs && (o.f |= Va, ci(o, f)) : ((o.f & Va) !== 0 && (o.f ^= Va), ci(o, _)), s && (a.update_pending_count(-1), h || b.decrement()), cc();
      };
      if (l.then(v, (_) => v(null, _ || "unknown")), b) return () => {
        queueMicrotask(() => b.neuter());
      };
    }), new Promise((i) => {
      (function u(g) {
        function b() {
          g === l ? i(o) : u(l);
        }
        g.then(b, b);
      })(l);
    });
  }
  function d(n) {
    const t = Ni(n);
    return $c(t), t;
  }
  function ql(n) {
    const t = Ni(n);
    return t.equals = Xo, t;
  }
  function uc(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) Gn(t[r]);
    }
  }
  function $s(n) {
    var t, r = Vt;
    Tr((function(a) {
      for (var l = a.parent; l !== null; ) {
        if (!(2 & l.f)) return l;
        l = l.parent;
      }
      return null;
    })(n));
    try {
      uc(n), t = qc(n);
    } finally {
      Tr(r);
    }
    return t;
  }
  function dc(n) {
    var t = $s(n);
    n.equals(t) || (n.v = t, n.wv = Vc()), Oa || tr(n, !fa && (n.f & wr) === 0 || n.deps === null ? Nn : Aa);
  }
  Dr = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Ya = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakSet(), Oo = function() {
    try {
      xt(this, mr, qn(() => me(this, Ya).call(this, me(this, dr))));
    } catch (n) {
      this.error(n);
    }
    xt(this, Dr, !1);
  }, Fo = function() {
    const n = me(this, Rr).pending;
    n && (xt(this, ar, qn(() => n(me(this, dr)))), Ga.enqueue(() => {
      xt(this, mr, ln(this, gr, kl).call(this, () => (Ga.ensure(), qn(() => me(this, Ya).call(this, me(this, dr)))))), me(this, oa) > 0 ? ln(this, gr, ml).call(this) : (Xr(me(this, ar), () => {
        xt(this, ar, null);
      }), xt(this, Dr, !1));
    }));
  }, kl = function(n) {
    var t = Vt, r = Gt, a = on;
    Tr(me(this, Nr)), Qn(me(this, Nr)), ni(me(this, Nr).ctx);
    try {
      return n();
    } catch (l) {
      return rc(l), null;
    } finally {
      Tr(t), Qn(r), ni(a);
    }
  }, ml = function() {
    const n = me(this, Rr).pending;
    me(this, mr) !== null && (xt(this, Sa, document.createDocumentFragment()), (function(t, r) {
      for (var a = t.nodes_start, l = t.nodes_end; a !== null; ) {
        var o = a === l ? null : Sr(a);
        r.append(a), a = o;
      }
    })(me(this, mr), me(this, Sa))), me(this, ar) === null && xt(this, ar, qn(() => n(me(this, dr))));
  }, vs = function(n) {
    var t;
    this.has_pending_snippet() ? (xt(this, oa, me(this, oa) + n), me(this, oa) === 0 && (xt(this, Dr, !1), me(this, ar) && Xr(me(this, ar), () => {
      xt(this, ar, null);
    }), me(this, Sa) && (me(this, dr).before(me(this, Sa)), xt(this, Sa, null)))) : this.parent && ln(t = this.parent, gr, vs).call(t, n);
  };
  const ba = /* @__PURE__ */ new Map();
  function Yr(n, t) {
    return { f: 0, v: n, reactions: null, equals: Ko, rv: 0, wv: 0 };
  }
  function De(n, t) {
    const r = Yr(n);
    return $c(r), r;
  }
  function Ds(n, t = !1, r = !0) {
    var a, l;
    const o = Yr(n);
    return t || (o.equals = Xo), ti && r && on !== null && on.l !== null && ((l = (a = on.l).s) != null ? l : a.s = []).push(o), o;
  }
  function se(n, t, r = !1) {
    return Gt !== null && (!Cr || (Gt.f & _g) !== 0) && ii() && 4325394 & Gt.f && !(br != null && br.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), ci(n, r ? st(t) : t);
  }
  function ci(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      Oa ? ba.set(n, t) : ba.set(n, r), n.v = t, Ga.ensure().capture(n, r), 2 & n.f && ((n.f & Zr) !== 0 && $s(n), tr(n, (n.f & wr) === 0 ? Nn : Aa)), n.wv = Vc(), gc(n, Zr), !ii() || Vt === null || (Vt.f & Nn) === 0 || 96 & Vt.f || (fr === null ? (function(a) {
        fr = a;
      })([n]) : fr.push(n));
    }
    return t;
  }
  function ir(n) {
    se(n, n.v + 1);
  }
  function gc(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = ii(), l = r.length, o = 0; o < l; o++) {
      var c = r[o], s = c.f;
      if (a || c !== Vt) {
        var i = (s & Zr) === 0;
        i && tr(c, t), 2 & s ? gc(c, Aa) : i && ((s & Li) !== 0 && pa !== null && pa.push(c), oi(c));
      }
    }
  }
  function st(n) {
    if (typeof n != "object" || n === null || Jr in n) return n;
    const t = Ml(n);
    if (t !== Qo && t !== fg) return n;
    var r = /* @__PURE__ */ new Map(), a = Fi(n), l = De(0), o = Ir, c = (s) => {
      if (Ir === o) return s();
      var i = Gt, u = Ir;
      Qn(null), Ac(o);
      var g = s();
      return Qn(i), Ac(u), g;
    };
    return a && r.set("length", De(n.length)), new Proxy(n, { defineProperty(s, i, u) {
      "value" in u && u.configurable !== !1 && u.enumerable !== !1 && u.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var g = r.get(i);
      return g === void 0 ? g = c(() => {
        var b = De(u.value);
        return r.set(i, b), b;
      }) : se(g, u.value, !0), !0;
    }, deleteProperty(s, i) {
      var u = r.get(i);
      if (u === void 0) {
        if (i in s) {
          const g = c(() => De(An));
          r.set(i, g), ir(l);
        }
      } else se(u, An), ir(l);
      return !0;
    }, get(s, i, u) {
      var g;
      if (i === Jr) return n;
      var b = r.get(i), h = i in s;
      if (b !== void 0 || h && !((g = Da(s, i)) != null && g.writable) || (b = c(() => De(st(h ? s[i] : An))), r.set(i, b)), b !== void 0) {
        var v = e(b);
        return v === An ? void 0 : v;
      }
      return Reflect.get(s, i, u);
    }, getOwnPropertyDescriptor(s, i) {
      var u = Reflect.getOwnPropertyDescriptor(s, i);
      if (u && "value" in u) {
        var g = r.get(i);
        g && (u.value = e(g));
      } else if (u === void 0) {
        var b = r.get(i), h = b == null ? void 0 : b.v;
        if (b !== void 0 && h !== An) return { enumerable: !0, configurable: !0, value: h, writable: !0 };
      }
      return u;
    }, has(s, i) {
      var u;
      if (i === Jr) return !0;
      var g = r.get(i), b = g !== void 0 && g.v !== An || Reflect.has(s, i);
      return (g !== void 0 || Vt !== null && (!b || (u = Da(s, i)) != null && u.writable)) && (g === void 0 && (g = c(() => De(b ? st(s[i]) : An)), r.set(i, g)), e(g) === An) ? !1 : b;
    }, set(s, i, u, g) {
      var b, h = r.get(i), v = i in s;
      if (a && i === "length") for (var _ = u; _ < h.v; _ += 1) {
        var f = r.get(_ + "");
        f !== void 0 ? se(f, An) : _ in s && (f = c(() => De(An)), r.set(_ + "", f));
      }
      h === void 0 ? v && !((b = Da(s, i)) != null && b.writable) || (se(h = c(() => De(void 0)), st(u)), r.set(i, h)) : (v = h.v !== An, se(h, c(() => st(u))));
      var x = Reflect.getOwnPropertyDescriptor(s, i);
      if (x != null && x.set && x.set.call(g, u), !v) {
        if (a && typeof i == "string") {
          var D = r.get("length"), w = Number(i);
          Number.isInteger(w) && w >= D.v && se(D, w + 1);
        }
        ir(l);
      }
      return !0;
    }, ownKeys(s) {
      e(l);
      var i = Reflect.ownKeys(s).filter((b) => {
        var h = r.get(b);
        return h === void 0 || h.v !== An;
      });
      for (var [u, g] of r) g.v === An || u in s || i.push(u);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function hc(n) {
    try {
      if (n !== null && typeof n == "object" && Jr in n) return n[Jr];
    } catch {
    }
    return n;
  }
  function zg(n, t) {
    return Object.is(hc(n), hc(t));
  }
  var pc, bc, fc, vc;
  function As() {
    if (pc === void 0) {
      pc = window, bc = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      fc = Da(t, "firstChild").get, vc = Da(t, "nextSibling").get, Wo(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Wo(r) && (r.__t = void 0);
    }
  }
  function Pr(n = "") {
    return document.createTextNode(n);
  }
  function jn(n) {
    return fc.call(n);
  }
  function Sr(n) {
    return vc.call(n);
  }
  function S(n, t) {
    if (!ht) return jn(n);
    var r = jn(Pt);
    if (r === null) r = Pt.appendChild(Pr());
    else if (t && r.nodeType !== 3) {
      var a = Pr();
      return r == null || r.before(a), Vn(a), a;
    }
    return Vn(r), r;
  }
  function pe(n, t = !1) {
    if (!ht) {
      var r = jn(n);
      return r instanceof Comment && r.data === "" ? Sr(r) : r;
    }
    if (t && (Pt == null ? void 0 : Pt.nodeType) !== 3) {
      var a = Pr();
      return Pt == null || Pt.before(a), Vn(a), a;
    }
    return Pt;
  }
  function G(n, t = 1, r = !1) {
    let a = ht ? Pt : n;
    for (var l; t--; ) l = a, a = Sr(a);
    if (!ht) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = Pr();
      return a === null ? l == null || l.after(o) : a.before(o), Vn(o), o;
    }
    return Vn(a), a;
  }
  function _c(n) {
    n.textContent = "";
  }
  function $g(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, Ta(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let kc = !1;
  function mc() {
    kc || (kc = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function Gl(n) {
    var t = Gt, r = Vt;
    Qn(null), Tr(null);
    try {
      return n();
    } finally {
      Qn(t), Tr(r);
    }
  }
  function xc(n) {
    Vt === null && Gt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), Gt !== null && (Gt.f & wr) !== 0 && Vt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), Oa && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function Br(n, t, r, a = !0) {
    var l, o = Vt;
    o !== null && (o.f & Vr) !== 0 && (n |= Vr);
    var c = { ctx: on, deps: null, nodes_start: null, nodes_end: null, f: n | Zr, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      di(c), c.f |= Ss;
    } catch (u) {
      throw Gn(c), u;
    }
    else t !== null && oi(c);
    if (a) {
      var s = c;
      if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && (s.f & Ho) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && (function(u, g) {
        var b = g.last;
        b === null ? g.last = g.first = u : (b.next = u, u.prev = b, g.last = u);
      })(s, o), Gt !== null && 2 & Gt.f && (n & Uo) === 0)) {
        var i = Gt;
        ((l = i.effects) != null ? l : i.effects = []).push(s);
      }
    }
    return c;
  }
  function Vs(n) {
    const t = Br(8, null, !1);
    return tr(t, Nn), t.teardown = n, t;
  }
  function Je(n) {
    var t;
    xc();
    var r = Vt.f;
    if (!(!Gt && (r & $l) !== 0 && (r & Ss) === 0)) return yc(n);
    var a = on;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function yc(n) {
    return Br(1048580, n, !1);
  }
  function pr(n) {
    return xc(), Br(1048584, n, !0);
  }
  function Qi(n) {
    return Br(4, n, !1);
  }
  function Wi(n, t = 0) {
    return Br(8 | t, n, !0);
  }
  function be(n, t = [], r = []) {
    oc(t, r, (a) => {
      Br(8, () => n(...a.map(e)), !0);
    });
  }
  function Kr(n, t = 0) {
    return Br(Li | t, n, !0);
  }
  function qn(n, t = !0) {
    return Br(524320, n, !0, t);
  }
  function wc(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = Oa, a = Gt;
      zc(!0), Qn(null);
      try {
        t.call(null);
      } finally {
        zc(r), Qn(a);
      }
    }
  }
  function Pc(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const l = r.ac;
      l !== null && Gl(() => {
        l.abort(Cs);
      });
      var a = r.next;
      (r.f & Uo) !== 0 ? r.parent = null : Gn(r, t), r = a;
    }
  }
  function Gn(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (Sc(n.nodes_start, n.nodes_end), r = !0), Pc(n, t && !r), Ll(n, 0), tr(n, Xa);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    wc(n);
    var l = n.parent;
    l !== null && l.first !== null && Bc(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function Sc(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : Sr(n);
      n.remove(), n = r;
    }
  }
  function Bc(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function Xr(n, t) {
    var r = [];
    Ts(n, r, !0), Cc(r, () => {
      Gn(n), t && t();
    });
  }
  function Cc(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var l of n) l.out(a);
    } else t();
  }
  function Ts(n, t, r) {
    if ((n.f & Vr) === 0) {
      if (n.f ^= Vr, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var l = a.next;
        Ts(a, t, ((a.f & ei) !== 0 || (a.f & $l) !== 0) && r), a = l;
      }
    }
  }
  function Ol(n) {
    Ic(n, !0);
  }
  function Ic(n, t) {
    if ((n.f & Vr) !== 0) {
      n.f ^= Vr, (n.f & Nn) === 0 && (tr(n, Zr), oi(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        Ic(r, ((r.f & ei) !== 0 || (r.f & $l) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const l of n.transitions) (l.is_global || t) && l.in();
    }
  }
  let ui = !1;
  function Mc(n) {
    ui = n;
  }
  let Oa = !1;
  function zc(n) {
    Oa = n;
  }
  let Gt = null, Cr = !1;
  function Qn(n) {
    Gt = n;
  }
  let Vt = null;
  function Tr(n) {
    Vt = n;
  }
  let br = null;
  function $c(n) {
    Gt !== null && (br === null ? br = [n] : br.push(n));
  }
  let Kn = null, lr = 0, fr = null, Dc = 1, Ui = 0, Ir = Ui;
  function Ac(n) {
    Ir = n;
  }
  let fa = !1;
  function Vc() {
    return ++Dc;
  }
  function Fl(n) {
    var t, r, a = n.f;
    if ((a & Zr) !== 0) return !0;
    if ((a & Aa) !== 0) {
      var l = n.deps, o = (a & wr) !== 0;
      if (l !== null) {
        var c, s, i = (a & Ps) !== 0, u = o && Vt !== null && !fa, g = l.length;
        if ((i || u) && (Vt === null || (Vt.f & Xa) === 0)) {
          var b = n, h = b.parent;
          for (c = 0; c < g; c++) s = l[c], !i && ((t = s == null ? void 0 : s.reactions) != null && t.includes(b)) || ((r = s.reactions) != null ? r : s.reactions = []).push(b);
          i && (b.f ^= Ps), u && h !== null && (h.f & wr) === 0 && (b.f ^= wr);
        }
        for (c = 0; c < g; c++) if (Fl(s = l[c]) && dc(s), s.wv > n.wv) return !0;
      }
      o && (Vt === null || fa) || tr(n, Nn);
    }
    return !1;
  }
  function Tc(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(br != null && br.includes(n))) for (var l = 0; l < a.length; l++) {
      var o = a[l];
      2 & o.f ? Tc(o, t, !1) : t === o && (r ? tr(o, Zr) : (o.f & Nn) !== 0 && tr(o, Aa), oi(o));
    }
  }
  function qc(n) {
    var t, r, a = Kn, l = lr, o = fr, c = Gt, s = fa, i = br, u = on, g = Cr, b = Ir, h = n.f;
    Kn = null, lr = 0, fr = null, fa = (h & wr) !== 0 && (Cr || !ui || Gt === null), Gt = 96 & h ? null : n, br = null, ni(n.ctx), Cr = !1, Ir = ++Ui, n.ac !== null && (Gl(() => {
      n.ac.abort(Cs);
    }), n.ac = null);
    try {
      n.f |= Bs;
      var v = (0, n.fn)(), _ = n.deps;
      if (Kn !== null) {
        var f;
        if (Ll(n, lr), _ !== null && lr > 0) for (_.length = lr + Kn.length, f = 0; f < Kn.length; f++) _[lr + f] = Kn[f];
        else n.deps = _ = Kn;
        if (!fa || 2 & h && n.reactions !== null) for (f = lr; f < _.length; f++) ((r = (t = _[f]).reactions) != null ? r : t.reactions = []).push(n);
      } else _ !== null && lr < _.length && (Ll(n, lr), _.length = lr);
      if (ii() && fr !== null && !Cr && _ !== null && !(6146 & n.f)) for (f = 0; f < fr.length; f++) Tc(fr[f], n);
      return c !== null && c !== n && (Ui++, fr !== null && (o === null ? o = fr : o.push(...fr))), (n.f & Va) !== 0 && (n.f ^= Va), v;
    } catch (x) {
      return rc(x);
    } finally {
      n.f ^= Bs, Kn = a, lr = l, fr = o, Gt = c, fa = s, br = i, ni(u), Cr = g, Ir = b;
    }
  }
  function Dg(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = bg.call(r, n);
      if (a !== -1) {
        var l = r.length - 1;
        l === 0 ? r = t.reactions = null : (r[a] = r[l], r.pop());
      }
    }
    r === null && 2 & t.f && (Kn === null || !Kn.includes(t)) && (tr(t, Aa), 768 & t.f || (t.f ^= Ps), uc(t), Ll(t, 0));
  }
  function Ll(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) Dg(n, r[a]);
  }
  function di(n) {
    var t = n.f;
    if ((t & Xa) === 0) {
      tr(n, Nn);
      var r = Vt, a = ui;
      Vt = n, ui = !0;
      try {
        (t & Li) !== 0 ? (function(o) {
          for (var c = o.first; c !== null; ) {
            var s = c.next;
            (c.f & $l) === 0 && Gn(c), c = s;
          }
        })(n) : Pc(n), wc(n);
        var l = qc(n);
        n.teardown = typeof l == "function" ? l : null, n.wv = Dc;
      } finally {
        ui = a, Vt = r;
      }
    }
  }
  async function qs() {
    await Promise.resolve(), k();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (Gt === null || Cr) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, l = a.parent;
        l !== null && (l.f & wr) === 0 && (a.f ^= wr);
      }
    } else if (!(Vt !== null && (Vt.f & Xa) !== 0) && !(br != null && br.includes(n))) {
      var o = Gt.deps;
      if ((Gt.f & Bs) !== 0) n.rv < Ui && (n.rv = Ui, Kn === null && o !== null && o[lr] === n ? lr++ : Kn === null ? Kn = [n] : fa && Kn.includes(n) || Kn.push(n));
      else {
        ((t = Gt.deps) != null ? t : Gt.deps = []).push(n);
        var c = n.reactions;
        c === null ? n.reactions = [Gt] : c.includes(Gt) || c.push(Gt);
      }
    }
    if (Oa) {
      if (ba.has(n)) return ba.get(n);
      if (r) {
        var s = (a = n).v;
        return ((a.f & Nn) === 0 && a.reactions !== null || Gc(a)) && (s = $s(a)), ba.set(a, s), s;
      }
    } else r && Fl(a = n) && dc(a);
    if ((n.f & Va) !== 0) throw n.v;
    return n.v;
  }
  function Gc(n) {
    if (n.v === An) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (ba.has(t) || 2 & t.f && Gc(t)) return !0;
    return !1;
  }
  function nn(n) {
    var t = Cr;
    try {
      return Cr = !0, n();
    } finally {
      Cr = t;
    }
  }
  const Ag = -7169;
  function tr(n, t) {
    n.f = n.f & Ag | t;
  }
  function Oc(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if (Jr in n) Gs(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && Jr in r && Gs(r);
      }
    }
  }
  function Gs(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        Gs(n[a], t);
      } catch {
      }
      const r = Ml(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = No(r);
        for (let l in a) {
          const o = a[l].get;
          if (o) try {
            o.call(n);
          } catch {
          }
        }
      }
    }
  }
  const Fc = /* @__PURE__ */ new Set(), Os = /* @__PURE__ */ new Set();
  function Fs(n, t, r, a = {}) {
    function l(o) {
      if (a.capture || Hi.call(t, o), !o.cancelBubble) return Gl(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ta(() => {
      t.addEventListener(n, l, a);
    }) : t.addEventListener(n, l, a), l;
  }
  function jl(n, t, r, a, l) {
    var o = { capture: a, passive: l }, c = Fs(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Vs(() => {
      t.removeEventListener(n, c, o);
    });
  }
  function On(n) {
    for (var t = 0; t < n.length; t++) Fc.add(n[t]);
    for (var r of Os) r(n);
  }
  let Lc = null;
  function Hi(n) {
    var t, r = this, a = r.ownerDocument, l = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], c = o[0] || n.target;
    Lc = n;
    var s = 0, i = Lc === n && n.__root;
    if (i) {
      var u = o.indexOf(i);
      if (u !== -1 && (r === document || r === window)) return void (n.__root = r);
      var g = o.indexOf(r);
      if (g === -1) return;
      u <= g && (s = u);
    }
    if ((c = o[s] || n.target) !== r) {
      $a(n, "currentTarget", { configurable: !0, get: () => c || a });
      var b = Gt, h = Vt;
      Qn(null), Tr(null);
      try {
        for (var v, _ = []; c !== null; ) {
          var f = c.assignedSlot || c.parentNode || c.host || null;
          try {
            var x = c["__" + l];
            if (x != null && (!c.disabled || n.target === c)) if (Fi(x)) {
              var [D, ...w] = x;
              D.apply(c, [n, ...w]);
            } else x.call(c, n);
          } catch (I) {
            v ? _.push(I) : v = I;
          }
          if (n.cancelBubble || f === r || f === null) break;
          c = f;
        }
        if (v) {
          for (let I of _) queueMicrotask(() => {
            throw I;
          });
          throw v;
        }
      } finally {
        n.__root = r, delete n.currentTarget, Qn(b), Tr(h);
      }
    }
  }
  function Ls(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function nr(n, t) {
    var r = Vt;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function $(n, t) {
    var r, a = !!(1 & t), l = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (ht) return nr(Pt, null), Pt;
      r === void 0 && (r = Ls(o ? n : "<!>" + n), a || (r = jn(r)));
      var c = l || bc ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? nr(jn(c), c.lastChild) : nr(c, c), c;
    };
  }
  function Vg(n, t, r = "svg") {
    var a, l = !n.startsWith("<!>"), o = !!(1 & t), c = `<${r}>${l ? n : "<!>" + n}</${r}>`;
    return () => {
      if (ht) return nr(Pt, null), Pt;
      if (!a) {
        var s = jn(Ls(c));
        if (o) for (a = document.createDocumentFragment(); jn(s); ) a.appendChild(jn(s));
        else a = jn(s);
      }
      var i = a.cloneNode(!0);
      return o ? nr(jn(i), i.lastChild) : nr(i, i), i;
    };
  }
  function Tn(n, t) {
    return Vg(n, t, "svg");
  }
  function Wn(n = "") {
    if (!ht) {
      var t = Pr(n + "");
      return nr(t, t), t;
    }
    var r = Pt;
    return r.nodeType !== 3 && (r.before(r = Pr()), Vn(r)), nr(r, r), r;
  }
  function Ie() {
    if (ht) return nr(Pt, null), Pt;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = Pr();
    return n.append(t, r), nr(t, r), n;
  }
  function p(n, t) {
    if (ht) return Vt.nodes_end = Pt, void hr();
    n !== null && n.before(t);
  }
  function Tg(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const qg = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function Gg(n) {
    return qg.includes(n);
  }
  const Og = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function Fg(n) {
    var t;
    return n = n.toLowerCase(), (t = Og[n]) != null ? t : n;
  }
  const Lg = ["touchstart", "touchmove"];
  function jg(n) {
    return Lg.includes(n);
  }
  const Eg = ["textarea", "script", "style", "title"];
  function ft(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function jc(n, t) {
    return Ec(n, t);
  }
  function Rg(n, t) {
    var r;
    As(), t.intro = (r = t.intro) != null && r;
    const a = t.target, l = ht, o = Pt;
    try {
      for (var c = jn(a); c && (c.nodeType !== 8 || c.data !== "["); ) c = Sr(c);
      if (!c) throw za;
      Yn(!0), Vn(c);
      const s = Ec(n, { ...t, anchor: c });
      return Yn(!1), s;
    } catch (s) {
      if (s instanceof Error && s.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw s;
      return s !== za && console.warn("Failed to hydrate: ", s), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), As(), _c(a), Yn(!1), jc(n, t);
    } finally {
      Yn(l), Vn(o);
    }
  }
  const gi = /* @__PURE__ */ new Map();
  function Ec(n, { target: t, anchor: r, props: a = {}, events: l, context: o, intro: c = !0 }) {
    As();
    var s = /* @__PURE__ */ new Set(), i = (b) => {
      for (var h = 0; h < b.length; h++) {
        var v = b[h];
        if (!s.has(v)) {
          s.add(v);
          var _ = jg(v);
          t.addEventListener(v, Hi, { passive: _ });
          var f = gi.get(v);
          f === void 0 ? (document.addEventListener(v, Hi, { passive: _ }), gi.set(v, 1)) : gi.set(v, f + 1);
        }
      }
    };
    i(ws(Fc)), Os.add(i);
    var u = void 0, g = (function(b) {
      Ga.ensure();
      const h = Br(524352, b, !0);
      return (v = {}) => new Promise((_) => {
        v.outro ? Xr(h, () => {
          Gn(h), _(void 0);
        }) : (Gn(h), _(void 0));
      });
    })(() => {
      var b = r != null ? r : t.appendChild(Pr());
      return (function(h, v, _) {
        new Ig(h, v, _);
      })(b, { pending: () => {
      } }, (h) => {
        if (o && (Ke({}), on.c = o), l && (a.$$events = l), ht && nr(h, null), u = n(h, a) || {}, ht && (Vt.nodes_end = Pt, Pt === null || Pt.nodeType !== 8 || Pt.data !== "]")) throw ji(), za;
        o && Xe();
      }), () => {
        var h;
        for (var v of s) {
          t.removeEventListener(v, Hi);
          var _ = gi.get(v);
          --_ === 0 ? (document.removeEventListener(v, Hi), gi.delete(v)) : gi.set(v, _);
        }
        Os.delete(i), b !== r && ((h = b.parentNode) == null || h.removeChild(b));
      };
    });
    return js.set(u, g), u;
  }
  let js = /* @__PURE__ */ new WeakMap();
  function El(n, t, ...r) {
    var a, l = n, o = yr;
    Kr(() => {
      o !== (o = t()) && (a && (Gn(a), a = null), a = qn(() => o(l, ...r)));
    }, ei), ht && (l = Pt);
  }
  function Fa(n) {
    var t, r, a;
    on === null && Jo(), ti && on.l !== null ? (t = on, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : Je(() => {
      const l = nn(n);
      if (typeof l == "function") return l;
    });
  }
  function O(n, t, r = !1) {
    ht && hr();
    var a = n, l = null, o = null, c = An, s = !1;
    const i = (b, h = !0) => {
      s = !0, g(h, b);
    };
    function u() {
      var b = c ? l : o, h = c ? o : l;
      b && Ol(b), h && Xr(h, () => {
        c ? o = null : l = null;
      });
    }
    const g = (b, h) => {
      if (c === (c = b)) return;
      let v = !1;
      if (ht) {
        const f = Yo(a) === Cl;
        !!c === f && (Vn(a = Dl()), Yn(!1), v = !0);
      }
      var _ = a;
      c ? l != null || (l = h && qn(() => h(_))) : o != null || (o = h && qn(() => h(_))), u(), v && Yn(!0);
    };
    Kr(() => {
      s = !1, t(i), s || g(null, null);
    }, r ? ei : 0), ht && (a = Pt);
  }
  function at(n, t, r) {
    ht && hr();
    var a, l, o = n, c = An, s = ii() ? xg : Al;
    function i() {
      a && Xr(a), a = l;
    }
    Kr(() => {
      if (s(c, c = t())) {
        var u = o;
        l = qn(() => r(u)), i();
      }
    }), ht && (o = Pt);
  }
  function Mr(n, t) {
    return t;
  }
  function Dt(n, t, r, a, l, o = null) {
    var c = n, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      c = ht ? Vn(jn(i)) : i.appendChild(Pr());
    }
    ht && hr();
    var u, g, b = null, h = !1, v = /* @__PURE__ */ new Map(), _ = ql(() => {
      var x = r();
      return Fi(x) ? x : x == null ? [] : ws(x);
    });
    function f() {
      (function(x, D, w, I, L, Q, R, K, C) {
        var ne, A, E, oe, J, U, M, B, j, N, H = !!(8 & R), X = !!(3 & R), V = D.length, Z = w.items, q = w.first, W = q, te = null, de = [], F = [];
        if (H) for (N = 0; N < V; N += 1) B = K(M = D[N], N), (j = Z.get(B)) !== void 0 && ((ne = j.a) == null || ne.measure(), (U != null ? U : U = /* @__PURE__ */ new Set()).add(j));
        for (N = 0; N < V; N += 1) if (B = K(M = D[N], N), (j = Z.get(B)) !== void 0) {
          if (X && Ng(j, M, N, R), (j.e.f & Vr) !== 0 && (Ol(j.e), H && ((A = j.a) == null || A.unfix(), (U != null ? U : U = /* @__PURE__ */ new Set()).delete(j))), j !== W) {
            if (J !== void 0 && J.has(j)) {
              if (de.length < F.length) {
                var P, z = F[0];
                te = z.prev;
                var ae = de[0], T = de[de.length - 1];
                for (P = 0; P < de.length; P += 1) Es(de[P], z, L);
                for (P = 0; P < F.length; P += 1) J.delete(F[P]);
                qr(w, ae.prev, T.next), qr(w, te, ae), qr(w, T, z), W = z, te = T, N -= 1, de = [], F = [];
              } else J.delete(j), Es(j, W, L), qr(w, j.prev, j.next), qr(w, j, te === null ? w.first : te.next), qr(w, te, j), te = j;
              continue;
            }
            for (de = [], F = []; W !== null && W.k !== B; ) (W.e.f & Vr) === 0 && (J != null ? J : J = /* @__PURE__ */ new Set()).add(W), F.push(W), W = W.next;
            if (W === null) continue;
            j = W;
          }
          de.push(j), te = j, W = j.next;
        } else {
          var ee = I.get(B);
          if (ee !== void 0) {
            I.delete(B), Z.set(B, ee);
            var Y = te ? te.next : W;
            qr(w, te, ee), qr(w, ee, Y), Es(ee, Y, L), te = ee;
          } else
            te = Rc(W ? W.e.nodes_start : L, w, te, te === null ? w.first : te.next, M, B, N, Q, R, C);
          Z.set(B, te), de = [], F = [], W = te.next;
        }
        if (W !== null || J !== void 0) {
          for (var le = J === void 0 ? [] : ws(J); W !== null; ) (W.e.f & Vr) === 0 && le.push(W), W = W.next;
          var fe = le.length;
          if (fe > 0) {
            var Be = 4 & R && V === 0 ? L : null;
            if (H) {
              for (N = 0; N < fe; N += 1) (E = le[N].a) == null || E.measure();
              for (N = 0; N < fe; N += 1) (oe = le[N].a) == null || oe.fix();
            }
            (function(xe, ge, ce) {
              for (var re = xe.items, he = [], ye = ge.length, Ae = 0; Ae < ye; Ae++) Ts(ge[Ae].e, he, !0);
              var Oe = ye > 0 && he.length === 0 && ce !== null;
              if (Oe) {
                var Ve = ce.parentNode;
                _c(Ve), Ve.append(ce), re.clear(), qr(xe, ge[0].prev, ge[ye - 1].next);
              }
              Cc(he, () => {
                for (var ie = 0; ie < ye; ie++) {
                  var we = ge[ie];
                  Oe || (re.delete(we.k), qr(xe, we.prev, we.next)), Gn(we.e, !Oe);
                }
              });
            })(w, le, Be);
          }
        }
        H && Ta(() => {
          var xe;
          if (U !== void 0) for (j of U) (xe = j.a) == null || xe.apply();
        });
        for (var ke of (x.first = w.first && w.first.e, x.last = te && te.e, I.values())) Gn(ke.e);
        I.clear();
      })(g, u, s, v, c, l, t, a, r), o !== null && (u.length === 0 ? b ? Ol(b) : b = qn(() => o(c)) : b !== null && Xr(b, () => {
        b = null;
      }));
    }
    Kr(() => {
      g != null || (g = Vt);
      var x = (u = e(_)).length;
      if (h && x === 0) return;
      h = x === 0;
      let D = !1;
      if (ht && Yo(c) === Cl != (x === 0) && (Vn(c = Dl()), Yn(!1), D = !0), ht) {
        for (var w, I = null, L = 0; L < x; L++) {
          if (Pt.nodeType === 8 && Pt.data === "]") {
            c = Pt, D = !0, Yn(!1);
            break;
          }
          var Q = u[L], R = a(Q, L);
          w = Rc(Pt, s, I, null, Q, R, L, l, t, r), s.items.set(R, w), I = w;
        }
        x > 0 && Vn(Dl());
      }
      ht ? x === 0 && o && (b = qn(() => o(c))) : f(), D && Yn(!0), e(_);
    }), ht && (c = Pt);
  }
  function Ng(n, t, r, a) {
    1 & a && ci(n.v, t), 2 & a ? ci(n.i, r) : n.i = r;
  }
  function Rc(n, t, r, a, l, o, c, s, i, u, g) {
    var b = 1 & i ? 16 & i ? Yr(l) : Ds(l, !1, !1) : l, h = 2 & i ? Yr(c) : c, v = { i: h, v: b, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = Pr()), v.e = qn(() => s(n, b, h, u), ht), v.e.prev = r && r.e, v.e.next = a && a.e, r === null ? g || (t.first = v) : (r.next = v, r.e.next = v.e), a !== null && (a.prev = v, a.e.prev = v.e), v;
    } finally {
    }
  }
  function Es(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, l = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var c = Sr(o);
      l.before(o), o = c;
    }
  }
  function qr(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Te(n, t, r = !1, a = !1, l = !1) {
    var o = n, c = "";
    be(() => {
      var s, i = Vt;
      if (c !== (c = (s = t()) != null ? s : "")) {
        if (i.nodes_start !== null && (Sc(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), c !== "") {
          if (ht) {
            Pt.data;
            for (var u = hr(), g = u; u !== null && (u.nodeType !== 8 || u.data !== ""); ) g = u, u = Sr(u);
            if (u === null) throw ji(), za;
            return nr(Pt, g), void (o = Vn(u));
          }
          var b = c + "";
          r ? b = `<svg>${b}</svg>` : a && (b = `<math>${b}</math>`);
          var h = Ls(b);
          if ((r || a) && (h = jn(h)), nr(jn(h), h.lastChild), r || a) for (; jn(h); ) o.before(jn(h));
          else o.before(h);
        }
      } else ht && hr();
    });
  }
  function Nc(n, t, r, a, l) {
    var o;
    ht && hr();
    var c = (o = t.$$slots) == null ? void 0 : o[r], s = !1;
    c === !0 && (c = t.children, s = !0), c === void 0 || c(n, s ? () => a : a);
  }
  function Qc(n, t, r) {
    ht && hr();
    var a, l, o = n, c = null;
    function s() {
      l && (Xr(l), l = null), l = c, c = null;
    }
    Kr(() => {
      if (a !== (a = t())) {
        if (a) {
          var i = o;
          c = qn(() => r(i, a));
        }
        s();
      }
    }, ei), ht && (o = Pt);
  }
  function Wc(n, t, r, a, l, o) {
    let c = ht;
    var s, i;
    ht && hr();
    var u = null;
    ht && Pt.nodeType === 1 && (u = Pt, hr());
    var g, b = ht ? Pt : n;
    Kr(() => {
      const h = t() || null;
      var v = h === "svg" ? "http://www.w3.org/2000/svg" : null;
      h !== s && (g && (h === null ? Xr(g, () => {
        g = null, i = null;
      }) : h === i ? Ol(g) : Gn(g)), h && h !== i && (g = qn(() => {
        if (nr(u = ht ? u : v ? document.createElementNS(v, h) : document.createElement(h), u), a) {
          ht && (f = h, Eg.includes(f)) && u.append(document.createComment(""));
          var _ = ht ? jn(u) : u.appendChild(Pr());
          ht && (_ === null ? Yn(!1) : Vn(_)), a(u, _);
        }
        var f;
        Vt.nodes_end = u, b.before(u);
      })), (s = h) && (i = s));
    }, ei), c && (Yn(!0), Vn(b));
  }
  function Rs(n, t, r) {
    Qi(() => {
      var a = nn(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var l = !1, o = {};
        Wi(() => {
          var c = r();
          Oc(c), l && Al(o, c) && (o = c, a.update(c));
        }), l = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function Qg(n, t) {
    var r, a = void 0;
    Kr(() => {
      a !== (a = t()) && (r && (Gn(r), r = null), a && (r = qn(() => {
        Qi(() => a(n));
      })));
    });
  }
  function Uc(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var l = n.length;
      for (t = 0; t < l; t++) n[t] && (r = Uc(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function Zi(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, l = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = Uc(t)) && (l && (l += " "), l += r);
      return l;
    })(n) : n != null ? n : "";
  }
  const Hc = [...` 	
\r\f \v\uFEFF`];
  function Zc(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var l in n) {
      var o = n[l];
      o != null && o !== "" && (a += " " + l + ": " + o + r);
    }
    return a;
  }
  function Ns(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function Lt(n, t, r, a, l, o) {
    var c = n.__className;
    if (ht || c !== r || c === void 0) {
      var s = (function(g, b, h) {
        var v = g == null ? "" : "" + g;
        if (b && (v = v ? v + " " + b : b), h) {
          for (var _ in h) if (h[_]) v = v ? v + " " + _ : _;
          else if (v.length) for (var f = _.length, x = 0; (x = v.indexOf(_, x)) >= 0; ) {
            var D = x + f;
            x !== 0 && !Hc.includes(v[x - 1]) || D !== v.length && !Hc.includes(v[D]) ? x = D : v = (x === 0 ? "" : v.substring(0, x)) + v.substring(D + 1);
          }
        }
        return v === "" ? null : v;
      })(r, a, o);
      ht && s === n.getAttribute("class") || (s == null ? n.removeAttribute("class") : t ? n.className = s : n.setAttribute("class", s)), n.__className = r;
    } else if (o && l !== o) for (var i in o) {
      var u = !!o[i];
      l != null && u === !!l[i] || n.classList.toggle(i, u);
    }
    return o;
  }
  function Qs(n, t = {}, r, a) {
    for (var l in r) {
      var o = r[l];
      t[l] !== o && (r[l] == null ? n.style.removeProperty(l) : n.style.setProperty(l, o, a));
    }
  }
  function Tt(n, t, r, a) {
    var l = n.__style;
    if (ht || l !== t) {
      var o = (function(c, s) {
        if (s) {
          var i, u, g = "";
          if (Array.isArray(s) ? (i = s[0], u = s[1]) : i = s, c) {
            c = String(c).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var b = !1, h = 0, v = !1, _ = [];
            i && _.push(...Object.keys(i).map(Ns)), u && _.push(...Object.keys(u).map(Ns));
            var f = 0, x = -1;
            const L = c.length;
            for (var D = 0; D < L; D++) {
              var w = c[D];
              if (v ? w === "/" && c[D - 1] === "*" && (v = !1) : b ? b === w && (b = !1) : w === "/" && c[D + 1] === "*" ? v = !0 : w === '"' || w === "'" ? b = w : w === "(" ? h++ : w === ")" && h--, !v && b === !1 && h === 0) {
                if (w === ":" && x === -1) x = D;
                else if (w === ";" || D === L - 1) {
                  if (x !== -1) {
                    var I = Ns(c.substring(f, x).trim());
                    _.includes(I) || (w !== ";" && D++, g += " " + c.substring(f, D).trim() + ";");
                  }
                  f = D + 1, x = -1;
                }
              }
            }
          }
          return i && (g += Zc(i)), u && (g += Zc(u, !0)), (g = g.trim()) === "" ? null : g;
        }
        return c == null ? null : String(c);
      })(t, a);
      ht && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (Qs(n, r == null ? void 0 : r[0], a[0]), Qs(n, r == null ? void 0 : r[1], a[1], "important")) : Qs(n, r, a));
    return a;
  }
  function Ji(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!Fi(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(Jc(a));
    } else {
      for (a of n.options)
        if (zg(Jc(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function Ws(n) {
    var t = new MutationObserver(() => {
      Ji(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), Vs(() => {
      t.disconnect();
    });
  }
  function Jc(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const hi = Symbol("class"), pi = Symbol("style"), Yc = Symbol("is custom element"), Kc = Symbol("is html");
  function ea(n) {
    if (ht) {
      var t, r = !1, a = () => {
        if (!r) {
          if (r = !0, n.hasAttribute("value")) {
            var l = n.value;
            Pe(n, "value", null), n.value = l;
          }
          if (n.hasAttribute("checked")) {
            var o = n.checked;
            Pe(n, "checked", null), n.checked = o;
          }
        }
      };
      n.__on_r = a, t = a, li.length === 0 && wg(nc), li.push(t), mc();
    }
  }
  function La(n, t) {
    var r = Rl(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function Yi(n, t) {
    var r = Rl(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function Wg(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function Pe(n, t, r, a) {
    var l = Rl(n);
    ht && (l[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (n[mg] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && tu(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function Xc(n, t, r = [], a = [], l, o = !1, c = !1) {
    oc(r, a, (s) => {
      var i = void 0, u = {}, g = n.nodeName === "SELECT", b = !1;
      if (Kr(() => {
        var v = t(...s.map(e)), _ = (function(x, D, w, I, L = !1) {
          if (ht && L && x.tagName === "INPUT") {
            var Q = x;
            (Q.type === "checkbox" ? "defaultChecked" : "defaultValue") in w || ea(Q);
          }
          var R = Rl(x), K = R[Yc], C = !R[Kc];
          let ne = ht && K;
          ne && Yn(!1);
          var A = D || {}, E = x.tagName === "OPTION";
          for (var oe in D) oe in w || (w[oe] = null);
          w.class ? w.class = Zi(w.class) : w[hi] && (w.class = null), w[pi] && (w.style != null || (w.style = null));
          var J = tu(x);
          for (const H in w) {
            let X = w[H];
            if (E && H === "value" && X == null) x.value = x.__value = "", A[H] = X;
            else if (H !== "class") if (H !== "style") {
              var U = A[H];
              if (X !== U || X === void 0 && x.hasAttribute(H)) {
                A[H] = X;
                var M = H[0] + H[1];
                if (M !== "$$") if (M === "on") {
                  const V = {}, Z = "$$" + H;
                  let q = H.slice(2);
                  var B = Gg(q);
                  if (Tg(q) && (q = q.slice(0, -7), V.capture = !0), !B && U) {
                    if (X != null) continue;
                    x.removeEventListener(q, A[Z], V), A[Z] = null;
                  }
                  if (X != null) if (B) x[`__${q}`] = X, On([q]);
                  else {
                    let W = function(te) {
                      A[H].call(this, te);
                    };
                    A[Z] = Fs(q, x, W, V);
                  }
                  else B && (x[`__${q}`] = void 0);
                } else if (H === "style") Pe(x, H, X);
                else if (H === "autofocus") $g(x, !!X);
                else if (K || H !== "__value" && (H !== "value" || X == null)) if (H === "selected" && E) Wg(x, X);
                else {
                  var j = H;
                  C || (j = Fg(j));
                  var N = j === "defaultValue" || j === "defaultChecked";
                  if (X != null || K || N) N || J.includes(j) && (K || typeof X != "string") ? (x[j] = X, j in R && (R[j] = An)) : typeof X != "function" && Pe(x, j, X);
                  else if (R[H] = null, j === "value" || j === "checked") {
                    let V = x;
                    const Z = D === void 0;
                    if (j === "value") {
                      let q = V.defaultValue;
                      V.removeAttribute(j), V.defaultValue = q, V.value = V.__value = Z ? q : null;
                    } else {
                      let q = V.defaultChecked;
                      V.removeAttribute(j), V.defaultChecked = q, V.checked = !!Z && q;
                    }
                  } else x.removeAttribute(H);
                }
                else x.value = x.__value = X;
              }
            } else Tt(x, X, D == null ? void 0 : D[pi], w[pi]), A[H] = X, A[pi] = w[pi];
            else Lt(x, x.namespaceURI === "http://www.w3.org/1999/xhtml", X, I, D == null ? void 0 : D[hi], w[hi]), A[H] = X, A[hi] = w[hi];
          }
          return ne && Yn(!0), A;
        })(n, i, v, l, o, c);
        b && g && "value" in v && Ji(n, v.value);
        for (let x of Object.getOwnPropertySymbols(u)) v[x] || Gn(u[x]);
        for (let x of Object.getOwnPropertySymbols(v)) {
          var f = v[x];
          x.description !== "@attach" || i && f === i[x] || (u[x] && Gn(u[x]), u[x] = qn(() => Qg(n, () => f))), _[x] = f;
        }
        i = _;
      }), g) {
        var h = n;
        Qi(() => {
          Ji(h, i.value, !0), Ws(h);
        });
      }
      b = !0;
    });
  }
  function Rl(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [Yc]: n.nodeName.includes("-"), [Kc]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var eu = /* @__PURE__ */ new Map();
  function tu(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = eu.get(r);
    if (a) return a;
    eu.set(r, a = []);
    for (var l = n, o = Element.prototype; o !== l; ) {
      for (var c in t = No(l)) t[c].set && a.push(c);
      l = Ml(l);
    }
    return a;
  }
  function Ug(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(l, o, c, s = c) {
      l.addEventListener(o, () => Gl(c));
      const i = l.__on_r;
      l.__on_r = i ? () => {
        i(), s(!0);
      } : () => s(!0), mc();
    })(n, "input", async (l) => {
      var o = l ? n.defaultValue : n.value;
      if (o = Us(n) ? Hs(o) : o, r(o), vn !== null && a.add(vn), await qs(), o !== (o = t())) {
        var c = n.selectionStart, s = n.selectionEnd;
        n.value = o != null ? o : "", s !== null && (n.selectionStart = c, n.selectionEnd = Math.min(s, n.value.length));
      }
    }), (ht && n.defaultValue !== n.value || nn(t) == null && n.value) && (r(Us(n) ? Hs(n.value) : n.value), vn !== null && a.add(vn)), Wi(() => {
      var l = t();
      if (n === document.activeElement) {
        var o = Ei != null ? Ei : vn;
        if (a.has(o)) return;
      }
      Us(n) && l === Hs(n.value) || (n.type !== "date" || l || n.value) && l !== n.value && (n.value = l != null ? l : "");
    });
  }
  function Us(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function Hs(n) {
    return n === "" ? null : +n;
  }
  const Zs = class {
    constructor(n) {
      mt(this, _s), mt(this, Ia, /* @__PURE__ */ new WeakMap()), mt(this, Ti), mt(this, xl), xt(this, xl, n);
    }
    observe(n, t) {
      var r = me(this, Ia).get(n) || /* @__PURE__ */ new Set();
      return r.add(t), me(this, Ia).set(n, r), ln(this, _s, Lo).call(this).observe(n, me(this, xl)), () => {
        var a = me(this, Ia).get(n);
        a.delete(t), a.size === 0 && (me(this, Ia).delete(n), me(this, Ti).unobserve(n));
      };
    }
  };
  Ia = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakSet(), Lo = function() {
    var n;
    return (n = me(this, Ti)) != null ? n : xt(this, Ti, new ResizeObserver((t) => {
      for (var r of t) for (var a of (Zs.entries.set(r.target, r), me(this, Ia).get(r.target) || [])) a(r);
    }));
  }, wn(Zs, "entries", /* @__PURE__ */ new WeakMap());
  var Hg = new Zs({ box: "border-box" });
  function Nl(n, t, r) {
    var a = Hg.observe(n, () => r(n[t]));
    Qi(() => (nn(() => r(n[t])), a));
  }
  function nu(n, t) {
    return n === t || (n == null ? void 0 : n[Jr]) === t;
  }
  function bi(n = {}, t, r, a) {
    return Qi(() => {
      var l, o;
      return Wi(() => {
        l = o, o = [], nn(() => {
          n !== r(...o) && (t(n, ...o), l && nu(r(...l), n) && t(null, ...l));
        });
      }), () => {
        Ta(() => {
          o && nu(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function ru(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function au(n, t, r) {
    if (n == null) return t(void 0), yr;
    const a = nn(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const fi = [];
  function ta(n, t = yr) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function l(c) {
      if (Al(n, c) && (n = c, r)) {
        const s = !fi.length;
        for (const i of a) i[1](), fi.push(i, n);
        if (s) {
          for (let i = 0; i < fi.length; i += 2) fi[i][0](fi[i + 1]);
          fi.length = 0;
        }
      }
    }
    function o(c) {
      l(c(n));
    }
    return { set: l, update: o, subscribe: function(c, s = yr) {
      const i = [c, s];
      return a.add(i), a.size === 1 && (r = t(l, o) || yr), c(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let iu, Ql = !1, Js = Symbol();
  function $e(n, t, r) {
    var a;
    const l = (a = r[t]) != null ? a : r[t] = { store: null, source: Ds(void 0), unsubscribe: yr };
    if (l.store !== n && !(Js in r)) if (l.unsubscribe(), l.store = n != null ? n : null, n == null) l.source.v = void 0, l.unsubscribe = yr;
    else {
      var o = !0;
      l.unsubscribe = au(n, (c) => {
        o ? l.source.v = c : se(l.source, c);
      }), o = !1;
    }
    return n && Js in r ? (function(c) {
      let s;
      return au(c, (i) => s = i)(), s;
    })(n) : e(l.source);
  }
  function vt() {
    const n = {};
    return [n, function() {
      Vs(() => {
        for (var t in n)
          n[t].unsubscribe();
        $a(n, Js, { enumerable: !1, value: !0 });
      });
    }];
  }
  function m(n, t, r, a) {
    var l, o, c, s, i = !ti || !!(2 & r), u = !!(8 & r), g = !!(16 & r), b = a, h = !0, v = () => (h && (h = !1, b = g ? nn(a) : a), b);
    if (u) {
      var _ = Jr in n || Zo in n;
      c = (o = (l = Da(n, t)) == null ? void 0 : l.set) != null ? o : _ && t in n ? (Q) => n[t] = Q : void 0;
    }
    var f, x = !1;
    if (u ? [s, x] = (function(Q) {
      var R = Ql;
      try {
        return Ql = !1, [Q(), Ql];
      } finally {
        Ql = R;
      }
    })(() => n[t]) : s = n[t], s === void 0 && a !== void 0 && (s = v(), c && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), c(s))), f = i ? () => {
      var Q = n[t];
      return Q === void 0 ? v() : (h = !0, Q);
    } : () => {
      var Q = n[t];
      return Q !== void 0 && (b = void 0), Q === void 0 ? b : Q;
    }, i && !(4 & r)) return f;
    if (c) {
      var D = n.$$legacy;
      return function(Q, R) {
        return arguments.length > 0 ? (i && R && !D && !x || c(R ? f() : Q), Q) : f();
      };
    }
    var w = !1, I = (1 & r ? Ni : ql)(() => (w = !1, f()));
    u && e(I);
    var L = Vt;
    return function(Q, R) {
      if (arguments.length > 0) {
        const K = R ? e(I) : i && u ? st(Q) : Q;
        return se(I, K), w = !0, b !== void 0 && (b = K), Q;
      }
      return Oa && w || (L.f & Xa) !== 0 ? I.v : e(I);
    };
  }
  class Zg {
    constructor(t) {
      var r, a;
      mt(this, ca), mt(this, xr);
      var l = /* @__PURE__ */ new Map(), o = (s, i) => {
        var u = Ds(i, !1, !1);
        return l.set(s, u), u;
      };
      const c = new Proxy({ ...t.props || {}, $$events: {} }, { get(s, i) {
        var u;
        return e((u = l.get(i)) != null ? u : o(i, Reflect.get(s, i)));
      }, has(s, i) {
        var u;
        return i === Zo || (e((u = l.get(i)) != null ? u : o(i, Reflect.get(s, i))), Reflect.has(s, i));
      }, set(s, i, u) {
        var g;
        return se((g = l.get(i)) != null ? g : o(i, u), u), Reflect.set(s, i, u);
      } });
      xt(this, xr, (t.hydrate ? Rg : jc)(t.component, { target: t.target, anchor: t.anchor, props: c, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || k(), xt(this, ca, c.$$events);
      for (const s of Object.keys(me(this, xr))) s !== "$set" && s !== "$destroy" && s !== "$on" && $a(this, s, { get() {
        return me(this, xr)[s];
      }, set(i) {
        me(this, xr)[s] = i;
      }, enumerable: !0 });
      me(this, xr).$set = (s) => {
        Object.assign(c, s);
      }, me(this, xr).$destroy = () => {
        (function(s, i) {
          const u = js.get(s);
          u ? (js.delete(s), u(i)) : Promise.resolve();
        })(me(this, xr));
      };
    }
    $set(t) {
      me(this, xr).$set(t);
    }
    $on(t, r) {
      me(this, ca)[t] = me(this, ca)[t] || [];
      const a = (...l) => r.call(this, ...l);
      return me(this, ca)[t].push(a), () => {
        me(this, ca)[t] = me(this, ca)[t].filter((l) => l !== a);
      };
    }
    $destroy() {
      me(this, xr).$destroy();
    }
  }
  function Wl(n, t, r, a) {
    var l;
    const o = (l = r[n]) == null ? void 0 : l.type;
    if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !r[n]) return t;
    if (a === "toAttribute") switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
    else switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return t != null ? +t : t;
    }
  }
  function Qe(n, t, r, a, l, o) {
    let c = class extends iu {
      constructor() {
        super(n, r, l), this.$$p_d = t;
      }
      static get observedAttributes() {
        return Il(t).map((s) => (t[s].attribute || s).toLowerCase());
      }
    };
    return Il(t).forEach((s) => {
      $a(c.prototype, s, { get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      }, set(i) {
        var u;
        i = Wl(s, i, t), this.$$d[s] = i;
        var g = this.$$c;
        g && ((u = Da(g, s)) != null && u.get ? g[s] = i : g.$set({ [s]: i }));
      } });
    }), a.forEach((s) => {
      $a(c.prototype, s, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[s];
      } });
    }), o && (c = o(c)), n.element = c, c;
  }
  ca = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (iu = class extends HTMLElement {
    constructor(n, t, r) {
      super(), wn(this, "$$ctor"), wn(this, "$$s"), wn(this, "$$c"), wn(this, "$$cn", !1), wn(this, "$$d", {}), wn(this, "$$r", !1), wn(this, "$$p_d", {}), wn(this, "$$l", {}), wn(this, "$$l_u", /* @__PURE__ */ new Map()), wn(this, "$$me"), this.$$ctor = n, this.$$s = t, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(n, t, r) {
      if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(t), this.$$c) {
        const a = this.$$c.$on(n, t);
        this.$$l_u.set(t, a);
      }
      super.addEventListener(n, t, r);
    }
    removeEventListener(n, t, r) {
      if (super.removeEventListener(n, t, r), this.$$c) {
        const a = this.$$l_u.get(t);
        a && (a(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let t = function(l) {
          return (o) => {
            const c = document.createElement("slot");
            l !== "default" && (c.name = l), p(o, c);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        const r = {}, a = (function(l) {
          const o = {};
          return l.childNodes.forEach((c) => {
            o[c.slot || "default"] = !0;
          }), o;
        })(this);
        for (const l of this.$$s) l in a && (l !== "default" || this.$$d.children ? r[l] = t(l) : (this.$$d.children = t(l), r.default = !0));
        for (const l of this.attributes) {
          const o = this.$$g_p(l.name);
          o in this.$$d || (this.$$d[o] = Wl(o, l.value, this.$$p_d, "toProp"));
        }
        for (const l in this.$$p_d) l in this.$$d || this[l] === void 0 || (this.$$d[l] = this[l], delete this[l]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new Zg(n)), this.$$me = (function(l) {
          Ga.ensure();
          const o = Br(524352, l, !0);
          return () => {
            Gn(o);
          };
        })(() => {
          Wi(() => {
            var l;
            this.$$r = !0;
            for (const o of Il(this.$$c)) {
              if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const c = Wl(o, this.$$d[o], this.$$p_d, "toAttribute");
              c == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, c);
            }
            this.$$r = !1;
          });
        });
        for (const l in this.$$l) for (const o of this.$$l[l]) {
          const c = this.$$c.$on(l, o);
          this.$$l_u.set(o, c);
        }
        this.$$l = {};
      }
      var n;
    }
    attributeChangedCallback(n, t, r) {
      var a;
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = Wl(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return Il(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  const lu = "swatchSettings", Ki = (n) => {
    const t = ta(n);
    return ai(lu, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  }, su = () => {
    const n = ri(lu);
    if (!n) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
    return n;
  };
  var Jg = $("<span> </span>"), Yg = $("<div></div>");
  function na(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "product", 7), o = m(t, "class", 7, ""), c = su(), s = d(() => $e(c, "$swatchSettings", r).showSelectedSwatchName ? [] : l().options.map((v) => v.name));
    var i = { get product() {
      return l();
    }, set product(v) {
      l(v), k();
    }, get class() {
      return o();
    }, set class(v = "") {
      o(v), k();
    } }, u = Ie(), g = pe(u), b = (v) => {
      var _ = Yg();
      Dt(_, 21, () => e(s), Mr, (f, x) => {
        var D = Jg(), w = S(D, !0);
        y(D), be(() => ft(w, e(x))), p(f, D);
      }), y(_), be(() => Lt(_, 1, Zi(["kaching-bundles__bar-variant-names", o()]))), p(v, _);
    };
    O(g, (v) => {
      e(s).length && v(b);
    }), p(n, u);
    var h = Xe(i);
    return a(), h;
  }
  Qe(na, { product: {}, class: {} }, [], [], !0);
  const Ul = Math.min, ja = Math.max, Hl = Math.round, Zl = Math.floor, Gr = (n) => ({ x: n, y: n }), Kg = { left: "right", right: "left", bottom: "top", top: "bottom" }, Xg = { start: "end", end: "start" };
  function ou(n, t, r) {
    return ja(n, Ul(t, r));
  }
  function Jl(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function Ea(n) {
    return n.split("-")[0];
  }
  function Yl(n) {
    return n.split("-")[1];
  }
  function cu(n) {
    return n === "x" ? "y" : "x";
  }
  function uu(n) {
    return n === "y" ? "height" : "width";
  }
  const eh = /* @__PURE__ */ new Set(["top", "bottom"]);
  function va(n) {
    return eh.has(Ea(n)) ? "y" : "x";
  }
  function du(n) {
    return cu(va(n));
  }
  function Ys(n) {
    return n.replace(/start|end/g, (t) => Xg[t]);
  }
  const gu = ["left", "right"], hu = ["right", "left"], th = ["top", "bottom"], nh = ["bottom", "top"];
  function rh(n, t, r, a) {
    const l = Yl(n);
    let o = (function(c, s, i) {
      switch (c) {
        case "top":
        case "bottom":
          return i ? s ? hu : gu : s ? gu : hu;
        case "left":
        case "right":
          return s ? th : nh;
        default:
          return [];
      }
    })(Ea(n), r === "start", a);
    return l && (o = o.map((c) => c + "-" + l), t && (o = o.concat(o.map(Ys)))), o;
  }
  function Kl(n) {
    return n.replace(/left|right|bottom|top/g, (t) => Kg[t]);
  }
  function Xl(n) {
    const { x: t, y: r, width: a, height: l } = n;
    return { width: a, height: l, top: r, left: t, right: t + a, bottom: r + l, x: t, y: r };
  }
  function pu(n, t, r) {
    let { reference: a, floating: l } = n;
    const o = va(t), c = du(t), s = uu(c), i = Ea(t), u = o === "y", g = a.x + a.width / 2 - l.width / 2, b = a.y + a.height / 2 - l.height / 2, h = a[s] / 2 - l[s] / 2;
    let v;
    switch (i) {
      case "top":
        v = { x: g, y: a.y - l.height };
        break;
      case "bottom":
        v = { x: g, y: a.y + a.height };
        break;
      case "right":
        v = { x: a.x + a.width, y: b };
        break;
      case "left":
        v = { x: a.x - l.width, y: b };
        break;
      default:
        v = { x: a.x, y: a.y };
    }
    switch (Yl(t)) {
      case "start":
        v[c] -= h * (r && u ? -1 : 1);
        break;
      case "end":
        v[c] += h * (r && u ? -1 : 1);
    }
    return v;
  }
  async function bu(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: l, platform: o, rects: c, elements: s, strategy: i } = n, { boundary: u = "clippingAncestors", rootBoundary: g = "viewport", elementContext: b = "floating", altBoundary: h = !1, padding: v = 0 } = Jl(t, n), _ = (function(Q) {
      return typeof Q != "number" ? (function(R) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...R };
      })(Q) : { top: Q, right: Q, bottom: Q, left: Q };
    })(v), f = s[h ? b === "floating" ? "reference" : "floating" : b], x = Xl(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(f))) == null || r ? f : f.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: u, rootBoundary: g, strategy: i })), D = b === "floating" ? { x: a, y: l, width: c.floating.width, height: c.floating.height } : c.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), I = await (o.isElement == null ? void 0 : o.isElement(w)) && await (o.getScale == null ? void 0 : o.getScale(w)) || { x: 1, y: 1 }, L = Xl(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: D, offsetParent: w, strategy: i }) : D);
    return { top: (x.top - L.top + _.top) / I.y, bottom: (L.bottom - x.bottom + _.bottom) / I.y, left: (x.left - L.left + _.left) / I.x, right: (L.right - x.right + _.right) / I.x };
  }
  const ah = /* @__PURE__ */ new Set(["left", "top"]);
  function es() {
    return typeof window != "undefined";
  }
  function vi(n) {
    return fu(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function sr(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function Or(n) {
    var t;
    return (t = (fu(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function fu(n) {
    return !!es() && (n instanceof Node || n instanceof sr(n).Node);
  }
  function zr(n) {
    return !!es() && (n instanceof Element || n instanceof sr(n).Element);
  }
  function Fr(n) {
    return !!es() && (n instanceof HTMLElement || n instanceof sr(n).HTMLElement);
  }
  function vu(n) {
    return !(!es() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof sr(n).ShadowRoot);
  }
  const ih = /* @__PURE__ */ new Set(["inline", "contents"]);
  function Xi(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: l } = $r(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !ih.has(l);
  }
  const lh = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function sh(n) {
    return lh.has(vi(n));
  }
  const oh = [":popover-open", ":modal"];
  function ts(n) {
    return oh.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const ch = ["transform", "translate", "scale", "rotate", "perspective"], uh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], dh = ["paint", "layout", "strict", "content"];
  function Ks(n) {
    const t = Xs(), r = zr(n) ? $r(n) : n;
    return ch.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || uh.some((a) => (r.willChange || "").includes(a)) || dh.some((a) => (r.contain || "").includes(a));
  }
  function Xs() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const gh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function _i(n) {
    return gh.has(vi(n));
  }
  function $r(n) {
    return sr(n).getComputedStyle(n);
  }
  function ns(n) {
    return zr(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function _a(n) {
    if (vi(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || vu(n) && n.host || Or(n);
    return vu(t) ? t.host : t;
  }
  function _u(n) {
    const t = _a(n);
    return _i(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Fr(t) && Xi(t) ? t : _u(t);
  }
  function el(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const l = _u(n), o = l === ((a = n.ownerDocument) == null ? void 0 : a.body), c = sr(l);
    if (o) {
      const s = eo(c);
      return t.concat(c, c.visualViewport || [], Xi(l) ? l : [], s && r ? el(s) : []);
    }
    return t.concat(l, el(l, [], r));
  }
  function eo(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function ku(n) {
    const t = $r(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const l = Fr(n), o = l ? n.offsetWidth : r, c = l ? n.offsetHeight : a, s = Hl(r) !== o || Hl(a) !== c;
    return s && (r = o, a = c), { width: r, height: a, $: s };
  }
  function to(n) {
    return zr(n) ? n : n.contextElement;
  }
  function ki(n) {
    const t = to(n);
    if (!Fr(t)) return Gr(1);
    const r = t.getBoundingClientRect(), { width: a, height: l, $: o } = ku(t);
    let c = (o ? Hl(r.width) : r.width) / a, s = (o ? Hl(r.height) : r.height) / l;
    return c && Number.isFinite(c) || (c = 1), s && Number.isFinite(s) || (s = 1), { x: c, y: s };
  }
  const hh = Gr(0);
  function mu(n) {
    const t = sr(n);
    return Xs() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : hh;
  }
  function Ra(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const l = n.getBoundingClientRect(), o = to(n);
    let c = Gr(1);
    t && (a ? zr(a) && (c = ki(a)) : c = ki(n));
    const s = (function(h, v, _) {
      return v === void 0 && (v = !1), !(!_ || v && _ !== sr(h)) && v;
    })(o, r, a) ? mu(o) : Gr(0);
    let i = (l.left + s.x) / c.x, u = (l.top + s.y) / c.y, g = l.width / c.x, b = l.height / c.y;
    if (o) {
      const h = sr(o), v = a && zr(a) ? sr(a) : a;
      let _ = h, f = eo(_);
      for (; f && a && v !== _; ) {
        const x = ki(f), D = f.getBoundingClientRect(), w = $r(f), I = D.left + (f.clientLeft + parseFloat(w.paddingLeft)) * x.x, L = D.top + (f.clientTop + parseFloat(w.paddingTop)) * x.y;
        i *= x.x, u *= x.y, g *= x.x, b *= x.y, i += I, u += L, _ = sr(f), f = eo(_);
      }
    }
    return Xl({ width: g, height: b, x: i, y: u });
  }
  function rs(n, t) {
    const r = ns(n).scrollLeft;
    return t ? t.left + r : Ra(Or(n)).left + r;
  }
  function xu(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - rs(n, r), y: r.top + t.scrollTop };
  }
  const ph = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function yu(n, t, r) {
    let a;
    if (t === "viewport") a = (function(l, o) {
      const c = sr(l), s = Or(l), i = c.visualViewport;
      let u = s.clientWidth, g = s.clientHeight, b = 0, h = 0;
      if (i) {
        u = i.width, g = i.height;
        const _ = Xs();
        (!_ || _ && o === "fixed") && (b = i.offsetLeft, h = i.offsetTop);
      }
      const v = rs(s);
      if (v <= 0) {
        const _ = s.ownerDocument, f = _.body, x = getComputedStyle(f), D = _.compatMode === "CSS1Compat" && parseFloat(x.marginLeft) + parseFloat(x.marginRight) || 0, w = Math.abs(s.clientWidth - f.clientWidth - D);
        w <= 25 && (u -= w);
      } else v <= 25 && (u += v);
      return { width: u, height: g, x: b, y: h };
    })(n, r);
    else if (t === "document") a = (function(l) {
      const o = Or(l), c = ns(l), s = l.ownerDocument.body, i = ja(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), u = ja(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
      let g = -c.scrollLeft + rs(l);
      const b = -c.scrollTop;
      return $r(s).direction === "rtl" && (g += ja(o.clientWidth, s.clientWidth) - i), { width: i, height: u, x: g, y: b };
    })(Or(n));
    else if (zr(t)) a = (function(l, o) {
      const c = Ra(l, !0, o === "fixed"), s = c.top + l.clientTop, i = c.left + l.clientLeft, u = Fr(l) ? ki(l) : Gr(1);
      return { width: l.clientWidth * u.x, height: l.clientHeight * u.y, x: i * u.x, y: s * u.y };
    })(t, r);
    else {
      const l = mu(n);
      a = { x: t.x - l.x, y: t.y - l.y, width: t.width, height: t.height };
    }
    return Xl(a);
  }
  function wu(n, t) {
    const r = _a(n);
    return !(r === t || !zr(r) || _i(r)) && ($r(r).position === "fixed" || wu(r, t));
  }
  function bh(n, t, r) {
    const a = Fr(t), l = Or(t), o = r === "fixed", c = Ra(n, !0, o, t);
    let s = { scrollLeft: 0, scrollTop: 0 };
    const i = Gr(0);
    function u() {
      i.x = rs(l);
    }
    if (a || !a && !o) if ((vi(t) !== "body" || Xi(l)) && (s = ns(t)), a) {
      const b = Ra(t, !0, o, t);
      i.x = b.x + t.clientLeft, i.y = b.y + t.clientTop;
    } else l && u();
    o && !a && l && u();
    const g = !l || a || o ? Gr(0) : xu(l, s);
    return { x: c.left + s.scrollLeft - i.x - g.x, y: c.top + s.scrollTop - i.y - g.y, width: c.width, height: c.height };
  }
  function no(n) {
    return $r(n).position === "static";
  }
  function Pu(n, t) {
    if (!Fr(n) || $r(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return Or(n) === r && (r = r.ownerDocument.body), r;
  }
  function Su(n, t) {
    const r = sr(n);
    if (ts(n)) return r;
    if (!Fr(n)) {
      let l = _a(n);
      for (; l && !_i(l); ) {
        if (zr(l) && !no(l)) return l;
        l = _a(l);
      }
      return r;
    }
    let a = Pu(n, t);
    for (; a && sh(a) && no(a); ) a = Pu(a, t);
    return a && _i(a) && no(a) && !Ks(a) ? r : a || (function(l) {
      let o = _a(l);
      for (; Fr(o) && !_i(o); ) {
        if (Ks(o)) return o;
        if (ts(o)) return null;
        o = _a(o);
      }
      return null;
    })(n) || r;
  }
  const fh = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: l } = n;
    const o = l === "fixed", c = Or(a), s = !!t && ts(t.floating);
    if (a === c || s && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, u = Gr(1);
    const g = Gr(0), b = Fr(a);
    if ((b || !b && !o) && ((vi(a) !== "body" || Xi(c)) && (i = ns(a)), Fr(a))) {
      const v = Ra(a);
      u = ki(a), g.x = v.x + a.clientLeft, g.y = v.y + a.clientTop;
    }
    const h = !c || b || o ? Gr(0) : xu(c, i);
    return { width: r.width * u.x, height: r.height * u.y, x: r.x * u.x - i.scrollLeft * u.x + g.x + h.x, y: r.y * u.y - i.scrollTop * u.y + g.y + h.y };
  }, getDocumentElement: Or, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: l } = n;
    const o = [...r === "clippingAncestors" ? ts(t) ? [] : (function(i, u) {
      const g = u.get(i);
      if (g) return g;
      let b = el(i, [], !1).filter((f) => zr(f) && vi(f) !== "body"), h = null;
      const v = $r(i).position === "fixed";
      let _ = v ? _a(i) : i;
      for (; zr(_) && !_i(_); ) {
        const f = $r(_), x = Ks(_);
        x || f.position !== "fixed" || (h = null), (v ? !x && !h : !x && f.position === "static" && h && ph.has(h.position) || Xi(_) && !x && wu(i, _)) ? b = b.filter((D) => D !== _) : h = f, _ = _a(_);
      }
      return u.set(i, b), b;
    })(t, this._c) : [].concat(r), a], c = o[0], s = o.reduce((i, u) => {
      const g = yu(t, u, l);
      return i.top = ja(g.top, i.top), i.right = Ul(g.right, i.right), i.bottom = Ul(g.bottom, i.bottom), i.left = ja(g.left, i.left), i;
    }, yu(t, c, l));
    return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
  }, getOffsetParent: Su, getElementRects: async function(n) {
    const t = this.getOffsetParent || Su, r = this.getDimensions, a = await r(n.floating);
    return { reference: bh(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = ku(n);
    return { width: t, height: r };
  }, getScale: ki, isElement: zr, isRTL: function(n) {
    return $r(n).direction === "rtl";
  } };
  function Bu(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function vh(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: l = !0, ancestorResize: o = !0, elementResize: c = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, u = to(n), g = l || o ? [...u ? el(u) : [], ...el(t)] : [];
    g.forEach((x) => {
      l && x.addEventListener("scroll", r, { passive: !0 }), o && x.addEventListener("resize", r);
    });
    const b = u && s ? (function(x, D) {
      let w, I = null;
      const L = Or(x);
      function Q() {
        var R;
        clearTimeout(w), (R = I) == null || R.disconnect(), I = null;
      }
      return (function R(K, C) {
        K === void 0 && (K = !1), C === void 0 && (C = 1), Q();
        const ne = x.getBoundingClientRect(), { left: A, top: E, width: oe, height: J } = ne;
        if (K || D(), !oe || !J) return;
        const U = { rootMargin: -Zl(E) + "px " + -Zl(L.clientWidth - (A + oe)) + "px " + -Zl(L.clientHeight - (E + J)) + "px " + -Zl(A) + "px", threshold: ja(0, Ul(1, C)) || 1 };
        let M = !0;
        function B(j) {
          const N = j[0].intersectionRatio;
          if (N !== C) {
            if (!M) return R();
            N ? R(!1, N) : w = setTimeout(() => {
              R(!1, 1e-7);
            }, 1e3);
          }
          N !== 1 || Bu(ne, x.getBoundingClientRect()) || R(), M = !1;
        }
        try {
          I = new IntersectionObserver(B, { ...U, root: L.ownerDocument });
        } catch {
          I = new IntersectionObserver(B, U);
        }
        I.observe(x);
      })(!0), Q;
    })(u, r) : null;
    let h, v = -1, _ = null;
    c && (_ = new ResizeObserver((x) => {
      let [D] = x;
      D && D.target === u && _ && (_.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        var w;
        (w = _) == null || w.observe(t);
      })), r();
    }), u && !i && _.observe(u), _.observe(t));
    let f = i ? Ra(n) : null;
    return i && (function x() {
      const D = Ra(n);
      f && !Bu(f, D) && r(), f = D, h = requestAnimationFrame(x);
    })(), r(), () => {
      var x;
      g.forEach((D) => {
        l && D.removeEventListener("scroll", r), o && D.removeEventListener("resize", r);
      }), b == null || b(), (x = _) == null || x.disconnect(), _ = null, i && cancelAnimationFrame(h);
    };
  }
  const _h = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: l, y: o, placement: c, middlewareData: s } = t, i = await (async function(u, g) {
        const { placement: b, platform: h, elements: v } = u, _ = await (h.isRTL == null ? void 0 : h.isRTL(v.floating)), f = Ea(b), x = Yl(b), D = va(b) === "y", w = ah.has(f) ? -1 : 1, I = _ && D ? -1 : 1, L = Jl(g, u);
        let { mainAxis: Q, crossAxis: R, alignmentAxis: K } = typeof L == "number" ? { mainAxis: L, crossAxis: 0, alignmentAxis: null } : { mainAxis: L.mainAxis || 0, crossAxis: L.crossAxis || 0, alignmentAxis: L.alignmentAxis };
        return x && typeof K == "number" && (R = x === "end" ? -1 * K : K), D ? { x: R * I, y: Q * w } : { x: Q * w, y: R * I };
      })(t, n);
      return c === ((r = s.offset) == null ? void 0 : r.placement) && (a = s.arrow) != null && a.alignmentOffset ? {} : { x: l + i.x, y: o + i.y, data: { ...i, placement: c } };
    } };
  }, kh = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: l } = t, { mainAxis: o = !0, crossAxis: c = !1, limiter: s = { fn: (x) => {
        let { x: D, y: w } = x;
        return { x: D, y: w };
      } }, ...i } = Jl(n, t), u = { x: r, y: a }, g = await bu(t, i), b = va(Ea(l)), h = cu(b);
      let v = u[h], _ = u[b];
      if (o) {
        const x = h === "y" ? "bottom" : "right";
        v = ou(v + g[h === "y" ? "top" : "left"], v, v - g[x]);
      }
      if (c) {
        const x = b === "y" ? "bottom" : "right";
        _ = ou(_ + g[b === "y" ? "top" : "left"], _, _ - g[x]);
      }
      const f = s.fn({ ...t, [h]: v, [b]: _ });
      return { ...f, data: { x: f.x - r, y: f.y - a, enabled: { [h]: o, [b]: c } } };
    } };
  }, mh = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: l, middlewareData: o, rects: c, initialPlacement: s, platform: i, elements: u } = t, { mainAxis: g = !0, crossAxis: b = !0, fallbackPlacements: h, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: _ = "none", flipAlignment: f = !0, ...x } = Jl(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const D = Ea(l), w = va(s), I = Ea(s) === s, L = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), Q = h || (I || !f ? [Kl(s)] : (function(U) {
        const M = Kl(U);
        return [Ys(U), M, Ys(M)];
      })(s)), R = _ !== "none";
      !h && R && Q.push(...rh(s, f, _, L));
      const K = [s, ...Q], C = await bu(t, x), ne = [];
      let A = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (g && ne.push(C[D]), b) {
        const U = (function(M, B, j) {
          j === void 0 && (j = !1);
          const N = Yl(M), H = du(M), X = uu(H);
          let V = H === "x" ? N === (j ? "end" : "start") ? "right" : "left" : N === "start" ? "bottom" : "top";
          return B.reference[X] > B.floating[X] && (V = Kl(V)), [V, Kl(V)];
        })(l, c, L);
        ne.push(C[U[0]], C[U[1]]);
      }
      if (A = [...A, { placement: l, overflows: ne }], !ne.every((U) => U <= 0)) {
        var E, oe;
        const U = (((E = o.flip) == null ? void 0 : E.index) || 0) + 1, M = K[U];
        if (M && (!(b === "alignment" && w !== va(M)) || A.every((j) => va(j.placement) !== w || j.overflows[0] > 0)))
          return { data: { index: U, overflows: A }, reset: { placement: M } };
        let B = (oe = A.filter((j) => j.overflows[0] <= 0).sort((j, N) => j.overflows[1] - N.overflows[1])[0]) == null ? void 0 : oe.placement;
        if (!B) switch (v) {
          case "bestFit": {
            var J;
            const j = (J = A.filter((N) => {
              if (R) {
                const H = va(N.placement);
                return H === w || H === "y";
              }
              return !0;
            }).map((N) => [N.placement, N.overflows.filter((H) => H > 0).reduce((H, X) => H + X, 0)]).sort((N, H) => N[1] - H[1])[0]) == null ? void 0 : J[0];
            j && (B = j);
            break;
          }
          case "initialPlacement":
            B = s;
        }
        if (l !== B) return { reset: { placement: B } };
      }
      return {};
    } };
  }, xh = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), l = { platform: fh, ...r }, o = { ...l.platform, _c: a };
    return (async (c, s, i) => {
      const { placement: u = "bottom", strategy: g = "absolute", middleware: b = [], platform: h } = i, v = b.filter(Boolean), _ = await (h.isRTL == null ? void 0 : h.isRTL(s));
      let f = await h.getElementRects({ reference: c, floating: s, strategy: g }), { x, y: D } = pu(f, u, _), w = u, I = {}, L = 0;
      for (let Q = 0; Q < v.length; Q++) {
        const { name: R, fn: K } = v[Q], { x: C, y: ne, data: A, reset: E } = await K({ x, y: D, initialPlacement: u, placement: w, strategy: g, middlewareData: I, rects: f, platform: h, elements: { reference: c, floating: s } });
        x = C != null ? C : x, D = ne != null ? ne : D, I = { ...I, [R]: { ...I[R], ...A } }, E && L <= 50 && (L++, typeof E == "object" && (E.placement && (w = E.placement), E.rects && (f = E.rects === !0 ? await h.getElementRects({ reference: c, floating: s, strategy: g }) : E.rects), { x, y: D } = pu(f, w, _)), Q = -1);
      }
      return { x, y: D, placement: w, strategy: g, middlewareData: I };
    })(n, t, { ...l, platform: o });
  };
  function or(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function cr(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function je(n) {
    return n ? `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})` : "";
  }
  function Cu(n) {
    return n && n.text && n.background ? `--bar-most-popular-background-color: ${je(n.background)}; --bar-most-popular-color: ${je(n.text)};` : "";
  }
  const yh = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function wh(n) {
    var t;
    return (t = yh[n]) != null ? t : `"${n}"`;
  }
  function bn(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function Iu(n) {
    var t, r;
    const { colors: a, fonts: l, cornerRadius: o, spacing: c, imageSize: s, imageCornerRadius: i, bundleBarsPerRow: u, dealBars: g } = n, b = a.border || a.primary, h = Math.min(g.length, u ? parseInt(u) : 3).toString();
    return bn({ "block-font-family": l.fontFamily ? wh(l.fontFamily) : null, "block-title-color": je(a.title), "block-title-font-size": l.blockTitle.size + "px", "block-title-font-weight": or(l.blockTitle.style), "block-title-font-style": cr(l.blockTitle.style), "block-spacing": c == null ? void 0 : c.toString(), "bar-border-radius": (o || 0) + "px", "badge-concave-depth": Math.min(o || 0, 12) + "px", "bar-background-color": je(a.background), "bar-selected-background-color": je(a.selectedBackground || a.background), "bar-border-color": je({ ...b, alpha: 0.3 * b.alpha }), "bar-selected-border-color": je(b), "block-block-title-color": je(a.blockTitle || a.title), "bar-title-color": je(a.title), "bar-title-font-size": l.title.size + "px", "bar-title-font-weight": or(l.title.style), "bar-title-font-style": cr(l.title.style), "bar-subtitle-color": je(a.subtitle), "bar-subtitle-font-size": l.subtitle.size + "px", "bar-subtitle-font-weight": or(l.subtitle.style), "bar-subtitle-font-style": cr(l.subtitle.style), "bar-price-color": je(a.price || a.title), "bar-full-price-color": je(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": je(a.labelBackground), "bar-label-color": je(a.label), "bar-label-font-size": l.label.size + "px", "bar-label-font-weight": or(l.label.style), "bar-label-font-style": cr(l.label.style), "bar-most-popular-background-color": je(a.badgeBackground), "bar-most-popular-color": je(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (s || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": l.unitLabel ? l.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": l.unitLabel ? or(l.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": l.unitLabel ? cr(l.unitLabel.style) : null, "bundle-bars-per-row": h, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && je(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && je(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const Mu = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Ph = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in Mu)) return;
    const r = Mu[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, Sh = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var Bh = $("<div></div>");
  function as(n, t) {
    Ke(t, !0);
    let r = m(t, "color", 7), a = m(t, "image", 7), l = m(t, "size", 7), o = m(t, "shape", 7), c = m(t, "unavailable", 7, !1);
    const s = d(() => r() ? (function(h) {
      h = h.replace(/^#/, "");
      let v = parseInt(h, 16);
      return { red: v >> 16 & 255, green: v >> 8 & 255, blue: 255 & v, alpha: 1 };
    })(r()) : null), i = d(() => {
      let h = { "kaching-swatch-size": `${l() - 2}px` };
      const v = { rounded: 20, circle: 50 }[o()];
      return v && (h = { ...h, "kaching-swatch-border-radius": `${v}%` }), a() ? h = { ...h, "kaching-swatch-image-url": `url(${a()})` } : e(s) && (h = { ...h, "kaching-swatch-color": je(e(s)), "kaching-swatch-border-color": je(Sh(e(s), 0.1)) }), bn(h);
    });
    var u = { get color() {
      return r();
    }, set color(h) {
      r(h), k();
    }, get image() {
      return a();
    }, set image(h) {
      a(h), k();
    }, get size() {
      return l();
    }, set size(h) {
      l(h), k();
    }, get shape() {
      return o();
    }, set shape(h) {
      o(h), k();
    }, get unavailable() {
      return c();
    }, set unavailable(h = !1) {
      c(h), k();
    } }, g = Bh();
    let b;
    return be((h) => {
      b = Lt(g, 1, "kaching-bundles__swatch", null, b, h), Tt(g, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": c() })]), p(n, g), Xe(u);
  }
  function Zt(n, t) {
    Ke(t, !0);
    let r = m(t, "element", 7, "button"), a = m(t, "class", 7), l = m(t, "onclick", 7), o = m(t, "onkeydown", 7), c = m(t, "data-value", 7), s = m(t, "title", 7), i = m(t, "id", 7), u = m(t, "role", 7), g = m(t, "aria-label", 7), b = m(t, "aria-expanded", 7), h = m(t, "aria-haspopup", 7), v = m(t, "aria-selected", 7), _ = m(t, "aria-checked", 7), f = m(t, "aria-activedescendant", 7), x = m(t, "aria-controls", 7), D = m(t, "tabindex", 7), w = m(t, "disabled", 7, !1), I = m(t, "ref", 15);
    function L(C) {
      o() && (o()(C), C.defaultPrevented) || w() || C.key !== "Enter" && C.key !== " " || (C.preventDefault(), C.currentTarget.click());
    }
    function Q(C) {
      var ne;
      if (w()) return C.preventDefault(), void C.stopPropagation();
      (ne = l()) == null || ne(C);
    }
    var R = { get element() {
      return r();
    }, set element(C = "button") {
      r(C), k();
    }, get class() {
      return a();
    }, set class(C) {
      a(C), k();
    }, get onclick() {
      return l();
    }, set onclick(C) {
      l(C), k();
    }, get onkeydown() {
      return o();
    }, set onkeydown(C) {
      o(C), k();
    }, get "data-value"() {
      return c();
    }, set "data-value"(C) {
      c(C), k();
    }, get title() {
      return s();
    }, set title(C) {
      s(C), k();
    }, get id() {
      return i();
    }, set id(C) {
      i(C), k();
    }, get role() {
      return u();
    }, set role(C) {
      u(C), k();
    }, get "aria-label"() {
      return g();
    }, set "aria-label"(C) {
      g(C), k();
    }, get "aria-expanded"() {
      return b();
    }, set "aria-expanded"(C) {
      b(C), k();
    }, get "aria-haspopup"() {
      return h();
    }, set "aria-haspopup"(C) {
      h(C), k();
    }, get "aria-selected"() {
      return v();
    }, set "aria-selected"(C) {
      v(C), k();
    }, get "aria-checked"() {
      return _();
    }, set "aria-checked"(C) {
      _(C), k();
    }, get "aria-activedescendant"() {
      return f();
    }, set "aria-activedescendant"(C) {
      f(C), k();
    }, get "aria-controls"() {
      return x();
    }, set "aria-controls"(C) {
      x(C), k();
    }, get tabindex() {
      return D();
    }, set tabindex(C) {
      D(C), k();
    }, get disabled() {
      return w();
    }, set disabled(C = !1) {
      w(C), k();
    }, get ref() {
      return I();
    }, set ref(C) {
      I(C), k();
    } }, K = Ie();
    return Wc(pe(K), r, 0, (C, ne) => {
      bi(C, (E) => I(E), () => I()), Xc(C, () => {
        var E, oe;
        return { role: (E = u()) != null ? E : "button", tabindex: (oe = D()) != null ? oe : w() ? -1 : 0, class: a(), onclick: Q, "data-value": c(), title: s(), id: i(), "aria-label": g(), "aria-expanded": b(), "aria-haspopup": h(), "aria-selected": v(), "aria-checked": _(), "aria-activedescendant": f(), "aria-controls": x(), "aria-disabled": w() ? "true" : void 0, onkeydown: L };
      });
      var A = Ie();
      Nc(pe(A), t, "default", {}), p(ne, A);
    }), p(n, K), Xe(R);
  }
  Qe(as, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Qe(Zt, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const zu = "translations", Na = (n = {}) => {
    const t = ta($u(n));
    return ai(zu, t), { translate: t, setTranslations: (r) => {
      t.set($u(r));
    } };
  }, It = () => {
    const n = ri(zu);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, $u = (n) => (t) => n[t] || t;
  function ro(n) {
    return String.fromCharCode(64 + n);
  }
  async function vr(n, t, r = {}, a = !0) {
    a && await qs();
    const l = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(l);
  }
  function Ut(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function _r(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  var Ch = $("<span> <!></span>"), Ih = $("<span> </span>"), Mh = $("<!> <!>", 1), zh = $("<span> <!></span>"), $h = $("<span> </span>"), Dh = $("<!> <!>", 1), Ah = $('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), Vh = $('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function Du(n, t) {
    Ke(t, !0);
    const r = () => $e(D, "$translate", a), [a, l] = vt();
    let o = m(t, "option", 7), c = m(t, "swatchSize", 7), s = m(t, "swatchShape", 7), i = m(t, "value", 7), u = m(t, "onChange", 7), g = De(!1), b = De(-1), h = De(void 0), v = De(void 0), _ = d(() => o().optionValues.find((J) => J.name === i()) || o().optionValues[0]);
    const f = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function x(J) {
      return `${f}-option-${J}`;
    }
    const D = It();
    function w() {
      se(g, !0), se(b, o().optionValues.findIndex((J) => J.name === i()), !0), e(b) === -1 && se(b, 0);
    }
    function I() {
      se(g, !1), se(b, -1);
    }
    function L() {
      var J;
      I(), (J = e(h)) == null || J.focus();
    }
    function Q(J) {
      i(J), L();
      try {
        const U = o().optionValues.find((M) => M.name === J);
        U != null && U.unavailable && vr(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (U) {
        console.error(U);
      }
      u()(i());
    }
    function R(J, U) {
      const M = (B) => {
        J.contains(B.target) || U();
      };
      return document.addEventListener("click", M, !0), { destroy() {
        document.removeEventListener("click", M, !0);
      } };
    }
    Je(() => {
      if (e(g) && e(h) && e(v)) return vh(e(h), e(v), async () => {
        if (!e(h) || !e(v)) return;
        const J = e(v), { x: U, y: M } = await xh(e(h), J, { placement: "bottom-start", strategy: "fixed", middleware: [_h(2), mh(), kh({ padding: 8 })] });
        J.style.left = `${U}px`, J.style.top = `${M}px`;
      });
    });
    var K = { get option() {
      return o();
    }, set option(J) {
      o(J), k();
    }, get swatchSize() {
      return c();
    }, set swatchSize(J) {
      c(J), k();
    }, get swatchShape() {
      return s();
    }, set swatchShape(J) {
      s(J), k();
    }, get value() {
      return i();
    }, set value(J) {
      i(J), k();
    }, get onChange() {
      return u();
    }, set onChange(J) {
      u(J), k();
    } }, C = Vh(), ne = S(C);
    {
      let J = d(() => e(g) && e(b) >= 0 ? x(e(b)) : void 0);
      Zt(ne, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(U) {
        e(g) ? (se(g, !1), se(b, -1)) : w(), U.preventDefault();
      }, onkeydown: function(U) {
        if (!e(g)) return void (U.key !== "ArrowDown" && U.key !== "ArrowUp" && U.key !== "Enter" && U.key !== " " || (U.preventDefault(), w()));
        const M = o().optionValues.length;
        switch (U.key) {
          case "Escape":
            U.preventDefault(), L();
            break;
          case "ArrowDown":
            U.preventDefault(), se(b, e(b) < M - 1 ? e(b) + 1 : 0, !0);
            break;
          case "ArrowUp":
            U.preventDefault(), se(b, e(b) > 0 ? e(b) - 1 : M - 1, !0);
            break;
          case "Home":
            U.preventDefault(), se(b, 0);
            break;
          case "End":
            U.preventDefault(), se(b, M - 1);
            break;
          case "Enter":
          case " ":
            U.preventDefault(), e(b) >= 0 && Q(o().optionValues[e(b)].name);
        }
      }, get "aria-expanded"() {
        return e(g);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return f;
      }, get "aria-activedescendant"() {
        return e(J);
      }, get ref() {
        return e(h);
      }, set ref(U) {
        se(h, U, !0);
      }, children: (U, M) => {
        var B = Mh(), j = pe(B);
        as(j, { get color() {
          return e(_).swatch.color;
        }, get image() {
          return e(_).swatch.image;
        }, get size() {
          return c();
        }, get shape() {
          return s();
        }, get unavailable() {
          return e(_).unavailable;
        } }), at(G(j, 2), () => e(_).name, (N) => {
          var H = Ie(), X = pe(H), V = (q) => {
            var W = Ch(), te = S(W);
            Te(G(te), () => r()("system.unavailable_option_value")), y(W), be(() => {
              var de;
              return ft(te, `${(de = e(_).name) != null ? de : ""} - `);
            }), p(q, W);
          }, Z = (q) => {
            var W = Ih(), te = S(W, !0);
            y(W), be(() => ft(te, e(_).name)), p(q, W);
          };
          O(X, (q) => {
            e(_).unavailable ? q(V) : q(Z, !1);
          }), p(N, H);
        }), p(U, B);
      }, $$slots: { default: !0 } });
    }
    var A = G(ne, 2), E = (J) => {
      var U = Ah();
      Dt(U, 23, () => o().optionValues, (M) => M.name, (M, B, j) => {
        {
          let N = d(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(j) === e(b) && "kaching-bundles__swatch-dropdown__option--focused"]), H = d(() => x(e(j))), X = d(() => e(B).name === i());
          Zt(M, { element: "span", get class() {
            return e(N);
          }, get id() {
            return e(H);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(X);
          }, get "data-value"() {
            return e(B).name;
          }, onclick: () => Q(e(B).name), children: (V, Z) => {
            var q = Dh(), W = pe(q);
            {
              let P = d(() => 1.333 * c());
              as(W, { get color() {
                return e(B).swatch.color;
              }, get image() {
                return e(B).swatch.image;
              }, get size() {
                return e(P);
              }, get shape() {
                return s();
              }, get unavailable() {
                return e(B).unavailable;
              } });
            }
            var te = G(W, 2), de = (P) => {
              var z = zh(), ae = S(z);
              Te(G(ae), () => r()("system.unavailable_option_value")), y(z), be(() => {
                var T;
                return ft(ae, `${(T = e(B).name) != null ? T : ""} - `);
              }), p(P, z);
            }, F = (P) => {
              var z = $h(), ae = S(z, !0);
              y(z), be(() => ft(ae, e(B).name)), p(P, z);
            };
            O(te, (P) => {
              e(B).unavailable ? P(de) : P(F, !1);
            }), p(V, q);
          }, $$slots: { default: !0 } });
        }
      }), y(U), bi(U, (M) => se(v, M), () => e(v)), be(() => Pe(U, "id", f)), p(J, U);
    };
    O(A, (J) => {
      e(g) && J(E);
    }), y(C), Rs(C, (J, U) => R == null ? void 0 : R(J, U), () => I), be(() => {
      Pe(C, "data-name", o().name), Pe(C, "data-value", i());
    }), p(n, C);
    var oe = Xe(K);
    return l(), oe;
  }
  function Th(n, t, r) {
    try {
      const a = t().optionValues.find((l) => l.name === n.target.value);
      a != null && a.unavailable && vr(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  Qe(Du, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  var qh = $(" <!>", 1), Gh = $('<option class="kaching-bundles-option-value"><!></option>'), Oh = $('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"></select>');
  function Au(n, t) {
    Ke(t, !0);
    const [r, a] = vt();
    let l = m(t, "option", 7), o = m(t, "value", 7), c = m(t, "onChange", 7);
    const s = It();
    var i, u = { get option() {
      return l();
    }, set option(h) {
      l(h), k();
    }, get value() {
      return o();
    }, set value(h) {
      o(h), k();
    }, get onChange() {
      return c();
    }, set onChange(h) {
      c(h), k();
    } }, g = Oh();
    g.__change = [Th, l, c], Dt(g, 21, () => l().optionValues, (h) => h.name, (h, v) => {
      var _ = Gh(), f = S(_), x = (I) => {
        var L = qh(), Q = pe(L);
        Te(G(Q), () => $e(s, "$translate", r)("system.unavailable_option_value")), be(() => {
          var R;
          return ft(Q, `${(R = e(v).name) != null ? R : ""} - `);
        }), p(I, L);
      }, D = (I) => {
        var L = Wn();
        be(() => ft(L, e(v).name)), p(I, L);
      };
      O(f, (I) => {
        e(v).unavailable ? I(x) : I(D, !1);
      }), y(_);
      var w = {};
      be(() => {
        var I;
        Pe(_, "data-value", e(v).name), w !== (w = e(v).name) && (_.value = (I = _.__value = e(v).name) != null ? I : "");
      }), p(h, _);
    }), y(g), Ws(g), be(() => {
      var h;
      Pe(g, "aria-label", l().name), Pe(g, "data-name", l().name), Pe(g, "data-value", o()), i !== (i = o()) && (g.value = (h = g.__value = o()) != null ? h : "", Ji(g, o()));
    }), p(n, g);
    var b = Xe(u);
    return a(), b;
  }
  On(["change"]), Qe(Au, { option: {}, value: {}, onChange: {} }, [], [], !0);
  var Fh = $('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function Vu(n, t) {
    Ke(t, !0);
    const [r, a] = vt();
    let l = m(t, "option", 7), o = m(t, "swatchSize", 7), c = m(t, "swatchShape", 7), s = m(t, "value", 7), i = m(t, "onChange", 7);
    const u = It();
    var g = { get option() {
      return l();
    }, set option(v) {
      l(v), k();
    }, get swatchSize() {
      return o();
    }, set swatchSize(v) {
      o(v), k();
    }, get swatchShape() {
      return c();
    }, set swatchShape(v) {
      c(v), k();
    }, get value() {
      return s();
    }, set value(v) {
      s(v), k();
    }, get onChange() {
      return i();
    }, set onChange(v) {
      i(v), k();
    } }, b = Fh();
    Dt(b, 21, () => l().optionValues, (v) => v.name, (v, _) => {
      {
        let f = d(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(_).name === s() && "kaching-bundles__swatch-buttons__button--selected"]), x = d(() => e(_).unavailable ? `${e(_).name} - ${$e(u, "$translate", r)("system.unavailable_option_value")}` : e(_).name);
        Zt(v, { element: "span", get class() {
          return e(f);
        }, get title() {
          return e(_).name;
        }, get "aria-label"() {
          return e(x);
        }, get "data-value"() {
          return e(_).name;
        }, onclick: () => (function(D) {
          s(D);
          try {
            const w = l().optionValues.find((I) => I.name === D);
            w != null && w.unavailable && vr(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (w) {
            console.error(w);
          }
          i()(s());
        })(e(_).name), children: (D, w) => {
          as(D, { get color() {
            return e(_).swatch.color;
          }, get image() {
            return e(_).swatch.image;
          }, get size() {
            return o();
          }, get shape() {
            return c();
          }, get unavailable() {
            return e(_).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), y(b), be(() => {
      Pe(b, "data-name", l().name), Pe(b, "data-value", s());
    }), p(n, b);
    var h = Xe(g);
    return a(), h;
  }
  function Tu(n, t) {
    Ke(t, !0);
    let r = m(t, "value", 7), a = m(t, "option", 7), l = m(t, "swatchSize", 7, 18), o = m(t, "swatchShape", 7, "circle"), c = m(t, "swatchType", 7), s = m(t, "onChange", 7);
    function i(_) {
      s()({ position: a().position, value: _ });
    }
    var u = { get value() {
      return r();
    }, set value(_) {
      r(_), k();
    }, get option() {
      return a();
    }, set option(_) {
      a(_), k();
    }, get swatchSize() {
      return l();
    }, set swatchSize(_ = 18) {
      l(_), k();
    }, get swatchShape() {
      return o();
    }, set swatchShape(_ = "circle") {
      o(_), k();
    }, get swatchType() {
      return c();
    }, set swatchType(_) {
      c(_), k();
    }, get onChange() {
      return s();
    }, set onChange(_) {
      s(_), k();
    } }, g = Ie(), b = pe(g), h = (_) => {
      Du(_, { get option() {
        return a();
      }, get swatchSize() {
        return l();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, onChange: i });
    }, v = (_) => {
      var f = Ie(), x = pe(f), D = (I) => {
        Vu(I, { get option() {
          return a();
        }, get swatchSize() {
          return l();
        }, get swatchShape() {
          return o();
        }, get value() {
          return r();
        }, onChange: i });
      }, w = (I) => {
        Au(I, { get option() {
          return a();
        }, get value() {
          return r();
        }, onChange: i });
      };
      O(x, (I) => {
        c() === "colorButtons" || c() === "imageButtons" || c() === "productImageButtons" ? I(D) : I(w, !1);
      }, !0), p(_, f);
    };
    return O(b, (_) => {
      c() === "colorDropdown" || c() === "imageDropdown" || c() === "productImageDropdown" || c() === "mixedDropdown" ? _(h) : _(v, !1);
    }), p(n, g), Xe(u);
  }
  Qe(Vu, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0), Qe(Tu, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, onChange: {} }, [], [], !0);
  const qu = "mediaImages", tl = (n = []) => {
    const t = ta(Gu(n));
    return ai(qu, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(Gu(r));
    } };
  }, Fn = () => {
    const n = ri(qu);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, Gu = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  }, Ou = "config", Qa = (n) => {
    const t = ta(n);
    return ai(Ou, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, _n = () => {
    const n = ri(Ou);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  };
  var Lh = $('<img alt="" class="kaching-bundles__bar-variant-image"/>'), jh = $('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), Eh = $('<span class="kaching-bundles__bar-variant-option__name-value"> </span>'), Rh = $('<div class="kaching-bundles__bar-variant-option"><span class="kaching-bundles__bar-variant-option__name"><span class="kaching-bundles__bar-variant-option__name-label"> </span> <!></span> <!></div>'), Nh = $('<div class="kaching-bundles__invalid-variant-error"><!></div>'), Qh = $('<div><div><!> <div class="kaching-bundles__bar-variant-main"><div class="kaching-bundles__bar-variant-selects"></div> <!></div></div></div>');
  function Un(n, t) {
    Ke(t, !0);
    const r = () => $e(x, "$config", l), a = () => $e(D, "$swatchSettings", l), [l, o] = vt(), c = (F, P = yr) => {
      Tu(F, { get option() {
        return P();
      }, get swatchSize() {
        return a().swatchSize;
      }, get swatchShape() {
        return a().swatchShape;
      }, get swatchType() {
        return P().swatchType;
      }, get value() {
        return e(I)[P().position - 1];
      }, onChange: C });
    };
    let s = m(t, "product", 7), i = m(t, "selectedVariantId", 7), u = m(t, "number", 7, void 0), g = m(t, "showImage", 7, !1), b = m(t, "forceDropdown", 7, !1), h = m(t, "onChange", 7), v = m(t, "onOptionChange", 7);
    const _ = It(), f = Fn(), x = _n(), D = su();
    let w = d(() => s().variants.find((F) => F.id === i())), I = De(st([]));
    Je(() => {
      if (e(w)) se(I, [...e(w).options], !0);
      else {
        if (i() && r().featureFlags.hide_missing_variants && s().variants.length > 0) {
          const F = J(s().variants, 0, e(I));
          if (F) return se(I, [...F.options], !0), void nn(() => h()(F.id));
        }
        se(I, [], !0);
      }
    });
    let L = d(() => {
      return F = s(), P = e(I), z = a().swatchOptions, ae = $e(f, "$getMediaImageUrl", l), T = b(), F.options.map((ee) => ({ name: ee.name, position: ee.position, swatchType: ne(ee, z, T), optionValues: ee.optionValues.map((Y) => {
        const le = oe(ee.position, Y.name, P, F);
        if (r().featureFlags.hide_missing_variants && le.length === 0) return null;
        const fe = !le.some((Be) => Be.availableForSale);
        return { name: Y.name, unavailable: fe, swatch: A(ee, Y, z, ae, P, F) };
      }).filter((Y) => Y !== null) }));
      var F, P, z, ae, T;
    }), Q = d(() => a().showSelectedSwatchName && !b());
    const R = ["colorButtons", "imageButtons", "productImageButtons"];
    let K = d(() => {
      var F;
      return g() ? ((F = e(w)) == null ? void 0 : F.image) || s().image : null;
    });
    function C({ position: F, value: P }) {
      const z = e(I)[F - 1];
      e(I)[F - 1] = P;
      let ae = s().variants.find((T) => e(I).every((ee, Y) => T.options[Y] === ee));
      if (!ae && r().featureFlags.hide_missing_variants) {
        const T = J(oe(F, P, e(I), s()), F, e(I));
        T && (ae = T, se(I, [...ae.options], !0));
      }
      ae && (h()(ae.id), v() && v()(F, P, z));
    }
    function ne(F, P, z) {
      var ae;
      const T = (ae = P.find((ee) => ee.name === F.defaultName)) == null ? void 0 : ae.swatchType;
      if (T && T !== "default") return z ? (function(ee) {
        switch (ee) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          default:
            return ee;
        }
      })(T) : T;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const ee of F.optionValues) if (ee.swatch.image || ee.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function A(F, P, z, ae, T, ee) {
      var Y, le;
      const fe = r().featureFlags.native_swatches_disabled ? null : P.swatch, Be = z.find((ke) => ke.name === F.defaultName);
      if (!Be || Be.swatchType === "default") return fe || { color: null, image: null };
      if (Be.swatchType === "colorButtons" || Be.swatchType === "colorDropdown")
        return { color: E((Y = Be.colors.find((ke) => ke.name === P.defaultName)) == null ? void 0 : Y.color) || (fe == null ? void 0 : fe.color) || E(Ph(P.defaultName)) || null, image: null };
      if (Be.swatchType === "imageButtons" || Be.swatchType === "imageDropdown") {
        const ke = ae(((le = Be.images.find((xe) => xe.name === P.defaultName)) == null ? void 0 : le.mediaImageGID) || null);
        return { color: (fe == null ? void 0 : fe.color) || null, image: ke || (fe == null ? void 0 : fe.image) || null };
      }
      if (Be.swatchType === "productImageDropdown" || Be.swatchType === "productImageButtons") {
        const ke = F.position - 1, xe = ee.variants.filter((re) => re.image && re.options[ke] === P.name);
        let ge = xe[0], ce = 0;
        for (const re of xe) {
          let he = 0;
          for (let ye = 0; ye < ke; ye++) re.options[ye] === T[ye] && he++;
          he > ce && (ce = he, ge = re);
        }
        return { color: null, image: (ge == null ? void 0 : ge.image) || null };
      }
      return { color: null, image: null };
    }
    function E(F) {
      if (!F) return;
      const { red: P, green: z, blue: ae } = F;
      return `#${P.toString(16).padStart(2, "0")}${z.toString(16).padStart(2, "0")}${ae.toString(16).padStart(2, "0")}`;
    }
    function oe(F, P, z, ae) {
      const T = F - 1, ee = z.slice(0, T);
      return ae.variants.filter((Y) => Y.options[T] === P && ee.every((le, fe) => Y.options[fe] === le));
    }
    function J(F, P, z) {
      if (F.length === 0) return null;
      let ae = F[0], T = -1;
      const ee = z.slice(P);
      for (const Y of F) {
        let le = 0;
        for (let fe = 0; fe < ee.length; fe++) Y.options[P + fe] === ee[fe] && (le += ee.length - fe);
        le > T && (T = le, ae = Y);
      }
      return ae;
    }
    var U = { get product() {
      return s();
    }, set product(F) {
      s(F), k();
    }, get selectedVariantId() {
      return i();
    }, set selectedVariantId(F) {
      i(F), k();
    }, get number() {
      return u();
    }, set number(F = void 0) {
      u(F), k();
    }, get showImage() {
      return g();
    }, set showImage(F = !1) {
      g(F), k();
    }, get forceDropdown() {
      return b();
    }, set forceDropdown(F = !1) {
      b(F), k();
    }, get onChange() {
      return h();
    }, set onChange(F) {
      h(F), k();
    }, get onOptionChange() {
      return v();
    }, set onOptionChange(F) {
      v(F), k();
    } }, M = Qh();
    let B;
    var j = S(M);
    let N;
    var H = S(j), X = (F) => {
      var P = Lh();
      be(() => Pe(P, "src", e(K))), p(F, P);
    }, V = (F) => {
      var P = Ie(), z = pe(P), ae = (T) => {
        var ee = jh(), Y = G(S(ee), 2), le = S(Y, !0);
        y(Y), y(ee), be(() => ft(le, u())), p(T, ee);
      };
      O(z, (T) => {
        u() && T(ae);
      }, !0), p(F, P);
    };
    O(H, (F) => {
      e(K) ? F(X) : F(V, !1);
    });
    var Z = G(H, 2), q = S(Z);
    Dt(q, 21, () => e(L), (F) => F.name, (F, P) => {
      var z = Ie(), ae = pe(z), T = (Y) => {
        var le = Rh(), fe = S(le), Be = S(fe), ke = S(Be);
        y(Be);
        var xe = G(Be, 2), ge = (re) => {
          var he = Eh(), ye = S(he, !0);
          y(he), be(() => ft(ye, e(I)[e(P).position - 1])), p(re, he);
        };
        O(xe, (re) => {
          R.includes(e(P).swatchType) && re(ge);
        }), y(fe);
        var ce = G(fe, 2);
        c(ce, () => e(P)), y(le), be(() => {
          var re;
          return ft(ke, `${(re = e(P).name) != null ? re : ""}:`);
        }), p(Y, le);
      }, ee = (Y) => {
        c(Y, () => e(P));
      };
      O(ae, (Y) => {
        e(Q) ? Y(T) : Y(ee, !1);
      }), p(F, z);
    }), y(q);
    var W = G(q, 2), te = (F) => {
      var P = Nh();
      Te(S(P), () => $e(_, "$translate", l)("system.invalid_variant")), y(P), p(F, P);
    };
    O(W, (F) => {
      e(w) && e(w).availableForSale || F(te);
    }), y(Z), y(j), y(M), be((F, P) => {
      B = Lt(M, 1, "kaching-bundles__bar-variant", null, B, F), N = Lt(j, 1, "kaching-bundles__bar-variant__content", null, N, P);
    }, [() => ({ "kaching-bundles__bar-variant--invalid": !e(w) || !e(w).availableForSale }), () => ({ "kaching-bundles__bar-variant__content--with-option-names": e(Q) })]), p(n, M);
    var de = Xe(U);
    return o(), de;
  }
  Qe(Un, { product: {}, selectedVariantId: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var Wh = $('<a target="_blank"><!></a>'), Uh = $("<div><!></div>");
  function Xn(n, t) {
    Ke(t, !0);
    const r = m(t, "url", 7), a = m(t, "children", 7), l = m(t, "class", 7);
    var o = { get url() {
      return r();
    }, set url(g) {
      r(g), k();
    }, get children() {
      return a();
    }, set children(g) {
      a(g), k();
    }, get class() {
      return l();
    }, set class(g) {
      l(g), k();
    } }, c = Ie(), s = pe(c), i = (g) => {
      var b = Wh();
      El(S(b), a), y(b), be(() => {
        Pe(b, "href", r()), Lt(b, 1, Zi(l()));
      }), p(g, b);
    }, u = (g) => {
      var b = Uh();
      El(S(b), a), y(b), be(() => Lt(b, 1, Zi(l()))), p(g, b);
    };
    return O(s, (g) => {
      r() ? g(i) : g(u, !1);
    }), p(n, c), Xe(o);
  }
  Qe(Xn, { url: {}, children: {}, class: {} }, [], [], !0);
  const Fu = "priceFormatter", mi = (n = "{{amount}}", t) => {
    const r = ta(Lu(n, t));
    return ai(Fu, r), { formatPrice: r, setMoneyFormat: (a, l) => {
      r.set(Lu(a, l));
    } };
  }, cn = () => {
    const n = ri(Fu);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, Lu = (n, t) => (r, a) => Hh(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), Hh = (n, t, r) => {
    const a = ((i, u) => u ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), l = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, c = a.match(o), s = (l[c ? c[1] : "amount"] || l.amount)(n / 100);
    return a.replace(o, s);
  }, ju = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Eu = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var pt = ((n) => (n.QuantityBreak = "quantity-break", n.Bxgy = "bxgy", n.Bundle = "bundle", n.MixAndMatch = "mix-and-match", n.Sku = "sku", n))(pt || {});
  const Zh = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalCompareAtPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
    if (n !== void 0) return { value: n, type: "number" };
  }, buy_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== pt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: t - Math.floor(t / r) * n.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== pt.Bxgy) return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: Math.floor(t / r) * n.getQuantity, type: "number" };
  }, saved_percentage: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, dealBar: r, legacySavedPercentage: a }) => {
    if (a && r && (r.dealBarType === pt.QuantityBreak || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
    if (n <= 0) return { value: 0, type: "percentage" };
    let l = (n - t) / n * 100;
    return l = Math.round(100 * l) / 100, { value: Math.round(l), type: "percentage" };
  }, new_unit_price: ({ totalDiscountedPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, saved_per_unit: ({ totalCompareAtPrice: n, totalDiscountedPrice: t, unitQuantity: r }) => {
    if (r) return { value: (n - t) / r, type: "price", preserveDecimals: !0 };
  }, original_unit_price: ({ totalFullPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, unit_quantity: ({ unitQuantity: n }) => {
    if (n) return { value: n, type: "number" };
  }, selling_plan_discount: ({ sellingPlan: n, totalFullPrice: t, quantity: r }) => {
    const a = n == null ? void 0 : n.priceAdjustment;
    if (a) switch (a.type) {
      case "percentage":
        return a.value <= 0 ? void 0 : { value: a.value, type: "percentage" };
      case "fixed_amount":
        return a.value <= 0 ? void 0 : { value: a.value, type: "price" };
      case "price": {
        const l = t / r - a.value;
        return l <= 0 ? void 0 : { value: l, type: "price" };
      }
    }
  } }, Jh = (n) => {
    if (!n) return;
    const t = n.options.join(" / ");
    return t && t !== "Default Title" ? t : void 0;
  }, Yh = ({ variable: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, sellingPlan: o }) => {
    var c, s;
    const i = n.match(/^product_(\d+)$/);
    if (i) {
      const u = Number(i[1]);
      return (c = r == null ? void 0 : r.get(u)) == null ? void 0 : c.title;
    }
    switch (n) {
      case "product":
        return (s = t == null ? void 0 : t.title) != null ? s : a && a.length > 0 ? a.join(", ") : void 0;
      case "variant_title":
        return ((u) => {
          if (!u) return;
          const g = [];
          for (const { variant: b, quantity: h } of u) {
            const v = Jh(b);
            if (!v) continue;
            const _ = g.find((f) => f.title === v);
            _ ? _.count += h : g.push({ title: v, count: h });
          }
          return g.length !== 0 ? g.length === 1 && g[0].count === 1 ? g[0].title : g.map(({ title: b, count: h }) => `${h}× ${b}`).join(", ") : void 0;
        })(l);
      case "metafield":
        return (t == null ? void 0 : t.metafields.text) || void 0;
      case "metafield2":
        return (t == null ? void 0 : t.metafields.text2) || void 0;
      case "metafield3":
        return (t == null ? void 0 : t.metafields.text3) || void 0;
      case "metafield4":
        return (t == null ? void 0 : t.metafields.text4) || void 0;
      case "selling_plan":
        return (o == null ? void 0 : o.name) || void 0;
    }
  }, Ru = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, Nu = /\{\{[^}]*\}\}/g, Kh = (n) => n.replace(Nu, ""), Xh = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: s, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: b, sellingPlan: h, freeGiftsCount: v }) => (_, f, x) => {
    const D = Zh[_];
    if (D) {
      const w = D({ totalFullPrice: o, totalCompareAtPrice: c != null ? c : o, totalDiscountedPrice: s, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: b, sellingPlan: h, freeGiftsCount: v });
      if (!w) return;
      let I = w.value;
      if (f !== void 0 && x !== void 0) {
        const Q = ((R, K, C) => {
          switch (K) {
            case "+":
              return R + C;
            case "-":
              return R - C;
            case "*":
              return R * C;
            case "/":
              return C === 0 ? void 0 : R / C;
          }
        })(I, f, w.type !== "price" || f !== "+" && f !== "-" ? x : 100 * x);
        if (Q === void 0) return;
        I = Q;
      }
      const L = f === "/" || w.preserveDecimals === !0;
      return ((Q, R, K, C) => {
        switch (R) {
          case "price":
            return K(Q, { preserveDecimals: C });
          case "number":
            return String(Math.round(100 * Q) / 100);
          case "percentage":
            return `${Math.round(Q)}%`;
        }
      })(I, w.type, n, L);
    }
    if (f === void 0) return Yh({ variable: _, product: t, products: r, selectedProductTitles: a, selectedVariants: l, sellingPlan: h });
  }, un = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: s, quantity: i, dealBar: u, legacySavedPercentage: g = !1, unitQuantity: b, sellingPlan: h, freeGiftsCount: v }) => (_) => {
    if (!_) return _;
    const f = Xh({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, selectedVariants: l, totalFullPrice: o, totalCompareAtPrice: c, totalDiscountedPrice: s, quantity: i, dealBar: u, legacySavedPercentage: g, unitQuantity: b, sellingPlan: h, freeGiftsCount: v });
    return _.replace(Ru, (x, D, w, I) => {
      var L;
      if (w && I) {
        const Q = parseFloat(I);
        return (L = f(D, w, Q)) != null ? L : "";
      }
      return f(D) || "";
    }).replace(Nu, "");
  };
  function ao(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function kr(n) {
    return n.reduce((t, { variant: r, quantity: a }) => {
      const { unitPriceMeasurement: l } = r;
      if (!l) return t;
      const o = (function(c, s, i) {
        if (s === i) return c;
        if (s === "g" && i === "kg" || s === "ml" && i === "l") return c / 1e3;
      })(l.quantityValue, l.quantityUnit, l.referenceUnit);
      return o ? t + o / l.referenceValue * a : t;
    }, 0) || null;
  }
  var ep = $('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), tp = $('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), np = $('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), rp = $('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), ap = $('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), ip = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), lp = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), sp = $('<img alt="Decrease"/>'), op = $('<img alt="Increase"/>'), cp = $('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), up = $("<img/>"), dp = $("<!> <!>", 1), gp = $('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function Qu(n, t) {
    Ke(t, !0);
    const r = () => $e(x, "$formatPrice", l), a = () => $e(f, "$translate", l), [l, o] = vt(), c = m(t, "product", 7), s = m(t, "dealBlock", 7), i = m(t, "multipleGiftsSelector", 7), u = m(t, "selectedVariantIds", 7), g = m(t, "availableQuantity", 7), b = m(t, "onSelect", 7), h = m(t, "onRemove", 7), v = m(t, "onVariantChange", 7), _ = m(t, "onQuantityChange", 7), f = It(), x = cn();
    let D = De(!1);
    const w = d(() => u().length > 0), I = d(() => u().length || 1), L = d(() => !e(w) && g() === 0), Q = d(() => c().variants.find((ke) => ke.id === u()[0]) || c().variants[0]), R = d(() => e(D) && e(Q).image || c().image), K = d(() => u().map((ke) => c().variants.find((xe) => xe.id === ke) || c().variants[0])), C = d(() => e(K).length > 0 ? e(K).reduce((ke, xe) => ke + U(s(), xe), 0) : U(s(), e(Q))), ne = d(() => c().url ? `${c().url}?variant=${u()[0] || c().variants[0].id}` : void 0), A = d(() => s().chooseMultipleGiftsModal), E = d(() => un({ priceFormatter: r(), product: c(), totalFullPrice: e(C), totalDiscountedPrice: 0, quantity: e(I), unitQuantity: kr(e(K).map((ke) => ({ variant: ke, quantity: 1 }))) })), oe = d(() => {
      var ke;
      return e(E)(a()(((ke = e(A)) == null ? void 0 : ke.subtitle) || ""));
    }), J = d(() => {
      var ke, xe;
      return e(w) ? (ke = e(A)) == null ? void 0 : ke.buttonTextAfterSelection : (xe = e(A)) == null ? void 0 : xe.buttonTextBeforeSelection;
    });
    function U(ke, xe) {
      return ke.useProductCompareAtPrice && xe.compareAtPrice ? Math.max(xe.price, xe.compareAtPrice) : xe.price;
    }
    function M() {
      e(I) <= 1 || _()(e(I) - 1);
    }
    function B() {
      e(I) >= g() || _()(e(I) + 1);
    }
    var j = { get product() {
      return c();
    }, set product(ke) {
      c(ke), k();
    }, get dealBlock() {
      return s();
    }, set dealBlock(ke) {
      s(ke), k();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(ke) {
      i(ke), k();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(ke) {
      u(ke), k();
    }, get availableQuantity() {
      return g();
    }, set availableQuantity(ke) {
      g(ke), k();
    }, get onSelect() {
      return b();
    }, set onSelect(ke) {
      b(ke), k();
    }, get onRemove() {
      return h();
    }, set onRemove(ke) {
      h(ke), k();
    }, get onVariantChange() {
      return v();
    }, set onVariantChange(ke) {
      v(ke), k();
    }, get onQuantityChange() {
      return _();
    }, set onQuantityChange(ke) {
      _(ke), k();
    } }, N = gp(), H = S(N), X = S(H), V = (ke) => {
      Xn(ke, { get url() {
        return e(ne);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (xe, ge) => {
        var ce = ep();
        Pe(ce, "width", 100), Pe(ce, "height", 100), be(() => Pe(ce, "src", e(R))), p(xe, ce);
      }, $$slots: { default: !0 } });
    };
    O(X, (ke) => {
      e(R) && ke(V);
    });
    var Z = G(X, 2), q = S(Z);
    Xn(q, { get url() {
      return e(ne);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (ke, xe) => {
      var ge = tp(), ce = S(ge, !0);
      y(ge), be(() => ft(ce, c().title)), p(ke, ge);
    }, $$slots: { default: !0 } });
    var W = G(q, 2), te = (ke) => {
      var xe = np();
      Te(S(xe), () => e(oe)), y(xe), p(ke, xe);
    };
    O(W, (ke) => {
      e(oe) && ke(te);
    });
    var de = G(W, 2), F = S(de);
    Te(S(F), () => a()("system.free")), y(F);
    var P = G(F, 2), z = (ke) => {
      var xe = Ie();
      at(pe(xe), () => e(C), (ge) => {
        var ce = rp();
        Te(S(ce), () => r()(e(C))), y(ce), p(ge, ce);
      }), p(ke, xe);
    };
    O(P, (ke) => {
      i().showPrice && e(C) > 0 && ke(z);
    }), y(de);
    var ae = G(de, 2), T = (ke) => {
      var xe = lp();
      Dt(xe, 21, u, Mr, (ge, ce, re) => {
        var he = ip(), ye = S(he), Ae = S(ye), Oe = (_e) => {
          na(_e, { get product() {
            return c();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        O(Ae, (_e) => {
          re === 0 && _e(Oe);
        });
        var Ve = G(Ae, 2), ie = S(Ve), we = (_e) => {
          var Me = ap();
          Me.textContent = `#${re + 1}`, p(_e, Me);
        };
        O(ie, (_e) => {
          u().length > 1 && _e(we);
        });
        var He = G(ie, 2);
        Un(S(He), { get product() {
          return c();
        }, get selectedVariantId() {
          return e(ce);
        }, onChange: (_e) => {
          se(D, !0), v()(re, _e);
        } }), y(He), y(Ve), y(ye), y(he), p(ge, he);
      }), y(xe), p(ke, xe);
    };
    O(ae, (ke) => {
      c().variants.length > 1 && ke(T);
    }), y(Z), y(H);
    var ee = G(H, 2), Y = S(ee), le = (ke) => {
      var xe = cp(), ge = S(xe);
      {
        let ye = d(() => e(I) <= 1);
        Zt(ge, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: M, get disabled() {
          return e(ye);
        }, children: (Ae, Oe) => {
          var Ve = sp();
          be(() => Pe(Ve, "src", ju)), p(Ae, Ve);
        }, $$slots: { default: !0 } });
      }
      var ce = G(ge, 2), re = S(ce, !0);
      y(ce);
      var he = G(ce, 2);
      {
        let ye = d(() => e(I) >= g());
        Zt(he, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: B, get disabled() {
          return e(ye);
        }, children: (Ae, Oe) => {
          var Ve = op();
          be(() => Pe(Ve, "src", Eu)), p(Ae, Ve);
        }, $$slots: { default: !0 } });
      }
      y(xe), be(() => ft(re, e(I))), p(ke, xe);
    };
    O(Y, (ke) => {
      e(w) && i().maxQuantity > 1 && ke(le);
    });
    var fe = G(Y, 2);
    {
      let ke = d(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(L) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(w) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Zt(fe, { element: "span", get class() {
        return e(ke);
      }, onclick: function() {
        e(w) ? (se(D, !1), h()()) : b()();
      }, get disabled() {
        return e(L);
      }, children: (xe, ge) => {
        var ce = dp(), re = pe(ce), he = (Ve) => {
          var ie = up();
          be((we) => {
            Pe(ie, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Pe(ie, "alt", we);
          }, [() => a()("system.remove")]), p(Ve, ie);
        };
        O(re, (Ve) => {
          e(w) && Ve(he);
        });
        var ye = G(re, 2), Ae = (Ve) => {
          var ie = Wn();
          be((we) => ft(ie, we), [() => a()(e(J))]), p(Ve, ie);
        }, Oe = (Ve) => {
          p(Ve, Wn("Choose"));
        };
        O(ye, (Ve) => {
          e(J) ? Ve(Ae) : Ve(Oe, !1);
        }), p(xe, ce);
      }, $$slots: { default: !0 } });
    }
    y(ee), y(N), p(n, N);
    var Be = Xe(j);
    return o(), Be;
  }
  Qe(Qu, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const hp = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function pp(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function bp(n, t, r, a, l) {
    var o;
    const c = t();
    r()(a().id, c), (o = l()) == null || o();
  }
  var fp = $('<img alt="Close"/>'), vp = $('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function io(n, t) {
    Ke(t, !0);
    const r = () => $e(b, "$translate", a), [a, l] = vt(), o = m(t, "dealBlock", 7), c = m(t, "multipleGiftsSelector", 7), s = m(t, "products", 23, () => []), i = m(t, "initialSelectedGifts", 23, () => []), u = m(t, "onConfirm", 7, () => {
    }), g = m(t, "onClose", 7), b = It();
    let h = De(st((function(Z) {
      const q = {};
      for (const W of Z) {
        const te = W.product.id;
        q[te] || (q[te] = []), q[te].push(W.variant.id);
      }
      return q;
    })(i())));
    const v = d(() => o().chooseMultipleGiftsModal), _ = d(() => ((Z) => Z ? bn({ "kaching-choose-multiple-gifts-button-size": Z.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": Z.textSize + "px", "kaching-choose-multiple-gifts-price-color": je(Z.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": je(Z.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": je(Z.textColor), "kaching-choose-multiple-gifts-button-color": je(Z.buttonColor), "kaching-choose-multiple-gifts-button-text-color": je(Z.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": Z.productPhotoSize + "px" }) : "")(e(v) || null)), f = d(() => c().maxQuantity), x = d(() => Object.values(e(h)).reduce((Z, q) => Z + q.length, 0));
    function D(Z) {
      return e(h)[Z] || [];
    }
    function w(Z) {
      const q = Z.variants.find((W) => W.availableForSale);
      return (q == null ? void 0 : q.id) || Z.variants[0].id;
    }
    const I = d(() => {
      var Z;
      return ((Z = e(v)) == null ? void 0 : Z.footerText) || "FREE gifts selected";
    });
    var L = { get dealBlock() {
      return o();
    }, set dealBlock(Z) {
      o(Z), k();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(Z) {
      c(Z), k();
    }, get products() {
      return s();
    }, set products(Z = []) {
      s(Z), k();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(Z = []) {
      i(Z), k();
    }, get onConfirm() {
      return u();
    }, set onConfirm(Z = () => {
    }) {
      u(Z), k();
    }, get onClose() {
      return g();
    }, set onClose(Z) {
      g(Z), k();
    } }, Q = vp(), R = S(Q), K = S(R), C = S(K), ne = (Z) => {
      var q = Wn();
      be((W) => ft(q, W), [() => r()(e(v).heading)]), p(Z, q);
    };
    O(C, (Z) => {
      var q;
      (q = e(v)) != null && q.heading && Z(ne);
    }), y(K);
    var A = G(K, 2), E = (Z) => {
      Zt(Z, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return g();
      }, children: (q, W) => {
        var te = fp();
        be(() => Pe(te, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(q, te);
      }, $$slots: { default: !0 } });
    };
    O(A, (Z) => {
      g() && Z(E);
    }), y(R);
    var oe = G(R, 2);
    Dt(oe, 21, s, (Z) => Z.id, (Z, q) => {
      {
        let W = d(() => D(e(q).id)), te = d(() => (function(de) {
          const F = D(de).length;
          return e(f) - e(x) + F;
        })(e(q).id));
        Qu(Z, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return c();
        }, get product() {
          return e(q);
        }, get selectedVariantIds() {
          return e(W);
        }, get availableQuantity() {
          return e(te);
        }, onSelect: () => (function(de) {
          if (e(x) >= e(f)) return;
          const F = w(de), P = s().length === 1 ? e(f) : 1;
          se(h, { ...e(h), [de.id]: Array(P).fill(F) }, !0);
        })(e(q)), onRemove: () => (function(de) {
          const { [de]: F, ...P } = e(h);
          se(h, P, !0);
        })(e(q).id), onVariantChange: (de, F) => (function(P, z, ae) {
          const T = D(P);
          if (z >= T.length) return;
          const ee = [...T];
          ee[z] = ae, se(h, { ...e(h), [P]: ee }, !0);
        })(e(q).id, de, F), onQuantityChange: (de) => (function(F, P) {
          const z = D(F.id), ae = z.length;
          if (P === ae) return;
          let T;
          if (P > ae) {
            const ee = w(F), Y = P - ae;
            T = [...z, ...Array(Y).fill(ee)];
          } else T = z.slice(0, P);
          se(h, { ...e(h), [F.id]: T }, !0);
        })(e(q), de) });
      }
    }), y(oe);
    var J = G(oe, 2), U = S(J), M = S(U);
    y(U);
    var B = G(U, 2), j = S(B);
    j.__click = [pp, g];
    var N = S(j, !0);
    y(j);
    var H = G(j, 2);
    H.__click = [bp, function() {
      const Z = [];
      for (const q of s()) {
        const W = D(q.id);
        for (const te of W) {
          const de = q.variants.find((P) => P.id === te);
          if (!de) continue;
          const F = o().useProductCompareAtPrice && de.compareAtPrice ? Math.max(de.price, de.compareAtPrice) : de.price;
          Z.push({ id: `${te}`, variant: de, product: q, quantity: 1, fullPrice: F });
        }
      }
      return Z;
    }, u, c, g];
    var X = S(H, !0);
    y(H), y(B), y(J), y(Q), be((Z, q, W) => {
      var te, de;
      Tt(Q, e(_)), ft(M, `${(te = e(x)) != null ? te : ""}/${(de = e(f)) != null ? de : ""}
      ${Z != null ? Z : ""}`), ft(N, q), ft(X, W);
    }, [() => r()(e(I)), () => r()("system.cancel"), () => r()("system.confirm")]), p(n, Q);
    var V = Xe(L);
    return l(), V;
  }
  On(["click"]), Qe(io, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var _p = $('<div class="kaching-bundles"><!></div>');
  function Wu(n, t) {
    var r;
    Ke(t, !0);
    const a = m(t, "config", 7), l = m(t, "dealBlock", 7), o = m(t, "products", 23, () => []), c = m(t, "mediaImages", 7), s = m(t, "translations", 7), i = m(t, "multipleGiftsSelector", 7), { setConfig: u } = Qa(a()), { setMoneyFormat: g } = mi(a().moneyFormat), { setTranslations: b } = Na(s()), { setMediaImages: h } = tl(c()), { setSwatchSettings: v } = Ki({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r });
    Je(() => {
      u(a());
    }), Je(() => {
      g(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      b(s());
    }), Je(() => {
      h(c());
    }), Je(() => {
      var w;
      v({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (w = l().showSelectedSwatchName) != null && w });
    });
    var _ = { get config() {
      return a();
    }, set config(w) {
      a(w), k();
    }, get dealBlock() {
      return l();
    }, set dealBlock(w) {
      l(w), k();
    }, get products() {
      return o();
    }, set products(w = []) {
      o(w), k();
    }, get mediaImages() {
      return c();
    }, set mediaImages(w) {
      c(w), k();
    }, get translations() {
      return s();
    }, set translations(w) {
      s(w), k();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(w) {
      i(w), k();
    } }, f = Ie(), x = pe(f), D = (w) => {
      var I = _p();
      io(S(I), { get dealBlock() {
        return l();
      }, get products() {
        return o();
      }, get multipleGiftsSelector() {
        return i();
      } }), y(I), p(w, I);
    };
    return O(x, (w) => {
      i() && w(D);
    }), p(n, f), Xe(_);
  }
  function nl(n, t) {
    var r;
    if (!t) return n.price;
    const a = n.sellingPlans.find((l) => l.id === t.id);
    return (r = a == null ? void 0 : a.price) != null ? r : n.price;
  }
  function lo(n, t) {
    const r = t.priceAdjustment;
    if (!r) return n;
    switch (r.type) {
      case "percentage":
        return n * (1 - r.value / 100);
      case "fixed_amount":
        return n - r.value;
      case "price":
        return r.value;
    }
  }
  function rl(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((l) => l.id === r.id)));
  }
  function so(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const l = Ut(n.sellingPlanGid);
      a = t.find((o) => o.id === l);
    } else a = r || t[0];
    return a && t.some((l) => l.id === a.id) ? a : t[0];
  }
  function oo(n, t, r, a) {
    return n || (t ? r.some((l) => l.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Qe(Wu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  const er = (n, t, r) => kp(n, t, r) || mp(n, t), kp = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((o) => o.id));
    return a.has(r.id) ? n.sellingPlans.find((o) => o.id === r.id) : n.sellingPlans.find((o) => a.has(o.id) && o.name === r.name) || n.sellingPlans.find((o) => o.id === t.sellingPlans[0].id);
  }, mp = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function ra({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: l, priceRounding: o, sellingPlan: c, percentageCentsRoundingWorkaround: s }) {
    const i = (function({ discountType: b, discountValue: h, discountQuantity: v, variantQuantities: _, currencyRate: f, sellingPlan: x, percentageCentsRoundingWorkaround: D }) {
      const w = _.map(({ variant: Q, quantity: R }) => nl(Q, x) * R), I = w.reduce((Q, R) => Q + R, 0), L = _.map(({ quantity: Q }) => Q).reduce((Q, R) => Q + R, 0);
      if (b === "specific") {
        let Q = 100 * Number(h) * f;
        if (L > Number(v)) {
          const C = Q / Number(v);
          Q = Math.ceil(C * L);
        }
        const R = Q / L;
        let K = 0;
        for (const { variant: C, quantity: ne } of _) {
          if (x && C.sellingPlans.some((A) => A.id === x.id) && x.priceAdjustment) {
            K += lo(R, x) * ne;
            continue;
          }
          K += R * ne;
        }
        return Math.max(0, Math.min(K, I));
      }
      if (b === "percentage") {
        if (D) {
          const R = I * (100 - Number(h)) / 100;
          return Math.max(0, Math.min(Math.ceil(R), I));
        }
        let Q = 0;
        for (const { variant: R, quantity: K } of _) {
          const C = nl(R, x);
          Q += Math.ceil(C * (100 - Number(h)) / 100) * K;
        }
        return Math.max(0, Math.min(Q, I));
      }
      if (b === "amount") {
        const Q = Math.round(100 * Number(h)) * f, R = Q * L;
        return typeof document != "undefined" && I > 0 && R > I && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: R, fullOrderPrice: I } })), Math.max(0, Math.min(I - Q * L, I));
      }
      return I;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: l, sellingPlan: c, percentageCentsRoundingWorkaround: s }), u = a.map(({ variant: b, quantity: h }) => o != null && o.v2 ? nl(b, c) * h : b.price * h).reduce((b, h) => b + h, 0), g = a.map(({ quantity: b }) => b).reduce((b, h) => b + h, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const b = xi(i / g, o.precision) * g;
        return o.v2 && Math.round(b) > Math.round(u) && i / g > 100 ? xi(i / g - 100, o.precision) * g : b <= u ? b : i;
      }
      {
        const b = xi(i, o.precision);
        return o.v2 && Math.round(b) > Math.round(u) && i > 100 ? xi(i - 100, o.precision) : b <= u ? b : i;
      }
    }
    return i;
  }
  function Uu(n, t, r, a, l, o) {
    return ra({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: l, percentageCentsRoundingWorkaround: o });
  }
  function Hu(n, t, r, a, l) {
    var o, c, s, i;
    const u = [...t].sort((x, D) => x.variant.price - D.variant.price), g = u.reduce((x, D) => x + D.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, b = [], h = [];
    let v = g;
    for (const { variant: x, quantity: D } of u) {
      const w = Math.min(D, v), I = D - w;
      v -= w, w > 0 && b.push({ variant: x, quantity: w }), I > 0 && h.push({ variant: x, quantity: I });
    }
    const _ = b.length > 0 ? ra({ discountType: (o = n.getDiscountType) != null ? o : "percentage", discountValue: (c = n.getDiscountValue) != null ? c : 100, discountQuantity: g, variantQuantities: b, currencyRate: r, priceRounding: a, sellingPlan: l }) : 0, f = h.reduce((x, D) => x + D.quantity, 0);
    return _ + ra({ discountType: (s = n.buyDiscountType) != null ? s : "default", discountValue: (i = n.buyDiscountValue) != null ? i : 0, discountQuantity: f, variantQuantities: h, currencyRate: r, priceRounding: a, sellingPlan: l });
  }
  function co(n, t, r, a, l) {
    return n.bundleProducts.filter(({ productGID: o }) => o).map((o) => {
      const c = t[o.id];
      if (!c) return 0;
      const s = er(c.product, c.variant, l);
      return ra({ discountType: o.discountType, discountValue: o.discountValue, discountQuantity: o.quantity, variantQuantities: [c], currencyRate: r, priceRounding: a, sellingPlan: s });
    }).reduce((o, c) => o + c, 0);
  }
  function is(n, t, r, a, l) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, u) => {
      const g = t[u.id];
      if (!g) return i;
      const b = er(g.product, g.variant, l);
      return i + (b ? lo(g.variant.price, b) : g.variant.price);
    }, 0), c = Number(n.discountValue) || 0;
    let s;
    switch (n.discountType) {
      case "percentage":
        s = o * (1 - Math.min(Math.max(c, 0), 100) / 100);
        break;
      case "amount":
        s = o - Math.round(100 * c) * r;
        break;
      case "specific":
        s = Math.round(100 * c) * r;
        break;
      default:
        s = o;
    }
    if (s = Math.max(0, Math.min(s, o)), a && (n.discountType !== "default" || a.v2)) {
      const i = s;
      let u = xi(i, a.precision);
      a.v2 && Math.round(u) > Math.round(o) && i > 100 && (u = xi(i - 100, a.precision)), s = u <= o ? u : i;
    }
    return Math.max(0, Math.round(s));
  }
  function xi(n, t = ".00") {
    switch (t) {
      case ".99":
        return n > 99 ? 100 * Math.ceil(n / 100) - 1 : n;
      case ".95":
        return n > 95 ? 100 * Math.ceil(n / 100) - 5 : n;
      case ".90":
        return n > 90 ? 100 * Math.ceil(n / 100) - 10 : n;
      case ".x9":
        return n > 9 ? 10 * Math.ceil(n / 10) - 1 : n;
      case ".x0":
        return 10 * Math.ceil(n / 10);
      default:
        return 100 * Math.ceil(n / 100);
    }
  }
  var xp = $('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), yp = $('<span class="kaching-bundles__choose-product__product-title"> </span>'), wp = $('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), Pp = $('<div class="kaching-bundles__choose-product__product-price"><!></div>'), Sp = $('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), Bp = $("<div><!> <!></div>"), Cp = $('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function Zu(n, t) {
    var r;
    Ke(t, !0);
    const a = () => $e(_, "$config", c), l = () => $e(v, "$formatPrice", c), o = () => $e(h, "$translate", c), [c, s] = vt(), i = m(t, "product", 7), u = m(t, "dealBlock", 7), g = m(t, "dealBar", 7), b = m(t, "onChoose", 7), h = It(), v = cn(), _ = _n();
    let f = De(!1), x = De(st(((r = i().variants.find((P) => P.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const D = d(() => i().variants.find((P) => P.id === e(x)) || i().variants[0]), w = d(() => {
      var P;
      return e(f) || ((P = u().chooseProductModal) == null ? void 0 : P.showVariantImageByDefault);
    }), I = d(() => e(w) && e(D).image || i().image), L = d(() => u().priceRounding ? { perItem: !0, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), Q = d(() => g().dealBarType === pt.Bxgy ? e(D).price : ra({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(D), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(L) })), R = d(() => (function(P, z) {
      return P.useProductCompareAtPrice && z.compareAtPrice ? Math.max(z.price, z.compareAtPrice) : z.price;
    })(u(), e(D))), K = d(() => i().url ? `${i().url}?variant=${e(x)}` : void 0), C = d(() => un({ priceFormatter: l(), product: i(), totalFullPrice: e(R), totalDiscountedPrice: e(Q), quantity: 1, unitQuantity: kr([{ variant: e(D), quantity: 1 }]) })), ne = d(() => e(C)(o()(u().chooseProductModal.subtitle || ""))), A = d(() => u().chooseProductModal.buttonText);
    function E(P) {
      se(f, !0), se(x, P, !0);
    }
    var oe = { get product() {
      return i();
    }, set product(P) {
      i(P), k();
    }, get dealBlock() {
      return u();
    }, set dealBlock(P) {
      u(P), k();
    }, get dealBar() {
      return g();
    }, set dealBar(P) {
      g(P), k();
    }, get onChoose() {
      return b();
    }, set onChoose(P) {
      b(P), k();
    } }, J = Cp(), U = S(J), M = S(U), B = (P) => {
      Xn(P, { get url() {
        return e(K);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (z, ae) => {
        var T = xp();
        Pe(T, "width", 100), Pe(T, "height", 100), be(() => Pe(T, "src", e(I))), p(z, T);
      }, $$slots: { default: !0 } });
    };
    O(M, (P) => {
      e(I) && P(B);
    });
    var j = G(M, 2), N = S(j);
    Xn(N, { get url() {
      return e(K);
    }, class: "kaching-bundles__choose-product__product-link", children: (P, z) => {
      var ae = yp(), T = S(ae, !0);
      y(ae), be(() => ft(T, i().title)), p(P, ae);
    }, $$slots: { default: !0 } });
    var H = G(N, 2), X = (P) => {
      var z = wp();
      Te(S(z), () => e(ne)), y(z), p(P, z);
    };
    O(H, (P) => {
      e(ne) && P(X);
    });
    var V = G(H, 2), Z = S(V);
    at(Z, () => e(Q), (P) => {
      var z = Pp();
      Te(S(z), () => l()(e(Q))), y(z), p(P, z);
    });
    var q = G(Z, 2), W = (P) => {
      var z = Ie();
      at(pe(z), () => e(R), (ae) => {
        var T = Sp();
        Te(S(T), () => l()(e(R))), y(T), p(ae, T);
      }), p(P, z);
    };
    O(q, (P) => {
      e(R) && e(R) > e(Q) && P(W);
    }), y(V);
    var te = G(V, 2), de = (P) => {
      var z = Bp(), ae = S(z);
      na(ae, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), Un(G(ae, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(x);
      }, onChange: E }), y(z), p(P, z);
    };
    O(te, (P) => {
      i().variants.length > 1 && P(de);
    }), y(j), y(U), Zt(G(U, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      b()({ product: i(), variant: e(D) });
    }, children: (P, z) => {
      var ae = Ie(), T = pe(ae), ee = (le) => {
        var fe = Wn();
        be((Be) => ft(fe, Be), [() => o()(e(A))]), p(le, fe);
      }, Y = (le) => {
        p(le, Wn("Choose"));
      };
      O(T, (le) => {
        e(A) ? le(ee) : le(Y, !1);
      }), p(P, ae);
    }, $$slots: { default: !0 } }), y(J), p(n, J);
    var F = Xe(oe);
    return s(), F;
  }
  Qe(Zu, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const uo = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var Ip = $('<img alt="Close"/>'), Mp = (n, t) => {
    se(t, !e(t));
  }, zp = (n, t, r, a) => {
    se(t, e(r).value, !0), se(a, !1);
  }, $p = $('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), Dp = $('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), Ap = $('<div class="kaching-bundles__choose-product__sort-menu"></div>'), Vp = $('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), Tp = (n, t) => {
    se(t, "");
  }, qp = $('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), Gp = $('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), Op = $('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function go(n, t) {
    var r;
    Ke(t, !0);
    const a = () => $e(b, "$translate", l), [l, o] = vt(), c = m(t, "dealBlock", 7), s = m(t, "dealBar", 7), i = m(t, "products", 23, () => []), u = m(t, "onChoose", 7), g = m(t, "onClose", 7), b = It(), h = d(() => c().chooseProductModal), v = d(() => ((V) => bn({ "kaching-choose-product-button-size": V.buttonSize + "px", "kaching-choose-product-text-size": V.textSize + "px", "kaching-choose-product-price-color": je(V.priceColor), "kaching-choose-product-compare-at-price-color": je(V.compareAtPriceColor), "kaching-choose-product-text-color": je(V.textColor), "kaching-choose-product-button-color": je(V.buttonColor), "kaching-choose-product-button-text-color": je(V.buttonTextColor), "kaching-choose-product-photo-size": V.productPhotoSize + "px" }))(e(h)));
    let _ = De(""), f = De(!1);
    const x = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, D = d(() => [{ value: x.Relevance, label: a()("system.sort_relevance") }, { value: x.NewestFirst, label: a()("system.sort_newest_first") }, { value: x.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: x.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let w = De(st(Object.values(x).includes((r = e(h).defaultSortOption) != null ? r : "") ? e(h).defaultSortOption : x.Relevance));
    const I = d(() => e(h).showSearchField ? i().filter((V) => V.title.toLowerCase().includes(e(_).toLowerCase().trim())) : i()), L = d(() => {
      const V = [...e(I)], Z = (W) => {
        const te = W.variants.find((de) => de.availableForSale) || W.variants[0];
        return (te == null ? void 0 : te.price) || 0;
      }, q = (W) => {
        if (!W.createdAt) return 0;
        const te = Date.parse(W.createdAt);
        return Number.isNaN(te) ? 0 : te;
      };
      switch (e(w)) {
        case x.Relevance:
          return V;
        case x.NewestFirst:
          return V.sort((W, te) => {
            const de = q(te) - q(W);
            return de !== 0 ? de : te.id - W.id;
          });
        case x.PriceLowToHigh:
          return V.sort((W, te) => Z(W) - Z(te));
        case x.PriceHighToLow:
          return V.sort((W, te) => Z(te) - Z(W));
        default:
          return V;
      }
    }), Q = d(() => e(h).showSearchField && e(_).trim().length > 0 && e(L).length === 0);
    function R() {
      se(f, !1);
    }
    function K(V, Z) {
      const q = (W) => {
        V.contains(W.target) || Z();
      };
      return document.addEventListener("click", q, !0), { destroy() {
        document.removeEventListener("click", q, !0);
      } };
    }
    var C = { get dealBlock() {
      return c();
    }, set dealBlock(V) {
      c(V), k();
    }, get dealBar() {
      return s();
    }, set dealBar(V) {
      s(V), k();
    }, get products() {
      return i();
    }, set products(V = []) {
      i(V), k();
    }, get onChoose() {
      return u();
    }, set onChoose(V) {
      u(V), k();
    }, get onClose() {
      return g();
    }, set onClose(V) {
      g(V), k();
    } }, ne = Op(), A = S(ne), E = S(A), oe = S(E), J = (V) => {
      var Z = Wn();
      be((q) => ft(Z, q), [() => a()(e(h).heading)]), p(V, Z);
    };
    O(oe, (V) => {
      e(h).heading && V(J);
    }), y(E), Zt(G(E, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return g();
    }, children: (V, Z) => {
      var q = Ip();
      be(() => Pe(q, "src", uo)), p(V, q);
    }, $$slots: { default: !0 } }), y(A);
    var U = G(A, 2), M = (V) => {
      var Z = Vp(), q = S(Z), W = S(q), te = G(W, 2);
      ea(te), y(q);
      var de = G(q, 2), F = S(de);
      F.__click = [Mp, f];
      var P = S(F), z = G(P);
      y(F);
      var ae = G(F, 2), T = (ee) => {
        var Y = Ap();
        Dt(Y, 21, () => e(D), (le) => le.value, (le, fe) => {
          var Be = Dp();
          Be.__click = [zp, w, fe, f];
          var ke = S(Be), xe = S(ke, !0);
          y(ke);
          var ge = G(ke, 2), ce = (re) => {
            var he = $p();
            be(() => Pe(he, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(re, he);
          };
          O(ge, (re) => {
            e(w) === e(fe).value && re(ce);
          }), y(Be), be(() => ft(xe, e(fe).label)), p(le, Be);
        }), y(Y), p(ee, Y);
      };
      O(ae, (ee) => {
        e(f) && ee(T);
      }), y(de), Rs(de, (ee, Y) => K == null ? void 0 : K(ee, Y), () => R), y(Z), be((ee, Y, le) => {
        Pe(W, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), Pe(te, "aria-label", ee), Pe(te, "placeholder", Y), Pe(P, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), ft(z, ` ${le != null ? le : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), Ug(te, () => e(_), (ee) => se(_, ee)), p(V, Z);
    };
    O(U, (V) => {
      e(h).showSearchField && V(M);
    });
    var B = G(U, 2), j = S(B), N = (V) => {
      var Z = Gp(), q = S(Z), W = (de) => {
        var F = qp(), P = pe(F), z = S(P);
        y(P);
        var ae = G(P, 2), T = S(ae, !0);
        y(ae);
        var ee = G(ae, 2), Y = S(ee, !0);
        y(ee);
        var le = G(ee, 2);
        le.__click = [Tp, _];
        var fe = S(le, !0);
        y(le), be((Be, ke, xe) => {
          Pe(z, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), ft(T, Be), ft(Y, ke), ft(fe, xe);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), p(de, F);
      }, te = (de) => {
        var F = Wn();
        be((P) => ft(F, P), [() => a()("system.no_products_available")]), p(de, F);
      };
      O(q, (de) => {
        e(Q) ? de(W) : de(te, !1);
      }), y(Z), p(V, Z);
    }, H = (V) => {
      var Z = Ie();
      Dt(pe(Z), 17, () => e(L), (q) => q.id, (q, W) => {
        Zu(q, { get dealBlock() {
          return c();
        }, get dealBar() {
          return s();
        }, get product() {
          return e(W);
        }, get onChoose() {
          return u();
        } });
      }), p(V, Z);
    };
    O(j, (V) => {
      e(L).length === 0 ? V(N) : V(H, !1);
    }), y(B), y(ne), be(() => Tt(ne, e(v))), p(n, ne);
    var X = Xe(C);
    return o(), X;
  }
  On(["click"]), Qe(go, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var Fp = $('<div class="kaching-bundles"><!></div>');
  function Ju(n, t) {
    var r;
    Ke(t, !0);
    const a = m(t, "config", 7), l = m(t, "dealBlock", 7), o = m(t, "dealBar", 7), c = m(t, "products", 23, () => []), s = m(t, "mediaImages", 7), i = m(t, "translations", 7), { setConfig: u } = Qa(a()), { setMoneyFormat: g } = mi(a().moneyFormat), { setTranslations: b } = Na(i()), { setMediaImages: h } = tl(s()), { setSwatchSettings: v } = Ki({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r });
    Je(() => {
      u(a());
    }), Je(() => {
      g(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      b(i());
    }), Je(() => {
      h(s());
    }), Je(() => {
      var x;
      v({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (x = l().showSelectedSwatchName) != null && x });
    });
    var _ = { get config() {
      return a();
    }, set config(x) {
      a(x), k();
    }, get dealBlock() {
      return l();
    }, set dealBlock(x) {
      l(x), k();
    }, get dealBar() {
      return o();
    }, set dealBar(x) {
      o(x), k();
    }, get products() {
      return c();
    }, set products(x = []) {
      c(x), k();
    }, get mediaImages() {
      return s();
    }, set mediaImages(x) {
      s(x), k();
    }, get translations() {
      return i();
    }, set translations(x) {
      i(x), k();
    } }, f = Fp();
    return go(S(f), { get dealBlock() {
      return l();
    }, get dealBar() {
      return o();
    }, get products() {
      return c();
    }, onChoose: () => {
    }, onClose: () => {
    } }), y(f), p(n, f), Xe(_);
  }
  customElements.define("kaching-bundles-choose-product", Qe(Ju, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  })), ti = !0;
  var Lp = Tn('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function Yu(n) {
    p(n, Lp());
  }
  Qe(Yu, {}, [], [], !0);
  const Ku = (n) => {
    const t = n.badgeStyle || "simple", r = n.badgeText || "", a = { type: "dealBar", dealBarId: n.id }, l = { id: `legacy-${n.id}`, attachedTo: a, text: r, colors: null };
    return t === "most-popular" ? { ...l, badgeType: "most-popular", size: 102 } : t === "custom" ? n.badgeImageGID ? { ...l, badgeType: "custom", imageGID: n.badgeImageGID, size: 56 } : null : r ? { ...l, badgeType: "simple", textSize: 12 } : null;
  }, al = (n, t) => {
    if (n.blockLayout !== "vertical") return [];
    const r = ls(n);
    if (r.length > 0) return r.filter((l) => l.attachedTo.type === "dealBar" && l.attachedTo.dealBarId === t.id);
    if (n.badgesEnabled === !1) return [];
    const a = Ku(t);
    return a ? [a] : [];
  }, jp = (n, t) => n.blockLayout !== "vertical" ? [] : ls(n).filter((r) => r.attachedTo.type === t), ls = (n) => n.badgesEnabled === !1 ? [] : n.badges || [], ka = (n, t, r) => ({ ...n, text: r(t(n.text)) }), Ep = (n) => {
    const t = n.filter((r) => r.badgeType === "border").map((r) => r.thickness);
    return t.length === 0 ? 22 : Math.max(...t);
  }, Rp = (n) => {
    const t = n.filter((r) => r.badgeType === "border").filter((r) => r.position === "all").map((r) => {
      var a;
      return (a = r.gap) != null ? a : 0;
    });
    return t.length === 0 ? 0 : Math.max(...t);
  };
  let il = null;
  const Xu = (n, t) => typeof document == "undefined" ? 0 : (il || (il = document.createElement("canvas").getContext("2d")), il ? (il.font = `bold ${t}px sans-serif`, il.measureText(n).width + 0.5 * n.length) : 0), Np = (n) => {
    const t = n.flatMap((r) => r.badgeType !== "border" || r.position !== "left" && r.position !== "right" ? [] : [Xu(r.text, r.textSize) + 24]);
    return t.length === 0 ? 0 : Math.max(...t);
  }, ma = (n) => ({ positions: new Set(n.flatMap((t) => t.badgeType === "border" ? [t.position] : [])), thickness: Ep(n), gap: Rp(n), sideLength: Np(n) });
  var Qp = Tn('<animate attributeName="startOffset" repeatCount="indefinite"></animate>'), Wp = Tn("<textPath><!> </textPath>"), Up = Tn("<!><!>", 1), Hp = Tn('<svg class="kaching-bundles__badge-border__curve"><path fill="none"></path><text text-anchor="middle"></text></svg>'), Zp = $('<span class="kaching-bundles__badge-border__side kaching-bundles__badge-border__side--top"><!></span>'), Jp = $('<div class="kaching-bundles__badge-border kaching-bundles__badge-border--all"><div class="kaching-bundles__badge-border__band"><span></span></div> <!></div>'), Yp = $('<div><span class="kaching-bundles__badge-border__text"><!></span></div>');
  function ed(n, t) {
    const r = (function() {
      var M, B, j;
      if (ht && Pt && Pt.nodeType === 8 && ((M = Pt.textContent) != null && M.startsWith("$"))) {
        const N = Pt.textContent.substring(1);
        return hr(), N;
      }
      return (j = (B = window.__svelte) != null ? B : window.__svelte = {}).uid != null || (j.uid = 1), "c" + window.__svelte.uid++;
    })();
    Ke(t, !0);
    const a = m(t, "badge", 7), l = typeof window != "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = d(() => Cu(a().colors)), c = d(() => {
      var M;
      return `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${a().textSize}px; --badge-ring-outer: ${a().thickness + ((M = a().gap) != null ? M : 0)}px;`;
    });
    let s = De(0), i = De(0);
    const u = d(() => a().position === "left" || a().position === "right"), g = d(() => {
      const M = Math.max(6, a().thickness - 6), B = e(u) ? e(i) : e(s), j = Math.max(1, a().text.trim().length), N = B > 0 ? (B - 16) / (0.62 * j) : 1 / 0;
      return Math.max(6, Math.min(a().textSize, M, N));
    }), b = d(() => `--badge-border-thickness: ${a().thickness}px; --badge-text-size: ${e(g)}px;`);
    let h = De(void 0), v = De(st({ count: 0, slot: 0, pathLength: 0 })), _ = De(void 0), f = De(0), x = De(0);
    const D = d(() => Math.max(6, Math.min(a().textSize, a().thickness - 6))), w = d(() => 0.32 * e(D)), I = d(() => 0.4 * e(D) + a().spacing), L = d(() => a().delimiter || ""), Q = d(() => (Xu(a().text.trim(), e(D)) || a().text.trim().length * e(D) * 0.7) + (e(L) ? e(D) : 0) + 2 * e(I));
    Je(() => {
      if (e(R), e(Q), !e(h)) return;
      const M = e(h).getTotalLength() / 2;
      if (M <= 0 || e(Q) <= 0) return;
      const B = Math.max(1, Math.floor(M / e(Q)));
      se(v, { count: B, slot: M / B, pathLength: M }, !0);
    });
    const R = d(() => {
      if (!e(_) || !e(f) || !e(x)) return "";
      const M = getComputedStyle(e(_)), B = parseFloat(M.getPropertyValue("--bar-border-radius")) || 8, j = parseFloat(M.getPropertyValue("--badge-border-gap")) || 0, N = a().thickness / 2 + e(w), H = e(f) - N, X = e(x) - N, V = Math.min(B + j + N, Math.max(0, Math.min(H - N, X - N) / 2)), Z = ["H " + (H - V), `A ${V} ${V} 0 0 1 ${H} ${N + V}`, "V " + (X - V), `A ${V} ${V} 0 0 1 ${H - V} ${X}`, `H ${N + V}`, `A ${V} ${V} 0 0 1 ${N} ${X - V}`, `V ${N + V}`, `A ${V} ${V} 0 0 1 ${N + V} ${N}`].join(" ");
      return `M ${N + V} ${N} ${Z} ${Z} Z`;
    }), K = `kaching-badge-ring-${r}`, C = d(() => a().repeatText && a().animated && a().spinSpeed > 0 && !l && e(v).pathLength > 0), ne = d(() => e(C) ? Math.max(2, e(v).pathLength / Math.max(1, a().spinSpeed)) : 0);
    var A = { get badge() {
      return a();
    }, set badge(M) {
      a(M), k();
    } }, E = Ie(), oe = pe(E), J = (M) => {
      var B = Jp(), j = G(S(B), 2), N = (X) => {
        var V = Ie();
        at(pe(V), () => e(R), (Z) => {
          var q = Ie(), W = pe(q), te = (de) => {
            var F = Hp();
            {
              const ae = (T, ee = yr, Y = yr) => {
                var le = Wp(), fe = S(le), Be = (xe) => {
                  var ge = Qp();
                  be(() => {
                    var ce;
                    Pe(ge, "from", a().spinDirection === "clockwise" ? ee() : ee() + e(v).pathLength), Pe(ge, "to", a().spinDirection === "clockwise" ? ee() + e(v).pathLength : ee()), Pe(ge, "dur", `${(ce = e(ne)) != null ? ce : ""}s`);
                  }), p(xe, ge);
                };
                O(fe, (xe) => {
                  e(C) && xe(Be);
                });
                var ke = G(fe, 1, !0);
                y(le), be(() => {
                  Pe(le, "href", `#${K}`), Pe(le, "startOffset", ee()), ft(ke, Y());
                }), p(T, le);
              };
              var P = S(F);
              bi(P, (T) => se(h, T), () => e(h));
              var z = G(P);
              Dt(z, 21, () => ({ length: e(v).count }), Mr, (T, ee, Y) => {
                var le = Up(), fe = pe(le);
                ae(fe, () => Y * e(v).slot + e(v).slot / 2, () => a().text);
                var Be = G(fe), ke = (xe) => {
                  ae(xe, () => Y * e(v).slot + e(v).slot, () => e(L));
                };
                O(Be, (xe) => {
                  e(L) && xe(ke);
                }), p(T, le);
              }), y(z), y(F), be(() => {
                Pe(P, "id", K), Pe(P, "d", e(R));
              });
            }
            be(() => {
              var ae, T;
              return Pe(F, "viewBox", `0 0 ${(ae = e(f)) != null ? ae : ""} ${(T = e(x)) != null ? T : ""}`);
            }), p(de, F);
          };
          O(W, (de) => {
            e(R) && de(te);
          }), p(Z, q);
        }), p(X, V);
      }, H = (X) => {
        var V = Zp();
        Te(S(V), () => a().text), y(V), p(X, V);
      };
      O(j, (X) => {
        a().repeatText && a().text.trim() ? X(N) : X(H, !1);
      }), y(B), bi(B, (X) => se(_, X), () => e(_)), be(() => {
        var X, V;
        return Tt(B, `${(X = e(o)) != null ? X : ""} ${(V = e(c)) != null ? V : ""}`);
      }), Nl(B, "clientWidth", (X) => se(f, X)), Nl(B, "clientHeight", (X) => se(x, X)), p(M, B);
    }, U = (M) => {
      var B = Yp(), j = S(B);
      Te(S(j), () => a().text), y(j), y(B), be(() => {
        var N, H, X;
        Lt(B, 1, `kaching-bundles__badge-border kaching-bundles__badge-border--${(N = a().position) != null ? N : ""}`), Tt(B, `${(H = e(o)) != null ? H : ""} ${(X = e(b)) != null ? X : ""}`);
      }), Nl(B, "clientWidth", (N) => se(s, N)), Nl(B, "clientHeight", (N) => se(i, N)), p(M, B);
    };
    return O(oe, (M) => {
      a().position === "all" ? M(J) : M(U, !1);
    }), p(n, E), Xe(A);
  }
  Qe(ed, { badge: {} }, [], [], !0);
  var Kp = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), Xp = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), eb = $('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), tb = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function aa(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "badge", 7), o = m(t, "blockLayout", 7), c = Fn(), s = d(() => l().badgeType === "custom" ? $e(c, "$getMediaImageUrl", r)(l().imageGID) : void 0), i = d(() => o() === "vertical"), u = d(() => {
      switch (l().badgeType) {
        case "most-popular":
        case "border":
          return !0;
        case "simple":
          return !!l().text;
        case "custom":
          return !!e(s);
      }
    }), g = d(() => e(i) && e(u)), b = d(() => Cu(l().colors)), h = d(() => l().badgeType === "simple" ? `--badge-text-size: ${l().textSize}px;` : ""), v = d(() => l().badgeType === "most-popular" || l().badgeType === "custom" ? `--badge-size: ${l().size}px;` : "");
    var _ = { get badge() {
      return l();
    }, set badge(I) {
      l(I), k();
    }, get blockLayout() {
      return o();
    }, set blockLayout(I) {
      o(I), k();
    } }, f = Ie(), x = pe(f), D = (I) => {
      var L = Ie(), Q = pe(L), R = (C) => {
        ed(C, { get badge() {
          return l();
        } });
      }, K = (C) => {
        var ne = Ie(), A = pe(ne), E = (J) => {
          var U = Kp(), M = S(U);
          y(U), be(() => {
            Tt(U, e(v)), Pe(M, "alt", l().text || "Badge"), Pe(M, "src", e(s));
          }), p(J, U);
        }, oe = (J) => {
          var U = Ie(), M = pe(U), B = (N) => {
            var H = Xp();
            Yu(S(H)), y(H), be(() => {
              var X, V;
              return Tt(H, `${(X = e(b)) != null ? X : ""} ${(V = e(v)) != null ? V : ""}`);
            }), p(N, H);
          }, j = (N) => {
            var H = tb();
            at(S(H), () => l().text, (X) => {
              var V = eb();
              Te(S(V), () => l().text), y(V), p(X, V);
            }), y(H), be(() => {
              var X, V;
              return Tt(H, `${(X = e(b)) != null ? X : ""} ${(V = e(h)) != null ? V : ""}`);
            }), p(N, H);
          };
          O(M, (N) => {
            l().badgeType === "most-popular" ? N(B) : N(j, !1);
          }, !0), p(J, U);
        };
        O(A, (J) => {
          l().badgeType === "custom" && e(s) ? J(E) : J(oe, !1);
        }, !0), p(C, ne);
      };
      O(Q, (C) => {
        l().badgeType === "border" ? C(R) : C(K, !1);
      }), p(I, L);
    };
    O(x, (I) => {
      e(g) && I(D);
    }), p(n, f);
    var w = Xe(_);
    return a(), w;
  }
  function Wa(n, t) {
    Ke(t, !0);
    let r = m(t, "element", 7, "label"), a = m(t, "for", 7, void 0), l = m(t, "soldOut", 7, !1), o = m(t, "borderHost", 7), c = m(t, "children", 7);
    var s = { get element() {
      return r();
    }, set element(u = "label") {
      r(u), k();
    }, get for() {
      return a();
    }, set for(u = void 0) {
      a(u), k();
    }, get soldOut() {
      return l();
    }, set soldOut(u = !1) {
      l(u), k();
    }, get borderHost() {
      return o();
    }, set borderHost(u) {
      o(u), k();
    }, get children() {
      return c();
    }, set children(u) {
      c(u), k();
    } }, i = Ie();
    return Wc(pe(i), r, 0, (u, g) => {
      Xc(u, (h, v) => ({ for: a(), class: "kaching-bundles__bar-container", style: "", [hi]: h, [pi]: v }), [() => ({ "kaching-bundles__bar-container--sold-out": l(), "kaching-bundles__bar-container--badge-border-all": o().positions.has("all"), "kaching-bundles__bar-container--badge-border-top": o().positions.has("top"), "kaching-bundles__bar-container--badge-border-bottom": o().positions.has("bottom"), "kaching-bundles__bar-container--badge-border-left": o().positions.has("left"), "kaching-bundles__bar-container--badge-border-right": o().positions.has("right") }), () => {
        var h, v;
        return { "--badge-border-thickness": `${(h = o().thickness) != null ? h : ""}px`, "--badge-border-gap": `${(v = o().gap) != null ? v : ""}px`, "--badge-border-gap-border": o().gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": o().sideLength ? `${o().sideLength}px` : void 0 };
      }]);
      var b = Ie();
      El(pe(b), c), p(g, b);
    }), p(n, i), Xe(s);
  }
  function ll(n, t, r) {
    return n + t.reduce((a, l) => l.includeInCompareAt ? a + l.fullPrice : a, 0) + r.reduce((a, l) => l.includeInCompareAt ? a + l.fullPrice * l.quantity : a, 0);
  }
  function ho(n, t, r) {
    return n ? t : r;
  }
  Qe(aa, { badge: {}, blockLayout: {} }, [], [], !0), Qe(Wa, { element: {}, for: {}, soldOut: {}, borderHost: {}, children: {} }, [], [], !0);
  const sl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", po = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: l } = n;
    return bn({ "kaching-free-gift-background-color": a.freeGiftBackground && je(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && je(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && je(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && je(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && or(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && cr(r.freeGift.style), "kaching-free-gift-image-border-radius": (l || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, bo = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", td = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? bo : r || (t == null ? void 0 : t.image), fo = (n, t, r) => {
    var a, l;
    const o = (l = (a = t.variantGIDs) == null ? void 0 : a.map(Ut)) != null ? l : null;
    return n.variants.filter((c) => (r || c.availableForSale) && (!o || o.includes(c.id)));
  };
  var nb = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), rb = $('<div class="kaching-bundles__free-gift__image"></div>'), ab = $('<span class="kaching-bundles__free-gift__text"><!></span>'), ib = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), lb = $('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function nd(n, t) {
    Ke(t, !0);
    const r = () => $e(_, "$config", l), a = () => $e(x, "$formatPrice", l), [l, o] = vt();
    let c = m(t, "dealBlock", 7), s = m(t, "freeGift", 7), i = m(t, "product", 7), u = m(t, "dealBarSelected", 7, !1), g = m(t, "collapsed", 7, !1), b = m(t, "sets", 7), h = m(t, "mainProductVariantId", 7), v = m(t, "onChange", 7);
    const _ = _n(), f = It(), x = cn(), D = Fn(), w = d(() => {
      if (i()) return { ...i(), variants: fo(i(), s(), r().preview) };
    });
    let I = De(void 0);
    const L = d(() => (function(V, Z) {
      if (V !== void 0) return V;
      if (Z != null && Z.availableForSale && Z.variants.length > 0) return Z.variants[0].id;
    })(e(I), e(w))), Q = d(() => e(w) && e(L) ? e(w).variants.find((V) => V.id === e(L)) : void 0), R = d(() => {
      var V;
      return td({ freeGift: s(), product: i(), variantImage: (V = e(Q)) == null ? void 0 : V.image, getMediaImageUrl: $e(D, "$getMediaImageUrl", l) });
    }), K = d(() => s().quantity * b()), C = d(() => (function(V, Z) {
      if (!Z) return 0;
      let q = Z.price;
      return Z.compareAtPrice && V.useProductCompareAtPrice && (q = Math.max(q, Z.compareAtPrice)), q * e(K);
    })(c(), e(Q))), ne = d(() => po({ dealBlock: c(), imageSize: s().imageSize })), A = d(() => un({ priceFormatter: a(), product: i(), totalFullPrice: e(C), totalDiscountedPrice: 0, quantity: e(K), unitQuantity: e(Q) ? kr([{ variant: e(Q), quantity: e(K) }]) : null })), E = d(() => s() ? e(A)($e(f, "$translate", l)(s().text)) : ""), oe = d(() => {
      var V;
      if ((V = i()) != null && V.url) return e(L) ? `${i().url}?variant=${e(L)}` : i().url;
    });
    function J(V) {
      se(I, V, !0);
    }
    let U;
    pr(() => {
      s().productGID, se(I, void 0), U = void 0;
    }), pr(() => {
      if (c().disableVariantOptionSync || !h() || !e(w) || h() === U) return;
      const V = U;
      U = h(), e(w).variants.some((Z) => Z.id === h()) && (e(I) !== void 0 && e(I) !== V || se(I, h(), !0));
    }), Je(() => {
      var V;
      e(Q) && ((V = i()) != null && V.availableForSale) && e(K) && nn(() => {
        v()({ variant: e(Q), product: i(), fullPrice: e(C) });
      });
    });
    const M = d(() => !(!i() || i().availableForSale && fo(i(), s(), !1).length !== 0));
    var B = { get dealBlock() {
      return c();
    }, set dealBlock(V) {
      c(V), k();
    }, get freeGift() {
      return s();
    }, set freeGift(V) {
      s(V), k();
    }, get product() {
      return i();
    }, set product(V) {
      i(V), k();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(V = !1) {
      u(V), k();
    }, get collapsed() {
      return g();
    }, set collapsed(V = !1) {
      g(V), k();
    }, get sets() {
      return b();
    }, set sets(V) {
      b(V), k();
    }, get mainProductVariantId() {
      return h();
    }, set mainProductVariantId(V) {
      h(V), k();
    }, get onChange() {
      return v();
    }, set onChange(V) {
      v(V), k();
    } }, j = Ie(), N = pe(j), H = (V) => {
      var Z = lb();
      let q;
      var W = S(Z), te = S(W);
      {
        let Y = d(() => u() ? e(oe) : void 0);
        Xn(te, { get url() {
          return e(Y);
        }, class: "kaching-bundles__free-gift__link", children: (le, fe) => {
          var Be = Ie(), ke = pe(Be), xe = (ce) => {
            var re = nb();
            be(() => {
              Pe(re, "src", e(R)), Pe(re, "height", s().imageSize || 0);
            }), p(ce, re);
          }, ge = (ce) => {
            var re = rb();
            let he;
            be((ye) => he = Tt(re, "", he, ye), [() => {
              var ye, Ae;
              return { height: `${(ye = s().imageSize || 0) != null ? ye : ""}px`, width: `${(Ae = (i() || s().mediaImageGID) && s().imageSize || 0) != null ? Ae : ""}px` };
            }]), p(ce, re);
          };
          O(ke, (ce) => {
            e(R) ? ce(xe) : ce(ge, !1);
          }), p(le, Be);
        }, $$slots: { default: !0 } });
      }
      var de = G(te, 2), F = S(de), P = (Y) => {
        var le = Ie();
        at(pe(le), () => e(E), (fe) => {
          var Be = ab();
          Te(S(Be), () => e(E)), y(Be), p(fe, Be);
        }), p(Y, le);
      };
      O(F, (Y) => {
        e(E) && Y(P);
      });
      var z = G(F, 2), ae = (Y) => {
        Un(Y, { get product() {
          return e(w);
        }, get selectedVariantId() {
          return e(L);
        }, onChange: J });
      };
      O(z, (Y) => {
        u() && e(w) && e(w).variants.length > 1 && e(L) && Y(ae);
      }), y(de), y(W);
      var T = G(W, 2), ee = (Y) => {
        var le = Ie();
        at(pe(le), () => e(C), (fe) => {
          var Be = ib();
          Te(S(Be), () => a()(e(C))), y(Be), p(fe, Be);
        }), p(Y, le);
      };
      O(T, (Y) => {
        s().showPrice && e(C) > 0 && Y(ee);
      }), y(Z), be((Y) => {
        q = Lt(Z, 1, "kaching-bundles__free-gift", null, q, Y), Pe(Z, "data-free-gift-id", s().id), Tt(Z, e(ne));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(M) })]), p(V, Z);
    };
    O(N, (V) => {
      !g() && (!s().productGID || e(Q) || r().preview && e(M)) && V(H);
    }), p(n, j);
    var X = Xe(B);
    return o(), X;
  }
  Qe(nd, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var sb = $('<img alt=""/>'), ob = $('<div class="kaching-bundles__free-gift-summary__images"></div>'), cb = $('<span class="kaching-bundles__free-gift__text"><!></span>'), ub = $('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function rd(n, t) {
    Ke(t, !0);
    const [r, a] = vt();
    let l = m(t, "dealBlock", 7), o = m(t, "images", 7), c = m(t, "count", 7), s = m(t, "title", 7), i = m(t, "imageSize", 7);
    const u = It(), g = cn(), b = d(() => un({ priceFormatter: $e(g, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: c() })($e(u, "$translate", r)(s()))), h = d(() => po({ dealBlock: l(), imageSize: i() }));
    var v = { get dealBlock() {
      return l();
    }, set dealBlock(L) {
      l(L), k();
    }, get images() {
      return o();
    }, set images(L) {
      o(L), k();
    }, get count() {
      return c();
    }, set count(L) {
      c(L), k();
    }, get title() {
      return s();
    }, set title(L) {
      s(L), k();
    }, get imageSize() {
      return i();
    }, set imageSize(L) {
      i(L), k();
    } }, _ = ub(), f = S(_), x = (L) => {
      var Q = ob();
      Dt(Q, 21, o, Mr, (R, K) => {
        var C = sb();
        let ne;
        be((A) => {
          Pe(C, "src", e(K).source), Pe(C, "height", i() || 0), ne = Lt(C, 1, "kaching-bundles__free-gift-summary__image", null, ne, A);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(K).bordered })]), p(R, C);
      }), y(Q), p(L, Q);
    };
    O(f, (L) => {
      o().length && L(x);
    });
    var D = G(f, 2), w = (L) => {
      var Q = Ie();
      at(pe(Q), () => e(b), (R) => {
        var K = cb();
        Te(S(K), () => e(b)), y(K), p(R, K);
      }), p(L, Q);
    };
    O(D, (L) => {
      e(b) && L(w);
    }), y(_), be(() => Tt(_, e(h))), p(n, _);
    var I = Xe(v);
    return a(), I;
  }
  Qe(rd, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var db = $('<div class="kaching-bundles__free-gift__divider"></div>'), gb = $("<!> <!>", 1), hb = $("<!> <!>", 1);
  function yi(n, t) {
    Ke(t, !0);
    const r = () => $e(_, "$config", a), [a, l] = vt();
    let o = m(t, "dealBlock", 7), c = m(t, "freeGifts", 7), s = m(t, "otherProducts", 7), i = m(t, "dealBarSelected", 7), u = m(t, "freeGiftsSummary", 7), g = m(t, "sellingPlan", 7), b = m(t, "sets", 7, 1), h = m(t, "mainProductVariantId", 7), v = m(t, "onChange", 7);
    const _ = _n(), f = Fn();
    let x = De(st({})), D = d(() => c().filter((E) => !E.applyOnlyForSubscriptions || g()));
    const w = d(() => e(D).flatMap((E) => {
      const oe = E.productGID ? s().find((U) => U.id === Ut(E.productGID)) : void 0;
      if (!r().preview && E.productGID && !(oe != null && oe.availableForSale)) return [];
      const J = oe && !r().preview ? _r(oe) : oe;
      return { freeGift: E, product: J };
    })), I = d(() => {
      var E, oe;
      return (oe = (E = u()) == null ? void 0 : E.enabled) != null && oe;
    }), L = d(() => !i() && e(I) && e(w).length >= 2), Q = d(() => {
      var E, oe;
      return (oe = (E = u()) == null ? void 0 : E.showImages) != null && oe ? e(w).flatMap(({ freeGift: J, product: U }) => {
        const M = ((j, N, { preview: H, mainProductVariantId: X, disableVariantOptionSync: V }) => {
          if (!j) return;
          const Z = fo(j, N, H);
          if (Z.length !== 0) {
            if (!V && X) {
              const q = Z.find((W) => W.id === X);
              if (q) return q;
            }
            return Z[0];
          }
        })(U, J, { preview: r().preview, mainProductVariantId: h(), disableVariantOptionSync: o().disableVariantOptionSync }), B = td({ freeGift: J, product: U, variantImage: M == null ? void 0 : M.image, getMediaImageUrl: $e(f, "$getMediaImageUrl", a) });
        return B ? [{ source: B, bordered: J.giftType !== "shipping" }] : [];
      }) : [];
    });
    Je(() => {
      (function(E, oe) {
        if (!c().length) return;
        const J = E.filter((U) => U.id in oe).map((U) => ({ id: U.id, variant: oe[U.id].variant, product: oe[U.id].product, quantity: U.quantity * b(), fullPrice: oe[U.id].fullPrice, showPrice: U.showPrice, includeInCompareAt: U.includeInCompareAt === !0, applyOnlyForSubscriptions: U.applyOnlyForSubscriptions }));
        v()(J);
      })(e(D), e(x));
    });
    var R = { get dealBlock() {
      return o();
    }, set dealBlock(E) {
      o(E), k();
    }, get freeGifts() {
      return c();
    }, set freeGifts(E) {
      c(E), k();
    }, get otherProducts() {
      return s();
    }, set otherProducts(E) {
      s(E), k();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(E) {
      i(E), k();
    }, get freeGiftsSummary() {
      return u();
    }, set freeGiftsSummary(E) {
      u(E), k();
    }, get sellingPlan() {
      return g();
    }, set sellingPlan(E) {
      g(E), k();
    }, get sets() {
      return b();
    }, set sets(E = 1) {
      b(E), k();
    }, get mainProductVariantId() {
      return h();
    }, set mainProductVariantId(E) {
      h(E), k();
    }, get onChange() {
      return v();
    }, set onChange(E) {
      v(E), k();
    } }, K = hb(), C = pe(K), ne = (E) => {
      {
        let oe = d(() => {
          var U, M;
          return (M = (U = u()) == null ? void 0 : U.title) != null ? M : "";
        }), J = d(() => {
          var U, M;
          return (M = (U = e(w)[0]) == null ? void 0 : U.freeGift.imageSize) != null ? M : 30;
        });
        rd(E, { get dealBlock() {
          return o();
        }, get images() {
          return e(Q);
        }, get count() {
          return e(w).length;
        }, get title() {
          return e(oe);
        }, get imageSize() {
          return e(J);
        } });
      }
    };
    O(C, (E) => {
      e(L) && E(ne);
    }), Dt(G(C, 2), 19, () => e(w), ({ freeGift: E, product: oe }) => E.id, (E, oe, J) => {
      let U = () => e(oe).freeGift;
      var M = gb(), B = pe(M);
      nd(B, { get dealBlock() {
        return o();
      }, get freeGift() {
        return U();
      }, get product() {
        return e(oe).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(L);
      }, get sets() {
        return b();
      }, get mainProductVariantId() {
        return h();
      }, onChange: (H) => (function(X, V) {
        V.variant ? e(x)[X] = V : delete e(x)[X];
      })(U().id, H) });
      var j = G(B, 2), N = (H) => {
        p(H, db());
      };
      O(j, (H) => {
        !e(L) && e(J) < e(w).length - 1 && H(N);
      }), p(E, M);
    }), p(n, K);
    var A = Xe(R);
    return l(), A;
  }
  function ad(n, t = "body") {
    let r;
    async function a(l) {
      if (typeof (t = l) == "string") {
        if (r = document.querySelector(t), r === null && (await qs(), r = document.querySelector(t)), r === null) throw new Error(`No element found matching css selector: "${t}"`);
      } else {
        if (!(t instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
        r = t;
      }
      r.appendChild(n), n.hidden = !1;
    }
    return a(t), { update: a, destroy: function() {
      n.parentNode && n.parentNode.removeChild(n);
    } };
  }
  Qe(yi, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var pb = $('<div hidden=""><!></div>');
  function ol(n, t) {
    Ke(t, !1);
    let r = m(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), k();
    } };
    (function(o = !1) {
      const c = on, s = c.l.u;
      if (!s) return;
      let i = () => Oc(c.s);
      if (o) {
        let u = 0, g = {};
        const b = Ni(() => {
          let h = !1;
          const v = c.s;
          for (const _ in v) v[_] !== g[_] && (g[_] = v[_], h = !0);
          return h && u++, u;
        });
        i = () => e(b);
      }
      s.b.length && pr(() => {
        ru(c, i), zl(s.b);
      }), Je(() => {
        const u = nn(() => s.m.map(vg));
        return () => {
          for (const g of u) typeof g == "function" && g();
        };
      }), s.a.length && Je(() => {
        ru(c, i), zl(s.a);
      });
    })();
    var l = pb();
    return Nc(S(l), t, "default", {}), y(l), Rs(l, (o, c) => ad == null ? void 0 : ad(o, c), r), p(n, l), Xe(a);
  }
  Qe(ol, { target: {} }, ["default"], [], !0);
  const id = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], ld = [0, 12, 16, 20, 24, 28], bb = /\p{L}\p{M}*/gu, fb = /\p{N}/gu, sd = ({ lettersAllowed: n, numbersAllowed: t }) => n !== t, vb = ({ previousValue: n, nextValue: t, caretPosition: r }, a, l) => {
    const o = t.slice(r), c = t.slice(0, r), s = c.slice(0, _b(n, c)), i = c.slice(s.length), u = ((h, v) => sd(v) ? v.lettersAllowed ? h.replace(fb, "") : h.replace(bb, "") : h)(i, a), g = l === void 0 ? u.length : Math.max(0, l - s.length - o.length), b = u.slice(0, g);
    return { value: s + b + o, caretPosition: s.length + b.length, rejected: u.length < i.length };
  }, _b = (n, t) => {
    const r = Math.min(n.length, t.length);
    let a = 0;
    for (; a < r && n[a] === t[a]; ) a += 1;
    return a;
  };
  var kb = (n, t) => {
    n.target === n.currentTarget && t()();
  }, mb = $('<img alt="Close"/>'), xb = $('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), yb = (n, t, r) => t(r(), n.currentTarget), wb = $('<img alt="Clear"/>'), Pb = $('<span class="kaching-bundles__personalisation-modal__input-error"> </span>'), Sb = $("<span> </span>"), Bb = $('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!> <!></div></div>'), Cb = $('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function vo(n, t) {
    Ke(t, !0);
    const r = () => $e(h, "$translate", a), [a, l] = vt(), o = m(t, "product", 7), c = m(t, "selectedVariants", 7), s = m(t, "personalisationValues", 7), i = m(t, "addPersonalisationModal", 7), u = m(t, "inline", 7, !1), g = m(t, "onConfirm", 7), b = m(t, "onClose", 7), h = It(), v = d(() => ((z) => {
      var ae, T;
      return { lettersAllowed: (ae = z == null ? void 0 : z.lettersAllowed) == null || ae, numbersAllowed: (T = z == null ? void 0 : z.numbersAllowed) == null || T };
    })(i())), _ = d(() => !e(v).lettersAllowed && e(v).numbersAllowed), f = d(() => sd(e(v))), x = d(() => e(_) ? "system.numbers_only" : "system.letters_only"), D = d(() => {
      var z, ae;
      return (ae = (z = i()) == null ? void 0 : z.characterLimitEnabled) != null && ae;
    }), w = d(() => {
      var z, ae;
      return e(D) ? (ae = (z = i()) == null ? void 0 : z.characterLimit) != null ? ae : 30 : void 0;
    }), I = Math.max(...c().map(({ index: z }) => z), -1);
    let L = De(st(Array.from({ length: I + 1 }, (z, ae) => s()[ae] || "")));
    const Q = new Set(s().map((z, ae) => z && z.trim() !== "" ? ae : -1).filter((z) => z !== -1)), R = d(() => i() ? (({ size: z, roundness: ae, imageSize: T, textSize: ee, overlayColor: Y, primaryTextColor: le, secondaryTextColor: fe, buttonColor: Be, buttonTextColor: ke, errorColor: xe }) => {
      const ge = Math.min(Math.max(0, z), id.length - 1), ce = Math.min(Math.max(0, ae), ld.length - 1), re = id[ge], he = ld[ce];
      return bn({ "kaching-product-personalisation-font-0": re.fonts[0] + "px", "kaching-product-personalisation-font-1": re.fonts[1] + "px", "kaching-product-personalisation-font-2": re.fonts[2] + "px", "kaching-product-personalisation-font-3": re.fonts[3] + "px", "kaching-product-personalisation-gap-0": re.gaps[0] + "px", "kaching-product-personalisation-gap-1": re.gaps[1] + "px", "kaching-product-personalisation-gap-2": re.gaps[2] + "px", "kaching-product-personalisation-image-size": (T != null ? T : re.image) + "px", "kaching-product-personalisation-radius": he + "px", "kaching-product-personalisation-text-size": ee + "px", "kaching-product-personalisation-overlay-color": je(Y), "kaching-product-personalisation-primary-text-color": je(le), "kaching-product-personalisation-secondary-text-color": je(fe), "kaching-product-personalisation-button-color": je(Be), "kaching-product-personalisation-button-text-color": je(ke), "kaching-product-personalisation-error-color": je(xe) });
    })(i()) : "");
    let K = !1, C = De(st([]));
    function ne(z, ae) {
      var T;
      if (K) return;
      const ee = vb({ previousValue: e(L)[z] || "", nextValue: ae.value, caretPosition: (T = ae.selectionStart) != null ? T : ae.value.length }, e(v), e(w));
      ae.value !== ee.value && (ae.value = ee.value, ae.setSelectionRange(ee.caretPosition, ee.caretPosition)), A(z, ee.value), E(z, ee.rejected);
    }
    function A(z, ae) {
      const T = [...e(L)];
      T[z] = ae, se(L, T, !0);
    }
    function E(z, ae) {
      if (!!e(C)[z] === ae) return;
      const T = [...e(C)];
      T[z] = ae, se(C, T, !0);
    }
    function oe(z) {
      return Q.has(z) && !!e(L)[z] && e(L)[z].trim() !== "";
    }
    const J = d(() => e(L).some((z) => z && z.trim() !== "")), U = d(() => Q.size > 0), M = d(() => !e(J) && !e(U));
    var B = { get product() {
      return o();
    }, set product(z) {
      o(z), k();
    }, get selectedVariants() {
      return c();
    }, set selectedVariants(z) {
      c(z), k();
    }, get personalisationValues() {
      return s();
    }, set personalisationValues(z) {
      s(z), k();
    }, get addPersonalisationModal() {
      return i();
    }, set addPersonalisationModal(z) {
      i(z), k();
    }, get inline() {
      return u();
    }, set inline(z = !1) {
      u(z), k();
    }, get onConfirm() {
      return g();
    }, set onConfirm(z) {
      g(z), k();
    }, get onClose() {
      return b();
    }, set onClose(z) {
      b(z), k();
    } }, j = Cb();
    let N;
    j.__click = [kb, b];
    var H = S(j), X = S(H), V = S(X), Z = S(V), q = S(Z, !0);
    y(Z), Zt(G(Z, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return b();
    }, children: (z, ae) => {
      var T = mb();
      be(() => Pe(T, "src", uo)), p(z, T);
    }, $$slots: { default: !0 } }), y(V);
    var W = G(V, 2);
    Dt(W, 21, c, ({ variant: z, index: ae }) => ae, (z, ae) => {
      let T = () => e(ae).variant, ee = () => e(ae).index;
      var Y = Bb(), le = S(Y), fe = S(le), Be = S(fe);
      y(fe);
      var ke = G(fe, 2), xe = S(ke), ge = S(xe);
      y(xe);
      var ce = G(xe, 2), re = (Ce) => {
        var Se = xb(), qe = S(Se, !0);
        y(Se), be((St) => ft(qe, St), [() => T().options.join(", ")]), p(Ce, Se);
      };
      O(ce, (Ce) => {
        o().variants.length > 1 && Ce(re);
      }), y(ke), y(le);
      var he = G(le, 2), ye = S(he), Ae = S(ye);
      let Oe;
      ea(Ae), Ae.__input = [yb, ne, ee];
      var Ve = G(Ae, 2), ie = (Ce) => {
        Zt(Ce, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(Se) {
          A(Se, ""), E(Se, !1);
        })(ee()), children: (Se, qe) => {
          var St = wb();
          be(() => Pe(St, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(Se, St);
        }, $$slots: { default: !0 } });
      };
      O(Ve, (Ce) => {
        oe(ee()) && Ce(ie);
      }), y(ye);
      var we = G(ye, 2), He = (Ce) => {
        var Se = Pb(), qe = S(Se, !0);
        y(Se), be((St) => ft(qe, St), [() => r()(e(x))]), p(Ce, Se);
      };
      O(we, (Ce) => {
        e(f) && e(C)[ee()] && Ce(He);
      });
      var _e = G(we, 2), Me = (Ce) => {
        var Se = Sb();
        let qe;
        var St = S(Se);
        y(Se), be((it) => {
          var et, lt;
          qe = Lt(Se, 1, "kaching-bundles__personalisation-modal__input-counter", null, qe, it), ft(St, `${(et = (e(L)[ee()] || "").length) != null ? et : ""}/${(lt = e(w)) != null ? lt : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(w) !== void 0 && (e(L)[ee()] || "").length >= e(w) })]), p(Ce, Se);
      };
      O(_e, (Ce) => {
        e(D) && Ce(Me);
      }), y(he), y(Y), be((Ce, Se) => {
        var qe;
        Pe(Be, "src", T().image || o().image), ft(ge, `${(qe = o().title) != null ? qe : ""} #${ee() + 1}`), Oe = Lt(Ae, 1, "kaching-bundles__personalisation-modal__input", null, Oe, Ce), Pe(Ae, "placeholder", Se), La(Ae, e(L)[ee()] || ""), Pe(Ae, "maxlength", e(f) ? void 0 : e(w)), Pe(Ae, "inputmode", e(_) ? "numeric" : void 0);
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": oe(ee()), "kaching-bundles__personalisation-modal__input--error": e(w) !== void 0 && (e(L)[ee()] || "").length >= e(w) }), () => {
        var Ce;
        return (Ce = i()) != null && Ce.placeholderText ? r()(i().placeholderText) : "";
      }]), jl("compositionstart", Ae, () => K = !0), jl("compositionend", Ae, (Ce) => (function(Se, qe) {
        K = !1, ne(Se, qe);
      })(ee(), Ce.currentTarget)), p(z, Y);
    }), y(W);
    var te = G(W, 2), de = S(te);
    Zt(de, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return b();
    }, children: (z, ae) => {
      da();
      var T = Wn();
      be((ee) => ft(T, ee), [() => r()("system.cancel")]), p(z, T);
    }, $$slots: { default: !0 } });
    var F = G(de, 2);
    {
      let z = d(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(M) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Zt(F, { element: "button", get class() {
        return e(z);
      }, get disabled() {
        return e(M);
      }, onclick: () => g()(e(L)), children: (ae, T) => {
        da();
        var ee = Wn();
        be((Y) => ft(ee, Y), [() => r()("system.confirm")]), p(ae, ee);
      }, $$slots: { default: !0 } });
    }
    y(te), y(X), y(H), y(j), be((z, ae) => {
      N = Lt(j, 1, "kaching-bundles__personalisation-modal-overlay", null, N, z), Tt(j, e(R)), ft(q, ae);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": u() }), () => {
      var z;
      return (z = i()) != null && z.heading ? r()(i().heading) : "";
    }]), p(n, j);
    var P = Xe(B);
    return l(), P;
  }
  On(["click", "input"]), Qe(vo, { product: {}, selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var Ib = (n, t) => {
    se(t, !0);
  }, Mb = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), se(t, !0));
  }, zb = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), $b = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), Db = $('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), Ab = $('<span class="kaching-bundles__product-personalisation__title"><!></span>'), Vb = $('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), Tb = $("<!> <!>", 1), qb = $('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), Gb = $('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), Ob = $('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), Fb = $('<div class="kaching-bundles"><!></div>'), Lb = $('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function Ua(n, t) {
    Ke(t, !0);
    const r = () => $e(_, "$config", o), a = () => $e(x, "$formatPrice", o), l = () => $e(f, "$translate", o), [o, c] = vt();
    let s = m(t, "productPersonalisation", 7), i = m(t, "product", 7), u = m(t, "selectedVariantIds", 7), g = m(t, "quantity", 7), b = m(t, "addPersonalisationModal", 7), h = m(t, "onPersonalisationsChange", 7), v = m(t, "initialValues", 23, () => []);
    const _ = _n(), f = It(), x = cn(), D = Fn();
    let w = De(!1), I = De(st([]));
    Je(() => {
      s().id, v(), se(I, v().map((ce) => ce || ""), !0);
    });
    const L = d(() => {
      if (s().mediaImageGID) return $e(D, "$getMediaImageUrl", o)(s().mediaImageGID);
    }), Q = d(() => !e(L) && s().imageSize > 0), R = d(() => Math.round(100 * parseFloat(s().pricePerItem || "0") * r().currencyRate)), K = d(() => Math.round(100 * parseFloat(s().compareAtPrice || "0") * r().currencyRate)), C = d(() => e(R)), ne = d(() => e(K)), A = d(() => e(ne) > 0 && e(ne) > e(C)), E = d(() => ((ce) => bn({ "kaching-product-personalisation-image-height": ce.imageSize + "px" }))(s())), oe = d(() => un({ priceFormatter: a(), product: void 0, totalFullPrice: e(ne) || e(C), totalDiscountedPrice: e(C), quantity: g(), unitQuantity: null })), J = d(() => e(oe)(l()(s().title))), U = d(() => s().subtitle ? e(oe)(l()(s().subtitle)) : ""), M = d(() => u().map((ce, re) => ({ variant: i().variants.find((he) => he.id === ce) || i().variants[0], index: re }))), B = d(() => e(I).some((ce) => (ce || "").trim() !== "")), j = d(() => e(I).map((ce, re) => ({ value: ce, index: re })).filter(({ value: ce }) => (ce || "").trim() !== "")), N = d(() => g() === 1);
    function H(ce) {
      var re;
      const he = ce.map((Ve) => Ve || "");
      if (se(I, he, !0), se(w, !1), !s().variantGID) return;
      const ye = Ut(s().variantGID);
      if (!ye) return;
      const Ae = l()(s().valueLabel || "Value"), Oe = he.map((Ve, ie) => ({ id: s().id, variantId: ye, text: Ve, valueLabel: Ae, productIndex: ie })).filter((Ve) => Ve.text.trim() !== "");
      (re = h()) == null || re(Oe);
    }
    var X = { get productPersonalisation() {
      return s();
    }, set productPersonalisation(ce) {
      s(ce), k();
    }, get product() {
      return i();
    }, set product(ce) {
      i(ce), k();
    }, get selectedVariantIds() {
      return u();
    }, set selectedVariantIds(ce) {
      u(ce), k();
    }, get quantity() {
      return g();
    }, set quantity(ce) {
      g(ce), k();
    }, get addPersonalisationModal() {
      return b();
    }, set addPersonalisationModal(ce) {
      b(ce), k();
    }, get onPersonalisationsChange() {
      return h();
    }, set onPersonalisationsChange(ce) {
      h(ce), k();
    }, get initialValues() {
      return v();
    }, set initialValues(ce = []) {
      v(ce), k();
    } }, V = Lb(), Z = pe(V);
    let q;
    Z.__click = [Ib, w], Z.__keydown = [Mb, w];
    var W = S(Z), te = S(W), de = (ce) => {
      var re = zb(), he = S(re);
      y(re), be(() => {
        Pe(he, "src", e(L)), Pe(he, "height", s().imageSize || 0);
      }), p(ce, re);
    }, F = (ce) => {
      var re = Ie(), he = pe(re), ye = (Ae) => {
        var Oe = $b(), Ve = S(Oe);
        y(Oe), be(() => {
          Pe(Ve, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), Pe(Ve, "height", s().imageSize || 0);
        }), p(Ae, Oe);
      };
      O(he, (Ae) => {
        e(Q) && Ae(ye);
      }, !0), p(ce, re);
    };
    O(te, (ce) => {
      e(L) ? ce(de) : ce(F, !1);
    });
    var P = G(te, 2), z = S(P), ae = (ce) => {
      var re = Ie();
      Dt(pe(re), 17, () => e(j), ({ value: he, index: ye }) => ye, (he, ye) => {
        var Ae = Db(), Oe = S(Ae), Ve = (He) => {
          var _e = Wn();
          be(() => ft(_e, `#${e(ye).index + 1}`)), p(He, _e);
        };
        O(Oe, (He) => {
          e(N) || He(Ve);
        });
        var ie = G(Oe, 2), we = S(ie, !0);
        y(ie), y(Ae), be(() => ft(we, e(ye).value)), p(he, Ae);
      }), p(ce, re);
    }, T = (ce) => {
      var re = Tb(), he = pe(re), ye = (Ve) => {
        var ie = Ab();
        Te(S(ie), () => e(J)), y(ie), p(Ve, ie);
      };
      O(he, (Ve) => {
        e(J) && Ve(ye);
      });
      var Ae = G(he, 2), Oe = (Ve) => {
        var ie = Vb();
        Te(S(ie), () => e(U)), y(ie), p(Ve, ie);
      };
      O(Ae, (Ve) => {
        e(U) && Ve(Oe);
      }), p(ce, re);
    };
    O(z, (ce) => {
      e(B) ? ce(ae) : ce(T, !1);
    }), y(P), y(W);
    var ee = G(W, 2), Y = S(ee), le = (ce) => {
      var re = Gb(), he = S(re);
      Te(he, () => a()(e(C)));
      var ye = G(he, 2), Ae = (Oe) => {
        var Ve = qb(), ie = S(Ve, !0);
        y(Ve), be(() => ft(ie, s().pricePerItemUnitLabel)), p(Oe, Ve);
      };
      O(ye, (Oe) => {
        s().pricePerItemUnitLabel && Oe(Ae);
      }), y(re), p(ce, re);
    };
    O(Y, (ce) => {
      e(C) > 0 && ce(le);
    });
    var fe = G(Y, 2), Be = (ce) => {
      var re = Ob();
      Te(S(re), () => a()(e(ne))), y(re), p(ce, re);
    };
    O(fe, (ce) => {
      e(A) && ce(Be);
    }), y(ee), y(Z);
    var ke = G(Z, 2), xe = (ce) => {
      ol(ce, { target: "body", children: (re, he) => {
        var ye = Fb();
        vo(S(ye), { get product() {
          return i();
        }, get selectedVariants() {
          return e(M);
        }, get personalisationValues() {
          return e(I);
        }, get addPersonalisationModal() {
          return b();
        }, onConfirm: H, onClose: () => {
          se(w, !1);
        } }), y(ye), p(re, ye);
      }, $$slots: { default: !0 } });
    };
    O(ke, (ce) => {
      e(w) && ce(xe);
    }), be((ce) => {
      q = Lt(Z, 1, "kaching-bundles__product-personalisation", null, q, ce), Pe(Z, "data-product-personalisation-id", s().id), Tt(Z, e(E));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(B) })]), p(n, V);
    var ge = Xe(X);
    return c(), ge;
  }
  function jb(n, t, r) {
    const a = Number(n.target.value), l = t().find((o) => o.id === a);
    r()(l);
  }
  On(["click", "keydown"]), Qe(Ua, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var Eb = (n) => n.stopPropagation(), Rb = $("<option> </option>"), Nb = $('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function xa(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "sellingPlans", 7), o = m(t, "selectedSellingPlan", 7), c = m(t, "onChange", 7), s = It();
    var i, u = { get sellingPlans() {
      return l();
    }, set sellingPlans(h) {
      l(h), k();
    }, get selectedSellingPlan() {
      return o();
    }, set selectedSellingPlan(h) {
      o(h), k();
    }, get onChange() {
      return c();
    }, set onChange(h) {
      c(h), k();
    } }, g = Nb();
    g.__change = [jb, l, c], g.__click = [Eb], Dt(g, 21, l, (h) => h.id, (h, v) => {
      var _ = Rb(), f = S(_, !0);
      y(_);
      var x = {};
      be(() => {
        var D;
        ft(f, e(v).name), x !== (x = e(v).id) && (_.value = (D = _.__value = e(v).id) != null ? D : "");
      }), p(h, _);
    }), y(g), Ws(g), be((h) => {
      var v;
      Pe(g, "aria-label", h), i !== (i = o().id) && (g.value = (v = g.__value = o().id) != null ? v : "", Ji(g, o().id));
    }, [() => $e(s, "$translate", r)("system.subscription_plan")]), p(n, g);
    var b = Xe(u);
    return a(), b;
  }
  On(["change", "click"]), Qe(xa, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var Qb = Tn('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function ss(n) {
    p(n, Qb());
  }
  Qe(ss, {}, [], [], !0);
  var Wb = $('<img alt="" class="kaching-bundles__upsell__image"/>'), Ub = $('<div class="kaching-bundles__upsell__price"><!></div>'), Hb = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Zb = $('<div class="kaching-bundles__upsell__price"><!></div>'), Jb = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Yb = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), Kb = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), Xb = $('<div class="kaching-bundles__upsell__price"><!></div>'), ef = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), tf = $('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), nf = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), rf = $('<div class="kaching-bundles__upsell__price"><!></div>'), af = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), lf = $("<!> <!>", 1), sf = $('<div><!> <div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function od(n, t) {
    Ke(t, !0);
    const r = () => $e(w, "$config", o), a = () => $e(x, "$formatPrice", o), l = () => $e(f, "$translate", o), [o, c] = vt();
    let s = m(t, "dealBlock", 7), i = m(t, "dealBarId", 7), u = m(t, "upsell", 7), g = m(t, "product", 7), b = m(t, "dealBarSelected", 7, !1), h = m(t, "dealSellingPlan", 7), v = m(t, "sets", 7), _ = m(t, "onChange", 7);
    const f = It(), x = cn(), D = Fn(), w = _n();
    let I = De(st(u().preselected)), L = De(void 0), Q = De(void 0);
    const R = d(() => u().variantGIDs ? u().variantGIDs.map(Ut) : g().variants.map((re) => re.id)), K = d(() => ({ ...g(), variants: g().variants.filter((re) => (r().preview || re.availableForSale) && e(R).includes(re.id)) })), C = d(() => (function(re, he) {
      if (re !== void 0) return re;
      if (he != null && he.availableForSale && he.variants.length > 0) return he.variants[0].id;
    })(e(L), e(K))), ne = d(() => e(K).variants.find((re) => re.id === e(C))), A = d(() => $e(D, "$getMediaImageUrl", o)(u().mediaImageGID)), E = d(() => ((re, he) => {
      const { fonts: ye, colors: Ae, cornerRadius: Oe } = re;
      return bn({ "kaching-upsell-background-color": Ae.upsellBackground && je(Ae.upsellBackground), "kaching-upsell-text-color": Ae.upsellText && je(Ae.upsellText), "kaching-upsell-selected-background-color": Ae.upsellSelectedBackground && je(Ae.upsellSelectedBackground), "kaching-upsell-selected-text-color": Ae.upsellSelectedText && je(Ae.upsellSelectedText), "kaching-upsell-font-size": ye.upsell && ye.upsell.size + "px", "kaching-upsell-font-weight": ye.upsell && or(ye.upsell.style), "kaching-upsell-font-style": ye.upsell && cr(ye.upsell.style), "kaching-upsell-image-border-radius": (Oe || 0) / 2 + "px", "kaching-upsell-image-height": he.imageSize + "px" });
    })(s(), u())), oe = d(() => g().url ? `${g().url}?variant=${e(C)}` : void 0), J = d(() => s().priceRounding ? { perItem: s().showPricesPerItem, precision: s().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), U = d(() => u().quantity * v()), M = d(() => (function(re) {
      if (!re) return 0;
      let he = re.price;
      return s().useProductCompareAtPrice && re.compareAtPrice && (he = Math.max(he, re.compareAtPrice)), he * e(U);
    })(e(ne))), B = d(() => Math.ceil(e(M) / e(U))), j = d(() => {
      var re;
      return (re = u().subscriptionEnabled) == null || re;
    }), N = d(() => {
      var re;
      return (re = u().subscriptionType) != null ? re : "deal";
    }), H = d(() => {
      if (!e(j) || e(N) !== "always" || !e(ne)) return [];
      const re = new Set(e(ne).sellingPlans.map((he) => he.id));
      return g().sellingPlans.filter((he) => re.has(he.id));
    }), X = d(() => e(H).find((re) => re.id === e(Q)) || e(H)[0]);
    Je(() => {
      var re;
      e(H).some((he) => {
        var ye;
        return he.id === ((ye = h()) == null ? void 0 : ye.id);
      }) && se(Q, (re = h()) == null ? void 0 : re.id, !0);
    });
    const V = d(() => {
      if (e(ne) && e(j))
        return e(N) === "deal" ? h() ? er(g(), e(ne), h()) : void 0 : e(X);
    }), Z = d(() => ra({ discountType: u().discountType, discountValue: u().discountValue, discountQuantity: u().quantity, variantQuantities: e(ne) ? [{ variant: e(ne), quantity: e(U) }] : [], currencyRate: r().currencyRate, priceRounding: e(J), sellingPlan: e(V) })), q = d(() => Math.ceil(e(Z) / e(U))), W = d(() => e(M) > e(Z)), te = d(() => e(ne) && ao(e(ne))), de = d(() => e(ne) ? kr([{ variant: e(ne), quantity: e(U) }]) : null), F = d(() => e(de) ? e(Z) / e(de) : null), P = d(() => un({ priceFormatter: a(), product: g(), totalFullPrice: e(M), totalDiscountedPrice: e(Z), quantity: e(U), unitQuantity: e(de), sellingPlan: e(V) })), z = d(() => e(P)(l()(u().text))), ae = d(() => ((re, he, ye) => re.blockLayout !== "vertical" ? [] : ls(re).filter((Ae) => Ae.attachedTo.type === "barUpsell" && Ae.attachedTo.dealBarId === he && Ae.attachedTo.upsellId === ye))(s(), i(), u().id).map((re) => ka(re, l(), e(P)))), T = d(() => ma(e(ae))), ee = d(() => e(T).positions.size > 0);
    function Y(re) {
      se(L, re, !0);
    }
    function le() {
      b() && se(I, !e(I));
    }
    pr(() => {
      u().productGID, se(L, void 0);
    }), Je(() => {
      if (e(ne) && g().availableForSale && e(U)) {
        const re = e(I), he = e(V);
        nn(() => {
          _()({ variant: re ? e(ne) : null, product: re ? g() : null, discountedPrice: re ? e(Z) : 0, fullPrice: re ? e(M) : 0, sellingPlan: re ? he : void 0 });
        });
      }
    });
    const fe = d(() => !g().availableForSale || g().variants.filter((re) => re.availableForSale && e(R).includes(re.id)).length === 0);
    var Be = { get dealBlock() {
      return s();
    }, set dealBlock(re) {
      s(re), k();
    }, get dealBarId() {
      return i();
    }, set dealBarId(re) {
      i(re), k();
    }, get upsell() {
      return u();
    }, set upsell(re) {
      u(re), k();
    }, get product() {
      return g();
    }, set product(re) {
      g(re), k();
    }, get dealBarSelected() {
      return b();
    }, set dealBarSelected(re = !1) {
      b(re), k();
    }, get dealSellingPlan() {
      return h();
    }, set dealSellingPlan(re) {
      h(re), k();
    }, get sets() {
      return v();
    }, set sets(re) {
      v(re), k();
    }, get onChange() {
      return _();
    }, set onChange(re) {
      _(re), k();
    } }, ke = Ie(), xe = pe(ke), ge = (re) => {
      var he = sf();
      let ye, Ae;
      var Oe = S(he);
      Dt(Oe, 17, () => e(ae), (gt) => gt.id, (gt, ze) => {
        aa(gt, { get badge() {
          return e(ze);
        }, get blockLayout() {
          return s().blockLayout;
        } });
      });
      var Ve = G(Oe, 2), ie = S(Ve), we = (gt) => {
        {
          let ze = d(() => ["kaching-bundles__upsell__checkbox", e(I) && "kaching-bundles__upsell__checkbox--selected"]);
          Zt(gt, { element: "span", get class() {
            return e(ze);
          }, onclick: le, children: (bt, Ye) => {
            var ve = Ie(), We = pe(ve), Ee = (tt) => {
              ss(tt);
            };
            O(We, (tt) => {
              e(I) && tt(Ee);
            }), p(bt, ve);
          }, $$slots: { default: !0 } });
        }
      };
      O(ie, (gt) => {
        b() && gt(we);
      });
      var He = G(ie, 2), _e = (gt) => {
        {
          let ze = d(() => b() ? e(oe) : void 0);
          Xn(gt, { get url() {
            return e(ze);
          }, class: "kaching-bundles__upsell__link", children: (bt, Ye) => {
            var ve = Wb();
            be(() => {
              var We;
              Pe(ve, "src", e(A) || ((We = e(ne)) == null ? void 0 : We.image) || g().image), Pe(ve, "height", u().imageSize);
            }), p(bt, ve);
          }, $$slots: { default: !0 } });
        }
      };
      O(He, (gt) => {
        u().imageSize > 0 && gt(_e);
      });
      var Me = G(He, 2), Ce = S(Me), Se = (gt) => {
        Zt(gt, { element: "span", class: "kaching-bundles__upsell__text", onclick: le, children: (ze, bt) => {
          var Ye = Ie();
          Te(pe(Ye), () => e(z)), p(ze, Ye);
        }, $$slots: { default: !0 } });
      };
      O(Ce, (gt) => {
        e(z) && gt(Se);
      });
      var qe = G(Ce, 2), St = (gt) => {
        Un(gt, { get product() {
          return e(K);
        }, get selectedVariantId() {
          return e(C);
        }, onChange: Y });
      };
      O(qe, (gt) => {
        b() && e(K) && e(K).variants.length > 1 && e(C) && gt(St);
      });
      var it = G(qe, 2), et = (gt) => {
        xa(gt, { get sellingPlans() {
          return e(H);
        }, get selectedSellingPlan() {
          return e(X);
        }, onChange: (ze) => se(Q, ze.id, !0) });
      };
      O(it, (gt) => {
        b() && e(I) && e(H).length > 1 && e(X) && gt(et);
      }), y(Me), y(Ve);
      var lt = G(Ve, 2), wt = S(lt), rn = (gt) => {
        var ze = Kb(), bt = pe(ze), Ye = S(bt);
        at(Ye, () => e(q), (Ge) => {
          var Ne = Ub();
          Te(S(Ne), () => a()(e(q))), y(Ne), p(Ge, Ne);
        });
        var ve = G(Ye, 2), We = (Ge) => {
          var Ne = Ie();
          at(pe(Ne), () => e(B), (ot) => {
            var _t = Hb();
            Te(S(_t), () => a()(e(B))), y(_t), p(ot, _t);
          }), p(Ge, Ne);
        };
        O(ve, (Ge) => {
          e(W) && Ge(We);
        }), y(bt);
        var Ee = G(bt, 2), tt = (Ge) => {
          var Ne = Yb(), ot = S(Ne);
          at(ot, () => e(Z), (nt) => {
            var yt = Zb();
            Te(S(yt), () => a()(e(Z))), y(yt), p(nt, yt);
          });
          var _t = G(ot, 2), Bt = (nt) => {
            var yt = Ie();
            at(pe(yt), () => e(M), (Mt) => {
              var Et = Jb();
              Te(S(Et), () => a()(e(M))), y(Et), p(Mt, Et);
            }), p(nt, yt);
          };
          O(_t, (nt) => {
            e(W) && nt(Bt);
          }), y(Ne), p(Ge, Ne);
        };
        O(Ee, (Ge) => {
          e(U) > 1 && Ge(tt);
        }), p(gt, ze);
      }, jt = (gt) => {
        var ze = Ie(), bt = pe(ze), Ye = (We) => {
          var Ee = nf(), tt = pe(Ee), Ge = S(tt);
          at(Ge, () => e(Z), (Bt) => {
            var nt = Xb();
            Te(S(nt), () => a()(s().showPricesPerItem ? e(q) : e(Z))), y(nt), p(Bt, nt);
          });
          var Ne = G(Ge, 2), ot = (Bt) => {
            var nt = Ie();
            at(pe(nt), () => e(M), (yt) => {
              var Mt = ef();
              Te(S(Mt), () => a()(s().showPricesPerItem ? e(B) : e(M))), y(Mt), p(yt, Mt);
            }), p(Bt, nt);
          };
          O(Ne, (Bt) => {
            e(W) && Bt(ot);
          }), y(tt);
          var _t = G(tt, 2);
          at(S(_t), () => e(F), (Bt) => {
            var nt = tf(), yt = S(nt);
            Te(yt, () => a()(e(F), { preserveDecimals: !0 }));
            var Mt = G(yt);
            y(nt), be(() => {
              var Et;
              return ft(Mt, ` / ${(Et = e(te)) != null ? Et : ""}`);
            }), p(Bt, nt);
          }), y(_t), p(We, Ee);
        }, ve = (We) => {
          var Ee = lf(), tt = pe(Ee);
          at(tt, () => e(Z), (ot) => {
            var _t = rf();
            Te(S(_t), () => a()(s().showPricesPerItem ? e(q) : e(Z))), y(_t), p(ot, _t);
          });
          var Ge = G(tt, 2), Ne = (ot) => {
            var _t = Ie();
            at(pe(_t), () => e(M), (Bt) => {
              var nt = af();
              Te(S(nt), () => a()(s().showPricesPerItem ? e(B) : e(M))), y(nt), p(Bt, nt);
            }), p(ot, _t);
          };
          O(Ge, (ot) => {
            e(W) && ot(Ne);
          }), p(We, Ee);
        };
        O(bt, (We) => {
          e(F) && e(te) && !r().ignoreUnitPrice ? We(Ye) : We(ve, !1);
        }, !0), p(gt, ze);
      };
      O(wt, (gt) => {
        s().showBothPrices ? gt(rn) : gt(jt, !1);
      }), y(lt), y(he), be((gt, ze) => {
        ye = Lt(he, 1, "kaching-bundles__upsell", null, ye, gt), Pe(he, "data-upsell-id", u().id), Ae = Tt(he, e(E), Ae, ze);
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(fe), "kaching-bundles__upsell--badge-border-all": e(T).positions.has("all"), "kaching-bundles__upsell--badge-border-top": e(T).positions.has("top"), "kaching-bundles__upsell--badge-border-bottom": e(T).positions.has("bottom"), "kaching-bundles__upsell--badge-border-left": e(T).positions.has("left"), "kaching-bundles__upsell--badge-border-right": e(T).positions.has("right") }), () => ({ "--badge-border-thickness": e(ee) ? `${e(T).thickness}px` : void 0, "--badge-border-gap": e(ee) ? `${e(T).gap}px` : void 0, "--badge-border-gap-border": e(T).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(T).sideLength ? `${e(T).sideLength}px` : void 0 })]), p(re, he);
    };
    O(xe, (re) => {
      !(e(ne) || r().preview && e(fe)) || u().visibleOnlyWhenDealBarSelected && !b() || re(ge);
    }), p(n, ke);
    var ce = Xe(Be);
    return c(), ce;
  }
  Qe(od, { dealBlock: {}, dealBarId: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var of = $('<div class="kaching-bundles__free-gift__divider"></div>'), cf = $("<!> <!>", 1);
  function wi(n, t) {
    Ke(t, !0);
    const r = () => $e(_, "$config", a), [a, l] = vt();
    let o = m(t, "dealBlock", 7), c = m(t, "dealBarId", 7), s = m(t, "upsells", 7), i = m(t, "otherProducts", 7), u = m(t, "complementaryProducts", 7), g = m(t, "dealBarSelected", 7), b = m(t, "dealSellingPlan", 7), h = m(t, "sets", 7, 1), v = m(t, "onChange", 7);
    const _ = _n();
    let f = De(st({}));
    const x = d(() => r().preview ? i() : i().map(_r)), D = d(() => r().preview ? u() : u().map(_r)), w = Math.floor(1e3 * Math.random()), I = d(() => s().flatMap((K, C) => {
      if (K.productSource === "complementary") {
        const A = e(D)[(C + w) % (e(D).length || 1)];
        return A && (r().preview || A.availableForSale) ? { upsell: K, product: A } : [];
      }
      if (!K.productGID) return [];
      const ne = e(x).find((A) => A.id === Ut(K.productGID));
      if (!ne) return [];
      if (!r().preview) {
        if (!ne.availableForSale) return [];
        const A = K.variantGIDs ? K.variantGIDs.map(Ut) : ne.variants.map((E) => E.id);
        if (!ne.variants.some((E) => E.availableForSale && A.includes(E.id))) return [];
      }
      return { upsell: K, product: ne };
    }));
    var L = { get dealBlock() {
      return o();
    }, set dealBlock(K) {
      o(K), k();
    }, get dealBarId() {
      return c();
    }, set dealBarId(K) {
      c(K), k();
    }, get upsells() {
      return s();
    }, set upsells(K) {
      s(K), k();
    }, get otherProducts() {
      return i();
    }, set otherProducts(K) {
      i(K), k();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(K) {
      u(K), k();
    }, get dealBarSelected() {
      return g();
    }, set dealBarSelected(K) {
      g(K), k();
    }, get dealSellingPlan() {
      return b();
    }, set dealSellingPlan(K) {
      b(K), k();
    }, get sets() {
      return h();
    }, set sets(K = 1) {
      h(K), k();
    }, get onChange() {
      return v();
    }, set onChange(K) {
      v(K), k();
    } }, Q = Ie();
    Dt(pe(Q), 19, () => e(I), ({ upsell: K, product: C }) => K.id, (K, C, ne) => {
      let A = () => e(C).upsell;
      var E = cf(), oe = pe(E);
      od(oe, { get dealBarId() {
        return c();
      }, get dealBlock() {
        return o();
      }, get upsell() {
        return A();
      }, get product() {
        return e(C).product;
      }, get dealBarSelected() {
        return g();
      }, get dealSellingPlan() {
        return b();
      }, get sets() {
        return h();
      }, onChange: (M) => (function(B, j) {
        const { variant: N, product: H, discountedPrice: X, fullPrice: V, sellingPlan: Z } = j;
        N && H ? e(f)[B] = { variant: N, product: H, discountedPrice: X, fullPrice: V, sellingPlan: Z } : delete e(f)[B];
        const q = s().filter((W) => W.id in e(f)).map((W) => ({ id: W.id, variant: e(f)[W.id].variant, product: e(f)[W.id].product, quantity: W.quantity * h(), discountedPrice: e(f)[W.id].discountedPrice, fullPrice: e(f)[W.id].fullPrice, sellingPlan: e(f)[W.id].sellingPlan }));
        v()(q);
      })(A().id, M) });
      var J = G(oe, 2), U = (M) => {
        p(M, of());
      };
      O(J, (M) => {
        e(ne) < e(I).length - 1 && M(U);
      }), p(K, E);
    }), p(n, Q);
    var R = Xe(L);
    return l(), R;
  }
  Qe(wi, { dealBlock: {}, dealBarId: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var uf = $('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), df = $('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function Lr(n, t) {
    Ke(t, !0);
    const r = () => $e(i, "$translate", a), [a, l] = vt(), o = m(t, "amount", 7), c = m(t, "showPricesPerItem", 7), s = m(t, "unitLabel", 7, ""), i = It(), u = cn();
    var g = { get amount() {
      return o();
    }, set amount(x) {
      o(x), k();
    }, get showPricesPerItem() {
      return c();
    }, set showPricesPerItem(x) {
      c(x), k();
    }, get unitLabel() {
      return s();
    }, set unitLabel(x = "") {
      s(x), k();
    } }, b = df(), h = S(b);
    Te(h, () => $e(u, "$formatPrice", a)(o()));
    var v = G(h, 2), _ = (x) => {
      var D = uf();
      Te(S(D), () => r()(s())), y(D), p(x, D);
    };
    O(v, (x) => {
      c() && s() && x(_);
    }), y(b), be((x) => Pe(b, "data-a11y-label", x), [() => r()("system.price")]), p(n, b);
    var f = Xe(g);
    return l(), f;
  }
  Qe(Lr, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const cd = "variantBadges";
  function ud(n = []) {
    const t = ta(dd(n));
    return ai(cd, t), { setVariantBadges: (r) => {
      t.set(dd(r));
    } };
  }
  function dd(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var gf = $('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function gd(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "lowStockAlert", 7), o = m(t, "inventoryQuantity", 7), c = It(), s = d(() => {
      return _ = $e(c, "$translate", r)(l().message), f = { stock: o() ? o().toString() : null }, _.replace(/\{\{\s*(\w+)\s*\}\}/g, (x, D) => {
        var w;
        return (w = f[D]) != null ? w : "";
      });
      var _, f;
    }), i = d(() => ((_) => {
      const { textColor: f } = _;
      return bn({ "kaching-bundles-low-stock-alert-text-color": je(f) });
    })(l()));
    var u = { get lowStockAlert() {
      return l();
    }, set lowStockAlert(_) {
      l(_), k();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(_) {
      o(_), k();
    } }, g = Ie(), b = pe(g), h = (_) => {
      var f = gf();
      Te(S(f), () => e(s)), y(f), be(() => Tt(f, e(i))), p(_, f);
    };
    O(b, (_) => {
      o() && o() > 0 && o() < l().threshold && _(h);
    }), p(n, g);
    var v = Xe(u);
    return a(), v;
  }
  Qe(gd, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var hf = $("<div><!></div>");
  function ia(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "dealBlock", 7), o = m(t, "variant", 7), c = (function() {
      const _ = ri(cd);
      if (!_) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return _;
    })(), s = d(() => {
      var _;
      return $e(c, "$variantBadgeLookup", r)((_ = o()) == null ? void 0 : _.id);
    });
    var i = { get dealBlock() {
      return l();
    }, set dealBlock(_) {
      l(_), k();
    }, get variant() {
      return o();
    }, set variant(_) {
      o(_), k();
    } }, u = Ie(), g = pe(u), b = (_) => {
      var f = hf();
      Te(S(f), () => e(s)), y(f), p(_, f);
    }, h = (_) => {
      var f = Ie(), x = pe(f), D = (w) => {
        {
          let I = d(() => {
            var L, Q;
            return (Q = (L = o()) == null ? void 0 : L.inventoryQuantity) != null ? Q : null;
          });
          gd(w, { get lowStockAlert() {
            return l().lowStockAlert;
          }, get inventoryQuantity() {
            return e(I);
          } });
        }
      };
      O(x, (w) => {
        l().lowStockAlertEnabled && l().lowStockAlert && w(D);
      }, !0), p(_, f);
    };
    O(g, (_) => {
      e(s) ? _(b) : _(h, !1);
    }), p(n, u);
    var v = Xe(i);
    return a(), v;
  }
  Qe(ia, { dealBlock: {}, variant: {} }, [], [], !0);
  var pf = $('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function Pi(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "showAsSoldOut", 7), o = m(t, "replaceLiquid", 7), c = It(), s = d(() => o()($e(c, "$translate", r)(l().label)));
    var i = { get showAsSoldOut() {
      return l();
    }, set showAsSoldOut(b) {
      l(b), k();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(b) {
      o(b), k();
    } }, u = pf();
    Te(S(u), () => e(s)), y(u), p(n, u);
    var g = Xe(i);
    return a(), g;
  }
  Qe(Pi, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const cl = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: l } = n;
    return bn({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": je(r), "kaching-bundles-show-as-sold-out-text-color": je(a), "kaching-bundles-show-as-sold-out-text-size": l + "px" });
  };
  var bf = $('<img alt="Decrease"/>'), ff = $('<img alt="Increase"/>'), vf = $('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function ul(n, t) {
    Ke(t, !0);
    const [r, a] = vt();
    let l = m(t, "value", 7), o = m(t, "onChange", 7), c = m(t, "min", 7, 1);
    const s = It(), i = d(() => l() <= c());
    var u = { get value() {
      return l();
    }, set value(_) {
      l(_), k();
    }, get onChange() {
      return o();
    }, set onChange(_) {
      o(_), k();
    }, get min() {
      return c();
    }, set min(_ = 1) {
      c(_), k();
    } }, g = vf(), b = S(g);
    {
      let _ = d(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Zt(b, { element: "div", get class() {
        return e(_);
      }, onclick: function(f) {
        f.stopPropagation(), o()(Math.max(l() - 1, c()));
      }, get disabled() {
        return e(i);
      }, children: (f, x) => {
        var D = bf();
        be(() => Pe(D, "src", ju)), p(f, D);
      }, $$slots: { default: !0 } });
    }
    var h = G(b, 2);
    ea(h), Zt(G(h, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(_) {
      _.stopPropagation(), o()(l() + 1);
    }, children: (_, f) => {
      var x = ff();
      be(() => Pe(x, "src", Eu)), p(_, x);
    }, $$slots: { default: !0 } }), y(g), be((_) => {
      Pe(h, "aria-label", _), La(h, l()), Pe(h, "min", c());
    }, [() => $e(s, "$translate", r)("system.quantity")]), jl("blur", h, function(_) {
      const f = _.target, x = parseInt(f.value);
      o()(isNaN(x) ? c() : Math.max(x, c()));
    }), p(n, g);
    var v = Xe(u);
    return a(), v;
  }
  function _f(n, t) {
    n.target === n.currentTarget && t()();
  }
  Qe(ul, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var kf = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function hd(n, t) {
    Ke(t, !0);
    const r = m(t, "dealBlock", 7), a = m(t, "multipleGiftsSelector", 7), l = m(t, "products", 23, () => []), o = m(t, "initialSelectedGifts", 7), c = m(t, "isOpen", 7), s = m(t, "onConfirm", 7), i = m(t, "onClose", 7);
    var u = { get dealBlock() {
      return r();
    }, set dealBlock(v) {
      r(v), k();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(v) {
      a(v), k();
    }, get products() {
      return l();
    }, set products(v = []) {
      l(v), k();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(v) {
      o(v), k();
    }, get isOpen() {
      return c();
    }, set isOpen(v) {
      c(v), k();
    }, get onConfirm() {
      return s();
    }, set onConfirm(v) {
      s(v), k();
    }, get onClose() {
      return i();
    }, set onClose(v) {
      i(v), k();
    } }, g = Ie(), b = pe(g), h = (v) => {
      ol(v, { target: "body", children: (_, f) => {
        var x = kf(), D = S(x);
        D.__click = [_f, i];
        var w = S(D);
        io(S(w), { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return a();
        }, get products() {
          return l();
        }, get initialSelectedGifts() {
          return o();
        }, get onConfirm() {
          return s();
        }, get onClose() {
          return i();
        } }), y(w), y(D), y(x), be((I) => Tt(D, I), [() => (function(I) {
          var L;
          return bn({ "kaching-choose-multiple-gifts-overlay-color": je(((L = I.chooseMultipleGiftsModal) == null ? void 0 : L.overlayColor) || hp) });
        })(r())]), p(_, x);
      }, $$slots: { default: !0 } });
    };
    return O(b, (v) => {
      c() && v(h);
    }), p(n, g), Xe(u);
  }
  On(["click"]), Qe(hd, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var mf = Tn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function pd(n) {
    p(n, mf());
  }
  Qe(pd, {}, [], [], !0);
  var xf = $('<img alt="" class="kaching-bundles__multiple-gifts-selector__photo"/>'), yf = $('<span class="kaching-bundles__multiple-gifts-selector__photo-count"> </span>'), wf = $('<div class="kaching-bundles__multiple-gifts-selector__photos"><!> <!></div>'), Pf = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Sf = $('<div class="kaching-bundles__free-gift__image"></div>'), Bf = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Cf = $('<span class="kaching-bundles__free-gift__add-button"><!></span>'), If = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Mf = $('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function bd(n, t) {
    Ke(t, !0);
    const r = () => $e(v, "$formatPrice", l), a = () => $e(_, "$translate", l), [l, o] = vt();
    let c = m(t, "dealBlock", 7), s = m(t, "multipleGiftsSelector", 7), i = m(t, "selectedVariants", 7), u = m(t, "otherProducts", 7), g = m(t, "onConfirm", 7), b = De(!1);
    const h = d(() => (s().products || []).flatMap((P) => {
      const z = Ut(P.id), ae = u().find((ee) => ee.id === z);
      if (!ae || !ae.availableForSale) return [];
      const T = _r(ae);
      if (P.variantGIDs && P.variantGIDs.length > 0) {
        const ee = P.variantGIDs.map(Ut);
        return { ...T, variants: T.variants.filter((Y) => ee.includes(Y.id)) };
      }
      return T;
    })), v = cn(), _ = It(), f = Fn(), x = d(() => po({ dealBlock: c(), imageSize: s().imageSize })), D = d(() => {
      if (s().mediaImageGID) return $e(f, "$getMediaImageUrl", l)(s().mediaImageGID);
    }), w = d(() => s().showProductPhotos === !0), I = d(() => i().flatMap((P) => Array.from({ length: P.quantity }, () => P.variant.image || P.product.image)).filter((P) => !!P)), L = d(() => e(I).slice(0, 3)), Q = d(() => e(I).length - e(L).length), R = d(() => i().reduce((P, z) => P + z.quantity, 0)), K = d(() => e(R) >= s().maxQuantity), C = d(() => (function(P, z) {
      if (!z.length) return 0;
      let ae = z.reduce((T, ee) => T + ee.fullPrice * ee.quantity, 0);
      return z.some((T) => T.variant.compareAtPrice) && P.useProductCompareAtPrice && (ae = Math.max(ae, z.reduce((T, ee) => T + (ee.variant.compareAtPrice || 0), 0))), ae;
    })(c(), i())), ne = d(() => new Map((s().products || []).flatMap((P) => {
      const z = u().find((ae) => ae.id === Ut(P.id));
      return z ? [[z.id, z]] : [];
    }))), A = d(() => i().flatMap((P) => Array.from({ length: P.quantity }, () => P.product.title))), E = d(() => un({ priceFormatter: r(), product: void 0, products: e(ne), selectedProductTitles: e(A), totalFullPrice: e(C), totalDiscountedPrice: 0, quantity: e(R), unitQuantity: null })), oe = d(() => e(K) ? e(E)(a()(s().textAfterSelection)) : e(E)(a()(s().textBeforeSelection)));
    var J = { get dealBlock() {
      return c();
    }, set dealBlock(P) {
      c(P), k();
    }, get multipleGiftsSelector() {
      return s();
    }, set multipleGiftsSelector(P) {
      s(P), k();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(P) {
      i(P), k();
    }, get otherProducts() {
      return u();
    }, set otherProducts(P) {
      u(P), k();
    }, get onConfirm() {
      return g();
    }, set onConfirm(P) {
      g(P), k();
    } }, U = Mf(), M = S(U);
    {
      let P = d(() => {
        var z;
        return (z = e(oe)) == null ? void 0 : z.replace(/<[^>]*>/g, "");
      });
      Zt(M, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(P);
      }, onclick: () => se(b, !0) });
    }
    var B = G(M, 2), j = S(B), N = (P) => {
      var z = wf(), ae = S(z);
      Dt(ae, 17, () => e(L), Mr, (Y, le) => {
        var fe = xf();
        be(() => Pe(fe, "src", e(le))), p(Y, fe);
      });
      var T = G(ae, 2), ee = (Y) => {
        var le = yf(), fe = S(le);
        y(le), be(() => {
          var Be;
          return ft(fe, `+${(Be = e(Q)) != null ? Be : ""}`);
        }), p(Y, le);
      };
      O(T, (Y) => {
        e(Q) > 0 && Y(ee);
      }), y(z), p(P, z);
    }, H = (P) => {
      var z = Ie(), ae = pe(z), T = (Y) => {
        var le = Pf();
        be(() => {
          Pe(le, "src", e(D)), Pe(le, "height", s().imageSize || 0);
        }), p(Y, le);
      }, ee = (Y) => {
        var le = Ie(), fe = pe(le), Be = (ke) => {
          var xe = Sf();
          let ge;
          be((ce) => ge = Tt(xe, "", ge, ce), [() => {
            var ce;
            return { height: `${(ce = s().imageSize) != null ? ce : ""}px` };
          }]), p(ke, xe);
        };
        O(fe, (ke) => {
          s().imageSize && ke(Be);
        }, !0), p(Y, le);
      };
      O(ae, (Y) => {
        e(D) ? Y(T) : Y(ee, !1);
      }, !0), p(P, z);
    };
    O(j, (P) => {
      e(w) && e(L).length > 0 ? P(N) : P(H, !1);
    });
    var X = G(j, 2), V = S(X), Z = (P) => {
      var z = Ie();
      at(pe(z), () => e(oe), (ae) => {
        var T = Bf();
        Te(S(T), () => e(oe)), y(T), p(ae, T);
      }), p(P, z);
    };
    O(V, (P) => {
      e(oe) && P(Z);
    });
    var q = G(V, 2), W = (P) => {
      var z = Cf();
      pd(S(z)), y(z), p(P, z);
    };
    O(q, (P) => {
      e(K) || P(W);
    }), y(X), y(B);
    var te = G(B, 2), de = (P) => {
      var z = Ie();
      at(pe(z), () => e(C), (ae) => {
        var T = If();
        Te(S(T), () => r()(e(C))), y(T), p(ae, T);
      }), p(P, z);
    };
    O(te, (P) => {
      s().showPrice && e(C) > 0 && P(de);
    }), hd(G(te, 2), { get dealBlock() {
      return c();
    }, get multipleGiftsSelector() {
      return s();
    }, get isOpen() {
      return e(b);
    }, get products() {
      return e(h);
    }, get initialSelectedGifts() {
      return i();
    }, get onConfirm() {
      return g();
    }, onClose: () => se(b, !1) }), y(U), be(() => {
      Pe(U, "data-multiple-gifts-selector-id", s().id), Tt(U, e(x));
    }), p(n, U);
    var F = Xe(J);
    return o(), F;
  }
  Qe(bd, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var zf = $('<div class="kaching-bundles__free-gift__divider"></div>'), $f = $("<!> <!>", 1);
  function Si(n, t) {
    Ke(t, !0);
    let r = m(t, "dealBlock", 7), a = m(t, "multipleGiftsSelectors", 7), l = m(t, "sellingPlan", 7), o = m(t, "otherProducts", 7), c = m(t, "onChange", 7), s = De(st({})), i = d(() => a().filter((h) => !h.applyOnlyForSubscriptions || l()));
    function u(h, v) {
      const _ = a().find((f) => f.id === h);
      _ && (v.reduce((f, x) => f + x.quantity, 0) > _.maxQuantity || (e(s)[h] = v));
    }
    Je(() => {
      const h = new Set(e(i).map((_) => _.id)), v = Object.entries(e(s)).filter(([_]) => h.has(_)).flatMap(([_, f]) => {
        const x = e(i).find((w) => w.id === _), D = (x == null ? void 0 : x.includeInCompareAt) === !0;
        return f.map((w) => ({ id: w.id, quantity: w.quantity, variant: w.variant, product: w.product, fullPrice: w.fullPrice, includeInCompareAt: D }));
      });
      c()(v);
    });
    var g = { get dealBlock() {
      return r();
    }, set dealBlock(h) {
      r(h), k();
    }, get multipleGiftsSelectors() {
      return a();
    }, set multipleGiftsSelectors(h) {
      a(h), k();
    }, get sellingPlan() {
      return l();
    }, set sellingPlan(h) {
      l(h), k();
    }, get otherProducts() {
      return o();
    }, set otherProducts(h) {
      o(h), k();
    }, get onChange() {
      return c();
    }, set onChange(h) {
      c(h), k();
    } }, b = Ie();
    return Dt(pe(b), 19, () => e(i), (h) => h.id, (h, v, _) => {
      var f = $f(), x = pe(f);
      {
        let I = d(() => e(s)[e(v).id] || []);
        bd(x, { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return e(v);
        }, get selectedVariants() {
          return e(I);
        }, onConfirm: u, get otherProducts() {
          return o();
        } });
      }
      var D = G(x, 2), w = (I) => {
        p(I, zf());
      };
      O(D, (I) => {
        e(_) < e(i).length - 1 && I(w);
      }), p(h, f);
    }), p(n, b), Xe(g);
  }
  Qe(Si, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, onChange: {} }, [], [], !0);
  const _o = (n, t) => n.unlockAtBarOnly ? t === n.unlockAtBar : t >= n.unlockAtBar, fd = (n, t) => !!n.applyOnlyForSubscriptions && !t;
  var Df = Tn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function vd(n) {
    p(n, Df());
  }
  Qe(vd, {}, [], [], !0);
  var Af = $('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), Vf = $('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), Tf = $('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), qf = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Gf = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), Of = $('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), Ff = $('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), Lf = $('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function _d(n, t) {
    Ke(t, !0);
    const r = () => $e(D, "$config", o), a = () => $e(_, "$translate", o), l = () => $e(x, "$getMediaImageUrl", o), [o, c] = vt(), s = m(t, "progressiveGifts", 7), i = m(t, "gift", 7), u = m(t, "product", 7), g = m(t, "selectedDealBarIndex", 7), b = m(t, "sellingPlan", 7), h = m(t, "selected", 7), v = m(t, "onChange", 7), _ = It(), f = cn(), x = Fn(), D = _n(), w = d(() => i().differentVariantsEnabled), I = d(() => {
      var q;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Ut) : (q = u()) == null ? void 0 : q.variants.map((W) => W.id) : null;
    }), L = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((q) => (r().preview || q.availableForSale) && (!e(I) || e(I).includes(q.id))) };
    });
    let Q = De(st([]));
    const R = d(() => (function(q, W, te) {
      return q.length > 0 ? q : W != null && W.availableForSale && W.variants.length > 0 ? Array.from({ length: te }, () => W.variants[0].id) : [];
    })(e(Q), e(L), i().quantity)), K = d(() => u() && e(R).length > 0 ? e(R).map((q) => u().variants.find((W) => W.id === q)).filter((q) => q !== void 0) : []), C = d(() => {
      var q;
      return un({ priceFormatter: $e(f, "$formatPrice", o), product: u(), totalFullPrice: ((q = e(K)) == null ? void 0 : q.reduce((W, te) => {
        var de;
        return W + ((de = te == null ? void 0 : te.price) != null ? de : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: kr(e(K).map((W) => ({ variant: W, quantity: 1 }))) });
    }), ne = d(() => e(C)(a()(i().title))), A = d(() => e(C)(a()(i().lockedTitle))), E = d(() => e(C)(a()(i().label))), oe = d(() => e(C)(a()(i().labelCrossedOut))), J = d(() => g() === null || !_o(i(), g() + 1) || fd(i(), b())), U = d(() => {
      var q, W, te;
      return i().giftType === "shipping" ? bo : ((W = (q = e(K)) == null ? void 0 : q[0]) == null ? void 0 : W.image) || ((te = u()) == null ? void 0 : te.image);
    }), M = d(() => i().mediaImageGID ? l()(i().mediaImageGID) : e(U)), B = d(() => s().dealBarStyle && l()(s().dealBarStyle.lockedMediaImageGID));
    Je(() => {
      if (h()) if (u() && e(K) && !e(J)) {
        const q = Object.values(e(K).reduce((W, te) => (W[te.id] ? W[te.id].quantity += 1 : W[te.id] = { variant: te, quantity: 1 }, W), {}));
        nn(() => v()({ product: u(), variants: q }));
      } else nn(() => v()(void 0));
      else nn(() => v()(void 0));
    }), pr(() => {
      i().productGID, se(Q, [], !0);
    }), Je(() => {
      e(J) && e(M) && (new Image().src = e(M));
    });
    const j = d(() => {
      var q;
      return i().giftType === "product" && !((q = u()) != null && q.availableForSale);
    });
    var N = { get progressiveGifts() {
      return s();
    }, set progressiveGifts(q) {
      s(q), k();
    }, get gift() {
      return i();
    }, set gift(q) {
      i(q), k();
    }, get product() {
      return u();
    }, set product(q) {
      u(q), k();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(q) {
      g(q), k();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(q) {
      b(q), k();
    }, get selected() {
      return h();
    }, set selected(q) {
      h(q), k();
    }, get onChange() {
      return v();
    }, set onChange(q) {
      v(q), k();
    } }, H = Ie(), X = pe(H), V = (q) => {
      var W = Ie(), te = pe(W), de = (F) => {
        var P = Lf();
        let z;
        var ae = S(P), T = S(ae), ee = (he) => {
          var ye = Ie(), Ae = pe(ye), Oe = (ie) => {
            var we = Af();
            be(() => Pe(we, "src", e(B))), p(ie, we);
          }, Ve = (ie) => {
            var we = Vf();
            vd(S(we)), y(we), p(ie, we);
          };
          O(Ae, (ie) => {
            e(B) ? ie(Oe) : ie(Ve, !1);
          }), p(he, ye);
        }, Y = (he) => {
          var ye = Ie(), Ae = pe(ye), Oe = (Ve) => {
            var ie = Tf();
            be(() => {
              var we, He;
              Pe(ie, "src", e(M)), Pe(ie, "alt", (He = (we = u()) == null ? void 0 : we.title) != null ? He : "");
            }), p(Ve, ie);
          };
          O(Ae, (Ve) => {
            e(M) && Ve(Oe);
          }, !0), p(he, ye);
        };
        O(T, (he) => {
          e(J) ? he(ee) : he(Y, !1);
        });
        var le = G(T, 2), fe = S(le), Be = (he) => {
          var ye = qf();
          Te(S(ye), () => e(A)), y(ye), p(he, ye);
        }, ke = (he) => {
          var ye = Ie(), Ae = pe(ye), Oe = (Ve) => {
            var ie = Gf();
            Te(S(ie), () => e(ne)), y(ie), p(Ve, ie);
          };
          O(Ae, (Ve) => {
            e(ne) && Ve(Oe);
          }, !0), p(he, ye);
        };
        O(fe, (he) => {
          e(J) ? he(Be) : he(ke, !1);
        });
        var xe = G(fe, 2), ge = (he) => {
          var ye = Ie();
          Dt(pe(ye), 17, () => ({ length: e(w) ? i().quantity : 1 }), Mr, (Ae, Oe, Ve) => {
            var ie = Ie(), we = pe(ie), He = (_e) => {
              {
                let Me = d(() => e(w) ? Ve + 1 : void 0);
                Un(_e, { get product() {
                  return e(L);
                }, get selectedVariantId() {
                  return e(R)[Ve];
                }, get number() {
                  return e(Me);
                }, forceDropdown: !0, onChange: (Ce) => (function(Se, qe) {
                  e(w) ? se(Q, [...e(R).slice(0, qe), Se, ...e(R).slice(qe + 1)], !0) : se(Q, Array.from({ length: i().quantity }, () => Se), !0);
                })(Ce, Ve) });
              }
            };
            O(we, (_e) => {
              e(R)[Ve] !== void 0 && _e(He);
            }), p(Ae, ie);
          }), p(he, ye);
        };
        O(xe, (he) => {
          h() && !e(J) && e(L) && e(L).variants.length > 1 && e(R).length > 0 && he(ge);
        }), y(le), y(ae);
        var ce = G(ae, 2), re = (he) => {
          var ye = Ie(), Ae = pe(ye), Oe = (Ve) => {
            var ie = Ff(), we = S(ie), He = (Ce) => {
              var Se = Ie();
              Te(pe(Se), () => e(E)), p(Ce, Se);
            };
            O(we, (Ce) => {
              e(E) && Ce(He);
            });
            var _e = G(we, 2), Me = (Ce) => {
              var Se = Of();
              Te(S(Se), () => e(oe)), y(Se), p(Ce, Se);
            };
            O(_e, (Ce) => {
              e(oe) && Ce(Me);
            }), y(ie), p(Ve, ie);
          };
          O(Ae, (Ve) => {
            e(J) && !s().showLockedGiftLabels || Ve(Oe);
          }), p(he, ye);
        };
        O(ce, (he) => {
          (e(E) || e(oe)) && he(re);
        }), y(P), be((he) => z = Lt(P, 1, "kaching-bundles__deal-bar-progressive-gift", null, z, he), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(J), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(j) })]), p(F, P);
      };
      O(te, (F) => {
        var P;
        (u() && ((P = e(K)) != null && P.length) || i().giftType === "shipping") && F(de);
      }), p(q, W);
    };
    O(X, (q) => {
      e(J) && s().hideLockedGifts || q(V);
    }), p(n, H);
    var Z = Xe(N);
    return c(), Z;
  }
  Qe(_d, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var jf = $('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function Bi(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "progressiveGifts", 7), o = m(t, "dealBlock", 7), c = m(t, "dealBar", 7), s = m(t, "otherProducts", 7), i = m(t, "selectedDealBarIndex", 7), u = m(t, "sellingPlan", 7), g = m(t, "selected", 7), b = m(t, "onChange", 7), h = d(() => o().dealBars.findIndex((C) => C.id === c().id)), v = _n();
    let _ = De(st({}));
    const f = d(() => {
      var C, ne;
      return ((A) => A ? bn({ "kaching-deal-bar-progressive-gift-image-size": A.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": A.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": je(A.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": je(A.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": A.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": je(A.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": je(A.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": A.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": je(A.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": je(A.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": A.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": je(A.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": A.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": je(A.lockedIconColor) }) : "")((ne = (C = o().progressiveGifts) == null ? void 0 : C.dealBarStyle) != null ? ne : null);
    });
    function x() {
      const C = Object.entries(e(_)).map(([ne, A]) => ({ id: ne, variants: A.variants, product: A.product }));
      b()(C);
    }
    const D = d(() => {
      var C, ne, A;
      return (A = (ne = (C = l()) == null ? void 0 : C.gifts) == null ? void 0 : ne.filter((E) => _o(E, e(h) + 1))) != null ? A : [];
    }), w = d(() => e(D).flatMap((C) => {
      const ne = C.giftType === "product" && C.productGID ? s().find((E) => E.id === Ut(C.productGID)) : void 0;
      if (!$e(v, "$config", r).preview && C.giftType === "product" && !(ne != null && ne.availableForSale)) return [];
      const A = ne && _r(ne);
      return { gift: C, product: A };
    }));
    Je(() => {
      const C = new Set(e(D).map((A) => A.id)), ne = Object.keys(e(_)).filter((A) => !C.has(A));
      if (ne.length) {
        for (const A of ne) delete e(_)[A];
        g() && x();
      }
    });
    var I = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(C) {
      l(C), k();
    }, get dealBlock() {
      return o();
    }, set dealBlock(C) {
      o(C), k();
    }, get dealBar() {
      return c();
    }, set dealBar(C) {
      c(C), k();
    }, get otherProducts() {
      return s();
    }, set otherProducts(C) {
      s(C), k();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(C) {
      i(C), k();
    }, get sellingPlan() {
      return u();
    }, set sellingPlan(C) {
      u(C), k();
    }, get selected() {
      return g();
    }, set selected(C) {
      g(C), k();
    }, get onChange() {
      return b();
    }, set onChange(C) {
      b(C), k();
    } }, L = Ie(), Q = pe(L), R = (C) => {
      var ne = jf();
      Dt(ne, 21, () => e(w), ({ gift: A, product: E }) => A.id, (A, E) => {
        let oe = () => e(E).gift;
        _d(A, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return g();
        }, get gift() {
          return oe();
        }, get product() {
          return e(E).product;
        }, get progressiveGifts() {
          return l();
        }, get sellingPlan() {
          return u();
        }, onChange: (J) => (function(U, M) {
          M ? e(_)[U] = M : delete e(_)[U], g() && x();
        })(oe().id, J) });
      }), y(ne), be(() => Tt(ne, e(f))), p(C, ne);
    };
    O(Q, (C) => {
      var ne;
      o().progressiveGiftsEnabled && ((ne = l()) == null ? void 0 : ne.layout) === "deal-bar" && e(w).length > 0 && C(R);
    }), p(n, L);
    var K = Xe(I);
    return a(), K;
  }
  Qe(Bi, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, selected: {}, onChange: {} }, [], [], !0);
  var Ef = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function kd(n) {
    p(n, Ef());
  }
  Qe(kd, {}, [], [], !0);
  var Rf = Tn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function md(n) {
    p(n, Rf());
  }
  Qe(md, {}, [], [], !0);
  var Nf = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function xd(n) {
    p(n, Nf());
  }
  Qe(xd, {}, [], [], !0);
  var Qf = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function yd(n) {
    p(n, Qf());
  }
  Qe(yd, {}, [], [], !0);
  var Wf = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function wd(n) {
    p(n, Wf());
  }
  Qe(wd, {}, [], [], !0);
  var Uf = Tn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Pd(n) {
    p(n, Uf());
  }
  Qe(Pd, {}, [], [], !0);
  const Sd = { checkmark: md, dot: xd, arrow: kd, star: wd, heart: yd, "thumbs-up": Pd };
  var Hf = $('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), Zf = $('<span class="kaching-bundles__highlights__icon"><!></span>'), Jf = $('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), Yf = $("<div></div>");
  function ya(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "highlights", 7), o = m(t, "isSelected", 7), c = m(t, "replaceLiquid", 7), s = Fn(), i = It(), u = d(() => l().items.map((L) => $e(i, "$translate", r)(L)).map((L) => c() ? c()(L) : L).filter((L) => L !== "")), g = d(() => ((L) => bn({ "kaching-highlights-icon-color": je(L.iconColor), "kaching-highlights-text-color": je(L.textColor), "kaching-highlights-icon-size": L.size + 2 + "px", "kaching-highlights-text-size": L.size + "px" }))(l())), b = d(() => {
      var L;
      return (L = l().layout) != null ? L : "vertical";
    }), h = d(() => {
      var L;
      return (L = l().iconType) != null ? L : "checkmark";
    }), v = d(() => Sd[e(h)]), _ = d(() => {
      var L;
      return e(h) === "custom" ? $e(s, "$getMediaImageUrl", r)((L = l().customIconGID) != null ? L : null) : void 0;
    });
    var f = { get highlights() {
      return l();
    }, set highlights(L) {
      l(L), k();
    }, get isSelected() {
      return o();
    }, set isSelected(L) {
      o(L), k();
    }, get replaceLiquid() {
      return c();
    }, set replaceLiquid(L) {
      c(L), k();
    } }, x = Ie(), D = pe(x), w = (L) => {
      var Q = Yf();
      let R;
      Dt(Q, 21, () => e(u), Mr, (K, C) => {
        var ne = Jf(), A = S(ne), E = (U) => {
          var M = Hf(), B = S(M);
          y(M), be(() => Pe(B, "src", e(_))), p(U, M);
        }, oe = (U) => {
          var M = Ie(), B = pe(M), j = (N) => {
            var H = Zf();
            Qc(S(H), () => e(v), (X, V) => {
              V(X, {});
            }), y(H), p(N, H);
          };
          O(B, (N) => {
            e(v) && N(j);
          }, !0), p(U, M);
        };
        O(A, (U) => {
          e(h) === "custom" && e(_) ? U(E) : U(oe, !1);
        });
        var J = G(A, 2);
        Te(S(J), () => e(C)), y(J), y(ne), p(K, ne);
      }), y(Q), be((K) => {
        R = Lt(Q, 1, "kaching-bundles__highlights", null, R, K), Tt(Q, e(g));
      }, [() => ({ "kaching-bundles__highlights--horizontal": e(b) === "horizontal" })]), p(L, Q);
    };
    O(D, (L) => {
      e(u).length > 0 && (!l().showOnlyWhenSelected || o()) && L(w);
    }), p(n, x);
    var I = Xe(f);
    return a(), I;
  }
  function Kf(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Qe(ya, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var Xf = $('<img class="kaching-bundles__bar-image" alt=""/>'), ev = $('<div class="kaching-bundles__bar-radio"></div>'), tv = $('<span class="kaching-bundles__bar-title"><!></span>'), nv = $('<span class="kaching-bundles__bar-label"><!></span>'), rv = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), av = $('<div class="kaching-bundles__bar-full-price"><!></div>'), iv = $('<div class="kaching-bundles__bar-price"><!></div>'), lv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), sv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), ov = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), cv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), uv = $('<div class="kaching-bundles__bar-unit-price"><!> </div>'), dv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), gv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), hv = $("<!> <!>", 1), pv = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), bv = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), fv = $('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), vv = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), _v = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), kv = $('<div><input type="radio"/> <!> <!></div>');
  function ko(n, t) {
    Ke(t, !0);
    const r = () => $e(oe, "$config", o), a = () => $e(A, "$formatPrice", o), l = () => $e(ne, "$translate", o), [o, c] = vt();
    let s = m(t, "dealBlock", 7), i = m(t, "dealBar", 7), u = m(t, "product", 7), g = m(t, "otherProducts", 23, () => []), b = m(t, "complementaryProducts", 23, () => []), h = m(t, "customQuantity", 7, void 0), v = m(t, "currentVariantId", 7, void 0), _ = m(t, "componentId", 7), f = m(t, "selected", 7, !1), x = m(t, "globalSellingPlan", 7, void 0), D = m(t, "selectedDealBarIndex", 7), w = m(t, "onProgressiveGiftsChange", 7), I = m(t, "onDealBarSelect", 7), L = m(t, "onDealBarDeselect", 7), Q = m(t, "onVariantSelect", 7), R = m(t, "onVariantsChange", 7), K = m(t, "onPersonalisationsChange", 7), C = m(t, "personalisationInitialValues", 23, () => []);
    const ne = It(), A = cn(), E = Fn(), oe = _n();
    let J = De(st([])), U = De(st([])), M = De(st([]));
    const B = d(() => s().priceRounding ? { perItem: s().showPricesPerItem, precision: s().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), j = d(() => {
      var ze, bt;
      return s() && ((bt = (ze = s().defaultVariantsV2) == null ? void 0 : ze.find((Ye) => Ut(Ye.productGID) === u().id && Ye.dealBarId === i().id)) == null ? void 0 : bt.variantGIDs) || [];
    });
    let N = d(() => V(i())), H = De(st(V(i())));
    pr(() => {
      se(H, e(N), !0);
    });
    const X = d(() => h() || e(H));
    function V(ze) {
      return ze.dealBarType === pt.Bxgy ? ze.buyQuantity + ze.getQuantity : Number(ze.quantity);
    }
    let Z = De(st([])), q = De(st([]));
    Je(() => {
      const ze = (function(bt, Ye, ve) {
        let We = [];
        for (let Ee = 0; Ee < bt; Ee++) {
          let tt = Ye[Ee];
          if (!tt && bt > V(i()) && Ye.filter((Ge) => Ge).length === V(i()) && (tt = Ye[Ye.length - 1]), tt) {
            const Ge = Ut(tt);
            if (u().variants.find((Ne) => Ne.id == Ge)) {
              We.push(Ge);
              continue;
            }
          }
          ve && We.push(ve);
        }
        return We;
      })(e(X), e(j), v());
      if (JSON.stringify(e(Z)) !== JSON.stringify(ze)) {
        const bt = e(Z).length === ze.length;
        se(Z, ze, !0), e(q).length === 0 ? se(q, ze, !0) : bt ? r().featureFlags.preserve_variant_selections && s().differentVariantsEnabled && new Set(e(q)).size !== 1 || se(q, ze, !0) : se(q, (function(Ye, ve) {
          const We = Ye[Ye.length - 1];
          if (Ye.length < ve) {
            const Ee = ve - Ye.length;
            return [...Ye, ...Array(Ee).fill(We)];
          }
          return Ye.slice(0, ve);
        })(e(q), e(X)), !0);
      }
    });
    const W = d(() => Ce(e(q))), te = d(() => new Map(u().variants.map((ze) => [ze.id, ze])));
    let de = De(void 0);
    const F = d(() => rl(u(), e(W).map((ze) => ze.variant))), P = d(() => {
      var ze, bt;
      return (i().sellingPlanEnabled || s().subscriptionsEnabled && ((ze = s().subscriptions) == null ? void 0 : ze.layout) === "link" && ((bt = s().subscriptions) == null ? void 0 : bt.subscribeByDefault)) && (!s().subscriptionsEnabled || !!x());
    }), z = d(() => e(P) ? so(i(), e(F), e(de)) : void 0), ae = d(() => oo(e(z), x(), e(F), u().requiresSellingPlan)), T = d(() => (function(ze, bt, Ye, ve) {
      return Ye.map(({ variant: Ee, quantity: tt }) => {
        let Ge = (function(ot, _t) {
          var Bt;
          if (!_t) return ot.price;
          const nt = ot.sellingPlans.find((yt) => yt.id === _t.id);
          return nt && nt.perDeliveryPrice !== nt.price ? Math.max((Bt = nt.compareAtPrice) != null ? Bt : ot.price, ot.price) : ot.price;
        })(Ee, ve);
        const Ne = ze.useProductCompareAtPrice || (bt.dealBarType === void 0 || bt.dealBarType === pt.QuantityBreak) && bt.discountType === "default";
        return Ee.compareAtPrice && Ne && (Ge = Math.max(Ge, Ee.compareAtPrice)), Ge * tt;
      }).reduce((Ee, tt) => Ee + tt, 0);
    })(s(), i(), e(W), e(ae))), ee = d(() => ll(e(T), e(J), e(U))), Y = d(() => Math.ceil(e(T) / e(X))), le = d(() => ho(e(X) === 1, e(ee), e(Y))), fe = d(() => s() && Oe(e(W), e(ae))), Be = d(() => e(W)[0] && ao(e(W)[0].variant)), ke = d(() => kr(e(W))), xe = d(() => e(ke) ? e(fe) / e(ke) : null), ge = d(() => un({ priceFormatter: a(), product: u(), selectedVariants: e(W), totalFullPrice: e(T), totalCompareAtPrice: e(ee), totalDiscountedPrice: e(fe), quantity: e(X), dealBar: i(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(ke), sellingPlan: e(ae) })), ce = d(() => e(ge)(l()(i().title))), re = d(() => e(ge)(l()(i().subtitle))), he = d(() => e(ge)(l()(i().label))), ye = d(() => al(s(), i()).map((ze) => ka(ze, l(), e(ge)))), Ae = d(() => ma(e(ye)));
    function Oe(ze, bt) {
      switch (i().dealBarType) {
        case void 0:
        case pt.QuantityBreak:
          return Uu(i(), ze, r().currencyRate, e(B), bt, r().featureFlags.percentage_cents_rounding_workaround);
        case pt.Bxgy:
          return Hu(i(), ze, r().currencyRate, e(B), bt);
      }
    }
    const Ve = d(() => Math.ceil(e(fe) / e(X))), ie = d(() => e(ee) > e(fe)), we = d(() => e(X) && (function(ze) {
      return !ze.differentVariantsEnabled || u().variants.length === 1 ? !1 : ze.hideVariantPicker ? !0 : !(e(X) == 1 && !ze.showVariantsForSingleQuantity);
    })(s())), He = d(() => r().featureFlags.variant_images && new Set(u().variants.map((ze) => ze.image).filter((ze) => ze)).size > 1), _e = d(() => `${i().id}_${_()}`);
    function Me(ze) {
      f() && (ze.preventDefault(), ze.stopPropagation(), L()());
    }
    function Ce(ze) {
      return ze.reduce((bt, Ye) => {
        const ve = bt.find(({ variant: We }) => We.id === Ye);
        if (ve) ve.quantity += 1;
        else {
          const We = u().variants.find((Ee) => Ee.id === Ye);
          if (!We) return bt;
          bt.push({ variant: We, quantity: 1 });
        }
        return bt;
      }, []);
    }
    Fa(() => {
      f() && I()({ dealBarId: i().id, dealBarQuantity: V(i()), preselected: !0 });
    });
    const Se = d(() => $e(E, "$getMediaImageUrl", o)(i().mediaImageGID) || sl);
    Je(() => {
      f() && (e(q), e(M), e(J), e(U), e(ae), nn(() => {
        (function() {
          if (!e(q).length) return;
          const ze = Ce(e(q)), bt = e(fe) + e(M).reduce((Ge, Ne) => Ge + Ne.discountedPrice, 0), Ye = e(J).reduce((Ge, Ne) => Ne.showPrice ? Ge + Ne.fullPrice : Ge, 0) + e(U).reduce((Ge, Ne) => Ge + Ne.fullPrice * Ne.quantity, 0), ve = e(T) + e(M).reduce((Ge, Ne) => Ge + Ne.fullPrice, 0) + Ye, We = Oe(e(W), void 0), Ee = u().sellingPlans.map((Ge) => ({ sellingPlanId: Ge.id, discountedPrice: Oe(e(W), Ge) })), tt = { discountedPrice: bt, fullPrice: ve, giftValue: Ye, discountedPricePerItem: e(Ve), fullPricePerItem: e(Y), discountedPriceWithoutSellingPlan: We, discountedPricesForSellingPlans: Ee };
          R()({ variants: ze, freeGifts: [...e(J), ...e(U)], upsells: e(M), dealBarSellingPlan: e(z), pricing: tt });
        })();
      }));
    });
    const qe = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? cl(i().showAsSoldOut) : "");
    var St = { get dealBlock() {
      return s();
    }, set dealBlock(ze) {
      s(ze), k();
    }, get dealBar() {
      return i();
    }, set dealBar(ze) {
      i(ze), k();
    }, get product() {
      return u();
    }, set product(ze) {
      u(ze), k();
    }, get otherProducts() {
      return g();
    }, set otherProducts(ze = []) {
      g(ze), k();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(ze = []) {
      b(ze), k();
    }, get customQuantity() {
      return h();
    }, set customQuantity(ze = void 0) {
      h(ze), k();
    }, get currentVariantId() {
      return v();
    }, set currentVariantId(ze = void 0) {
      v(ze), k();
    }, get componentId() {
      return _();
    }, set componentId(ze) {
      _(ze), k();
    }, get selected() {
      return f();
    }, set selected(ze = !1) {
      f(ze), k();
    }, get globalSellingPlan() {
      return x();
    }, set globalSellingPlan(ze = void 0) {
      x(ze), k();
    }, get selectedDealBarIndex() {
      return D();
    }, set selectedDealBarIndex(ze) {
      D(ze), k();
    }, get onProgressiveGiftsChange() {
      return w();
    }, set onProgressiveGiftsChange(ze) {
      w(ze), k();
    }, get onDealBarSelect() {
      return I();
    }, set onDealBarSelect(ze) {
      I(ze), k();
    }, get onDealBarDeselect() {
      return L();
    }, set onDealBarDeselect(ze) {
      L(ze), k();
    }, get onVariantSelect() {
      return Q();
    }, set onVariantSelect(ze) {
      Q(ze), k();
    }, get onVariantsChange() {
      return R();
    }, set onVariantsChange(ze) {
      R(ze), k();
    }, get onPersonalisationsChange() {
      return K();
    }, set onPersonalisationsChange(ze) {
      K(ze), k();
    }, get personalisationInitialValues() {
      return C();
    }, set personalisationInitialValues(ze = []) {
      C(ze), k();
    } }, it = kv();
    let et;
    var lt = S(it);
    ea(lt), lt.__change = [Kf, I, i, V];
    var wt = G(lt, 2);
    Wa(wt, { get for() {
      return e(_e);
    }, get soldOut() {
      return i().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(Ae);
    }, children: (ze, bt) => {
      var Ye = _v(), ve = pe(Ye);
      Dt(ve, 17, () => e(ye), (ct) => ct.id, (ct, zt) => {
        aa(ct, { get badge() {
          return e(zt);
        }, get blockLayout() {
          return s().blockLayout;
        } });
      });
      var We = G(ve, 2), Ee = S(We);
      Zt(Ee, { element: "div", class: "kaching-bundles__bar-main", onclick: Me, children: (ct, zt) => {
        var Xt = pv(), Ue = pe(Xt), Ze = (ut) => {
          var dt = Xf();
          be(() => Pe(dt, "src", e(Se))), p(ut, dt);
        }, rt = (ut) => {
          p(ut, ev());
        };
        O(Ue, (ut) => {
          i().mediaImageGID ? ut(Ze) : ut(rt, !1);
        });
        var Ct = G(Ue, 2), At = S(Ct), kn = S(At), $t = S(kn);
        at($t, () => e(ce), (ut) => {
          var dt = tv();
          Te(S(dt), () => e(ce)), y(dt), p(ut, dt);
        });
        var qt = G($t, 2), mn = (ut) => {
          var dt = Ie();
          at(pe(dt), () => e(he), (Rt) => {
            var Nt = nv();
            Te(S(Nt), () => e(he)), y(Nt), p(Rt, Nt);
          }), p(ut, dt);
        };
        O(qt, (ut) => {
          e(he) && ut(mn);
        }), y(kn);
        var Qt = G(kn, 2), gn = S(Qt), hn = (ut) => {
          var dt = Ie();
          at(pe(dt), () => e(re), (Rt) => {
            var Nt = rv();
            Te(S(Nt), () => e(re)), y(Nt), p(Rt, Nt);
          }), p(ut, dt);
        };
        O(gn, (ut) => {
          e(re) && ut(hn);
        });
        var rr = G(gn, 2), Hn = (ut) => {
          {
            let dt = d(() => {
              var Rt, Nt;
              return (Nt = (Rt = e(W)) == null ? void 0 : Rt[0]) == null ? void 0 : Nt.variant;
            });
            ia(ut, { get dealBlock() {
              return s();
            }, get variant() {
              return e(dt);
            } });
          }
        };
        O(rr, (ut) => {
          e(we) || ut(Hn);
        }), y(Qt), y(At);
        var Zn = G(At, 2), ur = S(Zn), fn = (ut) => {
          var dt = ov(), Rt = pe(dt), Nt = S(Rt);
          at(Nt, () => e(Ve), (Ht) => {
            Lr(Ht, { get amount() {
              return e(Ve);
            }, get showPricesPerItem() {
              return s().showPricesPerItem;
            }, get unitLabel() {
              return s().unitLabel;
            } });
          });
          var Ln = G(Nt, 2), Sn = (Ht) => {
            var sn = Ie();
            at(pe(sn), () => e(le), (Cn) => {
              var yn = av();
              Te(S(yn), () => a()(e(le))), y(yn), be(($n) => Pe(yn, "data-a11y-label", $n), [() => l()("system.original_price")]), p(Cn, yn);
            }), p(Ht, sn);
          };
          O(Ln, (Ht) => {
            e(ie) && Ht(Sn);
          }), y(Rt);
          var xn = G(Rt, 2), Bn = (Ht) => {
            var sn = sv(), Cn = S(sn);
            at(Cn, () => e(fe), (an) => {
              var pn = iv();
              Te(S(pn), () => a()(e(fe))), y(pn), be((Jn) => Pe(pn, "data-a11y-label", Jn), [() => l()("system.price")]), p(an, pn);
            });
            var yn = G(Cn, 2), $n = (an) => {
              var pn = Ie();
              at(pe(pn), () => e(ee), (Jn) => {
                var En = lv();
                Te(S(En), () => a()(e(ee))), y(En), be((gl) => Pe(En, "data-a11y-label", gl), [() => l()("system.original_price")]), p(Jn, En);
              }), p(an, pn);
            };
            O(yn, (an) => {
              e(ie) && an($n);
            }), y(sn), p(Ht, sn);
          };
          O(xn, (Ht) => {
            e(X) > 1 && Ht(Bn);
          }), p(ut, dt);
        }, Pn = (ut) => {
          var dt = Ie(), Rt = pe(dt), Nt = (Sn) => {
            var xn = dv(), Bn = pe(xn), Ht = S(Bn);
            at(Ht, () => e(fe), ($n) => {
              {
                let an = d(() => s().showPricesPerItem ? e(Ve) : e(fe));
                Lr($n, { get amount() {
                  return e(an);
                }, get showPricesPerItem() {
                  return s().showPricesPerItem;
                }, get unitLabel() {
                  return s().unitLabel;
                } });
              }
            });
            var sn = G(Ht, 2), Cn = ($n) => {
              var an = Ie();
              at(pe(an), () => s().showPricesPerItem ? e(le) : e(ee), (pn) => {
                var Jn = cv();
                Te(S(Jn), () => a()(s().showPricesPerItem ? e(le) : e(ee))), y(Jn), be((En) => Pe(Jn, "data-a11y-label", En), [() => l()("system.original_price")]), p(pn, Jn);
              }), p($n, an);
            };
            O(sn, ($n) => {
              e(ie) && $n(Cn);
            }), y(Bn);
            var yn = G(Bn, 2);
            at(S(yn), () => e(xe), ($n) => {
              var an = uv(), pn = S(an);
              Te(pn, () => a()(e(xe), { preserveDecimals: !0 }));
              var Jn = G(pn);
              y(an), be(() => {
                var En;
                return ft(Jn, ` /
                    ${(En = e(Be)) != null ? En : ""}`);
              }), p($n, an);
            }), y(yn), p(Sn, xn);
          }, Ln = (Sn) => {
            var xn = hv(), Bn = pe(xn);
            at(Bn, () => e(fe), (Cn) => {
              {
                let yn = d(() => s().showPricesPerItem ? e(Ve) : e(fe));
                Lr(Cn, { get amount() {
                  return e(yn);
                }, get showPricesPerItem() {
                  return s().showPricesPerItem;
                }, get unitLabel() {
                  return s().unitLabel;
                } });
              }
            });
            var Ht = G(Bn, 2), sn = (Cn) => {
              var yn = Ie();
              at(pe(yn), () => s().showPricesPerItem ? e(le) : e(ee), ($n) => {
                var an = gv();
                Te(S(an), () => a()(s().showPricesPerItem ? e(le) : e(ee))), y(an), be((pn) => Pe(an, "data-a11y-label", pn), [() => l()("system.original_price")]), p($n, an);
              }), p(Cn, yn);
            };
            O(Ht, (Cn) => {
              e(ie) && Cn(sn);
            }), p(Sn, xn);
          };
          O(Rt, (Sn) => {
            e(xe) && !r().ignoreUnitPrice ? Sn(Nt) : Sn(Ln, !1);
          }, !0), p(ut, dt);
        };
        O(ur, (ut) => {
          s().showBothPrices ? ut(fn) : ut(Pn, !1);
        }), y(Zn), y(Ct), p(ct, Xt);
      }, $$slots: { default: !0 } });
      var tt = G(Ee, 2), Ge = (ct) => {
        ya(ct, { get highlights() {
          return i().highlights;
        }, get isSelected() {
          return f();
        }, get replaceLiquid() {
          return e(ge);
        } });
      };
      O(tt, (ct) => {
        i().highlights && ct(Ge);
      });
      var Ne = G(tt, 2), ot = (ct) => {
        var zt = bv(), Xt = S(zt);
        {
          let Ue = d(() => e(z) || e(F)[0]);
          xa(Xt, { get sellingPlans() {
            return e(F);
          }, get selectedSellingPlan() {
            return e(Ue);
          }, onChange: (Ze) => {
            se(de, Ze, !0);
          } });
        }
        y(zt), p(ct, zt);
      };
      O(Ne, (ct) => {
        f() && e(P) && !i().sellingPlanGid && e(F).length > 1 && ct(ot);
      });
      var _t = G(Ne, 2), Bt = (ct) => {
        var zt = vv(), Xt = S(zt);
        na(Xt, { get product() {
          return u();
        } }), Dt(G(Xt, 2), 17, () => ({ length: e(X) }), Mr, (Ue, Ze, rt) => {
          var Ct = fv(), At = S(Ct);
          {
            let $t = d(() => e(X) > 1 ? rt + 1 : void 0);
            Un(At, { get product() {
              return u();
            }, get selectedVariantId() {
              return e(q)[rt];
            }, get showImage() {
              return e(He);
            }, get number() {
              return e($t);
            }, onChange: (qt) => (function(mn, Qt) {
              const gn = [...e(q)];
              gn[mn] = Qt, se(q, gn, !0), f() && Q()({ variantId: Qt });
            })(rt, qt), onOptionChange: (qt, mn, Qt) => (function(gn, hn, rr, Hn) {
              if (s().disableVariantOptionSync || gn !== 0) return;
              const Zn = hn - 1, ur = e(q).map((fn) => u().variants.find((Pn) => Pn.id === fn)).filter((fn) => fn != null).slice(1);
              ur.length !== 0 && ur.every((fn) => fn.options[Zn] === Hn) && se(q, e(q).map((fn) => {
                const Pn = u().variants.find((Rt) => Rt.id === fn);
                if (!Pn || Pn.options[Zn] !== Hn) return fn;
                const ut = [...Pn.options];
                ut[Zn] = rr;
                const dt = u().variants.find((Rt) => Rt.options.every((Nt, Ln) => Nt === ut[Ln]));
                return dt ? dt.id : fn;
              }), !0);
            })(rt, qt, mn, Qt) });
          }
          var kn = G(At, 2);
          {
            let $t = d(() => e(te).get(e(q)[rt]));
            ia(kn, { get dealBlock() {
              return s();
            }, get variant() {
              return e($t);
            } });
          }
          y(Ct), p(Ue, Ct);
        }), y(zt), p(ct, zt);
      };
      O(_t, (ct) => {
        e(we) && ct(Bt);
      });
      var nt = G(_t, 2), yt = (ct) => {
        {
          let zt = d(() => V(i()));
          ul(ct, { get value() {
            return e(H);
          }, get min() {
            return e(zt);
          }, onChange: (Xt) => se(H, Xt, !0) });
        }
      };
      O(nt, (ct) => {
        f() && i().dealBarType === pt.QuantityBreak && i().quantitySelector && ct(yt);
      });
      var Mt = G(nt, 2), Et = (ct) => {
        Ua(ct, { get product() {
          return u();
        }, get selectedVariantIds() {
          return e(q);
        }, get productPersonalisation() {
          return i().productPersonalisation;
        }, get quantity() {
          return e(N);
        }, get addPersonalisationModal() {
          return s().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return K();
        }, get initialValues() {
          return C();
        } });
      };
      O(Mt, (ct) => {
        f() && i().productPersonalisation && (s().blockLayout === "vertical" || s().blockLayout === "plain") && ct(Et);
      }), y(We);
      var Jt = G(We, 2);
      {
        let ct = d(() => i().upsells || []);
        wi(Jt, { get dealBlock() {
          return s();
        }, get dealBarId() {
          return i().id;
        }, get upsells() {
          return e(ct);
        }, get otherProducts() {
          return g();
        }, get complementaryProducts() {
          return b();
        }, get dealBarSelected() {
          return f();
        }, get dealSellingPlan() {
          return e(ae);
        }, onChange: (zt) => {
          se(M, zt, !0);
        } });
      }
      var Yt = G(Jt, 2);
      Bi(Yt, { get selectedDealBarIndex() {
        return D();
      }, get onChange() {
        return w();
      }, get dealBlock() {
        return s();
      }, get dealBar() {
        return i();
      }, get selected() {
        return f();
      }, get otherProducts() {
        return g();
      }, get sellingPlan() {
        return e(ae);
      }, get progressiveGifts() {
        return s().progressiveGifts;
      } });
      var dn = G(Yt, 2);
      {
        let ct = d(() => i().freeGifts || []);
        yi(dn, { get dealBlock() {
          return s();
        }, get freeGifts() {
          return e(ct);
        }, get freeGiftsSummary() {
          return i().freeGiftsSummary;
        }, get otherProducts() {
          return g();
        }, get dealBarSelected() {
          return f();
        }, get sellingPlan() {
          return e(ae);
        }, get mainProductVariantId() {
          return e(q)[0];
        }, onChange: (zt) => {
          se(J, zt, !0);
        } });
      }
      var Kt = G(dn, 2);
      {
        let ct = d(() => i().multipleGiftsSelectors || []);
        Si(Kt, { get dealBlock() {
          return s();
        }, get multipleGiftsSelectors() {
          return e(ct);
        }, get sellingPlan() {
          return e(ae);
        }, get otherProducts() {
          return g();
        }, onChange: (zt) => {
          se(U, zt, !0);
        } });
      }
      p(ze, Ye);
    }, $$slots: { default: !0 } });
    var rn = G(wt, 2), jt = (ze) => {
      Pi(ze, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(ge);
      } });
    };
    O(rn, (ze) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && ze(jt);
    }), y(it), be((ze) => {
      var bt;
      et = Lt(it, 1, "kaching-bundles__bar", null, et, ze), Pe(it, "data-deal-bar-id", i().id), Tt(it, e(qe)), Pe(lt, "name", `kaching-bundles-deal-${(bt = _()) != null ? bt : ""}`), La(lt, i().id), Pe(lt, "id", e(_e)), Yi(lt, f()), lt.disabled = i().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": f() })]), p(n, it);
    var gt = Xe(St);
    return c(), gt;
  }
  On(["change"]), Qe(ko, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var mv = $('<div class="kaching-bundles"><!></div>');
  function Bd(n, t) {
    var r;
    Ke(t, !0);
    const a = m(t, "config", 7), l = m(t, "dealBlock", 7), o = m(t, "dealBar", 7), c = m(t, "translations", 7), s = m(t, "product", 7), i = m(t, "mediaImages", 23, () => []), u = m(t, "currentVariantId", 7), g = m(t, "variantBadges", 23, () => []), b = Math.random().toString(16).slice(2), { setConfig: h } = Qa(a()), { setMoneyFormat: v } = mi(a().moneyFormat), { setTranslations: _ } = Na(c()), { setMediaImages: f } = tl(i()), { setSwatchSettings: x } = Ki({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r }), { setVariantBadges: D } = ud(g());
    Je(() => {
      h(a());
    }), Je(() => {
      v(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      _(c());
    }), Je(() => {
      f(i());
    }), Je(() => {
      var K;
      x({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (K = l().showSelectedSwatchName) != null && K });
    }), Je(() => {
      D(g());
    });
    const w = d(() => l() && Iu(l()));
    var I = { get config() {
      return a();
    }, set config(K) {
      a(K), k();
    }, get dealBlock() {
      return l();
    }, set dealBlock(K) {
      l(K), k();
    }, get dealBar() {
      return o();
    }, set dealBar(K) {
      o(K), k();
    }, get translations() {
      return c();
    }, set translations(K) {
      c(K), k();
    }, get product() {
      return s();
    }, set product(K) {
      s(K), k();
    }, get mediaImages() {
      return i();
    }, set mediaImages(K = []) {
      i(K), k();
    }, get currentVariantId() {
      return u();
    }, set currentVariantId(K) {
      u(K), k();
    }, get variantBadges() {
      return g();
    }, set variantBadges(K = []) {
      g(K), k();
    } }, L = mv(), Q = S(L), R = (K) => {
      ko(K, { selectedDealBarIndex: null, get dealBlock() {
        return l();
      }, get dealBar() {
        return o();
      }, get product() {
        return s();
      }, get currentVariantId() {
        return u();
      }, get componentId() {
        return b;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return O(Q, (K) => {
      o().dealBarType && o().dealBarType !== pt.QuantityBreak && o().dealBarType !== pt.Bxgy || K(R);
    }), y(L), be(() => Tt(L, e(w))), p(n, L), Xe(I);
  }
  customElements.define("kaching-bundles-bar", Qe(Bd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  var Cd = !1;
  const Id = class extends Date {
    constructor(...n) {
      super(...n), mt(this, ms), mt(this, qi, De(super.getTime())), mt(this, yl, /* @__PURE__ */ new Map()), mt(this, ks, Gt), Cd || ln(this, ms, jo).call(this);
    }
  };
  qi = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakSet(), jo = function() {
    Cd = !0;
    var n = Id.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...l) {
      if (l.length > 0) return e(me(this, qi)), t[a].apply(this, l);
      var o = me(this, yl).get(a);
      if (o === void 0) {
        const c = Gt;
        Qn(me(this, ks)), o = d(() => (e(me(this, qi)), t[a].apply(this, l))), me(this, yl).set(a, o), Qn(c);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...l) {
      var o = t[a].apply(this, l);
      return se(me(this, qi), t.getTime.call(this)), o;
    });
  };
  let mo = Id;
  var xv = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], yv = ["difference", "intersection", "symmetricDifference", "union"], Md = !1;
  const xo = class extends Set {
    constructor(n) {
      if (super(), mt(this, wl), mt(this, Gi, /* @__PURE__ */ new Map()), mt(this, Ar, De(0)), mt(this, Ma, De(0)), mt(this, xs, Ir || -1), n) {
        for (var t of n) super.add(t);
        me(this, Ma).v = super.size;
      }
      Md || ln(this, wl, Ro).call(this);
    }
    has(n) {
      var t = super.has(n), r = me(this, Gi), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(me(this, Ar)), !1;
        a = ln(this, wl, Eo).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), se(me(this, Ma), super.size), ir(me(this, Ar))), this;
    }
    delete(n) {
      var t = super.delete(n), r = me(this, Gi), a = r.get(n);
      return a !== void 0 && (r.delete(n), se(a, !1)), t && (se(me(this, Ma), super.size), ir(me(this, Ar))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = me(this, Gi);
        for (var t of n.values()) se(t, !1);
        n.clear(), se(me(this, Ma), 0), ir(me(this, Ar));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(me(this, Ar)), super.values();
    }
    entries() {
      return e(me(this, Ar)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(me(this, Ma));
    }
  };
  Gi = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakMap(), wl = /* @__PURE__ */ new WeakSet(), Eo = function(n) {
    return Ir === me(this, xs) ? De(n) : Yr(n);
  }, Ro = function() {
    Md = !0;
    var n = xo.prototype, t = Set.prototype;
    for (const r of xv) n[r] = function(...a) {
      return e(me(this, Ar)), t[r].apply(this, a);
    };
    for (const r of yv) n[r] = function(...a) {
      e(me(this, Ar));
      var l = t[r].apply(this, a);
      return new xo(l);
    };
  };
  let wv = xo;
  const zd = class extends Map {
    constructor(n) {
      if (super(), mt(this, Hr), mt(this, Wr, /* @__PURE__ */ new Map()), mt(this, Ur, De(0)), mt(this, ua, De(0)), mt(this, ys, Ir || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        me(this, ua).v = super.size;
      }
    }
    has(n) {
      var t = me(this, Wr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(me(this, Ur)), !1;
        r = ln(this, Hr, Oi).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      ln(this, Hr, Pl).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = me(this, Wr), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(me(this, Ur));
        r = ln(this, Hr, Oi).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = me(this, Wr), l = a.get(n), o = super.get(n), c = super.set(n, t), s = me(this, Ur);
      if (l === void 0) l = ln(this, Hr, Oi).call(this, 0), a.set(n, l), se(me(this, ua), super.size), ir(s);
      else if (o !== t) {
        ir(l);
        var i = s.reactions === null ? null : new Set(s.reactions);
        (i === null || !((r = l.reactions) != null && r.every((u) => i.has(u)))) && ir(s);
      }
      return c;
    }
    delete(n) {
      var t = me(this, Wr), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), se(me(this, ua), super.size), se(r, -1), ir(me(this, Ur))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = me(this, Wr);
        for (var t of (se(me(this, ua), 0), n.values())) se(t, -1);
        ir(me(this, Ur)), n.clear();
      }
    }
    keys() {
      return e(me(this, Ur)), super.keys();
    }
    values() {
      return ln(this, Hr, Pl).call(this), super.values();
    }
    entries() {
      return ln(this, Hr, Pl).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(me(this, ua)), super.size;
    }
  };
  Wr = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), ys = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakSet(), Oi = function(n) {
    return Ir === me(this, ys) ? De(n) : Yr(n);
  }, Pl = function() {
    e(me(this, Ur));
    var n = me(this, Wr);
    if (me(this, ua).v !== n.size) {
      for (var t of _m(zd.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = ln(this, Hr, Oi).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of me(this, Wr)) e(r);
  };
  let Pv = zd;
  class Sv {
    constructor(t, r) {
      mt(this, Sl), mt(this, Bl), xt(this, Sl, t), xt(this, Bl, sc(r));
    }
    get current() {
      return me(this, Bl).call(this), me(this, Sl).call(this);
    }
  }
  Sl = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap();
  const Bv = /\(.+\)/, Cv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
  class Iv extends Sv {
    constructor(t, r) {
      let a = Bv.test(t) || t.split(/[\s,]+/).some((o) => Cv.has(o.trim())) ? t : `(${t})`;
      const l = window.matchMedia(a);
      super(() => l.matches, (o) => (function(c, s, i, u = {}) {
        var g = Fs(s, c, i, u);
        return () => {
          c.removeEventListener(s, g, u);
        };
      })(l, "change", o));
    }
  }
  var Mv = $('<img alt="" class="kaching-bundles__bundle-products__image"/>'), zv = $('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function yo(n, t) {
    Ke(t, !0);
    const r = m(t, "image", 7), a = m(t, "linkUrl", 7);
    var l = { get image() {
      return r();
    }, set image(u) {
      r(u), k();
    }, get linkUrl() {
      return a();
    }, set linkUrl(u) {
      a(u), k();
    } }, o = Ie(), c = pe(o), s = (u) => {
      Xn(u, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (g, b) => {
        var h = Mv();
        Pe(h, "height", 50), Pe(h, "width", 50), be(() => Pe(h, "src", r())), p(g, h);
      }, $$slots: { default: !0 } });
    }, i = (u) => {
      p(u, zv());
    };
    return O(c, (u) => {
      r() ? u(s) : u(i, !1);
    }), p(n, o), Xe(l);
  }
  Qe(yo, { image: {}, linkUrl: {} }, [], [], !0);
  var $v = $('<span class="kaching-bundles__bundle-products__quantity"> </span>'), Dv = $('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function wo(n, t) {
    Ke(t, !0);
    const r = m(t, "title", 7), a = m(t, "quantity", 7), l = m(t, "linkUrl", 7);
    var o = { get title() {
      return r();
    }, set title(c) {
      r(c), k();
    }, get quantity() {
      return a();
    }, set quantity(c) {
      a(c), k();
    }, get linkUrl() {
      return l();
    }, set linkUrl(c) {
      l(c), k();
    } };
    return Xn(n, { get url() {
      return l();
    }, class: "kaching-bundles__bundle-products__link", children: (c, s) => {
      var i = Dv(), u = S(i), g = (v) => {
        var _ = $v(), f = S(_);
        y(_), be(() => {
          var x;
          return ft(f, `${(x = a()) != null ? x : ""}x`);
        }), p(v, _);
      };
      O(u, (v) => {
        a() > 1 && v(g);
      });
      var b = G(u, 2), h = S(b, !0);
      y(b), y(i), be(() => ft(h, r())), p(c, i);
    }, $$slots: { default: !0 } }), Xe(o);
  }
  Qe(wo, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var Av = $('<span class="kaching-bundles__bundle-products__price"><!></span>'), Vv = $('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), Tv = $('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), qv = $("<div><!> <!> <!></div>");
  function os(n, t) {
    Ke(t, !0);
    const r = () => $e(g, "$formatPrice", a), [a, l] = vt();
    let o = m(t, "discountedPrice", 7), c = m(t, "fullPrice", 7), s = m(t, "unitPrice", 7), i = m(t, "unitPriceReference", 7), u = m(t, "ignoreUnitPrice", 7);
    const g = cn(), b = d(() => !!s() && !!i() && !u());
    var h = { get discountedPrice() {
      return o();
    }, set discountedPrice(Q) {
      o(Q), k();
    }, get fullPrice() {
      return c();
    }, set fullPrice(Q) {
      c(Q), k();
    }, get unitPrice() {
      return s();
    }, set unitPrice(Q) {
      s(Q), k();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(Q) {
      i(Q), k();
    }, get ignoreUnitPrice() {
      return u();
    }, set ignoreUnitPrice(Q) {
      u(Q), k();
    } }, v = qv();
    let _;
    var f = S(v);
    at(f, o, (Q) => {
      var R = Av();
      Te(S(R), () => r()(o())), y(R), p(Q, R);
    });
    var x = G(f, 2), D = (Q) => {
      var R = Ie();
      at(pe(R), c, (K) => {
        var C = Vv();
        Te(S(C), () => r()(c())), y(C), p(K, C);
      }), p(Q, R);
    };
    O(x, (Q) => {
      o() < c() && Q(D);
    });
    var w = G(x, 2), I = (Q) => {
      var R = Ie();
      at(pe(R), s, (K) => {
        var C = Tv(), ne = S(C);
        Te(ne, () => r()(s(), { preserveDecimals: !0 }));
        var A = G(ne);
        y(C), be(() => {
          var E;
          return ft(A, ` / ${(E = i()) != null ? E : ""}`);
        }), p(K, C);
      }), p(Q, R);
    };
    O(w, (Q) => {
      s() && i() && !u() && Q(I);
    }), y(v), be((Q) => _ = Lt(v, 1, "kaching-bundles__bundle-products__pricing", null, _, Q), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(b) })]), p(n, v);
    var L = Xe(h);
    return l(), L;
  }
  Qe(os, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var Gv = $("<!> <!> <!> <!> <!>", 1), Ov = $("<!> <!>", 1), Fv = $('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), Lv = $('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function $d(n, t) {
    Ke(t, !0);
    const r = () => $e(D, "$config", a), [a, l] = vt();
    let o = m(t, "dealBlock", 7), c = m(t, "layout", 7), s = m(t, "bundleProduct", 7), i = m(t, "product", 7), u = m(t, "dealBarSelected", 7), g = m(t, "currentVariantId", 7), b = m(t, "mainVariantId", 7), h = m(t, "priceRounding", 7), v = m(t, "sellingPlan", 7), _ = m(t, "dealBar", 7), f = m(t, "sets", 7), x = m(t, "onChange", 7);
    const D = _n(), w = cn();
    let I = De(void 0);
    const L = d(() => !!s().variantGIDs), Q = d(() => {
      var P, z;
      return e(L) && i() ? i().variants.filter((ae) => s().variantGIDs.some((T) => Ut(T) === ae.id)) : (z = (P = i()) == null ? void 0 : P.variants) != null ? z : [];
    }), R = d(() => {
      var P, z, ae, T;
      const ee = s().productGID === "default", Y = !!((P = o().defaultVariantsV2) != null && P.length);
      if (ee && Y && i()) {
        const le = i().id, fe = (T = (ae = (z = o().defaultVariantsV2) == null ? void 0 : z.find((Be) => Ut(Be.productGID) === le && Be.dealBarId === _().id)) == null ? void 0 : ae.variantGIDs) == null ? void 0 : T[0];
        if (fe) return Ut(fe);
      }
      if (s().defaultVariantGID) return Ut(s().defaultVariantGID);
    }), K = d(() => {
      const P = e(I) || e(R);
      return P !== void 0 && e(Q).some(({ id: z }) => z === P) ? P : s().productGID === "default" && g() ? g() : s().variantGIDs ? s().variantGIDs.length === 0 ? void 0 : Ut(s().variantGIDs[0]) : e(Q).length > 0 ? e(Q)[0].id : void 0;
    }), C = d(() => {
      var P;
      return e(K) ? (P = i()) == null ? void 0 : P.variants.find((z) => z.id === e(K)) : void 0;
    }), ne = d(() => i() && e(C) && er(i(), e(C), v())), A = d(() => s().quantity * f()), E = d(() => ra({ discountType: s().discountType, discountValue: s().discountValue, discountQuantity: s().quantity, variantQuantities: e(C) ? [{ variant: e(C), quantity: e(A) }] : [], currencyRate: r().currencyRate, priceRounding: h(), sellingPlan: e(ne) })), oe = d(() => (function(P) {
      if (!P) return 0;
      let z = P.price;
      return o().useProductCompareAtPrice && P.compareAtPrice && (z = Math.max(z, P.compareAtPrice)), z * e(A);
    })(e(C))), J = d(() => e(C) ? ao(e(C)) : null), U = d(() => e(C) ? kr([{ variant: e(C), quantity: e(A) }]) : null), M = d(() => e(U) ? e(E) / e(U) : null), B = d(() => {
      var P;
      return (P = i()) != null && P.url && e(C) ? `${i().url}?variant=${e(C).id}` : void 0;
    }), j = d(() => {
      var P, z;
      return ((P = e(C)) == null ? void 0 : P.image) || ((z = i()) == null ? void 0 : z.image);
    }), N = d(() => u() && i() && e(Q).length > 1 && e(K)), H = d(() => u() && s().productGID !== "default" ? e(B) : void 0), X = d(() => i() ? s().title ? un({ priceFormatter: $e(w, "$formatPrice", a), product: i(), totalFullPrice: e(oe), totalDiscountedPrice: e(E), quantity: e(A), unitQuantity: e(U) })(s().title) : i().title : "");
    function V(P) {
      se(I, P, !0);
    }
    let Z;
    Je(() => {
      e(C) && e(A) && nn(() => {
        x()({ variant: e(C), product: i(), quantity: e(A) });
      });
    }), pr(() => {
      s().productGID, se(I, void 0), Z = void 0;
    }), pr(() => {
      const P = s().productGID === "default";
      if (!(P || !o().disableVariantOptionSync)) return;
      const z = P ? g() : b();
      if (!z || !i() || z === Z) return;
      const ae = Z;
      if (Z = z, !e(Q).some((Y) => Y.id === z)) return;
      const T = e(I) === void 0 && e(R) === void 0, ee = e(I) === ae && ae !== void 0;
      (T || ee) && se(I, z, !0);
    });
    var q = { get dealBlock() {
      return o();
    }, set dealBlock(P) {
      o(P), k();
    }, get layout() {
      return c();
    }, set layout(P) {
      c(P), k();
    }, get bundleProduct() {
      return s();
    }, set bundleProduct(P) {
      s(P), k();
    }, get product() {
      return i();
    }, set product(P) {
      i(P), k();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(P) {
      u(P), k();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(P) {
      g(P), k();
    }, get mainVariantId() {
      return b();
    }, set mainVariantId(P) {
      b(P), k();
    }, get priceRounding() {
      return h();
    }, set priceRounding(P) {
      h(P), k();
    }, get sellingPlan() {
      return v();
    }, set sellingPlan(P) {
      v(P), k();
    }, get dealBar() {
      return _();
    }, set dealBar(P) {
      _(P), k();
    }, get sets() {
      return f();
    }, set sets(P) {
      f(P), k();
    }, get onChange() {
      return x();
    }, set onChange(P) {
      x(P), k();
    } }, W = Ie(), te = pe(W), de = (P) => {
      var z = Lv(), ae = S(z), T = (Y) => {
        var le = Gv(), fe = pe(le);
        yo(fe, { get image() {
          return e(j);
        }, get linkUrl() {
          return e(H);
        } });
        var Be = G(fe, 2);
        wo(Be, { get title() {
          return e(X);
        }, get quantity() {
          return e(A);
        }, get linkUrl() {
          return e(H);
        } });
        var ke = G(Be, 2), xe = (he) => {
          os(he, { get discountedPrice() {
            return e(E);
          }, get fullPrice() {
            return e(oe);
          }, get unitPrice() {
            return e(M);
          }, get unitPriceReference() {
            return e(J);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        O(ke, (he) => {
          s().hidePrice || he(xe);
        });
        var ge = G(ke, 2);
        ia(ge, { get dealBlock() {
          return o();
        }, get variant() {
          return e(C);
        } });
        var ce = G(ge, 2), re = (he) => {
          {
            let ye = d(() => ({ ...i(), variants: e(Q) })), Ae = d(() => e(K) || 0);
            Un(he, { get product() {
              return e(ye);
            }, get selectedVariantId() {
              return e(Ae);
            }, onChange: V });
          }
        };
        O(ce, (he) => {
          e(N) && he(re);
        }), p(Y, le);
      }, ee = (Y) => {
        var le = Fv(), fe = pe(le), Be = S(fe);
        yo(Be, { get image() {
          return e(j);
        }, get linkUrl() {
          return e(H);
        } });
        var ke = G(Be, 2), xe = S(ke);
        wo(xe, { get title() {
          return e(X);
        }, get quantity() {
          return e(A);
        }, get linkUrl() {
          return e(H);
        } });
        var ge = G(xe, 2);
        ia(ge, { get dealBlock() {
          return o();
        }, get variant() {
          return e(C);
        } });
        var ce = G(ge, 2), re = (Ae) => {
          var Oe = Ov(), Ve = pe(Oe);
          {
            let we = d(() => ({ ...i(), variants: e(Q) }));
            na(Ve, { get product() {
              return e(we);
            } });
          }
          var ie = G(Ve, 2);
          {
            let we = d(() => ({ ...i(), variants: e(Q) })), He = d(() => e(K) || 0);
            Un(ie, { get product() {
              return e(we);
            }, get selectedVariantId() {
              return e(He);
            }, onChange: V });
          }
          p(Ae, Oe);
        };
        O(ce, (Ae) => {
          e(N) && Ae(re);
        }), y(ke), y(fe);
        var he = G(fe, 2), ye = (Ae) => {
          os(Ae, { get discountedPrice() {
            return e(E);
          }, get fullPrice() {
            return e(oe);
          }, get unitPrice() {
            return e(M);
          }, get unitPriceReference() {
            return e(J);
          }, get ignoreUnitPrice() {
            return r().ignoreUnitPrice;
          } });
        };
        O(he, (Ae) => {
          s().hidePrice || Ae(ye);
        }), p(Y, le);
      };
      O(ae, (Y) => {
        c() === "horizontal" ? Y(T) : Y(ee, !1);
      }), y(z), p(P, z);
    };
    O(te, (P) => {
      i() && P(de);
    }), p(n, W);
    var F = Xe(q);
    return l(), F;
  }
  Qe($d, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var jv = Tn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function Dd(n) {
    p(n, jv());
  }
  function Ev(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Qe(Dd, {}, [], [], !0);
  var Rv = $('<img class="kaching-bundles__bar-image" alt=""/>'), Nv = $('<div class="kaching-bundles__bar-radio"></div>'), Qv = $('<span class="kaching-bundles__bar-title"><!></span>'), Wv = $('<span class="kaching-bundles__bar-label"><!></span>'), Uv = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Hv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Zv = $('<div class="kaching-bundles__bar-price"><!></div>'), Jv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Yv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Kv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Xv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), e_ = $("<!> <!>", 1), t_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), n_ = $('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), r_ = $('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), a_ = $("<!> <!>", 1), i_ = $("<div></div>"), l_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), s_ = $('<div><input type="radio"/> <!> <!></div>');
  function Ad(n, t) {
    Ke(t, !0);
    const r = () => $e(E, "$config", o), a = () => $e(ne, "$formatPrice", o), l = () => $e(C, "$translate", o), [o, c] = vt(), s = m(t, "dealBlock", 7), i = m(t, "dealBar", 7), u = m(t, "product", 7), g = m(t, "otherProducts", 23, () => []), b = m(t, "complementaryProducts", 23, () => []), h = m(t, "currentVariantId", 7), v = m(t, "componentId", 7), _ = m(t, "selectedDealBarIndex", 7), f = m(t, "selected", 7, !1), x = m(t, "sellingPlan", 7), D = m(t, "onProgressiveGiftsChange", 7), w = m(t, "onDealBarSelect", 7), I = m(t, "onDealBarDeselect", 7), L = m(t, "onVariantSelect", 7), Q = m(t, "onVariantsChange", 7), R = m(t, "onPersonalisationsChange", 7), K = m(t, "personalisationInitialValues", 23, () => []), C = It(), ne = cn(), A = Fn(), E = _n();
    let oe = De(st({})), J = De(st([])), U = De(st([])), M = De(st([])), B = De(1);
    const j = d(() => `${i().id}_${v()}`), N = d(() => i().bundleProducts.filter(({ productGID: _e }) => _e)), H = d(() => e(N).every((_e) => ye(_e, u(), g()))), X = d(() => i().showProductsOnlyWhenSelected && !f()), V = d(() => e(N).every((_e) => {
      var Me;
      const Ce = ye(_e, u(), g());
      return (Me = Ce == null ? void 0 : Ce.availableForSale) != null && Me;
    })), Z = d(() => s() ? (function(_e, Me) {
      return i().bundleProducts.map((Se) => {
        const qe = Me[Se.id];
        if (!qe) return 0;
        const { variant: St, quantity: it } = qe;
        let et = St.price;
        return St.compareAtPrice && _e.useProductCompareAtPrice && (et = Math.max(et, St.compareAtPrice)), et * it;
      }).reduce((Se, qe) => Se + qe, 0);
    })(s(), e(oe)) : 0), q = d(() => ll(e(Z), e(J), e(U))), W = d(() => s().priceRounding ? { perItem: s().showPricesPerItem, precision: s().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), te = d(() => s() ? co(i(), e(oe), r().currencyRate, e(W), x()) : 0), de = d(() => e(N).reduce((_e, Me) => _e + Me.quantity, 0) * e(B)), F = d(() => Math.ceil(e(te) / (e(de) || 1))), P = d(() => Math.ceil(e(Z) / (e(de) || 1))), z = d(() => ho(e(de) === 1, e(q), e(P))), ae = d(() => e(q) > e(te)), T = d(() => kr(Object.values(e(oe)))), ee = d(() => e(N).every((_e) => _e.productGID === "default" || Ut(_e.productGID) === u().id)), Y = d(() => {
      var _e;
      const Me = e(N)[0];
      if (Me) return (_e = e(oe)[Me.id]) == null ? void 0 : _e.variant.id;
    }), le = d(() => s().showPricesPerItem && e(ee)), fe = d(() => un({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(Z), totalCompareAtPrice: e(q), totalDiscountedPrice: e(te), quantity: 1, unitQuantity: e(T), sellingPlan: x() })), Be = d(() => e(fe)(l()(i().title))), ke = d(() => e(fe)(l()(i().subtitle))), xe = d(() => e(fe)(l()(i().label))), ge = d(() => al(s(), i()).map((_e) => ka(_e, l(), e(fe)))), ce = d(() => ma(e(ge))), re = d(() => $e(A, "$getMediaImageUrl", o)(i().mediaImageGID) || sl);
    function he(_e) {
      f() && (_e.preventDefault(), _e.stopPropagation(), I()());
    }
    function ye(_e, Me, Ce) {
      if (_e.productGID) return _e.productGID === "default" ? Me : Ce.find((Se) => Se.id === Ut(_e.productGID));
    }
    Fa(() => {
      f() && w()({ dealBarId: i().id, preselected: !0 });
    }), Je(() => {
      f() && (ga(e(oe)), ga(e(M)), ga(e(J)), ga(e(U)), x(), nn(() => {
        (function() {
          if (!i().bundleProducts.map(({ id: it }) => it).every((it) => e(oe)[it])) return;
          const _e = [];
          for (const it of i().bundleProducts) {
            const et = e(oe)[it.id];
            et && _e.push({ id: it.id, variant: et.variant, product: et.product, quantity: et.quantity });
          }
          if (_e.length === 0) return;
          const Me = e(te) + e(M).reduce((it, et) => it + et.discountedPrice, 0), Ce = e(J).reduce((it, et) => et.showPrice ? it + et.fullPrice : it, 0) + e(U).reduce((it, et) => it + et.fullPrice * et.quantity, 0), Se = e(Z) + e(M).reduce((it, et) => it + et.fullPrice, 0) + Ce, qe = co(i(), e(oe), r().currencyRate, e(W), void 0), St = u().sellingPlans.map((it) => ({ sellingPlanId: it.id, discountedPrice: co(i(), e(oe), r().currencyRate, e(W), it) }));
          Q()({ bundleProducts: _e, freeGifts: [...e(J), ...e(U)], upsells: e(M), pricing: { discountedPrice: Me, fullPrice: Se, giftValue: Ce, discountedPricePerItem: e(te), fullPricePerItem: e(Z), discountedPriceWithoutSellingPlan: qe, discountedPricesForSellingPlans: St } });
        })();
      }));
    });
    const Ae = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? cl(i().showAsSoldOut) : "");
    var Oe = { get dealBlock() {
      return s();
    }, set dealBlock(_e) {
      s(_e), k();
    }, get dealBar() {
      return i();
    }, set dealBar(_e) {
      i(_e), k();
    }, get product() {
      return u();
    }, set product(_e) {
      u(_e), k();
    }, get otherProducts() {
      return g();
    }, set otherProducts(_e = []) {
      g(_e), k();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(_e = []) {
      b(_e), k();
    }, get currentVariantId() {
      return h();
    }, set currentVariantId(_e) {
      h(_e), k();
    }, get componentId() {
      return v();
    }, set componentId(_e) {
      v(_e), k();
    }, get selectedDealBarIndex() {
      return _();
    }, set selectedDealBarIndex(_e) {
      _(_e), k();
    }, get selected() {
      return f();
    }, set selected(_e = !1) {
      f(_e), k();
    }, get sellingPlan() {
      return x();
    }, set sellingPlan(_e) {
      x(_e), k();
    }, get onProgressiveGiftsChange() {
      return D();
    }, set onProgressiveGiftsChange(_e) {
      D(_e), k();
    }, get onDealBarSelect() {
      return w();
    }, set onDealBarSelect(_e) {
      w(_e), k();
    }, get onDealBarDeselect() {
      return I();
    }, set onDealBarDeselect(_e) {
      I(_e), k();
    }, get onVariantSelect() {
      return L();
    }, set onVariantSelect(_e) {
      L(_e), k();
    }, get onVariantsChange() {
      return Q();
    }, set onVariantsChange(_e) {
      Q(_e), k();
    }, get onPersonalisationsChange() {
      return R();
    }, set onPersonalisationsChange(_e) {
      R(_e), k();
    }, get personalisationInitialValues() {
      return K();
    }, set personalisationInitialValues(_e = []) {
      K(_e), k();
    } }, Ve = Ie(), ie = pe(Ve), we = (_e) => {
      var Me = s_();
      let Ce;
      var Se = S(Me);
      ea(Se), Se.__change = [Ev, w, i];
      var qe = G(Se, 2);
      Wa(qe, { get for() {
        return e(j);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(ce);
      }, children: (et, lt) => {
        var wt = l_(), rn = pe(wt);
        Dt(rn, 17, () => e(ge), (nt) => nt.id, (nt, yt) => {
          aa(nt, { get badge() {
            return e(yt);
          }, get blockLayout() {
            return s().blockLayout;
          } });
        });
        var jt = G(rn, 2), gt = S(jt);
        Zt(gt, { element: "div", class: "kaching-bundles__bar-main", onclick: he, children: (nt, yt) => {
          var Mt = t_(), Et = pe(Mt), Jt = ($t) => {
            var qt = Rv();
            be(() => Pe(qt, "src", e(re))), p($t, qt);
          }, Yt = ($t) => {
            p($t, Nv());
          };
          O(Et, ($t) => {
            i().mediaImageGID ? $t(Jt) : $t(Yt, !1);
          });
          var dn = G(Et, 2), Kt = S(dn), ct = S(Kt), zt = S(ct);
          at(zt, () => e(Be), ($t) => {
            var qt = Qv();
            Te(S(qt), () => e(Be)), y(qt), p($t, qt);
          });
          var Xt = G(zt, 2), Ue = ($t) => {
            var qt = Ie();
            at(pe(qt), () => e(xe), (mn) => {
              var Qt = Wv();
              Te(S(Qt), () => e(xe)), y(Qt), p(mn, Qt);
            }), p($t, qt);
          };
          O(Xt, ($t) => {
            e(xe) && $t(Ue);
          }), y(ct);
          var Ze = G(ct, 2), rt = ($t) => {
            var qt = Ie();
            at(pe(qt), () => e(ke), (mn) => {
              var Qt = Uv();
              Te(S(Qt), () => e(ke)), y(Qt), p(mn, Qt);
            }), p($t, qt);
          };
          O(Ze, ($t) => {
            e(ke) && $t(rt);
          }), y(Kt);
          var Ct = G(Kt, 2), At = S(Ct), kn = ($t) => {
            var qt = Ie(), mn = pe(qt), Qt = (hn) => {
              var rr = Kv(), Hn = pe(rr), Zn = S(Hn);
              at(Zn, () => e(F), (dt) => {
                Lr(dt, { get amount() {
                  return e(F);
                }, get showPricesPerItem() {
                  return e(le);
                }, get unitLabel() {
                  return s().unitLabel;
                } });
              });
              var ur = G(Zn, 2), fn = (dt) => {
                var Rt = Ie();
                at(pe(Rt), () => e(z), (Nt) => {
                  var Ln = Hv();
                  Te(S(Ln), () => a()(e(z))), y(Ln), be((Sn) => Pe(Ln, "data-a11y-label", Sn), [() => l()("system.original_price")]), p(Nt, Ln);
                }), p(dt, Rt);
              };
              O(ur, (dt) => {
                e(ae) && dt(fn);
              }), y(Hn);
              var Pn = G(Hn, 2), ut = (dt) => {
                var Rt = Yv(), Nt = S(Rt);
                at(Nt, () => e(te), (xn) => {
                  var Bn = Zv();
                  Te(S(Bn), () => a()(e(te))), y(Bn), be((Ht) => Pe(Bn, "data-a11y-label", Ht), [() => l()("system.price")]), p(xn, Bn);
                });
                var Ln = G(Nt, 2), Sn = (xn) => {
                  var Bn = Ie();
                  at(pe(Bn), () => e(q), (Ht) => {
                    var sn = Jv();
                    Te(S(sn), () => a()(e(q))), y(sn), be((Cn) => Pe(sn, "data-a11y-label", Cn), [() => l()("system.original_price")]), p(Ht, sn);
                  }), p(xn, Bn);
                };
                O(Ln, (xn) => {
                  e(ae) && xn(Sn);
                }), y(Rt), p(dt, Rt);
              };
              O(Pn, (dt) => {
                e(de) > 1 && dt(ut);
              }), p(hn, rr);
            }, gn = (hn) => {
              var rr = e_(), Hn = pe(rr);
              at(Hn, () => e(te), (fn) => {
                {
                  let Pn = d(() => e(le) ? e(F) : e(te));
                  Lr(fn, { get amount() {
                    return e(Pn);
                  }, get showPricesPerItem() {
                    return e(le);
                  }, get unitLabel() {
                    return s().unitLabel;
                  } });
                }
              });
              var Zn = G(Hn, 2), ur = (fn) => {
                var Pn = Ie();
                at(pe(Pn), () => e(le) ? e(z) : e(q), (ut) => {
                  var dt = Xv();
                  Te(S(dt), () => a()(e(le) ? e(z) : e(q))), y(dt), be((Rt) => Pe(dt, "data-a11y-label", Rt), [() => l()("system.original_price")]), p(ut, dt);
                }), p(fn, Pn);
              };
              O(Zn, (fn) => {
                e(ae) && fn(ur);
              }), p(hn, rr);
            };
            O(mn, (hn) => {
              s().showBothPrices && e(ee) ? hn(Qt) : hn(gn, !1);
            }), p($t, qt);
          };
          O(At, ($t) => {
            e(H) && $t(kn);
          }), y(Ct), y(dn), p(nt, Mt);
        }, $$slots: { default: !0 } });
        var ze = G(gt, 2), bt = (nt) => {
          ya(nt, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return f();
          }, get replaceLiquid() {
            return e(fe);
          } });
        };
        O(ze, (nt) => {
          i().highlights && nt(bt);
        });
        var Ye = G(ze, 2), ve = (nt) => {
          ul(nt, { get value() {
            return e(B);
          }, onChange: (yt) => {
            se(B, yt, !0);
          } });
        };
        O(Ye, (nt) => {
          f() && i().quantitySelector && nt(ve);
        });
        var We = G(Ye, 2), Ee = (nt) => {
          var yt = i_();
          let Mt;
          Dt(yt, 23, () => i().bundleProducts, (Et) => Et.id, (Et, Jt, Yt) => {
            var dn = a_(), Kt = pe(dn), ct = (Ze) => {
              {
                let rt = d(() => ye(e(Jt), u(), g())), Ct = d(() => i().layout || "horizontal");
                $d(Ze, { get dealBar() {
                  return i();
                }, get bundleProduct() {
                  return e(Jt);
                }, get product() {
                  return e(rt);
                }, get dealBlock() {
                  return s();
                }, get layout() {
                  return e(Ct);
                }, get dealBarSelected() {
                  return f();
                }, get priceRounding() {
                  return e(W);
                }, get currentVariantId() {
                  return h();
                }, get mainVariantId() {
                  return e(Y);
                }, get sellingPlan() {
                  return x();
                }, get sets() {
                  return e(B);
                }, onChange: (At) => (function(kn, $t) {
                  const { variant: qt, product: mn, quantity: Qt } = $t;
                  e(oe)[kn] = { variant: qt, product: mn, quantity: Qt }, f() && i().bundleProducts.map(({ id: gn }) => gn).every((gn) => e(oe)[gn]) && kn === i().bundleProducts[0].id && L()({ variantId: qt.id });
                })(e(Jt).id, At) });
              }
            }, zt = (Ze) => {
              var rt = Ie(), Ct = pe(rt), At = (kn) => {
                p(kn, n_());
              };
              O(Ct, (kn) => {
                r().preview && kn(At);
              }, !0), p(Ze, rt);
            };
            O(Kt, (Ze) => {
              e(Jt).productGID ? Ze(ct) : Ze(zt, !1);
            });
            var Xt = G(Kt, 2), Ue = (Ze) => {
              var rt = r_(), Ct = G(S(rt), 2);
              Dd(S(Ct)), y(Ct), da(2), y(rt), p(Ze, rt);
            };
            O(Xt, (Ze) => {
              e(Yt) < i().bundleProducts.length - 1 && Ze(Ue);
            }), p(Et, dn);
          }), y(yt), be((Et) => Mt = Lt(yt, 1, "kaching-bundles__bundle-products", null, Mt, Et), [() => ({ "kaching-bundles__bundle-products--vertical": i().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(X) })]), p(nt, yt);
        };
        O(We, (nt) => {
          e(H) && nt(Ee);
        });
        var tt = G(We, 2), Ge = (nt) => {
          {
            let yt = d(() => e(Y) ? [e(Y)] : []);
            Ua(nt, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(yt);
            }, get quantity() {
              return e(B);
            }, get addPersonalisationModal() {
              return s().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return R();
            }, get initialValues() {
              return K();
            } });
          }
        };
        O(tt, (nt) => {
          f() && i().productPersonalisation && (s().blockLayout === "vertical" || s().blockLayout === "plain") && nt(Ge);
        }), y(jt);
        var Ne = G(jt, 2);
        {
          let nt = d(() => i().upsells || []);
          wi(Ne, { get dealBlock() {
            return s();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(nt);
          }, get otherProducts() {
            return g();
          }, get complementaryProducts() {
            return b();
          }, get dealBarSelected() {
            return f();
          }, get dealSellingPlan() {
            return x();
          }, get sets() {
            return e(B);
          }, onChange: (yt) => {
            se(M, yt, !0);
          } });
        }
        var ot = G(Ne, 2);
        Bi(ot, { get selectedDealBarIndex() {
          return _();
        }, get onChange() {
          return D();
        }, get dealBlock() {
          return s();
        }, get dealBar() {
          return i();
        }, get otherProducts() {
          return g();
        }, get selected() {
          return f();
        }, get sellingPlan() {
          return x();
        }, get progressiveGifts() {
          return s().progressiveGifts;
        } });
        var _t = G(ot, 2);
        {
          let nt = d(() => i().freeGifts || []);
          yi(_t, { get dealBlock() {
            return s();
          }, get freeGifts() {
            return e(nt);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return g();
          }, get dealBarSelected() {
            return f();
          }, get sellingPlan() {
            return x();
          }, get sets() {
            return e(B);
          }, onChange: (yt) => {
            se(J, yt, !0);
          } });
        }
        var Bt = G(_t, 2);
        {
          let nt = d(() => i().multipleGiftsSelectors || []);
          Si(Bt, { get dealBlock() {
            return s();
          }, get multipleGiftsSelectors() {
            return e(nt);
          }, get sellingPlan() {
            return x();
          }, get otherProducts() {
            return g();
          }, onChange: (yt) => {
            se(U, yt, !0);
          } });
        }
        p(et, wt);
      }, $$slots: { default: !0 } });
      var St = G(qe, 2), it = (et) => {
        Pi(et, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(fe);
        } });
      };
      O(St, (et) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && et(it);
      }), y(Me), be((et) => {
        var lt;
        Ce = Lt(Me, 1, "kaching-bundles__bar", null, Ce, et), Pe(Me, "data-deal-bar-id", i().id), Tt(Me, e(Ae)), Pe(Se, "name", `kaching-bundles-deal-${(lt = v()) != null ? lt : ""}`), La(Se, i().id), Pe(Se, "id", e(j)), Yi(Se, f()), Se.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": f(), "kaching-bundles__bar--disabled": !e(V) && r().preview })]), p(_e, Me);
    };
    O(ie, (_e) => {
      (e(V) || r().preview) && _e(we);
    }), p(n, Ve);
    var He = Xe(Oe);
    return c(), He;
  }
  On(["change"]), Qe(Ad, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var o_ = $('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), c_ = $('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), u_ = $('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), d_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), g_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), h_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), p_ = $("<div><!> <!></div>"), b_ = $('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!></div></div> <!></div>');
  function Vd(n, t) {
    var r;
    Ke(t, !0);
    const a = () => $e(f, "$config", c), l = () => $e(_, "$formatPrice", c), o = () => $e(v, "$translate", c), [c, s] = vt(), i = m(t, "product", 7), u = m(t, "dealBlock", 7), g = m(t, "dealBar", 7), b = m(t, "modal", 7), h = m(t, "onChoose", 7), v = It(), _ = cn(), f = _n();
    let x = De(st(((r = i().variants.find((W) => W.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const D = d(() => i().variants.find((W) => W.id === e(x)) || i().variants[0]), w = d(() => u().priceRounding ? { perItem: !1, precision: u().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), I = d(() => g().discountType === "percentage" ? ra({ discountType: g().discountType, discountValue: g().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(D), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(w) }) : e(D).price), L = d(() => u().useProductCompareAtPrice && e(D).compareAtPrice ? Math.max(e(D).price, e(D).compareAtPrice) : e(D).price), Q = d(() => i().url ? `${i().url}?variant=${e(x)}` : void 0), R = d(() => un({ priceFormatter: l(), product: i(), totalFullPrice: e(L), totalDiscountedPrice: e(I), quantity: 1, unitQuantity: null })), K = d(() => e(R)(o()(b().subtitle || ""))), C = d(() => b().buttonText);
    function ne(W) {
      se(x, W, !0);
    }
    var A = { get product() {
      return i();
    }, set product(W) {
      i(W), k();
    }, get dealBlock() {
      return u();
    }, set dealBlock(W) {
      u(W), k();
    }, get dealBar() {
      return g();
    }, set dealBar(W) {
      g(W), k();
    }, get modal() {
      return b();
    }, set modal(W) {
      b(W), k();
    }, get onChoose() {
      return h();
    }, set onChoose(W) {
      h(W), k();
    } }, E = b_(), oe = S(E), J = S(oe), U = (W) => {
      Xn(W, { get url() {
        return e(Q);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (te, de) => {
        var F = o_();
        Pe(F, "width", 100), Pe(F, "height", 100), be(() => Pe(F, "src", i().image)), p(te, F);
      }, $$slots: { default: !0 } });
    };
    O(J, (W) => {
      i().image && W(U);
    });
    var M = G(J, 2), B = S(M);
    Xn(B, { get url() {
      return e(Q);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (W, te) => {
      var de = c_(), F = S(de, !0);
      y(de), be(() => ft(F, i().title)), p(W, de);
    }, $$slots: { default: !0 } });
    var j = G(B, 2), N = (W) => {
      var te = u_();
      Te(S(te), () => e(K)), y(te), p(W, te);
    };
    O(j, (W) => {
      e(K) && W(N);
    });
    var H = G(j, 2), X = (W) => {
      var te = h_(), de = S(te);
      at(de, () => e(I), (z) => {
        var ae = d_();
        Te(S(ae), () => l()(e(I))), y(ae), p(z, ae);
      });
      var F = G(de, 2), P = (z) => {
        var ae = Ie();
        at(pe(ae), () => e(L), (T) => {
          var ee = g_();
          Te(S(ee), () => l()(e(L))), y(ee), p(T, ee);
        }), p(z, ae);
      };
      O(F, (z) => {
        e(L) && e(L) > e(I) && z(P);
      }), y(te), p(W, te);
    };
    O(H, (W) => {
      g().discountType !== "specific" && W(X);
    });
    var V = G(H, 2), Z = (W) => {
      var te = p_(), de = S(te);
      na(de, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), Un(G(de, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(x);
      }, onChange: ne }), y(te), p(W, te);
    };
    O(V, (W) => {
      i().variants.length > 1 && W(Z);
    }), y(M), y(oe), Zt(G(oe, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      h()({ product: i(), variant: e(D) });
    }, children: (W, te) => {
      da();
      var de = Wn();
      be((F) => ft(de, F), [() => o()(e(C))]), p(W, de);
    }, $$slots: { default: !0 } }), y(E), p(n, E);
    var q = Xe(A);
    return s(), q;
  }
  Qe(Vd, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const f_ = { red: 0, green: 0, blue: 0, alpha: 0.5 }, v_ = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var __ = $('<img alt="Close"/>'), k_ = $('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), m_ = $('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function Po(n, t) {
    Ke(t, !0);
    const r = () => $e(g, "$translate", a), [a, l] = vt(), o = m(t, "dealBlock", 7), c = m(t, "dealBar", 7), s = m(t, "products", 23, () => []), i = m(t, "onChoose", 7), u = m(t, "onClose", 7), g = It(), b = d(() => {
      var A;
      return (A = o().mixAndMatchChooseProductModal) != null ? A : v_;
    }), h = d(() => ((A) => bn({ "kaching-mix-and-match-choose-product-button-size": A.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": A.textSize + "px", "kaching-mix-and-match-choose-product-price-color": je(A.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": je(A.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": je(A.textColor), "kaching-mix-and-match-choose-product-button-color": je(A.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": je(A.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": A.productPhotoSize + "px" }))(e(b)));
    var v = { get dealBlock() {
      return o();
    }, set dealBlock(A) {
      o(A), k();
    }, get dealBar() {
      return c();
    }, set dealBar(A) {
      c(A), k();
    }, get products() {
      return s();
    }, set products(A = []) {
      s(A), k();
    }, get onChoose() {
      return i();
    }, set onChoose(A) {
      i(A), k();
    }, get onClose() {
      return u();
    }, set onClose(A) {
      u(A), k();
    } }, _ = m_(), f = S(_), x = S(f), D = S(x), w = (A) => {
      var E = Wn();
      be((oe) => ft(E, oe), [() => r()(e(b).heading)]), p(A, E);
    };
    O(D, (A) => {
      e(b).heading && A(w);
    }), y(x);
    var I = G(x, 2), L = (A) => {
      Zt(A, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return u();
      }, children: (E, oe) => {
        var J = __();
        be(() => Pe(J, "src", uo)), p(E, J);
      }, $$slots: { default: !0 } });
    };
    O(I, (A) => {
      u() && A(L);
    }), y(f);
    var Q = G(f, 2), R = S(Q), K = (A) => {
      var E = k_(), oe = S(E, !0);
      y(E), be((J) => ft(oe, J), [() => r()("system.no_products_available")]), p(A, E);
    }, C = (A) => {
      var E = Ie();
      Dt(pe(E), 17, s, (oe) => oe.id, (oe, J) => {
        Vd(oe, { get dealBlock() {
          return o();
        }, get dealBar() {
          return c();
        }, get modal() {
          return e(b);
        }, get product() {
          return e(J);
        }, get onChoose() {
          return i();
        } });
      }), p(A, E);
    };
    O(R, (A) => {
      s().length === 0 ? A(K) : A(C, !1);
    }), y(Q), y(_), be(() => Tt(_, e(h))), p(n, _);
    var ne = Xe(v);
    return l(), ne;
  }
  function x_(n, t) {
    n.target === n.currentTarget && t()();
  }
  Qe(Po, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var y_ = $('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function Td(n, t) {
    Ke(t, !0);
    const r = m(t, "dealBlock", 7), a = m(t, "dealBar", 7), l = m(t, "products", 23, () => []), o = m(t, "isOpen", 7), c = m(t, "onChoose", 7), s = m(t, "onClose", 7);
    var i = { get dealBlock() {
      return r();
    }, set dealBlock(h) {
      r(h), k();
    }, get dealBar() {
      return a();
    }, set dealBar(h) {
      a(h), k();
    }, get products() {
      return l();
    }, set products(h = []) {
      l(h), k();
    }, get isOpen() {
      return o();
    }, set isOpen(h) {
      o(h), k();
    }, get onChoose() {
      return c();
    }, set onChoose(h) {
      c(h), k();
    }, get onClose() {
      return s();
    }, set onClose(h) {
      s(h), k();
    } }, u = Ie(), g = pe(u), b = (h) => {
      ol(h, { target: "body", children: (v, _) => {
        var f = y_(), x = S(f);
        x.__click = [x_, s];
        var D = S(x);
        Po(S(D), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return l();
        }, get onChoose() {
          return c();
        }, get onClose() {
          return s();
        } }), y(D), y(x), y(f), be((w) => Tt(x, w), [() => (function(w) {
          var I;
          return bn({ "kaching-mix-and-match-choose-product-overlay-color": je(((I = w.mixAndMatchChooseProductModal) == null ? void 0 : I.overlayColor) || f_) });
        })(r())]), p(v, f);
      }, $$slots: { default: !0 } });
    };
    return O(g, (h) => {
      o() && h(b);
    }), p(n, u), Xe(i);
  }
  On(["click"]), Qe(Td, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var w_ = $('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), P_ = $('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), S_ = $('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), B_ = $('<div class="kaching-bundles__mix-and-match-product__pricing"><!></div>'), C_ = $('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!></div> <!> <!></div> <!>', 1);
  function qd(n, t) {
    Ke(t, !0);
    const [r, a] = vt();
    let l = m(t, "dealBlock", 7), o = m(t, "dealBar", 7), c = m(t, "bundleProduct", 7), s = m(t, "product", 7), i = m(t, "swapProducts", 7), u = m(t, "dealBarSelected", 7), g = m(t, "currentVariantId", 7), b = m(t, "mainVariantId", 7), h = m(t, "pricing", 7), v = m(t, "onSwap", 7), _ = m(t, "onChange", 7);
    const f = cn(), x = It();
    let D = De(void 0), w = De(!1);
    const I = d(() => u() && i().length > 1), L = d(() => $e(x, "$translate", r)(o().buttonText || "Change"));
    function Q() {
      se(w, !0);
    }
    function R(q) {
      se(w, !1), se(D, q.variant.id, !0), v()(q.product);
    }
    function K() {
      se(w, !1);
    }
    const C = d(() => {
      var q, W;
      return (W = (q = s()) == null ? void 0 : q.variants) != null ? W : [];
    }), ne = d(() => {
      var q, W;
      return e(D) !== void 0 && e(C).some(({ id: te }) => te === e(D)) ? e(D) : c().productGID === "default" && g() && e(C).some(({ id: te }) => te === g()) ? g() : e(C).length > 0 ? (W = (q = e(C).find((te) => te.availableForSale)) == null ? void 0 : q.id) != null ? W : e(C)[0].id : void 0;
    }), A = d(() => {
      var q;
      return e(ne) ? (q = s()) == null ? void 0 : q.variants.find((W) => W.id === e(ne)) : void 0;
    }), E = d(() => {
      var q;
      return (q = s()) != null && q.url && e(A) ? `${s().url}?variant=${e(A).id}` : void 0;
    }), oe = d(() => {
      var q, W;
      return ((q = e(A)) == null ? void 0 : q.image) || ((W = s()) == null ? void 0 : W.image);
    }), J = d(() => u() && s() && e(C).length > 1 && e(ne)), U = d(() => u() && c().productGID !== "default" ? e(E) : void 0), M = d(() => s() ? c().title ? un({ priceFormatter: $e(f, "$formatPrice", r), product: s(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(c().title) : s().title : "");
    function B(q) {
      se(D, q, !0);
    }
    let j;
    Je(() => {
      e(A) && nn(() => {
        _()({ variant: e(A), product: s() });
      });
    }), pr(() => {
      c().productGID, se(D, void 0), j = void 0;
    }), pr(() => {
      const q = c().productGID === "default";
      if (!(q || !l().disableVariantOptionSync)) return;
      const W = q ? g() : b();
      if (!W || !s() || W === j) return;
      const te = j;
      if (j = W, !e(C).some((P) => P.id === W)) return;
      const de = e(D) === void 0, F = e(D) === te && te !== void 0;
      (de || F) && se(D, W, !0);
    });
    var N = { get dealBlock() {
      return l();
    }, set dealBlock(q) {
      l(q), k();
    }, get dealBar() {
      return o();
    }, set dealBar(q) {
      o(q), k();
    }, get bundleProduct() {
      return c();
    }, set bundleProduct(q) {
      c(q), k();
    }, get product() {
      return s();
    }, set product(q) {
      s(q), k();
    }, get swapProducts() {
      return i();
    }, set swapProducts(q) {
      i(q), k();
    }, get dealBarSelected() {
      return u();
    }, set dealBarSelected(q) {
      u(q), k();
    }, get currentVariantId() {
      return g();
    }, set currentVariantId(q) {
      g(q), k();
    }, get mainVariantId() {
      return b();
    }, set mainVariantId(q) {
      b(q), k();
    }, get pricing() {
      return h();
    }, set pricing(q) {
      h(q), k();
    }, get onSwap() {
      return v();
    }, set onSwap(q) {
      v(q), k();
    }, get onChange() {
      return _();
    }, set onChange(q) {
      _(q), k();
    } }, H = Ie(), X = pe(H), V = (q) => {
      var W = C_(), te = pe(W), de = S(te), F = (xe) => {
        Xn(xe, { get url() {
          return e(U);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: (ge, ce) => {
          var re = w_();
          Pe(re, "height", 50), Pe(re, "width", 50), be(() => Pe(re, "src", e(oe))), p(ge, re);
        }, $$slots: { default: !0 } });
      }, P = (xe) => {
        p(xe, P_());
      };
      O(de, (xe) => {
        e(oe) ? xe(F) : xe(P, !1);
      });
      var z = G(de, 2), ae = S(z);
      Xn(ae, { get url() {
        return e(U);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (xe, ge) => {
        var ce = S_(), re = S(ce, !0);
        y(ce), be(() => ft(re, e(M))), p(xe, ce);
      }, $$slots: { default: !0 } });
      var T = G(ae, 2);
      ia(T, { get dealBlock() {
        return l();
      }, get variant() {
        return e(A);
      } });
      var ee = G(T, 2), Y = (xe) => {
        {
          let ge = d(() => e(ne) || 0);
          Un(xe, { get product() {
            return s();
          }, get selectedVariantId() {
            return e(ge);
          }, onChange: B });
        }
      };
      O(ee, (xe) => {
        e(J) && xe(Y);
      }), y(z);
      var le = G(z, 2), fe = (xe) => {
        var ge = B_();
        os(S(ge), { get discountedPrice() {
          return h().discountedPrice;
        }, get fullPrice() {
          return h().fullPrice;
        }, unitPrice: null, unitPriceReference: null, ignoreUnitPrice: !0 }), y(ge), p(xe, ge);
      };
      O(le, (xe) => {
        h() && xe(fe);
      });
      var Be = G(le, 2), ke = (xe) => {
        Zt(xe, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: Q, children: (ge, ce) => {
          da();
          var re = Wn();
          be(() => ft(re, e(L))), p(ge, re);
        }, $$slots: { default: !0 } });
      };
      O(Be, (xe) => {
        e(I) && xe(ke);
      }), y(te), Td(G(te, 2), { get dealBlock() {
        return l();
      }, get dealBar() {
        return o();
      }, get products() {
        return i();
      }, get isOpen() {
        return e(w);
      }, onChoose: R, onClose: K }), p(q, W);
    };
    O(X, (q) => {
      s() && q(V);
    }), p(n, H);
    var Z = Xe(N);
    return a(), Z;
  }
  Qe(qd, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, pricing: {}, onSwap: {}, onChange: {} }, [], [], !0);
  const Gd = (n, t) => {
    if (!t || t.length === 0) return n;
    const r = t.map(Ut);
    return { ...n, variants: n.variants.filter((a) => r.includes(a.id)) };
  };
  var I_ = Tn('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Od(n) {
    p(n, I_());
  }
  function M_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Qe(Od, {}, [], [], !0);
  var z_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), $_ = $('<div class="kaching-bundles__bar-radio"></div>'), D_ = $('<span class="kaching-bundles__bar-title"><!></span>'), A_ = $('<span class="kaching-bundles__bar-label"><!></span>'), V_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), T_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), q_ = $("<!> <!>", 1), G_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), O_ = $('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), F_ = $('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), L_ = $("<!> <!>", 1), j_ = $("<div></div>"), E_ = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!>', 1), R_ = $('<div><input type="radio"/> <!> <!></div>');
  function Fd(n, t) {
    Ke(t, !0);
    const r = () => $e(E, "$config", o), a = () => $e(ne, "$formatPrice", o), l = () => $e(C, "$translate", o), [o, c] = vt(), s = m(t, "dealBlock", 7), i = m(t, "dealBar", 7), u = m(t, "product", 7), g = m(t, "otherProducts", 23, () => []), b = m(t, "complementaryProducts", 23, () => []), h = m(t, "currentVariantId", 7), v = m(t, "componentId", 7), _ = m(t, "selectedDealBarIndex", 7), f = m(t, "selected", 7, !1), x = m(t, "sellingPlan", 7), D = m(t, "onProgressiveGiftsChange", 7), w = m(t, "onDealBarSelect", 7), I = m(t, "onDealBarDeselect", 7), L = m(t, "onVariantSelect", 7), Q = m(t, "onVariantsChange", 7), R = m(t, "onPersonalisationsChange", 7), K = m(t, "personalisationInitialValues", 23, () => []), C = It(), ne = cn(), A = Fn(), E = _n();
    let oe = De(st({})), J = De(st({}));
    const U = d(() => Object.fromEntries(i().bundleProducts.map((ie) => [ie.id, M(ie).filter(B)])));
    function M(ie) {
      var we;
      const He = new Map(((we = ie.selectedProducts) != null ? we : []).map((Ce) => [Ut(Ce.id), Ce.variantGIDs])), _e = g().filter((Ce) => He.has(Ce.id)).map((Ce) => Gd(Ce, He.get(Ce.id))), Me = (function(Ce) {
        if (!Ce) return;
        if (Ce === "default") return u();
        const Se = Ut(Ce);
        return g().find((qe) => qe.id === Se);
      })(ie.productGID);
      return Me ? [Gd(Me, ie.variantGIDs), ..._e.filter((Ce) => Ce.id !== Me.id)] : _e;
    }
    function B(ie) {
      return ie.availableForSale && ie.variants.some((we) => we.availableForSale);
    }
    let j = De(st([])), N = De(st([])), H = De(st([]));
    const X = d(() => `${i().id}_${v()}`), V = d(() => i().bundleProducts.filter(({ productGID: ie }) => ie)), Z = d(() => e(V).every((ie) => ce(ie))), q = d(() => i().showProductsOnlyWhenSelected && !f()), W = d(() => e(V).every((ie) => {
      var we, He;
      return ((He = (we = e(U)[ie.id]) == null ? void 0 : we.length) != null ? He : 0) > 0;
    })), te = d(() => {
      return s() ? (ie = s(), we = e(oe), i().bundleProducts.map((He) => {
        const _e = we[He.id];
        if (!_e) return 0;
        const { variant: Me } = _e;
        let Ce = Me.price;
        return Me.compareAtPrice && ie.useProductCompareAtPrice && (Ce = Math.max(Ce, Me.compareAtPrice)), Ce;
      }).reduce((He, _e) => He + _e, 0)) : 0;
      var ie, we;
    }), de = d(() => ll(e(te), e(j), e(N))), F = d(() => s().priceRounding ? { perItem: !1, precision: s().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), P = d(() => s() ? is(i(), e(oe), r().currencyRate, e(F), x()) : 0), z = d(() => e(de) > e(P)), ae = d(() => i().showProductPrices ? (function(ie, we, He, _e, Me, Ce) {
      const Se = ie.bundleProducts.filter(({ productGID: lt }) => lt).flatMap((lt) => {
        const wt = we[lt.id];
        if (!wt) return [];
        const rn = er(wt.product, wt.variant, Me), jt = rn ? lo(wt.variant.price, rn) : wt.variant.price, { price: gt, compareAtPrice: ze } = wt.variant, bt = Ce && ze ? Math.max(gt, ze) : gt;
        return [{ id: lt.id, basisPrice: jt, fullPrice: bt }];
      }), qe = Se.reduce((lt, wt) => lt + wt.basisPrice, 0);
      if (qe === 0) return Object.fromEntries(Se.map((lt) => [lt.id, { discountedPrice: 0, fullPrice: lt.fullPrice }]));
      const St = is(ie, we, He, _e, Me), it = Se.map((lt) => {
        const wt = St * lt.basisPrice / qe;
        return { ...lt, share: Math.floor(wt), remainder: wt % 1 };
      });
      let et = St - it.reduce((lt, { share: wt }) => lt + wt, 0);
      for (const lt of [...it].sort((wt, rn) => rn.remainder - wt.remainder)) {
        if (et <= 0) break;
        lt.share += 1, et -= 1;
      }
      return Object.fromEntries(it.map((lt) => [lt.id, { discountedPrice: lt.share, fullPrice: lt.fullPrice }]));
    })(i(), e(oe), r().currencyRate, e(F), x(), s().useProductCompareAtPrice) : void 0), T = d(() => {
      var ie;
      const we = e(V)[0];
      if (we) return (ie = e(oe)[we.id]) == null ? void 0 : ie.variant.id;
    }), ee = d(() => un({ priceFormatter: a(), product: u(), dealBar: i(), totalFullPrice: e(te), totalCompareAtPrice: e(de), totalDiscountedPrice: e(P), quantity: 1, unitQuantity: null, sellingPlan: x() })), Y = d(() => e(ee)(l()(i().title))), le = d(() => e(ee)(l()(i().subtitle))), fe = d(() => e(ee)(l()(i().label))), Be = d(() => al(s(), i()).map((ie) => ka(ie, l(), e(ee)))), ke = d(() => ma(e(Be))), xe = d(() => $e(A, "$getMediaImageUrl", o)(i().mediaImageGID) || sl);
    function ge(ie) {
      f() && (ie.preventDefault(), ie.stopPropagation(), I()());
    }
    function ce(ie) {
      var we, He;
      return (He = e(J)[ie.id]) != null ? He : (we = e(U)[ie.id]) == null ? void 0 : we[0];
    }
    Fa(() => {
      f() && w()({ dealBarId: i().id, preselected: !0 });
    }), Je(() => {
      f() && (ga(e(oe)), ga(e(H)), ga(e(j)), ga(e(N)), x(), nn(() => {
        (function() {
          if (!i().bundleProducts.map(({ id: Se }) => Se).every((Se) => e(oe)[Se])) return;
          const ie = [];
          for (const Se of i().bundleProducts) {
            const qe = e(oe)[Se.id];
            qe && ie.push({ id: Se.id, variant: qe.variant, product: qe.product, quantity: 1 });
          }
          if (ie.length === 0) return;
          const we = e(P) + e(H).reduce((Se, qe) => Se + qe.discountedPrice, 0), He = e(j).reduce((Se, qe) => qe.showPrice ? Se + qe.fullPrice : Se, 0) + e(N).reduce((Se, qe) => Se + qe.fullPrice * qe.quantity, 0), _e = e(te) + e(H).reduce((Se, qe) => Se + qe.fullPrice, 0) + He, Me = is(i(), e(oe), r().currencyRate, e(F), void 0), Ce = u().sellingPlans.map((Se) => ({ sellingPlanId: Se.id, discountedPrice: is(i(), e(oe), r().currencyRate, e(F), Se) }));
          Q()({ bundleProducts: ie, freeGifts: [...e(j), ...e(N)], upsells: e(H), pricing: { discountedPrice: we, fullPrice: _e, giftValue: He, discountedPricePerItem: e(P), fullPricePerItem: e(te), discountedPriceWithoutSellingPlan: Me, discountedPricesForSellingPlans: Ce } });
        })();
      }));
    });
    const re = d(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? cl(i().showAsSoldOut) : "");
    var he = { get dealBlock() {
      return s();
    }, set dealBlock(ie) {
      s(ie), k();
    }, get dealBar() {
      return i();
    }, set dealBar(ie) {
      i(ie), k();
    }, get product() {
      return u();
    }, set product(ie) {
      u(ie), k();
    }, get otherProducts() {
      return g();
    }, set otherProducts(ie = []) {
      g(ie), k();
    }, get complementaryProducts() {
      return b();
    }, set complementaryProducts(ie = []) {
      b(ie), k();
    }, get currentVariantId() {
      return h();
    }, set currentVariantId(ie) {
      h(ie), k();
    }, get componentId() {
      return v();
    }, set componentId(ie) {
      v(ie), k();
    }, get selectedDealBarIndex() {
      return _();
    }, set selectedDealBarIndex(ie) {
      _(ie), k();
    }, get selected() {
      return f();
    }, set selected(ie = !1) {
      f(ie), k();
    }, get sellingPlan() {
      return x();
    }, set sellingPlan(ie) {
      x(ie), k();
    }, get onProgressiveGiftsChange() {
      return D();
    }, set onProgressiveGiftsChange(ie) {
      D(ie), k();
    }, get onDealBarSelect() {
      return w();
    }, set onDealBarSelect(ie) {
      w(ie), k();
    }, get onDealBarDeselect() {
      return I();
    }, set onDealBarDeselect(ie) {
      I(ie), k();
    }, get onVariantSelect() {
      return L();
    }, set onVariantSelect(ie) {
      L(ie), k();
    }, get onVariantsChange() {
      return Q();
    }, set onVariantsChange(ie) {
      Q(ie), k();
    }, get onPersonalisationsChange() {
      return R();
    }, set onPersonalisationsChange(ie) {
      R(ie), k();
    }, get personalisationInitialValues() {
      return K();
    }, set personalisationInitialValues(ie = []) {
      K(ie), k();
    } }, ye = Ie(), Ae = pe(ye), Oe = (ie) => {
      var we = R_();
      let He;
      var _e = S(we);
      ea(_e), _e.__change = [M_, w, i];
      var Me = G(_e, 2);
      Wa(Me, { get for() {
        return e(X);
      }, get soldOut() {
        return i().showAsSoldOutEnabled;
      }, get borderHost() {
        return e(ke);
      }, children: (qe, St) => {
        var it = E_(), et = pe(it);
        Dt(et, 17, () => e(Be), (Ge) => Ge.id, (Ge, Ne) => {
          aa(Ge, { get badge() {
            return e(Ne);
          }, get blockLayout() {
            return s().blockLayout;
          } });
        });
        var lt = G(et, 2), wt = S(lt);
        Zt(wt, { element: "div", class: "kaching-bundles__bar-main", onclick: ge, children: (Ge, Ne) => {
          var ot = G_(), _t = pe(ot), Bt = (Ze) => {
            var rt = z_();
            be(() => Pe(rt, "src", e(xe))), p(Ze, rt);
          }, nt = (Ze) => {
            p(Ze, $_());
          };
          O(_t, (Ze) => {
            i().mediaImageGID ? Ze(Bt) : Ze(nt, !1);
          });
          var yt = G(_t, 2), Mt = S(yt), Et = S(Mt), Jt = S(Et);
          at(Jt, () => e(Y), (Ze) => {
            var rt = D_();
            Te(S(rt), () => e(Y)), y(rt), p(Ze, rt);
          });
          var Yt = G(Jt, 2), dn = (Ze) => {
            var rt = Ie();
            at(pe(rt), () => e(fe), (Ct) => {
              var At = A_();
              Te(S(At), () => e(fe)), y(At), p(Ct, At);
            }), p(Ze, rt);
          };
          O(Yt, (Ze) => {
            e(fe) && Ze(dn);
          }), y(Et);
          var Kt = G(Et, 2), ct = (Ze) => {
            var rt = Ie();
            at(pe(rt), () => e(le), (Ct) => {
              var At = V_();
              Te(S(At), () => e(le)), y(At), p(Ct, At);
            }), p(Ze, rt);
          };
          O(Kt, (Ze) => {
            e(le) && Ze(ct);
          }), y(Mt);
          var zt = G(Mt, 2), Xt = S(zt), Ue = (Ze) => {
            var rt = q_(), Ct = pe(rt);
            at(Ct, () => e(P), ($t) => {
              Lr($t, { get amount() {
                return e(P);
              }, showPricesPerItem: !1, get unitLabel() {
                return s().unitLabel;
              } });
            });
            var At = G(Ct, 2), kn = ($t) => {
              var qt = Ie();
              at(pe(qt), () => e(de), (mn) => {
                var Qt = T_();
                Te(S(Qt), () => a()(e(de))), y(Qt), be((gn) => Pe(Qt, "data-a11y-label", gn), [() => l()("system.original_price")]), p(mn, Qt);
              }), p($t, qt);
            };
            O(At, ($t) => {
              e(z) && $t(kn);
            }), p(Ze, rt);
          };
          O(Xt, (Ze) => {
            e(Z) && Ze(Ue);
          }), y(zt), y(yt), p(Ge, ot);
        }, $$slots: { default: !0 } });
        var rn = G(wt, 2), jt = (Ge) => {
          ya(Ge, { get highlights() {
            return i().highlights;
          }, get isSelected() {
            return f();
          }, get replaceLiquid() {
            return e(ee);
          } });
        };
        O(rn, (Ge) => {
          i().highlights && Ge(jt);
        });
        var gt = G(rn, 2), ze = (Ge) => {
          var Ne = j_();
          let ot;
          Dt(Ne, 23, () => i().bundleProducts, (_t) => _t.id, (_t, Bt, nt) => {
            var yt = L_(), Mt = pe(yt), Et = (Kt) => {
              {
                let ct = d(() => ce(e(Bt))), zt = d(() => {
                  var Xt;
                  return (Xt = e(ae)) == null ? void 0 : Xt[e(Bt).id];
                });
                qd(Kt, { get bundleProduct() {
                  return e(Bt);
                }, get product() {
                  return e(ct);
                }, get swapProducts() {
                  return e(U)[e(Bt).id];
                }, get dealBlock() {
                  return s();
                }, get dealBar() {
                  return i();
                }, get dealBarSelected() {
                  return f();
                }, get currentVariantId() {
                  return h();
                }, get mainVariantId() {
                  return e(T);
                }, get pricing() {
                  return e(zt);
                }, onSwap: (Xt) => (function(Ue, Ze) {
                  e(J)[Ue] = Ze;
                })(e(Bt).id, Xt), onChange: (Xt) => (function(Ue, Ze) {
                  const { variant: rt, product: Ct } = Ze;
                  e(oe)[Ue] = { variant: rt, product: Ct }, f() && i().bundleProducts.map(({ id: At }) => At).every((At) => e(oe)[At]) && Ue === i().bundleProducts[0].id && L()({ variantId: rt.id });
                })(e(Bt).id, Xt) });
              }
            }, Jt = (Kt) => {
              var ct = Ie(), zt = pe(ct), Xt = (Ue) => {
                p(Ue, O_());
              };
              O(zt, (Ue) => {
                r().preview && Ue(Xt);
              }, !0), p(Kt, ct);
            };
            O(Mt, (Kt) => {
              e(Bt).productGID ? Kt(Et) : Kt(Jt, !1);
            });
            var Yt = G(Mt, 2), dn = (Kt) => {
              var ct = F_(), zt = G(S(ct), 2);
              Od(S(zt)), y(zt), da(2), y(ct), p(Kt, ct);
            };
            O(Yt, (Kt) => {
              e(nt) < i().bundleProducts.length - 1 && Kt(dn);
            }), p(_t, yt);
          }), y(Ne), be((_t) => ot = Lt(Ne, 1, "kaching-bundles__mix-and-match-products", null, ot, _t), [() => ({ "kaching-bundles__mix-and-match-products--hidden": e(q) })]), p(Ge, Ne);
        };
        O(gt, (Ge) => {
          e(Z) && Ge(ze);
        });
        var bt = G(gt, 2), Ye = (Ge) => {
          {
            let Ne = d(() => e(T) ? [e(T)] : []);
            Ua(Ge, { get product() {
              return u();
            }, get productPersonalisation() {
              return i().productPersonalisation;
            }, get selectedVariantIds() {
              return e(Ne);
            }, quantity: 1, get addPersonalisationModal() {
              return s().addPersonalisationModal;
            }, get onPersonalisationsChange() {
              return R();
            }, get initialValues() {
              return K();
            } });
          }
        };
        O(bt, (Ge) => {
          f() && i().productPersonalisation && (s().blockLayout === "vertical" || s().blockLayout === "plain") && Ge(Ye);
        }), y(lt);
        var ve = G(lt, 2);
        {
          let Ge = d(() => i().upsells || []);
          wi(ve, { get dealBlock() {
            return s();
          }, get dealBarId() {
            return i().id;
          }, get upsells() {
            return e(Ge);
          }, get otherProducts() {
            return g();
          }, get complementaryProducts() {
            return b();
          }, get dealBarSelected() {
            return f();
          }, get dealSellingPlan() {
            return x();
          }, sets: 1, onChange: (Ne) => {
            se(H, Ne, !0);
          } });
        }
        var We = G(ve, 2);
        {
          let Ge = d(() => ({ ...i(), dealBarType: pt.Bundle, quantitySelector: !1, bundleProducts: i().bundleProducts.map((Ne) => ({ ...Ne, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
          Bi(We, { get selectedDealBarIndex() {
            return _();
          }, get onChange() {
            return D();
          }, get dealBlock() {
            return s();
          }, get sellingPlan() {
            return x();
          }, get dealBar() {
            return e(Ge);
          }, get otherProducts() {
            return g();
          }, get selected() {
            return f();
          }, get progressiveGifts() {
            return s().progressiveGifts;
          } });
        }
        var Ee = G(We, 2);
        {
          let Ge = d(() => i().freeGifts || []);
          yi(Ee, { get dealBlock() {
            return s();
          }, get freeGifts() {
            return e(Ge);
          }, get freeGiftsSummary() {
            return i().freeGiftsSummary;
          }, get otherProducts() {
            return g();
          }, get dealBarSelected() {
            return f();
          }, get sellingPlan() {
            return x();
          }, sets: 1, onChange: (Ne) => {
            se(j, Ne, !0);
          } });
        }
        var tt = G(Ee, 2);
        {
          let Ge = d(() => i().multipleGiftsSelectors || []);
          Si(tt, { get dealBlock() {
            return s();
          }, get multipleGiftsSelectors() {
            return e(Ge);
          }, get sellingPlan() {
            return x();
          }, get otherProducts() {
            return g();
          }, onChange: (Ne) => {
            se(N, Ne, !0);
          } });
        }
        p(qe, it);
      }, $$slots: { default: !0 } });
      var Ce = G(Me, 2), Se = (qe) => {
        Pi(qe, { get showAsSoldOut() {
          return i().showAsSoldOut;
        }, get replaceLiquid() {
          return e(ee);
        } });
      };
      O(Ce, (qe) => {
        i().showAsSoldOutEnabled && i().showAsSoldOut && qe(Se);
      }), y(we), be((qe) => {
        var St;
        He = Lt(we, 1, "kaching-bundles__bar", null, He, qe), Pe(we, "data-deal-bar-id", i().id), Tt(we, e(re)), Pe(_e, "name", `kaching-bundles-deal-${(St = v()) != null ? St : ""}`), La(_e, i().id), Pe(_e, "id", e(X)), Yi(_e, f()), _e.disabled = i().showAsSoldOutEnabled;
      }, [() => ({ "kaching-bundles__bar--selected": f(), "kaching-bundles__bar--disabled": !e(W) && r().preview })]), p(ie, we);
    };
    O(Ae, (ie) => {
      (e(W) || r().preview) && ie(Oe);
    }), p(n, ye);
    var Ve = Xe(he);
    return c(), Ve;
  }
  On(["change"]), Qe(Fd, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var N_ = Tn('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function Ld(n, t) {
    Ke(t, !0);
    let r = m(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), k();
    } }, l = N_();
    return be(() => Lt(l, 0, Zi(r()))), p(n, l), Xe(a);
  }
  Qe(Ld, { class: {} }, [], [], !0);
  const So = ta({}), Bo = ta(!1);
  function dl(n) {
    Bo.set(n);
  }
  function cs(n, t) {
    So.update((r) => ({ ...r, [n]: t }));
  }
  const Q_ = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? bn({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && je(t.buttonColor), "kaching-collection-breaks-product-title-color": je(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function W_(n, t) {
    n.target === n.currentTarget && se(t, !1);
  }
  var U_ = $('<img class="kaching-bundles__collection-product__image" alt=""/>'), H_ = $('<span class="kaching-bundles__collection-product__title"> </span>'), Z_ = $("<!> <!>", 1), J_ = $('<img alt=""/>'), Y_ = $('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), K_ = $('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), X_ = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), e0 = $('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function Co(n, t) {
    Ke(t, !0);
    const r = () => $e(_, "$config", a), [a, l] = vt(), o = m(t, "dealBlock", 7), c = m(t, "dealBar", 7), s = m(t, "mainProduct", 7, null), i = m(t, "products", 7), u = m(t, "selectedProductVariant", 7, null), g = m(t, "onChange", 7), b = m(t, "onRemove", 7), h = It(), v = Fn(), _ = _n();
    let f = De(!1);
    const x = d(() => o().collectionBreaks), D = d(() => {
      var N;
      return ((N = u()) == null ? void 0 : N.product) || s();
    }), w = d(() => {
      var N, H;
      return ((N = u()) == null ? void 0 : N.variant) || ((H = e(D)) == null ? void 0 : H.variants[0]) || null;
    }), I = d(() => $e(v, "$getMediaImageUrl", a)(e(x).mediaImageGID)), L = d(() => $e(h, "$translate", a)(e(x).buttonText)), Q = d(() => e(x).requireItemSelectionAlert), R = d(() => e(x).requireItemSelectionEnabled), K = d(() => r().preview && r().previewAlerts || $e(Bo, "$requireSelectionError", a)), C = d(() => {
      var N, H;
      return (N = e(D)) != null && N.url ? `${e(D).url}?variant=${(H = e(w)) == null ? void 0 : H.id}` : void 0;
    });
    function ne(N) {
      se(f, !1), g()(N);
    }
    function A() {
      var N;
      (N = b()) == null || N();
    }
    function E(N) {
      const H = e(D).variants.find((X) => X.id === N);
      H && g()({ product: e(D), variant: H });
    }
    var oe = { get dealBlock() {
      return o();
    }, set dealBlock(N) {
      o(N), k();
    }, get dealBar() {
      return c();
    }, set dealBar(N) {
      c(N), k();
    }, get mainProduct() {
      return s();
    }, set mainProduct(N = null) {
      s(N), k();
    }, get products() {
      return i();
    }, set products(N) {
      i(N), k();
    }, get selectedProductVariant() {
      return u();
    }, set selectedProductVariant(N = null) {
      u(N), k();
    }, get onChange() {
      return g();
    }, set onChange(N) {
      g(N), k();
    }, get onRemove() {
      return b();
    }, set onRemove(N) {
      b(N), k();
    } }, J = Ie(), U = pe(J), M = (N) => {
      var H = Y_(), X = S(H), V = S(X);
      {
        let z = d(() => s() ? void 0 : e(C));
        Xn(V, { get url() {
          return e(z);
        }, class: "kaching-bundles__collection-product__link", children: (ae, T) => {
          var ee = U_();
          be(() => Pe(ee, "src", e(w).image || e(D).image)), p(ae, ee);
        }, $$slots: { default: !0 } });
      }
      var Z = G(V, 2), q = S(Z), W = (z) => {
        {
          let ae = d(() => s() ? void 0 : e(C));
          Xn(z, { get url() {
            return e(ae);
          }, class: "kaching-bundles__collection-product__link", children: (T, ee) => {
            var Y = H_(), le = S(Y, !0);
            y(Y), be(() => ft(le, e(D).title)), p(T, Y);
          }, $$slots: { default: !0 } });
        }
      };
      O(q, (z) => {
        e(x).showProductName && z(W);
      });
      var te = G(q, 2), de = (z) => {
        var ae = Z_(), T = pe(ae);
        na(T, { get product() {
          return e(D);
        } });
        var ee = G(T, 2);
        {
          let Y = d(() => {
            var le;
            return (le = e(w)) == null ? void 0 : le.id;
          });
          Un(ee, { get product() {
            return e(D);
          }, get selectedVariantId() {
            return e(Y);
          }, onChange: E });
        }
        p(z, ae);
      };
      O(te, (z) => {
        e(D).variants.length > 1 && z(de);
      }), ia(G(te, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(w);
      } }), y(Z), y(X);
      var F = G(X, 2), P = (z) => {
        Zt(z, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: A, children: (ae, T) => {
          var ee = J_();
          be(() => Pe(ee, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), p(ae, ee);
        }, $$slots: { default: !0 } });
      };
      O(F, (z) => {
        s() || z(P);
      }), y(H), p(N, H);
    }, B = (N) => {
      var H = e0();
      let X;
      var V = S(H), Z = S(V);
      Zt(Z, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        se(f, !0);
      }, children: (F, P) => {
        var z = Ie(), ae = pe(z), T = (Y) => {
          var le = Ie(), fe = pe(le), Be = (ke) => {
            var xe = K_();
            be(() => Pe(xe, "src", e(I))), p(ke, xe);
          };
          O(fe, (ke) => {
            e(I) && ke(Be);
          }), p(Y, le);
        }, ee = (Y) => {
          Ld(Y, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        O(ae, (Y) => {
          e(x).mediaImageGID ? Y(T) : Y(ee, !1);
        }), p(F, z);
      }, $$slots: { default: !0 } });
      var q = G(Z, 2), W = (F) => {
        Zt(F, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          se(f, !0);
        }, children: (P, z) => {
          da();
          var ae = Wn();
          be(() => ft(ae, e(L))), p(P, ae);
        }, $$slots: { default: !0 } });
      };
      O(q, (F) => {
        e(L) && F(W);
      }), y(V);
      var te = G(V, 2), de = (F) => {
        ol(F, { target: "body", children: (P, z) => {
          var ae = X_(), T = S(ae);
          T.__click = [W_, f];
          var ee = S(T);
          go(S(ee), { get dealBlock() {
            return o();
          }, get dealBar() {
            return c();
          }, get products() {
            return i();
          }, onChoose: ne, onClose: () => {
            se(f, !1);
          } }), y(ee), y(T), y(ae), be((Y) => Tt(T, Y), [() => (function(Y) {
            return bn({ "kaching-choose-product-overlay-color": je(Y.chooseProductModal.overlayColor) });
          })(o())]), p(P, ae);
        }, $$slots: { default: !0 } });
      };
      O(te, (F) => {
        e(f) && F(de);
      }), y(H), be((F) => X = Lt(H, 1, "kaching-bundles__collection-product", null, X, F), [() => ({ "kaching-bundles__collection-product--require-selection": e(K) && e(R) && e(Q) })]), p(N, H);
    };
    O(U, (N) => {
      e(D) && e(w) ? N(M) : N(B, !1);
    }), p(n, J);
    var j = Xe(oe);
    return l(), j;
  }
  function t0(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  On(["click"]), Qe(Co, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  var n0 = $('<img class="kaching-bundles__bar-image" alt=""/>'), r0 = $('<div class="kaching-bundles__bar-radio"></div>'), a0 = $('<span class="kaching-bundles__bar-title"><!></span>'), i0 = $('<span class="kaching-bundles__bar-label"><!></span>'), l0 = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), s0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), o0 = $('<div class="kaching-bundles__bar-price"><!></div>'), c0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), u0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), d0 = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), g0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), h0 = $("<!> <!>", 1), p0 = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), b0 = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), f0 = $('<div class="kaching-bundles__bar-collection-products"></div>'), v0 = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), _0 = $('<div><input type="radio"/> <!> <!></div>');
  function jd(n, t) {
    Ke(t, !0);
    const r = () => $e(U, "$config", c), a = () => $e(So, "$chosenCollectionBreaksProducts", c), l = () => $e(oe, "$formatPrice", c), o = () => $e(E, "$translate", c), [c, s] = vt();
    let i = m(t, "dealBlock", 7), u = m(t, "dealBar", 7), g = m(t, "product", 7), b = m(t, "collectionBreaksProducts", 23, () => []), h = m(t, "otherProducts", 23, () => []), v = m(t, "selectedDealBarIndex", 7, null), _ = m(t, "complementaryProducts", 23, () => []), f = m(t, "customQuantity", 7, void 0), x = m(t, "currentVariantId", 7, void 0), D = m(t, "componentId", 7), w = m(t, "selected", 7, !1), I = m(t, "globalSellingPlan", 7, void 0), L = m(t, "onDealBarSelect", 7), Q = m(t, "onDealBarDeselect", 7), R = m(t, "onVariantSelect", 7), K = m(t, "onVariantsChange", 7), C = m(t, "onPersonalisationsChange", 7), ne = m(t, "personalisationInitialValues", 23, () => []), A = m(t, "onProgressiveGiftsChange", 7);
    const E = It(), oe = cn(), J = Fn(), U = _n();
    let M = De(st([])), B = De(st([])), j = De(st([]));
    const N = new wv(), H = d(() => {
      var ve, We;
      return (We = (ve = i().collectionBreaks) == null ? void 0 : ve.autoFillNotChosenItems) != null && We;
    }), X = d(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), V = d(() => {
      var ve, We;
      return i() && ((We = (ve = i().defaultVariantsV2) == null ? void 0 : ve.find((Ee) => Ut(Ee.productGID) === g().id && Ee.dealBarId === u().id)) == null ? void 0 : We.variantGIDs) || [];
    });
    let Z = d(() => te(u())), q = De(st(te(u())));
    pr(() => {
      se(q, e(Z), !0);
    });
    const W = d(() => f() || e(q));
    function te(ve) {
      return ve.dealBarType === pt.Bxgy ? ve.buyQuantity + ve.getQuantity : Number(ve.quantity);
    }
    Je(() => {
      x() && nn(() => {
        (function(ve, We) {
          if (Object.keys(a()).length === 0 && ve[0]) {
            const tt = Ut(ve[0]), Ge = g().variants.find((Ne) => Ne.id == tt);
            if (Ge) return void cs(0, { product: g(), variant: Ge });
          }
          const Ee = g().variants.find((tt) => tt.id == We);
          if (Ee) return void cs(0, { product: g(), variant: Ee });
          Object.keys(a()).length === 0 && g().variants[0] && cs(0, { product: g(), variant: g().variants[0] });
        })(e(V), x());
      });
    }), Je(() => {
      w() || N.clear();
    });
    const de = d(() => b().length === 0 || b().some((ve) => ve.id === g().id)), F = d(() => {
      const ve = Object.fromEntries(Object.entries(a()).filter(([Ee]) => Number(Ee) < e(W)));
      if (!w() || !e(H)) return ve;
      const We = { ...ve };
      for (let Ee = 1; Ee < e(W); Ee++) We[Ee] || N.has(Ee) || (e(de) && ve[0] ? We[Ee] = { product: g(), variant: ve[0].variant } : ve[1] && (We[Ee] = { product: ve[1].product, variant: ve[1].variant }));
      return We;
    }), P = d(() => w() ? Object.values(e(F)).map((ve) => ({ variant: ve.variant, quantity: 1 })) : []), z = d(() => (function({ selectedProductVariants: ve, mainProductIsInCollection: We, collectionBreaksProducts: Ee, dealBlock: tt, quantity: Ge }) {
      var Ne;
      const ot = ve.map((Mt) => ({ quantity: 1, variant: Mt.variant }));
      if (ot.length === 0 || ot.length >= Ge || (Ne = tt.collectionBreaks) != null && Ne.showChosenProductsPriceOnly) return ot;
      const _t = Ge - ot.length;
      if (We) {
        const Mt = Array.from({ length: _t }, () => ot[0]);
        return [...ot, ...Mt];
      }
      const Bt = Ee.flatMap((Mt) => Mt.variants).filter((Mt) => Mt.availableForSale);
      if (Bt.length === 0) return ot;
      const nt = Bt.reduce((Mt, Et) => Et.price < Mt.price ? Et : Mt, Bt[0]), yt = Array.from({ length: _t }, () => ({ quantity: 1, variant: nt }));
      return [...ot, ...yt];
    })({ selectedProductVariants: Object.values(e(F)), mainProductIsInCollection: e(de), collectionBreaksProducts: b(), dealBlock: i(), quantity: e(W) }));
    let ae = De(void 0);
    const T = d(() => rl(g(), e(z).map((ve) => ve.variant))), ee = d(() => {
      var ve, We;
      return (u().sellingPlanEnabled || i().subscriptionsEnabled && ((ve = i().subscriptions) == null ? void 0 : ve.layout) === "link" && ((We = i().subscriptions) == null ? void 0 : We.subscribeByDefault)) && (!i().subscriptionsEnabled || !!I());
    }), Y = d(() => e(ee) ? so(u(), e(T), e(ae)) : void 0), le = d(() => oo(e(Y), I(), e(T), g().requiresSellingPlan)), fe = d(() => new Set(g().variants.map((ve) => ve.id))), Be = d(() => Object.values(e(F)).filter((ve) => e(fe).has(ve.variant.id))), ke = d(() => (function(ve, We, Ee) {
      return Ee.map(({ variant: Ge, quantity: Ne }) => {
        let ot = Ge.price;
        const _t = ve.useProductCompareAtPrice || (We.dealBarType === void 0 || We.dealBarType === pt.QuantityBreak) && We.discountType === "default";
        return Ge.compareAtPrice && _t && (ot = Math.max(ot, Ge.compareAtPrice)), ot * Ne;
      }).reduce((Ge, Ne) => Ge + Ne, 0);
    })(i(), u(), e(z))), xe = d(() => ll(e(ke), e(M), e(B))), ge = d(() => Math.ceil(e(ke) / e(z).length)), ce = d(() => ho(e(W) === 1, e(xe), e(ge))), re = d(() => i() && we(e(z), e(le))), he = d(() => un({ priceFormatter: l(), product: g(), selectedVariants: e(P), dealBar: u(), totalFullPrice: e(ke), totalCompareAtPrice: e(xe), totalDiscountedPrice: e(re), quantity: e(W), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: kr(e(z)), sellingPlan: e(le) })), ye = d(() => e(he)(o()(u().title))), Ae = d(() => e(he)(o()(u().subtitle))), Oe = d(() => e(he)(o()(u().label))), Ve = d(() => al(i(), u()).map((ve) => ka(ve, o(), e(he)))), ie = d(() => ma(e(Ve)));
    function we(ve, We) {
      switch (u().dealBarType) {
        case void 0:
        case pt.QuantityBreak:
          return Uu(u(), ve, r().currencyRate, e(X), We, r().featureFlags.percentage_cents_rounding_workaround);
        case pt.Bxgy:
          return Hu(u(), ve, r().currencyRate, e(X), We);
      }
    }
    const He = d(() => Math.ceil(e(re) / e(z).length)), _e = d(() => e(xe) > e(re)), Me = d(() => `${u().id}_${D()}`);
    function Ce(ve) {
      w() && (ve.preventDefault(), ve.stopPropagation(), Q()());
    }
    Fa(() => {
      w() && L()({ dealBarId: u().id, dealBarQuantity: te(u()), preselected: !0 });
    });
    const Se = d(() => $e(J, "$getMediaImageUrl", c)(u().mediaImageGID) || sl);
    Je(() => {
      var ve;
      w() && Object.keys(e(F)).length > 0 && (e(j), e(M), e(B), e(le), (ve = i().collectionBreaks) == null || ve.requireItemSelectionEnabled, nn(() => {
        (function() {
          var We, Ee;
          const tt = Object.values(e(F)).map((Jt) => ({ variant: Jt.variant, product: Jt.product, quantity: 1 })), Ge = e(re) + e(j).reduce((Jt, Yt) => Jt + Yt.discountedPrice, 0), Ne = e(M).reduce((Jt, Yt) => Yt.showPrice ? Jt + Yt.fullPrice : Jt, 0) + e(B).reduce((Jt, Yt) => Jt + Yt.fullPrice * Yt.quantity, 0), ot = e(ke) + e(j).reduce((Jt, Yt) => Jt + Yt.fullPrice, 0) + Ne, _t = we(e(z), void 0), Bt = g().sellingPlans.map((Jt) => ({ sellingPlanId: Jt.id, discountedPrice: we(e(z), Jt) })), nt = (Ee = (We = i().collectionBreaks) == null ? void 0 : We.requireItemSelectionEnabled) != null && Ee, yt = tt.length, Mt = !nt || yt >= e(W), Et = nt ? Math.max(0, e(W) - yt) : 0;
          K()({ variants: tt, freeGifts: [...e(M), ...e(B)], upsells: e(j), dealBarSellingPlan: e(Y), pricing: { discountedPrice: Ge, fullPrice: ot, giftValue: Ne, discountedPricePerItem: e(He), fullPricePerItem: e(ge), discountedPriceWithoutSellingPlan: _t, discountedPricesForSellingPlans: Bt }, validation: { requiresItemSelection: nt, allItemsSelected: Mt, missingItemsCount: Et } });
        })();
      }));
    });
    const qe = d(() => u().showAsSoldOutEnabled && u().showAsSoldOut ? cl(u().showAsSoldOut) : ""), St = d(() => [Q_(i()), e(qe)].filter(Boolean).join(";"));
    function it(ve, We) {
      ve === 0 && R()({ variantId: We.variant.id }), cs(ve, We), dl(!1), e(H) && N.delete(ve);
    }
    function et(ve) {
      (function(We) {
        So.update((Ee) => {
          const { [We]: tt, ...Ge } = Ee;
          return Ge;
        });
      })(ve), e(H) && N.add(ve);
    }
    var lt = { get dealBlock() {
      return i();
    }, set dealBlock(ve) {
      i(ve), k();
    }, get dealBar() {
      return u();
    }, set dealBar(ve) {
      u(ve), k();
    }, get product() {
      return g();
    }, set product(ve) {
      g(ve), k();
    }, get collectionBreaksProducts() {
      return b();
    }, set collectionBreaksProducts(ve = []) {
      b(ve), k();
    }, get otherProducts() {
      return h();
    }, set otherProducts(ve = []) {
      h(ve), k();
    }, get selectedDealBarIndex() {
      return v();
    }, set selectedDealBarIndex(ve = null) {
      v(ve), k();
    }, get complementaryProducts() {
      return _();
    }, set complementaryProducts(ve = []) {
      _(ve), k();
    }, get customQuantity() {
      return f();
    }, set customQuantity(ve = void 0) {
      f(ve), k();
    }, get currentVariantId() {
      return x();
    }, set currentVariantId(ve = void 0) {
      x(ve), k();
    }, get componentId() {
      return D();
    }, set componentId(ve) {
      D(ve), k();
    }, get selected() {
      return w();
    }, set selected(ve = !1) {
      w(ve), k();
    }, get globalSellingPlan() {
      return I();
    }, set globalSellingPlan(ve = void 0) {
      I(ve), k();
    }, get onDealBarSelect() {
      return L();
    }, set onDealBarSelect(ve) {
      L(ve), k();
    }, get onDealBarDeselect() {
      return Q();
    }, set onDealBarDeselect(ve) {
      Q(ve), k();
    }, get onVariantSelect() {
      return R();
    }, set onVariantSelect(ve) {
      R(ve), k();
    }, get onVariantsChange() {
      return K();
    }, set onVariantsChange(ve) {
      K(ve), k();
    }, get onPersonalisationsChange() {
      return C();
    }, set onPersonalisationsChange(ve) {
      C(ve), k();
    }, get personalisationInitialValues() {
      return ne();
    }, set personalisationInitialValues(ve = []) {
      ne(ve), k();
    }, get onProgressiveGiftsChange() {
      return A();
    }, set onProgressiveGiftsChange(ve) {
      A(ve), k();
    } }, wt = _0();
    let rn;
    var jt = S(wt);
    ea(jt), jt.__change = [t0, L, u, te];
    var gt = G(jt, 2);
    Wa(gt, { get for() {
      return e(Me);
    }, get soldOut() {
      return u().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(ie);
    }, children: (ve, We) => {
      var Ee = v0(), tt = pe(Ee);
      Dt(tt, 17, () => e(Ve), (Ue) => Ue.id, (Ue, Ze) => {
        aa(Ue, { get badge() {
          return e(Ze);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      });
      var Ge = G(tt, 2), Ne = S(Ge);
      Zt(Ne, { element: "div", class: "kaching-bundles__bar-main", onclick: Ce, children: (Ue, Ze) => {
        var rt = p0(), Ct = pe(rt), At = (ut) => {
          var dt = n0();
          be(() => Pe(dt, "src", e(Se))), p(ut, dt);
        }, kn = (ut) => {
          p(ut, r0());
        };
        O(Ct, (ut) => {
          u().mediaImageGID ? ut(At) : ut(kn, !1);
        });
        var $t = G(Ct, 2), qt = S($t), mn = S(qt), Qt = S(mn);
        at(Qt, () => e(ye), (ut) => {
          var dt = a0();
          Te(S(dt), () => e(ye)), y(dt), p(ut, dt);
        });
        var gn = G(Qt, 2), hn = (ut) => {
          var dt = Ie();
          at(pe(dt), () => e(Oe), (Rt) => {
            var Nt = i0();
            Te(S(Nt), () => e(Oe)), y(Nt), p(Rt, Nt);
          }), p(ut, dt);
        };
        O(gn, (ut) => {
          e(Oe) && ut(hn);
        }), y(mn);
        var rr = G(mn, 2), Hn = (ut) => {
          var dt = Ie();
          at(pe(dt), () => e(Ae), (Rt) => {
            var Nt = l0();
            Te(S(Nt), () => e(Ae)), y(Nt), p(Rt, Nt);
          }), p(ut, dt);
        };
        O(rr, (ut) => {
          e(Ae) && ut(Hn);
        }), y(qt);
        var Zn = G(qt, 2), ur = S(Zn), fn = (ut) => {
          var dt = d0(), Rt = pe(dt), Nt = S(Rt);
          at(Nt, () => e(He), (Ht) => {
            Lr(Ht, { get amount() {
              return e(He);
            }, get showPricesPerItem() {
              return i().showPricesPerItem;
            }, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var Ln = G(Nt, 2), Sn = (Ht) => {
            var sn = Ie();
            at(pe(sn), () => e(ce), (Cn) => {
              var yn = s0();
              Te(S(yn), () => l()(e(ce))), y(yn), be(($n) => Pe(yn, "data-a11y-label", $n), [() => o()("system.original_price")]), p(Cn, yn);
            }), p(Ht, sn);
          };
          O(Ln, (Ht) => {
            e(_e) && Ht(Sn);
          }), y(Rt);
          var xn = G(Rt, 2), Bn = (Ht) => {
            var sn = u0(), Cn = S(sn);
            at(Cn, () => e(re), (an) => {
              var pn = o0();
              Te(S(pn), () => l()(e(re))), y(pn), be((Jn) => Pe(pn, "data-a11y-label", Jn), [() => o()("system.price")]), p(an, pn);
            });
            var yn = G(Cn, 2), $n = (an) => {
              var pn = Ie();
              at(pe(pn), () => e(xe), (Jn) => {
                var En = c0();
                Te(S(En), () => l()(e(xe))), y(En), be((gl) => Pe(En, "data-a11y-label", gl), [() => o()("system.original_price")]), p(Jn, En);
              }), p(an, pn);
            };
            O(yn, (an) => {
              e(_e) && an($n);
            }), y(sn), p(Ht, sn);
          };
          O(xn, (Ht) => {
            e(W) > 1 && Ht(Bn);
          }), p(ut, dt);
        }, Pn = (ut) => {
          var dt = h0(), Rt = pe(dt);
          at(Rt, () => e(re), (Sn) => {
            {
              let xn = d(() => i().showPricesPerItem ? e(He) : e(re));
              Lr(Sn, { get amount() {
                return e(xn);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var Nt = G(Rt, 2), Ln = (Sn) => {
            var xn = Ie();
            at(pe(xn), () => i().showPricesPerItem ? e(ce) : e(xe), (Bn) => {
              var Ht = g0();
              Te(S(Ht), () => l()(i().showPricesPerItem ? e(ce) : e(xe))), y(Ht), be((sn) => Pe(Ht, "data-a11y-label", sn), [() => o()("system.original_price")]), p(Bn, Ht);
            }), p(Sn, xn);
          };
          O(Nt, (Sn) => {
            e(_e) && Sn(Ln);
          }), p(ut, dt);
        };
        O(ur, (ut) => {
          i().showBothPrices ? ut(fn) : ut(Pn, !1);
        }), y(Zn), y($t), p(Ue, rt);
      }, $$slots: { default: !0 } });
      var ot = G(Ne, 2), _t = (Ue) => {
        ya(Ue, { get highlights() {
          return u().highlights;
        }, get isSelected() {
          return w();
        }, get replaceLiquid() {
          return e(he);
        } });
      };
      O(ot, (Ue) => {
        u().highlights && Ue(_t);
      });
      var Bt = G(ot, 2), nt = (Ue) => {
        var Ze = b0(), rt = S(Ze);
        {
          let Ct = d(() => e(Y) || e(T)[0]);
          xa(rt, { get sellingPlans() {
            return e(T);
          }, get selectedSellingPlan() {
            return e(Ct);
          }, onChange: (At) => {
            se(ae, At, !0);
          } });
        }
        y(Ze), p(Ue, Ze);
      };
      O(Bt, (Ue) => {
        w() && e(ee) && !u().sellingPlanGid && e(T).length > 1 && Ue(nt);
      });
      var yt = G(Bt, 2), Mt = (Ue) => {
        var Ze = f0();
        Dt(Ze, 21, () => ({ length: e(W) }), Mr, (rt, Ct, At) => {
          var kn = Ie(), $t = pe(kn), qt = (Qt) => {
            {
              let gn = d(() => e(F)[At] || null);
              Co(Qt, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get mainProduct() {
                return g();
              }, products: [], get selectedProductVariant() {
                return e(gn);
              }, onChange: (hn) => it(At, hn) });
            }
          }, mn = (Qt) => {
            {
              let gn = d(() => e(F)[At] || null);
              Co(Qt, { get dealBlock() {
                return i();
              }, get dealBar() {
                return u();
              }, get products() {
                return b();
              }, get selectedProductVariant() {
                return e(gn);
              }, onChange: (hn) => it(At, hn), onRemove: () => et(At) });
            }
          };
          O($t, (Qt) => {
            At === 0 ? Qt(qt) : Qt(mn, !1);
          }), p(rt, kn);
        }), y(Ze), p(Ue, Ze);
      };
      O(yt, (Ue) => {
        w() && Ue(Mt);
      });
      var Et = G(yt, 2), Jt = (Ue) => {
        {
          let Ze = d(() => te(u()));
          ul(Ue, { get value() {
            return e(q);
          }, get min() {
            return e(Ze);
          }, onChange: (rt) => se(q, rt, !0) });
        }
      };
      O(Et, (Ue) => {
        w() && u().dealBarType === pt.QuantityBreak && u().quantitySelector && Ue(Jt);
      });
      var Yt = G(Et, 2), dn = (Ue) => {
        {
          let Ze = d(() => e(Be).map((rt) => rt.variant.id));
          Ua(Ue, { get product() {
            return g();
          }, get productPersonalisation() {
            return u().productPersonalisation;
          }, get selectedVariantIds() {
            return e(Ze);
          }, get quantity() {
            return e(Be).length;
          }, get addPersonalisationModal() {
            return i().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return C();
          }, get initialValues() {
            return ne();
          } });
        }
      };
      O(Yt, (Ue) => {
        w() && u().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && Ue(dn);
      }), y(Ge);
      var Kt = G(Ge, 2);
      {
        let Ue = d(() => u().upsells || []);
        wi(Kt, { get dealBlock() {
          return i();
        }, get dealBarId() {
          return u().id;
        }, get upsells() {
          return e(Ue);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return _();
        }, get dealBarSelected() {
          return w();
        }, get dealSellingPlan() {
          return e(le);
        }, onChange: (Ze) => {
          se(j, Ze, !0);
        } });
      }
      var ct = G(Kt, 2);
      Bi(ct, { get selectedDealBarIndex() {
        return v();
      }, get onChange() {
        return A();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return u();
      }, get otherProducts() {
        return h();
      }, get selected() {
        return w();
      }, get sellingPlan() {
        return e(le);
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var zt = G(ct, 2);
      {
        let Ue = d(() => u().freeGifts || []);
        yi(zt, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(Ue);
        }, get freeGiftsSummary() {
          return u().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return w();
        }, get sellingPlan() {
          return e(le);
        }, onChange: (Ze) => {
          se(M, Ze, !0);
        } });
      }
      var Xt = G(zt, 2);
      {
        let Ue = d(() => u().multipleGiftsSelectors || []);
        Si(Xt, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(Ue);
        }, get sellingPlan() {
          return e(le);
        }, get otherProducts() {
          return h();
        }, onChange: (Ze) => {
          se(B, Ze, !0);
        } });
      }
      p(ve, Ee);
    }, $$slots: { default: !0 } });
    var ze = G(gt, 2), bt = (ve) => {
      Pi(ve, { get showAsSoldOut() {
        return u().showAsSoldOut;
      }, get replaceLiquid() {
        return e(he);
      } });
    };
    O(ze, (ve) => {
      u().showAsSoldOutEnabled && u().showAsSoldOut && ve(bt);
    }), y(wt), be((ve) => {
      var We;
      rn = Lt(wt, 1, "kaching-bundles__bar", null, rn, ve), Pe(wt, "data-deal-bar-id", u().id), Tt(wt, e(St)), Pe(jt, "name", `kaching-bundles-deal-${(We = D()) != null ? We : ""}`), La(jt, u().id), Pe(jt, "id", e(Me)), Yi(jt, w()), jt.disabled = u().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": w() })]), p(n, wt);
    var Ye = Xe(lt);
    return s(), Ye;
  }
  On(["change"]), Qe(jd, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var Io = {};
  (function n(t, r, a, l) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), c = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function s() {
    }
    function i(M) {
      var B = r.exports.Promise, j = B !== void 0 ? B : t.Promise;
      return typeof j == "function" ? new j(M) : (M(s, s), null);
    }
    var u, g, b, h, v, _, f = /* @__PURE__ */ (function(M, B) {
      return { transform: function(j) {
        if (M) return j;
        if (B.has(j)) return B.get(j);
        var N = new OffscreenCanvas(j.width, j.height);
        return N.getContext("2d").drawImage(j, 0, 0), B.set(j, N), N;
      }, clear: function() {
        B.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var M = new OffscreenCanvas(1, 1), B = M.getContext("2d");
        B.fillRect(0, 0, 1, 1);
        var j = M.transferToImageBitmap();
        B.createPattern(j, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), x = (b = Math.floor(1e3 / 60), h = {}, v = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (u = function(M) {
      var B = Math.random();
      return h[B] = requestAnimationFrame(function j(N) {
        v === N || v + b - 1 < N ? (v = N, delete h[B], M()) : h[B] = requestAnimationFrame(j);
      }), B;
    }, g = function(M) {
      h[M] && cancelAnimationFrame(h[M]);
    }) : (u = function(M) {
      return setTimeout(M, b);
    }, g = function(M) {
      return clearTimeout(M);
    }), { frame: u, cancel: g }), D = /* @__PURE__ */ (function() {
      var M, B, j = {};
      return function() {
        if (M) return M;
        if (!a && o) {
          var N = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            M = new Worker(URL.createObjectURL(new Blob([N])));
          } catch (H) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", H), null;
          }
          (function(H) {
            function X(V, Z) {
              H.postMessage({ options: V || {}, callback: Z });
            }
            H.init = function(V) {
              var Z = V.transferControlToOffscreen();
              H.postMessage({ canvas: Z }, [Z]);
            }, H.fire = function(V, Z, q) {
              if (B) return X(V, null), B;
              var W = Math.random().toString(36).slice(2);
              return B = i(function(te) {
                function de(F) {
                  F.data.callback === W && (delete j[W], H.removeEventListener("message", de), B = null, f.clear(), q(), te());
                }
                H.addEventListener("message", de), X(V, W), j[W] = de.bind(null, { data: { callback: W } });
              });
            }, H.reset = function() {
              for (var V in H.postMessage({ reset: !0 }), j) j[V](), delete j[V];
            };
          })(M);
        }
        return M;
      };
    })(), w = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function I(M, B, j) {
      return (function(N, H) {
        return H ? H(N) : N;
      })(M && M[B] != null ? M[B] : w[B], j);
    }
    function L(M) {
      return M < 0 ? 0 : Math.floor(M);
    }
    function Q(M, B) {
      return Math.floor(Math.random() * (B - M)) + M;
    }
    function R(M) {
      return parseInt(M, 16);
    }
    function K(M) {
      return M.map(C);
    }
    function C(M) {
      var B = String(M).replace(/[^0-9a-f]/gi, "");
      return B.length < 6 && (B = B[0] + B[0] + B[1] + B[1] + B[2] + B[2]), { r: R(B.substring(0, 2)), g: R(B.substring(2, 4)), b: R(B.substring(4, 6)) };
    }
    function ne(M) {
      M.width = document.documentElement.clientWidth, M.height = document.documentElement.clientHeight;
    }
    function A(M) {
      var B = M.getBoundingClientRect();
      M.width = B.width, M.height = B.height;
    }
    function E(M) {
      var B = M.angle * (Math.PI / 180), j = M.spread * (Math.PI / 180);
      return { x: M.x, y: M.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * M.startVelocity + Math.random() * M.startVelocity, angle2D: -B + (0.5 * j - Math.random() * j), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: M.color, shape: M.shape, tick: 0, totalTicks: M.ticks, decay: M.decay, drift: M.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * M.gravity, ovalScalar: 0.6, scalar: M.scalar, flat: M.flat };
    }
    function oe(M, B) {
      B.x += Math.cos(B.angle2D) * B.velocity + B.drift, B.y += Math.sin(B.angle2D) * B.velocity + B.gravity, B.velocity *= B.decay, B.flat ? (B.wobble = 0, B.wobbleX = B.x + 10 * B.scalar, B.wobbleY = B.y + 10 * B.scalar, B.tiltSin = 0, B.tiltCos = 0, B.random = 1) : (B.wobble += B.wobbleSpeed, B.wobbleX = B.x + 10 * B.scalar * Math.cos(B.wobble), B.wobbleY = B.y + 10 * B.scalar * Math.sin(B.wobble), B.tiltAngle += 0.1, B.tiltSin = Math.sin(B.tiltAngle), B.tiltCos = Math.cos(B.tiltAngle), B.random = Math.random() + 2);
      var j = B.tick++ / B.totalTicks, N = B.x + B.random * B.tiltCos, H = B.y + B.random * B.tiltSin, X = B.wobbleX + B.random * B.tiltCos, V = B.wobbleY + B.random * B.tiltSin;
      if (M.fillStyle = "rgba(" + B.color.r + ", " + B.color.g + ", " + B.color.b + ", " + (1 - j) + ")", M.beginPath(), c && B.shape.type === "path" && typeof B.shape.path == "string" && Array.isArray(B.shape.matrix)) M.fill((function(Be, ke, xe, ge, ce, re, he) {
        var ye = new Path2D(Be), Ae = new Path2D();
        Ae.addPath(ye, new DOMMatrix(ke));
        var Oe = new Path2D();
        return Oe.addPath(Ae, new DOMMatrix([Math.cos(he) * ce, Math.sin(he) * ce, -Math.sin(he) * re, Math.cos(he) * re, xe, ge])), Oe;
      })(B.shape.path, B.shape.matrix, B.x, B.y, 0.1 * Math.abs(X - N), 0.1 * Math.abs(V - H), Math.PI / 10 * B.wobble));
      else if (B.shape.type === "bitmap") {
        var Z = Math.PI / 10 * B.wobble, q = 0.1 * Math.abs(X - N), W = 0.1 * Math.abs(V - H), te = B.shape.bitmap.width * B.scalar, de = B.shape.bitmap.height * B.scalar, F = new DOMMatrix([Math.cos(Z) * q, Math.sin(Z) * q, -Math.sin(Z) * W, Math.cos(Z) * W, B.x, B.y]);
        F.multiplySelf(new DOMMatrix(B.shape.matrix));
        var P = M.createPattern(f.transform(B.shape.bitmap), "no-repeat");
        P.setTransform(F), M.globalAlpha = 1 - j, M.fillStyle = P, M.fillRect(B.x - te / 2, B.y - de / 2, te, de), M.globalAlpha = 1;
      } else if (B.shape === "circle") M.ellipse ? M.ellipse(B.x, B.y, Math.abs(X - N) * B.ovalScalar, Math.abs(V - H) * B.ovalScalar, Math.PI / 10 * B.wobble, 0, 2 * Math.PI) : (function(Be, ke, xe, ge, ce, re, he, ye, Ae) {
        Be.save(), Be.translate(ke, xe), Be.rotate(re), Be.scale(ge, ce), Be.arc(0, 0, 1, he, ye, Ae), Be.restore();
      })(M, B.x, B.y, Math.abs(X - N) * B.ovalScalar, Math.abs(V - H) * B.ovalScalar, Math.PI / 10 * B.wobble, 0, 2 * Math.PI);
      else if (B.shape === "star") for (var z = Math.PI / 2 * 3, ae = 4 * B.scalar, T = 8 * B.scalar, ee = B.x, Y = B.y, le = 5, fe = Math.PI / le; le--; ) ee = B.x + Math.cos(z) * T, Y = B.y + Math.sin(z) * T, M.lineTo(ee, Y), z += fe, ee = B.x + Math.cos(z) * ae, Y = B.y + Math.sin(z) * ae, M.lineTo(ee, Y), z += fe;
      else M.moveTo(Math.floor(B.x), Math.floor(B.y)), M.lineTo(Math.floor(B.wobbleX), Math.floor(H)), M.lineTo(Math.floor(X), Math.floor(V)), M.lineTo(Math.floor(N), Math.floor(B.wobbleY));
      return M.closePath(), M.fill(), B.tick < B.totalTicks;
    }
    function J(M, B) {
      var j, N = !M, H = !!I(B || {}, "resize"), X = !1, V = I(B, "disableForReducedMotion", Boolean), Z = o && I(B || {}, "useWorker") ? D() : null, q = N ? ne : A, W = !(!M || !Z) && !!M.__confetti_initialized, te = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function de(P, z, ae) {
        for (var T = I(P, "particleCount", L), ee = I(P, "angle", Number), Y = I(P, "spread", Number), le = I(P, "startVelocity", Number), fe = I(P, "decay", Number), Be = I(P, "gravity", Number), ke = I(P, "drift", Number), xe = I(P, "colors", K), ge = I(P, "ticks", Number), ce = I(P, "shapes"), re = I(P, "scalar"), he = !!I(P, "flat"), ye = (function(we) {
          var He = I(we, "origin", Object);
          return He.x = I(He, "x", Number), He.y = I(He, "y", Number), He;
        })(P), Ae = T, Oe = [], Ve = M.width * ye.x, ie = M.height * ye.y; Ae--; ) Oe.push(E({ x: Ve, y: ie, angle: ee, spread: Y, startVelocity: le, color: xe[Ae % xe.length], shape: ce[Q(0, ce.length)], ticks: ge, decay: fe, gravity: Be, drift: ke, scalar: re, flat: he }));
        return j ? j.addFettis(Oe) : (j = (function(we, He, _e, Me, Ce) {
          var Se, qe, St = He.slice(), it = we.getContext("2d"), et = i(function(lt) {
            function wt() {
              Se = qe = null, it.clearRect(0, 0, Me.width, Me.height), f.clear(), Ce(), lt();
            }
            Se = x.frame(function rn() {
              !a || Me.width === l.width && Me.height === l.height || (Me.width = we.width = l.width, Me.height = we.height = l.height), Me.width || Me.height || (_e(we), Me.width = we.width, Me.height = we.height), it.clearRect(0, 0, Me.width, Me.height), (St = St.filter(function(jt) {
                return oe(it, jt);
              })).length ? Se = x.frame(rn) : wt();
            }), qe = wt;
          });
          return { addFettis: function(lt) {
            return St = St.concat(lt), et;
          }, canvas: we, promise: et, reset: function() {
            Se && x.cancel(Se), qe && qe();
          } };
        })(M, Oe, q, z, ae), j.promise);
      }
      function F(P) {
        var z = V || I(P, "disableForReducedMotion", Boolean), ae = I(P, "zIndex", Number);
        if (z && te) return i(function(le) {
          le();
        });
        N && j ? M = j.canvas : N && !M && (M = (function(le) {
          var fe = document.createElement("canvas");
          return fe.style.position = "fixed", fe.style.top = "0px", fe.style.left = "0px", fe.style.pointerEvents = "none", fe.style.zIndex = le, fe;
        })(ae), document.body.appendChild(M)), H && !W && q(M);
        var T = { width: M.width, height: M.height };
        function ee() {
          if (Z) {
            var le = { getBoundingClientRect: function() {
              if (!N) return M.getBoundingClientRect();
            } };
            return q(le), void Z.postMessage({ resize: { width: le.width, height: le.height } });
          }
          T.width = T.height = null;
        }
        function Y() {
          j = null, H && (X = !1, t.removeEventListener("resize", ee)), N && M && (document.body.contains(M) && document.body.removeChild(M), M = null, W = !1);
        }
        return Z && !W && Z.init(M), W = !0, Z && (M.__confetti_initialized = !0), H && !X && (X = !0, t.addEventListener("resize", ee, !1)), Z ? Z.fire(P, T, Y) : de(P, T, Y);
      }
      return F.reset = function() {
        Z && Z.reset(), j && j.reset();
      }, F;
    }
    function U() {
      return _ || (_ = J(null, { useWorker: !0, resize: !0 })), _;
    }
    r.exports = function() {
      return U().apply(this, arguments);
    }, r.exports.reset = function() {
      U().reset();
    }, r.exports.create = J, r.exports.shapeFromPath = function(M) {
      if (!c) throw new Error("path confetti are not supported in this browser");
      var B, j;
      typeof M == "string" ? B = M : (B = M.path, j = M.matrix);
      var N = new Path2D(B), H = document.createElement("canvas").getContext("2d");
      if (!j) {
        for (var X, V, Z = 1e3, q = Z, W = Z, te = 0, de = 0, F = 0; F < Z; F += 2) for (var P = 0; P < Z; P += 2) H.isPointInPath(N, F, P, "nonzero") && (q = Math.min(q, F), W = Math.min(W, P), te = Math.max(te, F), de = Math.max(de, P));
        X = te - q, V = de - W;
        var z = Math.min(10 / X, 10 / V);
        j = [z, 0, 0, z, -Math.round(X / 2 + q) * z, -Math.round(V / 2 + W) * z];
      }
      return { type: "path", path: B, matrix: j };
    }, r.exports.shapeFromText = function(M) {
      var B, j = 1, N = "#000000", H = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof M == "string" ? B = M : (B = M.text, j = "scalar" in M ? M.scalar : j, H = "fontFamily" in M ? M.fontFamily : H, N = "color" in M ? M.color : N);
      var X = 10 * j, V = X + "px " + H, Z = new OffscreenCanvas(X, X), q = Z.getContext("2d");
      q.font = V;
      var W = q.measureText(B), te = Math.ceil(W.actualBoundingBoxRight + W.actualBoundingBoxLeft), de = Math.ceil(W.actualBoundingBoxAscent + W.actualBoundingBoxDescent), F = W.actualBoundingBoxLeft + 2, P = W.actualBoundingBoxAscent + 2;
      te += 4, de += 4, (q = (Z = new OffscreenCanvas(te, de)).getContext("2d")).font = V, q.fillStyle = N, q.fillText(B, F, P);
      var z = 1 / j;
      return { type: "bitmap", bitmap: Z.transferToImageBitmap(), matrix: [z, 0, 0, z, -te * z / 2, -de * z / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), Io, !1);
  const k0 = Io.exports;
  Io.exports.create;
  var m0 = Tn('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function Ed(n, t) {
    Ke(t, !0);
    let r = m(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(c) {
      r(c), k();
    } }, l = m0();
    let o;
    return be((c) => o = Lt(l, 0, "kaching-bundles__scratch-off-hint", null, o, c), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), p(n, l), Xe(a);
  }
  function x0(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  Qe(Ed, { hidden: {} }, [], [], !0);
  var y0 = $('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), w0 = $("<div><!> <!></div>");
  function Rd(n, t) {
    Ke(t, !0);
    const r = () => $e(u, "$config", a), [a, l] = vt(), o = 317 / 361;
    let c = m(t, "settings", 7), s = m(t, "onReveal", 7), i = m(t, "children", 7);
    const u = _n(), g = It();
    let b = d(() => $e(g, "$translate", a)(c().title)), h = De(st(r().preview && !r().previewScratchOff)), v = De(!1), _ = De(void 0), f = De(!1), x = d(() => bn({ "scratch-off-title-color": je(c().titleColor), "scratch-off-title-size": `${c().titleSize}px` })), D = !1, w = null, I = null, L = 22, Q = null, R = De(!1), K = De(!1);
    const C = new Image();
    C.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", Q = C, C.complete ? se(R, !0) : (C.addEventListener("load", () => {
      se(R, !0);
    }, { once: !0 }), C.addEventListener("error", () => {
      se(K, !0);
    }, { once: !0 }));
    let ne = d(() => e(R) || e(K));
    function A() {
      if (!e(_)) return;
      const te = e(_).getBoundingClientRect();
      if (te.width === 0 || te.height === 0) return;
      const de = window.devicePixelRatio || 1;
      e(_).width = Math.floor(te.width * de), e(_).height = Math.floor(te.height * de);
      const F = e(_).getContext("2d");
      if (!F) return;
      F.scale(de, de), L = 44 * Math.min((te.width - 10) / 361, (te.height - 10) / 163, o) / 2, F.fillStyle = je(c().backgroundColor), F.fillRect(0, 0, te.width, te.height), e(R) && Q && (F.globalAlpha = 0.6, F.drawImage(Q, 0, 0, te.width, te.height), F.globalAlpha = 1), F.globalCompositeOperation = "destination-out";
    }
    function E(te) {
      if (!e(_)) return null;
      const de = e(_).getBoundingClientRect();
      return { x: te.clientX - de.left, y: te.clientY - de.top };
    }
    function oe(te) {
      var de;
      e(h) || e(v) || (D = !0, se(f, !0), I === null && (I = setTimeout(B, 1500)), (de = e(_)) == null || de.setPointerCapture(te.pointerId), w = E(te), (function(F) {
        if (!e(_) || !F) return;
        const P = e(_).getContext("2d");
        P && (P.beginPath(), P.arc(F.x, F.y, L, 0, 2 * Math.PI), P.fill());
      })(w));
    }
    function J(te) {
      if (!D || e(h) || e(v)) return;
      const de = E(te);
      de && w && ((function(F, P) {
        if (!e(_)) return;
        const z = e(_).getContext("2d");
        if (!z) return;
        const ae = P.x - F.x, T = P.y - F.y, ee = Math.hypot(ae, T), Y = Math.max(1, Math.ceil(ee / 4));
        for (let le = 0; le <= Y; le++) {
          const fe = le / Y;
          z.beginPath(), z.arc(F.x + ae * fe, F.y + T * fe, L, 0, 2 * Math.PI), z.fill();
        }
      })(w, de), w = de);
    }
    function U(te) {
      var de;
      D = !1, (de = e(_)) == null || de.releasePointerCapture(te.pointerId), w = null, B();
    }
    function M() {
      I !== null && (clearTimeout(I), I = null);
    }
    function B() {
      var te;
      e(h) || e(v) || (M(), se(v, !0), (function() {
        if (!e(_)) return;
        const de = e(_).getBoundingClientRect();
        k0({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (de.left + de.width / 2) / window.innerWidth, y: (de.top + de.height / 2) / window.innerHeight } });
      })(), (te = s()) == null || te(), setTimeout(() => {
        se(h, !0), se(v, !1);
      }, 300));
    }
    Je(() => {
      if (e(ne)) return;
      const te = setTimeout(() => {
        se(K, !0);
      }, 5e3);
      return () => clearTimeout(te);
    }), Je(() => () => M()), Je(() => {
      if (e(h) || e(v) || !e(_)) return;
      A();
      const te = new ResizeObserver(() => {
        e(h) || e(v) || A();
      });
      return te.observe(e(_)), () => te.disconnect();
    });
    let j = JSON.stringify(c());
    Je(() => {
      const te = JSON.stringify(c());
      te !== j && (j = te, r().preview && r().previewScratchOff && (se(h, !1), se(v, !1), se(f, !1), M()));
    });
    var N = { get settings() {
      return c();
    }, set settings(te) {
      c(te), k();
    }, get onReveal() {
      return s();
    }, set onReveal(te) {
      s(te), k();
    }, get children() {
      return i();
    }, set children(te) {
      i(te), k();
    } }, H = w0();
    let X;
    var V = S(H);
    El(V, i);
    var Z = G(V, 2), q = (te) => {
      var de = y0(), F = pe(de);
      let P;
      F.__pointerdown = oe, F.__pointermove = J, F.__pointerup = U, F.__keydown = [x0, B], bi(F, (Y) => se(_, Y), () => e(_));
      var z = G(F, 2);
      {
        let Y = d(() => e(f) || e(v));
        Ed(z, { get hidden() {
          return e(Y);
        } });
      }
      var ae = G(z, 2);
      let T;
      var ee = S(ae, !0);
      y(ae), be((Y, le) => {
        P = Lt(F, 1, "kaching-bundles__scratch-off-canvas", null, P, Y), Pe(F, "aria-label", e(b)), T = Lt(ae, 1, "kaching-bundles__scratch-off-title", null, T, le), ft(ee, e(b));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(v) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(f) || e(v) })]), jl("pointercancel", F, U), p(te, de);
    };
    O(Z, (te) => {
      e(h) || te(q);
    }), y(H), be((te) => {
      X = Lt(H, 1, "kaching-bundles__scratch-off", null, X, te), Tt(H, e(x));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(h), "kaching-bundles__scratch-off--revealing": e(v), "kaching-bundles__scratch-off--loading": !e(h) && !e(ne) })]), p(n, H);
    var W = Xe(N);
    return l(), W;
  }
  On(["pointerdown", "pointermove", "pointerup", "keydown"]), Qe(Rd, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var P0 = $('<div class="kaching-bundles__bar-price"><!></div>'), S0 = $('<div class="kaching-bundles__bar-full-price"><!></div>'), B0 = $('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function us(n, t) {
    Ke(t, !0);
    const r = () => $e(i, "$translate", l), a = () => $e(u, "$formatPrice", l), [l, o] = vt(), c = m(t, "discountedPrice", 7), s = m(t, "fullPrice", 7), i = It(), u = cn();
    var g = { get discountedPrice() {
      return c();
    }, set discountedPrice(x) {
      c(x), k();
    }, get fullPrice() {
      return s();
    }, set fullPrice(x) {
      s(x), k();
    } }, b = B0(), h = S(b);
    at(h, c, (x) => {
      var D = P0();
      Te(S(D), () => a()(c())), y(D), be((w) => Pe(D, "data-a11y-label", w), [() => r()("system.price")]), p(x, D);
    });
    var v = G(h, 2), _ = (x) => {
      var D = Ie();
      at(pe(D), s, (w) => {
        var I = S0();
        Te(S(I), () => a()(s())), y(I), be((L) => Pe(I, "data-a11y-label", L), [() => r()("system.original_price")]), p(w, I);
      }), p(x, D);
    };
    O(v, (x) => {
      s() > c() && x(_);
    }), y(b), p(n, b);
    var f = Xe(g);
    return o(), f;
  }
  Qe(us, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const Ha = ta(null), Mo = (n) => bn({ "kaching-subscriptions-title-color": je(n.titleColor), "kaching-subscriptions-subtitle-color": je(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var C0 = $('<div class="kaching-bundles__bar-radio"></div>'), I0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), M0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), z0 = $('<div class="kaching-bundles__bar-variants"><!></div>'), $0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), D0 = $('<div class="kaching-bundles__bar-radio"></div>'), A0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), V0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), T0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), q0 = $("<div></div>");
  function Nd(n, t) {
    Ke(t, !0);
    const r = () => $e(Ha, "$selectedDealBarStore", o), a = () => $e(v, "$formatPrice", o), l = () => $e(h, "$translate", o), [o, c] = vt(), s = m(t, "subscriptions", 7), i = m(t, "sellingPlans", 7), u = m(t, "selectedSellingPlan", 7), g = m(t, "hideSellingPlanSelector", 7, !1), b = m(t, "onChange", 7), h = It(), v = cn();
    let _ = De(st(s().subscribeByDefault || u() ? "subscribe" : "one-time")), f = De(st(u() || i()[0])), x = De(!1), D = d(() => s().subscribeByDefault), w = d(() => e(D) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const I = d(() => Mo(s())), L = d(() => {
      var j, N;
      const H = (N = (j = r()) == null ? void 0 : j.dealBar) == null ? void 0 : N.sellingPlanGid;
      if (H) return i().find((X) => X.id === Ut(H));
    }), Q = d(() => {
      var j;
      return (j = e(L)) != null ? j : e(f);
    }), R = d(() => {
      var j, N, H, X, V;
      return (V = (X = (N = (j = r()) == null ? void 0 : j.pricing.discountedPricesForSellingPlans.find((Z) => {
        var q;
        return Z.sellingPlanId === ((q = e(Q)) == null ? void 0 : q.id);
      })) == null ? void 0 : N.discountedPrice) != null ? X : (H = r()) == null ? void 0 : H.pricing.discountedPrice) != null ? V : 0;
    }), K = d(() => {
      var j, N;
      return (N = (j = r()) == null ? void 0 : j.pricing.discountedPriceWithoutSellingPlan) != null ? N : 0;
    }), C = d(() => {
      var j, N;
      return (N = (j = r()) == null ? void 0 : j.pricing.fullPrice) != null ? N : 0;
    }), ne = d(() => {
      var j, N, H;
      return un({ priceFormatter: a(), product: (j = r()) == null ? void 0 : j.product, totalFullPrice: e(C), totalDiscountedPrice: e(R), quantity: (H = (N = r()) == null ? void 0 : N.quantity) != null ? H : 1, sellingPlan: e(Q), unitQuantity: null });
    }), A = d(() => {
      var j, N, H;
      return un({ priceFormatter: a(), product: (j = r()) == null ? void 0 : j.product, totalFullPrice: e(C), totalDiscountedPrice: e(K), quantity: (H = (N = r()) == null ? void 0 : N.quantity) != null ? H : 1, unitQuantity: null });
    });
    function E(j) {
      se(x, !0), se(_, j, !0), b()(j === "subscribe" ? e(f) : void 0);
    }
    function oe(j) {
      se(f, j, !0), e(_) === "subscribe" && b()(j);
    }
    Fa(() => {
      e(_) === "subscribe" && b()(e(f));
    }), Je(() => {
      if (u()) return se(f, u(), !0), void se(_, "subscribe");
      if (i().length === 0) return void se(_, "one-time");
      i().some((j) => {
        var N;
        return j.id === ((N = e(f)) == null ? void 0 : N.id);
      }) || se(f, i()[0], !0), e(x) || se(_, e(D) ? "subscribe" : "one-time", !0), b()(e(_) === "subscribe" ? e(f) : void 0);
    });
    var J = { get subscriptions() {
      return s();
    }, set subscriptions(j) {
      s(j), k();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(j) {
      i(j), k();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(j) {
      u(j), k();
    }, get hideSellingPlanSelector() {
      return g();
    }, set hideSellingPlanSelector(j = !1) {
      g(j), k();
    }, get onChange() {
      return b();
    }, set onChange(j) {
      b(j), k();
    } }, U = q0();
    let M;
    Dt(U, 20, () => e(w), (j) => j, (j, N) => {
      var H = Ie(), X = pe(H), V = (q) => {
        {
          let W = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(_) === "subscribe" && "kaching-bundles__bar--selected"]);
          Zt(q, { element: "div", get class() {
            return e(W);
          }, onclick: () => E("subscribe"), children: (te, de) => {
            var F = $0(), P = S(F), z = S(P), ae = S(z), T = (Oe) => {
              p(Oe, C0());
            };
            O(ae, (Oe) => {
              s().layout === "vertical" && Oe(T);
            });
            var ee = G(ae, 2), Y = S(ee), le = S(Y), fe = S(le), Be = (Oe) => {
              var Ve = I0();
              Te(S(Ve), () => e(ne)(l()(s().subscribeTitle))), y(Ve), p(Oe, Ve);
            };
            O(fe, (Oe) => {
              s().subscribeTitle && Oe(Be);
            }), y(le);
            var ke = G(le, 2), xe = (Oe) => {
              var Ve = M0();
              Te(S(Ve), () => e(ne)(l()(s().subscribeSubtitle))), y(Ve), p(Oe, Ve);
            };
            O(ke, (Oe) => {
              s().subscribeSubtitle && Oe(xe);
            }), y(Y);
            var ge = G(Y, 2), ce = (Oe) => {
              us(Oe, { get discountedPrice() {
                return e(R);
              }, get fullPrice() {
                return e(C);
              } });
            };
            O(ge, (Oe) => {
              s().showPrices && r() && Oe(ce);
            }), y(ee), y(z);
            var re = G(z, 2), he = (Oe) => {
              {
                let Ve = d(() => e(_) === "subscribe");
                ya(Oe, { get highlights() {
                  return s().highlights;
                }, get isSelected() {
                  return e(Ve);
                }, get replaceLiquid() {
                  return e(ne);
                } });
              }
            };
            O(re, (Oe) => {
              s().highlights && Oe(he);
            });
            var ye = G(re, 2), Ae = (Oe) => {
              var Ve = z0();
              xa(S(Ve), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(f);
              }, onChange: oe }), y(Ve), p(Oe, Ve);
            };
            O(ye, (Oe) => {
              e(_) === "subscribe" && i().length > 1 && e(f) && !g() && Oe(Ae);
            }), y(P), y(F), p(te, F);
          }, $$slots: { default: !0 } });
        }
      }, Z = (q) => {
        {
          let W = d(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(_) === "one-time" && "kaching-bundles__bar--selected"]);
          Zt(q, { element: "div", get class() {
            return e(W);
          }, onclick: () => E("one-time"), children: (te, de) => {
            var F = T0(), P = S(F), z = S(P), ae = S(z), T = (re) => {
              p(re, D0());
            };
            O(ae, (re) => {
              s().layout === "vertical" && re(T);
            });
            var ee = G(ae, 2), Y = S(ee), le = S(Y), fe = S(le), Be = (re) => {
              var he = A0();
              Te(S(he), () => e(A)(l()(s().oneTimeTitle))), y(he), p(re, he);
            };
            O(fe, (re) => {
              s().oneTimeTitle && re(Be);
            }), y(le);
            var ke = G(le, 2), xe = (re) => {
              var he = V0();
              Te(S(he), () => e(A)(l()(s().oneTimeSubtitle))), y(he), p(re, he);
            };
            O(ke, (re) => {
              s().oneTimeSubtitle && re(xe);
            }), y(Y);
            var ge = G(Y, 2), ce = (re) => {
              us(re, { get discountedPrice() {
                return e(K);
              }, get fullPrice() {
                return e(C);
              } });
            };
            O(ge, (re) => {
              s().showPrices && r() && re(ce);
            }), y(ee), y(z), y(P), y(F), p(te, F);
          }, $$slots: { default: !0 } });
        }
      };
      O(X, (q) => {
        N === "subscribe" ? q(V) : q(Z, !1);
      }), p(j, H);
    }), y(U), be((j) => {
      M = Lt(U, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, M, j), Tt(U, e(I));
    }, [() => ({ "kaching-bundles__bars--horizontal": s().layout === "horizontal" })]), p(n, U);
    var B = Xe(J);
    return c(), B;
  }
  Qe(Nd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var G0 = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), O0 = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), F0 = $('<div class="kaching-bundles__bar-variants"><!></div>'), L0 = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), j0 = $('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function Qd(n, t) {
    Ke(t, !0);
    const r = () => $e(Ha, "$selectedDealBarStore", l), a = () => $e(b, "$translate", l), [l, o] = vt(), c = m(t, "subscriptions", 7), s = m(t, "sellingPlans", 7), i = m(t, "selectedSellingPlan", 7), u = m(t, "hideSellingPlanSelector", 7, !1), g = m(t, "onChange", 7), b = It(), h = cn();
    let v = De(st(c().subscribeByDefault || !!i())), _ = De(st(i() || s()[0])), f = De(!1);
    const x = d(() => Mo(c())), D = d(() => {
      var E, oe;
      const J = (oe = (E = r()) == null ? void 0 : E.dealBar) == null ? void 0 : oe.sellingPlanGid;
      if (J) return s().find((U) => U.id === Ut(J));
    }), w = d(() => {
      var E;
      return (E = e(D)) != null ? E : e(_);
    }), I = d(() => {
      var E, oe, J, U, M;
      return (M = (U = (oe = (E = r()) == null ? void 0 : E.pricing.discountedPricesForSellingPlans.find((B) => {
        var j;
        return B.sellingPlanId === ((j = e(w)) == null ? void 0 : j.id);
      })) == null ? void 0 : oe.discountedPrice) != null ? U : (J = r()) == null ? void 0 : J.pricing.discountedPrice) != null ? M : 0;
    }), L = d(() => {
      var E, oe;
      return (oe = (E = r()) == null ? void 0 : E.pricing.fullPrice) != null ? oe : 0;
    }), Q = d(() => {
      var E, oe, J;
      return un({ priceFormatter: $e(h, "$formatPrice", l), product: (E = r()) == null ? void 0 : E.product, totalFullPrice: e(L), totalDiscountedPrice: e(I), quantity: (J = (oe = r()) == null ? void 0 : oe.quantity) != null ? J : 1, sellingPlan: e(w), unitQuantity: null });
    });
    function R(E) {
      se(_, E, !0), g()(E);
    }
    Je(() => {
      if (i()) return se(_, i(), !0), void se(v, !0);
      if (s().length === 0) return void se(v, !1);
      e(_) && s().some((E) => E.id === e(_).id) || se(_, s()[0], !0), e(f) || se(v, c().subscribeByDefault, !0), g()(e(v) ? e(_) : void 0);
    }), Fa(() => {
      e(v) && g()(e(_));
    });
    var K = { get subscriptions() {
      return c();
    }, set subscriptions(E) {
      c(E), k();
    }, get sellingPlans() {
      return s();
    }, set sellingPlans(E) {
      s(E), k();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(E) {
      i(E), k();
    }, get hideSellingPlanSelector() {
      return u();
    }, set hideSellingPlanSelector(E = !1) {
      u(E), k();
    }, get onChange() {
      return g();
    }, set onChange(E) {
      g(E), k();
    } }, C = j0(), ne = S(C);
    {
      let E = d(() => ["kaching-bundles__bar", s().length === 0 && "kaching-bundles__bar--disabled"]);
      Zt(ne, { element: "div", get class() {
        return e(E);
      }, role: "checkbox", get "aria-checked"() {
        return e(v);
      }, onclick: function() {
        se(f, !0), se(v, !e(v)), g()(e(v) ? e(_) : void 0);
      }, children: (oe, J) => {
        var U = L0(), M = S(U), B = S(M), j = S(B), N = S(j), H = (Y) => {
          ss(Y);
        };
        O(N, (Y) => {
          e(v) && Y(H);
        }), y(j);
        var X = G(j, 2), V = S(X), Z = S(V), q = S(Z), W = (Y) => {
          var le = G0();
          Te(S(le), () => e(Q)(a()(c().subscribeTitle))), y(le), p(Y, le);
        };
        O(q, (Y) => {
          c().subscribeTitle && Y(W);
        }), y(Z);
        var te = G(Z, 2), de = (Y) => {
          var le = O0();
          Te(S(le), () => e(Q)(a()(c().subscribeSubtitle))), y(le), p(Y, le);
        };
        O(te, (Y) => {
          c().subscribeSubtitle && Y(de);
        }), y(V);
        var F = G(V, 2), P = (Y) => {
          us(Y, { get discountedPrice() {
            return e(I);
          }, get fullPrice() {
            return e(L);
          } });
        };
        O(F, (Y) => {
          c().showPrices && r() && Y(P);
        }), y(X), y(B);
        var z = G(B, 2), ae = (Y) => {
          ya(Y, { get highlights() {
            return c().highlights;
          }, get isSelected() {
            return e(v);
          }, get replaceLiquid() {
            return e(Q);
          } });
        };
        O(z, (Y) => {
          c().highlights && Y(ae);
        });
        var T = G(z, 2), ee = (Y) => {
          var le = F0();
          xa(S(le), { get sellingPlans() {
            return s();
          }, get selectedSellingPlan() {
            return e(_);
          }, onChange: R }), y(le), p(Y, le);
        };
        O(T, (Y) => {
          e(v) && s().length > 1 && e(_) && !u() && Y(ee);
        }), y(M), y(U), p(oe, U);
      }, $$slots: { default: !0 } });
    }
    y(C), be(() => Tt(C, e(x))), p(n, C);
    var A = Xe(K);
    return o(), A;
  }
  function E0(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  Qe(Qd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var R0 = $('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function Wd(n, t) {
    Ke(t, !0);
    const r = () => $e(Ha, "$selectedDealBarStore", l), a = () => $e(h, "$formatPrice", l), [l, o] = vt(), c = m(t, "subscriptions", 7), s = m(t, "sellingPlans", 7), i = m(t, "selectedSellingPlan", 7), u = m(t, "onChange", 7), g = m(t, "onRequestAddToCart", 7), b = It(), h = cn(), v = d(() => Mo(c())), _ = d(() => {
      var J, U;
      const M = (U = (J = r()) == null ? void 0 : J.dealBar) == null ? void 0 : U.sellingPlanGid;
      if (M) return s().find((B) => B.id === Ut(M));
    }), f = d(() => {
      var J, U;
      return (U = (J = e(_)) != null ? J : i()) != null ? U : s()[0];
    }), x = d(() => {
      var J, U, M, B, j;
      return (j = (B = (U = (J = r()) == null ? void 0 : J.pricing.discountedPricesForSellingPlans.find((N) => {
        var H;
        return N.sellingPlanId === ((H = e(f)) == null ? void 0 : H.id);
      })) == null ? void 0 : U.discountedPrice) != null ? B : (M = r()) == null ? void 0 : M.pricing.discountedPrice) != null ? j : 0;
    }), D = d(() => {
      var J, U;
      return (U = (J = r()) == null ? void 0 : J.pricing.discountedPriceWithoutSellingPlan) != null ? U : 0;
    }), w = d(() => {
      var J, U;
      return (U = (J = r()) == null ? void 0 : J.pricing.fullPrice) != null ? U : 0;
    }), I = d(() => {
      var J, U, M;
      return un({ priceFormatter: a(), product: (J = r()) == null ? void 0 : J.product, totalFullPrice: e(w), totalDiscountedPrice: c().subscribeByDefault ? e(D) : e(x), quantity: (M = (U = r()) == null ? void 0 : U.quantity) != null ? M : 1, sellingPlan: c().subscribeByDefault ? void 0 : e(f), unitQuantity: null });
    }), L = d(() => c().subscribeByDefault ? e(D) : e(x)), Q = d(() => {
      const J = c().subscribeByDefault ? c().oneTimeTitle : c().subscribeTitle;
      return J ? e(I)($e(b, "$translate", l)(J)) : "";
    });
    let R, K = !1;
    Je(() => {
      const J = s().length !== 0 && c().subscribeByDefault ? e(f) : void 0;
      K && (J == null ? void 0 : J.id) === R || (R = J == null ? void 0 : J.id, K = !0, u()(J));
    });
    var C = { get subscriptions() {
      return c();
    }, set subscriptions(J) {
      c(J), k();
    }, get sellingPlans() {
      return s();
    }, set sellingPlans(J) {
      s(J), k();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(J) {
      i(J), k();
    }, get onChange() {
      return u();
    }, set onChange(J) {
      u(J), k();
    }, get onRequestAddToCart() {
      return g();
    }, set onRequestAddToCart(J) {
      g(J), k();
    } }, ne = Ie(), A = pe(ne), E = (J) => {
      var U = R0(), M = S(U);
      M.__click = [E0, g, c, f];
      var B = S(M);
      Te(B, () => e(Q));
      var j = G(B), N = (H) => {
        var X = Wn();
        be((V) => ft(X, V), [() => " • " + a()(e(L))]), p(H, X);
      };
      O(j, (H) => {
        c().showPrices && r() && H(N);
      }), y(M), y(U), be(() => Tt(U, e(v))), p(J, U);
    };
    O(A, (J) => {
      s().length > 0 && e(Q) && J(E);
    }), p(n, ne);
    var oe = Xe(C);
    return o(), oe;
  }
  On(["click"]), Qe(Wd, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var N0 = $('<div class="kaching-bundles__block-title"><!></div>'), Q0 = $('<!> <div class="kaching-bundles__subscriptions-wrapper"><!></div>', 1);
  function Ud(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "subscriptions", 7), o = m(t, "sellingPlans", 7), c = m(t, "selectedSellingPlan", 7), s = m(t, "hideSellingPlanSelector", 7, !1), i = m(t, "hideTitle", 7, !1), u = m(t, "onChange", 7), g = m(t, "onRequestAddToCart", 7), b = It(), h = d(() => l().title ? $e(b, "$translate", r)(l().title) : "");
    var v = { get subscriptions() {
      return l();
    }, set subscriptions(R) {
      l(R), k();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(R) {
      o(R), k();
    }, get selectedSellingPlan() {
      return c();
    }, set selectedSellingPlan(R) {
      c(R), k();
    }, get hideSellingPlanSelector() {
      return s();
    }, set hideSellingPlanSelector(R = !1) {
      s(R), k();
    }, get hideTitle() {
      return i();
    }, set hideTitle(R = !1) {
      i(R), k();
    }, get onChange() {
      return u();
    }, set onChange(R) {
      u(R), k();
    }, get onRequestAddToCart() {
      return g();
    }, set onRequestAddToCart(R) {
      g(R), k();
    } }, _ = Q0(), f = pe(_), x = (R) => {
      var K = N0();
      Te(S(K), () => e(h)), y(K), p(R, K);
    };
    O(f, (R) => {
      e(h) && !i() && R(x);
    });
    var D = G(f, 2), w = S(D), I = (R) => {
      Qd(R, { get subscriptions() {
        return l();
      }, get sellingPlans() {
        return o();
      }, get selectedSellingPlan() {
        return c();
      }, get hideSellingPlanSelector() {
        return s();
      }, get onChange() {
        return u();
      } });
    }, L = (R) => {
      var K = Ie(), C = pe(K), ne = (E) => {
        Wd(E, { get subscriptions() {
          return l();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get onChange() {
          return u();
        }, get onRequestAddToCart() {
          return g();
        } });
      }, A = (E) => {
        Nd(E, { get subscriptions() {
          return l();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return c();
        }, get hideSellingPlanSelector() {
          return s();
        }, get onChange() {
          return u();
        } });
      };
      O(C, (E) => {
        l().layout === "link" ? E(ne) : E(A, !1);
      }, !0), p(R, K);
    };
    O(w, (R) => {
      l().layout === "checkbox" ? R(I) : R(L, !1);
    }), y(D), p(n, _);
    var Q = Xe(v);
    return a(), Q;
  }
  Qe(Ud, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, hideTitle: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var W0 = Tn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Hd(n) {
    p(n, W0());
  }
  Qe(Hd, {}, [], [], !0);
  var U0 = $('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), H0 = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), Z0 = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), J0 = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), Y0 = $('<div class="kaching-bundles__progressive-gifts__gift__content"><div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div> <div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div> <!></div>'), K0 = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), X0 = $('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), ek = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), tk = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), nk = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), rk = $('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function Zd(n, t) {
    Ke(t, !0);
    const r = () => $e(w, "$config", o), a = () => $e(f, "$translate", o), l = () => $e(D, "$getMediaImageUrl", o), [o, c] = vt(), s = m(t, "progressiveGifts", 7), i = m(t, "gift", 7), u = m(t, "product", 7), g = m(t, "selectedDealBarIndex", 7), b = m(t, "sellingPlan", 7), h = m(t, "onChange", 7), v = m(t, "onUnlock", 7), _ = m(t, "onSubscribe", 7), f = It(), x = cn(), D = Fn(), w = _n(), I = d(() => i().differentVariantsEnabled), L = d(() => {
      var F;
      return u() ? i().variantGIDs ? i().variantGIDs.map(Ut) : (F = u()) == null ? void 0 : F.variants.map((P) => P.id) : null;
    }), Q = d(() => {
      if (u()) return { ...u(), variants: u().variants.filter((F) => (r().preview || F.availableForSale) && (!e(L) || e(L).includes(F.id))) };
    });
    let R = De(st([]));
    const K = d(() => (function(F, P, z) {
      return F.length > 0 ? F : P != null && P.availableForSale && P.variants.length > 0 ? Array.from({ length: z }, () => P.variants[0].id) : [];
    })(e(R), e(Q), i().quantity)), C = d(() => u() && e(K).length > 0 ? e(K).map((F) => u().variants.find((P) => P.id === F)).filter((F) => F !== void 0) : []), ne = d(() => {
      var F;
      return un({ priceFormatter: $e(x, "$formatPrice", o), product: u(), totalFullPrice: ((F = e(C)) == null ? void 0 : F.reduce((P, z) => {
        var ae;
        return P + ((ae = z == null ? void 0 : z.price) != null ? ae : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: kr(e(C).map((P) => ({ variant: P, quantity: 1 }))) });
    }), A = d(() => e(ne)(a()(i().title))), E = d(() => e(ne)(a()(i().lockedTitle))), oe = d(() => e(ne)(a()(i().label))), J = d(() => e(ne)(a()(i().labelCrossedOut))), U = d(() => g() === null || !_o(i(), g() + 1)), M = d(() => fd(i(), b())), B = d(() => e(U) || e(M));
    function j() {
      e(U) && v()(), e(M) && _()();
    }
    const N = d(() => {
      var F, P, z;
      return i().giftType === "shipping" ? bo : ((P = (F = e(C)) == null ? void 0 : F[0]) == null ? void 0 : P.image) || ((z = u()) == null ? void 0 : z.image);
    }), H = d(() => i().mediaImageGID ? l()(i().mediaImageGID) : e(N)), X = d(() => !s().inheritStyle && s().style && l()(s().style.lockedMediaImageGID));
    Je(() => {
      if (u() && e(C) && !e(B)) {
        const F = Object.values(e(C).reduce((P, z) => (P[z.id] ? P[z.id].quantity += 1 : P[z.id] = { variant: z, quantity: 1 }, P), {}));
        nn(() => h()({ product: u(), variants: F }));
      } else nn(() => h()(void 0));
    }), pr(() => {
      i().productGID;
    }), Je(() => {
      e(B) && e(H) && (new Image().src = e(H));
    });
    const V = d(() => !(i().giftType !== "product" || !u() || u().availableForSale && u().variants.filter((F) => F.availableForSale && (!e(L) || e(L).includes(F.id))).length !== 0));
    var Z = { get progressiveGifts() {
      return s();
    }, set progressiveGifts(F) {
      s(F), k();
    }, get gift() {
      return i();
    }, set gift(F) {
      i(F), k();
    }, get product() {
      return u();
    }, set product(F) {
      u(F), k();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(F) {
      g(F), k();
    }, get sellingPlan() {
      return b();
    }, set sellingPlan(F) {
      b(F), k();
    }, get onChange() {
      return h();
    }, set onChange(F) {
      h(F), k();
    }, get onUnlock() {
      return v();
    }, set onUnlock(F) {
      v(F), k();
    }, get onSubscribe() {
      return _();
    }, set onSubscribe(F) {
      _(F), k();
    } }, q = Ie(), W = pe(q), te = (F) => {
      var P = Ie(), z = pe(P), ae = (T) => {
        var ee = Ie(), Y = pe(ee), le = (Be) => {
          Zt(Be, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", onclick: j, children: (ke, xe) => {
            var ge = Y0(), ce = S(ge), re = S(ce), he = (ie) => {
              var we = U0();
              be(() => Pe(we, "src", e(X))), p(ie, we);
            }, ye = (ie) => {
              Hd(ie);
            };
            O(re, (ie) => {
              e(X) ? ie(he) : ie(ye, !1);
            }), y(ce);
            var Ae = G(ce, 2);
            Te(S(Ae), () => e(E)), y(Ae);
            var Oe = G(Ae, 2), Ve = (ie) => {
              var we = J0(), He = S(we), _e = (Se) => {
                var qe = H0();
                Te(S(qe), () => e(oe)), y(qe), p(Se, qe);
              };
              O(He, (Se) => {
                e(oe) && Se(_e);
              });
              var Me = G(He, 2), Ce = (Se) => {
                var qe = Z0();
                Te(S(qe), () => e(J)), y(qe), p(Se, qe);
              };
              O(Me, (Se) => {
                e(J) && Se(Ce);
              }), y(we), p(ie, we);
            };
            O(Oe, (ie) => {
              (e(oe) || e(J)) && s().showLockedGiftLabels && ie(Ve);
            }), y(ge), p(ke, ge);
          }, $$slots: { default: !0 } });
        }, fe = (Be) => {
          var ke = rk();
          let xe;
          var ge = S(ke), ce = S(ge), re = (_e) => {
            var Me = K0(), Ce = S(Me);
            y(Me), be(() => {
              var Se, qe;
              Pe(Ce, "src", e(H)), Pe(Ce, "alt", (qe = (Se = u()) == null ? void 0 : Se.title) != null ? qe : "");
            }), p(_e, Me);
          };
          O(ce, (_e) => {
            e(H) && _e(re);
          });
          var he = G(ce, 2), ye = S(he), Ae = S(ye), Oe = (_e) => {
            var Me = X0();
            Te(S(Me), () => e(A)), y(Me), p(_e, Me);
          };
          O(Ae, (_e) => {
            e(A) && _e(Oe);
          });
          var Ve = G(Ae, 2), ie = (_e) => {
            var Me = nk(), Ce = S(Me), Se = (it) => {
              var et = ek();
              Te(S(et), () => e(oe)), y(et), p(it, et);
            };
            O(Ce, (it) => {
              e(oe) && it(Se);
            });
            var qe = G(Ce, 2), St = (it) => {
              var et = tk();
              Te(S(et), () => e(J)), y(et), p(it, et);
            };
            O(qe, (it) => {
              e(J) && it(St);
            }), y(Me), p(_e, Me);
          };
          O(Ve, (_e) => {
            (e(oe) || e(J)) && _e(ie);
          }), y(ye);
          var we = G(ye, 2), He = (_e) => {
            var Me = Ie();
            Dt(pe(Me), 17, () => ({ length: e(I) ? i().quantity : 1 }), Mr, (Ce, Se, qe) => {
              var St = Ie(), it = pe(St), et = (lt) => {
                {
                  let wt = d(() => e(I) ? qe + 1 : void 0);
                  Un(lt, { get product() {
                    return e(Q);
                  }, get selectedVariantId() {
                    return e(K)[qe];
                  }, get number() {
                    return e(wt);
                  }, forceDropdown: !0, onChange: (rn) => (function(jt, gt) {
                    e(I) ? se(R, [...e(K).slice(0, gt), jt, ...e(K).slice(gt + 1)], !0) : se(R, Array.from({ length: i().quantity }, () => jt), !0);
                  })(rn, qe) });
                }
              };
              O(it, (lt) => {
                e(K)[qe] !== void 0 && lt(et);
              }), p(Ce, St);
            }), p(_e, Me);
          };
          O(we, (_e) => {
            e(Q) && e(Q).variants.length > 1 && e(K).length > 0 && _e(He);
          }), y(he), y(ge), y(ke), be((_e) => xe = Lt(ke, 1, "kaching-bundles__progressive-gifts__gift", null, xe, _e), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(V) })]), p(Be, ke);
        };
        O(Y, (Be) => {
          e(B) ? Be(le) : Be(fe, !1);
        }), p(T, ee);
      };
      O(z, (T) => {
        var ee;
        (u() && ((ee = e(C)) != null && ee.length || r().preview && e(V)) || i().giftType === "shipping") && T(ae);
      }), p(F, P);
    };
    O(W, (F) => {
      e(B) && s().hideLockedGifts || F(te);
    }), p(n, q);
    var de = Xe(Z);
    return c(), de;
  }
  Qe(Zd, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var ak = $('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), ik = $('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), lk = $('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function Jd(n, t) {
    Ke(t, !0);
    const r = () => $e(f, "$config", l), a = () => $e(_, "$translate", l), [l, o] = vt(), c = m(t, "progressiveGifts", 7), s = m(t, "dealBlock", 7), i = m(t, "otherProducts", 7), u = m(t, "selectedDealBarIndex", 7), g = m(t, "sellingPlan", 7), b = m(t, "onChange", 7), h = m(t, "onUnlock", 7), v = m(t, "onSubscribe", 7), _ = It(), f = _n();
    let x = De(st({}));
    const D = d(() => ((ne) => {
      const { progressiveGifts: A, colors: E, fonts: oe } = ne, J = (A == null ? void 0 : A.inheritStyle) || !(A != null && A.style);
      return bn({ "kaching-bundles-progressive-gifts-title-color": je(A.titleColor), "kaching-bundles-progressive-gifts-title-alignment": A.titleAlignment, "kaching-bundles-progressive-gifts-title-size": A.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": or(A.titleStyle), "kaching-bundles-progressive-gifts-title-style": cr(A.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": je(A.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": A.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": A.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": or(A.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": cr(A.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": J ? void 0 : A.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (J ? ne.cornerRadius : A.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": je(J ? E.progressiveGiftsLabelBackground || E.labelBackground : A.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": je(J ? E.label : A.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (J ? oe.label.size : A.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": je(J ? E.selectedBackground : A.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": je(J ? E.border : A.style.borderColor), "kaching-bundles-progressive-gifts-text-color": je(J ? E.title : A.style.textColor), "kaching-bundles-progressive-gifts-text-size": J ? void 0 : A.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": je(J ? E.background : A.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": je(J ? { ...E.border, alpha: 0.3 * E.border.alpha } : A.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": J ? void 0 : je(A.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": J ? void 0 : A.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": J ? void 0 : je(A.style.lockedIconColor) });
    })(s()));
    function w() {
      const ne = Object.entries(e(x)).map(([A, E]) => ({ id: A, variants: E.variants, product: E.product }));
      b()(ne);
    }
    const I = d(() => c().gifts.flatMap((ne) => {
      const A = ne.giftType === "product" && ne.productGID ? i().find((oe) => oe.id === Ut(ne.productGID)) : void 0;
      if (!r().preview && ne.giftType === "product" && !(A != null && A.availableForSale)) return [];
      const E = A && !r().preview ? _r(A) : A;
      return { gift: ne, product: E };
    }));
    Je(() => {
      const ne = new Set(c().gifts.map((E) => E.id)), A = Object.keys(e(x)).filter((E) => !ne.has(E));
      if (A.length) {
        for (const E of A) delete e(x)[E];
        w();
      }
    });
    var L = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(ne) {
      c(ne), k();
    }, get dealBlock() {
      return s();
    }, set dealBlock(ne) {
      s(ne), k();
    }, get otherProducts() {
      return i();
    }, set otherProducts(ne) {
      i(ne), k();
    }, get selectedDealBarIndex() {
      return u();
    }, set selectedDealBarIndex(ne) {
      u(ne), k();
    }, get sellingPlan() {
      return g();
    }, set sellingPlan(ne) {
      g(ne), k();
    }, get onChange() {
      return b();
    }, set onChange(ne) {
      b(ne), k();
    }, get onUnlock() {
      return h();
    }, set onUnlock(ne) {
      h(ne), k();
    }, get onSubscribe() {
      return v();
    }, set onSubscribe(ne) {
      v(ne), k();
    } }, Q = Ie(), R = pe(Q), K = (ne) => {
      var A = lk(), E = S(A), oe = S(E), J = (N) => {
        var H = ak();
        Te(S(H), () => a()(c().title)), y(H), p(N, H);
      };
      O(oe, (N) => {
        c().title && N(J);
      });
      var U = G(oe, 2), M = (N) => {
        var H = ik();
        Te(S(H), () => a()(c().subtitle)), y(H), p(N, H);
      };
      O(U, (N) => {
        c().subtitle && N(M);
      }), y(E);
      var B = G(E, 2);
      let j;
      Dt(B, 21, () => e(I), ({ gift: N, product: H }) => N.id, (N, H) => {
        let X = () => e(H).gift;
        Zd(N, { get progressiveGifts() {
          return c();
        }, get gift() {
          return X();
        }, get product() {
          return e(H).product;
        }, get selectedDealBarIndex() {
          return u();
        }, get sellingPlan() {
          return g();
        }, onChange: (V) => (function(Z, q) {
          q ? e(x)[Z] = q : delete e(x)[Z], w();
        })(X().id, V), onUnlock: () => h()(X().unlockAtBar - 1), get onSubscribe() {
          return v();
        } });
      }), y(B), y(A), be((N) => {
        Tt(A, e(D)), j = Lt(B, 1, "kaching-bundles__progressive-gifts__gifts", null, j, N);
      }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": c().layout === "vertical" })]), p(ne, A);
    };
    O(R, (ne) => {
      c().gifts.length > 0 && ne(K);
    }), p(n, Q);
    var C = Xe(L);
    return o(), C;
  }
  Qe(Jd, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, sellingPlan: {}, onChange: {}, onUnlock: {}, onSubscribe: {} }, [], [], !0);
  var sk = $('<span class="kaching-bundles__bar-title"><!></span>'), ok = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), ck = $('<div class="kaching-bundles__bar-price"><!></div>'), uk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), dk = $('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), gk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!> <!></div>'), hk = $('<div class="kaching-bundles__bar-variants kaching-bundles__bar-variants--visible"><!></div>'), pk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div>', 1), bk = $("<div><!></div>");
  function Yd(n, t) {
    Ke(t, !0);
    const r = () => $e(f, "$config", o), a = () => $e(v, "$formatPrice", o), l = () => $e(de, "$translate", o), [o, c] = vt(), s = m(t, "checkboxUpsell", 7), i = m(t, "product", 7), u = m(t, "dealBlock", 7), g = m(t, "dealSellingPlan", 7), b = m(t, "dealBarQuantity", 7), h = m(t, "onChange", 7), v = cn(), _ = Fn(), f = _n();
    let x = De(!1), D = De(1), w = De(st({})), I = De(void 0);
    const L = d(() => {
      var ge;
      return (ge = s().preselected) != null && ge;
    }), Q = d(() => {
      var ge;
      return e(x) || !((ge = s().showProductOptionsOnlyWhenSelected) == null || ge);
    });
    Je(() => {
      se(x, e(L), !0);
    }), Je(() => {
      s().matchQuantityWithDealBar && se(D, b(), !0);
    });
    const R = d(() => !!s().variantGIDs), K = d(() => {
      var ge, ce;
      return e(R) && i() ? i().variants.filter((re) => s().variantGIDs.some((he) => Ut(he) === re.id)) : (ce = (ge = i()) == null ? void 0 : ge.variants) != null ? ce : [];
    }), C = d(() => e(D) > 1 && e(K).length > 1), ne = d(() => (function(ge, ce) {
      if (ge.variantGIDs)
        return ge.variantGIDs.length === 0 ? void 0 : Ut(ge.variantGIDs[0]);
      if (ce != null && ce.availableForSale && ce.variants.length > 0) return ce.variants[0].id;
    })(s(), i())), A = d(() => {
      if (e(ne) === void 0) return [];
      const ge = [];
      for (let ce = 0; ce < e(D); ce++) {
        const re = e(w)[ce];
        re !== void 0 ? ge.push(re) : ge.push(e(ne));
      }
      return ge;
    }), E = d(() => (function(ge, ce) {
      if (!ce) return [];
      const re = {};
      for (const he of ge) {
        const ye = re[he];
        if (ye) {
          ye.quantity += 1;
          continue;
        }
        const Ae = ce.variants.find((Oe) => Oe.id === he);
        Ae && (re[he] = { variant: Ae, quantity: 1 });
      }
      return Object.values(re);
    })(e(A), i())), oe = d(() => {
      var ge;
      return (ge = e(E)[0]) == null ? void 0 : ge.variant;
    }), J = d(() => {
      var ge;
      return (ge = s().subscriptionEnabled) == null || ge;
    }), U = d(() => {
      var ge;
      return (ge = s().subscriptionType) != null ? ge : "deal";
    }), M = d(() => e(J) && e(U) === "always" && i() && e(oe) ? rl(i(), [e(oe)]) : []), B = d(() => e(M).find((ge) => ge.id === e(I)) || e(M)[0]);
    Je(() => {
      var ge;
      e(M).some((ce) => {
        var re;
        return ce.id === ((re = g()) == null ? void 0 : re.id);
      }) && se(I, (ge = g()) == null ? void 0 : ge.id, !0);
    });
    const j = d(() => {
      if (i() && e(oe) && e(J))
        return e(U) === "deal" ? g() ? er(i(), e(oe), g()) : void 0 : e(B);
    }), N = d(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function H(ge) {
      return ra({ discountType: s().discountType, discountValue: s().discountValue, discountQuantity: 1, variantQuantities: e(E), currencyRate: r().currencyRate, priceRounding: e(N), sellingPlan: ge });
    }
    let X = d(() => H(e(j))), V = d(() => e(E).reduce((ge, { variant: ce, quantity: re }) => ge + Math.max(ce.price, ce.compareAtPrice || 0) * re, 0));
    const Z = d(() => i() && e(oe) ? er(i(), e(oe), void 0) : void 0), q = d(() => e(J) && e(U) === "always" ? e(X) : H(e(Z))), W = d(() => !i() || !e(oe) ? [] : rl(i(), [e(oe)]).map((ge) => {
      let ce;
      return ce = e(J) ? e(U) === "always" ? e(B) : ge : e(Z), { sellingPlanId: ge.id, discountedPrice: H(ce) };
    })), te = d(() => un({ priceFormatter: a(), product: i(), totalFullPrice: e(V), totalDiscountedPrice: e(X), quantity: e(D), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: kr(e(E)), sellingPlan: e(j) })), de = It();
    let F = d(() => e(te)(l()(s().title))), P = d(() => e(te)(l()(s().subtitle))), z = d(() => e(V) && e(V) > e(X));
    const ae = d(() => $e(_, "$getMediaImageUrl", o)(s().mediaImageGID)), T = d(() => ((ge, ce) => {
      const re = ls(ge);
      if (re.length > 0) return re.filter((ye) => ye.attachedTo.type === "checkboxUpsell" && ye.attachedTo.upsellId === ce.id);
      if (ge.badgesEnabled === !1) return [];
      const he = Ku(ce);
      return he ? [he] : [];
    })(u(), { id: s().id, badgeStyle: s().badgeStyle, badgeText: s().badgeText, badgeImageGID: s().badgeImageGID }).map((ge) => ka(ge, l(), e(te)))), ee = d(() => ma(e(T)));
    function Y() {
      se(x, !e(x));
    }
    function le(ge, ce) {
      se(w, { ...e(w), [ge]: ce }, !0);
    }
    Je(() => {
      if (i() && e(E).length > 0 && e(x)) {
        const ge = e(j);
        nn(() => h()({ product: i(), variants: e(E), sellingPlan: ge, pricing: { discountedPrice: e(X), fullPrice: e(V), discountedPriceWithoutSellingPlan: e(q), discountedPricesForSellingPlans: e(W) } }));
      } else nn(() => h()(void 0));
    });
    var fe = { get checkboxUpsell() {
      return s();
    }, set checkboxUpsell(ge) {
      s(ge), k();
    }, get product() {
      return i();
    }, set product(ge) {
      i(ge), k();
    }, get dealBlock() {
      return u();
    }, set dealBlock(ge) {
      u(ge), k();
    }, get dealSellingPlan() {
      return g();
    }, set dealSellingPlan(ge) {
      g(ge), k();
    }, get dealBarQuantity() {
      return b();
    }, set dealBarQuantity(ge) {
      b(ge), k();
    }, get onChange() {
      return h();
    }, set onChange(ge) {
      h(ge), k();
    } }, Be = bk();
    let ke;
    Wa(S(Be), { element: "div", get borderHost() {
      return e(ee);
    }, children: (ge, ce) => {
      var re = pk(), he = pe(re);
      Dt(he, 17, () => e(T), (Me) => Me.id, (Me, Ce) => {
        aa(Me, { get badge() {
          return e(Ce);
        }, blockLayout: "vertical" });
      });
      var ye = G(he, 2), Ae = S(ye);
      Zt(Ae, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
        return e(x);
      }, onclick: Y, children: (Me, Ce) => {
        var Se = dk(), qe = pe(Se);
        let St;
        var it = S(qe), et = (Ee) => {
          ss(Ee);
        };
        O(it, (Ee) => {
          e(x) && Ee(et);
        }), y(qe);
        var lt = G(qe, 2), wt = G(lt, 2), rn = S(wt), jt = S(rn);
        at(S(jt), () => e(F), (Ee) => {
          var tt = sk();
          Te(S(tt), () => e(F)), y(tt), p(Ee, tt);
        }), y(jt);
        var gt = G(jt, 2), ze = (Ee) => {
          var tt = Ie();
          at(pe(tt), () => e(P), (Ge) => {
            var Ne = ok();
            Te(S(Ne), () => e(P)), y(Ne), p(Ge, Ne);
          }), p(Ee, tt);
        };
        O(gt, (Ee) => {
          e(P) && Ee(ze);
        }), y(rn), y(wt);
        var bt = G(wt, 2), Ye = S(bt);
        at(Ye, () => e(X), (Ee) => {
          var tt = ck();
          Te(S(tt), () => a()(e(X))), y(tt), be((Ge) => Pe(tt, "data-a11y-label", Ge), [() => l()("system.price")]), p(Ee, tt);
        });
        var ve = G(Ye, 2), We = (Ee) => {
          var tt = Ie();
          at(pe(tt), () => e(V), (Ge) => {
            var Ne = uk();
            Te(S(Ne), () => a()(e(V))), y(Ne), be((ot) => Pe(Ne, "data-a11y-label", ot), [() => l()("system.original_price")]), p(Ge, Ne);
          }), p(Ee, tt);
        };
        O(ve, (Ee) => {
          e(z) && Ee(We);
        }), y(bt), be((Ee) => {
          var tt, Ge, Ne;
          St = Lt(qe, 1, "kaching-bundles__checkbox-upsells__checkbox", null, St, Ee), Pe(lt, "src", e(ae) || ((tt = e(oe)) == null ? void 0 : tt.image) || ((Ge = i()) == null ? void 0 : Ge.image)), Pe(lt, "alt", (Ne = i()) == null ? void 0 : Ne.title);
        }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(x) })]), p(Me, Se);
      }, $$slots: { default: !0 } });
      var Oe = G(Ae, 2), Ve = (Me) => {
        var Ce = gk(), Se = S(Ce);
        {
          let et = d(() => ({ ...i(), variants: e(K) }));
          na(Se, { get product() {
            return e(et);
          } });
        }
        var qe = G(Se, 2), St = (et) => {
          var lt = Ie();
          Dt(pe(lt), 17, () => ({ length: e(D) }), Mr, (wt, rn, jt) => {
            {
              let gt = d(() => ({ ...i(), variants: e(K) })), ze = d(() => e(D) > 1 ? jt + 1 : void 0);
              Un(wt, { get product() {
                return e(gt);
              }, get selectedVariantId() {
                return e(A)[jt];
              }, get number() {
                return e(ze);
              }, onChange: (bt) => le(jt, bt) });
            }
          }), p(et, lt);
        }, it = (et) => {
          {
            let lt = d(() => ({ ...i(), variants: e(K) }));
            Un(et, { get product() {
              return e(lt);
            }, get selectedVariantId() {
              return e(A)[0];
            }, onChange: (wt) => le(0, wt) });
          }
        };
        O(qe, (et) => {
          e(C) ? et(St) : et(it, !1);
        }), y(Ce), p(Me, Ce);
      };
      O(Oe, (Me) => {
        e(Q) && e(K).length > 1 && e(A).length > 0 && Me(Ve);
      });
      var ie = G(Oe, 2), we = (Me) => {
        var Ce = hk();
        xa(S(Ce), { get sellingPlans() {
          return e(M);
        }, get selectedSellingPlan() {
          return e(B);
        }, onChange: (Se) => se(I, Se.id, !0) }), y(Ce), p(Me, Ce);
      };
      O(ie, (Me) => {
        e(Q) && e(M).length > 1 && e(B) && Me(we);
      });
      var He = G(ie, 2), _e = (Me) => {
        ul(Me, { get value() {
          return e(D);
        }, min: 1, onChange: (Ce) => se(D, Ce, !0) });
      };
      O(He, (Me) => {
        e(Q) && s().quantitySelector && Me(_e);
      }), y(ye), p(ge, re);
    }, $$slots: { default: !0 } }), y(Be), be((ge) => ke = Lt(Be, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, ke, ge), [() => {
      var ge;
      return { "kaching-bundles__bar--selected": e(x), "kaching-bundles__bar--disabled": r().preview && !((ge = i()) != null && ge.availableForSale) };
    }]), p(n, Be);
    var xe = Xe(fe);
    return c(), xe;
  }
  Qe(Yd, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var fk = $('<div class="kaching-bundles__block-title"><!></div>'), vk = $('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function Kd(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "checkboxUpsells", 7), o = m(t, "dealBlock", 7), c = m(t, "otherProducts", 7), s = m(t, "complementaryProducts", 7), i = m(t, "dealSellingPlan", 7), u = m(t, "dealBarQuantity", 7), g = m(t, "onChange", 7), b = _n(), h = It(), v = d(() => l().title ? $e(h, "$translate", r)(l().title) : "");
    let _ = De(st({}));
    const f = d(() => s().map(_r)), x = Math.floor(1e3 * Math.random()), D = d(() => l().upsells.flatMap((C, ne) => {
      if (C.productSource === "complementary") {
        const oe = e(f)[(ne + x) % (e(f).length || 1)];
        return oe ? { upsell: C, product: oe } : [];
      }
      const A = C.productGID ? c().find((oe) => oe.id === Ut(C.productGID)) : void 0;
      if (!$e(b, "$config", r).preview && !(A != null && A.availableForSale)) return [];
      const E = A && _r(A);
      return { upsell: C, product: E };
    }));
    var w = { get checkboxUpsells() {
      return l();
    }, set checkboxUpsells(C) {
      l(C), k();
    }, get dealBlock() {
      return o();
    }, set dealBlock(C) {
      o(C), k();
    }, get otherProducts() {
      return c();
    }, set otherProducts(C) {
      c(C), k();
    }, get complementaryProducts() {
      return s();
    }, set complementaryProducts(C) {
      s(C), k();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(C) {
      i(C), k();
    }, get dealBarQuantity() {
      return u();
    }, set dealBarQuantity(C) {
      u(C), k();
    }, get onChange() {
      return g();
    }, set onChange(C) {
      g(C), k();
    } }, I = vk(), L = S(I), Q = (C) => {
      var ne = fk();
      Te(S(ne), () => e(v)), y(ne), p(C, ne);
    };
    O(L, (C) => {
      e(v) && C(Q);
    });
    var R = G(L, 2);
    Dt(R, 21, () => e(D), ({ upsell: C, product: ne }) => C.id, (C, ne) => {
      let A = () => e(ne).upsell;
      Yd(C, { get checkboxUpsell() {
        return A();
      }, get product() {
        return e(ne).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return u();
      }, onChange: (E) => (function(oe, J) {
        var U;
        J ? e(_)[oe] = J : delete e(_)[oe];
        const M = Object.entries(e(_)).flatMap(([V, Z]) => Z.variants.map(({ variant: q, quantity: W }) => ({ id: V, variant: q, product: Z.product, quantity: W, sellingPlan: Z.sellingPlan })));
        let B = 0, j = 0, N = 0;
        const H = /* @__PURE__ */ new Map();
        for (const V of Object.values(e(_))) {
          B += V.pricing.discountedPrice, j += V.pricing.fullPrice, N += V.pricing.discountedPriceWithoutSellingPlan;
          for (const Z of V.pricing.discountedPricesForSellingPlans) H.set(Z.sellingPlanId, ((U = H.get(Z.sellingPlanId)) != null ? U : 0) + Z.discountedPrice);
        }
        const X = Array.from(H, ([V, Z]) => ({ sellingPlanId: V, discountedPrice: Z }));
        g()(M, { discountedPrice: B, fullPrice: j, discountedPriceWithoutSellingPlan: N, discountedPricesForSellingPlans: X });
      })(A().id, E) });
    }), y(R), y(I), p(n, I);
    var K = Xe(w);
    return a(), K;
  }
  Qe(Kd, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var _k = $('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function Xd(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "timer", 7), o = It(), c = d(() => ((Q) => {
      const { textColor: R, backgroundColor: K, titleAlignment: C, titleStyle: ne, titleSize: A } = Q;
      return bn({ "kaching-bundles-timer-background-color": je(K), "kaching-bundles-timer-text-color": je(R), "kaching-bundles-timer-title-alignment": C, "kaching-bundles-timer-title-font-weight": ne ? or(ne) : null, "kaching-bundles-timer-title-font-style": ne ? cr(ne) : null, "kaching-bundles-timer-title-size": A ? A + "px" : null });
    })(l()));
    function s() {
      const Q = new mo(), R = new mo(Q);
      return R.setHours(24, 0, 0, 0), Math.floor((R.getTime() - Q.getTime()) / 1e3);
    }
    function i() {
      if (!l().endTimestamp) return 0;
      const Q = new mo();
      return Math.max(0, Math.floor((l().endTimestamp - Q.getTime()) / 1e3));
    }
    function u() {
      return l().type === "midnight" ? s() : l().type === "custom" ? i() : 60 * l().minutes;
    }
    let g = De(st(u())), b = d(() => l().type !== "custom" || e(g) > 0);
    Je(() => {
      se(g, u(), !0);
    }), Je(() => {
      const Q = window.setInterval(() => {
        l().type === "midnight" ? se(g, s(), !0) : l().type === "custom" ? se(g, i(), !0) : se(g, e(g) <= 1 ? u() : e(g) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(Q);
    });
    const h = d(() => $e(o, "$translate", r)(l().title)), v = d(() => (function(Q) {
      const R = Math.floor(Q / 86400), K = Math.floor(Q % 86400 / 3600), C = Math.floor(Q % 3600 / 60), ne = Q % 60, A = (E) => E.toString().padStart(2, "0");
      return l().type === "custom" && R > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(R)} ${A(K)}:${A(C)}:${A(ne)}` : K > 0 ? `${A(K)}:${A(C)}:${A(ne)}` : `${A(C)}:${A(ne)}`;
    })(e(g))), _ = d(() => e(h).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let f = De(void 0);
    Je(() => {
      !e(f) || !e(_) || e(f).querySelectorAll(".kaching-bundles__timer-value").forEach((Q) => {
        Q.textContent = ` ${e(v)} `;
      });
    });
    var x = { get timer() {
      return l();
    }, set timer(Q) {
      l(Q), k();
    } }, D = Ie(), w = pe(D), I = (Q) => {
      var R = _k(), K = S(R);
      Te(S(K), () => e(_)), y(K), bi(K, (C) => se(f, C), () => e(f)), y(R), be(() => Tt(R, e(c))), p(Q, R);
    };
    O(w, (Q) => {
      e(b) && Q(I);
    }), p(n, D);
    var L = Xe(x);
    return a(), L;
  }
  function eg(n, t) {
    Ke(t, !0);
    const r = m(t, "dealBlockId", 7), a = m(t, "shopCustomStyles", 7), l = m(t, "customStyles", 7), o = d(() => {
      const g = [a(), l()].filter((b) => b == null ? void 0 : b.trim()).join(`
`);
      return g ? `
      <style id="kaching-bundles-custom-styles-${r()}">
        kaching-bundles-block[deal-block-id="${r()}"] {
          ${g}
        }
      </style>
    ` : "";
    });
    var c = { get dealBlockId() {
      return r();
    }, set dealBlockId(g) {
      r(g), k();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(g) {
      a(g), k();
    }, get customStyles() {
      return l();
    }, set customStyles(g) {
      l(g), k();
    } }, s = Ie(), i = pe(s), u = (g) => {
      var b = Ie();
      Te(pe(b), () => e(o)), p(g, b);
    };
    return O(i, (g) => {
      e(o) && g(u);
    }), p(n, s), Xe(c);
  }
  Qe(Xd, { timer: {} }, [], [], !0), Qe(eg, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function kk(n, t = 4) {
    const r = (function(a) {
      let l = 2166136261;
      for (let o = 0; o < a.length; o++) l ^= a.charCodeAt(o), l = Math.imul(l, 16777619) >>> 0;
      return l >>> 0;
    })(n);
    return (function(a, l) {
      let o = "";
      for (let c = 0; c < l; c++) o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[a % 62] + o, a = Math.floor(a / 62);
      return o;
    })(r, t);
  }
  function tg(n) {
    var t, r, a, l, o;
    const { dealBlock: c, product: s, pageProductId: i = s.id, selectedDealBarId: u, selectedVariantQuantities: g, selectedBundleProducts: b, selectedCollectionBreaksProducts: h, selectedFreeGifts: v, selectedProgressiveGifts: _, selectedCheckboxUpsells: f, selectedUpsells: x, selectedPersonalisations: D, selectedSellingPlan: w, dealBarSellingPlan: I, nativeBundleProductIds: L } = n, Q = (function(T) {
      var ee;
      const { product: Y, selectedVariantQuantities: le, selectedBundleProducts: fe, selectedCollectionBreaksProducts: Be, selectedFreeGifts: ke, selectedProgressiveGifts: xe, selectedCheckboxUpsells: ge, selectedUpsells: ce, selectedSellingPlan: re, dealBarSellingPlan: he, selectedDealBarId: ye, dealBlock: Ae, bundleNonce: Oe } = T, Ve = fe.length > 0 || Be.length > 0 || ke.length > 0 || xe.length > 0 || ce.length > 0, ie = ke.length > 0 || xe.length > 0 || ce.length > 0, we = ((ee = Ae.dealBars.find((Me) => Me.id === ye)) == null ? void 0 : ee.dealBarType) === "mix-and-match", He = ie || we, _e = JSON.stringify([Ve ? le.map(({ variant: Me, quantity: Ce }) => ({ variantId: Me.id, quantity: Ce })) : Y.id, fe.map(({ id: Me, variant: Ce, quantity: Se }) => ({ id: Me, variantId: Ce.id, quantity: Se })), Be.map(({ variant: Me, quantity: Ce }) => ({ variantId: Me.id, quantity: Ce })), ke.map(({ id: Me, variant: Ce, quantity: Se }) => ({ id: Me, variantId: Ce.id, quantity: Se })), xe.map(({ id: Me, variants: Ce }) => Ce.map((Se) => ({ id: Me, variantId: Se.variant.id, quantity: Se.quantity })).flat()).flat(), ge.map(({ id: Me, variant: Ce }) => ({ id: Me, variantId: Ce.id })), ce.map(({ id: Me, variant: Ce, quantity: Se }) => ({ id: Me, variantId: Ce.id, quantity: Se })), re == null ? void 0 : re.id, he == null ? void 0 : he.id, ye, ...He ? [Oe] : []]);
      return kk(_e);
    })(n), R = c.dealBars.find((T) => T.id === u);
    let K = !1;
    R && (!R.dealBarType || R.dealBarType === pt.QuantityBreak || R.dealBarType === pt.Bxgy) && c.dealBars.filter((T) => !T.dealBarType || T.dealBarType === pt.QuantityBreak || T.dealBarType === pt.Bxgy).filter((T) => rg(T) === rg(R) && T.id !== u).length > 0 && (K = !0);
    const C = I != null ? I : w, ne = (R == null ? void 0 : R.dealBarType) === pt.Bxgy, A = g.some(({ variant: T }) => T.sellingPlans.length > 0), E = ne && (A || n.splitBxgy), oe = c.dealBars.some((T) => (T.freeGifts || []).filter((ee) => ee.productGID).length > 0), J = !(!c.progressiveGiftsEnabled || !c.progressiveGifts) && c.progressiveGifts.gifts.some((T) => T.giftType === "product"), U = c.dealBars.some((T) => (T.upsells || []).length > 0), M = c.nanoId || c.id, B = c.abTestVariantNumber ? ro(c.abTestVariantNumber) : void 0, j = (R == null ? void 0 : R.dealBarType) === pt.Sku || (R == null ? void 0 : R.dealBarType) === pt.Bundle || (R == null ? void 0 : R.dealBarType) === pt.MixAndMatch || K || E, N = { deal: M, pp: i, main: !0 };
    c.marketId && (N.market = c.marketId), c.versionId && (N.v = c.versionId), j ? (N.id = Q, N.bar = u) : (ne || v.length > 0 || _.length > 0 || f.length > 0 || x.length > 0 || h.length > 0 || D.length > 0 || oe || J || U) && (N.id = Q), !N.bar && u && (N.bid = u), B && (N.ab = B);
    const H = { id: Q, deal: M, bar: u };
    c.versionId && (H.v = c.versionId), B && (H.ab = B);
    const X = (R == null ? void 0 : R.dealBarType) === pt.MixAndMatch ? R.bundleProducts.length : void 0, V = [];
    let Z = g, q = [];
    if (E && h.length === 0) {
      const { buy: T, get: ee } = ig(g, R.getQuantity);
      Z = T, q = ee;
    }
    for (const { variant: T, quantity: ee } of Z) {
      const Y = { ...N };
      X && (Y.mixAndMatchItems = X);
      const le = er(s, T, C);
      le != null && le.priceAdjustment && R && ag(R) && (Y.sellingPlan = { id: le.id, priceAdjustment: le.priceAdjustment });
      const fe = { id: T.id, quantity: ee, properties: { __kaching_bundles: JSON.stringify(Y) } };
      le && (fe.selling_plan = le.id), V.push(fe);
    }
    const W = !n.disableNestedCartLines && Z.length > 0 && !ng(s, L) && (R == null ? void 0 : R.dealBarType) !== pt.MixAndMatch ? Z[0].variant.id : void 0;
    for (const { variant: T, quantity: ee } of q) {
      const Y = { ...H, main: !0, bxgy: !0 }, le = er(s, T, C);
      le != null && le.priceAdjustment && (R == null ? void 0 : R.dealBarType) === pt.Bxgy && R.getDiscountType === "specific" && (Y.sellingPlan = { id: le.id, priceAdjustment: le.priceAdjustment });
      const fe = { id: T.id, quantity: ee, properties: { __kaching_bundles: JSON.stringify(Y) } };
      Ci(fe, W, s, L), le && (fe.selling_plan = le.id), V.push(fe);
    }
    for (const T of b) {
      const ee = { ...H, bundleProduct: T.id };
      X && (ee.mixAndMatchItems = X);
      const Y = er(T.product, T.variant, C);
      Y != null && Y.priceAdjustment && (R == null ? void 0 : R.dealBarType) === pt.Bundle && ((t = R == null ? void 0 : R.bundleProducts.find((fe) => fe.id === T.id)) == null ? void 0 : t.discountType) === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const le = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Ci(le, W, T.product, L), Y && (le.selling_plan = Y.id), V.push(le);
    }
    let te = h, de = [];
    if (E && h.length > 0) {
      const { buy: T, get: ee } = ig(h, R.getQuantity);
      te = T, de = ee;
    }
    const F = ((r = c.collectionBreaks) == null ? void 0 : r.visibility) === "deal-products";
    for (const T of te) {
      if (F) {
        const fe = V.find((Be) => Be.id === T.variant.id);
        if (fe) {
          fe.quantity += T.quantity;
          continue;
        }
      }
      const ee = { ...H, collectionBreaksProduct: !0 };
      j || delete ee.bar;
      const Y = er(T.product, T.variant, C);
      Y != null && Y.priceAdjustment && R && ag(R) && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const le = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Y && (le.selling_plan = Y.id), V.push(le);
    }
    for (const T of de) {
      const ee = { ...H, collectionBreaksProduct: !0 };
      j || delete ee.bar, ee.bxgy = !0;
      const Y = er(T.product, T.variant, C);
      Y != null && Y.priceAdjustment && (R == null ? void 0 : R.dealBarType) === pt.Bxgy && R.getDiscountType === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const le = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Y && (le.selling_plan = Y.id), V.push(le);
    }
    for (const T of v) {
      if (T.applyOnlyForSubscriptions && !C) continue;
      const ee = { ...H, gift: T.id };
      delete ee.bar;
      const Y = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Ci(Y, W, T.product, L);
      const le = er(T.product, T.variant, C);
      le && (Y.selling_plan = le.id), V.push(Y);
    }
    for (const T of _) {
      const ee = { ...H, gift: T.id };
      delete ee.bar;
      for (const Y of T.variants) {
        const le = { id: Y.variant.id, quantity: Y.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
        Ci(le, W, T.product, L);
        const fe = er(T.product, Y.variant, C);
        fe && (le.selling_plan = fe.id), V.push(le);
      }
    }
    for (const T of f) {
      const ee = { ...H, checkboxUpsell: T.id };
      delete ee.bar;
      const Y = T.sellingPlan, le = (a = c.checkboxUpsells) == null ? void 0 : a.upsells.find((Be) => Be.id === T.id);
      Y != null && Y.priceAdjustment && (le == null ? void 0 : le.discountType) === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const fe = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Ci(fe, W, T.product, L), Y && (fe.selling_plan = Y.id), V.push(fe);
    }
    for (const T of x) {
      const ee = { ...H, upsell: T.id };
      delete ee.bar;
      const Y = T.sellingPlan;
      Y != null && Y.priceAdjustment && ((o = (l = R == null ? void 0 : R.upsells) == null ? void 0 : l.find((fe) => fe.id === T.id)) == null ? void 0 : o.discountType) === "specific" && (ee.sellingPlan = { id: Y.id, priceAdjustment: Y.priceAdjustment });
      const le = { id: T.variant.id, quantity: T.quantity, properties: { __kaching_bundles: JSON.stringify(ee) } };
      Ci(le, W, T.product, L), Y && (le.selling_plan = Y.id), V.push(le);
    }
    const P = [];
    for (const { variant: T, quantity: ee } of Z) for (let Y = 0; Y < ee; Y++) P.push(T.id);
    for (const T of D) {
      const ee = { ...H, personalisation: T.id };
      delete ee.bar;
      const Y = { id: T.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(ee), [T.valueLabel]: T.text } }, le = P[T.productIndex];
      le && !n.disableNestedCartLines && (Y.parent_id = le), V.push(Y);
    }
    const z = V.filter((T) => !T.parent_id), ae = V.filter((T) => T.parent_id);
    return [...z.reverse(), ...ae];
  }
  function ng(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function Ci(n, t, r, a) {
    t && t !== n.id && (ng(r, a) || (n.parent_id = t));
  }
  function rg(n) {
    switch (n.dealBarType) {
      case void 0:
      case pt.QuantityBreak:
        return Number(n.quantity);
      case pt.Bxgy:
        return Number(n.buyQuantity) + Number(n.getQuantity);
      case pt.Bundle:
        return n.bundleProducts[0].quantity;
      case pt.MixAndMatch:
      case pt.Sku:
        return 1;
    }
  }
  function ag(n) {
    switch (n.dealBarType) {
      case void 0:
      case pt.QuantityBreak:
        return n.discountType === "specific";
      case pt.Bundle:
        return n.bundleProducts[0].discountType === "specific";
      case pt.Bxgy:
        return n.buyDiscountType === "specific";
      case pt.MixAndMatch:
        return n.discountType === "specific";
      case pt.Sku:
        return !1;
    }
  }
  function ig(n, t) {
    const r = [...n].sort((c, s) => c.variant.price - s.variant.price), a = [], l = [];
    let o = t;
    for (const c of r) {
      const s = Math.min(o, c.quantity), i = c.quantity - s;
      s > 0 && l.push({ ...c, quantity: s }), i > 0 && a.push({ ...c, quantity: i }), o -= s;
    }
    return { buy: a, get: l };
  }
  function mk(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var xk = $('<img class="kaching-bundles__bar-image" alt=""/>'), yk = $('<div class="kaching-bundles__bar-radio"></div>'), wk = $('<span class="kaching-bundles__bar-title"><!></span>'), Pk = $('<span class="kaching-bundles__bar-label"><!></span>'), Sk = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Bk = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Ck = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), Ik = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Mk = $('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), zk = $('<!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!>', 1), $k = $('<div><input type="radio"/> <!> <!></div>');
  function lg(n, t) {
    Ke(t, !0);
    const r = () => $e(Q, "$formatPrice", l), a = () => $e(L, "$translate", l), [l, o] = vt();
    let c = m(t, "dealBlock", 7), s = m(t, "dealBar", 7), i = m(t, "otherProducts", 23, () => []), u = m(t, "complementaryProducts", 23, () => []), g = m(t, "selectedDealBarIndex", 7, null), b = m(t, "componentId", 7), h = m(t, "selected", 7, !1), v = m(t, "globalSellingPlan", 7, void 0), _ = m(t, "onProgressiveGiftsChange", 7), f = m(t, "onDealBarSelect", 7), x = m(t, "onDealBarDeselect", 7), D = m(t, "onVariantsChange", 7), w = m(t, "onPersonalisationsChange", 7), I = m(t, "personalisationInitialValues", 23, () => []);
    const L = It(), Q = cn(), R = Fn();
    let K = De(st([])), C = De(st([])), ne = De(st([])), A = !1;
    const E = d(() => s().productGID ? i().find((ie) => ie.id === Ut(s().productGID)) : void 0);
    let oe = De(void 0);
    const J = d(() => (function(ie, we, He) {
      if (ie !== void 0 && He && He.variants.some((_e) => _e.id === ie))
        return ie;
      if (we.variantGID) return Ut(we.variantGID);
      if (He && He.variants.length > 0) return He.variants[0].id;
    })(e(oe), s(), e(E))), U = d(() => e(J) && e(E) ? e(E).variants.find((ie) => ie.id === e(J)) : void 0), M = d(() => e(U) ? [{ variant: e(U), quantity: 1 }] : []);
    let B = De(void 0);
    const j = d(() => e(E) && e(U) ? rl(e(E), [e(U)]) : []), N = d(() => {
      var ie, we;
      return (s().sellingPlanEnabled || c().subscriptionsEnabled && ((ie = c().subscriptions) == null ? void 0 : ie.layout) === "link" && ((we = c().subscriptions) == null ? void 0 : we.subscribeByDefault)) && (!c().subscriptionsEnabled || !!v());
    }), H = d(() => e(N) ? so(s(), e(j), e(B)) : void 0), X = d(() => {
      var ie;
      return (ie = e(H)) != null ? ie : e(E) && e(U) ? er(e(E), e(U), v()) : void 0;
    }), V = d(() => e(U) ? nl(e(U), e(X)) : 0), Z = d(() => e(U) ? (function(ie, we) {
      return ie.useProductCompareAtPrice && we.compareAtPrice ? Math.max(we.price, we.compareAtPrice) : we.price;
    })(c(), e(U)) : 0), q = d(() => ll(e(Z), e(K), e(C))), W = d(() => e(q) > e(V)), te = d(() => un({ priceFormatter: r(), product: e(E), dealBar: s(), totalFullPrice: e(Z), totalCompareAtPrice: e(q), totalDiscountedPrice: e(V), quantity: 1, unitQuantity: kr(e(M)), sellingPlan: e(X) })), de = d(() => e(te)(a()(s().title))), F = d(() => e(te)(a()(s().subtitle))), P = d(() => e(te)(a()(s().label))), z = d(() => al(c(), s()).map((ie) => ka(ie, a(), e(te)))), ae = d(() => ma(e(z))), T = d(() => `${s().id}_${b()}`), ee = d(() => $e(R, "$getMediaImageUrl", l)(s().mediaImageGID) || sl), Y = _n(), le = d(() => e(E) && e(E).variants.length > 1 && !s().variantGID && h()), fe = d(() => e(E) && $e(Y, "$config", l).featureFlags.variant_images && new Set(e(E).variants.map((ie) => ie.image).filter((ie) => ie)).size > 1), Be = d(() => s().showAsSoldOutEnabled && s().showAsSoldOut ? cl(s().showAsSoldOut) : "");
    function ke(ie) {
      h() && (ie.preventDefault(), ie.stopPropagation(), x()());
    }
    function xe(ie) {
      se(oe, ie, !0);
    }
    Je(() => {
      !h() || !e(U) && e(E) || (e(K), e(ne), e(C), e(J), e(X), nn(() => {
        A || (A = !0, f()({ dealBarId: s().id, preselected: !0 })), (function() {
          const ie = e(V) + e(ne).reduce((Se, qe) => Se + qe.discountedPrice, 0), we = e(K).reduce((Se, qe) => qe.showPrice ? Se + qe.fullPrice : Se, 0) + e(C).reduce((Se, qe) => Se + qe.fullPrice * qe.quantity, 0), He = e(Z) + e(ne).reduce((Se, qe) => Se + qe.fullPrice, 0) + we, _e = e(U) ? e(U).price : 0, Me = e(U) ? e(U).sellingPlans.map((Se) => ({ sellingPlanId: Se.id, discountedPrice: Se.price })) : [], Ce = { discountedPrice: ie, fullPrice: He, giftValue: we, discountedPricePerItem: e(V), fullPricePerItem: e(Z), discountedPriceWithoutSellingPlan: _e, discountedPricesForSellingPlans: Me };
          D()({ variants: e(M), freeGifts: [...e(K), ...e(C)], upsells: e(ne), dealBarSellingPlan: e(H), pricing: Ce, product: e(E) });
        })();
      }));
    });
    var ge = { get dealBlock() {
      return c();
    }, set dealBlock(ie) {
      c(ie), k();
    }, get dealBar() {
      return s();
    }, set dealBar(ie) {
      s(ie), k();
    }, get otherProducts() {
      return i();
    }, set otherProducts(ie = []) {
      i(ie), k();
    }, get complementaryProducts() {
      return u();
    }, set complementaryProducts(ie = []) {
      u(ie), k();
    }, get selectedDealBarIndex() {
      return g();
    }, set selectedDealBarIndex(ie = null) {
      g(ie), k();
    }, get componentId() {
      return b();
    }, set componentId(ie) {
      b(ie), k();
    }, get selected() {
      return h();
    }, set selected(ie = !1) {
      h(ie), k();
    }, get globalSellingPlan() {
      return v();
    }, set globalSellingPlan(ie = void 0) {
      v(ie), k();
    }, get onProgressiveGiftsChange() {
      return _();
    }, set onProgressiveGiftsChange(ie) {
      _(ie), k();
    }, get onDealBarSelect() {
      return f();
    }, set onDealBarSelect(ie) {
      f(ie), k();
    }, get onDealBarDeselect() {
      return x();
    }, set onDealBarDeselect(ie) {
      x(ie), k();
    }, get onVariantsChange() {
      return D();
    }, set onVariantsChange(ie) {
      D(ie), k();
    }, get onPersonalisationsChange() {
      return w();
    }, set onPersonalisationsChange(ie) {
      w(ie), k();
    }, get personalisationInitialValues() {
      return I();
    }, set personalisationInitialValues(ie = []) {
      I(ie), k();
    } }, ce = $k();
    let re;
    var he = S(ce);
    ea(he), he.__change = [mk, f, s];
    var ye = G(he, 2);
    Wa(ye, { get for() {
      return e(T);
    }, get soldOut() {
      return s().showAsSoldOutEnabled;
    }, get borderHost() {
      return e(ae);
    }, children: (ie, we) => {
      var He = zk(), _e = pe(He);
      Dt(_e, 17, () => e(z), (Ye) => Ye.id, (Ye, ve) => {
        aa(Ye, { get badge() {
          return e(ve);
        }, get blockLayout() {
          return c().blockLayout;
        } });
      });
      var Me = G(_e, 2), Ce = S(Me);
      Zt(Ce, { element: "div", class: "kaching-bundles__bar-main", onclick: ke, children: (Ye, ve) => {
        var We = Ck(), Ee = pe(We), tt = (Ue) => {
          var Ze = xk();
          be(() => Pe(Ze, "src", e(ee))), p(Ue, Ze);
        }, Ge = (Ue) => {
          p(Ue, yk());
        };
        O(Ee, (Ue) => {
          s().mediaImageGID ? Ue(tt) : Ue(Ge, !1);
        });
        var Ne = G(Ee, 2), ot = S(Ne), _t = S(ot), Bt = S(_t);
        at(Bt, () => e(de), (Ue) => {
          var Ze = wk();
          Te(S(Ze), () => e(de)), y(Ze), p(Ue, Ze);
        });
        var nt = G(Bt, 2), yt = (Ue) => {
          var Ze = Ie();
          at(pe(Ze), () => e(P), (rt) => {
            var Ct = Pk();
            Te(S(Ct), () => e(P)), y(Ct), p(rt, Ct);
          }), p(Ue, Ze);
        };
        O(nt, (Ue) => {
          e(P) && Ue(yt);
        }), y(_t);
        var Mt = G(_t, 2), Et = S(Mt), Jt = (Ue) => {
          var Ze = Ie();
          at(pe(Ze), () => e(F), (rt) => {
            var Ct = Sk();
            Te(S(Ct), () => e(F)), y(Ct), p(rt, Ct);
          }), p(Ue, Ze);
        };
        O(Et, (Ue) => {
          e(F) && Ue(Jt);
        });
        var Yt = G(Et, 2), dn = (Ue) => {
          ia(Ue, { get dealBlock() {
            return c();
          }, get variant() {
            return e(U);
          } });
        };
        O(Yt, (Ue) => {
          e(le) || Ue(dn);
        }), y(Mt), y(ot);
        var Kt = G(ot, 2), ct = S(Kt);
        at(ct, () => e(V), (Ue) => {
          Lr(Ue, { get amount() {
            return e(V);
          }, get showPricesPerItem() {
            return c().showPricesPerItem;
          }, get unitLabel() {
            return c().unitLabel;
          } });
        });
        var zt = G(ct, 2), Xt = (Ue) => {
          var Ze = Ie();
          at(pe(Ze), () => e(q), (rt) => {
            var Ct = Bk();
            Te(S(Ct), () => r()(e(q))), y(Ct), be((At) => Pe(Ct, "data-a11y-label", At), [() => a()("system.original_price")]), p(rt, Ct);
          }), p(Ue, Ze);
        };
        O(zt, (Ue) => {
          e(W) && Ue(Xt);
        }), y(Kt), y(Ne), p(Ye, We);
      }, $$slots: { default: !0 } });
      var Se = G(Ce, 2), qe = (Ye) => {
        ya(Ye, { get highlights() {
          return s().highlights;
        }, get isSelected() {
          return h();
        }, get replaceLiquid() {
          return e(te);
        } });
      };
      O(Se, (Ye) => {
        s().highlights && Ye(qe);
      });
      var St = G(Se, 2), it = (Ye) => {
        var ve = Ik(), We = S(ve);
        {
          let Ee = d(() => e(H) || e(j)[0]);
          xa(We, { get sellingPlans() {
            return e(j);
          }, get selectedSellingPlan() {
            return e(Ee);
          }, onChange: (tt) => {
            se(B, tt, !0);
          } });
        }
        y(ve), p(Ye, ve);
      };
      O(St, (Ye) => {
        h() && e(N) && !s().sellingPlanGid && e(j).length > 1 && Ye(it);
      });
      var et = G(St, 2), lt = (Ye) => {
        var ve = Mk(), We = S(ve);
        na(We, { get product() {
          return e(E);
        } });
        var Ee = G(We, 2), tt = S(Ee);
        {
          let Ge = d(() => e(J) || 0);
          Un(tt, { get product() {
            return e(E);
          }, get selectedVariantId() {
            return e(Ge);
          }, get showImage() {
            return e(fe);
          }, onChange: xe });
        }
        ia(G(tt, 2), { get dealBlock() {
          return c();
        }, get variant() {
          return e(U);
        } }), y(Ee), y(ve), p(Ye, ve);
      };
      O(et, (Ye) => {
        e(le) && e(E) && Ye(lt);
      });
      var wt = G(et, 2), rn = (Ye) => {
        {
          let ve = d(() => [e(J)]);
          Ua(Ye, { get productPersonalisation() {
            return s().productPersonalisation;
          }, get product() {
            return e(E);
          }, get selectedVariantIds() {
            return e(ve);
          }, quantity: 1, get addPersonalisationModal() {
            return c().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return w();
          }, get initialValues() {
            return I();
          } });
        }
      };
      O(wt, (Ye) => {
        h() && s().productPersonalisation && e(E) && e(J) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && Ye(rn);
      }), y(Me);
      var jt = G(Me, 2);
      {
        let Ye = d(() => s().upsells || []);
        wi(jt, { get dealBlock() {
          return c();
        }, get dealBarId() {
          return s().id;
        }, get upsells() {
          return e(Ye);
        }, get otherProducts() {
          return i();
        }, get complementaryProducts() {
          return u();
        }, get dealBarSelected() {
          return h();
        }, get dealSellingPlan() {
          return e(X);
        }, onChange: (ve) => {
          se(ne, ve, !0);
        } });
      }
      var gt = G(jt, 2);
      Bi(gt, { get selectedDealBarIndex() {
        return g();
      }, get onChange() {
        return _();
      }, get dealBlock() {
        return c();
      }, get dealBar() {
        return s();
      }, get selected() {
        return h();
      }, get otherProducts() {
        return i();
      }, get sellingPlan() {
        return e(X);
      }, get progressiveGifts() {
        return c().progressiveGifts;
      } });
      var ze = G(gt, 2);
      {
        let Ye = d(() => s().freeGifts || []);
        yi(ze, { get dealBlock() {
          return c();
        }, get freeGifts() {
          return e(Ye);
        }, get freeGiftsSummary() {
          return s().freeGiftsSummary;
        }, get otherProducts() {
          return i();
        }, get dealBarSelected() {
          return h();
        }, get sellingPlan() {
          return e(X);
        }, onChange: (ve) => {
          se(K, ve, !0);
        } });
      }
      var bt = G(ze, 2);
      {
        let Ye = d(() => s().multipleGiftsSelectors || []);
        Si(bt, { get dealBlock() {
          return c();
        }, get multipleGiftsSelectors() {
          return e(Ye);
        }, get sellingPlan() {
          return e(X);
        }, get otherProducts() {
          return i();
        }, onChange: (ve) => {
          se(C, ve, !0);
        } });
      }
      p(ie, He);
    }, $$slots: { default: !0 } });
    var Ae = G(ye, 2), Oe = (ie) => {
      Pi(ie, { get showAsSoldOut() {
        return s().showAsSoldOut;
      }, get replaceLiquid() {
        return e(te);
      } });
    };
    O(Ae, (ie) => {
      s().showAsSoldOutEnabled && s().showAsSoldOut && ie(Oe);
    }), y(ce), be((ie) => {
      var we;
      re = Lt(ce, 1, "kaching-bundles__bar", null, re, ie), Pe(ce, "data-deal-bar-id", s().id), Tt(ce, e(Be)), Pe(he, "name", `kaching-bundles-deal-${(we = b()) != null ? we : ""}`), La(he, s().id), Pe(he, "id", e(T)), Yi(he, h()), he.disabled = s().showAsSoldOutEnabled;
    }, [() => ({ "kaching-bundles__bar--selected": h() })]), p(n, ce);
    var Ve = Xe(ge);
    return o(), Ve;
  }
  On(["change"]), Qe(lg, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Dk = $('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function sg(n, t) {
    Ke(t, !0);
    const r = () => $e(i, "$config", a), [a, l] = vt();
    let o = m(t, "collectionBreaks", 7), c = m(t, "hasItemsToSelect", 7);
    const s = It(), i = _n(), u = d(() => {
      var D;
      return (D = o()) == null ? void 0 : D.requireItemSelectionAlert;
    }), g = d(() => r().preview && r().previewAlerts || $e(Bo, "$requireSelectionError", a)), b = d(() => {
      var D;
      return e(g) && ((D = o()) == null ? void 0 : D.requireItemSelectionEnabled) && e(u) && c();
    });
    var h = { get collectionBreaks() {
      return o();
    }, set collectionBreaks(D) {
      o(D), k();
    }, get hasItemsToSelect() {
      return c();
    }, set hasItemsToSelect(D) {
      c(D), k();
    } }, v = Ie(), _ = pe(v), f = (D) => {
      var w = Dk(), I = G(S(w));
      y(w), be((L) => ft(I, ` ${L != null ? L : ""}`), [() => $e(s, "$translate", a)(e(u).text)]), p(D, w);
    };
    O(_, (D) => {
      e(b) && e(u) && D(f);
    }), p(n, v);
    var x = Xe(h);
    return l(), x;
  }
  Qe(sg, { collectionBreaks: {}, hasItemsToSelect: {} }, [], [], !0);
  var Ak = $('<span class="kaching-bundles-savings-summary__icon"><img alt=""/></span>'), Vk = $('<span class="kaching-bundles-savings-summary__icon"><!></span>'), Tk = $('<div class="kaching-bundles-savings-summary"><!> <span class="kaching-bundles-savings-summary__title"><!></span></div>');
  function og(n, t) {
    Ke(t, !0);
    const [r, a] = vt(), l = m(t, "savingsSummary", 7), o = m(t, "totalFullPrice", 7), c = m(t, "totalDiscountedPrice", 7), s = m(t, "quantity", 7), i = m(t, "product", 7), u = cn(), g = It(), b = Fn(), h = d(() => ((A) => bn({ "kaching-bundles-savings-summary-background-color": je(A.backgroundColor), "kaching-bundles-savings-summary-text-color": je(A.textColor), "kaching-bundles-savings-summary-value-color": je(A.valueColor), "kaching-bundles-savings-summary-icon-color": je(A.iconColor), "kaching-bundles-savings-summary-border-color": je(A.borderColor), "kaching-bundles-savings-summary-alignment": { start: "flex-start", center: "center", end: "flex-end" }[A.titleAlignment], "kaching-bundles-savings-summary-border-width": A.borderWidth + "px", "kaching-bundles-savings-summary-border-radius": A.borderRadius + "px", "kaching-bundles-savings-summary-title-font-size": A.titleFont.size + "px", "kaching-bundles-savings-summary-title-font-style": cr(A.titleFont.style), "kaching-bundles-savings-summary-title-font-weight": or(A.titleFont.style) }))(l())), v = d(() => l().iconType), _ = d(() => Sd[e(v)]), f = d(() => e(v) === "custom" ? $e(b, "$getMediaImageUrl", r)(l().customIconGID) : void 0), x = d(() => un({ priceFormatter: $e(u, "$formatPrice", r), product: i(), totalFullPrice: o(), totalDiscountedPrice: c(), quantity: s(), unitQuantity: null })), D = d(() => ((A) => A.replace(Ru, '<span class="kaching-bundles-savings-summary__value">$&</span>'))($e(g, "$translate", r)(l().title))), w = d(() => e(x)(e(D)));
    var I = { get savingsSummary() {
      return l();
    }, set savingsSummary(A) {
      l(A), k();
    }, get totalFullPrice() {
      return o();
    }, set totalFullPrice(A) {
      o(A), k();
    }, get totalDiscountedPrice() {
      return c();
    }, set totalDiscountedPrice(A) {
      c(A), k();
    }, get quantity() {
      return s();
    }, set quantity(A) {
      s(A), k();
    }, get product() {
      return i();
    }, set product(A) {
      i(A), k();
    } }, L = Tk(), Q = S(L), R = (A) => {
      var E = Ak(), oe = S(E);
      y(E), be(() => Pe(oe, "src", e(f))), p(A, E);
    }, K = (A) => {
      var E = Ie(), oe = pe(E), J = (U) => {
        var M = Vk();
        Qc(S(M), () => e(_), (B, j) => {
          j(B, {});
        }), y(M), p(U, M);
      };
      O(oe, (U) => {
        e(_) && U(J);
      }, !0), p(A, E);
    };
    O(Q, (A) => {
      e(v) === "custom" && e(f) ? A(R) : A(K, !1);
    });
    var C = G(Q, 2);
    Te(S(C), () => e(w)), y(C), y(L), be(() => Tt(L, e(h))), p(n, L);
    var ne = Xe(I);
    return a(), ne;
  }
  Qe(og, { savingsSummary: {}, totalFullPrice: {}, totalDiscountedPrice: {}, quantity: {}, product: {} }, [], [], !0);
  var qk = $('<div class="kaching-bundles__block-title"><!></div>'), Gk = $("<!> <!>", 1), Ok = $('<div class="kaching-bundles__out-of-stock"><!></div>'), Fk = $('<div class="kaching-bundles"><div><!> <!> <div><!> <!> <!> <!></div> <!> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function cg(n, t) {
    var r, a, l, o, c, s;
    Ke(t, !0);
    const i = () => $e(j, "$formatPrice", g), u = () => $e(H, "$translate", g), [g, b] = vt();
    let h = m(t, "component", 7), v = m(t, "config", 7), _ = m(t, "translations", 23, () => ({})), f = m(t, "dealBlock", 7), x = m(t, "product", 7), D = m(t, "currentVariantId", 7), w = m(t, "sellingPlanId", 15), I = m(t, "selectedDealBarId", 15), L = m(t, "quantity", 15), Q = m(t, "mediaImages", 23, () => []), R = m(t, "otherProducts", 23, () => []), K = m(t, "collectionBreaksProducts", 23, () => []), C = m(t, "complementaryProducts", 23, () => []), ne = m(t, "nativeBundleProductIds", 23, () => []), A = m(t, "compact", 7, !1), E = m(t, "variantBadges", 23, () => []);
    const oe = d(() => f().hideUnavailableOptions ? _r(x()) : x()), J = d(() => f().hideUnavailableOptions ? R().map(_r) : R()), U = d(() => f().hideUnavailableOptions ? C().map(_r) : C()), M = d(() => f().hideUnavailableOptions ? K().map(_r) : K()), { setConfig: B } = Qa(v()), { formatPrice: j, setMoneyFormat: N } = mi(v().moneyFormat, (r = f()) == null ? void 0 : r.showPricesWithoutDecimals), { translate: H, setTranslations: X } = Na(_()), { setMediaImages: V } = tl(Q()), { setVariantBadges: Z } = ud(E()), { setSwatchSettings: q } = Ki({ swatchOptions: ((a = f()) == null ? void 0 : a.swatchOptions) || [], swatchSize: (l = f()) == null ? void 0 : l.swatchSize, swatchShape: (o = f()) == null ? void 0 : o.swatchShape, showSelectedSwatchName: (s = (c = f()) == null ? void 0 : c.showSelectedSwatchName) != null && s });
    let W = De(st(Math.random()));
    function te() {
      return { dealBlock: f(), product: e(Ne), pageProductId: x().id, selectedDealBarId: I(), selectedVariantQuantities: e(z), selectedBundleProducts: e(ae), selectedCollectionBreaksProducts: e(T), selectedFreeGifts: e(ee), selectedProgressiveGifts: e(Y), selectedCheckboxUpsells: e(le), selectedUpsells: e(fe), selectedPersonalisations: e(Be), selectedSellingPlan: e(_t), dealBarSellingPlan: e(xe), nativeBundleProductIds: ne(), bundleNonce: e(W), splitBxgy: v().featureFlags.split_bxgy_items, disableNestedCartLines: v().featureFlags.disable_nested_cart_lines };
    }
    function de() {
      return tg(te());
    }
    Fa(() => {
      vr(h(), "kaching-bundles-block-loaded", { component: h() }, !1);
    }), Je(() => {
      B(v());
    }), Je(() => {
      N(v().moneyFormat, !!f().showPricesWithoutDecimals);
    }), Je(() => {
      X(_());
    }), Je(() => {
      V(Q());
    }), Je(() => {
      Z(E());
    }), Je(() => {
      var ue;
      q({ swatchOptions: f().swatchOptions || [], swatchSize: f().swatchSize, swatchShape: f().swatchShape, showSelectedSwatchName: (ue = f().showSelectedSwatchName) != null && ue });
    });
    let F = 0;
    Je(() => {
      F === 0 && ne().length > 0 && Ge({ pricing: e(ye) }), F = ne().length;
    });
    let P = Math.random().toString(16).slice(2), z = De(st([])), ae = De(st([])), T = De(st([])), ee = De(st([])), Y = De(st([])), le = De(st([])), fe = De(st([])), Be = De(st([])), ke = new Pv(), xe = De(void 0), ge = De(st({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), ce = De(void 0), re = De(!1), he = De(st({ requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0 })), ye = De(st({ discountedPrice: 0, fullPrice: 0, giftValue: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    Je(() => {
      D() && !I() && (e(_t), nn(() => {
        (function() {
          const ue = x().variants.find((Le) => Le.id === D());
          if (!ue) return;
          se(z, [{ variant: ue, quantity: 1 }], !0);
          let Fe = ue.price;
          if (e(_t)) {
            const Le = ue.sellingPlans.find((Re) => Re.id === e(_t).id);
            Le && (Fe = Le.price);
          }
          const kt = ue.compareAtPrice && ue.compareAtPrice > ue.price ? ue.compareAtPrice : ue.price, Ot = x().sellingPlans.map((Le) => ({ sellingPlanId: Le.id, discountedPrice: nl(ue, Le) }));
          se(ye, { discountedPrice: Fe, fullPrice: kt, giftValue: 0, discountedPricePerItem: Fe, fullPricePerItem: kt, discountedPriceWithoutSellingPlan: ue.price, discountedPricesForSellingPlans: Ot }, !0), Ge({ pricing: e(ye) });
        })();
      }));
    });
    let Ae = d(() => Iu(f())), Oe = d(() => u()(f().blockTitle));
    const Ve = d(() => e(rt) ? un({ priceFormatter: i(), product: e(oe), selectedVariants: e(z), totalFullPrice: e(ye).fullPrice, totalDiscountedPrice: e(ye).discountedPrice, quantity: L() || Ce(e(rt)), dealBar: e(rt), legacySavedPercentage: v().featureFlags.legacy_saved_percentage || !1, unitQuantity: null, sellingPlan: e(_t) }) : Kh), ie = d(() => ((ue) => jp(ue, "block"))(f()).map((ue) => ka(ue, u(), e(Ve)))), we = d(() => ma(e(ie))), He = d(() => {
      var ue;
      const Fe = e(ie).find((kt) => kt.badgeType === "border" && (kt.position === "left" || kt.position === "right"));
      if ((ue = Fe == null ? void 0 : Fe.colors) != null && ue.background) return je({ ...Fe.colors.background, alpha: 0.15 });
    }), _e = f().preselectedDealBarId ? f().dealBars.find((ue) => ue.id === f().preselectedDealBarId) : void 0;
    function Me(ue) {
      return !ue.dealBarType || ue.dealBarType === pt.QuantityBreak || ue.dealBarType === pt.Bxgy;
    }
    function Ce(ue) {
      switch (ue.dealBarType) {
        case void 0:
        case pt.QuantityBreak:
          return Number(ue.quantity);
        case pt.Bxgy:
          return Number(ue.buyQuantity) + Number(ue.getQuantity);
        case pt.Bundle:
          return ue.bundleProducts[0].quantity;
        case pt.MixAndMatch:
        case pt.Sku:
          return 1;
      }
    }
    function Se(ue) {
      var Fe, kt;
      I() !== ue && (I() && ke.set(I(), e(Be)), se(Be, (Fe = ke.get(ue)) != null ? Fe : [], !0), ((kt = f().progressiveGifts) == null ? void 0 : kt.layout) === "deal-bar" && se(Y, [], !0)), I(ue);
    }
    function qe(ue) {
      const { dealBarId: Fe, dealBarQuantity: kt, preselected: Ot } = ue;
      Se(Fe), dl(!1), v().keepQuantityInput && kt && L(kt), vr(h(), "deal-bar-selected", { dealBarId: Fe, preselected: Ot });
    }
    function St(ue) {
      const Fe = f().dealBars[ue];
      Fe && Se(Fe.id);
    }
    function it() {
      v().ignoreDeselect || (I(void 0), se(ee, [], !0), se(Y, [], !0), se(fe, [], !0), se(ae, [], !0), se(T, [], !0), se(Be, [], !0), ke.clear(), se(xe, void 0), dl(!1), vr(h(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function et(ue) {
      const { variantId: Fe } = ue;
      vr(h(), "variant-selected", { variantId: Fe });
    }
    function lt(ue) {
      const { bundleProducts: Fe, freeGifts: kt, upsells: Ot, pricing: Le } = ue, Re = [{ variant: Fe[0].variant, quantity: Fe[0].quantity }];
      se(z, Re, !0), se(ae, Fe.slice(1), !0), se(ee, kt, !0), se(fe, Ot, !0), se(T, [], !0), se(xe, void 0), se(ce, void 0), se(ye, Le, !0), se(re, tt(e(z)), !0), Ge({ pricing: Le });
    }
    function wt(ue) {
      const { variants: Fe, freeGifts: kt, upsells: Ot, pricing: Le, validation: Re } = ue;
      se(he, Re, !0);
      const en = [{ variant: Fe[0].variant, quantity: Fe[0].quantity }], Rn = Fe.slice(1);
      se(z, en, !0), se(ee, kt, !0), se(fe, Ot, !0), se(ae, [], !0), se(T, Rn, !0), se(xe, ue.dealBarSellingPlan, !0), se(ce, void 0), se(ye, Le, !0), se(re, tt(e(z)), !0), Ge({ pricing: Le });
    }
    function rn(ue) {
      const { variants: Fe, freeGifts: kt, upsells: Ot, pricing: Le } = ue;
      se(z, Fe, !0), se(ee, kt, !0), se(fe, Ot, !0), se(ae, [], !0), se(T, [], !0), se(xe, ue.dealBarSellingPlan, !0), se(ce, void 0), se(ye, Le, !0), se(re, tt(e(z)), !0), Ge({ pricing: Le });
    }
    function jt(ue) {
      var Fe;
      const { variants: kt, freeGifts: Ot, upsells: Le, pricing: Re, product: en } = ue;
      se(z, kt, !0), se(ee, Ot, !0), se(fe, Le, !0), se(ae, [], !0), se(T, [], !0), se(xe, ue.dealBarSellingPlan, !0), ((Fe = e(ce)) == null ? void 0 : Fe.id) !== (en == null ? void 0 : en.id) && se(ce, en, !0), se(ye, Re, !0), se(re, tt(e(z)), !0), Ge({ pricing: Re });
    }
    function gt(ue) {
      w(ue == null ? void 0 : ue.id);
    }
    _e != null && _e.hideBehindScratchOff && f().scratchOffEnabled && (v().preview ? v().previewScratchOff : x().availableForSale) || I(I() || f().preselectedDealBarId || void 0), Je(() => {
      L() && f() && nn(() => {
        if (!I()) return;
        const ue = f().dealBars.find((Fe) => Fe.id === I());
        ue && Me(ue) && Ce(ue) !== L() && (function(Fe, kt) {
          if (!I()) return;
          const Ot = Fe.dealBars.slice().sort((Re, en) => Ce(Re) - Ce(en));
          let Le = Ot[0];
          for (const Re of Ot) if (Me(Re)) {
            if (Ce(Re) > kt) break;
            Le = Re;
          }
          Le.id !== I() && (Se(Le.id), vr(h(), "deal-bar-selected", { dealBarId: Le.id, preselected: !1 }));
        })(f(), L());
      });
    });
    let ze = De(void 0);
    function bt() {
      if (!e(Yt) || e(ot).length === 0) return;
      const ue = e(ot).find((Fe) => Fe.id === e(ze));
      gt(ue != null ? ue : e(ot)[0]);
    }
    function Ye(ue) {
      vr(h(), "add-to-cart-requested", { items: tg({ ...te(), selectedSellingPlan: ue, dealBarSellingPlan: void 0 }) });
    }
    function ve(ue) {
      se(Y, ue, !0), Ge({ pricing: e(ye) });
    }
    function We(ue, Fe) {
      se(le, ue, !0), se(ge, Fe, !0), Ge({ pricing: e(ye) });
    }
    function Ee(ue) {
      se(Be, ue, !0), Ge({ pricing: e(ye) });
    }
    function tt(ue) {
      return ue.some(({ variant: Fe, quantity: kt }) => !!Fe && !!Fe.inventoryManagement && Fe.inventoryPolicy === "deny" && Fe.inventoryQuantity !== null && kt > Fe.inventoryQuantity);
    }
    function Ge({ pricing: ue }) {
      const Fe = e(z).map(({ variant: Mn, quantity: Dn }) => ({ variantId: Mn.id, quantity: Dn })), kt = e(ee).map(({ id: Mn, variant: Dn, quantity: Wt }) => ({ id: Mn, variantId: Dn.id, quantity: Wt })), Ot = e(fe).map(({ id: Mn, variant: Dn, quantity: Wt }) => ({ id: Mn, variantId: Dn.id, quantity: Wt })), Le = e(ae).map(({ id: Mn, variant: Dn, quantity: Wt }) => ({ id: Mn, variantId: Dn.id, quantity: Wt })), Re = ue.discountedPrice + e(ge).discountedPrice, en = ue.fullPrice + e(ge).fullPrice, Rn = { discountedPrice: Re, fullPrice: en, discountedPriceWithoutSellingPlan: ue.discountedPriceWithoutSellingPlan + e(ge).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: ue.discountedPricesForSellingPlans.map((Mn) => {
        var Dn, Wt;
        const zn = (Wt = (Dn = e(ge).discountedPricesForSellingPlans.find((jr) => jr.sellingPlanId === Mn.sellingPlanId)) == null ? void 0 : Dn.discountedPrice) != null ? Wt : e(ge).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: Mn.sellingPlanId, discountedPrice: Mn.discountedPrice + zn };
      }) };
      I() && e(rt) ? Ha.set({ id: I(), dealBar: e(rt), product: e(Ne), quantity: e(z).reduce((Mn, { quantity: Dn }) => Mn + Dn, 0), pricing: Rn }) : Ha.set({ id: null, dealBar: null, product: e(Ne), quantity: 1, pricing: Rn }), vr(h(), "variants-changed", { variantIdQuantities: Fe, freeGifts: kt, upsells: Ot, bundleProducts: Le, pricing: { discountedPrice: { amount: Re, formatted: i()(Re) }, fullPrice: { amount: en, formatted: i()(en) }, discountedPricePerItem: { amount: ue.discountedPricePerItem, formatted: i()(ue.discountedPricePerItem) }, fullPricePerItem: { amount: ue.fullPricePerItem, formatted: i()(ue.fullPricePerItem) } }, formattedPrice: i()(ue.discountedPrice), validation: e(he) }), vr(h(), "items-changed", {});
    }
    Je(() => {
      w() && se(ze, w(), !0);
    });
    const Ne = d(() => e(ce) || x()), ot = d(() => {
      const ue = e(z).map(({ variant: Fe }) => Fe);
      return e(Ne).sellingPlans.filter((Fe) => ue.some((kt) => kt.sellingPlans.some((Ot) => Ot.id === Fe.id)));
    }), _t = d(() => e(ot).find((ue) => ue.id === w())), Bt = d(() => w() ? e(Ne).sellingPlans.find((ue) => ue.id === w()) : void 0), nt = d(() => oo(e(xe), e(Bt), e(ot), e(Ne).requiresSellingPlan)), yt = d(() => e(ye).giftValue + e(Y).reduce((ue, Fe) => ue + Fe.variants.reduce((kt, { variant: Ot, quantity: Le }) => kt + Ot.price * Le, 0), 0)), Mt = d(() => {
      var ue, Fe;
      return (Fe = (ue = f().savingsSummary) == null ? void 0 : ue.includeGiftValue) != null && Fe;
    }), Et = d(() => ((ue, Fe, kt, Ot) => {
      const Le = ue.fullPrice - ue.giftValue + Fe.fullPrice + (Ot ? kt : 0), Re = ue.discountedPrice + Fe.discountedPrice;
      return { fullPrice: Le, discountedPrice: Re, saved: Le - Re };
    })(e(ye), e(ge), e(yt), e(Mt))), Jt = d(() => {
      var ue;
      return ((Fe, kt) => Fe + kt.reduce((Ot, { quantity: Le }) => Ot + Le, 0))(((ue = $e(Ha, "$selectedDealBarStore", g)) == null ? void 0 : ue.quantity) || 1, e(le));
    });
    let Yt = d(() => f().subscriptionsEnabled && f().subscriptions && (e(ot).length > 0 || v().preview));
    const dn = d(() => {
      if (!f().progressiveGifts || e(ot).length > 0) return f();
      const ue = f().progressiveGifts.gifts.filter((Fe) => !Fe.applyOnlyForSubscriptions);
      return ue.length === f().progressiveGifts.gifts.length ? f() : { ...f(), progressiveGifts: { ...f().progressiveGifts, gifts: ue } };
    });
    let Kt = d(() => {
      var ue, Fe;
      return e(Yt) && ((ue = f().subscriptions) == null ? void 0 : ue.showPrices) && ((Fe = f().subscriptions) == null ? void 0 : Fe.hideDealBarPrices);
    }), ct = d(() => I() ? f().dealBars.findIndex((ue) => ue.id === I()) : null);
    const zt = d(() => f().scratchOffEnabled ? f().scratchOff : null), Xt = d(() => (f().blockLayout === "vertical" || f().blockLayout === "plain") && (v().preview || x().availableForSale)), Ue = d(() => f().dealBars.reduce((ue, Fe) => {
      const kt = e(zt) && e(Xt) && Fe.hideBehindScratchOff, Ot = ue[ue.length - 1];
      return kt && (Ot == null ? void 0 : Ot.type) === "scratch" ? Ot.bars.push(Fe) : kt ? ue.push({ type: "scratch", key: Fe.id, bars: [Fe] }) : ue.push({ type: "visible", key: Fe.id, bar: Fe }), ue;
    }, [])), Ze = d(() => e(z).reduce((ue, { quantity: Fe }) => ue + Fe, 0) || 1), rt = d(() => I() ? f().dealBars.find((ue) => ue.id === I()) : void 0), Ct = d(() => {
      var ue, Fe;
      return !!((ue = e(rt)) != null && ue.sellingPlanEnabled) && !!((Fe = e(rt)) != null && Fe.sellingPlanGid);
    }), At = d(() => {
      var ue;
      return ((ue = e(rt)) == null ? void 0 : ue.productPersonalisation) && (f().blockLayout === "horizontal" || f().blockLayout === "grid");
    }), kn = d(() => e(rt) ? e(rt).dealBarType === void 0 || e(rt).dealBarType === pt.QuantityBreak ? L() || Number(e(rt).quantity) || 1 : e(rt).dealBarType === pt.Bxgy ? L() || e(rt).buyQuantity + e(rt).getQuantity : e(rt).dealBarType === pt.Bundle ? 1 : L() || 1 : L() || 1), $t = d(() => e(z).flatMap(({ variant: ue, quantity: Fe }) => Array(Fe).fill(ue.id))), qt = d(() => {
      if (e(Be).length === 0) return [];
      const ue = e(Be).reduce((kt, Ot) => Math.max(kt, Ot.productIndex), -1), Fe = Array.from({ length: ue + 1 }, () => "");
      for (const kt of e(Be)) Fe[kt.productIndex] = kt.text;
      return Fe;
    });
    var mn = { rotateBundleNonce: function() {
      se(W, Math.random(), !0);
    }, selectedVariants: function() {
      return de().map((ue) => ({ variantId: ue.id, quantity: ue.quantity, properties: ue.properties }));
    }, items: de, pricing: function() {
      const ue = e(ye).discountedPrice + e(ge).discountedPrice, Fe = e(ye).fullPrice + e(ge).fullPrice;
      return { discountedPrice: { amount: ue / 100, formatted: i()(ue) }, fullPrice: { amount: Fe / 100, formatted: i()(Fe) }, discountedPricePerItem: { amount: e(ye).discountedPricePerItem / 100, formatted: i()(e(ye).discountedPricePerItem) }, fullPricePerItem: { amount: e(ye).fullPricePerItem / 100, formatted: i()(e(ye).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(ye).discountedPriceWithoutSellingPlan + e(ge).discountedPriceWithoutSellingPlan) / 100, formatted: i()(e(ye).discountedPriceWithoutSellingPlan + e(ge).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(ye).discountedPricesForSellingPlans.map((kt) => {
        var Ot, Le;
        const Re = (Le = (Ot = e(ge).discountedPricesForSellingPlans.find((Rn) => Rn.sellingPlanId === kt.sellingPlanId)) == null ? void 0 : Ot.discountedPrice) != null ? Le : e(ge).discountedPriceWithoutSellingPlan, en = kt.discountedPrice + Re;
        return { sellingPlanId: kt.sellingPlanId, amount: en / 100, formatted: i()(en) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: f().subscriptionsEnabled || f().dealBars.some((ue) => ue.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: ue, allItemsSelected: Fe } = e(he);
      return !ue || Fe;
    }, validateItemSelection: function() {
      var ue, Fe;
      const { requiresItemSelection: kt, allItemsSelected: Ot } = e(he);
      return kt && !Ot ? (dl(!0), { valid: !1, message: ((Fe = (ue = f().collectionBreaks) == null ? void 0 : ue.requireItemSelectionAlert) == null ? void 0 : Fe.text) || null }) : (dl(!1), { valid: !0, message: null });
    }, get component() {
      return h();
    }, set component(ue) {
      h(ue), k();
    }, get config() {
      return v();
    }, set config(ue) {
      v(ue), k();
    }, get translations() {
      return _();
    }, set translations(ue = {}) {
      _(ue), k();
    }, get dealBlock() {
      return f();
    }, set dealBlock(ue) {
      f(ue), k();
    }, get product() {
      return x();
    }, set product(ue) {
      x(ue), k();
    }, get currentVariantId() {
      return D();
    }, set currentVariantId(ue) {
      D(ue), k();
    }, get sellingPlanId() {
      return w();
    }, set sellingPlanId(ue) {
      w(ue), k();
    }, get selectedDealBarId() {
      return I();
    }, set selectedDealBarId(ue) {
      I(ue), k();
    }, get quantity() {
      return L();
    }, set quantity(ue) {
      L(ue), k();
    }, get mediaImages() {
      return Q();
    }, set mediaImages(ue = []) {
      Q(ue), k();
    }, get otherProducts() {
      return R();
    }, set otherProducts(ue = []) {
      R(ue), k();
    }, get collectionBreaksProducts() {
      return K();
    }, set collectionBreaksProducts(ue = []) {
      K(ue), k();
    }, get complementaryProducts() {
      return C();
    }, set complementaryProducts(ue = []) {
      C(ue), k();
    }, get nativeBundleProductIds() {
      return ne();
    }, set nativeBundleProductIds(ue = []) {
      ne(ue), k();
    }, get compact() {
      return A();
    }, set compact(ue = !1) {
      A(ue), k();
    }, get variantBadges() {
      return E();
    }, set variantBadges(ue = []) {
      E(ue), k();
    } }, Qt = Fk(), gn = pe(Qt), hn = S(gn);
    let rr;
    {
      const ue = (Le, Re) => {
        let en = ql(() => (function(Wt, zn, jr = !1) {
          return Wt === void 0 ? jr ? zn() : zn : Wt;
        })(Re == null ? void 0 : Re(), !1));
        var Rn = Ie(), Mn = pe(Rn), Dn = (Wt) => {
          Ud(Wt, { get subscriptions() {
            return f().subscriptions;
          }, get sellingPlans() {
            return e(ot);
          }, get selectedSellingPlan() {
            return e(_t);
          }, get hideSellingPlanSelector() {
            return e(Ct);
          }, get hideTitle() {
            return e(en);
          }, onChange: gt, onRequestAddToCart: Ye });
        };
        O(Mn, (Wt) => {
          f().subscriptions && Wt(Dn);
        }), p(Le, Rn);
      }, Fe = (Le, Re = yr) => {
        var en = Ie(), Rn = pe(en), Mn = (Wt) => {
          {
            let zn = d(() => Re().id === I()), jr = d(() => Re().id === I() ? e(qt) : []);
            Fd(Wt, { get selectedDealBarIndex() {
              return e(ct);
            }, get dealBlock() {
              return e(dn);
            }, get dealBar() {
              return Re();
            }, get product() {
              return e(oe);
            }, get otherProducts() {
              return e(J);
            }, get complementaryProducts() {
              return e(U);
            }, get selected() {
              return e(zn);
            }, get currentVariantId() {
              return D();
            }, get componentId() {
              return P;
            }, get sellingPlan() {
              return e(Bt);
            }, onProgressiveGiftsChange: ve, onDealBarSelect: qe, onDealBarDeselect: it, onVariantSelect: et, onVariantsChange: lt, onPersonalisationsChange: Ee, get personalisationInitialValues() {
              return e(jr);
            } });
          }
        }, Dn = (Wt) => {
          var zn = Ie(), jr = pe(zn), Ii = (wa) => {
            {
              let ds = d(() => Re().id === I()), zo = d(() => Re().id === I() ? e(qt) : []);
              Ad(wa, { get selectedDealBarIndex() {
                return e(ct);
              }, get dealBlock() {
                return e(dn);
              }, get dealBar() {
                return Re();
              }, get product() {
                return e(oe);
              }, get otherProducts() {
                return e(J);
              }, get complementaryProducts() {
                return e(U);
              }, get selected() {
                return e(ds);
              }, get currentVariantId() {
                return D();
              }, get componentId() {
                return P;
              }, get sellingPlan() {
                return e(Bt);
              }, onProgressiveGiftsChange: ve, onDealBarSelect: qe, onDealBarDeselect: it, onVariantSelect: et, onVariantsChange: lt, onPersonalisationsChange: Ee, get personalisationInitialValues() {
                return e(zo);
              } });
            }
          }, la = (wa) => {
            var ds = Ie(), zo = pe(ds), um = (Mi) => {
              {
                let gs = d(() => Re().id === I()), $o = d(() => Re().id === I() ? e(qt) : []);
                lg(Mi, { get dealBlock() {
                  return e(dn);
                }, get dealBar() {
                  return Re();
                }, get selectedDealBarIndex() {
                  return e(ct);
                }, get otherProducts() {
                  return e(J);
                }, get complementaryProducts() {
                  return e(U);
                }, get componentId() {
                  return P;
                }, get selected() {
                  return e(gs);
                }, get globalSellingPlan() {
                  return e(Bt);
                }, onProgressiveGiftsChange: ve, onDealBarSelect: qe, onDealBarDeselect: it, onVariantsChange: jt, onPersonalisationsChange: Ee, get personalisationInitialValues() {
                  return e($o);
                } });
              }
            }, dm = (Mi) => {
              var gs = Ie(), $o = pe(gs), gm = (zi) => {
                {
                  let Do = d(() => Re().id === I() ? L() && Number(L()) : void 0), Ao = d(() => Re().id === I()), Vo = d(() => Re().id === I() ? e(qt) : []);
                  jd(zi, { get dealBlock() {
                    return e(dn);
                  }, get dealBar() {
                    return Re();
                  }, get selectedDealBarIndex() {
                    return e(ct);
                  }, get product() {
                    return e(oe);
                  }, get collectionBreaksProducts() {
                    return e(M);
                  }, get otherProducts() {
                    return e(J);
                  }, get complementaryProducts() {
                    return e(U);
                  }, get customQuantity() {
                    return e(Do);
                  }, get selected() {
                    return e(Ao);
                  }, onProgressiveGiftsChange: ve, get currentVariantId() {
                    return D();
                  }, get componentId() {
                    return P;
                  }, get globalSellingPlan() {
                    return e(Bt);
                  }, onDealBarSelect: qe, onDealBarDeselect: it, onVariantSelect: et, onVariantsChange: wt, onPersonalisationsChange: Ee, get personalisationInitialValues() {
                    return e(Vo);
                  } });
                }
              }, hm = (zi) => {
                {
                  let Do = d(() => Re().id === I() ? L() && Number(L()) : void 0), Ao = d(() => Re().id === I()), Vo = d(() => Re().id === I() ? e(qt) : []);
                  ko(zi, { get selectedDealBarIndex() {
                    return e(ct);
                  }, get dealBlock() {
                    return e(dn);
                  }, get dealBar() {
                    return Re();
                  }, get product() {
                    return e(oe);
                  }, get otherProducts() {
                    return e(J);
                  }, get complementaryProducts() {
                    return e(U);
                  }, get customQuantity() {
                    return e(Do);
                  }, get selected() {
                    return e(Ao);
                  }, get currentVariantId() {
                    return D();
                  }, get componentId() {
                    return P;
                  }, get globalSellingPlan() {
                    return e(Bt);
                  }, onProgressiveGiftsChange: ve, onDealBarSelect: qe, onDealBarDeselect: it, onVariantSelect: et, onVariantsChange: rn, onPersonalisationsChange: Ee, get personalisationInitialValues() {
                    return e(Vo);
                  } });
                }
              };
              O($o, (zi) => {
                !f().collectionBreaksEnabled || !f().collectionBreaks || Re().dealBarType && Re().dealBarType !== pt.QuantityBreak && Re().dealBarType !== pt.Bxgy ? zi(hm, !1) : zi(gm);
              }, !0), p(Mi, gs);
            };
            O(zo, (Mi) => {
              Re().dealBarType === pt.Sku ? Mi(um) : Mi(dm, !1);
            }, !0), p(wa, ds);
          };
          O(jr, (wa) => {
            Re().dealBarType === pt.Bundle ? wa(Ii) : wa(la, !1);
          }, !0), p(Wt, zn);
        };
        O(Rn, (Wt) => {
          Re().dealBarType === pt.MixAndMatch ? Wt(Mn) : Wt(Dn, !1);
        }), p(Le, en);
      };
      var Hn = S(hn), Zn = (Le) => {
        var Re = Gk(), en = pe(Re), Rn = (Wt) => {
          var zn = qk();
          Te(S(zn), () => e(Oe)), y(zn), p(Wt, zn);
        };
        O(en, (Wt) => {
          e(Oe) && Wt(Rn);
        });
        var Mn = G(en, 2), Dn = (Wt) => {
          Xd(Wt, { get timer() {
            return f().timer;
          } });
        };
        O(Mn, (Wt) => {
          f().timerEnabled && f().timer && Wt(Dn);
        }), p(Le, Re);
      };
      O(Hn, (Le) => {
        A() || Le(Zn);
      });
      var ur = G(Hn, 2), fn = (Le) => {
        ue(Le);
      };
      O(ur, (Le) => {
        var Re;
        e(Yt) && ((Re = f().subscriptions) == null ? void 0 : Re.position) === "above" && e(we).positions.size === 0 && Le(fn);
      });
      var Pn = G(ur, 2);
      let kt, Ot;
      var ut = S(Pn);
      Dt(ut, 17, () => e(ie), (Le) => Le.id, (Le, Re) => {
        aa(Le, { get badge() {
          return e(Re);
        }, get blockLayout() {
          return f().blockLayout;
        } });
      });
      var dt = G(ut, 2), Rt = (Le) => {
        {
          let Re = d(() => e(we).positions.has("all"));
          ue(Le, () => e(Re));
        }
      };
      O(dt, (Le) => {
        var Re;
        e(Yt) && ((Re = f().subscriptions) == null ? void 0 : Re.position) === "above" && e(we).positions.size > 0 && Le(Rt);
      });
      var Nt = G(dt, 2);
      Dt(Nt, 17, () => e(Ue), (Le) => Le.key, (Le, Re) => {
        var en = Ie(), Rn = pe(en), Mn = (Wt) => {
          Rd(Wt, { get settings() {
            return e(zt);
          }, onReveal: () => {
            return zn = e(Re).bars, void (!I() && _e && zn.includes(_e) && qe({ dealBarId: _e.id, dealBarQuantity: Ce(_e), preselected: !0 }));
            var zn;
          }, children: (zn, jr) => {
            var Ii = Ie();
            Dt(pe(Ii), 17, () => e(Re).bars, (la) => la.id, (la, wa) => {
              Fe(la, () => e(wa));
            }), p(zn, Ii);
          }, $$slots: { default: !0 } });
        }, Dn = (Wt) => {
          var zn = Ie(), jr = pe(zn), Ii = (la) => {
            Fe(la, () => e(Re).bar);
          };
          O(jr, (la) => {
            e(Re).type === "visible" && la(Ii);
          }, !0), p(Wt, zn);
        };
        O(Rn, (Wt) => {
          e(Re).type === "scratch" && e(zt) ? Wt(Mn) : Wt(Dn, !1);
        }), p(Le, en);
      });
      var Ln = G(Nt, 2), Sn = (Le) => {
        {
          let Re = d(() => e(we).positions.has("all"));
          ue(Le, () => e(Re));
        }
      };
      O(Ln, (Le) => {
        var Re;
        e(Yt) && ((Re = f().subscriptions) == null ? void 0 : Re.position) === "below" && e(we).positions.size > 0 && Le(Sn);
      }), y(Pn);
      var xn = G(Pn, 2), Bn = (Le) => {
        Ua(Le, { get product() {
          return e(Ne);
        }, get productPersonalisation() {
          return e(rt).productPersonalisation;
        }, get selectedVariantIds() {
          return e($t);
        }, get quantity() {
          return e(kn);
        }, get addPersonalisationModal() {
          return f().addPersonalisationModal;
        }, onPersonalisationsChange: Ee, get initialValues() {
          return e(qt);
        } });
      };
      O(xn, (Le) => {
        var Re;
        e(At) && ((Re = e(rt)) != null && Re.productPersonalisation) && Le(Bn);
      });
      var Ht = G(xn, 2), sn = (Le) => {
        ue(Le);
      };
      O(Ht, (Le) => {
        var Re;
        e(Yt) && ((Re = f().subscriptions) == null ? void 0 : Re.position) === "below" && e(we).positions.size === 0 && Le(sn);
      });
      var Cn = G(Ht, 2), yn = (Le) => {
        var Re = Ok();
        Te(S(Re), () => u()("system.out_of_stock")), y(Re), p(Le, Re);
      };
      O(Cn, (Le) => {
        e(re) && (e(z).length > 1 || e(z)[0].quantity > 1) && Le(yn);
      });
      var $n = G(Cn, 2), an = (Le) => {
        Kd(Le, { get checkboxUpsells() {
          return f().checkboxUpsells;
        }, get dealBlock() {
          return f();
        }, get otherProducts() {
          return e(J);
        }, get complementaryProducts() {
          return e(U);
        }, get dealSellingPlan() {
          return e(nt);
        }, get dealBarQuantity() {
          return e(Ze);
        }, onChange: We });
      };
      O($n, (Le) => {
        !A() && f().checkboxUpsellsEnabled && f().checkboxUpsells && Le(an);
      });
      var pn = G($n, 2), Jn = (Le) => {
        Jd(Le, { get progressiveGifts() {
          return e(dn).progressiveGifts;
        }, get dealBlock() {
          return f();
        }, get otherProducts() {
          return e(J);
        }, get selectedDealBarIndex() {
          return e(ct);
        }, get sellingPlan() {
          return e(nt);
        }, onChange: ve, onUnlock: St, onSubscribe: bt });
      };
      O(pn, (Le) => {
        f().progressiveGiftsEnabled && e(dn).progressiveGifts && e(dn).progressiveGifts.layout !== "deal-bar" && Le(Jn);
      });
      var En = G(pn, 2), gl = (Le) => {
        {
          let Re = d(() => e(he).missingItemsCount > 0);
          sg(Le, { get collectionBreaks() {
            return f().collectionBreaks;
          }, get hasItemsToSelect() {
            return e(Re);
          } });
        }
      };
      O(En, (Le) => {
        f().collectionBreaksEnabled && Le(gl);
      });
      var im = G(En, 2), lm = (Le) => {
        og(Le, { get savingsSummary() {
          return f().savingsSummary;
        }, get totalFullPrice() {
          return e(Et).fullPrice;
        }, get totalDiscountedPrice() {
          return e(Et).discountedPrice;
        }, get quantity() {
          return e(Jt);
        }, get product() {
          return e(Ne);
        } });
      };
      O(im, (Le) => {
        var Re, en;
        !A() && f().savingsSummaryEnabled && f().savingsSummary && (Re = e(Et).saved, en = f().savingsSummary.hideWhenZeroSavings, Re > 0 || !en) && Le(lm);
      }), y(hn), be((Le, Re, en, Rn) => {
        kt = Lt(Pn, 1, "kaching-bundles__bars", null, kt, en), Ot = Tt(Pn, "", Ot, Rn);
      }, [() => ({ "kaching-bundles__block--horizontal": f().blockLayout === "horizontal", "kaching-bundles__block--grid": f().blockLayout === "grid", "kaching-bundles__block--plain": f().blockLayout === "plain" }), () => f().abTestVariantNumber ? ro(f().abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": f().blockLayout === "horizontal", "kaching-bundles__bars--grid": f().blockLayout === "grid", "kaching-bundles__bars--plain": f().blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(Kt), "kaching-bundles__bars--badge-border-all": e(we).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(we).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(we).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(we).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(we).positions.has("right") }), () => {
        var Le, Re;
        return { "--badge-border-thickness": `${(Le = e(we).thickness) != null ? Le : ""}px`, "--badge-border-gap": `${(Re = e(we).gap) != null ? Re : ""}px`, "--badge-border-gap-border": e(we).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(we).sideLength ? `${e(we).sideLength}px` : void 0, "--badge-border-wrap-color": e(He) };
      }]);
    }
    y(gn);
    var sm = G(gn, 2), om = (ue) => {
      eg(ue, { get shopCustomStyles() {
        return v().shopCustomStyles;
      }, get customStyles() {
        return f().customStyles;
      }, get dealBlockId() {
        return f().id;
      } });
    };
    O(sm, (ue) => {
      f().customStylesEnabled && ue(om);
    }), be((ue, Fe, kt, Ot) => {
      var Le;
      rr = Lt(hn, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, rr, ue), Pe(hn, "data-deal-block-id", f().id), Pe(hn, "data-ab-test-variant-id", f().abTestVariantId), Pe(hn, "data-ab-test-variant", Fe), Pe(hn, "data-selling-plan-id", (Le = e(nt)) == null ? void 0 : Le.id), Tt(hn, e(Ae));
    }, [() => ({ "kaching-bundles__block--horizontal": f().blockLayout === "horizontal", "kaching-bundles__block--grid": f().blockLayout === "grid", "kaching-bundles__block--plain": f().blockLayout === "plain" }), () => f().abTestVariantNumber ? ro(f().abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": f().blockLayout === "horizontal", "kaching-bundles__bars--grid": f().blockLayout === "grid", "kaching-bundles__bars--plain": f().blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(Kt), "kaching-bundles__bars--badge-border-all": e(we).positions.has("all"), "kaching-bundles__bars--badge-border-top": e(we).positions.has("top"), "kaching-bundles__bars--badge-border-bottom": e(we).positions.has("bottom"), "kaching-bundles__bars--badge-border-left": e(we).positions.has("left"), "kaching-bundles__bars--badge-border-right": e(we).positions.has("right") }), () => {
      var ue, Fe;
      return { "--badge-border-thickness": `${(ue = e(we).thickness) != null ? ue : ""}px`, "--badge-border-gap": `${(Fe = e(we).gap) != null ? Fe : ""}px`, "--badge-border-gap-border": e(we).gap ? "1px solid var(--bar-border-color, rgba(0, 0, 0, 0.3))" : "none", "--badge-border-min-length": e(we).sideLength ? `${e(we).sideLength}px` : void 0, "--badge-border-wrap-color": e(He) };
    }]), p(n, Qt);
    var cm = Xe(mn);
    return b(), cm;
  }
  customElements.define("kaching-bundles-block", Qe(cg, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this, this.innerHTML && (vr(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var Lk = $('<div class="kaching-bundles"><!></div>');
  function ug(n, t) {
    var r;
    Ke(t, !0);
    const a = m(t, "config", 7), l = m(t, "dealBlock", 7), o = m(t, "products", 23, () => []), c = m(t, "mediaImages", 7), s = m(t, "translations", 7), { setConfig: i } = Qa(a()), { setMoneyFormat: u } = mi(a().moneyFormat), { setTranslations: g } = Na(s()), { setMediaImages: b } = tl(c()), { setSwatchSettings: h } = Ki({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (r = l().showSelectedSwatchName) != null && r });
    Je(() => {
      i(a());
    }), Je(() => {
      u(a().moneyFormat, !!l().showPricesWithoutDecimals);
    }), Je(() => {
      g(s());
    }), Je(() => {
      b(c());
    }), Je(() => {
      var w;
      h({ swatchOptions: l().swatchOptions || [], swatchSize: l().swatchSize, swatchShape: l().swatchShape, showSelectedSwatchName: (w = l().showSelectedSwatchName) != null && w });
    });
    const v = d(() => l().dealBars.find((w) => w.dealBarType === pt.MixAndMatch));
    var _ = { get config() {
      return a();
    }, set config(w) {
      a(w), k();
    }, get dealBlock() {
      return l();
    }, set dealBlock(w) {
      l(w), k();
    }, get products() {
      return o();
    }, set products(w = []) {
      o(w), k();
    }, get mediaImages() {
      return c();
    }, set mediaImages(w) {
      c(w), k();
    }, get translations() {
      return s();
    }, set translations(w) {
      s(w), k();
    } }, f = Lk(), x = S(f), D = (w) => {
      Po(w, { get dealBlock() {
        return l();
      }, get dealBar() {
        return e(v);
      }, get products() {
        return o();
      }, onChoose: () => {
      } });
    };
    return O(x, (w) => {
      e(v) && w(D);
    }), y(f), p(n, f), Xe(_);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", Qe(ug, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  var jk = $('<div class="kaching-bundles"><!></div>');
  function dg(n, t) {
    Ke(t, !0);
    const r = m(t, "config", 7), a = m(t, "product", 7), l = m(t, "translations", 7), o = m(t, "addPersonalisationModal", 7), { setConfig: c } = Qa(r()), { setTranslations: s } = Na(l());
    Je(() => {
      c(r()), s(l());
    });
    const i = d(() => {
      var b, h;
      return (h = (b = a()) == null ? void 0 : b.variants) != null && h[0] ? [{ variant: a().variants[0], index: 0 }, { variant: a().variants[0], index: 1 }] : [];
    });
    var u = { get config() {
      return r();
    }, set config(b) {
      r(b), k();
    }, get product() {
      return a();
    }, set product(b) {
      a(b), k();
    }, get translations() {
      return l();
    }, set translations(b) {
      l(b), k();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(b) {
      o(b), k();
    } }, g = jk();
    return vo(S(g), { get product() {
      return a();
    }, get selectedVariants() {
      return e(i);
    }, get addPersonalisationModal() {
      return o();
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), y(g), p(n, g), Xe(u);
  }
  customElements.define("kaching-bundles-personalisation-modal", Qe(dg, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  function Ek(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var Rk = $('<img class="kaching-bundles-sticky-atc__image"/>'), Nk = $('<button class="kaching-bundles-sticky-atc__button"><!></button>'), Qk = $('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function gg(n, t) {
    var r;
    Ke(t, !0);
    const a = () => $e(Ha, "$selectedDealBarStore", o), l = () => $e(_, "$translate", o), [o, c] = vt(), s = m(t, "component", 7), i = m(t, "config", 7), u = m(t, "stickyAtc", 7), g = m(t, "translations", 7), b = m(t, "product", 7), h = m(t, "dealBlock", 7), { setConfig: v } = Qa(i()), { translate: _, setTranslations: f } = Na(g()), { formatPrice: x, setMoneyFormat: D } = mi(i().moneyFormat, (r = h()) == null ? void 0 : r.showPricesWithoutDecimals);
    Je(() => {
      v(i());
    }), Je(() => {
      var X;
      D(i().moneyFormat, !!((X = h()) != null && X.showPricesWithoutDecimals));
    }), Je(() => {
      f(g());
    });
    const w = d(() => ((X) => {
      const V = { "kaching-bundles-sticky-atc-background-color": je(X.backgroundColor), "kaching-bundles-sticky-atc-title-color": je(X.titleColor), "kaching-bundles-sticky-atc-button-color": je(X.buttonColor), "kaching-bundles-sticky-atc-button-text-color": je(X.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": X.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": X.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": cr(X.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": or(X.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": cr(X.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": or(X.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": X.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": X.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": X.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": X.buttonCornerRadius + "px" };
      if (X.sameSizeOnMobile || !X.mobile) return bn(V);
      const Z = X.mobile;
      return bn({ ...V, "kaching-bundles-sticky-atc-image-display": X.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-image-display-mobile": Z.productPhotoSize > 0 ? "block" : "none", "kaching-bundles-sticky-atc-title-font-size-mobile": Z.titleFontSize + "px", "kaching-bundles-sticky-atc-button-font-size-mobile": Z.buttonFontSize + "px", "kaching-bundles-sticky-atc-product-photo-size-mobile": Z.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding-mobile": Z.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius-mobile": Z.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius-mobile": Z.buttonCornerRadius + "px" });
    })(u())), I = d(() => {
      var X;
      return ((X = a()) == null ? void 0 : X.pricing.fullPrice) || b().variants[0].compareAtPrice || b().variants[0].price;
    }), L = d(() => {
      var X;
      return ((X = a()) == null ? void 0 : X.pricing.discountedPrice) || b().variants[0].price;
    }), Q = d(() => {
      var X;
      return ((X = a()) == null ? void 0 : X.quantity) || 1;
    }), R = d(() => un({ priceFormatter: $e(x, "$formatPrice", o), product: b(), totalFullPrice: e(I), totalDiscountedPrice: e(L), quantity: e(Q), unitQuantity: null })), K = d(() => e(R)(l()(u().title))), C = new Iv("(width < 750px)"), ne = d(() => (C.current && !u().sameSizeOnMobile && u().mobile ? u().mobile.productPhotoSize : u().productPhotoSize) > 0);
    var A = { get component() {
      return s();
    }, set component(X) {
      s(X), k();
    }, get config() {
      return i();
    }, set config(X) {
      i(X), k();
    }, get stickyAtc() {
      return u();
    }, set stickyAtc(X) {
      u(X), k();
    }, get translations() {
      return g();
    }, set translations(X) {
      g(X), k();
    }, get product() {
      return b();
    }, set product(X) {
      b(X), k();
    }, get dealBlock() {
      return h();
    }, set dealBlock(X) {
      h(X), k();
    } }, E = Qk(), oe = S(E), J = S(oe), U = S(J), M = (X) => {
      var V = Rk();
      be(() => {
        Pe(V, "src", b().image), Pe(V, "alt", b().title);
      }), p(X, V);
    };
    O(U, (X) => {
      e(ne) && X(M);
    });
    var B = G(U, 2);
    Te(S(B), () => e(K)), y(B), y(J);
    var j = G(J, 2), N = (X) => {
      var V = Nk();
      V.__click = [Ek, s], Te(S(V), () => l()(u().buttonText)), y(V), p(X, V);
    };
    O(j, (X) => {
      u().buttonText && X(N);
    }), y(oe), y(E), be(() => Tt(oe, e(w))), p(n, E);
    var H = Xe(A);
    return c(), H;
  }
  On(["click"]), customElements.define("kaching-bundles-sticky-atc", Qe(gg, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), wn(this, "component"), this.component = this;
    }
  }));
  const Wk = Ju, Uk = Wu, Hk = cg, Zk = ug, Jk = dg, Yk = gg, Kk = Bd.element, Xk = Wk.element, em = Uk.element, tm = Hk.element, nm = Zk.element, rm = Jk.element, am = Yk.element;
  return Ft.ChooseMultipleGifts = em, Ft.ChooseProduct = Xk, Ft.DealBar = Kk, Ft.DealBlock = tm, Ft.MixAndMatchChooseProduct = nm, Ft.PersonalisationModal = rm, Ft.StickyAtc = am, Object.defineProperty(Ft, Symbol.toStringTag, { value: "Module" }), Ft;
})({});
