
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.C7jITNoQ.js","/cdn/shopifycloud/checkout-web/assets/c1/app.li2sGVRk.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.D46pxUTm.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.K-es9vHt.js","/cdn/shopifycloud/checkout-web/assets/c1/color-contrast-colorContrast.BO7iAaAn.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.D8bt80uI.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.CCBt-vXM.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.Dt8CVFNH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory.CXEqQSPJ.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.DyzScEZE.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.CDLE7Yyt.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.0LC33C-U.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.BQM1KU3l.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.DO7eReV_.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.DrK651Nv.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-paymentMethodFromPaymentLines.BRvqN_eY.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.a7Rvb6WG.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.C-_VEie-.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.C7os25FL.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.WYxEKaeu.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.DCT_qskL.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BWTljioB.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.CKwNBn71.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.3ziAo-3h.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.klh9GaCa.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.aCq35fGq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints.BnxJ5nDn.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.CFpfZH-U.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.BfhLmvU-.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSandboxTelemetry.CBse3k9d.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.BWnfulM8.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.BFZMas7L.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.BdC9sE8J.js","/cdn/shopifycloud/checkout-web/assets/c1/localization-index.oJy_kqGP.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.Dv3mgE-l.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.CjSLANzK.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.CxKGxz_p.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment.D7vLWzbB.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.khJAcE4A.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.D3W3f_ta.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.BOrodW9M.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.CnxeNuhh.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.DzBNfid6.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.D0t7zaBf.js","/cdn/shopifycloud/checkout-web/assets/c1/components-useVaultedMsiInstallments.59KVipgC.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.CupHdJAc.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-context.DPdHjF5X.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.GwbShEZv.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.CjFw-__v.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.yLJ1_AKG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useFilteredShopPayAvailablePaymentMethods.BMP7oG5J.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.Cderpc_6.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.D30ckYlB.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.ClS7J27_.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.C3cEVuH6.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.DhDEXlhD.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.B4qCTW-h.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-hooks.CTXKHpaB.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.DtbLDRm6.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-monorail.BKBbVY9B.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscount.DrnLW2ab.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.D_IADLVl.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.BSLs-8-m.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.CvMIYlR3.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.DAqZuHA5.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.B9IF52Pu.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.BsPT63EX.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.BAS7v_rm.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-rates-progressiveShippingRatesLoading.DD5KE-BV.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.C3O9iLL0.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.BhJfEX0o.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.BCoaF3Fo.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.-5DNiLhk.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.lUdJzOrz.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.BSufEGdV.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.CMcbAGQT.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.SJccg0i1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/colorContrast.DwqzaEQ_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useReplaceShopPayInHistory.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.Nm18huLz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.CfwUdlpL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CEr7nb5K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.CXbHQpsO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useVaultedMsiInstallments.BjkzEj17.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CS-PIQ3P.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/cvvBridge.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.jvH8TQL4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.CLVwzp6i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/progressiveShippingRatesLoading.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.CGkrPwWj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.CRAl4z62.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  