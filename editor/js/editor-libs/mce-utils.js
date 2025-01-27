/**
 * Find and return the `example-choice` parent of the provided element
 * @param {Object} element - The child element for which to find the
 * `example-choice` parent
 *
 * @return The parent `example-choice` element
 */
export function findParentChoiceElem(element) {
  var parent = element.parentElement;
  var parentClassList = parent.classList;
  while (parent && !parentClassList.contains("example-choice")) {
    // get the next parent
    parent = parent.parentElement;
    // get the new parent's `classList`
    parentClassList = parent.classList;
  }
  return parent;
}

/**
 * Creates a temporary element and tests whether the passed
 * property exists on the `style` property of the element.
 * @param {Object} dataset = The dataset from which to get the property
 */
export function isPropertySupported(dataset) {
  /* If there are no 'property' attributes,
           there is nothing to test, so return true. */
  if (dataset["property"] === undefined) {
    return true;
  }

  // `property` may be a space-separated list of properties.
  var properties = dataset["property"].split(" ");
  /* Iterate through properties: if any of them apply,
        the browser supports this example. */
  var supported = false;
  var tmpElem = document.createElement("div");

  for (var i = 0, l = properties.length; i < l; i++) {
    if (tmpElem.style[properties[i]] !== undefined) {
      supported = true;
    }
  }

  return supported;
}

/**
 * Interrupts the default click event on external links inside
 * the iframe and opens them in a new tab instead
 * @param {Array} externalLinks - all external links inside the iframe
 */
export function openLinksInNewTab(externalLinks) {
  externalLinks.forEach(function (externalLink) {
    externalLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.open(externalLink.href);
    });
  });
}

/**
 * Interrupts the default click event on relative links inside
 * the iframe and scrolls to the targeted anchor
 * @param {Object} rootElement - root or body element, that contains referenced links
 * @param {Array} relativeLinks - all relative links inside the iframe
 */
export function scrollToAnchors(rootElement, relativeLinks) {
  relativeLinks.forEach(function (relativeLink) {
    relativeLink.addEventListener("click", function (event) {
      event.preventDefault();
      rootElement.querySelector(relativeLink.hash).scrollIntoView();
    });
  });
}

/**
 * Hides the default example and shows the custom block
 * @param {object} customBlock - The HTML section to show
 */
export function showCustomExampleHTML(customBlock) {
  var defaultExample = document.getElementById("default-example");
  defaultExample.classList.add("hidden");
  defaultExample.setAttribute("aria-hidden", true);

  customBlock.classList.remove("hidden");
  customBlock.setAttribute("aria-hidden", false);
}
